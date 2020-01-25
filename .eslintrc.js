module.exports = {
  parser: 'babel-eslint',
  extends: [
    'google',
    'plugin:react/recommended'
  ],
  rules: {
    semi: [2, "never"],
    'require-jsdoc': 0,
    'react/display-name': 0,
    'react/prop-types': 0
  }
}
