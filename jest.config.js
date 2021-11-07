module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  snapshotResolver: '<rootDir>/snapshotResolver.js',
  testMatch: [
    '**/__tests__/**/?(*.)+(spec|test).(js|ts|tsx)',
    '**/?(*.)+(spec|test).(js|ts|tsx)',
  ],
};
