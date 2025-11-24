"use client";

import { Calendar, Clock, Tag, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getAllBlogPosts } from "../../lib/blogData";

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(allPosts.map(post => post.category))];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-6">
            Web3 Insights & Guides
          </h1>
          <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 max-w-3xl mx-auto font-light">
            Deep dives into blockchain development, DeFi protocols, smart contracts, and Web3 best practices
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/40 dark:text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full border transition-all ${
                  selectedCategory === category
                    ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                    : "border-black/[0.08] dark:border-white/[0.08] text-black/70 dark:text-white/70 hover:border-black/20 dark:hover:border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-black/50 dark:text-white/50">
              No articles found matching your search.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group h-full p-8 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1.5 text-xs font-semibold border border-black/[0.08] dark:border-white/[0.08] rounded-full text-black/70 dark:text-white/70">
                      {post.category}
                    </span>
                    <span className="text-sm text-black/50 dark:text-white/50 flex items-center gap-2">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-black dark:text-white mb-3 group-hover:underline">
                    {post.title}
                  </h2>

                  <p className="text-black/60 dark:text-white/60 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-black/50 dark:text-white/50">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <ArrowRight 
                      size={20} 
                      className="text-black dark:text-white group-hover:translate-x-1 transition-transform" 
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 text-xs text-black/50 dark:text-white/50"
                      >
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center p-12 border border-black/[0.08] dark:border-white/[0.08] rounded-3xl bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02]">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-6">
            Want to Build Something Amazing?
          </h2>
          <p className="text-xl text-black/60 dark:text-white/60 mb-8 max-w-2xl mx-auto">
            Get expert Web3 development help. 2-4 week sprints, production-ready code.
          </p>
          <Link href="/hire-us">
            <button className="px-12 h-14 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-lg">
              Hire Us
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
