module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 80,
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    'prettier/prettier': ['error'],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: false },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
