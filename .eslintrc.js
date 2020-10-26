module.exports = {
  env: {
    commonjs: true,
    'jest/globals': true,
    node: true,
  },
  plugins: ['jest'],
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-bitwise': 'off',
    'no-mixed-operators': 'off',
  },
};
