module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // "spaced-comment": ["warn", "always", {
    //   "block": {
    //       "exceptions": ["*"],
    //       "balanced": true
    //   }
    // }],
    // "no-unused-vars": ["warn", { "args": "none" }],
    'max-len': ['warn', {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-multi-spaces': ['warn'],
    // "vue/html-closing-bracket-newline": ["warn", {
    //   "singleline": "never",
    //   "multiline": "always"
    // }],
    // "vue/singleline-html-element-content-newline": ["warn", {
    //   "ignoreWhenEmpty": true,
    // }],
    'import/no-unresolved': 'off',
    'import/no-cycle': 'off',
    'import/extensions': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'space-before-blocks': ['warn'],
    'array-bracket-spacing': ['warn'],
    'block-spacing': ['warn'],
    'key-spacing': ['warn'],
    'keyword-spacing': ['warn'],
    'no-restricted-globals': 'off',
    'vue/no-v-html': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prefer-promise-reject-errors': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': [0, 'error', 'windows'], // 允许windows开发环境
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'no-unused-vars': 'off',
        'import/prefer-default-export': 'off',
      },
    },
  ],
  globals: {
    wrapper: 'readonly',
  },
};
