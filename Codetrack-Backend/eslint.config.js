import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["node_modules", "coverage"] },
  {
    files: ["**/*.js"],
    languageOptions: { globals: { ...globals.node, ...globals.vitest } },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": "off",
    },
  },
];
