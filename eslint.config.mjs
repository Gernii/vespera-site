// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import unusedImports from 'eslint-plugin-unused-imports'
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility'

export default withNuxt(
	// Your custom configs here
	...pluginVueA11y.configs['flat/recommended'],
	{
		ignores: ['**/*.ts', '**/.nuxt/**', '**/*.config.ts', '**/*.d.ts', '*/*.json']
	},
	{
		plugins: {
			'unused-imports': unusedImports
		},
		rules: {
			'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_'
				}
			],
			'@typescript-eslint/no-unused-vars': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/html-self-closing': 'off',
			'vuejs-accessibility/form-control-has-label': 'off'
		}
	}
)
