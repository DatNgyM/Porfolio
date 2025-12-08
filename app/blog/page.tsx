"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts, getPostsByCategory } from "@/lib/blog-data";
import { BlogPost } from "@/types/blog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientBackground from "@/components/background/GradientBackground";

const categories = ["Tất cả", "Java", "JavaScript", "Network Programming"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const allPosts = getAllPosts();

  const filteredPosts = useMemo(() => {
    let posts: BlogPost[] = allPosts;

    // Filter by category
    if (selectedCategory !== "Tất cả") {
      posts = getPostsByCategory(selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    return posts;
  }, [selectedCategory, searchQuery, allPosts]);

  return (
    <main className="min-h-screen relative">
      <GradientBackground />
      <Navbar />
      
      <section className="relative pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text-2">Blog</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Chia sẻ kiến thức về Java, JavaScript và Network Programming
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 space-y-6"
          >
            {/* Search Bar */}
            <div className="glass dark:glass-dark rounded-xl p-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-transparent border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-gray-100 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/50"
                      : "glass dark:glass-dark text-gray-700 dark:text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Tìm thấy <span className="font-bold text-green-600 dark:text-green-400">{filteredPosts.length}</span>{" "}
              bài viết
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="glass dark:glass-dark rounded-2xl p-12 max-w-md mx-auto">
                <Filter className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                  Không tìm thấy bài viết
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

