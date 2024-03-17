# ESLint Config

This repository contains a midly strict ESLint config, based on Airbnb's JS guide + `@typescript/eslint`'s recommended (with type checking).

## How to use

Add an `.eslintrc.js` (or `.eslintrc.cjs` if you're in an ES module) containing the following:

```
module.exports = {
  extends: ["@mrijke/eslint-config"]
}
```

For those who like ESLint a lot (and a bit of pain), extend `@mrijke/eslint-config/strict` instead.
