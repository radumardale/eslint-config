module.exports = {
  env: {
    es6: true,
    node: true
  },
  "extends": [
    "prettier",
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: false,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"]
  }
};
