import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from 'rehype-slug';

const options = {
  theme: {
    dark: "github-dark-dimmed",
    light: "github-light-default",
  },
  keepBackground: false,
  
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
    },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)