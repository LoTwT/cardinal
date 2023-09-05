import { defineFlatEslintConfig } from "@ayingott/eslint-config"

export default defineFlatEslintConfig(
  [
    {
      ignores: ["tauri/**/*"],
    },
  ],
  {
    prettier: true,
    vue: true,
    unocss: false,
    react: false,
  },
)
