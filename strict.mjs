import tseslint from "typescript-eslint";
import baseConfig from "./index.mjs";

export default [
  ...baseConfig,
  ...tseslint.configs.strictTypeChecked,
  {
    rules: {
      // React Router throws Response objects for redirects and errors
      "@typescript-eslint/only-throw-error": "off",
      // Allow `void promise()` as a statement to explicitly discard promise return values
      // (e.g. `void navigate(...)` in React event handlers), which no-floating-promises requires
      "no-void": ["error", { allowAsStatement: true }],
    },
  },
];
