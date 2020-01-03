import * as setup from '../../../lib/jest-helpers';
import { collapse, expand, init } from './accordion';

setup.loadTestFile('accordion.html', __dirname);

describe('accordion', () => {
  it('initialise component', () => {
    const result = init();
    expect(result).toBe(true);
  });

  it('initialise component with scope', () => {
    // Reset DOM
    setup.reloadTestFile();

    const result = init('.accordion');
    expect(result).toBe(true);
  });

  it('expand accordion', () => {
    const result = expand(document.body.querySelector('.accordion'));
    expect(result).toBe(true);
  });

  it('collapse accordion', () => {
    const result = collapse(document.body.querySelector('.accordion'));
    expect(result).toBe(true);
  });
});
