/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'eslint-config-prettier',
    'plugin:deprecation/recommended',
  ],
  rules: {
	  //eslint common rules
    indent: ['error', 2],
    // curly: 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'no-console': 'warn',
    'no-nested-ternary': 'error',
    'prefer-template': 'error',
    'no-debugger': 'error',
    'no-new-wrappers': 'error',
    'object-shorthand': 'error',
    'max-len': ['error', { code: 180 }],
    'no-return-await': 'error',
    'consistent-return': 'error',
    'no-unused-vars': 'off',
    'no-unneeded-ternary': 'error',
    'no-implicit-coercion': 'error',
    'lines-between-class-members': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'case' },
      { blankLine: 'always', prev: '*', next: 'default' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: '*', next: 'function' },
    ],
    //prettier rules
    // 'prettier/prettier': 'error',

    //typescript-eslint rules
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/ban-types': 'error',
    // '@typescript-eslint/prefer-readonly': 'error',
    // '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    // '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    //vitest rules
    'vitest/valid-expect': ['error'],
    'vitest/no-conditional-in-test': ['error'],
    'vitest/no-conditional-expect': ['error'],
    'vitest/no-conditional-tests': ['error'],
    'vitest/valid-title': ['error'],
    'vitest/prefer-to-have-length': ['error'],
    'vitest/prefer-each': ['error'],
    'vitest/no-identical-title': ['error'],
    'vitest/no-disabled-tests': ['error'],
    //react rules
    'react/jsx-boolean-value': 'error',
    'react/no-children-prop': 'error',
    'react/self-closing-comp': 'error',
  },
  plugins: [
    // 'eslint-plugin-prettier',
    'react',
    'vitest',
    'deprecation',
  ],
}
