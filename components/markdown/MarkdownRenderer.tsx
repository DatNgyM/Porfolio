"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  return (
    <div
      className={`prose prose-slate dark:prose-invert max-w-none ${className}`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings with gradient effect
          h1: ({ node, ...props }) => (
            <h1
              className="text-4xl font-extrabold mt-12 mb-6 pb-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-3xl font-bold mt-10 mb-5 pb-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-100"
              {...props}
            />
          ),
          h4: ({ node, ...props }) => (
            <h4
              className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-100"
              {...props}
            />
          ),
          // Paragraphs
          p: ({ node, ...props }) => (
            <p
              className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg"
              {...props}
            />
          ),
          // Code blocks with beautiful styling
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";
            
            if (!inline && language) {
              return (
                <div className="my-8 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-900 dark:bg-black">
                  <div className="flex items-center justify-between bg-gray-800 dark:bg-gray-950 px-4 py-3 border-b border-gray-700">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {language}
                    </span>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre
                    className="m-0 p-6 overflow-x-auto bg-gray-900 dark:bg-black"
                    {...props}
                  >
                    <code className="text-sm font-mono text-gray-100 leading-relaxed">
                      {children}
                    </code>
                  </pre>
                </div>
              );
            }
            
            return (
              <code
                className="px-2.5 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-mono text-sm font-semibold before:content-[''] after:content-['']"
                {...props}
              >
                {children}
              </code>
            );
          },
          // Pre tag for code blocks
          pre: ({ node, ...props }) => (
            <pre
              className="m-0 p-0 overflow-x-auto"
              {...props}
            />
          ),
          // Lists
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc list-outside ml-6 mb-6 space-y-3 text-gray-700 dark:text-gray-300 marker:text-green-600 dark:marker:text-green-400"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal list-outside ml-6 mb-6 space-y-3 text-gray-700 dark:text-gray-300 marker:text-green-600 dark:marker:text-green-400 marker:font-bold"
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li className="pl-2 leading-relaxed" {...props} />
          ),
          // Blockquotes
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-green-500 dark:border-green-400 pl-6 py-4 my-8 bg-green-50 dark:bg-green-900/10 rounded-r-lg italic text-gray-700 dark:text-gray-300 shadow-md"
              {...props}
            />
          ),
          // Links
          a: ({ node, ...props }) => (
            <a
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold underline decoration-2 underline-offset-2 transition-colors duration-200"
              {...props}
            />
          ),
          // Tables
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg">
              <table
                className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                {...props}
              />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead
              className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
              {...props}
            />
          ),
          tbody: ({ node, ...props }) => (
            <tbody
              className="bg-white dark:bg-gray-950 divide-y divide-gray-200 dark:divide-gray-700"
              {...props}
            />
          ),
          th: ({ node, ...props }) => (
            <th
              className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td
              className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300"
              {...props}
            />
          ),
          tr: ({ node, ...props }) => (
            <tr
              className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors duration-150"
              {...props}
            />
          ),
          // Strong/Bold
          strong: ({ node, ...props }) => (
            <strong
              className="font-bold text-gray-900 dark:text-gray-100"
              {...props}
            />
          ),
          // Em/Italic
          em: ({ node, ...props }) => (
            <em
              className="italic text-gray-800 dark:text-gray-200"
              {...props}
            />
          ),
          // Horizontal rule
          hr: ({ node, ...props }) => (
            <hr
              className="my-12 border-0 border-t-2 border-gray-200 dark:border-gray-700"
              {...props}
            />
          ),
          // Images
          img: ({ node, ...props }) => (
            <img
              className="rounded-xl shadow-2xl my-8 border border-gray-200 dark:border-gray-700"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

