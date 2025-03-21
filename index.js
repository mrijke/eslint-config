module.exports = {
  env: { browser: true, es2020: true, jest: true },
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["prettier"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
  rules: {
    "import/dynamic-import-chunkname": "error",
    "import/no-default-export": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.stories.tsx", "**/*.test.tsx", "**/*.test.ts"],
      },
    ],
    "import/prefer-default-export": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always", // new line between groups
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "no-void": ["error", { allowAsStatement: true }],
    "prettier/prettier": ["warn", { printWidth: 110 }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponents: "arrow-function",
      },
    ],
    // not required with TypeScript strictNullChecks
    "react/require-default-props": "off",
    // this is just to get sorting for the members inside an import statement
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
  },
  overrides: [
    // Jest/Vitest
    {
      files: ["**/*.test.{js,jsx,ts,tsx}"],
      plugins: ["jest", "jest-dom", "testing-library"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
      ],
      env: {
        "jest/globals": true,
      },
      settings: {
        jest: {
          // we're using vitest which has a very similar API to jest
          // (so the linting plugins work nicely), but it means we have to explicitly
          // set the jest version.
          version: 28,
        },
      },
    },
  ],
};
