import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import eslintConfigPrettier from "eslint-config-prettier";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  { languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
  } },
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    ignores: ['node_modules', 'dist', 'public', '.nuxt']
  },
  eslintConfigPrettier,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];