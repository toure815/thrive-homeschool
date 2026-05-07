import type { Metadata } from "next";
import OptInForm from "@/components/OptInForm";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the founder of Thrive Homeschool Group and learn about our mission to equip homeschool families with practical, joyful resources.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-2">Our Story</p>
      <h1 className="font-serif text-4xl font-bold text-brand-navy mb-6">About Thrive Homeschool Group</h1>

      {/* Founder photo placeholder — swap with real image once received */}
      <div className="w-48 h-48 rounded-full bg-brand-cream border-4 border-brand-pink/30 mx-auto mb-8 flex items-center justify-center text-gray-400 text-sm">
        Founder Photo
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
        <p>
          Hi! I&apos;m the founder of Thrive Homeschool Group, and I started this community because I know exactly how overwhelming it can feel to be responsible for your child&apos;s entire education — especially on the days when nothing goes according to plan.
        </p>
        <p>
          After years of homeschooling my own kids through different stages, different learning styles, and more than a few curriculum pivots, I realized that what families need most isn&apos;t more content — it&apos;s a framework. A way to plan with confidence and adjust without guilt.
        </p>
        <p>
          That&apos;s why I created the SMART Homeschooling system and this resource hub. Everything here is practical, tested in a real homeschool, and designed to make your teaching life a little lighter.
        </p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy mt-8">Our Mission</h2>
        <p>
          Thrive Homeschool Group exists to equip homeschool families with tools, resources, and encouragement to educate their children with purpose and joy — no matter what curriculum they use or what their school day looks like.
        </p>
      </div>

      <div className="mt-12">
        <OptInForm variant="inline" />
      </div>
    </div>
  );
}
