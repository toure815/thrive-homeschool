import type { Metadata } from "next";
import Image from "next/image";
import OptInForm from "@/components/OptInForm";

export const metadata: Metadata = {
  title: "About Stacie",
  description: "Meet Stacie J. Young, founder of Thrive Homeschool Group and homeschool mom to four kids spanning college to third grade.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-2">Meet the Founder</p>

      {/* Photo + name block */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-brand-pink/30 mb-5 relative">
          <Image
            src="/images/stacie-v2.jpeg"
            alt="Stacie J. Young, founder of Thrive Homeschool Group"
            fill
            className="object-cover object-top"
            sizes="192px"
          />
        </div>
        <p className="font-serif text-4xl md:text-5xl font-bold text-brand-maroon">
          Hi, I&apos;m Stacie.
        </p>
        <p className="text-brand-purple font-medium mt-1 text-lg">
          Founder of Thrive Homeschool Group
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
        <p>
          I&apos;m a homeschool mom in the thick of it, and I mean that in the best possible way. Right now I&apos;m raising and teaching four kids who couldn&apos;t be more different: a son in his third year of college, a high school senior, a junior, and my youngest who is currently in third grade. Every single stage, all at once.
        </p>
        <p>
          That range means I&apos;ve had to figure out how to meet each of my kids exactly where they are, from helping a college student think through his future, to guiding a senior through her last year at home, to keeping a curious third grader engaged and excited about learning every morning. There is no one curriculum that works for all of them. There is no one plan that fits every season.
        </p>
        <p>
          What I found, though, is that having a framework makes all the difference. Not a rigid schedule, not someone else&apos;s perfect routine, but a flexible, intentional approach that gives you confidence even when the day goes sideways.
        </p>
        <p>
          That&apos;s exactly why I created the S.M.A.R.T. Homeschooling system and built this space. Everything here comes from real experience in a real homeschool with real kids at real different stages. I want you to feel equipped, not overwhelmed. Inspired, not guilty.
        </p>

        <h2 className="font-serif text-2xl font-bold text-brand-maroon mt-8">Our Mission</h2>
        <p>
          Thrive Homeschool Group exists to give homeschool families practical tools, honest resources, and genuine encouragement to educate their children with purpose and joy, no matter where your kids are in their journey or what your school day looks like.
        </p>
        <p>
          Whether you have a preschooler just learning letters or a teenager preparing for college, you belong here.
        </p>
      </div>

      <div className="mt-12">
        <OptInForm variant="inline" />
      </div>
    </div>
  );
}
