/* Pre-saved prompts on the workbench home screen. */

const SAVED_PROMPTS = [
  {
    title: 'Investigate Flow 500s',
    description:
      'Triage the firing Flow 500s alert on demo-prod: trace sustained 5xx on GET /ping, pull metrics and logs, and open a minimal fix PR.',
    featured: true,
  },
  {
    title: 'Correlate /ping with metrics',
    description:
      'Compare flow-test-stateless request rates, latency, and error budgets against Grafana dashboards for the flow-test namespace.',
  },
  {
    title: 'Scan logs for root cause',
    description:
      'Search pod logs around the alert window for exceptions, failed health checks, and deployment changes tied to Flow 500s.',
  },
];

const SavedPromptCard = ({ title, description, onClick, tourId, selected, static: isStatic }) => {
  const className =
    'pc-saved-prompt-card' +
    (selected ? ' pc-saved-prompt-card--selected' : '') +
    (isStatic ? ' pc-saved-prompt-card--static' : '');

  const body = (
    <>
      <div className="pc-saved-prompt-card__header">
        <p className="pc-saved-prompt-card__title t-body2-bold">{title}</p>
        <span className="pc-saved-prompt-card__icon" aria-hidden>
          <window.ArrowUpIcon size={16} color="currentColor" />
        </span>
      </div>
      <p className="pc-saved-prompt-card__description t-body2">{description}</p>
    </>
  );

  const card = isStatic ? (
    <div className={className} aria-hidden>
      {body}
    </div>
  ) : (
    <button type="button" onClick={onClick} className={className}>
      {body}
    </button>
  );

  if (!tourId) return card;

  return (
    <window.TourTarget id={tourId}>
      <window.DemoHint tourId={tourId} ringOnly placement="below" className="pc-demo-hint--block">
        {card}
      </window.DemoHint>
    </window.TourTarget>
  );
};

const CCHomeSections = ({ onComposePrompt, static: isStatic, selectedIndex }) => {
  const openPrompt = () => onComposePrompt && onComposePrompt();

  return (
    <div className={'pc-tour-sections' + (isStatic ? ' pc-tour-sections--static' : '')}>
      <div className="pc-saved-prompts">
        {SAVED_PROMPTS.map((prompt, index) => {
          const isFeatured = index === 0;
          const clickable = !isStatic && isFeatured;

          return (
            <SavedPromptCard
              key={prompt.title}
              title={prompt.title}
              description={prompt.description}
              onClick={clickable ? openPrompt : undefined}
              tourId={clickable ? 'prompt-card' : undefined}
              selected={isStatic && index === selectedIndex}
              static={isStatic || !isFeatured}
            />
          );
        })}
      </div>
    </div>
  );
};

Object.assign(window, { CCHomeSections });
