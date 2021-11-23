module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
    '<rootDir>/__mocks__/matchMedia.ts',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  restoreMocks: true,
};
