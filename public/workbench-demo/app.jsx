/* Marketing embed — workbench walkthrough (home → prompt → alerts → job). */

const App = () => {
  const [screen, setScreen] = React.useState('home');
  const [promptKey, setPromptKey] = React.useState(0);
  const [jobKey, setJobKey] = React.useState(0);
  const [jobPhase, setJobPhase] = React.useState('running');
  const [promptReady, setPromptReady] = React.useState(false);
  const screenRef = React.useRef(screen);
  screenRef.current = screen;

  const tour = React.useMemo(
    () => window.getTourState(screen, promptReady, jobPhase),
    [screen, promptReady, jobPhase]
  );

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--purple-400', '#4A51F2');
    r.style.setProperty('--purple-350', '#5D63F4');
    r.style.setProperty('--purple-300', '#747AF6');
    r.style.setProperty('--purple-200', '#9FA3F9');
    r.style.setProperty('--action-primary', '#4A51F2');
    r.style.setProperty('--action-primary-hover', '#5D63F4');
    r.style.setProperty('--density', '1');
    r.removeAttribute('data-theme');
  }, []);

  const postStep = React.useCallback(() => {
    const t = window.getTourState(screen, promptReady, jobPhase);
    const step = t?.index ?? 0;
    try {
      window.parent.postMessage(
        {
          type: 'workbench-demo-step',
          step,
          total: t?.total ?? window.TOUR_TOTAL,
          title: t?.title ?? null,
          barVerb: t?.barVerb ?? null,
          barRest: t?.barRest ?? null,
          srCaption: t?.caption ?? null,
          passive: !!t?.passive,
          substep: screen === 'job' ? jobPhase : null,
        },
        window.location.origin
      );
    } catch (_) {}
  }, [screen, promptReady, jobPhase]);

  React.useEffect(() => {
    postStep();
  }, [postStep]);

  const resetPromptScreen = React.useCallback(() => {
    setPromptReady(false);
    setPromptKey((k) => k + 1);
  }, []);

  const openPrompt = React.useCallback(
    (opts) => {
      const reset = opts?.reset !== false;
      if (reset) resetPromptScreen();
      setScreen('prompt');
    },
    [resetPromptScreen]
  );

  const handlePromptReady = React.useCallback(() => {
    setPromptReady(true);
  }, []);

  const openWorkbench = () => setScreen('workbench');

  const viewJob = (done = false) => {
    const settled = done === true;
    setJobPhase(settled ? 'done' : 'running');
    setJobKey((k) => k + 1);
    setScreen('job');
  };

  const backToAlerts = () => setScreen('workbench');

  const goHome = () => {
    setPromptReady(false);
    setScreen('home');
  };

  const goToTourStep = React.useCallback(
    (step) => {
      switch (step) {
        case 0:
          goHome();
          break;
        case 1:
          openPrompt({ reset: screenRef.current !== 'prompt' });
          break;
        case 2:
          setScreen('workbench');
          break;
        case 3:
          viewJob(false);
          break;
        case 4:
          viewJob(true);
          break;
        default:
          break;
      }
    },
    [openPrompt]
  );

  React.useEffect(() => {
    const onMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.source !== window.parent) return;
      if (event.data?.type !== 'workbench-demo-advance') return;
      const step = Number(event.data.step);
      if (Number.isFinite(step) && step >= 0 && step < window.TOUR_TOTAL) {
        goToTourStep(step);
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [goToTourStep]);

  return (
    <window.TourProvider tour={tour}>
      <div className="pc-app">
        <window.CCRail active={3} onHome={goHome} />
        {screen === 'home' && (
          <div className="pc-main">
            <window.CCHome onComposePrompt={openPrompt} />
          </div>
        )}
        {screen === 'prompt' && (
          <div className="pc-main">
            <window.CCPrompt
              key={promptKey}
              onSend={openWorkbench}
              onPromptReady={handlePromptReady}
            />
          </div>
        )}
        {screen === 'workbench' && <window.CCWorkbench onViewJob={viewJob} />}
        {screen === 'job' && (
          <window.CCJob
            key={jobKey}
            startPhase={jobPhase}
            onBack={backToAlerts}
            onPhaseChange={setJobPhase}
          />
        )}
      </div>
    </window.TourProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
