module.exports = {
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['@pluralsh/eslint-config-typescript', 'prettier'],
  globals: {
    JSX: true,
  },
  rules: {
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports' },
    ],
    'no-duplicate-imports': 'off',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import-newlines/enforce': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '{next,next/*,@pluralsh/design-system,honorable}',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [
          'react',
          '{next/*,next,@pluralsh/design-system,honorable}',
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'unknown',
          'type',
        ],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['Label'],
        controlComponents: ['Input'],
        assert: 'either',
        depth: 3,
      },
    ],
  },
  // Disable TS parser and rules that depend on a parser for config files
  overrides: [
    {
      files: [
        '.eslintrc.js',
        'next.config.js',
        'tailwind.config.ts',
        'postcss.config.js',
        'codegen.ts',
        'index-pages.mjs',
      ],
      parserOptions: {
        project: null,
      },
      rules: {
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
      },
    },
  ],
}
