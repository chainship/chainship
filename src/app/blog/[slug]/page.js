"use client";

import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "../../../lib/blogData";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const runtime = 'edge';

export default function BlogPostPage() {
  const params = useParams();
  const post = getBlogPost(params.slug);
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== params.slug && p.category === post?.category)
    .slice(0, 2);

  if (!post) {
    return (
      <div className="relative min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-black dark:text-white mb-4">
            Article Not Found
          </h1>
          <Link href="/blog">
            <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-[1.02] transition-transform">
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Back Button */}
        <Link href="/blog">
          <button className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Blog
          </button>
        </Link>

        {/* Article Header */}
        <article>
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 text-sm font-semibold border border-black/[0.08] dark:border-white/[0.08] rounded-full text-black/70 dark:text-white/70">
                {post.category}
              </span>
              <span className="text-sm text-black/50 dark:text-white/50 flex items-center gap-2">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4 text-black/60 dark:text-white/60">
                <span>{post.author}</span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }}
                className="p-2 border border-black/[0.08] dark:border-white/[0.08] rounded-lg hover:border-black/20 dark:hover:border-white/20 transition-all"
                title="Share article"
              >
                <Share2 size={18} className="text-black dark:text-white" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-3 py-1 text-sm border border-black/[0.08] dark:border-white/[0.08] rounded-full text-black/60 dark:text-white/60"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                h1: ({ children }) => (
                  <h1 className="text-4xl font-black text-black dark:text-white mt-12 mb-6">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold text-black dark:text-white mt-10 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-black dark:text-white mt-8 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-black/70 dark:text-white/70 leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                a: ({ href, children }) => (
                  <Link
                    href={href || '#'}
                    className="text-black dark:text-white underline hover:no-underline"
                  >
                    {children}
                  </Link>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-black/70 dark:text-white/70 mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-black/70 dark:text-white/70 mb-4 space-y-2">
                    {children}
                  </ol>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-black/[0.08] dark:border-white/[0.08]">
            <h2 className="text-3xl font-black text-black dark:text-white mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <div className="group p-6 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer">
                    <span className="text-xs font-semibold text-black/60 dark:text-white/60 mb-2 block">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:underline">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-black/60 dark:text-white/60 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center p-12 border border-black/[0.08] dark:border-white/[0.08] rounded-3xl bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02]">
          <h2 className="text-3xl sm:text-4xl font-black text-black dark:text-white mb-6">
            Need Web3 Development Help?
          </h2>
          <p className="text-xl text-black/60 dark:text-white/60 mb-8 max-w-2xl mx-auto">
            Let Chainship build your blockchain project with production-ready code in 2-4 weeks.
          </p>
          <Link href="/quote">
            <button className="px-12 h-14 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-lg">
              Get Free Quote
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
