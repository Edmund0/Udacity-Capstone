
module.exports = {
    testEnvironment: 'jest-environment-node',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
      "\\.(css)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png)$": "identity-obj-proxy",
    },
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  };