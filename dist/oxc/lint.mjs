import { t as IGNORE_PATTERNS } from "../shared-CoSP_HvN.mjs";
import { defineConfig } from "oxlint";
//#region src/oxc/lint.ts
function adonisjsPreset() {
	return defineConfig({
		jsPlugins: ["@adonisjs/eslint-plugin"],
		rules: {
			"@adonisjs/prefer-lazy-controller-import": "error",
			"@adonisjs/prefer-lazy-listener-import": "error",
			"typescript/triple-slash-reference": "off",
			/**
			* Knex query builder return a promise but safe to ignore since they are not executed until you call `.exec()` or similar method.
			*/
			"@typescript-eslint/no-floating-promises": ["error", { allowForKnownSafePromises: [{
				from: "package",
				package: "@adonisjs/lucid",
				name: [
					"ExcutableQueryBuilderContract",
					"ModelQueryBuilderContract",
					"DatabaseQueryBuilderContract",
					"InsertQueryBuilderContract",
					"RawQueryBuilderContract",
					"ChainableContract",
					"RelationQueryBuilderContract",
					"RelationSubQueryBuilderContract",
					"HasManyQueryBuilderContract",
					"HasManyThroughQueryBuilderContract",
					"ManyToManyQueryBuilderContract",
					"ManyToManySubQueryBuilderContract"
				]
			}, {
				from: "package",
				package: "knex",
				name: "QueryBuilder"
			}] }]
		}
	});
}
function perfectionistPreset() {
	return defineConfig({
		jsPlugins: ["eslint-plugin-perfectionist"],
		rules: { "perfectionist/sort-imports": ["error", {
			type: "line-length",
			order: "asc",
			internalPattern: [
				"^@/.*",
				"^~/.*",
				"^#/.*"
			],
			groups: [
				["side-effect", "side-effect-style"],
				["builtin", "external"],
				[
					"internal",
					"subpath",
					"parent",
					"sibling",
					"index",
					"style",
					"unknown"
				]
			]
		}] }
	});
}
function defaultPreset() {
	return defineConfig({
		plugins: [
			"typescript",
			"node",
			"eslint",
			"oxc",
			"react",
			"react-perf"
		],
		rules: {}
	});
}
function jrmbPreset(config = {}) {
	return defineConfig({
		ignorePatterns: IGNORE_PATTERNS,
		extends: [
			defaultPreset(),
			config.adonisjs ? adonisjsPreset() : null,
			config.perfectionist ? perfectionistPreset() : null
		].filter(Boolean),
		rules: {}
	});
}
//#endregion
export { jrmbPreset };
