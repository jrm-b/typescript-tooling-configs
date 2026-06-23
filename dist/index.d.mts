import { jrmbPreset as jrmbPreset$1 } from "./oxc/lint.mjs";
import { jrmbPreset } from "./oxc/fmt.mjs";

//#region src/oxc/shared.d.ts
declare const IGNORE_PATTERNS: string[];
//#endregion
export { IGNORE_PATTERNS, jrmbPreset as fmtPreset, jrmbPreset$1 as lintPreset };