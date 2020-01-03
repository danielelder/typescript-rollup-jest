/**
 * Initalise the accordion component
 *
 * @param scope  a valid css selector
 */
export function init(scope = '.accordion') {
  const accordions = document.querySelectorAll(scope);

  [].forEach.call(accordions, (accordion: HTMLDivElement) => {
    accordion.classList.add('accordion--inactive');
  });

  return accordions.length > 0;
}

/**
 * Expand the accordion to reveal its content
 *
 * @param accordion  the accordion component
 */
export function expand(accordion: HTMLDivElement) {
  accordion.classList.remove('accordion--inactive');

  return true;
}

/**
 * Collapse the accordion to hide its content
 *
 * @param accordion  the accordion component
 */
export function collapse(accordion: HTMLDivElement) {
  accordion.classList.add('accordion--inactive');

  return true;
}
