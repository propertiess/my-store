const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: '.'
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@services/(.*)': '<rootDir>/app/services/$1',
    '^@components/(.*)': '<rootDir>/app/components/$1',
    '^@helpers/(.*)': '<rootDir>/app/helpers/$1',
    '^@context/(.*)': '<rootDir>/app/context/$1',
    '^@hooks/(.*)': '<rootDir>/app/hooks/$1',
    '^@layout/(.*)': '<rootDir>/app/layout/$1',
    '^@interfaces/(.*)': '<rootDir>/app/types/$1',
    '^@utils/(.*)': '<rootDir>/app/utils/$1',
    '^@styles/(.*)': '<rootDir>/styles/$1',
    '^@animations': '<rootDir>/app/animations/index',
    '^axios$': require.resolve('axios')
  },
  testEnvironment: 'jest-environment-jsdom'
};

module.exports = createJestConfig(customJestConfig);
