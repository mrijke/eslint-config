# ESLint Config

This repository contains a mildly strict ESLint config, based on Airbnb's JS guide + `@typescript/eslint`'s recommended (with type checking).

## How to use

Add an `.eslintrc.js` (or `.eslintrc.cjs` if you're in an ES module) containing the following:

```
module.exports = {
  extends: ["@mrijke/eslint-config"]
}
```

For those who like ESLint a lot (and a bit of pain), extend `@mrijke/eslint-config/strict` instead.

In case you want to gradually incorporate this ruleset in an existing project, extend the `@mrijke/eslint-config/ci` configuration instead. This configuration uses the [eslint-plugin-diff](https://github.com/paleite/eslint-plugin-diff) to only check for linting erors in files touched in a PR.
