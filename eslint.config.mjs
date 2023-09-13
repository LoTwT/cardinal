// @ts-check

import { defineFlatEslintConfig } from "@ayingott/eslint-config"

export default defineFlatEslintConfig(
  [
    {
      ignores: ["dist-electron/**/*", "release/**/*", ".vscode/tasks.json"],
    },
    {
      rules: {
        "no-console": "off",

        "unicorn/prefer-top-level-await": "off",
        "unicorn/filename-case": "off",
        "unicorn/prefer-add-event-listener": "off",
        "unicorn/prefer-array-some": "off",
        "unicorn/prefer-dom-node-append": "off",
        "unicorn/prefer-dom-node-remove": "off",

        "operator-linebreak": "off",
      },
    },
  ],
  {
    vue: true,
  },
)
