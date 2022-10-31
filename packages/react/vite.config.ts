import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "node:path"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dts()],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "ReactMaterialU",
			fileName: (format) => `rmu.${format}.js`,
		},
		rollupOptions: {
			external: (id) => id.startsWith("react/") || ["react-dom"].includes(id),
			output: {
				globals: {
					react: "React",
				},
			},
		},
	},
})
