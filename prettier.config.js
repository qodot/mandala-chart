module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  printWidth: 120,
  // importOrder: [
  //   '^(next/(.*)$)|^(next$)',
  //   '<THIRD_PARTY_MODULES>',
  //   '',
  //   '^@shared/(.*)$',
  //   '^@app/(.*)$',
  //   '^[./]'
  // ],
  // tailwindFunctions: ['cn', 'twMerge', 'clsx'],
  // importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  plugins: [
    // '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
    // TODO: add react-form-hook plugin
  ],
}
