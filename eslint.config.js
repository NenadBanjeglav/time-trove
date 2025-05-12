import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import checkFile from 'eslint-plugin-check-file'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'

export default [
  {
    ignores: ['.turbo/**', 'node_modules/**', 'dist/**', '**/eslint.config.js', '**/vite-env.d.ts'],
  },
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        React: 'writable',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      'unused-imports': unusedImports,
      'check-file': checkFile,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: '18.2.0',
      },
    },
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/ban-types': 'off',
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],

      'unused-imports/no-unused-imports': 'error',
      'no-undef': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['strictCamelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
          filter: {
            regex: '^(__|_|[A-Z])',
            match: false,
          },
        },
        {
          selector: 'function',
          format: ['strictCamelCase', 'StrictPascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'variable',
          format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        { selector: 'typeLike', format: ['StrictPascalCase'] },
        { selector: 'method', modifiers: ['static'], format: ['strictCamelCase'] },
        { selector: 'enumMember', format: ['UPPER_CASE'] },
        { selector: 'enum', format: ['StrictPascalCase'] },
        {
          selector: 'interface',
          format: ['StrictPascalCase'],
          custom: { regex: '^I[A-Z]', match: false },
        },
        { selector: 'objectLiteralProperty', format: ['UPPER_CASE', 'strictCamelCase'] },
        {
          selector: 'parameter',
          format: ['strictCamelCase', 'StrictPascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
      ],

      'check-file/filename-naming-convention': [
        'error',
        { '**/*.tsx': 'PASCAL_CASE', '**/*.{js,ts}': 'CAMEL_CASE' },
        { ignoreMiddleExtensions: true },
      ],
      'check-file/folder-naming-convention': ['error', { 'src/**/': 'KEBAB_CASE' }],
    },
  },
  {
    files: ['**/*.cjs', '**/*.js'],
    languageOptions: {
      sourceType: 'script',
      ecmaVersion: 'latest',
      globals: globals.node,
    },
  },
]
