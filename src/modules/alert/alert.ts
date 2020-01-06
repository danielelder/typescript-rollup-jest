/**
 * Initalise the alert component
 *
 * @param scope  a valid css selector
 */
export function init(scope = '.alert') {
  const alerts = document.querySelectorAll(scope);

  [].forEach.call(alerts, (alert: HTMLDivElement) => {
    alert.setAttribute('role', 'alert');
  });

  return alerts.length > 0;
}

/**
 * Expand the alert to reveal its content
 *
 * @param alert  the alert component
 */
export function show(alert: HTMLDivElement) {
  alert.classList.add('alert--visible');

  return true;
}

/**
 * Collapse the alert to hide its content
 *
 * @param alert  the alert component
 */
export function hide(alert: HTMLDivElement) {
  alert.classList.remove('alert--visible');

  return true;
}
