import React from "react"

type ButtonVariant =
	| "elevated"
	| "filled"
	| "filled-tonal"
	| "outlined"
	| "outlined-background"
	| "text"
	| "text-icon"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonVariant
}

export function Button({ variant: v, ...props }: ButtonProps) {
	const variant =
		v === "text-icon"
			? "mtu-text-button-icon"
			: v === "outlined-background"
			? "mtu-outlined-button-background"
			: `mtu-${v}-button`
	return <button {...props} className={variant}></button>
}
