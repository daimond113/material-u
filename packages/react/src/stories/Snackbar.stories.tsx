import React from "react"
import type { StoryFn, Meta } from "@storybook/react"

import { Snackbar } from "../Snackbar"

export default {
	title: "Snackbar",
	component: Snackbar,
} as Meta<typeof Snackbar>

export const SingleLine: StoryFn<typeof Snackbar> = (args) => (
	<Snackbar {...args}>
		<span>{args.children}</span>
		<button className="mtu-text-button">Action</button>
	</Snackbar>
)

SingleLine.args = {
	children: "This is a snackbar",
	longAction: false,
}

export const MultipleLines: StoryFn<typeof Snackbar> = (args) => (
	<Snackbar {...args}>
		<span>
			{args.children}
			<br />
			{args.children}
		</span>
		<button className="mtu-text-button">Action</button>
	</Snackbar>
)

MultipleLines.args = {
	children: "This is a snackbar",
	longAction: false,
}

export const WithIcon: StoryFn<typeof Snackbar> = (args) => (
	<Snackbar {...args}>
		<span>{args.children}</span>
		<button className="mtu-text-button">Action</button>
		<span className="material-symbols-outlined mtu-icon">close</span>
	</Snackbar>
)

WithIcon.args = {
	children: "This is a snackbar",
	longAction: false,
}
