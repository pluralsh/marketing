/* demo-pointer-hint.jsx — animated pointer cue toward the active tour target. */

const DemoPointerHint = ({ tourId = 'view-job' }) => {
  const tour = window.useTour ? window.useTour() : null;
  const active = tour?.target === tourId;
  const [point, setPoint] = React.useState(null);
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  React.useLayoutEffect(() => {
    if (!active) {
      setPoint(null);
      return;
    }

    const update = () => {
      const target = document.querySelector(`[data-tour-id="${tourId}"]`);
      const root = document.querySelector('.pc-tour-root');
      if (!target || !root) return;

      const rect = target.getBoundingClientRect();
      const rootRect = root.getBoundingClientRect();

      setPoint({
        left: rect.left - rootRect.left + rect.width * 0.55,
        top: rect.top - rootRect.top + rect.height * 0.45,
      });
    };

    update();
    const raf = window.requestAnimationFrame(update);
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, true);
    };
  }, [active, tourId, tour?.index]);

  if (!active || !point) return null;

  return (
    <div className="pc-demo-pointer-layer" aria-hidden>
      <div
        className={
          'pc-demo-pointer' + (reduced ? ' pc-demo-pointer--static' : '')
        }
        style={{ left: point.left, top: point.top }}
      >
        <window.PointerHandIcon size={38} />
      </div>
    </div>
  );
};

Object.assign(window, { DemoPointerHint });
