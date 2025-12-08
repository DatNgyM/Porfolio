"use client";

import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";

const markdownContent = `
# Markdown Example

This is a **markdown** example using React Markdown.

## Features

- ✅ Support for markdown syntax
- ✅ GitHub Flavored Markdown (GFM)
- ✅ Code blocks with syntax highlighting

\`\`\`typescript
const example = "Hello World";
console.log(example);
\`\`\`

> This is a blockquote

[Link to GitHub](https://github.com)
`;

export default function MarkdownExample() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Markdown Example</h2>
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
}

