/* demo-tour.jsx — tour context (reads shared tour-config.js from workbenchDemoTour.json). */

if (!window.WORKBENCH_DEMO_TOUR) {
  throw new Error(
    'Missing tour-config.js. Run: cd marketing && npm run sync:workbench-tour'
  );
}

const TOUR = window.WORKBENCH_DEMO_TOUR;
const TOUR_TOTAL = TOUR.total;
const TOUR_STEPS = TOUR.steps;

function stepMeta(index) {
  return TOUR_STEPS[index] ?? TOUR_STEPS[0];
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function getTourState(screen, promptReady, jobPhase) {
  if (screen === 'home') {
    const s = stepMeta(0);
    return {
      index: 0,
      total: TOUR_TOTAL,
      title: s.title,
      target: 'prompt-card',
      passive: false,
      caption: s.srCaption,
      barVerb: s.barVerb,
      barRest: s.barRest,
      hints: s.hints,
      dimSections: true,
    };
  }
  if (screen === 'prompt') {
    const s = stepMeta(1);
    const ready = promptReady === true;
    return {
      index: 1,
      total: TOUR_TOTAL,
      title: s.title,
      target: ready ? 'send-job' : 'prompt-card',
      passive: false,
      caption: ready
        ? s.srCaption
        : 'Step 2 of 5. demo-workbench is selected. Watch the investigation prompt fill in, then send it.',
      barVerb: ready ? s.barVerb : 'Watch',
      barRest: ready ? s.barRest : 'the prompt fill in — then send it.',
      hints: ready ? s.hints : stepMeta(0).hints,
      dimSections: true,
    };
  }
  if (screen === 'workbench') {
    const s = stepMeta(2);
    return {
      index: 2,
      total: TOUR_TOTAL,
      title: s.title,
      target: 'view-job',
      passive: false,
      caption: s.srCaption,
      barVerb: s.barVerb,
      barRest: s.barRest,
      hints: s.hints,
      dimSections: false,
    };
  }
  if (screen === 'job' && jobPhase === 'running') {
    const s = stepMeta(3);
    return {
      index: 3,
      total: TOUR_TOTAL,
      title: s.title,
      target: null,
      passive: true,
      caption: s.srCaption,
      barVerb: s.barVerb,
      barRest: s.barRest,
      hints: s.hints,
      dimSections: false,
    };
  }
  if (screen === 'job' && jobPhase === 'done') {
    const s = stepMeta(4);
    return {
      index: 4,
      total: TOUR_TOTAL,
      title: s.title,
      target: 'remediation-pr',
      passive: true,
      caption: s.srCaption,
      barVerb: s.barVerb,
      barRest: s.barRest,
      hints: s.hints,
      dimSections: false,
    };
  }
  return null;
}

const TourContext = React.createContext(null);

const useTour = () => React.useContext(TourContext);

const TourTarget = ({ id, children, className = '' }) => {
  const tour = useTour();
  const active = tour?.target === id;
  return (
    <div
      data-tour-id={id}
      className={
        'pc-tour-target' +
        (active ? ' pc-tour-target--active' : '') +
        (className ? ' ' + className : '')
      }
      data-tour-active={active ? 'true' : undefined}
    >
      {children}
    </div>
  );
};

const TourProvider = ({ tour, children }) => {
  const announceRef = React.useRef(null);

  React.useEffect(() => {
    if (!tour?.target) return;
    const el = document.querySelector(`[data-tour-id="${tour.target}"]`);
    el?.scrollIntoView({
      block: 'nearest',
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }, [tour?.target, tour?.index]);

  React.useEffect(() => {
    if (!announceRef.current || !tour) return;
    announceRef.current.textContent = `${tour.title}. ${tour.caption}`;
  }, [tour?.index, tour?.title, tour?.caption]);

  return (
    <TourContext.Provider value={tour}>
      <div
        className={'pc-tour-root' + (tour?.dimSections ? ' pc-tour-root--dim-sections' : '')}
        role="application"
        aria-label="Workbench interactive walkthrough"
      >
        <p ref={announceRef} className="pc-sr-only" aria-live="polite" aria-atomic="true" />
        {children}
      </div>
    </TourContext.Provider>
  );
};

Object.assign(window, {
  TOUR_TOTAL,
  TOUR_STEPS,
  getTourState,
  TourProvider,
  TourTarget,
  useTour,
  TourContext,
});
