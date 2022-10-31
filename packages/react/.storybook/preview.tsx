import React from "react"
import "./styles.scss"

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	darkMode: {
		darkClass: "theme-dark",
		lightClass: "theme-light",
		classTarget: "html",
		stylePreview: true,
	},
}

export const decorators = [
	(Story) => {
		React.useEffect(() => {
			document.querySelector("body")?.classList.add("background")
		}, [])

		return <Story />
	},
]
