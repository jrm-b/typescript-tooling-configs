import { defineConfig } from "oxfmt";

//#region src/oxc/fmt.d.ts
type OxfmtOptions = Partial<Parameters<typeof defineConfig>[0]>;
declare function jrmbPreset(config?: OxfmtOptions): ReturnType<typeof defineConfig>;
//#endregion
export { jrmbPreset };