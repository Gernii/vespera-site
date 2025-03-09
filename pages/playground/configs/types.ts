/**
 * Represents a single playground code example
 * @interface PlaygroundExample
 */
export interface PlaygroundExample {
	/** The display name of the example */
	name: string;
	/** The code content of the example */
	value: string;
}

/**
 * Collection of playground examples indexed by their unique identifiers
 * @interface PlaygroundExamples
 */
export interface PlaygroundExamples {
	/**
	 * Key-value pairs where:
	 * - key: unique identifier string for the example
	 * - value: PlaygroundExample object containing name and code content
	 */
	[key: string]: PlaygroundExample;
}
