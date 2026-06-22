import { defineConfig } from "oxlint";
import type { OxlintConfig } from "oxlint";

import { IGNORE_PATTERNS } from "./shared.ts";

interface JrmbOxlintConfig {
  adonisjs?: boolean;
  perfectionist?: boolean;
}

function perfectionistPreset() {
  return defineConfig({
    jsPlugins: ["eslint-plugin-perfectionist"],
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "line-length",
          order: "asc",
          internalPattern: ["^@/.*", "^~/.*", "^#/.*"],
          groups: [
            ["side-effect", "side-effect-style"],
            ["builtin", "external"],
            ["internal", "subpath", "parent", "sibling", "index", "style", "unknown"],
          ],
        },
      ],
    },
  });
}

function defaultPreset() {
  return defineConfig({
    ignorePatterns: IGNORE_PATTERNS,
    plugins: ["typescript", "node", "eslint", "oxc", "react", "react-perf"],
    rules: {},
  });
}

export function jrmbPreset(config: JrmbOxlintConfig = {}) {
  return defineConfig({
    extends: [defaultPreset(), config.perfectionist ? perfectionistPreset() : null].filter(
      Boolean,
    ) as OxlintConfig[],
    rules: {},
  });
}
