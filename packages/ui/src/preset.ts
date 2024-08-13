import { definePreset } from "@pandacss/dev";
import { buttonRecipe } from "./recipes/button";

const preset = definePreset({
  name: "@repo/preset",
  theme: {
    recipes: {
      button: buttonRecipe,
    },
  },
});

export default preset;
