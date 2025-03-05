const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], 
    testEnvironment: 'jsdom', 
    transformIgnorePatterns: [
      '/node_modules/(?!your-library-name)',
    ],
    preset: 'ts-jest',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' })
  };