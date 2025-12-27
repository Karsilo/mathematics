import {
    defineConfig,
    defineDocs,
    frontmatterSchema,
    metaSchema,
} from 'fumadocs-mdx/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// Fundamental Mathematics documentation
export const fundamentalDocs = defineDocs({
    dir: 'content/fundamental',
    docs: {
        schema: frontmatterSchema,
    },
    meta: {
        schema: metaSchema,
    },
});

// Advanced Mathematics documentation
export const advancedDocs = defineDocs({
    dir: 'content/advanced',
    docs: {
        schema: frontmatterSchema,
    },
    meta: {
        schema: metaSchema,
    },
});

export default defineConfig({
    mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: (v) => [rehypeKatex, ...v],
    },
});
