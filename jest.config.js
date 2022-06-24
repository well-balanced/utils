module.exports = {
  testRegex: '.*.spec.ts$',
  moduleFileExtensions: ['ts', 'js', 'json'],
  rootDir: './',
  collectCoverageFrom: ['**/*.(t|j)s'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: '../coverage',
};
