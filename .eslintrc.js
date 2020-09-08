module.exports = {
  plugins: [
    'import',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
      },
    ],
    'no-console': ['error'],
    'no-var': 'error',
    'react/jsx-filename-extension': 'off',
    'global-require': 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': 'off',
    'lines-between-class-members': 'error',
    'prefer-destructuring': 'warn',
    'react/prop-types': 'error',
    'react/jsx-key': 'warn',
    'react/no-unused-state': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/require-default-props': 'warn',
    'react/require-default-props': 'warn',
    'import/no-unresolved': 'warn',
    'import/namespace': 'error',
    'import/export': 'warn',
  },
};
