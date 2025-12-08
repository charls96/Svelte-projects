import { defineConfig } from "@rsbuild/core";
import { pluginSvelte } from "@rsbuild/plugin-svelte";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginSvelte({
      svelteLoaderOptions: {
        compilerOptions: {
          dev: process.env.RUN_MODE === "development",
        },
      },
    }),
  ],
});
