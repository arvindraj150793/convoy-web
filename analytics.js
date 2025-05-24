export const logEvent = (eventName, params) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
};