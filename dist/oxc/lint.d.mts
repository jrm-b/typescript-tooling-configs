import { OxlintConfig } from "oxlint";

//#region src/oxc/lint.d.ts
interface JrmbOxlintConfig {
  adonisjs?: boolean;
  perfectionist?: boolean;
}
declare function jrmbPreset(config?: JrmbOxlintConfig): {
  ignorePatterns: string[];
  extends: OxlintConfig[];
  rules: {};
};
//#endregion
export { jrmbPreset };