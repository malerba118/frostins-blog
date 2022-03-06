/** @type {import('next').NextConfig} */
const { remarkMdxCodeMeta } = require("remark-mdx-code-meta");

console.log(remarkMdxCodeMeta);

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    remarkPlugins: [remarkMdxCodeMeta],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});
module.exports = {
  reactStrictMode: true,
  ...withMDX({
    // Append the default value with md extensions
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  }),
};
