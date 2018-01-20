module.exports = {
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  sourceType: "module",
  plugins: ["react"],
  rules: {
    "react/forbid-prop-types": 1,
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 2,
    "react/require-render-return": 2,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/sort-prop-types": 1,
    "react/jsx-boolean-value": [1, "never"],
    "react/jsx-closing-bracket-location": [1, "after-props"],
    "react/jsx-curly-spacing": [1, "never"],
    "react/jsx-equals-spacing": [1, "never"],
    "react/jsx-filename-extension": 2,
    "react/jsx-indent": [1, 2],
    "react/jsx-indent-props": [1, 2],
    "react/jsx-key": 2,
    "react/jsx-no-bind": 2,
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-target-blank": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-space-before-closing": [1, "always"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2
  }
};
