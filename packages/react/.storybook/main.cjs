const path = require("path")
module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-actions",
		"@storybook/addon-controls",
		"@storybook/addon-docs",
		"@storybook/addon-highlight",
		"@storybook/addon-interactions",
		"@storybook/addon-links",
		"@storybook/addon-measure",
		"@storybook/addon-outline",
		"storybook-dark-mode",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
}
