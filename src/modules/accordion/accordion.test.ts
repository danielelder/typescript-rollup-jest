import * as Setup from '../../../lib/jest-helpers';
import * as Accordion from './accordion';

Setup.loadTestFile('accordion.html', __dirname);

describe('accordion', () => {
  it('initialise component', () => {
    const result = Accordion.init();
    expect(result).toBe(true);
  });

  it('initialise component with scope', () => {
    // Reset DOM
    Setup.reloadTestFile();

    const result = Accordion.init('.accordion');
    expect(result).toBe(true);
  });

  it('expand accordion', () => {
    const result = Accordion.expand(document.body.querySelector('.accordion'));
    expect(result).toBe(true);
  });

  it('collapse accordion', () => {
    const result = Accordion.collapse(document.body.querySelector('.accordion'));
    expect(result).toBe(true);
  });
});
