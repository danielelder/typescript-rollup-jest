import * as setup from '../../../lib/jest-helpers';
import { hide, init, show } from './alert';

setup.loadTestFile('alert.html', __dirname);

describe('alert', () => {
  it('initialise component', () => {
    const result = init();
    expect(result).toBe(true);
  });

  it('initialise component with scope', () => {
    // Reset DOM
    setup.reloadTestFile();

    const result = init('.alert');
    expect(result).toBe(true);
  });

  it('show alert', () => {
    const result = show(document.body.querySelector('.alert'));
    expect(result).toBe(true);
  });

  it('hide alert', () => {
    const result = hide(document.body.querySelector('.alert'));
    expect(result).toBe(true);
  });
});
