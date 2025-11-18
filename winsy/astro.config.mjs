// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "http://localhost:4321",   // <-- PON TU DOMINIO
  output: "static",                // <-- hosting normal, sin Node
  vite: {
    plugins: [tailwindcss()],
  },
});
