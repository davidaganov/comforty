module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/typescript/recommended"],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "no-undef": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.test.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
}
