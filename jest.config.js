module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!.next/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!config/theme.js',
    '!next.config.js',
    '!.eslintrc.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFiles: ['<rootDir>/tests/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupAfterEnv.js'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '/.next/',
    '<rootDir>/node_modules/',
    '/tests/',
    '/coverage/',
    '/.next/*',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
