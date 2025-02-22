/**
 * Capitalizes the first character of a given text string.
 *
 * This function takes an optional string input and returns a new string
 * with the first character capitalized. If the input is undefined or empty,
 * it returns an empty string.
 *
 * @param text - The input string to be processed.
 * @returns A new string with the first character capitalized, or an empty string if the input is undefined or empty.
 */
export const parseTextCapitalizeFirst = (text?: string) => {
	// Get the first character of the text
	const firstChar = text?.charAt(0);

	if (!firstChar) {
		// Return an empty string if the first character is undefined
		return "";
	}

	// Capitalize the first character and concatenate with the rest of the string
	return firstChar.toUpperCase() + text?.slice(1);
};
