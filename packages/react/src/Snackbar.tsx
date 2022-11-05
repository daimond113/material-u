import clsx from "clsx"
import React from "react"

export interface SnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
	longAction?: boolean
}

export function Snackbar({ longAction, ...props }: SnackbarProps) {
	return (
		<div
			{...props}
			className={clsx(
				"mtu-snackbar",
				longAction && "mtu-snackbar-long-action",
				props.className
			)}
		></div>
	)
}
