/* demo-hints.jsx — pulsing highlight ring on the active tour target. */

const DemoHint = ({
  label,
  description,
  tourId,
  block,
  ringOnly = false,
  placement = 'above',
  children,
  className = '',
  style = {},
}) => {
  const tour = window.useTour ? window.useTour() : null;
  const active = !tourId || tour?.target === tourId;
  if (!active) return children;

  const meta = tourId && tour?.hints?.[tourId];
  const hintLabel = label ?? meta?.label;
  const hintDescription = description ?? meta?.description ?? hintLabel;
  const descId = tourId ? `pc-tour-hint-desc-${tourId}` : undefined;

  const Tag = block ? 'div' : 'span';
  const placeClass =
    ringOnly || block
      ? ''
      : placement === 'below'
        ? ' pc-demo-hint--below'
        : placement === 'left'
          ? ' pc-demo-hint--left'
          : '';

  return (
    <Tag
      className={
        'pc-demo-hint pc-demo-hint--active' +
        (block ? ' pc-demo-hint--block' : '') +
        (ringOnly ? ' pc-demo-hint--ring-only' : '') +
        placeClass +
        (className ? ' ' + className : '')
      }
      style={style}
      aria-describedby={descId || undefined}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child) || !descId) return child;
        return React.cloneElement(child, {
          'aria-describedby':
            [child.props['aria-describedby'], descId].filter(Boolean).join(' ') ||
            undefined,
        });
      })}
      {hintDescription ? (
        <span id={descId} className="pc-sr-only">
          {hintDescription}
        </span>
      ) : null}
    </Tag>
  );
};

Object.assign(window, { DemoHint });
