/**
 * Enum representing the different types of outputs that can be generated.
 */
export enum OutputType {
	/** Output type for a result. */
	Result = "result",

	/** Output type for an abstract syntax tree (AST). */
	Ast = "ast",
}

/** The key used for storing playground examples in local storage. */
export const PLAYGROUND_EXAMPLES_LOCAL_STORAGE_KEY = "playground-examples";
