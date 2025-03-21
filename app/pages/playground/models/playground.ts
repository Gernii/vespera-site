import { useStorage } from "@vueuse/core";
import { nanoid } from "nanoid";
import { usePageSeo } from "~/shared/lib/utils/hooks/page-seo";
import { PLAYGROUND_EXAMPLES_LOCAL_STORAGE_KEY } from "../configs/constants";
import type { PlaygroundExamples } from "../configs/types";
import { ldJson } from "./ld-json";

export const usePlaygroundStore = () => {
	// Persistent state management using local storage
	const examples = useStorage<PlaygroundExamples>(
		PLAYGROUND_EXAMPLES_LOCAL_STORAGE_KEY, // Storage key for playground examples
		{}, // Initial empty state
	);

	const isMobileScreenOuput = ref<boolean>(false);

	// Track the currently selected example ID
	const selectedExample = ref<string>();

	/**
	 * Computed property for managing the selected example name
	 * Provides two-way binding for example name editing
	 */
	const selectedExampleName = computed({
		// Get the name of currently selected example
		get() {
			if (!examples.value[selectedExample.value]) {
				return undefined;
			}
			return examples.value[selectedExample.value].name;
		},
		// Update the name of currently selected example
		set(newValue) {
			examples.value[selectedExample.value].name = newValue;
		},
	});

	/**
	 * Changes the selected example with a small delay to ensure proper state reset to update editor
	 * @param id - The ID of the example to select
	 */
	const onChangeExample = (id: string) => {
		// Reset selection to trigger proper state updates
		selectedExample.value = undefined;

		// Set new selection after a brief delay
		setTimeout(() => {
			selectedExample.value = id;
		}, 1);
	};

	/**
	 * Debounced handler for content changes in the editor
	 * @param value - The new content value to save
	 */
	const onChangeContent = useDebounceFn((value: string) => {
		// Update the content of the currently selected example
		examples.value[selectedExample.value].value = value;
	}, 300); // Debounce delay of 300ms

	/**
	 * Creates a new example with optional initial values
	 * @param name - Optional name for the new example
	 * @param value - Optional initial content for the new example
	 * @returns The ID of the newly created example
	 */
	const onCreateNewExample = (name?: string, value?: string) => {
		const newId = nanoid(); // Generate unique ID
		// Create new example with provided or default values
		examples.value[newId] = { name: name ?? newId, value: value ?? "" };
		onChangeExample(newId); // Select the new example

		return newId;
	};

	// SEO Configuration
	usePageSeo({
		title: "Playground", // Default page title
		description: "Interactive Vespera playground.", // Page description
		ldJsons: [ldJson()], // Structured data for SEO
	});

	/**
	 * Watch for example name changes to update page title
	 */
	watch(selectedExampleName, (value) => {
		if (!value) {
			return;
		}

		usePageSeo({
			title: `${value} - Playground`, // Update page title with example name
		});
	});

	/**
	 * Initialize playground with default example if empty
	 */
	onMounted(() => {
		if (Object.keys(examples.value).length === 0) {
			// Create default "Hello World" example
			const heloWordId = onCreateNewExample("Hello World", "a = 1");
			selectedExample.value = heloWordId;
		} else {
			// Select first available example
			selectedExample.value = Object.keys(examples.value)[0];
		}
	});

	// Return store interface
	return {
		// State properties
		examples,
		selectedExample,
		isMobileScreenOuput,

		// Reactive
		selectedExampleName,

		// Method handlers
		onChangeExample,
		onChangeContent,
		onCreateNewExample,
	};
};
