import React from "react"
import type { StoryFn, Meta } from "@storybook/react"

import { Button } from "../Button"

export default {
	title: "Example/Button",
	component: Button,
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => (
	<Button {...args}>
		{args.variant !== "text" ? (
			<span className="material-symbols-outlined mtu-icon">close</span>
		) : null}
		{args.children}
	</Button>
)

export const Primary = Template.bind({})
Primary.args = {
	children: "Button",
	variant: "filled",
	disabled: false,
}
