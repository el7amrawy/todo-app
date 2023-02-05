import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import config from "./src/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${config.base}`,
});
