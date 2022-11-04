module.exports = {
  tabWidth: 2,
  arrowParens: 'avoid',
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    'react',
    '^(?!react)\\w+$',
    'next',
    '^(?!next)\\w+$',
    '<THIRD_PARTY_MODULES>',
    '^@/components$',
    '^@/components/(.*)$',
    '^@/(.*)$',
    '^[./]'
  ],
  importOrderSortSpecifiers: true
};
