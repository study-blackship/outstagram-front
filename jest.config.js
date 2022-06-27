const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: '.' });

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const customJestConfig = {
  collectCoverageFrom: ['src/**/*.@(j|t)s?(x)'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src\\/types/',
  ],
  moduleNameMapper: {},
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', 'jest-plugin-context/setup'],
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
