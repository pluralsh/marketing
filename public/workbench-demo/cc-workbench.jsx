/* cc-workbench.jsx — demo-workbench detail, Alerts tab with a firing alert. */

const SideItem = ({ glyph, label }) => (
  <div className="pc-side__item">
    <span className="pc-side__icon">{glyph}</span>
    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
  </div>
);

const SideSection = ({ title, children }) => (
  <div className="pc-side__section">
    <div className="pc-side__heading"><span>{title}</span><button className="pc-side__add"><window.AddIcon size={12} /></button></div>
    <div className="pc-side__list">{children}</div>
  </div>
);

const WBSidebar = () => (
  <aside className="pc-side">
    <SideSection title="Tools">
      <SideItem glyph={<window.BrandMark name="elastic" size={12} />} label="elastic" />
      <SideItem glyph={<window.BrandMark name="prometheus" size={12} />} label="prom" />
      <SideItem glyph={<window.BrandMark name="aws" size={12} />} label="aws" />
      <SideItem glyph={<window.BrandMark name="exa" size={12} />} label="exa" />
      <SideItem glyph={<window.BrandMark name="github" size={12} />} label="gh" />
      <SideItem glyph={<window.BrandMark name="slack" size={12} />} label="slack" />
      <SideItem glyph={<window.BrandMark name="cloudwatch" size={12} />} label="cloudwatch" />
      <SideItem glyph={<window.BrandMark name="pagerduty" size={12} />} label="pd" />
    </SideSection>

    <SideSection title="Webhooks">
      <SideItem glyph={<window.BrandMark name="github" size={12} />} label="gh pr deployer" />
      <SideItem glyph={<window.BrandMark name="grafana" size={12} />} label="grafana prod-alerts" />
      <SideItem glyph={<window.BrandMark name="linear" size={12} />} label="linear incidents" />
      <SideItem glyph={<window.BrandMark name="pagerduty" size={12} />} label="pagerduty primary" />
      <SideItem glyph={<window.BrandMark name="grafana" size={12} />} label="grafana sev-1" />
    </SideSection>

    <SideSection title="Chatbots">
      <SideItem glyph={<window.BrandMark name="slack" size={12} />} label="#eng" />
      <SideItem glyph={<window.BrandMark name="slack" size={12} />} label="#sales" />
    </SideSection>

    <div className="pc-side__section">
      <div className="pc-side__heading"><span>Cron schedules</span><button className="pc-side__add"><window.AddIcon size={12} /></button></div>
      <div className="pc-side__list" style={{ gap: 4 }}>
        <div className="pc-side__item" style={{ gap: 8 }}>
          <window.ClockIcon size={14} color="var(--icon-light)" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-light)' }}>0 18 * * *</span>
        </div>
        <div style={{ padding: '2px 8px 8px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '2px 8px',
            background: 'var(--fill-two)', border: '1px solid var(--border-input)', borderRadius: 'var(--r-medium)',
            fontSize: 12, color: 'var(--text)',
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M3 10h18M5 10V8a1 1 0 011-1h12a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            EKS Cost Estimation
          </span>
          <div style={{ fontSize: 12, color: 'var(--text-light)', lineHeight: '17px', marginTop: 6 }}>generate a full cost report of all eks clusters for me, in particular…</div>
        </div>
        <div className="pc-side__item" style={{ gap: 8 }}>
          <window.ClockIcon size={14} color="var(--icon-light)" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-light)' }}>0 0 * * *</span>
        </div>
        <div style={{ padding: '2px 8px 8px', fontSize: 12, color: 'var(--text-light)', lineHeight: '17px' }}>
          Search for anything broken across alerting and infrastructure state, and create up to 3 prs to fix them…
        </div>
        <div className="pc-side__item" style={{ gap: 8 }}>
          <window.ClockIcon size={14} color="var(--icon-light)" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-light)' }}>@weekly</span>
        </div>
      </div>
    </div>
  </aside>
);

const WBTabs = ({ active = 'Alerts', onTab }) => {
  const tabs = [['Launch'], ['Jobs', true], ['Issues'], ['Alerts'], ['Evals']];
  return (
    <div className="pc-tabs">
      {tabs.map(([t, dot]) => (
        <button key={t} className={'pc-tab' + (t === active ? ' pc-tab--active' : '')} onClick={() => onTab && onTab(t)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
          {t}{dot && <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--purple-300)' }} />}
        </button>
      ))}
    </div>
  );
};

const ALERT_GRAFANA_VIEW =
  'https://grafana.plrldemo.onplural.sh/alerting/grafana/aeu0mdt3z32tce/view?orgId=1';
const ALERT_GRAFANA_SILENCE =
  'https://grafana.plrldemo.onplural.sh/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DFlow+500s&matcher=cluster%3Ddemo-prod&matcher=container%3Dstateless&matcher=endpoint%3Dmetrics&matcher=grafana_folder%3Dtest&matcher=handler%3D%2Fping&matcher=instance%3D10.0.28.32%3A9090&matcher=job%3Dflow-test-stateless&matcher=method%3DGET&matcher=namespace%3Dflow-test&matcher=pod%3Dflow-test-stateless-794b6fb77d-vwf8f&matcher=prometheus%3Dmonitoring%2Fvmetrics-agent-victoria-metrics-k8s-stack&matcher=service%3Dflow-test-stateless&matcher=status%3D5xx&orgId=1';

const ALERT_LABEL_LINES = [
  'alertname = Flow 500s',
  'cluster = demo-prod',
  'container = stateless',
  'endpoint = metrics',
  'grafana_folder = test',
  'handler = /ping',
  'instance = 10.0.28.32:9090',
  'job = flow-test-stateless',
  'method = GET',
  'namespace = flow-test',
  'pod = flow-test-stateless-794b6fb77d-vwf8f',
  'prometheus = monitoring/vmetrics-agent-victoria-metrics-k8s-stack',
  'service = flow-test-stateless',
  'status = 5xx',
];

const ALERT_TAGS = [
  ['alertname', 'Flow 500s'],
  ['cluster', 'demo-prod'],
  ['container', 'stateless'],
  ['endpoint', 'metrics'],
  ['grafana_folder', 'test'],
  ['handler', '/ping'],
  ['instance', '10.0.28.32:9090'],
  ['job', 'flow-test-stateless'],
  ['method', 'GET'],
  ['namespace', 'flow-test'],
  ['pod', 'flow-test-stateless-794b6fb77d-vwf8f'],
  ['prometheus', 'monitoring/vmetrics-agent-victoria-metrics-k8s-stack'],
  ['service', 'flow-test-stateless'],
  ['status', '5xx'],
];

const AlertLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="pc-alert-detail__link"
  >
    {children}
  </a>
);

const AlertDetailBody = () => (
  <div className="pc-alert-detail">
    <p className="pc-alert-detail__title">
      [FIRING:1] Flow 500s test (demo-prod stateless metrics /ping 10.0.28.32:9090 flow-test-stateless GET
      flow-test flow-test-stateless-794b6fb77d-vwf8f monitoring/vmetrics-agent-victoria-metrics-k8s-stack
      flow-test-stateless 5xx)
    </p>
    <p className="pc-alert-detail__line">
      <strong>Alert Summary:</strong> 500 Error rate exceeded
    </p>
    <p className="pc-alert-detail__line">
      <strong>Plural Service:</strong> flow-test &nbsp; <strong>Plural Cluster:</strong> demo-prod &nbsp;
      <strong>Firing</strong>
    </p>
    <p className="pc-alert-detail__line">
      <strong>Value:</strong> A=338606, B=338606, C=1
    </p>
    <p className="pc-alert-detail__line">
      <strong>Labels:</strong>
    </p>
    <ul className="pc-alert-detail__labels">
      {ALERT_LABEL_LINES.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
    <p className="pc-alert-detail__line">
      <strong>Plural Service:</strong> flow-test &nbsp; <strong>Plural Cluster:</strong> demo-prod &nbsp;
      <strong>Source:</strong>{' '}
      <AlertLink href={ALERT_GRAFANA_VIEW}>{ALERT_GRAFANA_VIEW}</AlertLink>
    </p>
    <p className="pc-alert-detail__line">
      <strong>Silence:</strong>{' '}
      <AlertLink href={ALERT_GRAFANA_SILENCE}>{ALERT_GRAFANA_SILENCE}</AlertLink>
    </p>
    <div className="pc-alert-detail__meta">
      <div className="pc-alert-detail__meta-col">
        <div className="pc-alert-detail__meta-heading">Annotations</div>
        <div className="pc-alert-detail__chips">
          <span className="pc-chip pc-chip--neutral pc-alert-detail__chip">
            summary: 500 Error rate exceeded
          </span>
        </div>
      </div>
      <div className="pc-alert-detail__meta-col">
        <div className="pc-alert-detail__meta-heading">Tags</div>
        <div className="pc-alert-detail__chips">
          {ALERT_TAGS.map(([name, value]) => (
            <span key={name} className="pc-chip pc-chip--neutral pc-alert-detail__chip">
              {name}: {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ViewJobSpinner = ({ size = 12 }) => {
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

const ViewJobChip = ({ onViewJob }) => (
  <button
    type="button"
    onClick={onViewJob}
    className="pc-chip pc-view-job-chip pc-view-job-chip--loading"
  >
    <ViewJobSpinner size={14} />
    <span className="pc-text-shimmer">View job</span>
  </button>
);

const AlertRow = ({ onViewJob }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="pc-card pc-alert-row" style={{ padding: 0, background: 'var(--fill-one)' }}>
      <div className="pc-alert-row__header">
        <button
          type="button"
          className="pc-alert-row__caret"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Collapse alert details' : 'Expand alert details'}
        >
          <span style={{ transform: open ? 'rotate(90deg)' : 'none', display: 'inline-flex' }}>
            <window.CaretRightIcon size={16} />
          </span>
        </button>
        <div className="pc-alert-row__summary">
          <div className="pc-alert-row__title">[FIRING:1] Flow 500s test (demo-prod st…</div>
          <div className="pc-alert-row__time">6/1/2026 7:45am</div>
          {!open ? (
            <AlertLink href={ALERT_GRAFANA_VIEW}>
              <span className="pc-alert-row__url">{ALERT_GRAFANA_VIEW}</span>
              <window.ArrowUpIcon
                size={12}
                color="var(--text-primary-accent)"
                style={{ transform: 'rotate(45deg)', flexShrink: 0 }}
              />
            </AlertLink>
          ) : null}
        </div>
        <span className="pc-chip pc-chip--danger pc-alert-row__chip">
          <span className="pc-alert-row__chip-icon">!</span>
          Firing
        </span>
        <span className="pc-chip pc-chip--danger pc-alert-row__chip">Critical</span>
        <window.TourTarget id="view-job" className="pc-tour-target--fit">
          <window.DemoHint tourId="view-job" ringOnly className="pc-demo-hint--pill">
            <ViewJobChip onViewJob={onViewJob} />
          </window.DemoHint>
        </window.TourTarget>
      </div>
      {open ? <AlertDetailBody /> : null}
    </div>
  );
};

const CCWorkbench = ({ onViewJob }) => (
  <div className="pc-main">
    <WBSidebar />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, background: 'var(--grey-950)' }}>
      <div style={{ padding: 'var(--sp-medium) var(--sp-large) 0' }}>
        <div style={{ marginBottom: 'var(--sp-large)' }}>
          <div className="pc-side__crumbs" style={{ marginBottom: 0 }}>
            <span>workbenches</span><span className="sep">/</span><strong>demo-workbench</strong>
          </div>
        </div>
        <div style={{ borderBottom: '1px solid var(--border)' }}>
          <WBTabs active="Alerts" />
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: 'var(--sp-large)' }}>
        <AlertRow onViewJob={onViewJob} />
      </div>
    </div>
  </div>
);

Object.assign(window, { CCWorkbench });
