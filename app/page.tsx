import type { Metadata } from "next";
import OptInForm from "@/components/OptInForm";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Thrive Homeschool Group — Practical Homeschool Resources for Families",
  description: "Curriculum guides, lesson planning tools, and the free SMART Homeschooling Guide for homeschool families who want to teach with intention.",
};

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-cream via-white to-brand-pink/10 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-3">
              For Homeschool Families
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-4 text-balance">
              Homeschool with Purpose. Teach with Joy.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Practical curriculum resources, lesson planning guides, and community for homeschool families at every stage — whether you&apos;re just starting or you&apos;ve been at it for years.
            </p>
          </div>
          <div>
            <OptInForm variant="hero" />
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl font-bold text-brand-navy">From the Blog</h2>
          <a href="/blog" className="text-brand-purple text-sm font-medium hover:text-brand-pink transition-colors">
            View all posts →
          </a>
        </div>

        {recentPosts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">Blog posts coming soon!</p>
            <p className="text-sm mt-1">New content every week.</p>
          </div>
        )}
      </section>

      {/* Mission strip */}
      <section className="bg-brand-maroon text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">You Don&apos;t Have to Figure This Out Alone</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Thrive Homeschool Group exists to give you practical tools and encouragement for the homeschool journey — without the overwhelm. Real ideas. Real families. Real results.
          </p>
          <a
            href="/free-guide"
            className="inline-block bg-brand-pink hover:bg-brand-orange text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Get the Free SMART Guide →
          </a>
        </div>
      </section>
    </>
  );
}
