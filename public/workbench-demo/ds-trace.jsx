/* Trace gantt + service graph + chat/results split + sectioned-memos.
   Reference: Figma · Console > Trace view, Workbench job views.

   All templates here rely on tokens from styles.css and respect the
   data-theme="light" override the Tweaks panel sets on <html>. */

/* ───────── Shared trace chrome ───────── */

const TraceStat = ({ label, value }) => (
  <div style={{minWidth:60}}>
    <div style={{
      fontFamily:'var(--font-sans)', fontSize:11,
      color:'var(--text-light)',
      textTransform:'uppercase', letterSpacing:'0.05em',
    }}>{label}</div>
    <div style={{fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text)', marginTop:4}}>{value}</div>
  </div>
);

const ViewIconBtn = ({ active, onClick, children }) => (
  <button onClick={onClick} style={{
    width:32, height:32, padding:0,
    display:'grid', placeItems:'center',
    background: active ? 'var(--fill-two)' : 'transparent',
    border:'1px solid ' + (active ? 'var(--border-input)' : 'transparent'),
    borderRadius:'var(--r-small)',
    color: active ? 'var(--text)' : 'var(--icon-light)',
    cursor:'pointer',
  }}>{children}</button>
);

const TraceTopBar = ({ active, onSelect }) => (
  <div style={{
    background:'var(--fill-one)',
    border:'1px solid var(--border)',
    borderRadius:'var(--r-large)',
    padding:'10px var(--sp-medium)',
    display:'flex', alignItems:'center', justifyContent:'space-between',
    gap:'var(--sp-large)',
  }}>
    <div style={{display:'flex', alignItems:'center', gap:'var(--sp-xlarge)', flexWrap:'wrap'}}>
      <div style={{display:'flex', alignItems:'baseline', gap:8, fontFamily:'var(--font-mono)', fontSize:13}}>
        <span style={{color:'var(--text)'}}>trace_id</span>
        <span style={{color:'var(--text-light)'}}>87esjA821ji9049…</span>
      </div>
      <TraceStat label="Duration" value="82797 ms"/>
      <TraceStat label="Spans"    value="10"/>
      <TraceStat label="Services" value="6"/>
      <div>
        <div style={{
          fontFamily:'var(--font-sans)', fontSize:11,
          color:'var(--text-light)',
          textTransform:'uppercase', letterSpacing:'0.05em',
        }}>Status</div>
        <span className="pc-chip pc-chip--danger" style={{marginTop:4, padding:'2px 8px'}}>
          <span style={{width:14, height:14, background:'var(--red-700)', color:'#fff', borderRadius:3, display:'grid', placeItems:'center', fontSize:10, fontWeight:700, lineHeight:1}}>!</span>
          Firing
        </span>
      </div>
    </div>
    <div style={{display:'flex', gap:4}}>
      <ViewIconBtn active={active === 'gantt'} onClick={() => onSelect?.('gantt')}>
        {/* gantt: stacked bars */}
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <rect x="2"  y="3"  width="9"  height="2.4" rx="1" fill="currentColor"/>
          <rect x="4"  y="6.8" width="9" height="2.4" rx="1" fill="currentColor"/>
          <rect x="2"  y="10.6" width="7" height="2.4" rx="1" fill="currentColor"/>
        </svg>
      </ViewIconBtn>
      <ViewIconBtn active={active === 'tree'} onClick={() => onSelect?.('tree')}>
        {/* tree */}
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="3" r="1.6" stroke="currentColor"/>
          <circle cx="4" cy="13" r="1.6" stroke="currentColor"/>
          <circle cx="12" cy="13" r="1.6" stroke="currentColor"/>
          <path d="M8 5v3M4 11l3-3M12 11l-3-3" stroke="currentColor"/>
        </svg>
      </ViewIconBtn>
      <ViewIconBtn active={active === 'graph'} onClick={() => onSelect?.('graph')}>
        {/* graph */}
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="6" width="4.5" height="4" rx="1" stroke="currentColor"/>
          <rect x="5.5" y="2" width="5" height="4" rx="1" stroke="currentColor"/>
          <rect x="10.5" y="6" width="4.5" height="4" rx="1" stroke="currentColor"/>
          <rect x="5.5" y="10" width="5" height="4" rx="1" stroke="currentColor"/>
        </svg>
      </ViewIconBtn>
    </div>
  </div>
);

/* ───────── Gantt chart ───────── */

const SPAN_PALETTE = {
  green:  { bg:'rgba(15, 153, 106, 0.28)', border:'#1A8855', dot:'#3DD68C' },
  orange: { bg:'rgba(168, 109, 0, 0.30)',  border:'#A06820', dot:'#F5A524' },
  blue:   { bg:'rgba(20, 102, 168, 0.30)', border:'#1F5A91', dot:'#66C7FF' },
  red:    { bg:'rgba(139, 14, 35, 0.30)',  border:'#A52A41', dot:'#E5374E' },
  purple: { bg:'rgba(91, 71, 165, 0.35)',  border:'#5947A4', dot:'#9FA3F9' },
};

const SPAN_TREE = [
  { name:"workbench.run", depth:0, dot:'green',  color:'green',  start:0,   end:5.0, label:"Green_50_text",   detail:"Green 400 border Green 800 fill" },
  { name:"agent.turn",    depth:1, dot:'orange', color:'orange', start:0.6, end:3.4, label:"Orange_100_text", detail:"Orange 400 border Orange 800 fill" },
  { name:"llm.invoke",    depth:2, dot:'green',  color:'green',  start:0.9, end:4.5, label:"Green_50_text",   detail:"Green 400 border Green 800 fill" },
  { name:"get_pod_logs",  depth:3, dot:'orange', color:'orange', warn:true, start:1.2, end:3.8, label:"Orange_100_text", detail:"Orange 400 border Orange 800 fill" },
  { name:"get_pod_logs",  depth:3, dot:'blue',   color:'blue',   start:1.6, end:4.6, label:"Blue_50_text",    detail:"Blue 400 border Blue 800 fill" },
  { name:"agent.turn",    depth:1, dot:'red',    color:'red',    start:0.8, end:4.4, label:"Red_50_text",     detail:"Red 400 border Red 800 fill" },
  { name:"get_pod_logs",  depth:2, dot:'red',    color:'red',    warn:true, start:1.5, end:4.6, label:"Red_50_text",     detail:"Red 400 border Red 800 fill" },
  { name:"llm.invoke",    depth:2, dot:'blue',   color:'blue',   start:1.7, end:4.6, label:"Blue_50_text",    detail:"Blue 400 border Blue 800 fill" },
  { name:"workbench.run", depth:0, dot:'purple', color:'purple', start:2.0, end:5.0, label:"Purple_50_text",  detail:"Purple 400 border Purple 800 fill" },
];
const TRACE_TOTAL = 5;

const WarnTri = ({ size = 14, color = 'rgba(255,255,255,0.85)' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M8 2L14 13H2L8 2Z" stroke={color} strokeLinejoin="round"/>
    <path d="M8 6.5v3M8 11.2v.6" stroke={color} strokeLinecap="round"/>
  </svg>
);

const GanttRow = ({ span }) => {
  const pal = SPAN_PALETTE[span.color];
  const dotPal = SPAN_PALETTE[span.dot];
  const leftPct = (span.start / TRACE_TOTAL) * 100;
  const widthPct = ((span.end - span.start) / TRACE_TOTAL) * 100;
  return (
    <div style={{
      display:'grid', gridTemplateColumns:'260px 1fr',
      borderBottom:'1px solid var(--border)',
      minHeight:48,
    }}>
      {/* Left tree col */}
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'8px 12px',
        paddingLeft: 12 + span.depth * 20,
        borderRight:'1px solid var(--border)',
        background:'var(--fill-zero)',
      }}>
        <div style={{display:'flex', alignItems:'center', gap:8, minWidth:0}}>
          <span style={{width:8, height:8, borderRadius:999, background:dotPal.dot, flexShrink:0}}/>
          <span style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--text)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{span.name}</span>
          {span.warn && <span style={{color:'var(--text-warning-light)', display:'inline-flex'}}><WarnTri size={11} color="currentColor"/></span>}
        </div>
        <span style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-light)', flexShrink:0}}>4.23s</span>
      </div>
      {/* Right timeline col */}
      <div style={{position:'relative', padding:'10px 0'}}>
        <div style={{
          position:'absolute',
          left: `calc(${leftPct}% + 4px)`,
          width: `calc(${widthPct}% - 8px)`,
          height: 28, top: 10,
          background: pal.bg,
          border: `1px solid ${pal.border}`,
          borderRadius:'var(--r-small)',
          display:'flex', alignItems:'center',
          padding:'0 10px', gap:8,
          fontFamily:'var(--font-sans)', fontSize:12,
          color:'#fff',
          overflow:'hidden',
        }}>
          <strong style={{fontWeight:600, flexShrink:0}}>{span.label}</strong>
          <span style={{opacity:0.85, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{span.detail}</span>
          <span style={{marginLeft:'auto', flexShrink:0}}><WarnTri size={12}/></span>
        </div>
      </div>
    </div>
  );
};

const GanttDetailsPanel = () => (
  <aside style={{
    width:280, flexShrink:0,
    borderLeft:'1px solid var(--border)',
    background:'var(--fill-one)',
    display:'flex', flexDirection:'column',
    overflow:'auto',
  }}>
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'12px var(--sp-medium)',
      borderBottom:'1px solid var(--border)',
    }}>
      <span style={{fontFamily:'var(--font-sans)', fontSize:14, fontWeight:600, color:'var(--text)'}}>Name of node</span>
      <button style={{background:'transparent', border:'none', color:'var(--icon-light)', cursor:'pointer', padding:4, display:'inline-flex'}}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeLinecap="round"/></svg>
      </button>
    </div>
    <div style={{padding:'var(--sp-medium)', display:'flex', flexDirection:'column', gap:'var(--sp-medium)'}}>
      <div>
        <div style={{fontFamily:'var(--font-sans)', fontSize:24, fontWeight:600, color:'var(--text)', lineHeight:1.1}}>295 ms</div>
        <div style={{fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)', marginTop:4}}>offset +835ms from root</div>
      </div>

      <div>
        <div style={{
          fontFamily:'var(--font-semi)', fontSize:11, letterSpacing:'0.08em',
          color:'var(--text-light)', textTransform:'uppercase',
          marginBottom:8,
        }}>Span</div>
        <DefList items={[
          { k:'service', v: <span style={{display:'inline-flex', alignItems:'center', gap:6}}><span style={{width:8, height:8, borderRadius:999, background:'#66C7FF'}}/>Kubernetes API</span> },
          { k:'status',  v: <span className="pc-chip pc-chip--warning" style={{padding:'2px 8px'}}><WarnTri size={11} color="currentColor"/>Warning</span> },
          { k:'parent',  v: <a style={{color:'var(--text-primary-accent)', fontFamily:'var(--font-mono)', fontSize:12}}>llm.invoke</a> },
        ]}/>
      </div>

      <div>
        <div style={{
          fontFamily:'var(--font-semi)', fontSize:11, letterSpacing:'0.08em',
          color:'var(--text-light)', textTransform:'uppercase',
          marginBottom:8,
        }}>Warning</div>
        <div style={{
          background:'var(--fill-two)',
          border:'1px solid var(--border-input)',
          borderRadius:'var(--r-medium)',
          padding:'var(--sp-medium)',
          fontFamily:'var(--font-sans)', fontSize:12,
          color:'var(--text)', lineHeight:'18px',
        }}>
          Connection reset — retried successfully after 45ms. This may indicate intermittent network issues to the K8s API server.
        </div>
      </div>

      <div>
        <div style={{
          fontFamily:'var(--font-semi)', fontSize:11, letterSpacing:'0.08em',
          color:'var(--text-light)', textTransform:'uppercase',
          marginBottom:8,
        }}>Attributes</div>
        <DefList items={[
          { k:'namespace',   v:'production' },
          { k:'resource',    v:'pod/api-pod' },
          { k:'verb',        v:'describe' },
          { k:'status code', v:<span style={{display:'inline-flex', alignItems:'center', gap:6}}><span style={{width:8, height:8, borderRadius:999, background:'#3DD68C'}}/>200</span> },
          { k:'retry count', v:'23' },
          { k:'span.kind',   v:'Client' },
        ]}/>
      </div>
    </div>
  </aside>
);

const DefList = ({ items }) => (
  <dl style={{margin:0, display:'grid', gridTemplateColumns:'90px 1fr', columnGap:8, rowGap:10}}>
    {items.map((it, i) => (
      <React.Fragment key={i}>
        <dt style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-light)'}}>{it.k}</dt>
        <dd style={{margin:0, fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text)'}}>{it.v}</dd>
      </React.Fragment>
    ))}
  </dl>
);

const TimeAxis = () => (
  <div style={{
    display:'grid', gridTemplateColumns:'260px 1fr',
    borderBottom:'1px solid var(--border)',
    background:'var(--fill-zero)',
    minHeight:36,
  }}>
    <div style={{
      display:'flex', alignItems:'center',
      padding:'0 var(--sp-medium)',
      borderRight:'1px solid var(--border)',
      fontFamily:'var(--font-semi)', fontSize:11, letterSpacing:'0.08em',
      color:'var(--text-light)', textTransform:'uppercase',
    }}>Span</div>
    <div style={{position:'relative'}}>
      {[1,2,3,4,5].map(n => (
        <span key={n} style={{
          position:'absolute',
          left: `${(n / TRACE_TOTAL) * 100}%`,
          top: 0, bottom: 0,
          display:'flex', alignItems:'center',
          transform:'translateX(4px)',
          fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-light)',
        }}>{n}s</span>
      ))}
    </div>
  </div>
);

const GanttChart = () => (
  <div style={{
    flex:1,
    border:'1px solid var(--border)',
    borderRadius:'var(--r-large)',
    background:'var(--fill-one)',
    display:'flex', minHeight:0,
    overflow:'hidden',
  }}>
    <div style={{flex:1, display:'flex', flexDirection:'column', overflow:'auto'}}>
      <TimeAxis/>
      {SPAN_TREE.map((span, i) => <GanttRow key={i} span={span}/>)}
    </div>
    <GanttDetailsPanel/>
  </div>
);

const TplTraceGantt = () => {
  const [mode, setMode] = React.useState('gantt');
  return (
    <div style={{padding:'var(--sp-medium)', height:'100%', overflow:'auto', background:'var(--grey-950)', display:'flex', flexDirection:'column', gap:'var(--sp-medium)'}}>
      <TraceTopBar active={mode} onSelect={setMode}/>
      <GanttChart/>
    </div>
  );
};

/* ───────── Service Graph ───────── */

const SERVICE_PALETTE = {
  workbench:  '#7CE8B9',
  agents:     '#F38E92',
  claude:     '#F38E92',
  k8s:        '#9FA3F9',
  filesys:    '#BCB8FF',
  github:     '#F5E78E',
};

const SVC_NODES = {
  workbench: { x:50,   y:380, w:200, h:60, color:SERVICE_PALETTE.workbench, label:'Workbench agent', meta:'2 spans • 4.2s', blocked:true },
  claude:    { x:430,  y:380, w:280, h:74, color:SERVICE_PALETTE.claude,    label:'Claude API',     meta:'4 spans • 1.83s avg • claude opus 4-5' },
  k8s:       { x:780,  y:220, w:230, h:60, color:SERVICE_PALETTE.k8s,       label:'Kubernetes API', meta:'2 spans • 4.2s', tag:'#1' },
  github1:   { x:1080, y:120, w:200, h:60, color:SERVICE_PALETTE.github,    label:'Github API',     meta:'2 spans • 4.2s' },
  github2:   { x:1080, y:380, w:200, h:60, color:SERVICE_PALETTE.github,    label:'Github API',     meta:'2 spans • 829ms avg' },
  filesys:   { x:780,  y:540, w:230, h:60, color:SERVICE_PALETTE.filesys,   label:'File system',    meta:'2 spans • 4.2s', tag:'#2' },
  github3:   { x:1080, y:640, w:200, h:60, color:SERVICE_PALETTE.github,    label:'Github API',     meta:'2 spans • 790ms' },
};

const SVC_EDGES = [
  { from:'workbench', to:'claude', label:'2 sent • 820 ms' },
  { from:'claude',    to:'k8s',    label:'2 sent • 820 ms', side:'top' },
  { from:'claude',    to:'github2',label:'2 sent • 820 ms' },
  { from:'claude',    to:'filesys' },
  { from:'k8s',       to:'github1' },
  { from:'filesys',   to:'github3' },
];

const ServiceNode = ({ node }) => (
  <div style={{
    position:'absolute',
    left: node.x, top: node.y,
    width: node.w, height: node.h,
    background:'var(--fill-one)',
    border:'1px solid var(--border-input)',
    borderRadius:'var(--r-medium)',
    padding:'10px 12px 10px 16px',
    display:'flex', flexDirection:'column', justifyContent:'center',
    overflow:'hidden',
  }}>
    <span style={{
      position:'absolute', left:0, top:0, bottom:0, width:4,
      background: node.color,
    }}/>
    <div style={{display:'flex', alignItems:'center', gap:8}}>
      <span style={{fontFamily:'var(--font-sans)', fontSize:14, fontWeight:600, color:'var(--text)'}}>{node.label}</span>
      {node.tag && <span style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--text-light)'}}>{node.tag}</span>}
      {node.blocked && (
        <span style={{marginLeft:'auto', color:'var(--text-danger-light)', display:'inline-flex'}}>
          <BlockedIcon size={16}/>
        </span>
      )}
    </div>
    <div style={{fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)', marginTop:4}}>{node.meta}</div>
  </div>
);

/* Edge: orthogonal route from right-edge of `from` to left-edge of `to`,
   with one mid-x kink. Renders both an SVG path and a centered label. */
const ServiceEdge = ({ from, to, label }) => {
  const a = SVC_NODES[from];
  const b = SVC_NODES[to];
  const x1 = a.x + a.w;
  const y1 = a.y + a.h / 2;
  const x2 = b.x;
  const y2 = b.y + b.h / 2;
  const midX = x1 + (x2 - x1) / 2;
  const d = `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`;
  const labelX = midX;
  const labelY = (y1 + y2) / 2;
  return (
    <>
      <path d={d} stroke="var(--border-input)" strokeWidth="1.2" fill="none"/>
      {label && (
        <foreignObject x={labelX - 65} y={labelY - 14} width="130" height="28">
          <div style={{
            display:'inline-flex', alignItems:'center', gap:6,
            padding:'3px 8px',
            background:'var(--fill-one)',
            border:'1px solid var(--border-input)',
            borderRadius:'var(--r-small)',
            fontFamily:'var(--font-sans)', fontSize:12, color:'var(--text-light)',
            whiteSpace:'nowrap',
          }}>
            <span style={{color:'var(--text)'}}>{label.split('•')[0].trim()}</span>
            <span>•</span>
            <span style={{color:'var(--text)', fontFamily:'var(--font-mono)'}}>{label.split('•')[1].trim()}</span>
          </div>
        </foreignObject>
      )}
    </>
  );
};

const ServiceLegend = () => (
  <div style={{
    position:'absolute', left:24, bottom:24,
    background:'var(--fill-one)',
    border:'1px solid var(--border)',
    borderRadius:'var(--r-large)',
    padding:'var(--sp-medium)',
    fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text)',
  }}>
    <div style={{fontWeight:600, marginBottom:8}}>Services</div>
    <div style={{display:'flex', flexDirection:'column', gap:6}}>
      {[
        ['Workbench',     SERVICE_PALETTE.workbench],
        ['Agents',        SERVICE_PALETTE.agents],
        ['Claude API',    SERVICE_PALETTE.claude],
        ['Kubernetes API',SERVICE_PALETTE.k8s],
        ['File system',   SERVICE_PALETTE.filesys],
        ['Github API',    SERVICE_PALETTE.github],
      ].map(([label, color]) => (
        <div key={label} style={{display:'flex', alignItems:'center', gap:8}}>
          <span style={{width:14, height:10, background:color, borderRadius:2}}/>
          <span>{label}</span>
        </div>
      ))}
    </div>
    <div style={{height:1, background:'var(--border)', margin:'12px 0'}}/>
    <div style={{display:'flex', flexDirection:'column', gap:6}}>
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <span style={{width:14, height:1.5, background:'var(--text-light)'}}/>
        <span>Workbench</span>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <svg width="14" height="2"><line x1="0" y1="1" x2="14" y2="1" stroke="var(--text-light)" strokeDasharray="2 2"/></svg>
        <span>Agents</span>
      </div>
    </div>
  </div>
);

const ServiceGraph = () => (
  <div style={{
    flex:1, position:'relative',
    background:
      'radial-gradient(circle, var(--border) 1px, transparent 1px)',
    backgroundSize:'16px 16px',
    backgroundColor:'var(--fill-zero)',
    border:'1px solid var(--border)',
    borderRadius:'var(--r-large)',
    overflow:'auto',
  }}>
    <div style={{position:'relative', width:1320, height:760}}>
      <svg
        width={1320} height={760}
        style={{position:'absolute', left:0, top:0, pointerEvents:'none'}}
      >
        {SVC_EDGES.map((e, i) => <ServiceEdge key={i} {...e}/>)}
      </svg>
      {Object.values(SVC_NODES).map((node, i) => <ServiceNode key={i} node={node}/>)}
      <ServiceLegend/>
    </div>
  </div>
);

const TplServiceGraph = () => {
  const [mode, setMode] = React.useState('graph');
  return (
    <div style={{padding:'var(--sp-medium)', height:'100%', overflow:'hidden', background:'var(--grey-950)', display:'flex', flexDirection:'column', gap:'var(--sp-medium)'}}>
      <TraceTopBar active={mode} onSelect={setMode}/>
      <ServiceGraph/>
    </div>
  );
};

/* ───────── Workbench job · sectioned memos ───────── */
/* Reference: Figma · Console > Workbench job (single-pane).
   Collapsible content sections with an icon + UPPERCASE label and a right-
   edge status glyph. Footer composer at the bottom. */

const JobSectionHeader = ({ icon, label, collapsed, onToggle, status }) => (
  <button
    onClick={onToggle}
    style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      width:'100%',
      padding:'14px var(--sp-medium)',
      background:'transparent', border:'none', cursor:'pointer',
      borderBottom: collapsed ? 'none' : '1px solid var(--border)',
      textAlign:'left',
    }}
  >
    <span style={{display:'inline-flex', alignItems:'center', gap:'var(--sp-small)'}}>
      <span style={{
        color:'var(--icon-light)',
        transform: collapsed ? 'rotate(-90deg)' : 'rotate(0deg)',
        transition:'transform .15s ease',
        display:'inline-flex',
      }}>
        <CaretDownIcon size={10}/>
      </span>
      <span style={{color:'var(--icon-light)', display:'inline-flex'}}>{icon}</span>
      <span style={{
        fontFamily:'var(--font-semi)', fontSize:13,
        letterSpacing:'0.08em', textTransform:'uppercase',
        color:'var(--text)',
      }}>{label}</span>
    </span>
    {status === 'ok' && (
      <span style={{display:'inline-flex'}}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 8a5 5 0 008 4M13 8a5 5 0 00-8-4" stroke="var(--text-success)"/>
          <path d="M11 8.5l2-0.5-1 2M5 7.5L3 8l1-2" stroke="var(--text-success)" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    )}
    {status === 'blocked' && (
      <span style={{color:'var(--text-danger-light)', display:'inline-flex'}}>
        <BlockedIcon size={16}/>
      </span>
    )}
    {status === 'pending' && (
      <span style={{
        width:14, height:14, borderRadius:999,
        border:'1.5px dashed var(--icon-xlight)', display:'inline-block',
      }}/>
    )}
  </button>
);

const JobSection = ({ icon, label, status, defaultOpen = true, children }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div>
      <JobSectionHeader
        icon={icon} label={label} status={status}
        collapsed={!open} onToggle={() => setOpen(o => !o)}
      />
      {open && (
        <div style={{padding:'var(--sp-medium) var(--sp-medium) var(--sp-large) calc(var(--sp-medium) + 20px)'}}>
          {children}
        </div>
      )}
    </div>
  );
};

const KebabMenu = ({ open, items }) => open ? (
  <div style={{
    position:'absolute', top:'calc(100% + 6px)', right:0,
    background:'var(--fill-one)',
    border:'1px solid var(--border)',
    borderRadius:'var(--r-large)',
    padding:6,
    minWidth:200,
    boxShadow:'0 8px 28px rgba(0,0,0,.28), 0 0 0 1px rgba(0,0,0,.05)',
    zIndex:10,
  }}>
    {items.map((it, i) => (
      <button key={i} style={{
        display:'flex', alignItems:'center', gap:'var(--sp-small)',
        width:'100%', padding:'8px 10px',
        background:'transparent', border:'none', cursor:'pointer',
        borderRadius:'var(--r-medium)',
        color: it.danger ? 'var(--text-danger-light)' : 'var(--text)',
        fontFamily:'var(--font-sans)', fontSize:14, textAlign:'left',
      }}>
        <span style={{display:'inline-flex'}}>{it.icon}</span>
        {it.label}
      </button>
    ))}
  </div>
) : null;

const TplWorkbenchJob = () => {
  return (
    <div className="pc-app">
      <Rail active={7} />
      <TopBar />
      <div className="pc-main" style={{flexDirection:'row', padding:0, minHeight:0}}>
        <div style={{flex:1, display:'flex', flexDirection:'column', minWidth:0, minHeight:0, overflow:'hidden'}}>
          <div style={{padding:'var(--sp-medium) var(--sp-large) 0', background:'var(--grey-950)'}}>
            <div className="pc-side__crumbs" style={{marginBottom:'var(--sp-large)'}}>
              <span>workbenches</span>
              <span className="sep">/</span>
              <span>demo-workbench</span>
              <span className="sep">/</span>
              <strong>You've been assigned the following issue from l…</strong>
            </div>

            {/* Title strip */}
            <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'var(--sp-large)'}}>
              <div>
                <h1 style={{margin:0, fontFamily:'var(--font-semi)', fontSize:24, color:'var(--text)', fontWeight:500}}>
                  demo-workbench
                </h1>
                <div style={{display:'flex', alignItems:'center', gap:'var(--sp-small)', marginTop:8, color:'var(--text-light)', fontSize:13}}>
                  <span>Michael Guarino</span>
                  <span style={{fontFamily:'var(--font-mono)'}}>
                    2026-05-18 <span style={{color:'var(--text-primary-accent)'}}>22:33:52</span> UTC
                  </span>
                  <span style={{display:'inline-flex', alignItems:'center', gap:4, marginLeft:6}}>
                    <span title="kubernetes" style={{width:18, height:18, borderRadius:4, background:'rgba(60,140,236,0.18)', display:'inline-grid', placeItems:'center', color:'#326CE5'}}>
                      <KubernetesIcon size={12} color="currentColor"/>
                    </span>
                    <span title="prometheus" style={{width:18, height:18, borderRadius:4, background:'rgba(229,72,77,0.18)', display:'inline-grid', placeItems:'center', color:'#E5484D'}}>
                      <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor"/><path d="M4 8a4 4 0 008 0" stroke="currentColor"/></svg>
                    </span>
                    <span title="aws" style={{width:18, height:18, borderRadius:4, background:'rgba(255,153,0,0.18)', display:'inline-grid', placeItems:'center', color:'#FF9900', fontFamily:'var(--font-semi)', fontSize:9, fontWeight:700}}>aws</span>
                    <span style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--text-light)', marginLeft:2}}>+3</span>
                  </span>
                </div>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:'var(--sp-xsmall)'}}>
                <span className="pc-chip pc-chip--success" style={{padding:'2px 10px'}}>Successful</span>
                <button style={{
                  width:32, height:32, padding:0,
                  background:'transparent', border:'none',
                  color:'var(--icon-light)', cursor:'pointer',
                  display:'grid', placeItems:'center',
                }} title="Bookmark">
                  <BookmarkIcon size={16}/>
                </button>
              </div>
            </div>
          </div>

          {/* Body */}
          <div style={{
            flex:1, minHeight:0,
            padding:'0 var(--sp-large) var(--sp-large)',
            overflow:'auto', background:'var(--grey-950)',
            display:'flex', flexDirection:'column', gap:'var(--sp-medium)',
          }}>
            {/* Outer card wrapping historical chat (prompt panel + section list).
                Uses fill-one and a stronger border so it reads as one bounded
                region on the grey-950 page. */}
            <div style={{
              background:'var(--fill-one)',
              border:'1px solid var(--border-input)',
              borderRadius:'var(--r-large)',
              padding:'var(--sp-medium)',
              display:'flex', flexDirection:'column', gap:'var(--sp-medium)',
            }}>
              {/* Initial prompt panel — one elevation step above the outer card. */}
              <div style={{
                background:'var(--fill-two)',
                border:'1px solid var(--border-input)',
                borderRadius:'var(--r-large)',
                padding:'var(--sp-medium) var(--sp-medium) 14px',
                position:'relative',
                fontFamily:'var(--font-sans)', fontSize:14, lineHeight:'22px',
                color:'var(--text)',
              }}>
                <p style={{margin:0}}>
                  You've been assigned the following issue from linear, please investigate everything necessary to complete the task. The issue will be described below:
                </p>
                <p style={{margin:'14px 0 0', fontWeight:600}}>Double the size of the grafana deployment</p>
                <p style={{margin:'10px 0 0'}}>Plural fix this</p>
                <p style={{margin:'14px 0 0', fontWeight:600}}>Full Webhook Payload</p>
                <p style={{margin:'10px 0 0'}}>For reference, this is the webhook result from the original linear webhook:</p>
                <div style={{
                  margin:'12px 0 0',
                  fontFamily:'var(--font-semi)', fontSize:11, letterSpacing:'0.08em',
                  color:'var(--text-light)', textTransform:'uppercase',
                }}>JSON Block</div>
                <a style={{
                  position:'absolute', right:'var(--sp-medium)', bottom:8,
                  fontFamily:'var(--font-sans)', fontSize:13,
                  color:'var(--text-primary-accent)', textDecoration:'underline',
                  textDecorationColor:'rgba(153,218,255,0.5)', cursor:'pointer',
                }}>view more</a>
              </div>

              {/* Inline collapsible section rows */}
              <div style={{display:'flex', flexDirection:'column'}}>
                {[
                  { label:'Memo',            icon:<DocumentIcon size={12}/> },
                  { label:'Infrastructure',  icon:<CloudIcon size={12}/> },
                  { label:'Memo',            icon:<DocumentIcon size={12}/> },
                  { label:'Coding',          icon:<SearchIcon size={12}/> },
                  { label:'Memo',            icon:<DocumentIcon size={12}/> },
                  { label:'Canvas',          icon:null },
                ].map((s, i) => (
                  <button
                    key={i}
                    style={{
                      display:'flex', alignItems:'center', gap:'var(--sp-xsmall)',
                      padding:'12px 4px',
                      background:'transparent', border:'none', cursor:'pointer',
                      borderTop: i === 0 ? 'none' : '1px solid var(--border)',
                      textAlign:'left',
                    }}
                  >
                    <span style={{fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text-light)'}}>{s.label}</span>
                    {s.icon && <span style={{color:'var(--icon-xlight)', display:'inline-flex'}}>{s.icon}</span>}
                    <span style={{marginLeft:4, color:'var(--icon-light)', display:'inline-flex'}}>
                      <CaretRightIcon size={12}/>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Done summary */}
            <div style={{padding:'0 var(--sp-medium)'}}>
              <h2 style={{
                margin:'var(--sp-medium) 0 var(--sp-small)',
                fontFamily:'var(--font-semi)', fontSize:20, color:'var(--text)', fontWeight:500,
              }}>Done</h2>
              <p style={{margin:0, fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text)', lineHeight:'22px'}}>
                Created the GitOps change to double Grafana by <code style={{
                  fontFamily:'var(--font-mono)', fontSize:13,
                  background:'var(--fill-two)', border:'1px solid var(--border-input)',
                  borderRadius:'var(--r-small)', padding:'1px 6px',
                }}>replica count</code>.
              </p>

              <h2 style={{
                margin:'var(--sp-large) 0 var(--sp-small)',
                fontFamily:'var(--font-semi)', fontSize:20, color:'var(--text)', fontWeight:500,
              }}>What I found</h2>
              <ul style={{
                margin:0, paddingLeft:18,
                fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text)', lineHeight:'22px',
                display:'flex', flexDirection:'column', gap:6,
              }}>
                <li>
                  Target service:{' '}
                  <code style={{
                    fontFamily:'var(--font-mono)', fontSize:13,
                    background:'var(--fill-two)', border:'1px solid var(--border-input)',
                    borderRadius:'var(--r-small)', padding:'1px 6px',
                  }}>mgmt/grafana</code>
                </li>
              </ul>
            </div>

            {/* Composer — sticks to bottom of the scroll area */}
            <div style={{
              position:'sticky', bottom:0,
              background:'var(--fill-one)',
              border:'1px solid var(--border)',
              borderRadius:'var(--r-large)',
              padding:'14px var(--sp-medium)',
              marginTop:'auto',
              display:'flex', alignItems:'flex-end', gap:'var(--sp-small)',
              minHeight:80,
            }}>
              <div style={{flex:1, color:'var(--text-xlight)', fontFamily:'var(--font-sans)', fontSize:14}}>
                Send an additional message to this job
              </div>
              <button style={{
                width:32, height:32, borderRadius:999,
                background:'transparent', border:'1px solid var(--border-input)',
                color:'var(--icon-light)', cursor:'pointer',
                display:'grid', placeItems:'center',
              }}>
                <ArrowUpIcon size={14}/>
              </button>
            </div>
          </div>
        </div>

        {/* Full-height right-edge strip with side-panel toggle.
            This is its OWN structural column (not an absolute-positioned
            button) so the toggle never overlaps body content. */}
        <div style={{
          width:44, flexShrink:0,
          borderLeft:'1px solid var(--border-input)',
          background:'var(--fill-zero)',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          <button
            title="Open side panel"
            style={{
              width:28, height:28, padding:0,
              background:'transparent',
              border:'1px solid var(--border-input)',
              borderRadius:'var(--r-small)',
              cursor:'pointer',
              color:'var(--icon-light)', display:'grid', placeItems:'center',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor"/>
              <path d="M10 3v10" stroke="currentColor"/>
              <path d="M5.5 6.5L7.5 8l-2 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

/* ───────── Chat + Results split panel ───────── */
/* Reference: Figma · Console > Workbench job (split view).
   Left: progress feed with success badge + memos + tool-call timeline.
   Right: collapsible result cards (logs, charts, diagrams). */

const ToolCallRow = ({ kind, name, detail }) => (
  <div style={{display:'flex', alignItems:'center', gap:8, padding:'4px 0'}}>
    <span style={{
      fontFamily:'var(--font-sans)', fontSize:13,
      color: kind === 'fetched' ? 'var(--text)' : 'var(--text-light)',
      fontWeight: kind === 'fetched' ? 600 : 400,
    }}>{kind === 'fetched' ? 'Fetched logs' : kind === 'fetched-metrics' ? 'Fetched metrics' : 'Called tool'}</span>
    <span style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--text-light)'}}>{name}</span>
    {detail && <span style={{fontFamily:'var(--font-sans)', fontSize:12, color:'var(--text-xlight)'}}>{detail}</span>}
  </div>
);

const JobChatPane = () => (
  <div style={{
    display:'flex', flexDirection:'column',
    minHeight:0, minWidth:0,
    background:'var(--grey-950)',
  }}>
    <div style={{padding:'var(--sp-medium) var(--sp-large)'}}>
      <div className="pc-side__crumbs" style={{marginBottom:'var(--sp-medium)'}}>
        <span>workbench</span><span className="sep">/</span><span>workbench name</span><span className="sep">/</span><strong>workbench job</strong>
      </div>
      <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between'}}>
        <div>
          <h1 className="t-title2" style={{margin:0, fontFamily:'var(--font-semi)', color:'var(--text)'}}>Workbench name</h1>
          <div className="t-body2" style={{color:'var(--text-light)', marginTop:4}}>Prompt description</div>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'var(--sp-xsmall)'}}>
          <span className="pc-chip pc-chip--success" style={{padding:'2px 10px'}}>Succeeded</span>
          <button style={{
            width:32, height:32,
            background:'transparent', border:'1px solid var(--border-input)',
            borderRadius:'var(--r-small)', display:'grid', placeItems:'center',
            cursor:'pointer', color:'var(--icon-light)',
          }}><MoreIcon size={14}/></button>
        </div>
      </div>
    </div>

    <div style={{flex:1, overflow:'auto', padding:'0 var(--sp-large) var(--sp-large)'}}>
      <div className="pc-card" style={{padding:'var(--sp-medium)', display:'flex', flexDirection:'column', gap:'var(--sp-small)'}}>
        <p style={{margin:0, fontFamily:'var(--font-sans)', fontSize:14, lineHeight:'22px', color:'var(--text)'}}>
          This will only take a few minutes. Feel free leave while the agent runs in the background. You can return to this by clicking on the “View progress”.
        </p>

        {/* Memo accordion stubs */}
        {[<DocumentIcon size={12}/>, <SearchIcon size={12}/>].map((ic, i) => (
          <div key={i} style={{display:'flex', alignItems:'center', gap:8, padding:'8px 0', borderTop:'1px solid var(--border)'}}>
            <span style={{
              fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text)', fontWeight:600,
            }}>Memo</span>
            <span style={{color:'var(--icon-light)', display:'inline-flex'}}>{ic}</span>
            <span style={{marginLeft:'auto', color:'var(--icon-light)', display:'inline-flex'}}>
              <CaretRightIcon size={12}/>
            </span>
          </div>
        ))}

        <div style={{borderTop:'1px solid var(--border)', paddingTop:'var(--sp-small)'}}>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <span style={{fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text)', fontWeight:600}}>Memo</span>
            <span style={{color:'var(--icon-light)', display:'inline-flex'}}><CaretDownIcon size={10}/></span>
          </div>
          <ul style={{margin:'8px 0 0', paddingLeft:0, listStyle:'none', fontFamily:'var(--font-sans)', fontSize:14, color:'var(--text)', display:'flex', flexDirection:'column', gap:4}}>
            <li>Fetching s3 buckets</li>
            <li>Fetching RDS instance</li>
            <li>Fetching lambda functions</li>
          </ul>
          <div style={{marginTop:'var(--sp-small)', display:'flex', flexDirection:'column', gap:2}}>
            <ToolCallRow kind="called" name="w__plrl_create_pr"/>
            <ToolCallRow kind="fetched" name="w__plrl_stack_files"/>
            <ToolCallRow kind="called" name="w__plrl_stack_files"/>
            <ToolCallRow kind="called" name="w__plrl_woooo_ril_metrics_really_long"/>
            <ToolCallRow kind="fetched-metrics" name="w__plrl_stack_files"/>
            <ToolCallRow kind="called" name="w__plrl_woooo_ril_metrics_really_long"/>
            <ToolCallRow kind="called" name="read"/>
            <div style={{fontFamily:'var(--font-sans)', fontSize:12, color:'var(--text-light)', cursor:'pointer', marginTop:6}}>
              View more <span style={{color:'var(--text-xlight)'}}>+21</span>
            </div>
          </div>

          <p style={{margin:'var(--sp-medium) 0 0', fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)', lineHeight:'20px', textAlign:'center'}}>
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          </p>
        </div>

        {/* Bottom memo with chart preview */}
        <div style={{borderTop:'1px solid var(--border)', paddingTop:'var(--sp-small)'}}>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <span style={{fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text)', fontWeight:600}}>Memo</span>
            <span style={{color:'var(--icon-light)', display:'inline-flex'}}><CaretDownIcon size={10}/></span>
          </div>
          <div style={{
            marginTop:'var(--sp-small)',
            background:'var(--fill-two)',
            border:'1px solid var(--border-input)',
            borderRadius:'var(--r-medium)',
            padding:'var(--sp-small)',
          }}>
            <LineChart
              width={460} height={180}
              series={[
                { color:'#9FA3F9', data:[10, 14, 12, 22, 20, 30, 25, 35, 28, 24, 30] },
                { color:'#F5E78E', data:[5, 8, 6, 12, 11, 15, 14, 16, 18, 15, 16] },
              ]}
              xLabels={6}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ResultLogsCard = () => (
  <div className="pc-card" style={{padding:'var(--sp-medium)'}}>
    <div style={{fontFamily:'var(--font-sans)', fontSize:14, fontWeight:600, color:'var(--text)', marginBottom:'var(--sp-small)'}}>
      flow-test-stateless error logs
    </div>
    <pre style={{
      margin:0,
      background:'var(--fill-two)',
      border:'1px solid var(--border-input)',
      borderRadius:'var(--r-medium)',
      padding:'var(--sp-medium)',
      fontFamily:'var(--font-mono)', fontSize:12, lineHeight:'18px',
      color:'var(--text-light)',
      whiteSpace:'pre-wrap', wordBreak:'break-word',
    }}>
      <span style={{borderLeft:'2px solid #66C7FF', paddingLeft:8, display:'block'}}><span style={{color:'var(--text)'}}>2022-11-02T22:40:45-04:00 02:40:45.313</span> request_id=FyPyzBAJ7MzxAKcAQPoR{'\n'}[info] GET /health</span>
      <span style={{borderLeft:'2px solid #66C7FF', paddingLeft:8, display:'block', marginTop:8}}><span style={{color:'var(--text)'}}>2022-11-02T22:40:45-04:00 02:40:45.313</span> request_id=FyPyzBADvxnPvKAAQCCS{'\n'}[info] GET /health</span>
      <span style={{borderLeft:'2px solid transparent', paddingLeft:8, display:'block', marginTop:8}}>2022-11-02T22:40:44-04:00 02:40:44.217 [info] Application k8s watcher alive at pid=#PID&lt;0.6131.2&gt;</span>
      <span style={{borderLeft:'2px solid transparent', paddingLeft:8, display:'block', marginTop:8}}>2022-11-02T22:40:44-04:00 02:40:44.159 [info] received ping for Elixir.Console.Watchers.Application pid=#PID&lt;0.6127.2&gt; node=console@10.0.48.215</span>
      <span style={{borderLeft:'2px solid #E5374E', paddingLeft:8, display:'block', marginTop:8}}>2022-11-02T22:40:41-04:00 02:40:41.738 [info] received ping for Elixir.Console.Watchers.Upgrade pid=#PID&lt;0.11558.7&gt; node=console@10.0.20.92</span>
      <span style={{borderLeft:'2px solid #E5374E', paddingLeft:8, display:'block', marginTop:8}}>2022-11-02T22:40:40-04:00 02:40:40.847 [info] No build found</span>
    </pre>
    <div style={{marginTop:'var(--sp-small)', fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)'}}>
      Supporting pod logs for the same window, filtered to 500/error/exception/failed.
    </div>
  </div>
);

const ResultChartCard = () => (
  <div className="pc-card" style={{padding:'var(--sp-medium)'}}>
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'var(--sp-medium)'}}>
      <div style={{fontFamily:'var(--font-sans)', fontSize:16, fontWeight:600, color:'var(--text)'}}>Title goes here</div>
      <RangeToggle/>
    </div>
    <div style={{display:'flex', justifyContent:'center', gap:'var(--sp-medium)', marginBottom:'var(--sp-medium)', flexWrap:'wrap'}}>
      {[
        ['Success', '#7CE8B9'],
        ['Error',   '#F38E92'],
        ['Warning', '#F5C518'],
        ['Info',    '#66C7FF'],
        ['Unknown', 'rgba(255,255,255,0.4)'],
      ].map(([label, color]) => (
        <span key={label} style={{display:'inline-flex', alignItems:'center', gap:6, fontFamily:'var(--font-sans)', fontSize:12, color:'var(--text-light)'}}>
          <span style={{width:10, height:10, borderRadius:2, background:color}}/>
          {label}
        </span>
      ))}
    </div>
    <LineChart
      width={620} height={260}
      series={[
        { color:'#7CE8B9', data:[50, 45, 55, 60, 50, 45, 40, 55, 70, 78, 82] },
        { color:'#F38E92', data:[30, 35, 50, 55, 45, 45, 50, 60, 65, 60, 65] },
        { color:'#F5A524', data:[45, 60, 70, 65, 55, 60, 70, 50, 35, 30, 25] },
        { color:'#66C7FF', data:[60, 70, 60, 55, 50, 60, 70, 55, 45, 40, 38] },
        { color:'#BCB8FF', data:[40, 42, 50, 55, 58, 60, 65, 70, 72, 74, 78] },
      ]}
      xLabels={6}
    />
    <div style={{marginTop:'var(--sp-small)', fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-light)', lineHeight:'20px'}}>
      Shows per-minute `/ping` request counts split by status code on the affected pod. It demonstrates the stable partial-failure pattern: about 39-40 successful requests and 19-20 failing requests per minute.
    </div>
  </div>
);

const JobResultsPane = () => (
  <aside style={{
    width:740, flexShrink:0, minHeight:0,
    background:'var(--grey-950)',
    borderLeft:'1px solid var(--border)',
    display:'flex', flexDirection:'column',
  }}>
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'10px var(--sp-medium)',
      borderBottom:'1px solid var(--border)',
    }}>
      <div style={{display:'flex', alignItems:'center', gap:'var(--sp-small)'}}>
        <IconBtn>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor"/>
            <path d="M6 3v10" stroke="currentColor"/>
            <path d="M10.5 6.5L8.5 8l2 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconBtn>
        <SegmentedPills
          active={0}
          tabs={[
            { label:'Dashboard',    icon: AppsIcon },
            { label:'Topology',     icon: ClusterIcon },
            { label:'Pull requests',icon: GitPullIcon },
          ]}
        />
      </div>
      <IconBtn>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeLinecap="round"/>
        </svg>
      </IconBtn>
    </div>
    <div style={{flex:1, overflow:'auto', padding:'var(--sp-medium)', display:'flex', flexDirection:'column', gap:'var(--sp-medium)'}}>
      <ResultLogsCard/>
      <ResultChartCard/>
    </div>
  </aside>
);

const TplChatResults = () => (
  <div className="pc-app">
    <Rail active={7} />
    <TopBar />
    <div className="pc-main" style={{padding:0}}>
      <div style={{flex:1, display:'flex', minWidth:0, minHeight:0}}>
        <JobChatPane/>
        <JobResultsPane/>
      </div>
    </div>
  </div>
);

Object.assign(window, {
  TplTraceGantt, TplServiceGraph, TplWorkbenchJob, TplChatResults,
  TraceTopBar, GanttChart, ServiceGraph,
  JobSection, JobSectionHeader, JobChatPane, JobResultsPane,
});
