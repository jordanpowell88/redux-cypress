import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    viewportWidth: 1000,
    viewportHeight: 600,
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
