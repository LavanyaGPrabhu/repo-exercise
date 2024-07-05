export default {
    env: {
      browser: true,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "consistent-return": "error",
    },
  };
  