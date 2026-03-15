const tseslint = require("typescript-eslint");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const jsxA11yPlugin = require("eslint-plugin-jsx-a11y");
const importXPlugin = require("eslint-plugin-import-x");
const prettierRecommended = require("eslint-plugin-prettier/recommended");
const jestPlugin = require("eslint-plugin-jest");
const jestDomPlugin = require("eslint-plugin-jest-dom");
const testingLibraryPlugin = require("eslint-plugin-testing-library");
const globals = require("globals");

module.exports = tseslint.config(
  // Layer 1: TypeScript base with type-checked rules
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // Layer 2: Global settings
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
    settings: {
      "import-x/resolver": {
        typescript: true,
      },
      react: {
        version: "detect",
      },
    },
  },

  // Layer 3: React
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
    },
  },

  // Layer 4: JSX Accessibility
  jsxA11yPlugin.flatConfigs.recommended,

  // Layer 5: Import rules
  importXPlugin.flatConfigs.recommended,
  importXPlugin.flatConfigs.typescript,
  {
    rules: {
      "import-x/dynamic-import-chunkname": "error",
      "import-x/no-default-export": "error",
      "import-x/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.stories.tsx",
            "**/*.test.tsx",
            "**/*.test.ts",
          ],
        },
      ],
      "import-x/prefer-default-export": "off",
      "import-x/order": [
        "error",
        {
          "newlines-between": "always",
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import-x/first": "error",
      "import-x/no-duplicates": "error",
      "import-x/newline-after-import": "error",
      "import-x/no-mutable-exports": "error",
      "import-x/no-self-import": "error",
      "import-x/no-cycle": ["error", { maxDepth: Infinity }],
      "import-x/no-useless-path-segments": ["error", { commonjs: true }],
      "import-x/no-absolute-path": "error",
      "import-x/no-webpack-loader-syntax": "error",
      "import-x/export": "error",
      "import-x/no-named-as-default": "error",
      "import-x/extensions": [
        "error",
        "ignorePackages",
        { js: "never", mjs: "never", jsx: "never", ts: "never", tsx: "never" },
      ],
    },
  },

  // Layer 6: Correctness rules (from Airbnb, not covered by typescript-eslint)
  {
    rules: {
      // Best practices
      "array-callback-return": ["error", { allowImplicit: true }],
      "block-scoped-var": "error",
      "@typescript-eslint/consistent-return": "error",
      curly: ["error", "multi-line"],
      "default-case": ["error", { commentPattern: "^no default$" }],
      "default-case-last": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "grouped-accessor-pairs": "error",
      "guard-for-in": "error",
      "no-alert": "warn",
      "no-caller": "error",
      "no-constructor-return": "error",
      "no-else-return": ["error", { allowElseIf: false }],
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-global-assign": "error",
      "no-iterator": "error",
      "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
      "no-lone-blocks": "error",
      "no-multi-str": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: [
            "acc",
            "accumulator",
            "e",
            "ctx",
            "context",
            "req",
            "request",
            "res",
            "response",
            "staticContext",
          ],
        },
      ],
      "no-proto": "error",
      "no-restricted-properties": [
        "error",
        { object: "arguments", property: "callee", message: "arguments.callee is deprecated" },
        { object: "global", property: "isFinite", message: "Please use Number.isFinite instead" },
        { object: "self", property: "isFinite", message: "Please use Number.isFinite instead" },
        { object: "window", property: "isFinite", message: "Please use Number.isFinite instead" },
        { object: "global", property: "isNaN", message: "Please use Number.isNaN instead" },
        { object: "self", property: "isNaN", message: "Please use Number.isNaN instead" },
        { object: "window", property: "isNaN", message: "Please use Number.isNaN instead" },
        { property: "__defineGetter__", message: "Please use Object.defineProperty instead." },
        { property: "__defineSetter__", message: "Please use Object.defineProperty instead." },
        { object: "Math", property: "pow", message: "Use the exponentiation operator (**) instead." },
      ],
      "no-return-assign": ["error", "always"],
      "no-script-url": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-template-curly-in-string": "error",
      "no-useless-concat": "error",
      "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
      radix: "error",
      "symbol-description": "error",

      // Variables
      "no-label-var": "error",
      "no-restricted-globals": [
        "error",
        { name: "isFinite", message: "Use Number.isFinite instead" },
        { name: "isNaN", message: "Use Number.isNaN instead" },
      ],

      // ES6
      "prefer-template": "error",
      "object-shorthand": ["error", "always", { ignoreConstructors: false, avoidQuotes: true }],
      "prefer-arrow-callback": ["error", { allowNamedFunctions: false, allowUnboundThis: true }],
      "@typescript-eslint/prefer-destructuring": [
        "error",
        {
          VariableDeclarator: { array: false, object: true },
          AssignmentExpression: { array: true, object: false },
        },
        { enforceForRenamedProperties: false },
      ],
      "no-useless-computed-key": "error",
      "no-useless-rename": "error",
      "no-restricted-exports": ["error", { restrictedNamedExports: ["default", "then"] }],

      // Error prevention
      "no-await-in-loop": "error",
      "no-console": "warn",
      "no-promise-executor-return": "error",
      "no-unreachable-loop": "error",
      "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
      "no-unused-private-class-members": "error",
    },
  },

  // Layer 7: React rules
  {
    rules: {
      "react/function-component-definition": [
        "error",
        {
          namedComponents: ["function-declaration", "arrow-function"],
          unnamedComponents: "arrow-function",
        },
      ],
      "react/require-default-props": "off",
      "react/self-closing-comp": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/no-unstable-nested-components": "error",
      "react/jsx-no-constructed-context-values": "error",
      "react/button-has-type": "error",
      "react/no-array-index-key": "error",
      "react/jsx-pascal-case": ["error", { allowAllCaps: true }],
      "react/void-dom-elements-no-children": "error",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
      "react/jsx-fragments": ["error", "syntax"],
    },
  },

  // Layer 8: Prettier (must be near last to override formatting rules)
  prettierRecommended,
  {
    rules: {
      "prettier/prettier": ["warn", { printWidth: 110 }],
    },
  },

  // Layer 9: Miscellaneous
  {
    rules: {
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
      "no-void": ["error", { allowAsStatement: true }],
    },
  },

  // Layer 10: Test file overrides
  {
    files: ["**/*.test.{js,jsx,ts,tsx}"],
    plugins: {
      jest: jestPlugin,
      "jest-dom": jestDomPlugin,
      "testing-library": testingLibraryPlugin,
    },
    rules: {
      ...jestPlugin.configs["flat/recommended"].rules,
      ...jestDomPlugin.configs["flat/recommended"].rules,
      ...testingLibraryPlugin.configs["flat/react"].rules,
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
);
