import { defineConfig } from "@pandacss/dev";
import preset from "./src/preset";

export default defineConfig({
  preflight: true,
  jsxFramework: "react",

  presets: ["@pandacss/dev/presets", preset],

  include: ["./src/**/*.{ts,tsx}"],
  outdir: "../styled-system",
  outExtension: "js",
});
