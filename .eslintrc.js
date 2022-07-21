module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    'airbnb-base',
    'airbnb-typescript/base',
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  root: true,
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-await-in-loop': 'off',
    'no-extra-boolean-cast': 'off',
    'no-param-reassign': 'off',
    'no-else-return': 'off',
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": [
      "error"
    ],
    "@typescript-eslint/no-shadow": [
      "error"
    ],
    "no-shadow": "off",
    "no-use-before-define": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [
          ".tsx"
        ]
      }
    ],
    "react/display-name": "off",
    "camelcase": "error",
    "spaced-comment": "error",
    "quotes": [
      "error",
      "single"
    ],
    "no-duplicate-imports": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
};
