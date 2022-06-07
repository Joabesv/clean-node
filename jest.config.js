module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  // qualquer texto que tiver ts no final sera convertido para js
  // antes de ser testado
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
