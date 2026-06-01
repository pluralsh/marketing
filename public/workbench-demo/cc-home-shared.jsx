/* Shared workbench home chrome — hero + prompt card shell. */

const PROMPT_CARD_STYLE = {
  background: 'var(--fill-one)',
  border: '1px solid var(--border-input)',
  borderRadius: 'var(--r-large)',
  padding: 'var(--sp-medium)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--sp-medium)',
  marginBottom: 56,
};

const PROMPT_TEXTAREA_STYLE = {
  border: 'none',
  outline: 'none',
  resize: 'none',
  background: 'transparent',
  color: 'var(--text)',
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  lineHeight: '24px',
  letterSpacing: '0.5px',
  minHeight: 56,
  width: '100%',
};

const WorkbenchHero = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      marginBottom: 'var(--sp-large)',
    }}
  >
    <span style={{ color: 'var(--text)', display: 'inline-flex', flexShrink: 0, lineHeight: 0 }}>
      <window.WorkbenchIcon size={16} />
    </span>
    <h1
      style={{
        fontFamily: 'var(--font-semi)',
        fontSize: 30,
        fontWeight: 500,
        color: 'var(--text)',
        margin: 0,
        letterSpacing: '-0.25px',
      }}
    >
      What can I do for you today, Michael?
    </h1>
  </div>
);

const WorkbenchPillButton = ({ label, onClick, withHint }) => {
  const pill = (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 32,
        padding: '0 12px',
        background: 'var(--fill-two)',
        border: '1px solid var(--border-input)',
        borderRadius: 999,
        color: label === 'Select workbench' ? 'var(--text-light)' : 'var(--text)',
        cursor: onClick ? 'pointer' : 'default',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 500,
        whiteSpace: 'nowrap',
      }}
    >
      <span className="pc-icon-slot pc-icon-slot--12">
        <window.WorkbenchIcon size={12} color="var(--icon-light)" />
      </span>
      {label}
      <window.CaretDownIcon size={10} color="var(--icon-light)" />
    </button>
  );
  if (!withHint) return pill;
  return (
    <window.TourTarget id="workbench-pill">
      <window.DemoHint tourId="prompt-card" className="pc-demo-hint--pill">
        {pill}
      </window.DemoHint>
    </window.TourTarget>
  );
};

Object.assign(window, {
  PROMPT_CARD_STYLE,
  PROMPT_TEXTAREA_STYLE,
  WorkbenchHero,
  WorkbenchPillButton,
});
