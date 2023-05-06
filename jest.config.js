
module.exports = {
    testEnvironment: 'jest-environment-node',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  };