module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // No es necesario en React 17+
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    // Añade o modifica reglas según las necesidades del proyecto
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

