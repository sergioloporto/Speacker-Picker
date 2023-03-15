module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: [
    "airbnb-typescript",
    "plugin:react-hooks/recommended",
    "prettier",
    "next/core-web-vitals",
  ],
  rules: {
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/no-unused-prop-types": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "react-hooks/exhaustive-deps": 1,
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
  },
};
