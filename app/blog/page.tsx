import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getAllPosts, CATEGORIES } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Curriculum reviews, lesson planning guides, and homeschool tips for multi-age families. Browse all posts from Thrive Homeschool Group.",
};

export default function BlogIndexPage({
  searchParams,
}: {
  searchParams: { category?: string; page?: string };
}) {
  const allPosts = getAllPosts();
  const activeCategory = searchParams.category ?? "";
  const currentPage = Number(searchParams.page ?? 1);
  const perPage = 9;

  const filtered = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl font-bold text-brand-navy mb-2">The Blog</h1>
      <p className="text-gray-500 mb-8">Practical ideas for every homeschool family.</p>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <a
          href="/blog"
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
            !activeCategory
              ? "bg-brand-purple text-white border-brand-purple"
              : "border-gray-200 text-gray-600 hover:border-brand-purple hover:text-brand-purple"
          }`}
        >
          All
        </a>
        {CATEGORIES.map((cat) => (
          <a
            key={cat}
            href={`/blog?category=${encodeURIComponent(cat)}`}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === cat
                ? "bg-brand-purple text-white border-brand-purple"
                : "border-gray-200 text-gray-600 hover:border-brand-purple hover:text-brand-purple"
            }`}
          >
            {cat}
          </a>
        ))}
      </div>

      {paginated.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {paginated.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-gray-400">
          <p className="text-lg">No posts in this category yet.</p>
          <a href="/blog" className="text-brand-purple text-sm mt-2 inline-block hover:underline">← Back to all posts</a>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <a
              key={page}
              href={`/blog?${activeCategory ? `category=${encodeURIComponent(activeCategory)}&` : ""}page=${page}`}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                page === currentPage
                  ? "bg-brand-purple text-white"
                  : "border border-gray-200 text-gray-600 hover:border-brand-purple"
              }`}
            >
              {page}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
