# Typescript, Rollup and Jest

Starter project for building typescript projects using Rollup and Jest.

## Features

- [x] Statically typed build system for working with [Typescript](https://www.typescriptlang.org/).
- [x] Consistent code style with [TSLint](https://palantir.github.io/tslint/).
- [x] Dead code elimination
- [x] [Rollup](http://rollupjs.org/) for bundling
- [x] [Jest](https://jestjs.io/en/) for unit testing and code coverage
- [x] [JSDOM](https://github.com/tmpvar/jsdom) for DOM based testing
- [x] Flexible build configuration using environment variables
- [x] Rapid development with automatic javascript building and browser reloading 
- [x] Easy debugging via VSCode integration

## Scripts

- `build` - Builds the minified production bundle along with typescript modules
- `serve` - Builds the development bundle, creates a local server and watches for changes
- `test`  - Run the linting and unit tests (including code coverage report)

## VS Code Integration

### Tasks

Access the task list using `shift+command+b` (`ctrl+shift+b` in Windows) to run any of the above scripts.

### Debugging

Unit tests can be debugged from within VS Code by placing a break point within your code and then launching the debugger.

- `Jest - All`     - Runs all unit tests in debug mode
- `Jest - Current` - Runs the currently visible within VS Code editor

## Coverage reports

The coverage reports are generated with `Jest`, and output to the `/coverage` folder.

To view the html report open: `coverage/lcov-report/index.html`
