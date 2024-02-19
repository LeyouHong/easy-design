const rules = {
  ON: 2,
  OFF: 0,
  WARN: 1,
};

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
  },
  settings: {
    'mdx/code-blocks': false,
    'mdx/language-mapper': {},
    react: {
      version: 'detect',
    },
    typescript: {
      // use an array of glob patterns
      project: ['packages/*/tsconfig.json'],
    },
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'no-console': [rules.WARN, { allow: ['error', 'warn'] }],
    'no-undef': rules.ON,
    'react/no-deprecated': rules.OFF,
    'react/prop-types': rules.OFF,
    'react-hooks/rules-of-hooks': rules.ON,
    'react-hooks/exhaustive-deps': rules.WARN,
    'react/static-property-placement': [
      'warn',
      'property assignment',
      { defaultProps: 'static public field' },
    ],
    'react/jsx-curly-newline': rules.OFF,
    'react/display-name': rules.OFF,
    'react/forbid-prop-types': rules.OFF,
    'react/destructuring-assignment': rules.OFF,
    'react/no-array-index-key': rules.OFF,
    'react/no-access-state-in-setstate': rules.OFF,
    'react/jsx-wrap-multilines': rules.OFF,
    'react/jsx-one-expression-per-line': rules.OFF,
    'react/require-default-props': rules.OFF,
    'react/jsx-props-no-spreading': rules.OFF,
    'lines-between-class-members': rules.OFF,
    'no-restricted-syntax': rules.OFF,
    'no-nested-ternary': rules.OFF,
    'no-plusplus': rules.OFF,
    'multiline-ternary': rules.OFF,
    'no-useless-constructor': rules.OFF,
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 2,
        comments: 100,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      rules.WARN,
      { caughtErrors: 'none', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-var-requires': rules.OFF,
    '@typescript-eslint/no-explicit-any': rules.OFF,
    '@typescript-eslint/naming-convention': [
      rules.ON,
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': rules.OFF,
    '@typescript-eslint/explicit-function-return-type': rules.OFF,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': rules.OFF,
      },
    },
  ],
};
