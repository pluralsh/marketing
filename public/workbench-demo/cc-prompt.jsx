/* cc-prompt.jsx — demo prompt types in, then highlight moves to send. */

const DEMO_PROMPT =
  'Investigate the [FIRING:1] Flow 500s test alert on demo-prod. Find why flow-test-stateless is returning sustained 5xx on GET /ping, identify root cause against live metrics and logs, and open a minimal fix PR.';

const TYPE_MS = 14;

const SendButton = ({ onSend, ready }) => (
  <window.TourTarget id="send-job" className="pc-tour-target--fit">
    <window.DemoHint tourId="send-job" ringOnly className="pc-demo-hint--pill">
      <button
        type="button"
        onClick={() => ready && onSend()}
        disabled={!ready}
        title="Send job"
        className="pc-send-job-btn"
        style={{
          width: 36,
          height: 36,
          borderRadius: 999,
          border: 'none',
          cursor: ready ? 'pointer' : 'default',
          background: ready ? 'var(--action-primary)' : 'var(--fill-two)',
          color: ready ? '#fff' : 'var(--icon-light)',
          display: 'grid',
          placeItems: 'center',
          opacity: ready ? 1 : 0.85,
        }}
      >
        <window.ArrowUpIcon size={16} />
      </button>
    </window.DemoHint>
  </window.TourTarget>
);

const CCPrompt = ({ onSend, onOpenWorkbench, onPromptReady }) => {
  const [text, setText] = React.useState('');
  const [ready, setReady] = React.useState(false);
  const onPromptReadyRef = React.useRef(onPromptReady);
  onPromptReadyRef.current = onPromptReady;

  React.useEffect(() => {
    setText('');
    setReady(false);

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setText(DEMO_PROMPT);
      setReady(true);
      onPromptReadyRef.current && onPromptReadyRef.current();
      return;
    }

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setText(DEMO_PROMPT.slice(0, i));
      if (i >= DEMO_PROMPT.length) {
        window.clearInterval(id);
        setReady(true);
        onPromptReadyRef.current && onPromptReadyRef.current();
      }
    }, TYPE_MS);

    return () => window.clearInterval(id);
  }, []);

  const previewPrompt = (v) => () => {
    if (v) onSend();
  };

  return (
    <div style={{ flex: 1, overflow: 'auto', background: 'var(--grey-950)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px var(--sp-large) 80px' }}>
        <window.WorkbenchHero />

        <div className="pc-prompt-card" style={window.PROMPT_CARD_STYLE}>
          <window.TourTarget id="prompt-card">
            <textarea
              readOnly
              rows={3}
              value={text}
              placeholder="Send a job to your workbench.  Use / for skills and @ to mention clusters, services or stacks"
              style={window.PROMPT_TEXTAREA_STYLE}
            />
          </window.TourTarget>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <window.WorkbenchPillButton label="demo-workbench" />
            <SendButton onSend={onSend} ready={ready} />
          </div>
        </div>

        <window.CCHomeSections onPreviewPrompt={previewPrompt} onOpenWorkbench={onOpenWorkbench} />
      </div>
    </div>
  );
};

Object.assign(window, { CCPrompt });
