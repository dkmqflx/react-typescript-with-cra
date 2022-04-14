module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',

    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],

  settings: {
    react: {
      version: 'detect',
    },
  },
};
