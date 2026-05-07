import Image from "next/image";
import Link from "next/link";
import { PostMeta } from "@/lib/posts";

type Props = {
  post: PostMeta;
};

export default function BlogCard({ post }: Props) {
  return (
    <article className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48 bg-brand-cream">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="p-5">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-pink mb-2">
          {post.category}
        </span>
        <h2 className="font-serif font-bold text-brand-navy text-lg leading-snug mb-2 group-hover:text-brand-purple transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{post.author}</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </time>
        </div>
      </div>
    </article>
  );
}
