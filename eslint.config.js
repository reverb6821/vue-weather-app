import tseslint from 'typescript-eslint';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import importPlugin from 'eslint-plugin-import';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}']
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser, ...globals.node
      } 
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      // 'allowConstantExport':  ["error", true],
      // "import/no-unresolved": "error",
      'import/order': ['error', {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'index',
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
          order: 'desc',
          /* ignore case. Options: [true, false] */
          caseInsensitive: true,
        },
      }],
      'no-unused-vars': 'error',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'no-var': 'warn',
      'no-unusued-expression': 0,
      'object-shorthand': 'warn',
      'quote-props': ['warn', 'as-needed'],
      quotes: [2, 'single', { avoidEscape: true }],
      'arrow-body-style': [2, 'as-needed'],
      'implicit-arrow-linebreak': 0,
      'comma-dangle': 0,
      'object-curly-newline': [0,{ multiline: true, minProperties: 3}],
      'no-console': 0,
      indent: ['error', 2]
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
];