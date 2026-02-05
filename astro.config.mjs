import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    sitemap({
      filter: (page) => !page.includes('/404')
    })
  ],
  site: "https://knowledge-bridge.com",
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
