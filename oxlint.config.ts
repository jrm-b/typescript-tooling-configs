import { defineConfig } from "oxlint";

import { jrmbPreset } from "./src/oxc/lint.ts";
import { IGNORE_PATTERNS } from "./src/oxc/shared.ts";

export default defineConfig({
  ignorePatterns: IGNORE_PATTERNS,
  extends: [jrmbPreset({ perfectionist: true })],
});
