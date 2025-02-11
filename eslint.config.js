import vue from "eslint-plugin-vue";
import ts from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["node_modules", "dist", ".nuxt", ".output"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser,
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".vue"],
      },
    },
    files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
    plugins: {
      vue,
      "@typescript-eslint": ts,
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
];
