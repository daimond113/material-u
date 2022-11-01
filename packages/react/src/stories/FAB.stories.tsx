import React from "react"
import type { StoryFn, Meta } from "@storybook/react"

import { ExpandedFAB, FAB, LargeFAB, SmallFAB } from "../FAB"

export default {
	title: "FAB",
	component: FAB,
} as Meta<typeof FAB>

export const StandardPlusSmall: StoryFn<typeof FAB> = (args) => (
	<>
		<div className="mtu-small-fab-container">
			<SmallFAB {...args}>
				<span className="material-symbols-outlined mtu-icon">menu</span>
			</SmallFAB>
			<SmallFAB {...args}>
				<span className="material-symbols-outlined mtu-icon">key</span>
			</SmallFAB>
			<SmallFAB {...args}>
				<span className="material-symbols-outlined mtu-icon">edit</span>
			</SmallFAB>
		</div>
		<FAB {...args}>
			<span className="material-symbols-outlined mtu-icon">close</span>
		</FAB>
	</>
)

StandardPlusSmall.args = {
	variant: "primary",
	lowered: false,
}

export const Large: StoryFn<typeof FAB> = (args) => (
	<LargeFAB {...args}>
		<span className="material-symbols-outlined mtu-icon">close</span>
	</LargeFAB>
)

Large.args = {
	variant: "primary",
	lowered: false,
}

export const Expanded: StoryFn<typeof ExpandedFAB> = (args) => (
	<ExpandedFAB {...args}>
		<span className="material-symbols-outlined mtu-icon">close</span>A label
		too!
	</ExpandedFAB>
)

Expanded.args = {
	variant: "primary",
	lowered: false,
}
