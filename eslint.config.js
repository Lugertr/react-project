import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist", "server"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintPluginUnicorn.configs.recommended,
    ],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "unicorn/consistent-function-scoping": "off",
      "unicorn/prefer-global-this": "off",
      "unicorn/no-null": "off",
      "unicorn/filename-case": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "prettier/prettier": "error",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-callback-reference": "off",
      "unicorn/error-message": "off",
      "unicorn/prefer-query-selector": "off",
      "react-refresh/only-export-components": "off",
      "unicorn/prefer-spread": "off",
      "unicorn/no-array-reduce": "off"
    },
  },
]);
