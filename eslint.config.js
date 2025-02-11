import eslintPluginVue from "eslint-plugin-vue";

export default [
  {
    ignores: ["node_modules", "dist"]
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
    plugins: {
      vue: eslintPluginVue
    },
    rules: {
      "vue/multi-word-component-names": "off"
    }
  }
];
