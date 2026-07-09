/* cc-job.jsx — workbench job detail. Streams a running state, then settles into
   the split thread + results panel (Conclusion / Dashboard / Topology / PRs / Eval).
   Matches console.plrldemo.onplural.sh job view. */

const InlineCode = ({ children }) => (
  <code style={{
    fontFamily: 'var(--font-mono)', fontSize: 12.5,
    background: 'var(--fill-two)', border: '1px solid var(--border-input)',
    borderRadius: 'var(--r-small)', padding: '1px 6px', color: 'var(--text)',
    whiteSpace: 'nowrap',
  }}>{children}</code>
);

/* ── running simulation (matches console job-level thinking + activities) ── */
const RUN_STEPS = [
  { t: 'jobTool', name: 'w__plrl_routing' },
  { t: 'jobTool', name: 'w__plrl_setup_investigation' },
  { t: 'activity', name: 'observability', prompt: 'Query Prometheus and logs for flow-test-stateless 5xx on GET /ping.' },
  { t: 'tool', name: 'w__plrl_prometheus_query' },
  { t: 'tool', name: 'w__plrl_get_pod_logs' },
  { t: 'tool', name: 'w__plrl_describe_pod' },
  { t: 'activity', name: 'infrastructure', prompt: 'Confirm the pod is healthy and rule out infra failure.' },
  { t: 'tool', name: 'w__plrl_describe_pod' },
  { t: 'activity', name: 'coding', prompt: 'Inspect app/main.py and open a minimal fix PR.' },
  { t: 'tool', name: 'w__plrl_stack_files' },
  { t: 'tool', name: 'w__plrl_read_file' },
  { t: 'tool', name: 'w__plrl_create_pr' },
];

const WHIMSEYS = [
  'Tracing the 5xx spike on flow-test-stateless',
  'Hunting down that suspicious /ping handler',
  'Checking whether infra or code is to blame',
];

const WORKING_THEORY =
  'Need to find why flow-test-stateless is returning sustained 5xx on GET /ping — check metrics and logs, confirm root cause, and open a minimal fix PR.';

const AGENT_TODOS = [
  { name: 'query prometheus metrics', desc: 'Confirm 5xx rate and scope on demo-prod' },
  { name: 'pull pod logs', desc: 'Look for exceptions in flow-test-stateless' },
  { name: 'inspect application code', desc: 'Find the handler bug and open a fix PR' },
];

const useThinkingDots = () => {
  const [count, setCount] = React.useState(1);
  React.useEffect(() => {
    const id = setInterval(() => setCount((n) => (n >= 3 ? 1 : n + 1)), 1000);
    return () => clearInterval(id);
  }, []);
  return count;
};

const SpinnerAlt = ({ size = 16 }) => {
  const stroke = Math.max(1, size * 0.138);
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg className="pc-spinner-alt" width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <circle cx={size / 2} cy={size / 2} r={r} stroke="var(--grey-750)" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="var(--text-primary-accent)"
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={`${c * 0.28} ${c * 0.72}`}
        strokeLinecap="round"
      />
    </svg>
  );
};

const RunningChip = () => (
  <span className="pc-chip pc-run-chip">
    <SpinnerAlt size={16} />
    Running
  </span>
);

const ToolCallCaption = ({ tool, pending }) => (
  <p className="pc-tool-call">
    <span className={pending ? 'pc-text-shimmer' : undefined}>
      {pending ? 'Calling' : 'Called'} tool <strong>{tool}</strong>
    </span>
  </p>
);

const AccordionTrigger = ({ label, open, onToggle, labelClass = '' }) => (
  <button type="button" className="pc-acc-trigger" onClick={onToggle}>
    <span className={'pc-acc-trigger__label ' + labelClass}>{label}</span>
    <span className="pc-acc-trigger__caret" style={{ transform: open ? 'rotate(90deg)' : 'none' }}>
      <window.CaretRightIcon size={10} color="currentColor" />
    </span>
  </button>
);

const JobLevelThinking = ({ tools, pendingTool, thinkingOpen, setThinkingOpen, dots }) => (
  <div className="pc-thinking-block">
    <AccordionTrigger
      label={<>thinking<span style={{ display: 'inline-block', minWidth: '3ch' }}>{'.'.repeat(dots)}</span></>}
      open={thinkingOpen}
      onToggle={() => setThinkingOpen((o) => !o)}
      labelClass=""
    />
    {thinkingOpen ? (
      <div className="pc-thinking-block__items">
        {tools.map((tool) => (
          <ToolCallCaption key={tool} tool={tool} pending={false} />
        ))}
      </div>
    ) : (
      pendingTool && <ToolCallCaption tool={pendingTool} pending />
    )}
  </div>
);

const AILoadingLine = ({ text }) => (
  <div className="pc-ai-loading">
    <span className="pc-loader-pulse" style={{ display: 'inline-flex' }}>
      <window.LoaderIcon size={12} color="var(--icon-xlight)" />
    </span>
    <span className="pc-ai-whimsey">{text}</span>
  </div>
);

const ActivityRow = ({ name, icon, prompt, tools, open, onToggle, running, whimsey }) => {
  const completed = running && tools.length > 0 ? tools.slice(0, -1) : tools;
  const pendingTool = running && tools.length > 0 ? tools[tools.length - 1] : null;
  const callsHeader =
    completed.length > 0
      ? `${completed.length} tool ${completed.length === 1 ? 'call' : 'calls'}`
      : null;
  const [callsOpen, setCallsOpen] = React.useState(false);

  return (
    <div className={'pc-activity-row' + (running ? ' pc-activity-row--running' : '')}>
      <div className="pc-activity-row__trigger">
        <AccordionTrigger
          label={
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span className="pc-activity-name">{name}</span>
              {icon}
            </span>
          }
          open={open}
          onToggle={onToggle}
        />
      </div>
      {open && (
        <div className="pc-activity-body cc-fade">
          {prompt && (
            <p className="pc-activity-prompt">
              <strong>Prompt:</strong> {prompt}
            </p>
          )}
          {callsHeader && (
            <>
              <AccordionTrigger
                label={callsHeader}
                open={callsOpen}
                onToggle={() => setCallsOpen((o) => !o)}
                labelClass="pc-tool-calls-label"
              />
              {callsOpen && (
                <div className="pc-thinking-block__items">
                  {completed.map((tool) => (
                    <ToolCallCaption key={tool} tool={tool} pending={false} />
                  ))}
                </div>
              )}
            </>
          )}
          {!callsOpen && pendingTool && <ToolCallCaption tool={pendingTool} pending />}
          {callsOpen && pendingTool && <ToolCallCaption tool={pendingTool} pending />}
          {running && whimsey && <AILoadingLine text={whimsey} />}
        </div>
      )}
    </div>
  );
};

const WorkingTheoryPanel = ({ step }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-large)' }}>
    <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: '24px', color: 'var(--text)' }}>
      {WORKING_THEORY}
    </p>
    <div className="pc-agent-todos">
      <div className="pc-agent-todos__label">Agent todos</div>
      {AGENT_TODOS.map((todo, i) =>
        step >= 3 + i * 2 ? (
          <div key={todo.name} className="pc-agent-todo cc-fade">
            <window.CircleDashIcon size={16} color="var(--icon-light)" />
            <div style={{ minWidth: 0, flex: 1 }}>
              <div className="pc-agent-todo__name">{todo.name}</div>
              <div className="pc-agent-todo__desc">{todo.desc}</div>
            </div>
            <span className="pc-agent-todo__chev">
              <window.CaretDownIcon size={12} />
            </span>
          </div>
        ) : null
      )}
    </div>
  </div>
);

const useRunProgress = (n) =>
  React.useMemo(() => {
    const jobTools = [];
    const activities = {};
    let active = null;
    (RUN_STEPS.slice(0, n) || []).forEach((step) => {
      if (step.t === 'jobTool') jobTools.push(step.name);
      if (step.t === 'activity') {
        active = step.name;
        activities[step.name] = { prompt: step.prompt, tools: [] };
      }
      if (step.t === 'tool' && active) activities[active].tools.push(step.name);
    });
    return { jobTools, activities, active };
  }, [n]);

const ACTIVITY_ICONS = {
  observability: <window.AppsIcon size={12} color="var(--icon-xlight)" />,
  infrastructure: <window.CloudIcon size={12} color="var(--icon-xlight)" />,
  coding: <window.SearchIcon size={12} color="var(--icon-xlight)" />,
};

/* ── collapsible thread section (done state) ── */
const ThreadSection = ({ label, icon, children, defaultOpen = false }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '12px 2px',
        background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
      }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text)' }}>{label}</span>
        {icon && <span style={{ color: 'var(--icon-xlight)', display: 'inline-flex' }}>{icon}</span>}
        <span style={{ marginLeft: 'auto', color: 'var(--icon-light)', display: 'inline-flex', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform .15s' }}><window.CaretRightIcon size={12} /></span>
      </button>
      {open && <div style={{ padding: '0 2px 14px', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-light)', lineHeight: '21px' }}>{children}</div>}
    </div>
  );
};

/* ── root-cause body (shared by left thread preview + right Conclusion) ── */
const RootCauseBody = ({ full }) => (
  <div style={{ fontFamily: 'var(--font-sans)' }}>
    <h2 style={{ fontFamily: 'var(--font-semi)', fontSize: full ? 24 : 20, fontWeight: 500, color: 'var(--text)', margin: '0 0 14px', letterSpacing: '-0.25px', lineHeight: 1.2 }}>
      Root Cause: Hardcoded Exception in <InlineCode>/ping</InlineCode> Handler
    </h2>
    <p style={{ margin: 0, fontSize: 15, lineHeight: '24px', color: 'var(--text)' }}>
      The <InlineCode>flow-test-stateless</InlineCode> service has a <strong style={{ fontWeight: 600 }}>code-level bug</strong> causing a sustained ~33% 5xx error rate on <InlineCode>GET /ping</InlineCode>.
    </p>

    <h3 style={{ fontFamily: 'var(--font-semi)', fontSize: 18, fontWeight: 500, color: 'var(--text)', margin: '24px 0 10px' }}>What's happening</h3>
    <ul style={{ margin: 0, paddingLeft: 20, fontSize: 15, lineHeight: '24px', color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <li><InlineCode>app/main.py</InlineCode> in image <InlineCode>ghcr.io/pluralsh/plrl-cd-test:0.1.2</InlineCode> raises <InlineCode>Exception("unknown internal error")</InlineCode> when <InlineCode>epoch_second % 3 == 0</InlineCode></li>
      <li>A sidecar <InlineCode>pinger</InlineCode> container hits <InlineCode>/ping</InlineCode> every second, continuously triggering it</li>
      <li>Result: flat ~0.32 req/s 5xx rate sustained over the entire observation window — not a transient spike</li>
    </ul>

    {full && <>
      <h3 style={{ fontFamily: 'var(--font-semi)', fontSize: 18, fontWeight: 500, color: 'var(--text)', margin: '28px 0 12px' }}>Pod is healthy — not infra-related</h3>
      <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r-large)', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '12px 16px', borderBottom: '1px solid var(--border)', background: 'var(--fill-two)' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Signal</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Value</span>
        </div>
        {[['Restarts', '0'], ['CPU', '~0.006 cores'], ['Memory', '~42 MB (stable)'], ['OOMKill / CrashLoop', 'None']].map(([s, v], i, a) => (
          <div key={s} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '12px 16px', borderBottom: i < a.length - 1 ? '1px solid var(--border)' : 'none' }}>
            <span style={{ fontSize: 14, color: 'var(--text)' }}>{s}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-light)' }}>{v}</span>
          </div>
        ))}
      </div>

      <h3 style={{ fontFamily: 'var(--font-semi)', fontSize: 18, fontWeight: 500, color: 'var(--text)', margin: '28px 0 12px' }}>Fix</h3>
      <p style={{ margin: 0, fontSize: 15, lineHeight: '24px', color: 'var(--text)' }}>
        <a style={{ color: 'var(--text-primary-accent)', textDecoration: 'underline', textDecorationColor: 'rgba(153,218,255,0.5)', fontWeight: 600 }}>PR #232</a> removes the conditional exception from <InlineCode>app/main.py</InlineCode>. Once merged and a new image is built/deployed, the alert will resolve.
      </p>
    </>}
  </div>
);

/* ── right panel: PR view ── */
const PR_DIFF = [
  { t: 'ctx', text: '@@ app/main.py' },
  { t: 'ctx', text: '@app.get("/ping")' },
  { t: 'ctx', text: 'def ping():' },
  { t: 'del', text: '    epoch_second = int(time.time())' },
  { t: 'del', text: '    if epoch_second % 3 == 0:' },
  { t: 'del', text: '        raise Exception("unknown internal error")' },
  { t: 'ctx', text: '    return {"status": "ok"}' },
];

const BookDemoModal = ({ open, onClose, onBook }) => {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="pc-demo-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="pc-demo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pc-book-demo-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="pc-book-demo-modal-title" className="pc-demo-modal__title">
          Want to see what it can do for you?
        </h2>
        <p className="pc-demo-modal__body t-body2">
          {"Let's chat — we'll show you what's possible on your stack."}
        </p>
        <div className="pc-demo-modal__actions">
          <button type="button" className="pc-btn pc-btn--secondary" onClick={onClose}>
            Not now
          </button>
          <button type="button" className="pc-btn pc-btn--primary" onClick={onBook}>
            Book a demo
          </button>
        </div>
      </div>
    </div>
  );
};

const RemediationPRCard = ({ onActivate }) => (
  <div
    className={
      'pc-card pc-remediation-pr' + (onActivate ? ' pc-remediation-pr--clickable' : '')
    }
    role={onActivate ? 'button' : undefined}
    tabIndex={onActivate ? 0 : undefined}
    onClick={onActivate}
    onKeyDown={
      onActivate
        ? (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onActivate();
            }
          }
        : undefined
    }
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--sp-medium)', marginBottom: 'var(--sp-small)' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-small)', minWidth: 0 }}>
        <span style={{ width: 32, height: 32, borderRadius: 'var(--r-medium)', background: 'var(--fill-two)', border: '1px solid var(--border-input)', display: 'inline-grid', placeItems: 'center', color: 'var(--icon-light)', flexShrink: 0 }}><window.GitPullIcon size={14} /></span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>fix(flow-test): remove conditional exception in /ping handler</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-light)', marginTop: 2 }}>pluralsh/plrl-cd-test #232</div>
        </div>
      </div>
      <span className="pc-chip pc-chip--success" style={{ padding: '3px 10px', flexShrink: 0 }}><window.CheckRoundedIcon size={12} />Open</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-small)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-light)', marginBottom: 'var(--sp-medium)' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--purple-300)' }} />plrl/fix-ping-500s</span>
      <span style={{ color: 'var(--text-success)' }}>+1</span><span style={{ color: 'var(--text-danger)' }}>−3</span>
    </div>
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: '20px', background: 'rgba(0,0,0,0.25)', borderRadius: 'var(--r-medium)', marginTop: 'var(--sp-small)', overflow: 'hidden' }}>
        {PR_DIFF.map((h, i) => {
          const bg = h.t === 'del' ? 'rgba(233,83,116,0.10)' : 'transparent';
          const col = h.t === 'del' ? 'var(--text-danger-light)' : 'var(--text-light)';
          const mark = h.t === 'del' ? '−' : h.t === 'ctx' && h.text.startsWith('@@') ? '' : '\u00A0';
          return (
            <div key={i} style={{ display: 'flex', background: bg, padding: '0 12px', color: h.text.startsWith('@@') ? 'var(--text-xlight)' : col }}>
              <span style={{ width: 14, flexShrink: 0, userSelect: 'none' }}>{mark}</span>
              <span style={{ whiteSpace: 'pre' }}>{h.text}</span>
            </div>
          );
        })}
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--sp-small)' }}>
      <button type="button" className="pc-btn pc-btn--primary pc-btn--small">View PR
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 4 }} aria-hidden><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
  </div>
);

const PRView = ({ onPrAreaClick }) => (
  <section className="pc-pr-conclusion" aria-labelledby="pc-pr-conclusion-title">
    <h2 id="pc-pr-conclusion-title" className="pc-pr-conclusion__title">Conclusion</h2>
    <p className="pc-pr-conclusion__lead">
      The agent traced the alert to a code bug and opened a minimal remediation PR — you review and approve before anything merges.
    </p>
    <window.TourTarget id="remediation-pr">
      <window.DemoHint tourId="remediation-pr" block className="pc-demo-hint--block pc-demo-hint--conclusion">
        <RemediationPRCard onActivate={onPrAreaClick} />
      </window.DemoHint>
    </window.TourTarget>
  </section>
);

/* ── right panel: Dashboard tab ── */
const DashboardView = () => (
  <div className="pc-card" style={{ padding: 'var(--sp-medium)' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>flow-test-stateless · /ping requests by status</div>
    <div style={{ fontSize: 13, color: 'var(--text-light)', marginBottom: 'var(--sp-medium)' }}>Per-minute request counts. ~40 ok / ~20 error sustained — a stable partial-failure pattern.</div>
    <div style={{ display: 'flex', gap: 'var(--sp-medium)', marginBottom: 'var(--sp-small)' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-light)' }}><span style={{ width: 10, height: 10, borderRadius: 2, background: '#7CE8B9' }} />200 ok</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-light)' }}><span style={{ width: 10, height: 10, borderRadius: 2, background: '#F38E92' }} />500 error</span>
    </div>
    <div style={{ overflowX: 'auto' }}>
      <window.LineChart width={560} height={240}
        series={[
          { color: '#7CE8B9', data: [40, 39, 41, 40, 40, 39, 41, 40, 39, 40, 41] },
          { color: '#F38E92', data: [19, 20, 19, 20, 20, 19, 20, 20, 19, 20, 19] },
        ]} xLabels={6} />
    </div>
  </div>
);

const EvalView = () => (
  <div className="pc-card" style={{ padding: 'var(--sp-large)', display: 'flex', alignItems: 'flex-start', gap: 'var(--sp-medium)' }}>
    <div className="pc-stat pc-stat--success" style={{ width: 44, height: 44, fontSize: 16, boxShadow: '0 0 0 3px rgba(23,232,160,0.16)', background: 'var(--fill-zero)' }}>9</div>
    <div>
      <div style={{ fontFamily: 'var(--font-semi)', fontSize: 18, color: 'var(--text)' }}>Overall grade: 9/10</div>
      <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--text-light)', lineHeight: '21px' }}>Clear prompt, traceable reasoning, and a correctly-scoped minimal fix. Root cause was verified against logs and metrics before the PR was opened.</p>
    </div>
  </div>
);

/* ── right results panel ── */
const RESULT_TABS = [
  { label: 'Conclusion', I: 'DocumentIcon' },
  { label: 'Dashboard', I: 'AppsIcon' },
  { label: 'Topology', I: 'ClusterIcon' },
  { label: 'PRs', I: 'GitPullIcon' },
  { label: 'Eval', I: 'AiSparkleIcon' },
];

const ResultsPanel = ({ tab, setTab, loading, onClose, runStep, jobDone, onPrAreaClick }) => {
  const tour = window.useTour ? window.useTour() : null;
  const highlightPrs = jobDone && tour?.target === 'remediation-pr';

  const panel = (
    <aside style={{ flex: '1.05 1 0', minWidth: 380, background: 'var(--grey-950)', borderLeft: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '4px var(--sp-medium) 0', borderBottom: '1px solid var(--border)' }}>
        <div className="pc-results-tabs">
          {RESULT_TABS.map(({ label, I }) => {
            const Icon = window[I];
            const on = tab === label;
            const tabLabel = label === 'Conclusion' && loading ? 'Working theory' : label;
            const btn = (
              <button
                key={label}
                type="button"
                onClick={() => setTab(label)}
                className={'pc-results-tab' + (on ? ' pc-results-tab--on' : '') + (highlightPrs && label === 'PRs' ? ' pc-results-tab--tour' : '')}
              >
                <Icon size={13} color="currentColor" />
                {tabLabel}
              </button>
            );
            return btn;
          })}
        </div>
        <button onClick={onClose} className="pc-icon-btn" style={{ width: 30, height: 30, flexShrink: 0, marginTop: 10 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeLinecap="round" /></svg>
        </button>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: 'var(--sp-large)' }}>
        {loading ? <WorkingTheoryPanel step={runStep} />
          : tab === 'Conclusion' ? <RootCauseBody full />
            : tab === 'Dashboard' ? <DashboardView />
              : tab === 'Topology' ? <div style={{ height: 600, display: 'flex' }}><window.ServiceGraph /></div>
                : tab === 'PRs' ? <PRView onPrAreaClick={jobDone ? onPrAreaClick : undefined} />
                  : <EvalView />}
      </div>
    </aside>
  );

  return panel;
};

/* ── main job detail ── */
const CCJob = ({ onBack, onPhaseChange, startPhase = 'running' }) => {
  const [phase, setPhase] = React.useState(startPhase); // running | done
  const [n, setN] = React.useState(0);
  const [tab, setTab] = React.useState('Conclusion');
  const [thinkingOpen, setThinkingOpen] = React.useState(false);
  const [openActs, setOpenActs] = React.useState({});
  const [bookModalOpen, setBookModalOpen] = React.useState(false);
  const dots = useThinkingDots();
  const { jobTools, activities, active } = useRunProgress(n);

  React.useEffect(() => {
    if (phase !== 'running') return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      const step = RUN_STEPS[i - 1];
      if (step?.t === 'activity') {
        setOpenActs((prev) => ({ ...prev, [step.name]: true }));
      }
      if (i >= RUN_STEPS.length) {
        clearInterval(id);
        setTimeout(() => setPhase('done'), 900);
      }
    }, 620);
    return () => clearInterval(id);
  }, [phase]);

  React.useEffect(() => {
    onPhaseChange && onPhaseChange(phase);
  }, [phase, onPhaseChange]);

  React.useEffect(() => {
    if (phase === 'done') setTab('PRs');
  }, [phase]);

  const running = phase === 'running';
  const lastStep = n > 0 ? RUN_STEPS[n - 1] : null;
  const jobPendingTool = lastStep?.t === 'jobTool' ? lastStep.name : null;
  const whimsey = WHIMSEYS[Math.floor(n / 3) % WHIMSEYS.length];

  const openBookDemoModal = () => setBookModalOpen(true);
  const closeBookDemoModal = () => setBookModalOpen(false);
  const confirmBookDemo = () => {
    try {
      window.parent.postMessage(
        { type: 'workbench-demo-book-demo' },
        window.location.origin
      );
    } catch (_) {}
    setBookModalOpen(false);
  };

  return (
    <div className="pc-main" style={{ padding: 0 }}>
      <BookDemoModal
        open={bookModalOpen}
        onClose={closeBookDemoModal}
        onBook={confirmBookDemo}
      />
      <div style={{ flex: 1, display: 'flex', minWidth: 0, minHeight: 0 }}>
        {/* LEFT — thread */}
        <div style={{ flex: '1 1 0', minWidth: 340, display: 'flex', flexDirection: 'column', background: 'var(--grey-950)' }}>
          <div style={{ padding: 'var(--sp-medium) var(--sp-large) 0' }}>
            <div className="pc-side__crumbs" style={{ marginBottom: 'var(--sp-medium)', minWidth: 0 }}>
              <span style={{ cursor: 'pointer' }} onClick={onBack}>workbenches</span><span className="sep">/</span>
              <span>…</span><span className="sep">/</span>
              <strong style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>I've found the following alert: [FIRING:1] Flo…</strong>
            </div>

            {/* title strip */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'var(--sp-medium)' }}>
              <div>
                <h1 style={{ fontFamily: 'var(--font-semi)', fontSize: 24, fontWeight: 500, color: 'var(--text)', margin: 0 }}>demo-workbench</h1>
                <div className="pc-job-meta">
                  <span>Michael Guarino</span>
                  <span style={{ fontFamily: 'var(--font-mono)' }}>
                    2026-06-01{' '}
                    <span style={{ color: 'var(--text-primary-accent)' }}>00:00:08</span>
                    {' '}UTC
                  </span>
                  <span className="pc-job-meta__tools">
                    {['elastic', 'prometheus', 'aws'].map((name) => (
                      <window.BrandMark key={name} name={name} size={12} />
                    ))}
                    <span className="pc-job-meta__more">+5</span>
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-xsmall)' }}>
                {running ? <RunningChip />
                  : <span style={{ color: 'var(--text-success)', display: 'inline-flex' }}><window.CheckRoundedIcon size={20} /></span>}
                <button className="pc-icon-btn" style={{ width: 32, height: 32, color: 'var(--icon-light)' }}><window.BookmarkIcon size={16} /></button>
              </div>
            </div>
          </div>

          {/* body — scrollable thread; composer pinned below (not sticky inside scroll) */}
          <div className="pc-job-thread">
            <div className="pc-job-thread-scroll">
            {/* alert message */}
            <div style={{ background: 'var(--fill-two)', border: '1px solid var(--border-input)', borderRadius: 'var(--r-large)', padding: 'var(--sp-medium)', position: 'relative', fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '22px', color: 'var(--text)' }}>
              <p style={{ margin: 0 }}>I've found the following alert:</p>
              <p style={{ margin: '10px 0 0', color: 'var(--text-light)' }}>[FIRING:1] Flow 500s test (demo-prod stateless metrics /ping 10.0.26.56:9090 flow-test-stateless GET flow-test flow-test-stateless-794b6fb77d-kv996 monitoring/vmetrics-agent-victoria-metrics-k8s-stack flow-test-stateless 5xx)</p>
              <p style={{ margin: '10px 0 0' }}>Alert Summary: 500 Error rate exceeded</p>
              <p style={{ margin: '6px 0 0' }}>Plural Service: flow-test  Plural Cluster: demo-prod  Firing</p>
              <p style={{ margin: '6px 0 18px' }}>Value: A=791604, B=791604, C=1 Labels…</p>
              <a style={{ position: 'absolute', right: 'var(--sp-medium)', bottom: 8, fontSize: 13, color: 'var(--text-primary-accent)', textDecoration: 'underline', textDecorationColor: 'rgba(153,218,255,0.5)', cursor: 'pointer' }}>view more</a>
            </div>

            {running ? (
              <>
                <JobLevelThinking
                  tools={jobTools}
                  pendingTool={jobPendingTool}
                  thinkingOpen={thinkingOpen}
                  setThinkingOpen={setThinkingOpen}
                  dots={dots}
                />
                {Object.keys(activities).length > 0 && (
                  <div className="pc-job-activities">
                    {Object.entries(activities).map(([name, { prompt, tools }]) => (
                      <ActivityRow
                        key={name}
                        name={name}
                        icon={ACTIVITY_ICONS[name]}
                        prompt={prompt}
                        tools={tools}
                        open={!!openActs[name]}
                        onToggle={() => setOpenActs((prev) => ({ ...prev, [name]: !prev[name] }))}
                        running={active === name}
                        whimsey={active === name ? whimsey : null}
                      />
                    ))}
                    <div className="pc-activity-row">
                      <AccordionTrigger
                        label={
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                            memo
                            <window.DocumentIcon size={12} color="var(--icon-xlight)" />
                          </span>
                        }
                        open={false}
                        onToggle={() => {}}
                      />
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* settled sections + root cause */
              <>
                <div className="pc-job-activities pc-job-activities--settled">
                  <ThreadSection label="Memo" icon={<window.DocumentIcon size={12} />}>
                    Investigated a sustained 5xx alert on <InlineCode>flow-test-stateless</InlineCode>. Confirmed a code-level bug, ruled out infrastructure, and opened a fix PR.
                  </ThreadSection>
                  <ThreadSection label="Observability" icon={<window.AppsIcon size={12} />}>
                    Prometheus shows a flat ~0.32 req/s 5xx rate; logs raise <InlineCode>Exception("unknown internal error")</InlineCode> on ~1/3 of <InlineCode>/ping</InlineCode> calls.
                  </ThreadSection>
                  <ThreadSection label="Infrastructure" icon={<window.CloudIcon size={12} />}>
                    Pod is healthy: 0 restarts, ~42 MB memory, no OOMKill or CrashLoop. The failure is not infra-related.
                  </ThreadSection>
                  <ThreadSection label="Coding" icon={<window.SearchIcon size={12} />}>
                    Located the hardcoded conditional raise in <InlineCode>app/main.py</InlineCode> keyed on <InlineCode>epoch_second % 3</InlineCode>. Opened PR #232 to remove it.
                  </ThreadSection>
                  <ThreadSection label="Canvas" defaultOpen={false}>
                    Rendered the /ping request-rate chart and service topology in the results panel.
                  </ThreadSection>
                </div>
                <div style={{ padding: '0 2px' }}><RootCauseBody /></div>
              </>
            )}
            </div>
            {!running && (
              <div className="pc-job-composer-wrap">
                <div className="pc-job-composer">
                  <div style={{ flex: 1, color: 'var(--text-xlight)', fontSize: 14 }}>Send an additional message to this job</div>
                  <button type="button" style={{ width: 32, height: 32, borderRadius: 999, background: 'transparent', border: '1px solid var(--border-input)', color: 'var(--icon-light)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
                    <window.ArrowUpIcon size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT — results */}
        <ResultsPanel
          tab={tab}
          setTab={setTab}
          loading={running}
          onClose={onBack}
          runStep={n}
          jobDone={!running}
          onPrAreaClick={openBookDemoModal}
        />
      </div>
    </div>
  );
};

Object.assign(window, { CCJob });
