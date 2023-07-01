/** @type {import('eslint').Linter.Config} */
module.exports = {
  $schema: 'https://json.schemastore.org/eslintrc',
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'prettier',
    'plugin:json/recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import', 'prettier', 'json'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'json/*': ['error', 'allowComments'],
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': ['error', { packageDir: ['./'] }],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-restricted-imports': ['error', { patterns: ['../*'] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
    },
  },
  overrides: [
    {
      files: ['./*'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['./src/app/**'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': 'error',
      },
    },
  ],
};
