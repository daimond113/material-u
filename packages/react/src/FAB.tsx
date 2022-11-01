import clsx from "clsx"

export interface FABProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "tertiary" | "surface"
	lowered?: boolean
}

export function FAB({ variant = "primary", lowered, ...props }: FABProps) {
	return (
		<button
			{...props}
			className={clsx(
				`mtu-fab-${variant}${lowered ? "-lowered" : ""}`,
				props.className
			)}
		></button>
	)
}

export function SmallFAB({ variant = "primary", lowered, ...props }: FABProps) {
	return (
		<button
			{...props}
			className={clsx(
				`mtu-small-fab-${variant}${lowered ? "-lowered" : ""}`,
				props.className
			)}
		></button>
	)
}

export function LargeFAB({ variant = "primary", lowered, ...props }: FABProps) {
	return (
		<button
			{...props}
			className={clsx(
				`mtu-large-fab-${variant}${lowered ? "-lowered" : ""}`,
				props.className
			)}
		></button>
	)
}

export function ExpandedFAB({
	variant = "primary",
	lowered,
	...props
}: FABProps) {
	return (
		<button
			{...props}
			className={clsx(
				`mtu-expanded-fab-${variant}${lowered ? "-lowered" : ""}`,
				props.className
			)}
		></button>
	)
}
