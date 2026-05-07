import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import OptInForm from "@/components/OptInForm";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllPosts, PostMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Thrive Homeschool Group: Practical Homeschool Resources for Families",
  description: "Curriculum guides, lesson planning tools, and the free SMART Homeschooling Guide for homeschool families who want to teach with intention.",
};

function BentoGrid({ posts }: { posts: PostMeta[] }) {
  const [featured, ...rest] = posts;

  if (posts.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Curriculum", color: "bg-brand-purple", desc: "Honest reviews of what works in a real homeschool." },
          { label: "Lesson Planning", color: "bg-brand-pink", desc: "Simple frameworks for planning your year without the overwhelm." },
          { label: "Multi-Age Homeschooling", color: "bg-brand-orange", desc: "Teaching kids at every stage, all at once." },
        ].map((item) => (
          <div key={item.label} className={`bento-card ${item.color} text-white rounded-3xl p-8 flex flex-col justify-end min-h-[220px]`}>
            <span className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-2">{item.label}</span>
            <p className="font-serif text-xl font-bold leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
      {featured && (
        <Link href={`/blog/${featured.slug}`} className="bento-card md:col-span-2 relative rounded-3xl overflow-hidden min-h-[360px] flex flex-col justify-end group">
          <div className="absolute inset-0 bg-brand-cream" />
          {featured.featuredImage && (
            <Image src={featured.featuredImage} alt={featured.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/80 via-brand-maroon/20 to-transparent" />
          <div className="relative p-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-orange mb-2">{featured.category}</span>
            <h3 className="font-serif text-2xl font-bold text-white leading-snug mb-2 group-hover:text-brand-orange transition-colors">{featured.title}</h3>
            <p className="text-white/80 text-sm line-clamp-2">{featured.excerpt}</p>
          </div>
        </Link>
      )}
      <div className="flex flex-col gap-4">
        {rest.slice(0, 2).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="bento-card bg-brand-cream rounded-3xl p-6 flex flex-col justify-between min-h-[168px] group border border-brand-pink/10">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-pink">{post.category}</span>
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-maroon leading-snug group-hover:text-brand-purple transition-colors">{post.title}</h3>
              <p className="text-gray-500 text-xs mt-1 line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
        {rest.length < 2 && (
          <div className="bento-card bg-brand-purple rounded-3xl p-6 flex flex-col justify-end min-h-[168px]">
            <p className="font-serif text-lg font-bold text-white leading-snug">New posts every week. Subscribe to stay in the loop.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-0 min-h-[88vh] items-center">
          {/* Left: text */}
          <div className="py-16 md:py-24 flex flex-col justify-center">
            <p className="inline-block text-brand-pink font-semibold text-xs uppercase tracking-[0.2em] mb-6 bg-brand-pink/10 px-4 py-1.5 rounded-full w-fit">
              For Homeschool Families
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-maroon leading-[1.05] mb-6 text-balance">
              Homeschool with{" "}
              <span className="text-brand-purple">Purpose.</span>{" "}
              Teach with{" "}
              <span className="text-brand-orange">Joy.</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
              Practical resources, real curriculum reviews, and a framework that actually works for your family. No guilt. No overwhelm. Just progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-guide"
                className="bg-brand-pink hover:bg-brand-purple text-white font-semibold px-7 py-4 rounded-full transition-all duration-200 text-sm shadow-lg shadow-brand-pink/25 text-center"
              >
                Download the Free S.M.A.R.T. Guide
              </Link>
              <Link
                href="/blog"
                className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white font-semibold px-7 py-4 rounded-full transition-all duration-200 text-sm text-center"
              >
                Browse the Blog
              </Link>
            </div>
          </div>

          {/* Right: kids doing homeschool */}
          <div className="relative hidden md:flex items-end justify-center h-full min-h-[88vh]">
            <div className="relative w-full h-full">
              <Image
                src="/images/kids-homeschool.jpg"
                alt="Kids doing homeschool work at the kitchen table"
                fill
                className="object-cover object-center"
                priority
                sizes="50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-cream to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <ScrollReveal>
        <section className="py-14 px-4 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-brand-pink font-semibold text-xs uppercase tracking-[0.2em] mb-8">Real Family. Real Homeschool.</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative rounded-2xl overflow-hidden h-52 md:h-64">
                <Image src="/images/kids-homeschool.jpg" alt="Kids doing homeschool work at the table" fill className="object-cover" sizes="33vw" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52 md:h-64">
                <Image src="/images/family-dc.jpg" alt="Family field trip to Washington DC" fill className="object-cover object-top" sizes="33vw" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52 md:h-64">
                <Image src="/images/kid-artwork.jpg" alt="Student showing off his artwork" fill className="object-cover object-top" sizes="33vw" />
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-5 italic">
              From DC field trips to kitchen table lessons, this is what real homeschooling looks like.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ── BENTO BLOG GRID ── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-brand-pink font-semibold text-xs uppercase tracking-[0.18em] mb-2">From the Blog</p>
              <h2 className="font-serif text-4xl font-bold text-brand-maroon">Latest Resources</h2>
            </div>
            <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-brand-purple hover:text-brand-pink transition-colors">
              View all <span aria-hidden>→</span>
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <BentoGrid posts={posts} />
        </ScrollReveal>
        <div className="mt-6 text-center md:hidden">
          <Link href="/blog" className="text-sm font-medium text-brand-purple hover:text-brand-pink transition-colors">View all posts →</Link>
        </div>
      </section>

      {/* ── OPT-IN ── */}
      <section className="py-24 px-4 bg-brand-cream">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-brand-pink font-semibold text-xs uppercase tracking-[0.18em] mb-3">Free Download</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon mb-4">
              Grab the Free S.M.A.R.T. Homeschooling Guide
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              A practical framework for planning your homeschool year with confidence. No experience required.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="max-w-md mx-auto">
            <OptInForm variant="inline" />
          </div>
        </ScrollReveal>
      </section>

      {/* ── MISSION + STACIE AT DESK ── */}
      <ScrollReveal>
        <section className="bg-brand-maroon text-white py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-80">
              <Image
                src="/images/stacie-desk.jpg"
                alt="Stacie planning homeschool curriculum at her desk"
                fill
                className="object-cover object-top"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/40 to-transparent" />
            </div>
            <div>
              <p className="text-brand-orange font-semibold text-xs uppercase tracking-[0.18em] mb-3">Our Heart</p>
              <h2 className="font-serif text-4xl font-bold leading-tight mb-5">
                You Don&apos;t Have to Figure This Out Alone
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                Thrive Homeschool Group gives you practical tools and genuine encouragement for the homeschool journey, without the overwhelm. Real ideas. Real families. Real results.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "📚", title: "Curriculum Reviews", desc: "Honest takes on what works at every age and stage." },
                  { icon: "🗓️", title: "Lesson Planning", desc: "Simple frameworks that flex with your real life." },
                  { icon: "👨‍👩‍👧‍👦", title: "Multi-Age Families", desc: "Teaching a 3rd grader and a senior? We get it." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start bg-white/10 rounded-2xl p-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
