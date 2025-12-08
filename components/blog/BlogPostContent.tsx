"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag, User } from "lucide-react";
import { BlogPost } from "@/types/blog";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Java":
        return "from-orange-500 to-red-500";
      case "JavaScript":
        return "from-yellow-400 to-orange-500";
      case "Network Programming":
        return "from-teal-500 to-cyan-500";
      default:
        return "from-green-500 to-emerald-500";
    }
  };

  return (
    <article className="relative pt-32 pb-20 min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/20 dark:bg-gray-800/20 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"
          style={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/blog">
            <Button
              variant="ghost"
              className="glass dark:glass-dark hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại Blog
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <span
              className={`inline-block px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${getCategoryColor(
                post.category
              )} shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              {post.category}
            </span>
          </motion.div>

          {/* Title with Gradient Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent">
              {post.title}
            </span>
          </motion.h1>

          {/* Meta Info - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass dark:glass-dark rounded-2xl p-6 md:p-8 mb-8 shadow-xl border border-white/20 dark:border-white/10"
          >
            <div className="flex flex-wrap items-center gap-6 text-sm mb-4">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>{post.readTime} phút đọc</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                <User className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>{post.author}</span>
              </div>
            </div>

            {/* Tags - Enhanced */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/20 dark:border-white/10">
              <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              {post.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="px-4 py-1.5 text-xs font-semibold rounded-full glass dark:glass-dark text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.header>

        {/* Content - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass dark:glass-dark rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl border border-white/20 dark:border-white/10 prose prose-lg prose-slate dark:prose-invert max-w-none blog-content"
        >
          <MarkdownRenderer content={post.content} />
        </motion.div>

        {/* Navigation - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white border-0 shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Xem tất cả bài viết
            </Button>
          </Link>
        </motion.div>
      </div>
    </article>
  );
}

