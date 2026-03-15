const tseslint = require("typescript-eslint");
const baseConfig = require("./index.js");

module.exports = tseslint.config(
  ...baseConfig,
  ...tseslint.configs.strictTypeChecked,
);
