const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: '.'
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/app/$1',
    '^axios$': require.resolve('axios')
  },
  testEnvironment: 'jest-environment-jsdom'
};

module.exports = createJestConfig(customJestConfig);
