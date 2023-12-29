import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "node20",
    ssr: "src/index.ts",
  },
  ssr: {
    // Anything NOT 'node:' will be bundled.
    noExternal: /^(?!node:)/,
  },
});
