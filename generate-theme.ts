// A very simple script to generate a theme from a given color to be used with @material-u/css
import {
	argbFromHex,
	hexFromArgb,
	themeFromSourceColor,
} from "@importantimport/material-color-utilities"
import { paramCase } from "param-case"

////// Replace this with your own color
const SOURCE_COLOR = "#9edb6c"
//////

const schemes = themeFromSourceColor(argbFromHex(SOURCE_COLOR)).schemes

const lightOutput = [] as string[]
const darkOutput = [] as string[]

;["light", "dark"].forEach((scheme) => {
	const schemeOutput = scheme === "light" ? lightOutput : darkOutput
	const palette = schemes[scheme as "light" | "dark"].toJSON()

	Object.keys(palette).forEach((colorName) => {
		schemeOutput.push(
			`			'${paramCase(colorName)}': ${hexFromArgb(palette[colorName])}`
		)
	})
})

console.log(`with (
	$themes: (
		'light': (
${lightOutput.join(",\n")}
		),
		'dark': (
${darkOutput.join(",\n")}
		)
	)
)`)
