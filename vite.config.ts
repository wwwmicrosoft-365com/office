
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/office/",
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      failOnError: true,
    },
  },
});
