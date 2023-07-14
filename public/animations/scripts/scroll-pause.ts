(function () {
  const DEBOUNCE_TIME = 300;

  const iframes = document.querySelectorAll<HTMLIFrameElement>(
    "iframe[data-animation-frame]"
  );
  const iframeWindows: Window[] = [];

  iframes.forEach((iframe) => {
    // Once the iframe is done loading, assign its window object to the variable we prepared earlier
    iframe.addEventListener("load", () => {
      iframeWindows.push(iframe.contentWindow);
    });
  });

  let timeout: number | undefined | null;
  const listener = () => {
    if (typeof timeout !== "number") {
      iframeWindows.forEach((win) => {
        win.postMessage("pause", "*");
      });
    } else {
      window.clearTimeout(timeout);
    }

    timeout = window.setTimeout(() => {
      iframeWindows.forEach((win) => {
        timeout = undefined;
        win.postMessage("play", "*");
      });
    }, DEBOUNCE_TIME);
  };
  const scrollListener = window.addEventListener("scroll", listener);
  const resizeListener = window.addEventListener("resize", listener);
})();
