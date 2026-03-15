const baseConfig = require("./index.js");
const diffPlugin = require("eslint-plugin-diff");

module.exports = [
  ...baseConfig,
  ...diffPlugin.configs["flat/ci"],
];
