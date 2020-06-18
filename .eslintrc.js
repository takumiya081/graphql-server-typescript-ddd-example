const path = require('path');

const OFF = 0;
const WARN = 1;
const ERROR = 2;

const jsExtensions = ['.js'];
const tsExtensions = ['.ts'];

const allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/docstyle': ['jsdoc', 'tomdoc'],
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts'],
      },
      typescript: {
        directory: path.join(__dirname, 'tsconfig.json'),
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    project: path.join(__dirname, 'tsconfig.json'),
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'import', 'jest', 'prettier'],
  rules: {
    'prettier/prettier': ERROR,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    'no-plusplus': OFF,
    '@typescript-eslint/no-unused-vars': [ERROR, {argsIgnorePattern: '^_'}],
    'import/prefer-default-export': OFF,
    'import/no-default-export': ERROR,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'spec/**',
          'test/**',
          '**/*.test.*',
          'tests/**',
          '**/__tests__/**',
          '**/seeder/**',
          'src/lib/testUtils/**',
        ],
        optionalDependencies: false,
      },
    ],
    'import/extensions': OFF,
    '@typescript-eslint/naming-convention': [
      ERROR,
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: false,
        },
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
  },
};
