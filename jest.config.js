module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  testRegex: '/src/modules/.*\\.test?\\.ts$',
  moduleFileExtensions: ['ts', 'js']
};
