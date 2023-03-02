/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    "no-undef": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off"
  },
  parserOptions: {
    ecmaVersion: "latest"
  }
}
