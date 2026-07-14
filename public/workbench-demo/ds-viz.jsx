/* Visualization templates — donut "Cluster overview" cards and the Evals
   analytics dashboard. Pure SVG, no chart libraries. */

/* ─────────────────────────  Donut (cluster overview)  ─────────────────── */

/* Two concentric donut rings, each driven by an array of {value, color}.
   Values are normalized to sum-to-1 per ring. */
const DonutRings = ({ size = 220, outer, inner }) => {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.42;
  const innerR = size * 0.30;
  const outerW = size * 0.10;
  const innerW = size * 0.07;

  const ringPaths = (data, r, sw) => {
    const total = data.reduce((s, d) => s + d.value, 0);
    let acc = -Math.PI / 2; // start at 12 o'clock
    return data.map((d, i) => {
      const frac = d.value / total;
      const a0 = acc;
      const a1 = acc + frac * Math.PI * 2;
      acc = a1;
      const large = frac > 0.5 ? 1 : 0;
      // shorten endpoints slightly for the dark seam between slices
      const seam = 0.012; // radians
      const s0 = a0 + seam;
      const s1 = a1 - seam;
      const x0 = cx + r * Math.cos(s0);
      const y0 = cy + r * Math.sin(s0);
      const x1 = cx + r * Math.cos(s1);
      const y1 = cy + r * Math.sin(s1);
      const path = `M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1}`;
      return <path key={i} d={path} stroke={d.color} strokeWidth={sw} fill="none" strokeLinecap="butt"/>;
    });
  };

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {ringPaths(outer, outerR, outerW)}
      {ringPaths(inner, innerR, innerW)}
    </svg>
  );
};

const ClusterOverviewCard = ({ outer, inner, total = 31, label = "Clusters" }) => (
  <div className="pc-card" style={{
    padding: 0, display:'flex', flexDirection:'column', minWidth:0,
  }}>
    <div style={{
      padding:'14px var(--sp-medium)',
      borderBottom:'1px solid var(--border)',
      display:'flex', alignItems:'center', justifyContent:'space-between',
    }}>
      <span style={{
        fontFamily:'var(--font-semi)', fontSize:13, fontWeight:500,
        letterSpacing:'0.08em', color:'var(--text)', textTransform:'uppercase',
      }}>Cluster overview</span>
      <span style={{color:'var(--icon-xlight)', display:'inline-flex'}}>
        <InfoIcon size={16}/>
      </span>
    </div>
    <div style={{
      padding:'var(--sp-large)',
      display:'grid', placeItems:'center',
      position:'relative',
    }}>
      <DonutRings outer={outer} inner={inner} />
      <div style={{
        position:'absolute', inset:0,
        display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
        pointerEvents:'none',
      }}>
        <div style={{
          fontFamily:'var(--font-sans)', fontSize:32, fontWeight:600,
          color:'var(--text)', lineHeight:1,
        }}>{total}</div>
        <div style={{
          fontFamily:'var(--font-sans)', fontSize:14,
          color:'var(--text-light)', marginTop:4,
        }}>{label}</div>
      </div>
    </div>
  </div>
);

/* The viz palette referenced from the screenshot — close to Plural's pastel set */
const VIZ = {
  blue:   "#5DBDF5",
  yellow: "#F5E78E",
  pink:   "#F38E92",
  green:  "#7CE8B9",
  purple: "#BCB8FF",
};

const TplClusterDonuts = () => (
  <div style={{padding:'var(--sp-large)', background:'var(--grey-950)', height:'100%', overflow:'auto'}}>
    <div className="pc-tabs" style={{marginBottom:'var(--sp-large)'}}>
      <button className="pc-tab pc-tab--active">Security overview</button>
      <button className="pc-tab">Policies</button>
      <button className="pc-tab">Vulnerability reports</button>
    </div>
    <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'var(--sp-medium)'}}>
      <ClusterOverviewCard
        outer={[
          { value: 2,  color: VIZ.blue },
          { value: 1,  color: VIZ.pink },
          { value: 4,  color: VIZ.green },
          { value: 2,  color: VIZ.purple },
          { value: 1.5,color: VIZ.yellow },
        ]}
        inner={[
          { value: 7, color: VIZ.green },
          { value: 4, color: VIZ.purple },
        ]}
      />
      <ClusterOverviewCard
        outer={[
          { value: 1.5, color: VIZ.blue },
          { value: 1,   color: VIZ.pink },
          { value: 3,   color: VIZ.green },
          { value: 2,   color: VIZ.purple },
          { value: 1.5, color: VIZ.yellow },
        ]}
        inner={[
          { value: 6, color: VIZ.green },
          { value: 5, color: VIZ.purple },
        ]}
      />
      <ClusterOverviewCard
        outer={[
          { value: 1.5, color: VIZ.blue },
          { value: 1,   color: VIZ.pink },
          { value: 2,   color: VIZ.green },
          { value: 3,   color: VIZ.purple },
          { value: 1.2, color: VIZ.yellow },
        ]}
        inner={[
          { value: 5, color: VIZ.green },
          { value: 6, color: VIZ.purple },
        ]}
      />
    </div>
  </div>
);

/* ─────────────────────────  Evals analytics dashboard  ─────────────────── */

const Kpi = ({ label, value, delta, deltaKind = "down", footer, valueColor }) => (
  <div className="pc-card" style={{padding:'var(--sp-medium)', display:'flex', flexDirection:'column', gap:6, minWidth:0}}>
    <div style={{
      fontFamily:'var(--font-semi)', fontSize:11, letterSpacing:'0.08em',
      color:'var(--text-light)', textTransform:'uppercase',
    }}>{label}</div>
    <div style={{
      fontFamily:'var(--font-sans)', fontSize:30, fontWeight:600, lineHeight:1.1,
      color: valueColor || 'var(--text)',
    }}>{value}</div>
    {delta != null ? (
      <div style={{display:'flex', alignItems:'center', gap:6, fontSize:12, color:'var(--text-light)'}}>
        <span style={{
          color: deltaKind === 'up-good' ? 'var(--text-success)'
               : deltaKind === 'up'      ? 'var(--text-danger)'
               : deltaKind === 'down'    ? 'var(--text-danger)'
               : 'var(--text-success)',
          display:'inline-flex', alignItems:'center',
        }}>
          {(deltaKind === 'up-good' || deltaKind === 'up') ? '↑' : '↓'} {delta}
        </span>
        <span>since last week</span>
      </div>
    ) : footer ? (
      <div style={{fontSize:12, color:'var(--text-light)'}}>{footer}</div>
    ) : null}
  </div>
);

const RangeToggle = ({ value = '1D' }) => (
  <div style={{
    display:'inline-flex', alignItems:'center',
    background:'var(--fill-zero)',
    border:'1px solid var(--border-input)',
    borderRadius:'var(--r-medium)',
    padding:2,
    fontFamily:'var(--font-sans)', fontSize:12, color:'var(--text-light)',
  }}>
    {['1D','1M','1Y','Max'].map(v => (
      <span key={v} style={{
        padding:'4px 10px', borderRadius:4,
        background: v === value ? 'var(--fill-two)' : 'transparent',
        color: v === value ? 'var(--text)' : 'var(--text-light)',
        cursor:'pointer',
      }}>{v}</span>
    ))}
  </div>
);

const LegendChip = ({ color, label }) => (
  <span style={{
    display:'inline-flex', alignItems:'center', gap:6,
    background:'var(--fill-two)',
    border:'1px solid var(--border-input)',
    borderRadius:'var(--r-small)',
    padding:'4px 10px',
    fontFamily:'var(--font-sans)', fontSize:12, color:'var(--text)',
  }}>
    <span style={{width:10, height:10, borderRadius:2, background:color}}/>
    {label}
  </span>
);

/* Smooth line through points using a Catmull-Rom -> cubic Bezier conversion. */
const smoothPath = (pts) => {
  if (pts.length < 2) return '';
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2[0]} ${p2[1]}`;
  }
  return d;
};

const LineChart = ({ width = 700, height = 280, series, padding = { l: 36, r: 16, t: 12, b: 28 }, xLabels = 8, yGuides = 4 }) => {
  const W = width - padding.l - padding.r;
  const H = height - padding.t - padding.b;

  // gather domain from values directly (each series is array of numbers)
  const all = series.flatMap(s => s.data);
  const yMin = Math.min(...all) - 5;
  const yMax = Math.max(...all) + 5;
  const span = yMax - yMin;
  const xCount = Math.max(...series.map(s => s.data.length));

  const xFor = (i, n) => padding.l + (i / (n - 1)) * W;
  const yFor = v => padding.t + H - ((v - yMin) / span) * H;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{display:'block'}}>
      {/* Y guide lines */}
      {Array.from({length: yGuides}).map((_, i) => {
        const y = padding.t + (i / (yGuides - 1)) * H;
        return (
          <g key={i}>
            <line x1={padding.l} x2={width - padding.r} y1={y} y2={y} stroke="var(--border)" strokeWidth="1"/>
            <text x={padding.l - 8} y={y + 4} textAnchor="end" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-light)">00</text>
          </g>
        );
      })}
      {/* X labels — placeholder "00"s */}
      {Array.from({length: xLabels}).map((_, i) => {
        const x = padding.l + (i / (xLabels - 1)) * W;
        return (
          <text key={i} x={x} y={height - 8} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-light)">00</text>
        );
      })}
      {/* Series */}
      {series.map((s, idx) => {
        const pts = s.data.map((v, i) => [xFor(i, s.data.length), yFor(v)]);
        return (
          <path key={idx} d={smoothPath(pts)} fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        );
      })}
    </svg>
  );
};

const ChartCard = ({ title, footer, children, headerExtras }) => (
  <div className="pc-card" style={{padding:'var(--sp-medium) var(--sp-medium) var(--sp-medium)', display:'flex', flexDirection:'column', minWidth:0}}>
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'var(--sp-medium)'}}>
      <div style={{fontFamily:'var(--font-sans)', fontSize:16, fontWeight:600, color:'var(--text)'}}>{title}</div>
      <RangeToggle />
    </div>
    {headerExtras}
    {children}
    {footer && (
      <div style={{marginTop:'var(--sp-small)', fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)'}}>{footer}</div>
    )}
  </div>
);

/* Horizontal-bar list — workbench averages */
const HBarRow = ({ label, value, max = 10, color }) => {
  const pct = (value / max) * 100;
  return (
    <div style={{display:'grid', gridTemplateColumns:'180px 1fr 40px', alignItems:'center', gap:'var(--sp-medium)', padding:'8px 0'}}>
      <div style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--text-light)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
        {label}
      </div>
      <div style={{position:'relative', height:6, background:'var(--fill-two)', borderRadius:999}}>
        <div style={{
          position:'absolute', left:0, top:0, bottom:0,
          width:`${pct}%`,
          background:color, borderRadius:999,
        }}/>
      </div>
      <div style={{fontFamily:'var(--font-mono)', fontSize:12, color, textAlign:'right'}}>{value.toFixed(1)}</div>
    </div>
  );
};

const EvalsDashboard = () => (
  <div style={{padding:'var(--sp-large)', background:'var(--grey-950)', height:'100%', overflow:'auto', display:'flex', flexDirection:'column', gap:'var(--sp-medium)'}}>
    {/* Tabs row + gear */}
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div className="pc-tabs">
        <button className="pc-tab">Workbenches</button>
        <button className="pc-tab">Integrations</button>
        <button className="pc-tab">Configured Tools</button>
        <button className="pc-tab pc-tab--active">Evals</button>
      </div>
      <button className="pc-icon-btn" style={{border:'1px solid var(--border-input)'}}>
        <GearIcon size={14}/>
      </button>
    </div>

    {/* KPI row */}
    <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:'var(--sp-medium)'}}>
      <Kpi label="PRs merged"             value="600"      footer="Over lifetime" />
      <Kpi label="PR merge rate (7D)"     value="74%"      delta="3%"    deltaKind="down" />
      <Kpi label="Avg grade"              value="7.8"      delta="0.4%"  deltaKind="up-good" valueColor="var(--text-success)" />
      <Kpi label="Total cost"             value="$583.23"  delta="20%"   deltaKind="up" />
      <Kpi label="Workbench eval enabled" value="24"       footer="2 workbenches not enabled" />
    </div>

    {/* Charts row */}
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--sp-medium)'}}>
      <ChartCard
        title="Average workbenches grades"
        footer="Shows the average workbench grades over time."
        headerExtras={
          <div style={{display:'flex', flexWrap:'wrap', gap:'var(--sp-xsmall)', marginBottom:'var(--sp-medium)'}}>
            <LegendChip color="#7CE8B9" label="Workbench 1"/>
            <LegendChip color="#A6E5F5" label="Workbench 2"/>
            <LegendChip color="#33B4FF" label="Workbench 3"/>
            <LegendChip color="#F38E92" label="Workbench 4"/>
            <LegendChip color="#9A8CFF" label="Workbench 5"/>
            <LegendChip color="#F5E78E" label="Workbench 6"/>
          </div>
        }
      >
        <LineChart
          width={620} height={260}
          series={[
            { color:"#7CE8B9", data:[55, 50, 45, 50, 60, 70, 78, 80, 82, 78] },
            { color:"#A6E5F5", data:[60, 55, 45, 40, 45, 50, 55, 50, 45, 65] },
            { color:"#33B4FF", data:[40, 42, 50, 60, 65, 65, 58, 50, 45, 50] },
            { color:"#F38E92", data:[20, 30, 50, 55, 50, 45, 40, 35, 30, 30] },
            { color:"#9A8CFF", data:[35, 38, 40, 45, 50, 55, 60, 65, 70, 75] },
            { color:"#F5E78E", data:[20, 18, 22, 28, 30, 25, 23, 25, 27, 28] },
          ]}
        />
      </ChartCard>

      <ChartCard
        title="PR merge rate"
        footer="The ratio of PRs/MRs that get merged."
      >
        <LineChart
          width={620} height={260}
          series={[{ color:"#33B4FF", data:[68, 50, 55, 52, 56, 60, 62, 56, 50, 45, 42, 58] }]}
          xLabels={6}
        />
      </ChartCard>
    </div>

    {/* HBar list */}
    <div className="pc-card" style={{padding:'var(--sp-medium)'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'var(--sp-medium)'}}>
        <div style={{fontFamily:'var(--font-sans)', fontSize:16, fontWeight:600, color:'var(--text)'}}>Average by workbench</div>
        <RangeToggle />
      </div>
      <HBarRow label="db-turner"           value={8.9} color="#3DD68C" />
      <HBarRow label="Workbench-name-long" value={6.9} color="#7CE8B9" />
      <HBarRow label="code reviewer"       value={5.9} color="#F5C518" />
      <HBarRow label="infra-debugger"      value={4.4} color="#F5E78E" />
      <HBarRow label="spec-scanner"        value={3.5} color="#F5E78E" />
      <HBarRow label="ops tool kit"        value={2.4} color="#F38E92" />
      <HBarRow label="deploy assist"       value={1.5} color="#E5484D" />
    </div>
  </div>
);

const TplEvalsDashboard = () => (
  <div className="pc-app">
    <Rail active={7} />
    <TopBar />
    <div className="pc-main" style={{flexDirection:'column'}}>
      <div style={{padding:'var(--sp-medium) var(--sp-large) 0', background:'var(--grey-950)'}}>
        <div className="pc-side__crumbs" style={{marginBottom:0}}>
          <span>workbench</span>
          <span className="sep">/</span>
          <strong>evals</strong>
        </div>
      </div>
      <EvalsDashboard />
    </div>
  </div>
);

/* ─────────────────────────  AI side panel (Plural AI)  ────────────────── */
/* Reference: Figma · Console > Home (side panel open).
   Right-docked overlay panel ~720px wide that hosts an agent chat. Header
   exposes collapse / new / history / more / close. Body has a conversation
   title strip, the message stream, and a sticky composer with scope chips. */

const IconBtn = ({ children, size = 28 }) => (
  <button style={{
    width:size, height:size, padding:0,
    display:'grid', placeItems:'center',
    background:'transparent', border:'1px solid var(--border-input)',
    borderRadius:'var(--r-small)', cursor:'pointer',
    color:'var(--icon-light)',
  }}>{children}</button>
);

const ChatPanelHeader = () => (
  <div style={{
    display:'flex', alignItems:'center', justifyContent:'space-between',
    padding:'10px var(--sp-medium)',
    borderBottom:'1px solid var(--border)',
    background:'var(--fill-zero)',
  }}>
    <div style={{display:'flex', alignItems:'center', gap:'var(--sp-small)'}}>
      <IconBtn>
        {/* collapse: panel + arrow */}
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor"/>
          <path d="M6 3v10" stroke="currentColor"/>
          <path d="M10.5 6.5L8.5 8l2 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </IconBtn>
      <span style={{fontFamily:'var(--font-semi)', fontSize:14, color:'var(--text)'}}>Plural AI</span>
    </div>
    <div style={{display:'flex', alignItems:'center', gap:6}}>
      <IconBtn><AddIcon size={12}/></IconBtn>
      <IconBtn><ClockIcon size={14}/></IconBtn>
      <IconBtn><MoreIcon size={14}/></IconBtn>
      <IconBtn>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeLinecap="round"/>
        </svg>
      </IconBtn>
    </div>
  </div>
);

const ChatPromptScoped = () => (
  <div style={{
    background:'var(--fill-one)',
    border:'1px solid var(--border-input)',
    borderRadius:'var(--r-large)',
    padding:'var(--sp-medium)',
    margin:'var(--sp-medium)',
    display:'flex', flexDirection:'column', gap:'var(--sp-small)',
  }}>
    <div style={{
      minHeight:24,
      fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text-xlight)',
    }}>Start typing…</div>
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:'flex', gap:'var(--sp-xsmall)'}}>
        <span className="pc-chip pc-chip--neutral" style={{padding:'2px 8px', cursor:'pointer'}}>
          <span style={{color:'var(--action-primary)', display:'inline-flex'}}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="3" cy="6" r="1.5" stroke="currentColor"/>
              <circle cx="9" cy="3" r="1.5" stroke="currentColor"/>
              <circle cx="9" cy="9" r="1.5" stroke="currentColor"/>
              <path d="M4.3 5.3L7.7 3.7M4.3 6.7L7.7 8.3" stroke="currentColor"/>
            </svg>
          </span>
          runtime
          <CaretDownIcon size={8} color="var(--icon-light)"/>
        </span>
        <span className="pc-chip pc-chip--neutral" style={{padding:'2px 8px', cursor:'pointer'}}>
          <ClusterIcon size={12} color="var(--icon-light)"/>
          cluster
          <CaretDownIcon size={8} color="var(--icon-light)"/>
        </span>
      </div>
      <button style={{
        width:28, height:28, borderRadius:999,
        background:'transparent', color:'var(--icon-light)',
        border:'none', cursor:'pointer',
        display:'grid', placeItems:'center',
      }}>
        <ArrowUpIcon size={14}/>
      </button>
    </div>
  </div>
);

const AiSidePanel = () => (
  <div style={{
    height:'100%', display:'flex', flexDirection:'column',
    background:'var(--fill-zero)',
    borderLeft:'1px solid var(--border)',
  }}>
    <ChatPanelHeader/>

    {/* Conversation title strip */}
    <div style={{
      padding:'var(--sp-medium) var(--sp-large)',
      borderBottom:'1px solid var(--border)',
      fontFamily:'var(--font-sans)', fontSize:14, fontWeight:500, color:'var(--text)',
    }}>
      Kubernetes infrastructure as code issues
    </div>

    {/* Stream area — assistant greeting, then blank canvas */}
    <div style={{flex:1, overflow:'auto', padding:'var(--sp-large)'}}>
      <div style={{fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text-light)'}}>
        How can I help you?
      </div>
    </div>

    {/* Composer */}
    <ChatPromptScoped/>
  </div>
);

const TplAiSidePanel = () => (
  <div style={{
    height:'100%', display:'grid',
    gridTemplateColumns:'1fr 720px',
    background:'var(--grey-950)',
  }}>
    {/* Faded backdrop hint of the host page (just dim, no real content) */}
    <div style={{
      background:
        'linear-gradient(180deg, rgba(255,255,255,0.02), transparent 30%), var(--grey-950)',
      borderRight:'1px solid var(--border)',
      display:'flex', alignItems:'center', justifyContent:'center',
      color:'var(--text-xlight)', fontFamily:'var(--font-sans)', fontSize:13,
    }}>
      <span>— host page —</span>
    </div>
    <AiSidePanel />
  </div>
);

/* ─────────────────────────  Folder tabs  ───────────────────────────────── */
/* "Manila folder" tabs — the active tab visually attaches to the panel below
   by erasing the seam between its bottom border and the panel's top border.
   Implementation: row has margin-bottom: -1px so it sits one pixel below its
   container's baseline, the active tab paints its bottom border in the panel
   fill colour, and the panel keeps its own top border intact. */

const FolderTabs = ({ tabs, active = 0, onSelect, panelFill = 'var(--fill-one)' }) => (
  <div style={{
    display:'flex', alignItems:'flex-end',
    marginBottom:-1, position:'relative', zIndex:1,
    paddingLeft:0,
  }}>
    {tabs.map((label, i) => {
      const isActive = i === active;
      return (
        <button
          key={i}
          onClick={() => onSelect && onSelect(i)}
          style={{
            padding:'10px 20px',
            background: isActive ? panelFill : 'transparent',
            border:'1px solid ' + (isActive ? 'var(--border)' : 'transparent'),
            borderBottom: '1px solid ' + (isActive ? panelFill : 'transparent'),
            borderTopLeftRadius:'var(--r-large)',
            borderTopRightRadius:'var(--r-large)',
            color: isActive ? 'var(--text)' : 'var(--text-light)',
            fontFamily:'var(--font-sans)', fontSize:14,
            fontWeight: isActive ? 600 : 500,
            cursor:'pointer',
            outline:'none',
            position:'relative',
            marginRight:2,
          }}
        >{label}</button>
      );
    })}
  </div>
);

const TplFolderTabs = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div style={{padding:'var(--sp-large)', background:'var(--grey-950)', height:'100%', overflow:'auto'}}>
      <FolderTabs tabs={['Access policy', 'Webhook actor', 'Audit']} active={active} onSelect={setActive}/>
      <div style={{
        background:'var(--fill-one)',
        border:'1px solid var(--border)',
        borderRadius:'var(--r-large)',
        borderTopLeftRadius: active === 0 ? 0 : 'var(--r-large)',
        padding:'var(--sp-large)',
        minHeight:280,
        color:'var(--text-light)', fontFamily:'var(--font-sans)', fontSize:13,
      }}>
        Panel body for <strong style={{color:'var(--text)'}}>{['Access policy','Webhook actor','Audit'][active]}</strong>.
        <br/><br/>
        The active tab's bottom edge merges with the panel by painting a 1px line in the panel fill.
      </div>
    </div>
  );
};

/* ─────────────────────────  Step list  ─────────────────────────────────── */
/* Vertical wizard rail — each step shows a label and a status indicator. */

const StepIndicator = ({ status }) => {
  if (status === 'error') return (
    <span style={{
      width:18, height:18, borderRadius:999,
      background:'var(--status-failed, #E5484D)',
      display:'inline-grid', placeItems:'center',
      color:'#fff', fontFamily:'var(--font-sans)', fontSize:11, fontWeight:700,
      lineHeight:1,
    }}>!</span>
  );
  if (status === 'complete') return (
    <span style={{
      width:18, height:18, borderRadius:999,
      border:'1.5px solid var(--text-success)',
      background:'transparent',
      display:'inline-grid', placeItems:'center',
      color:'var(--text-success)',
    }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5.4L4 7.4L8 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
  if (status === 'inProgress') return (
    <span style={{
      width:18, height:18, borderRadius:999,
      border:'1.5px solid var(--text-primary-accent)',
      borderRightColor:'transparent',
      display:'inline-block',
    }}/>
  );
  // default: pending — dashed circle
  return (
    <span style={{
      width:18, height:18, borderRadius:999,
      border:'1.5px dashed var(--icon-xlight)',
      display:'inline-block',
    }}/>
  );
};

const StepItem = ({ label, status, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display:'flex', alignItems:'center', justifyContent:'space-between', gap:'var(--sp-small)',
      width:'100%',
      padding:'10px 14px',
      background: active ? 'var(--fill-two)' : 'transparent',
      border:'1px solid ' + (active ? 'var(--border-input)' : 'transparent'),
      borderRadius:'var(--r-medium)',
      color: active ? 'var(--text)' : 'var(--text-light)',
      fontFamily:'var(--font-sans)', fontSize:14, fontWeight: active ? 600 : 500,
      cursor:'pointer', textAlign:'left',
    }}
  >
    <span>{label}</span>
    <StepIndicator status={status}/>
  </button>
);

const StepList = ({ steps, active }) => (
  <div style={{display:'flex', flexDirection:'column', gap:2}}>
    {steps.map((s, i) => (
      <StepItem key={i} label={s.label} status={s.status} active={i === active}/>
    ))}
  </div>
);

const TplStepView = () => (
  <div style={{padding:'var(--sp-large)', background:'var(--grey-950)', height:'100%', overflow:'auto', display:'grid', placeItems:'start center'}}>
    <div style={{width:280}}>
      <div style={{
        fontFamily:'var(--font-semi)', fontSize:11, letterSpacing:'0.08em',
        color:'var(--text-light)', textTransform:'uppercase',
        margin:'0 14px 8px',
      }}>Setup steps</div>
      <StepList
        active={3}
        steps={[
          { label: 'Workbench setup',      status: 'error' },
          { label: 'Skills configuration', status: 'pending' },
          { label: 'Coding agent',         status: 'inProgress' },
          { label: 'Access policy',        status: 'complete' },
          { label: 'Attach tools',         status: 'pending' },
        ]}
      />
    </div>
  </div>
);

const TplCreateWorkbench = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="pc-app">
      <Rail active={7} />
      <TopBar />
      <div className="pc-main" style={{flexDirection:'column'}}>
        <div style={{padding:'var(--sp-medium) var(--sp-large) 0', background:'var(--grey-950)'}}>
          <div className="pc-side__crumbs" style={{marginBottom:'var(--sp-large)'}}>
            <span>workbench</span>
            <span className="sep">/</span>
            <strong>integrations</strong>
          </div>
          <h1 className="t-title2" style={{margin:'0 0 var(--sp-large)', fontFamily:'var(--font-semi)', color:'var(--text)'}}>
            Create a workbench
          </h1>
        </div>

        <div style={{
          flex:1, minHeight:0, overflow:'auto',
          display:'grid', gridTemplateColumns:'280px 1fr',
          gap:'var(--sp-large)',
          padding:'0 var(--sp-large) var(--sp-large)',
          background:'var(--grey-950)',
        }}>
          {/* Step rail */}
          <StepList
            active={3}
            steps={[
              { label: 'Workbench setup',      status: 'error' },
              { label: 'Skills configuration', status: 'pending' },
              { label: 'Coding agent',         status: 'pending' },
              { label: 'Access policy',        status: 'complete' },
              { label: 'Attach tools',         status: 'pending' },
            ]}
          />

          {/* Right side — folder tabs + panel */}
          <div style={{display:'flex', flexDirection:'column', minWidth:0}}>
            <FolderTabs
              tabs={['Access policy', 'Webhook actor']}
              active={activeTab}
              onSelect={setActiveTab}
            />
            <div style={{
              background:'var(--fill-one)',
              border:'1px solid var(--border)',
              borderTopLeftRadius: activeTab === 0 ? 0 : 'var(--r-large)',
              borderTopRightRadius:'var(--r-large)',
              borderBottomLeftRadius:'var(--r-large)',
              borderBottomRightRadius:'var(--r-large)',
              padding:'var(--sp-large)',
              display:'flex', flexDirection:'column', gap:'var(--sp-large)',
              minHeight:520,
            }}>
              <div style={{
                fontFamily:'var(--font-semi)', fontSize:11, letterSpacing:'0.08em',
                color:'var(--text-light)', textTransform:'uppercase',
              }}>Write permissions</div>

              {/* User bindings */}
              <div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'var(--sp-xsmall)'}}>
                  <div style={{display:'inline-flex', alignItems:'center', gap:'var(--sp-xsmall)'}}>
                    <span style={{fontFamily:'var(--font-sans)', fontSize:14, fontWeight:600, color:'var(--text)'}}>
                      User bindings
                    </span>
                    <span style={{color:'var(--icon-xlight)', display:'inline-flex'}}>
                      <InfoIcon size={14}/>
                    </span>
                  </div>
                  <a style={{
                    fontFamily:'var(--font-sans)', fontSize:13,
                    color:'var(--text-primary-accent)', textDecoration:'underline',
                    textDecorationColor:'rgba(153,218,255,0.5)', cursor:'pointer',
                  }}>Action</a>
                </div>
                <FormSelect placeholder="Search for user"/>
                <FormHelp>Users with write permissions for this workbench</FormHelp>
                <div style={{display:'flex', flexWrap:'wrap', gap:'var(--sp-xsmall)', marginTop:'var(--sp-small)'}}>
                  {[
                    'Michael Guarino', 'David Herault'
                  ].map(n => (
                    <span key={n} className="pc-chip pc-chip--neutral" style={{padding:'2px 8px', gap:6}}>
                      {n} <span style={{color:'var(--icon-xlight)', cursor:'pointer'}}>×</span>
                    </span>
                  ))}
                  <span className="pc-chip pc-chip--neutral" style={{padding:'2px 8px'}}>+5</span>
                </div>
              </div>

              {/* Group bindings */}
              <div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'var(--sp-xsmall)'}}>
                  <div style={{display:'inline-flex', alignItems:'center', gap:'var(--sp-xsmall)'}}>
                    <span style={{fontFamily:'var(--font-sans)', fontSize:14, fontWeight:600, color:'var(--text)'}}>
                      Group bindings
                    </span>
                    <span style={{color:'var(--icon-xlight)', display:'inline-flex'}}>
                      <InfoIcon size={14}/>
                    </span>
                  </div>
                  <a style={{
                    fontFamily:'var(--font-sans)', fontSize:13,
                    color:'var(--text-primary-accent)', textDecoration:'underline',
                    textDecorationColor:'rgba(153,218,255,0.5)', cursor:'pointer',
                  }}>Action</a>
                </div>
                <FormSelect placeholder="Search for group"/>
                <FormHelp>Groups with write permissions for this workbench</FormHelp>
                <div style={{display:'flex', flexWrap:'wrap', gap:'var(--sp-xsmall)', marginTop:'var(--sp-small)'}}>
                  {['General', 'Developers', 'Support'].map(n => (
                    <span key={n} className="pc-chip pc-chip--neutral" style={{padding:'2px 8px', gap:6}}>
                      {n} <span style={{color:'var(--icon-xlight)', cursor:'pointer'}}>×</span>
                    </span>
                  ))}
                </div>
              </div>

              <div style={{flex:1}}/>

              {/* Footer */}
              <div style={{display:'flex', justifyContent:'space-between', borderTop:'1px solid var(--border)', paddingTop:'var(--sp-medium)'}}>
                <button className="pc-btn pc-btn--destructive">Cancel</button>
                <button className="pc-btn pc-btn--primary">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────  List & Empty-state pattern  ───────────────── */
/* Reference: Figma · Console > Workbench > Cron schedules / triggers.
   The same surface alternates between two states:
     · Populated: header copy + "Add X" CTA, then a vertical stack of rows
       each with edit + delete affordances on the right.
     · Empty:     a single centered card explaining the surface + one CTA.
   These two layouts share the page chrome (title + description) so the user
   never feels they've landed on a different screen. */

const ListRow = ({ title, subtitle, onEdit, onDelete }) => (
  <div style={{
    display:'flex', alignItems:'center', gap:'var(--sp-medium)',
    padding:'14px var(--sp-medium)',
    background:'var(--fill-one)',
    border:'1px solid var(--border)',
    borderRadius:'var(--r-medium)',
    minWidth:0,
  }}>
    <div style={{flex:1, minWidth:0}}>
      <div style={{
        fontFamily:'var(--font-sans)', fontSize:14, fontWeight:600, color:'var(--text)',
        overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
      }}>{title}</div>
      <div style={{
        fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)',
        marginTop:2,
        overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
      }}>{subtitle}</div>
    </div>
    <div style={{display:'flex', gap:4, flexShrink:0}}>
      <button
        onClick={onEdit}
        title="Edit"
        style={{
          width:28, height:28, padding:0,
          display:'grid', placeItems:'center',
          background:'transparent', border:'none', cursor:'pointer',
          color:'var(--icon-light)', borderRadius:'var(--r-small)',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M11.3 2.7l2 2L5.5 12.5 3 13l0.5-2.5L11.3 2.7z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={onDelete}
        title="Delete"
        style={{
          width:28, height:28, padding:0,
          display:'grid', placeItems:'center',
          background:'transparent', border:'none', cursor:'pointer',
          color:'var(--text-danger-light)', borderRadius:'var(--r-small)',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 4.5h10M5 4.5v-1a1 1 0 011-1h4a1 1 0 011 1v1M6 7v5M10 7v5M4 4.5l1 9a1 1 0 001 1h4a1 1 0 001-1l1-9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
);

const EmptyState = ({ title, subtitle, action }) => (
  <div style={{
    background:'var(--fill-one)',
    border:'1px solid var(--border)',
    borderRadius:'var(--r-large)',
    padding:'var(--sp-xlarge) var(--sp-large)',
    display:'flex', flexDirection:'column', alignItems:'center',
    gap:'var(--sp-medium)',
    textAlign:'center',
    maxWidth:520, margin:'0 auto',
  }}>
    <div>
      <div style={{
        fontFamily:'var(--font-sans)', fontSize:16, fontWeight:600, color:'var(--text)',
      }}>{title}</div>
      <div style={{
        fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)',
        marginTop:6,
      }}>{subtitle}</div>
    </div>
    {action}
  </div>
);

const ListSection = ({
  description,
  addLabel,
  onAdd,
  items,
  emptyTitle,
  emptySubtitle,
  emptyActionLabel,
}) => (
  <div>
    {items && items.length > 0 ? (
      <>
        <div style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          gap:'var(--sp-medium)', marginBottom:'var(--sp-medium)',
        }}>
          <div style={{fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text)'}}>
            {description}
          </div>
          <button className="pc-btn pc-btn--primary" onClick={onAdd}>{addLabel}</button>
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:'var(--sp-xsmall)'}}>
          {items.map((it, i) => <ListRow key={i} {...it}/>)}
        </div>
      </>
    ) : (
      <EmptyState
        title={emptyTitle}
        subtitle={emptySubtitle}
        action={
          <button className="pc-btn pc-btn--primary" onClick={onAdd}>{emptyActionLabel}</button>
        }
      />
    )}
  </div>
);

/* Page chrome shared between populated + empty states. */
const ResourceListPage = ({ crumbLast, title, description, children }) => (
  <div className="pc-app">
    <Rail active={7} />
    <TopBar />
    <div className="pc-main" style={{flexDirection:'column'}}>
      <div style={{padding:'var(--sp-medium) var(--sp-large) 0', background:'var(--grey-950)'}}>
        <div className="pc-side__crumbs" style={{marginBottom:'var(--sp-large)'}}>
          <span>workbench</span>
          <span className="sep">/</span>
          <span>workbench name</span>
          <span className="sep">/</span>
          <strong>{crumbLast}</strong>
        </div>
        <div style={{marginBottom:'var(--sp-large)'}}>
          <h1 className="t-title2" style={{margin:0, fontFamily:'var(--font-semi)', color:'var(--text)'}}>{title}</h1>
          <div className="t-body2" style={{color:'var(--text-light)', marginTop:4}}>{description}</div>
        </div>
      </div>
      <div style={{flex:1, padding:'0 var(--sp-large) var(--sp-large)', overflow:'auto', background:'var(--grey-950)'}}>
        {children}
      </div>
    </div>
  </div>
);

const CRON_ITEMS = [
  { title:"Nightly Backup",
    subtitle:"At 12:00 AM on, day 1 of the month, next at Mar 2, 2026 at 9:42 AM" },
  { title:"Weekly Report",
    subtitle:"At 12:00 AM on, day 1 of the month, next at Mar 2, 2026 at 9:42 AM" },
  { title:"Monthly Invoice",
    subtitle:"At 12:00 AM on, day 1 of the month, next at Mar 2, 2026 at 9:42 AM" },
  { title:"Ad-hoc Task",
    subtitle:"At 12:00 AM on, day 1 of the month, next at Mar 2, 2026 at 9:42 AM" },
  { title:"extraordinarily lengthy title for a cron schedule name extraordinarily lengthy title for a cron schedule name",
    subtitle:"At 12:00 AM on, day 1 of the month, next at Mar 2, 2026 at 9:42 AM" },
];

const TplListSection = () => (
  <ResourceListPage
    crumbLast="crons schedules"
    title="Workbench name"
    description="Workbench description"
  >
    <ListSection
      description="Add schedules to trigger this workbench."
      addLabel="Add cron schedule"
      items={CRON_ITEMS}
    />
  </ResourceListPage>
);

const TplListEmpty = () => (
  <ResourceListPage
    crumbLast="triggers"
    title="Workbench name"
    description="Workbench description"
  >
    <ListSection
      items={[]}
      emptyTitle="No schedule yet"
      emptySubtitle="Create a schedule for the workbench with prompt"
      emptyActionLabel="Create new schedule"
    />
  </ResourceListPage>
);

/* ─────────────────────────  Resource form (Schedule create/edit)  ──────── */
/* The third state in the same flow — a focused editor card for adding a
   single resource. Layout: stacked fields on the left, optional preview
   panel on the right, footer actions inside the card. */

const ScheduleForm = () => (
  <div style={{
    background:'var(--fill-one)',
    border:'1px solid var(--border)',
    borderRadius:'var(--r-large)',
    padding:'var(--sp-large)',
    display:'flex', flexDirection:'column', gap:'var(--sp-large)',
    maxWidth:760,
  }}>
    {/* Schedule name */}
    <div>
      <FormLabel required>Schedule name</FormLabel>
      <div className="pc-input" style={{background:'var(--fill-zero)', height:42, borderRadius:'var(--r-medium)'}}>
        <input defaultValue="Weekly security check" style={{fontSize:14}}/>
      </div>
    </div>

    {/* Prompt textarea */}
    <div>
      <div style={{display:'flex', alignItems:'center', gap:'var(--sp-xsmall)', marginBottom:'var(--sp-xsmall)'}}>
        <span style={{fontFamily:'var(--font-sans)', fontSize:13, fontWeight:600, color:'var(--text)'}}>Prompt</span>
        <span style={{color:'var(--icon-xlight)', display:'inline-flex'}}><InfoIcon size={14}/></span>
      </div>
      <textarea
        rows={5}
        placeholder="Ask the agent use an integrated tool or service on your cluster"
        style={{
          width:'100%', background:'var(--fill-zero)',
          border:'1px solid var(--border-input)',
          borderRadius:'var(--r-medium)',
          padding:'var(--sp-medium)',
          color:'var(--text)',
          fontFamily:'var(--font-sans)', fontSize:14, lineHeight:'22px',
          resize:'vertical', outline:'none',
        }}
      />
    </div>

    {/* Cron + preview */}
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--sp-large)'}}>
      <div>
        <div style={{display:'flex', alignItems:'center', gap:'var(--sp-xsmall)', marginBottom:'var(--sp-xsmall)'}}>
          <span style={{fontFamily:'var(--font-sans)', fontSize:13, fontWeight:600, color:'var(--text)'}}>Cron expression</span>
          <span style={{color:'var(--icon-xlight)', display:'inline-flex'}}><InfoIcon size={14}/></span>
        </div>
        <div className="pc-input" style={{background:'var(--fill-zero)', height:42, borderRadius:'var(--r-medium)'}}>
          <input defaultValue="*/5 * * * *" style={{fontFamily:'var(--font-mono)', fontSize:14, color:'var(--purple-300)'}}/>
        </div>
        <FormHelp>Enter a cron expression or use shortcuts like @hourly, @daily, @reboot.</FormHelp>
      </div>

      <div>
        <div style={{
          fontFamily:'var(--font-sans)', fontSize:13, fontWeight:600, color:'var(--text)',
          marginBottom:'var(--sp-xsmall)',
        }}>Preview</div>
        <div style={{
          background:'var(--fill-zero)',
          border:'1px solid var(--border-input)',
          borderRadius:'var(--r-medium)',
          padding:'var(--sp-medium)',
          fontFamily:'var(--font-mono)', fontSize:12, lineHeight:'20px',
          color:'var(--text)',
        }}>
          <div style={{marginBottom:6}}>Every 5 minutes</div>
          <div style={{color:'var(--text-light)'}}>
            next at <span style={{color:'var(--text)'}}>2026-03-03</span> <span style={{color:'var(--purple-300)'}}>04:05:00</span> UTC
          </div>
          <div style={{color:'var(--text-light)'}}>
            then at <span style={{color:'var(--text)'}}>2026-03-04</span> <span style={{color:'var(--purple-300)'}}>04:05:00</span> UTC
          </div>
          <div style={{color:'var(--text-light)'}}>
            then at <span style={{color:'var(--text)'}}>2026-03-05</span> <span style={{color:'var(--purple-300)'}}>04:05:00</span> UTC
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div style={{display:'flex', justifyContent:'flex-end', gap:'var(--sp-xsmall)'}}>
      <button className="pc-btn pc-btn--secondary">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{marginRight:6}}>
          <path d="M3 8h9a3 3 0 010 6h-2" stroke="currentColor" strokeLinecap="round"/>
          <path d="M5.5 5.5L3 8l2.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back all schedules
      </button>
      <button className="pc-btn pc-btn--primary">Save</button>
    </div>
  </div>
);

const TplScheduleForm = () => (
  <ResourceListPage
    crumbLast="crons schedules"
    title="Workbench name"
    description="Workbench description"
  >
    <ScheduleForm/>
  </ResourceListPage>
);


/* ─────────────────────────  Loading skeleton  ─────────────────────────── */
/* Reference: Figma · Console > Topology > Generating diagram (loading).
   Three reusable primitives:
     · Skel      — a single shimmering bar (width/height customisable)
     · SegmentedPills — capsule tab strip used inside compact side panels
     · LoadingSidePanel — shell that combines them with copy + filler block. */

const Skel = ({ w = '100%', h = 12, r = 6, style }) => (
  <span
    className="pc-skel"
    style={{
      display:'block',
      width: typeof w === 'number' ? `${w}px` : w,
      height: typeof h === 'number' ? `${h}px` : h,
      borderRadius: typeof r === 'number' ? `${r}px` : r,
      background:
        'linear-gradient(90deg, var(--fill-two) 0%, var(--fill-three) 40%, var(--fill-two) 80%)',
      backgroundSize:'200% 100%',
      animation:'pc-skel-shimmer 1.6s linear infinite',
      ...style,
    }}
  />
);

/* Inject the shimmer keyframes once. */
if (typeof document !== 'undefined' && !document.getElementById('pc-skel-kf')) {
  const s = document.createElement('style');
  s.id = 'pc-skel-kf';
  s.textContent = `
    @keyframes pc-skel-shimmer {
      0%   { background-position: 100% 0; }
      100% { background-position: -100% 0; }
    }
  `;
  document.head.appendChild(s);
}

const SegmentedPills = ({ tabs, active = 0, onSelect }) => (
  <div style={{display:'inline-flex', alignItems:'center', gap:6}}>
    {tabs.map((t, i) => {
      const isActive = i === active;
      const Icon = t.icon;
      return (
        <button
          key={i}
          onClick={() => onSelect && onSelect(i)}
          style={{
            display:'inline-flex', alignItems:'center', gap:6,
            padding:'5px 12px',
            background: isActive ? 'var(--fill-two)' : 'transparent',
            border:'1px solid ' + (isActive ? 'var(--border-input)' : 'transparent'),
            borderRadius: 999,
            color: isActive ? 'var(--text)' : 'var(--text-light)',
            fontFamily:'var(--font-sans)', fontSize:13,
            fontWeight: isActive ? 600 : 500,
            cursor:'pointer',
          }}
        >
          {Icon && <Icon size={12} color="currentColor"/>}
          {t.label}
        </button>
      );
    })}
  </div>
);

const LoadingSidePanelHeader = ({ tabs, active, onSelect }) => (
  <div style={{
    display:'flex', alignItems:'center', justifyContent:'space-between',
    padding:'10px var(--sp-medium)',
    borderBottom:'1px solid var(--border)',
    background:'var(--fill-zero)',
  }}>
    <div style={{display:'flex', alignItems:'center', gap:'var(--sp-small)'}}>
      <IconBtn>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor"/>
          <path d="M6 3v10" stroke="currentColor"/>
          <path d="M10.5 6.5L8.5 8l2 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </IconBtn>
      <SegmentedPills tabs={tabs} active={active} onSelect={onSelect}/>
    </div>
    <IconBtn>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeLinecap="round"/>
      </svg>
    </IconBtn>
  </div>
);

const LoadingSidePanel = () => {
  const [active, setActive] = React.useState(1);
  return (
    <div style={{
      height:'100%', display:'flex', flexDirection:'column',
      background:'var(--fill-zero)',
      borderLeft:'1px solid var(--border)',
    }}>
      <LoadingSidePanelHeader
        active={active}
        onSelect={setActive}
        tabs={[
          { label:'Conclusion', icon: DocumentIcon },
          { label:'Topology',   icon: ClusterIcon },
          { label:'Pulls requests', icon: GitPullIcon },
        ]}
      />
      <div style={{flex:1, padding:'var(--sp-large)', overflow:'auto', display:'flex', flexDirection:'column', gap:'var(--sp-medium)'}}>
        <p style={{
          margin:0,
          fontFamily:'var(--font-sans)', fontSize:14, lineHeight:'22px',
          color:'var(--text-light)',
        }}>
          Generating your diagram. This may take a few minutes. Feel free to leave the page while the agent runs in the background.
        </p>
        <div style={{display:'flex', flexDirection:'column', gap:'var(--sp-small)', marginTop:'var(--sp-small)'}}>
          <Skel w="100%" />
          <Skel w="70%" />
          <Skel w="92%" />
          <Skel w="60%" />
          <Skel w="98%" />
        </div>
        <Skel w="100%" h={220} r={8} style={{marginTop:'var(--sp-medium)'}}/>
      </div>
    </div>
  );
};

const TplLoadingSkeleton = () => (
  <div style={{
    height:'100%', display:'grid',
    gridTemplateColumns:'1fr 600px',
    background:'var(--grey-950)',
  }}>
    <div style={{
      background:'var(--grey-950)',
      borderRight:'1px solid var(--border)',
      display:'flex', alignItems:'center', justifyContent:'center',
      color:'var(--text-xlight)', fontFamily:'var(--font-sans)', fontSize:13,
    }}>
      <span>— host page —</span>
    </div>
    <LoadingSidePanel />
  </div>
);

/* ─────────────────────────  Chat reference cards  ─────────────────────── */
/* Reference: Figma · Console > Chat (cards inline).
   Compact rich cards the agent drops into chat to reference a structured
   object — issue, alert, PR list, channel message. Shared shape:
     · Header strip: icon badge + title + chevron-collapse
     · Body: primary link / heading + truncated subtitle
     · Meta row: 2–4 labelled fields with appropriate inline pills
     · Top-right corner: ↗ external-link affordance (skip for list variants). */

const ChatCardShell = ({ icon, title, externalLink = true, defaultOpen = true, children }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{
      background:'var(--fill-one)',
      border:'1px solid var(--border)',
      borderRadius:'var(--r-large)',
      overflow:'hidden',
      position:'relative',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width:'100%',
          display:'flex', alignItems:'center', justifyContent:'space-between',
          padding:'14px var(--sp-medium)',
          background:'transparent', border:'none', cursor:'pointer',
          textAlign:'left',
        }}
      >
        <span style={{display:'inline-flex', alignItems:'center', gap:'var(--sp-small)'}}>
          <span style={{
            width:36, height:36, borderRadius:999,
            display:'inline-grid', placeItems:'center',
            background:'var(--fill-two)', border:'1px solid var(--border-input)',
            color:'var(--icon-light)',
          }}>
            {icon}
          </span>
          <span style={{
            fontFamily:'var(--font-sans)', fontSize:16, fontWeight:700, color:'var(--text)',
          }}>{title}</span>
        </span>
        <span style={{
          color:'var(--icon-light)',
          transform: open ? 'rotate(0deg)' : 'rotate(-90deg)',
          transition:'transform .15s ease',
        }}>
          <CaretDownIcon size={12}/>
        </span>
      </button>
      {open && (
        <div style={{padding:'0 var(--sp-medium) var(--sp-medium)', position:'relative'}}>
          {externalLink && (
            <a style={{
              position:'absolute', top:0, right:'var(--sp-medium)',
              color:'var(--icon-light)', cursor:'pointer',
              display:'inline-grid', placeItems:'center',
              padding:4,
            }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
          {children}
        </div>
      )}
    </div>
  );
};

const CardMeta = ({ items }) => (
  <div style={{display:'grid', gridTemplateColumns:`repeat(${items.length}, minmax(0,1fr))`, gap:'var(--sp-medium)', marginTop:'var(--sp-medium)'}}>
    {items.map((it, i) => (
      <div key={i}>
        <div style={{fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)'}}>{it.label}</div>
        <div style={{marginTop:6, fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text)'}}>{it.value}</div>
      </div>
    ))}
  </div>
);

const IssueIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <rect x="3" y="2" width="10" height="12" rx="1.5" stroke={color}/>
    <path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3" stroke={color} strokeLinecap="round"/>
  </svg>
);

const BullhornIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 6.5v3a1 1 0 001 1h1.5l4 2.5v-10l-4 2.5H4a1 1 0 00-1 1z" stroke={color} strokeLinejoin="round"/>
    <path d="M12 6v4" stroke={color} strokeLinecap="round"/>
  </svg>
);

const BotIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <rect x="3" y="5" width="10" height="8" rx="2" stroke={color}/>
    <circle cx="6" cy="9" r="0.9" fill={color}/>
    <circle cx="10" cy="9" r="0.9" fill={color}/>
    <path d="M8 5V3M8 3h-1.5M8 3h1.5" stroke={color} strokeLinecap="round"/>
  </svg>
);

const ExternalLinkInline = () => (
  <span style={{color:'var(--icon-light)', display:'inline-flex', marginLeft:'auto'}}>
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

const ChatCardIssue = () => (
  <ChatCardShell icon={<IssueIcon size={16}/>} title="Issue">
    <a style={{
      fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text-primary-accent)',
      textDecoration:'none', wordBreak:'break-all',
    }}>linear.app/pluralsh/issue/PROD-4430/workbench-job-experience</a>
    <div style={{fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)', marginTop:4}}>
      Revise the checksum for the setup-envtest in the controller-runtime utilities
    </div>
    <CardMeta items={[
      { label:'Date',    value:'3/9/2026 3:24pm' },
      { label:'Creator', value:'Jake Laderman' },
      { label:'Status',  value:<span className="pc-chip pc-chip--neutral">
        <span style={{width:10, height:10, border:'1.5px dashed var(--icon-xlight)', borderRadius:999, display:'inline-block'}}/>
        In progress
      </span> },
      { label:'Provider', value:<span style={{display:'inline-flex', alignItems:'center', gap:6}}>
        <GitHubIcon size={14}/>Github
      </span> },
    ]}/>
  </ChatCardShell>
);

const ChatCardAlert = () => (
  <ChatCardShell icon={<BullhornIcon size={16}/>} title="Alerts">
    <a style={{
      fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text)',
      textDecoration:'none', wordBreak:'break-all',
    }}>alerting/grafana/aeu0mdt3z32tce/view?orgId=1</a>
    <div style={{fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)', marginTop:4}}>
      HTTP500Errors
    </div>
    <CardMeta items={[
      { label:'Date',     value:'3/9/2026 3:24pm' },
      { label:'Severity', value:<span className="pc-chip pc-chip--neutral">Undefined</span> },
      { label:'Status',   value:<span className="pc-chip pc-chip--danger">
        <span style={{width:14, height:14, background:'var(--red-700)', color:'#fff', borderRadius:3, display:'grid', placeItems:'center', fontSize:10, fontWeight:700, lineHeight:1}}>!</span>
        Firing
      </span> },
      { label:'Provider', value:<span style={{display:'inline-flex', alignItems:'center', gap:6}}>
        <span style={{width:14, height:14, borderRadius:3, background:'#F5A524', display:'inline-grid', placeItems:'center', color:'#3C2C0F', fontFamily:'var(--font-semi)', fontSize:9, fontWeight:700}}>G</span>
        Grafana
      </span> },
    ]}/>
  </ChatCardShell>
);

const ChatCardPRList = () => (
  <ChatCardShell icon={<GitPullIcon size={16}/>} title="Relevant pull requests" externalLink={false}>
    {[1, 2].map(i => (
      <div key={i} style={{
        display:'flex', alignItems:'flex-start', gap:'var(--sp-medium)',
        padding:'var(--sp-medium) 0',
        borderBottom: i === 1 ? '1px solid var(--border)' : 'none',
      }}>
        <div style={{flex:1, minWidth:0}}>
          <a style={{
            fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text)',
            textDecoration:'none',
          }}>/pluralsh/console/pull/1913</a>
          <div style={{fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)', marginTop:4}}>
            Revise the checksum for the setup-envtest in the controller-runtime utilities
          </div>
        </div>
        <ExternalLinkInline/>
      </div>
    ))}
  </ChatCardShell>
);

const ChatCardChatbot = () => (
  <ChatCardShell icon={<BotIcon size={16}/>} title="Chatbot">
    <a style={{
      fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text-primary-accent)',
      textDecoration:'none',
    }}>#channel-name-long</a>
    <div style={{fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)', marginTop:4, lineHeight:'20px'}}>
      @plural-prod-bot we just got paged for OOMKilled on payments-api-7b9 in prod-eu-west-2 — can you take a loo…
    </div>
    <CardMeta items={[
      { label:'Date',    value:'3/9/2026 3:24pm' },
      { label:'Creator', value:'Jake Laderman' },
      { label:'Provider', value:<span style={{display:'inline-flex', alignItems:'center', gap:6}}>
        <SlackIcon size={14} color="#4A154B"/>Slack
      </span> },
    ]}/>
  </ChatCardShell>
);

const TplChatCards = () => (
  <div style={{
    padding:'var(--sp-large)',
    background:'var(--grey-950)',
    height:'100%', overflow:'auto',
    display:'grid', gridTemplateColumns:'1fr 1fr',
    gap:'var(--sp-medium)',
    alignContent:'start',
  }}>
    <ChatCardIssue/>
    <ChatCardAlert/>
    <ChatCardPRList/>
    <ChatCardChatbot/>
  </div>
);

Object.assign(window, {
  TplClusterDonuts, TplEvalsDashboard, TplAiSidePanel,
  TplCreateWorkbench, TplFolderTabs, TplStepView,
  TplListSection, TplListEmpty, TplScheduleForm,
  TplLoadingSkeleton, TplChatCards,
  DonutRings, ClusterOverviewCard, LineChart, EvalsDashboard, AiSidePanel,
  FolderTabs, StepList, StepItem,
  EmptyState, ListRow, ListSection,
  Skel, SegmentedPills, LoadingSidePanel,
  ChatCardShell, ChatCardIssue, ChatCardAlert, ChatCardPRList, ChatCardChatbot,
});
