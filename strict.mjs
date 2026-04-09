import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import baseConfig from "./index.mjs";

export default defineConfig(
  ...baseConfig,
  ...tseslint.configs.strictTypeChecked,
);
