import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/GuillWebsite/", // Replace 'react-gh-pages' with your actual repo name
});
