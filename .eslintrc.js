module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    // 'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    // project: './tsconfig.json'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'max-len': 'warn',
    'no-plusplus': 'warn',
    'no-return-assign': 'warn',
    '@typescript-eslint/no-use-before-define': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
