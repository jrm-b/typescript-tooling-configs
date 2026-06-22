import { defineConfig } from "oxlint";

import { jrmbPreset } from "./src/oxc/lint.ts";

export default defineConfig({
  extends: [jrmbPreset({ perfectionist: true })],
});
