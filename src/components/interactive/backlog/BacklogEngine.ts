// Canvas simulation behind the homepage "backlog zero" graph: a contribution-
// style grid of tickets that shatter when the pointer sweeps through them.

type Cell = {
  col: number
  row: number
  level: number
  alive: boolean
  /** Displacement from neighbouring breaks; decays every frame. */
  ox: number
  oy: number
  /** Entrance progress; negative values stagger the fill-in. */
  appear: number
}

type Piece = {
  x: number
  y: number
  s: number
  color: string
  vx: number
  vy: number
  r: number
  vr: number
  life: number
  decay: number
  pop: number
}

const ROWS = 7
const LEVEL_THRESHOLDS = [0.22, 0.47, 0.69, 0.87]
const DAY_LABELS = ['Mon', 'Wed', 'Fri']
const LABEL_WIDTH = 30
const TOP = 22

type EngineOptions = {
  /** Called whenever the number of open tickets changes. */
  onCountChange: (count: number) => void
}

export class BacklogEngine {
  private ctx: CanvasRenderingContext2D
  private cells: Cell[] = []
  private pieces: Piece[] = []
  private palette: string[] = []
  private labelColor = '#4f535c'
  private ptr = {
    x: -999,
    y: -999,
    px: -999,
    py: -999,
    vx: 0,
    vy: 0,
    inside: false,
  }
  private sweep: { col: number } | null = null
  private raf = 0
  private observer: ResizeObserver | null = null
  private reduced: boolean
  private dpr = 1
  private w = 0
  private h = 0
  private step = 18
  private size = 14
  private cols = 0
  private ox = 0
  private count = -1

  constructor(
    private canvas: HTMLCanvasElement,
    private options: EngineOptions
  ) {
    this.ctx = canvas.getContext('2d')!
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.readTheme()
    canvas.addEventListener('pointermove', this.onMove)
    canvas.addEventListener('pointerdown', this.onMove)
    canvas.addEventListener('pointerleave', this.onLeave)
    canvas.addEventListener('pointercancel', this.onLeave)
    this.observer = new ResizeObserver(() => this.layout())
    this.observer.observe(canvas)
    this.layout(true)
    this.raf = requestAnimationFrame(this.tick)
  }

  destroy() {
    cancelAnimationFrame(this.raf)
    this.observer?.disconnect()
    this.canvas.removeEventListener('pointermove', this.onMove)
    this.canvas.removeEventListener('pointerdown', this.onMove)
    this.canvas.removeEventListener('pointerleave', this.onLeave)
    this.canvas.removeEventListener('pointercancel', this.onLeave)
  }

  /** Sweep left to right clearing everything, refilling first if empty. */
  runAgents() {
    if (!this.cells.some((c) => c.alive)) this.fill()
    this.sweep = { col: -2 }
  }

  reset() {
    this.sweep = null
    this.fill()
  }

  /** Legend swatches, lightest to darkest. */
  static paletteFor(accent: string, empty: string) {
    const [r, g, b] = parseColor(accent)
    const mix = (t: number) =>
      `rgb(${[r, g, b].map((v) => Math.round(v + (255 - v) * t)).join(',')})`

    return [empty, mix(0.8), mix(0.55), mix(0.28), mix(0)]
  }

  private readTheme() {
    const styles = getComputedStyle(this.canvas)
    const accent = styles.getPropertyValue('--accent').trim() || '#4a51f2'
    const empty = styles.getPropertyValue('--surface-muted').trim() || '#eef0f1'

    this.palette = BacklogEngine.paletteFor(accent, empty)
    this.labelColor =
      styles.getPropertyValue('--muted').trim() || this.labelColor
  }

  private onMove = (e: PointerEvent) => {
    const rect = this.canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const t = this.ptr

    if (!t.inside) {
      t.px = x
      t.py = y
    }
    t.vx = x - t.x
    t.vy = y - t.y
    t.x = x
    t.y = y
    t.inside = true
  }

  private onLeave = () => {
    Object.assign(this.ptr, {
      inside: false,
      x: -999,
      px: -999,
      y: -999,
      py: -999,
    })
  }

  private layout(force = false) {
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    const w = this.canvas.clientWidth
    const h = this.canvas.clientHeight

    this.canvas.width = Math.round(w * dpr)
    this.canvas.height = Math.round(h * dpr)
    Object.assign(this, { dpr, w, h })
    this.step = w < 520 ? 15 : 18
    this.size = this.step - 4

    const cols = Math.max(
      8,
      Math.min(53, Math.floor((w - LABEL_WIDTH) / this.step))
    )

    this.ox = LABEL_WIDTH + Math.floor((w - LABEL_WIDTH - cols * this.step) / 2)
    if (force || cols !== this.cols) {
      this.cols = cols
      this.fill()
    }
  }

  private fill() {
    this.cells = []
    for (let col = 0; col < this.cols; col++) {
      for (let row = 0; row < ROWS; row++) {
        const r = Math.random()
        const level = LEVEL_THRESHOLDS.findIndex((t) => r < t)
        const lvl = level === -1 ? 4 : level

        this.cells.push({
          col,
          row,
          level: lvl,
          alive: lvl > 0,
          ox: 0,
          oy: 0,
          appear: this.reduced ? 1 : -(col * 0.012 + row * 0.02),
        })
      }
    }
    this.pieces = []
    this.syncCount()
  }

  private syncCount() {
    const n = this.cells.reduce((a, c) => a + (c.alive ? 1 : 0), 0)

    if (n !== this.count) {
      this.count = n
      this.options.onCountChange(n)
    }
  }

  private cellPos(cell: Cell) {
    return { x: this.ox + cell.col * this.step, y: TOP + cell.row * this.step }
  }

  private breakCell(cell: Cell, fx: number, fy: number) {
    cell.alive = false

    const { x, y } = this.cellPos(cell)
    const cx = x + this.size / 2
    const cy = y + this.size / 2
    const d = Math.hypot(cx - fx, cy - fy) || 1
    const dx = (cx - fx) / d
    const dy = (cy - fy) / d
    const t = this.ptr
    const push = Math.min(10, Math.hypot(t.vx, t.vy)) * 0.25
    const color = this.palette[cell.level]
    const m = this.reduced ? 0 : 1
    const sp = (1.6 + Math.random() * 1.8 + push) * m

    this.pieces.push({
      x: cx,
      y: cy,
      s: this.size,
      color,
      vx: dx * sp + t.vx * 0.15 * m,
      vy: dy * sp - 1.4 * m + t.vy * 0.15 * m,
      r: 0,
      vr: (Math.random() - 0.5) * 0.5 * m,
      life: 1,
      decay: 0.028 + Math.random() * 0.012,
      pop: 1,
    })
    if (!this.reduced) {
      for (let i = 0; i < 3; i++) {
        const a = Math.random() * Math.PI * 2
        const v = 1.5 + Math.random() * 2.5

        this.pieces.push({
          x: cx,
          y: cy,
          s: 3 + Math.random() * 2,
          color,
          vx: Math.cos(a) * v + dx,
          vy: Math.sin(a) * v - 1,
          r: 0,
          vr: (Math.random() - 0.5) * 0.6,
          life: 1,
          decay: 0.04 + Math.random() * 0.02,
          pop: 0,
        })
      }
    }
    // Nudge nearby tickets away from the break.
    for (const n of this.cells) {
      if (!n.alive) continue
      const ex = n.col - cell.col
      const ey = n.row - cell.row
      const dd = ex * ex + ey * ey

      if (dd > 0 && dd <= 5) {
        const k = 2.2 / dd

        n.ox += ex * k
        n.oy += ey * k
      }
    }
  }

  private roundRect(x: number, y: number, s: number, r: number) {
    const { ctx } = this

    ctx.beginPath()
    if (ctx.roundRect) ctx.roundRect(x, y, s, s, r)
    else ctx.rect(x, y, s, s)
    ctx.fill()
  }

  private tick = () => {
    this.raf = requestAnimationFrame(this.tick)
    if (!this.w) return

    const { ctx, ptr: t } = this
    const R = this.w < 520 ? 18 : 22
    const half = this.size / 2
    let broke = false

    if (t.inside) {
      // Break every ticket within R of the segment the pointer moved along.
      const abx = t.x - t.px
      const aby = t.y - t.py
      const ab2 = abx * abx + aby * aby || 1

      for (const cell of this.cells) {
        if (!cell.alive || cell.appear < 1) continue
        const p = this.cellPos(cell)
        const cx = p.x + half
        const cy = p.y + half
        const u = Math.max(
          0,
          Math.min(1, ((cx - t.px) * abx + (cy - t.py) * aby) / ab2)
        )
        const qx = t.px + abx * u
        const qy = t.py + aby * u

        if (Math.hypot(cx - qx, cy - qy) < R) {
          this.breakCell(cell, qx, qy)
          broke = true
        }
      }
      t.px = t.x
      t.py = t.y
      t.vx *= 0.6
      t.vy *= 0.6
    }

    if (this.sweep) {
      this.sweep.col += 0.55
      const sx = this.ox + this.sweep.col * this.step

      for (const cell of this.cells) {
        if (cell.alive && cell.col <= this.sweep.col && Math.random() < 0.35) {
          const p = this.cellPos(cell)

          this.breakCell(
            cell,
            sx - this.step,
            p.y + half + (Math.random() - 0.5) * 20
          )
          broke = true
        }
      }
      if (this.sweep.col > this.cols + 4 && !this.cells.some((c) => c.alive))
        this.sweep = null
    }
    if (broke) this.syncCount()

    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)
    ctx.clearRect(0, 0, this.w, this.h)
    this.drawLabels(half)

    for (const cell of this.cells) {
      const p = this.cellPos(cell)

      ctx.fillStyle = this.palette[0]
      this.roundRect(p.x, p.y, this.size, 3)
      if (!cell.alive) continue
      if (cell.appear < 1) cell.appear = Math.min(1, cell.appear + 0.08)
      const a = Math.max(0, cell.appear)

      if (a <= 0) continue
      cell.ox *= 0.82
      cell.oy *= 0.82
      const sc = a < 1 ? 0.4 + 0.6 * a + Math.sin(a * Math.PI) * 0.15 : 1
      const s = this.size * sc
      const o = (this.size - s) / 2

      ctx.fillStyle = this.palette[cell.level]
      this.roundRect(p.x + o + cell.ox, p.y + o + cell.oy, s, 3)
    }

    const gravity = this.reduced ? 0 : 0.22

    this.pieces = this.pieces.filter((pc) => pc.life > 0)
    for (const pc of this.pieces) {
      pc.vy += gravity
      pc.vx *= 0.97
      pc.x += pc.vx
      pc.y += pc.vy
      pc.r += pc.vr
      pc.life -= pc.decay
      if (pc.pop > 0) pc.pop = Math.max(0, pc.pop - 0.12)
      const s = pc.s * (0.5 + 0.5 * pc.life) * (1 + pc.pop * 0.3)

      ctx.save()
      ctx.globalAlpha = Math.max(0, pc.life)
      ctx.translate(pc.x, pc.y)
      ctx.rotate(pc.r)
      ctx.fillStyle = pc.color
      this.roundRect(-s / 2, -s / 2, s, Math.min(3, s / 3))
      ctx.restore()
    }

    if (t.inside) {
      ctx.globalAlpha = 1
      ctx.strokeStyle = this.palette[3]
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(t.x, t.y, R, 0, Math.PI * 2)
      ctx.stroke()
    }
  }

  private drawLabels(half: number) {
    const { ctx } = this
    // The graph covers the last twelve months, ending with the current one.
    const now = new Date()
    const months = Array.from({ length: 12 }, (_, i) =>
      new Date(now.getFullYear(), now.getMonth() - 11 + i).toLocaleString(
        'en-US',
        {
          month: 'short',
        }
      )
    )
    const every = Math.max(4, Math.round(this.cols / 12))

    ctx.font = `11px ${getComputedStyle(this.canvas).getPropertyValue('--font-mono') || 'monospace'}`
    ctx.fillStyle = this.labelColor
    ctx.textBaseline = 'middle'
    for (let col = 0, m = 0; col < this.cols - 2; col += every, m++)
      ctx.fillText(months[m % 12], this.ox + col * this.step, 9)
    DAY_LABELS.forEach((d, i) =>
      ctx.fillText(d, 0, TOP + (1 + i * 2) * this.step + half)
    )
  }
}

function parseColor(color: string): [number, number, number] {
  const hex = color.replace('#', '')

  if (/^[0-9a-f]{3}([0-9a-f]{3})?$/i.test(hex)) {
    const full = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex
    const n = parseInt(full, 16)

    return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
  }

  const [r = 74, g = 81, b = 242] = (color.match(/\d+/g) ?? []).map(Number)

  return [r, g, b]
}
