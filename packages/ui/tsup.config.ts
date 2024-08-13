import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./src/index.ts", "./src/preset.ts"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react", "@repo/styled-system"],
  banner: {
    js: "'use client'",
  },
  ...options,
}));
