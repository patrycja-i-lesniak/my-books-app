/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    MyGlobal: true,
    window: true,
    document: true,
  },
  plugins: ['react', 'import'],
  rules: {
    // 'import/named': 1,
    // 'import/namespace': 1,
    // 'import/default': 1,
    // 'import/export': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 1,
  },
};
