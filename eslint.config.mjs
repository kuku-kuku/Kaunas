import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "fakaunas-cms/**",
      // Legacy Airtable news admin, not routed since the move to Strapi
      "api/news.js",
      "src/pages/AdminNews.jsx",
      "src/pages/NewsSingle.jsx",
    ],
  },

  // Browser app
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: "detect" } },
    plugins: { react, "react-hooks": reactHooks, "jsx-a11y": jsxA11y },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "no-unused-vars": ["error", { varsIgnorePattern: "^(_|React$)", argsIgnorePattern: "^_" }],
    },
  },

  // Vercel functions + build scripts (Node)
  {
    files: ["api/**/*.js", "scripts/**/*.{js,mjs}", "*.config.{js,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-empty": ["error", { allowEmptyCatch: true }],
    },
  },
  {
    files: ["scripts/**/*.mjs", "*.config.mjs", "vite.config.js"],
    languageOptions: { sourceType: "module" },
  },
];
