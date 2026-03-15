# ESLint Config

A mildly strict ESLint flat config for TypeScript + React projects, using `typescript-eslint`'s recommended type-checked rules.

## How to use

Create an `eslint.config.js` (or `eslint.config.mjs`) in your project root:

```js
import config from "@mrijke/eslint-config";

export default [...config];
```

Or with CommonJS (`eslint.config.cjs`):

```js
const config = require("@mrijke/eslint-config");

module.exports = [...config];
```

For those who like ESLint a lot (and a bit of pain), use `@mrijke/eslint-config/strict` instead:

```js
import strictConfig from "@mrijke/eslint-config/strict";

export default [...strictConfig];
```

In case you want to gradually incorporate this ruleset in an existing project, use the `@mrijke/eslint-config/ci` configuration instead. This configuration uses [eslint-plugin-diff](https://github.com/paleite/eslint-plugin-diff) to only check for linting errors in files touched in a PR.

```js
import ciConfig from "@mrijke/eslint-config/ci";

export default [...ciConfig];
```

## Peer dependencies

Your project must have `typescript` installed (>= 4.8.4).

## Import rules

This config uses `eslint-plugin-import-x` instead of `eslint-plugin-import`. If you have custom import rule overrides, use the `import-x/` prefix:

```js
export default [
  ...config,
  {
    rules: {
      "import-x/no-default-export": "off", // override example
    },
  },
];
```
