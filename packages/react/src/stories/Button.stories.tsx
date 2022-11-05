import React from "react"
import type { StoryFn, Meta } from "@storybook/react"

import { Button, ButtonProps } from "../Button"

export default {
	title: "Common Button",
	component: Button,
} as Meta<typeof Button>

export const NoIcon: StoryFn<typeof Button> = (args) => (
	<Button {...args}>{args.children}</Button>
)

NoIcon.args = {
	children: "Button",
	variant: "filled",
	disabled: false,
}

export const WithIcon: StoryFn<typeof Button> = (args) => (
	<Button {...args}>
		<span className="material-symbols-outlined mtu-icon">close</span>
		{args.children}
	</Button>
)

WithIcon.args = {
	children: "Button",
	variant: "filled",
	disabled: false,
}
