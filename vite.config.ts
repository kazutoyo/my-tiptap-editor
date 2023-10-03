import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import KumaUI from "@kuma-ui/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), KumaUI()],
});
