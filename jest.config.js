const createConfig = require('next/jest')({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['dotenv/config'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createConfig(config);
