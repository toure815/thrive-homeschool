import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import OptInForm from "@/components/OptInForm";
import AffiliateLink from "@/components/AffiliateLink";
import BlogCard from "@/components/BlogCard";

const mdxComponents = { AffiliateLink };

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.featuredImage, width: 1000, height: 1500, alt: post.title }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Thrive Homeschool Group",
      url: "https://thrivehomeschoolgroup.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-pink mb-3">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
          </div>
        </div>

        {/* Featured image — Pinterest-friendly 1000x1500 ratio */}
        <div className="relative w-full aspect-[2/3] max-h-[600px] rounded-2xl overflow-hidden mb-10 bg-brand-cream">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Post body */}
        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-navy prose-a:text-brand-purple prose-a:no-underline hover:prose-a:text-brand-pink">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* Social share */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex gap-3 items-center">
          <span className="text-sm font-semibold text-gray-500">Share:</span>
          <a
            href={`https://pinterest.com/pin/create/button/?url=https://thrivehomeschoolgroup.com/blog/${post.slug}&media=${encodeURIComponent(post.featuredImage)}&description=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-red-500 hover:text-red-600 font-medium"
          >
            Pinterest
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://thrivehomeschoolgroup.com/blog/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Facebook
          </a>
        </div>

        {/* Opt-in */}
        <div className="mt-10">
          <OptInForm variant="post" />
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-100">
          <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">You might also like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
