import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "es2015",
  format: "cjs",
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  treeshake: true,
});
