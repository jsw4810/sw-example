module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-undef': 'off',
    'no-shadow': 'off',
    'no-param-reassign': ['error', { props: false }],
    'linebreak-style': ['error', 'windows'],
    'object-curly-newline': 'off',
    'global-require': 'off',
    'func-names': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off'
    // 'no-dupe-keys': 'off'
  }
};
