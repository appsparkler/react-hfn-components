module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    // sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'google',
    'plugin:react/recommended'
  ],
  rules: {
    semi: [2, "never"],
    'require-jsdoc': 0,
    'prefer-rest-params': [0, "never"],
    'no-undef': 2
  }
}
