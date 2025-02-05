import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	// faut ajouter cette ligne pour que le site soit accessible sur github pages
	// ça permet de dire à vite que le site sera accessible sur https://<username>.github.io/<repo>/ et pas sur https://<username>.github.io/
	base: "/ci-cd/",
});
