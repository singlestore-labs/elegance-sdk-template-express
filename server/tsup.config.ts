import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["./src/index.ts"],
    outDir: "./build",
    format: ["cjs", "esm"],
    dts: true,
    clean: true,
    splitting: true,
    treeshake: true
  }
]);
