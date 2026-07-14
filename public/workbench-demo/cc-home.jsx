/* cc-home.jsx — Workbenches home: hero prompt + pre-saved prompts. */

const CCHome = ({ onComposePrompt }) => {
  return (
    <div style={{ flex: 1, overflow: 'auto', background: 'var(--grey-950)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px var(--sp-large) 80px' }}>
        <window.WorkbenchHero />

          <div className="pc-prompt-card" style={window.PROMPT_CARD_STYLE}>
            <textarea
              rows={3}
              value=""
              readOnly
              tabIndex={-1}
              placeholder="Send a job to your workbench.  Use / for skills and @ to mention clusters, services or stacks"
              style={window.PROMPT_TEXTAREA_STYLE}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <button
                type="button"
                title="Send job"
                disabled
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  border: 'none',
                  cursor: 'default',
                  background: 'var(--fill-two)',
                  color: 'var(--icon-light)',
                  display: 'grid',
                  placeItems: 'center',
                  opacity: 0.65,
                }}
              >
                <window.ArrowUpIcon size={16} />
              </button>
            </div>
          </div>

        <window.CCHomeSections onComposePrompt={onComposePrompt} />
      </div>
    </div>
  );
};

Object.assign(window, { CCHome });
