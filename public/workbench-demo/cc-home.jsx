/* cc-home.jsx — Workbenches home: hero prompt + recent jobs + your workbenches. */

const CCHome = ({ onComposePrompt, onOpenWorkbench }) => {
  const [wb, setWb] = React.useState('Select workbench');
  const [val, setVal] = React.useState('');
  const pickWorkbench = () => {
    setWb('demo-workbench');
    onComposePrompt();
  };

  const handlePromptIntent = () => {
    pickWorkbench();
  };

  const previewPrompt = (instant) => () => {
    if (instant) onComposePrompt();
  };
  return (
    <div style={{ flex: 1, overflow: 'auto', background: 'var(--grey-950)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px var(--sp-large) 80px' }}>
        <window.WorkbenchHero />

        <window.TourTarget id="prompt-card">
          <div className="pc-prompt-card" style={window.PROMPT_CARD_STYLE}>
            <textarea
              rows={3}
              value={val}
              onChange={(e) => {
                if (e.target.value) handlePromptIntent();
              }}
              onKeyDown={(e) => {
                if (e.metaKey || e.ctrlKey || e.altKey) return;
                if (e.key === 'Tab' || e.key === 'Escape') return;
                e.preventDefault();
                handlePromptIntent();
              }}
              onPaste={handlePromptIntent}
              placeholder="Send a job to your workbench.  Use / for skills and @ to mention clusters, services or stacks"
              style={window.PROMPT_TEXTAREA_STYLE}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <window.WorkbenchPillButton
                label={wb}
                onClick={pickWorkbench}
                withHint
              />
              <button
                type="button"
                onClick={pickWorkbench}
                title="Send job"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  border: 'none',
                  cursor: 'pointer',
                  background: 'var(--fill-two)',
                  color: 'var(--icon-light)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <window.ArrowUpIcon size={16} />
              </button>
            </div>
          </div>
        </window.TourTarget>

        <window.CCHomeSections onPreviewPrompt={previewPrompt} onOpenWorkbench={onOpenWorkbench} />
      </div>
    </div>
  );
};

Object.assign(window, { CCHome });
