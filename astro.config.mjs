import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";


// https://astro.build/config
export default defineConfig({
  site: "https://shengw3n.github.io/",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
  markdown: {
    syntaxHighlight: "prism",
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})