import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    supportFile: "cypress/support/component.tsx",
    viewportWidth: 1000,
    viewportHeight: 600,
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
