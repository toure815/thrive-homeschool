import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Thank You!",
  description: "Your free SMART Homeschooling Guide is on its way. Check your inbox!",
};

export default function ThankYouPage() {
  const suggestedPosts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="text-5xl mb-4">🎉</div>
      <h1 className="font-serif text-4xl font-bold text-brand-navy mb-3">You&apos;re in!</h1>
      <p className="text-gray-600 text-lg mb-2">
        Your free SMART Homeschooling Guide is on its way to your inbox.
      </p>
      <p className="text-gray-500 text-sm mb-10">
        Don&apos;t see it? Check your spam folder and mark us as a trusted sender so you don&apos;t miss future resources.
      </p>

      <div className="bg-brand-cream rounded-2xl p-6 mb-10 text-left">
        <p className="font-semibold text-brand-navy mb-1">While you wait…</p>
        <p className="text-gray-600 text-sm mb-4">Follow us on Pinterest for daily homeschool inspiration, printables, and lesson ideas.</p>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Follow on Pinterest →
        </a>
      </div>

      {suggestedPosts.length > 0 && (
        <div>
          <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">Start reading</h2>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {suggestedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-4 rounded-xl border border-gray-100 hover:border-brand-pink hover:shadow-sm transition-all"
              >
                <span className="text-xs font-semibold text-brand-pink uppercase tracking-wider block mb-1">{post.category}</span>
                <p className="font-serif font-bold text-brand-navy text-sm leading-snug">{post.title}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
