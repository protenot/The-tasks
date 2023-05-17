module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest/globals': true
  },
  'extends': 'google',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'

  },
  'plugins': ['jest'],
  'rules': {
    'import/prefer-default-export': 'off',
    'comma-dangle': ['error', 'never'],
    'max-len': [
      'error', {
        ignoreComments: true
      }
    ]
  }
};
