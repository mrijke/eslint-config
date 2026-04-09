import { defineConfig } from "eslint/config";
import baseConfig from "./index.mjs";
import diffPlugin from "eslint-plugin-diff";

export default defineConfig(...baseConfig, ...diffPlugin.configs["flat/ci"]);
