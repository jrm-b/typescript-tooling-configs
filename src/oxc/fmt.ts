import { defineConfig } from "oxfmt";

import { IGNORE_PATTERNS } from "./shared.ts";

type OxfmtOptions = Partial<Parameters<typeof defineConfig>[0]>;

export function jrmbPreset(config: OxfmtOptions = {}): ReturnType<typeof defineConfig> {
  return defineConfig({
    printWidth: 100,
    trailingComma: "all",
    semi: true,
    useTabs: false,
    singleQuote: false,
    quoteProps: "consistent",
    bracketSpacing: true,
    arrowParens: "avoid",
    ignorePatterns: IGNORE_PATTERNS,
    htmlWhitespaceSensitivity: "ignore",
    ...config,
  });
}
