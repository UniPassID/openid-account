import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  target: ["es5", "es2021"],
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  treeshake: true,
});
