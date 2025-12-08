"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types/blog";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
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
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px", amount: 0.5 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -10 }}
      className="glass dark:glass-dark rounded-2xl overflow-hidden cursor-pointer group"
    >
      <Link href={`/blog/${post.slug}`}>
        {/* Category Badge */}
        <div className="p-6 pb-4">
          <span
            className={`inline-block px-4 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getCategoryColor(
              post.category
            )}`}
          >
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:gradient-text transition-all">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full glass dark:glass-dark text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} phút đọc</span>
              </div>
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold"
            >
              Đọc thêm
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

