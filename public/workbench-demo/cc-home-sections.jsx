/* Shared Recent jobs + Your workbenches blocks (home and prompt screens). */

const BrandMarks = ({ names }) => (
  <>
    {names.map((name) => <window.BrandMark key={name} name={name} size={12} />)}
  </>
);

const RecentJobCard = ({ time, workbench, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="pc-card"
    style={{
      textAlign: 'left',
      cursor: 'pointer',
      padding: 'var(--sp-medium)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minWidth: 0,
      background: 'var(--fill-one)',
      font: 'inherit',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ color: 'var(--text-success)', display: 'inline-flex' }}>
        <window.CheckRoundedIcon size={18} />
      </span>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-light)' }}>{time}</span>
    </div>
    <div
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        lineHeight: '24px',
        color: 'var(--text)',
        overflow: 'hidden',
        height: 72,
      }}
    >
      {children}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-light)' }}>{workbench}</span>
      <span style={{ color: 'var(--icon-light)', display: 'inline-flex' }}>
        <window.CaretRightIcon size={14} />
      </span>
    </div>
  </button>
);

const InlineChip = ({ icon, children }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      verticalAlign: 'middle',
      padding: '0 7px',
      margin: '0 3px',
      height: 20,
      lineHeight: '18px',
      background: 'var(--fill-two)',
      border: '1px solid var(--border-input)',
      borderRadius: 'var(--r-medium)',
      fontSize: 13,
      color: 'var(--text)',
      fontFamily: 'var(--font-sans)',
      whiteSpace: 'nowrap',
    }}
  >
    {icon}
    {children}
  </span>
);

const WorkbenchCard = ({ name, desc, agent, agentIcon, webhooks, tools, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="pc-card"
    style={{
      textAlign: 'left',
      cursor: 'pointer',
      padding: 'var(--sp-large)',
      font: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-medium)',
      minWidth: 0,
      background: 'var(--fill-one)',
    }}
  >
    <div style={{ fontFamily: 'var(--font-semi)', fontSize: 18, fontWeight: 500, color: 'var(--text)' }}>{name}</div>
    <div
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        color: 'var(--text-light)',
        lineHeight: '20px',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        minHeight: 40,
      }}
    >
      {desc}
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '10px 16px',
        alignItems: 'center',
        marginTop: 4,
      }}
    >
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-light)' }}>coding agent</span>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          color: 'var(--text)',
        }}
      >
        {agentIcon}
        {agent}
      </span>
      {webhooks && (
        <>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-light)' }}>webhooks</span>
          <span style={{ display: 'inline-flex', gap: 6 }}>{webhooks}</span>
        </>
      )}
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-light)' }}>bound tools</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'space-between' }}>
        <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>{tools}</span>
        <span style={{ color: 'var(--icon-light)', display: 'inline-flex' }}>
          <window.ArrowUpIcon size={16} color="var(--icon-light)" />
        </span>
      </span>
    </div>
  </button>
);

const SectionTitle = ({ children }) => (
  <h2
    style={{
      fontFamily: 'var(--font-semi)',
      fontSize: 22,
      fontWeight: 500,
      color: 'var(--text)',
      margin: '0 0 var(--sp-medium)',
    }}
  >
    {children}
  </h2>
);

const CCHomeSections = ({ onPreviewPrompt, onOpenWorkbench }) => (
  <div className="pc-tour-sections">
    <div style={{ marginBottom: 48 }}>
      <SectionTitle>Recent jobs</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--sp-medium)' }}>
        <RecentJobCard time="16 hours ago" workbench="platform-oncall" onClick={onPreviewPrompt(true)}>
          Search for anything broken across alerting and infrastructure state, and create up to 3 prs to fix the…
        </RecentJobCard>
        <RecentJobCard time="a day ago" workbench="finops-weekly" onClick={onPreviewPrompt(true)}>
          <InlineChip icon={<window.WorkbenchIcon size={12} color="var(--icon-light)" />}>EKS Cost Estimation</InlineChip>
          generate a full cost report of all eks clusters for me, in particular call out…
        </RecentJobCard>
        <RecentJobCard time="2 days ago" workbench="demo-workbench" onClick={onPreviewPrompt(true)}>
          Do an analysis of the{' '}
          <InlineChip icon={<window.FlowIcon size={12} color="var(--icon-light)" />}>elastic-stack (mgmt)</InlineChip>{' '}
          elasticsearch relevant metrics an…
        </RecentJobCard>
      </div>
    </div>

    <div>
      <SectionTitle>Your workbenches</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--sp-medium)' }}>
        <WorkbenchCard
          name="platform-oncall"
          desc="Triage PagerDuty pages, correlate Grafana and Elastic signals, and open fix PRs for core services"
          agent="claude"
          agentIcon={<window.BrandMark name="claude" size={12} />}
          webhooks={<BrandMarks names={['pagerduty', 'github', 'grafana']} />}
          tools={<BrandMarks names={['elastic', 'prometheus', 'github', 'slack']} />}
          onClick={onOpenWorkbench}
        />
        <WorkbenchCard
          name="demo-workbench"
          desc="Solve common DevOps tasks with prometheus and elastic integrations included"
          agent="codex"
          agentIcon={<window.BrandMark name="codex" size={12} />}
          webhooks={<BrandMarks names={['github', 'grafana', 'linear', 'pagerduty', 'grafana']} />}
          tools={
            <>
              <BrandMarks names={['elastic', 'prometheus', 'aws', 'exa', 'github']} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-light)' }}>+3</span>
            </>
          }
          onClick={onPreviewPrompt(true)}
        />
        <WorkbenchCard
          name="finops-weekly"
          desc="Automated EKS spend reports, rightsizing recommendations, and budget anomaly alerts"
          agent="codex"
          agentIcon={<window.BrandMark name="codex" size={12} />}
          webhooks={<BrandMarks names={['slack', 'linear']} />}
          tools={<BrandMarks names={['aws', 'prometheus', 'exa', 'elastic']} />}
          onClick={onOpenWorkbench}
        />
      </div>
    </div>
  </div>
);

Object.assign(window, { CCHomeSections });
