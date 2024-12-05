module.exports = {
  testEnvironment: 'jsdom',
  transform: {
      '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/jest.config.js'],
};
