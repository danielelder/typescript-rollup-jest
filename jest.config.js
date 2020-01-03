module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  testRegex: '/src/components/.*\\.test?\\.ts$',
  moduleFileExtensions: ['ts', 'js']
};
