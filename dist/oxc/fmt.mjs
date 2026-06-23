import { t as IGNORE_PATTERNS } from "../shared-CoSP_HvN.mjs";
import { defineConfig } from "oxfmt";
//#region src/oxc/fmt.ts
function jrmbPreset(config = {}) {
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
		...config
	});
}
//#endregion
export { jrmbPreset };
