import type { Metadata } from "next";
import Image from "next/image";
import OptInForm from "@/components/OptInForm";

export const metadata: Metadata = {
  title: "About Stacie",
  description: "Meet Stacie J. Young, founder of Thrive Homeschool Group and homeschool mom to four kids spanning college to third grade.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-2 text-center">Meet the Founder</p>

      {/* Hero: photo + intro side by side */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative rounded-3xl overflow-hidden h-[480px]">
          <Image
            src="/images/stacie-portrait.jpg"
            alt="Stacie J. Young, founder of Thrive Homeschool Group"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <p className="font-serif text-5xl font-bold text-brand-maroon mb-1">
            Hi, I&apos;m Stacie.
          </p>
          <p className="text-brand-purple font-medium text-lg mb-6">
            Founder of Thrive Homeschool Group
          </p>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              I&apos;m a homeschool mom in the thick of it, and I mean that in the best possible way. Right now I&apos;m raising and teaching four kids who couldn&apos;t be more different: a son in his third year of college, a high school senior, a junior, and my youngest who is in third grade.
            </p>
            <p>
              Every single stage, all at once. And I wouldn&apos;t have it any other way.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg max-w-none text-gray-600 space-y-5 mb-14">
          <p>
            That range means I&apos;ve had to figure out how to meet each of my kids exactly where they are, from helping a college student think through his future, to guiding a senior through her last year at home, to keeping a curious third grader engaged and excited every single morning. There is no one curriculum that works for all of them. There is no one plan that fits every season.
          </p>
          <p>
            What I found, though, is that having a framework makes all the difference. Not a rigid schedule or someone else&apos;s perfect routine, but a flexible, intentional approach that gives you confidence even when the day goes sideways.
          </p>
          <p>
            That&apos;s exactly why I created the S.M.A.R.T. Homeschooling system and built this space. Everything here comes from real experience in a real homeschool with real kids at real different stages. I want you to feel equipped, not overwhelmed. Inspired, not guilty.
          </p>
        </div>

        {/* Family photo */}
        <div className="rounded-3xl overflow-hidden mb-6 relative h-80">
          <Image
            src="/images/family-christmas.jpg"
            alt="The Young family"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
            <p className="text-white text-sm font-medium italic">The Young family</p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-brand-maroon text-white rounded-3xl p-8 mb-12">
          <h2 className="font-serif text-2xl font-bold mb-3 text-brand-orange">Our Mission</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Thrive Homeschool Group exists to give homeschool families practical tools, honest resources, and genuine encouragement to educate their children with purpose and joy, no matter where your kids are in their journey or what your school day looks like.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mt-3">
            Whether you have a little one just learning letters or a teenager preparing for college, you belong here.
          </p>
        </div>

        <OptInForm variant="inline" />
      </div>
    </div>
  );
}
