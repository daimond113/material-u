import clsx from "clsx"
import React from "react"

type ButtonVariant =
	| "elevated"
	| "filled"
	| "filled-tonal"
	| "outlined"
	| "outlined-background"
	| "text"
	| "text-icon"

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonVariant
}

export function Button({ variant: v, ...props }: ButtonProps) {
	const variant =
		v === "outlined-background"
			? "mtu-outlined-button-background"
			: v === "text-icon"
			? "mtu-text-button-icon"
			: `mtu-${v}-button`

	return <button {...props} className={clsx(variant, props.className)}></button>
}
