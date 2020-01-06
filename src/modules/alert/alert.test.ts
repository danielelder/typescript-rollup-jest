import * as Setup from '../../../lib/jest-helpers';
import * as Alert from './alert';

Setup.loadTestFile('alert.html', __dirname);

describe('alert', () => {
  it('initialise component', () => {
    const result = Alert.init();
    expect(result).toBe(true);
  });

  it('initialise component with scope', () => {
    // Reset DOM
    Setup.reloadTestFile();

    const result = Alert.init('.alert');
    expect(result).toBe(true);
  });

  it('show alert', () => {
    const result = Alert.show(document.body.querySelector('.alert'));
    expect(result).toBe(true);
  });

  it('hide alert', () => {
    const result = Alert.hide(document.body.querySelector('.alert'));
    expect(result).toBe(true);
  });
});
