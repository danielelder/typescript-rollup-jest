import { readFileSync } from 'fs';
import { resolve } from 'path';

let testHTML = '';

/**
 * Load the component test markup
 *
 * @param filename   filename of the component markup
 * @param directory  name of the directory containing the markup
 */
export function loadTestFile(filename: string, directory: string) {
  testHTML = readFileSync(resolve(directory, filename)).toString();
  document.body.innerHTML = testHTML;
  return testHTML;
}

/**
 * Reload the current test file
 */
export function reloadTestFile() {
  document.body.innerHTML = testHTML;
  return testHTML;
}
