
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/office/",
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      autoSubfolderIndex: true,
      failOnError: true,
    },
    pages: [
      {
        path: "/",
        prerender: { enabled: true },
      },
      {
        path: "/blog",
        prerender: { enabled: true },
      },
    ],
  },
});
