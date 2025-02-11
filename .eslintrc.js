module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
      sourceType: "module"
    },
    extends: [
      "plugin:vue/vue3-recommended",
      "@vue/eslint-config-typescript",
      "plugin:sonarjs/recommended"
    ],
    rules: {
      "vue/multi-word-component-names": "off"
    }
  };
  