import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import baseConfig from "./index.mjs";

export default defineConfig(
  ...baseConfig,
  ...tseslint.configs.strictTypeChecked,
  {
    rules: {
      // React Router throws Response objects for redirects and errors
      "@typescript-eslint/only-throw-error": "off",
    },
  },
);
