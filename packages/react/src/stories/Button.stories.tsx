import React from "react"
import type { StoryFn, Meta } from "@storybook/react"

import { Button, ButtonProps } from "../Button"

export default {
	title: "Common Button",
	component: Button,
} as Meta<typeof Button>

type ButtonStory = (
	props: Parameters<typeof Button>[0] & { withIcon: boolean }
) => ReturnType<typeof Button>

const Template: StoryFn<ButtonStory> = ({ withIcon, ...args }) => (
	<Button {...args}>
		{withIcon && (
			<span className="material-symbols-outlined mtu-icon">close</span>
		)}
		{args.children}
	</Button>
)

export const Primary = Template.bind({})
Primary.args = {
	children: "Button",
	variant: "filled",
	disabled: false,
	withIcon: false,
}
