import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");
import * as dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	alias: {
		"@": path.resolve(__dirname, "./src"),
	},
});
