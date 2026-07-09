/* cc-shell.jsx — Plural Console app shell: primary rail + top bar.
   References design-system icons via window.* (ds-icons.jsx loads first). */

/* Matches assets/src/components/layout/Sidebar.tsx menu order (after home logo). */
const RAIL = [
  { I: 'GitPullIcon',           label: 'Continuous deployment' },
  { I: 'StackIcon',             label: 'Stacks' },
  { I: 'FlowIcon',              label: 'Flows' },
  { I: 'WorkbenchIcon',         label: 'Workbenches' },
  { I: 'CatalogIcon',           label: 'Self service' },
  { I: 'KubernetesAltIcon',     label: 'Kubernetes' },
  { I: 'AiSparkleOutlineIcon',  label: 'Plural AI' },
  { I: 'WarningShieldIcon',     label: 'Security' },
  { I: 'CostManagementIcon',    label: 'Cost management' },
  { I: 'GearTrainIcon',         label: 'Settings' },
];

const CCRail = ({ active = 3, onHome }) => (
  <div className="pc-rail">
    <div className="pc-rail__logo" title="Plural" style={{ cursor: 'pointer' }} onClick={() => onHome()}>
      <window.PluralLogoMark size={20} />
    </div>
    <div className="pc-rail__group">
      {RAIL.map(({ I, label }, i) => {
        const Icon = window[I];
        const isActive = i === active;
        return (
          <div key={i}
            className={'pc-rail__item' + (isActive ? ' pc-rail__item--active' : '')}
            title={label}
            onClick={i === 3 ? onHome : undefined}
            style={{ cursor: 'pointer' }}>
            <Icon size={18} />
          </div>
        );
      })}
    </div>
    <div className="pc-rail__footer">
      <div className="pc-rail__item" title="Help"><window.HelpIcon size={18} /></div>
      <div className="pc-rail__version">v0.12.23</div>
      <div className="pc-rail__item" title="Collapse"><window.MenuCollapseIcon size={18} /></div>
    </div>
  </div>
);

const CCTopBar = () => (
  <div className="pc-topbar">
    <div className="pc-topbar__left">
      <button className="pc-project-select" style={{ minWidth: 300 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <window.SearchIcon size={14} color="var(--icon-xlight)" />
          <span>All projects</span>
        </span>
        <span className="pc-project-select__chev"><window.CaretDownIcon size={12} /></span>
      </button>
    </div>
    <div className="pc-topbar__right">
      <button className="pc-chat-btn"><window.ChatIcon size={14} />Chat</button>
      <button className="pc-icon-btn" title="Notifications" style={{ position: 'relative' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M9 1L3 9h4l-1 6 6-8H8l1-6z" fill="currentColor" />
        </svg>
        <span style={{
          position: 'absolute', top: 2, right: 2, minWidth: 14, height: 14, padding: '0 3px',
          background: 'var(--red-400)', color: '#fff', borderRadius: 999,
          fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 700,
          display: 'grid', placeItems: 'center', lineHeight: 1,
        }}>1</span>
      </button>
      <div className="pc-avatar" style={{ background: 'var(--purple-400)', color: '#fff', borderColor: 'transparent' }}>AN</div>
    </div>
  </div>
);

Object.assign(window, { CCRail, CCTopBar });
