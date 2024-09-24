import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    files: ['src/**/*.{js,mjs,cjs,ts}'],
    ignores: [
      'dist/js/*.js',
      '!**/eslint.config.mjs',
      '**/*.min.js',
      '**/plugins/',
      '/.temp/',
      '/dist/',
      '/docs/',
      '/docs_html/',
      '/public/',
      '**/env.d.ts'
    ]
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
]
