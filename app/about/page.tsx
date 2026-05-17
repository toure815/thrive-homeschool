import type { Metadata } from "next";
import Image from "next/image";
import OptInForm from "@/components/OptInForm";

export const metadata: Metadata = {
  title: "About Stacie",
  description: "Meet Stacie J. Young, homeschool mom of four and founder of Thrive Homeschool Group. Twelve years of homeschooling across every stage from kindergarten through college.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-2 text-center">Meet the Founder</p>

      {/* Hero: photo + intro side by side */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative rounded-3xl overflow-hidden h-[480px]">
          <Image
            src="/images/stacie-v2.jpeg"
            alt="Stacie J. Young, founder of Thrive Homeschool Group"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <p className="font-serif text-5xl font-bold text-brand-maroon mb-1">
            About Stacie
          </p>
          <p className="text-brand-purple font-medium text-lg mb-6">
            Founder of Thrive Homeschool Group
          </p>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Hi, I&apos;m Stacie. Welcome to Thrive Homeschool Group.
            </p>
            <p>
              I&apos;m a homeschool mom of four. Twelve years into this journey. Currently teaching my 9-year-old at home while my older three are in different seasons of their lives.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg max-w-none text-gray-600 space-y-5 mb-14">
          <p>
            My oldest son is a junior in college on academic and athletic scholarship, on track to graduate next spring. My daughter graduates from our homeschool this June. My third son is a rising senior. And my youngest, Christian, is in 3rd grade and has never set foot in a traditional classroom.
          </p>
          <p>
            I&apos;ve been the mom who pulled babies out of school in 3rd, 4th, and 7th grade because something wasn&apos;t working. I&apos;ve been the mom who started homeschooling from day one. I&apos;ve taught kindergarten phonics and high school algebra in the same year. I&apos;ve used curriculum that was perfect for one kid and a complete disaster for another. I&apos;ve had homeschool days where everything clicked, and days where I cried in the kitchen after lunch.
          </p>
          <p>
            Whatever your homeschool entry point is, I&apos;ve probably lived it. And I&apos;ve learned that there is no one right way to do this.
          </p>
        </div>

        {/* Why Thrive Homeschool Group exists */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-maroon mb-6">
            Why Thrive Homeschool Group exists
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-5">
            <p>
              A few years ago I sat across from a new homeschool mama from another state. She was overwhelmed. She was anxious. And underneath all of it was one big, heavy question: &ldquo;Am I even doing this right?&rdquo;
            </p>
            <p>
              I have had some version of that conversation more times than I can count. With moms in coffee shops. With moms in grocery store aisles. With moms in DMs at midnight.
            </p>
            <p>
              The homeschool internet is flooded with how to content. What&apos;s missing is permission. Permission for moms to do it their way. Permission to not be perfect. Permission to take themselves less seriously.
            </p>
            <p>
              That&apos;s why Thrive Homeschool Group exists. Not to give you another standard to live up to. Not to add another benchmark to your list. But to remind you, week after week, that you&apos;re already doing the most important part. And to share what&apos;s actually worked across four very different babies and twelve very different years.
            </p>
          </div>
        </div>

        {/* Family photo */}
        <div className="rounded-3xl overflow-hidden mb-14 bg-brand-cream">
          <Image
            src="/images/family-outing.jpg"
            alt="The Young family"
            width={5712}
            height={4284}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-gray-400 text-sm italic py-3">The Young family</p>
        </div>

        {/* What you'll find here */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-maroon mb-6">
            What you&apos;ll find here
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-5">
            <p>
              Real curriculum reviews from a mom who has actually used the materials. Flexible frameworks instead of rigid systems. Multi age homeschool strategies for families with kiddos across grade levels. Honest encouragement for the hard days. Practical resources that don&apos;t require a Pinterest perfect homeschool room.
            </p>
            <p>
              I&apos;m so glad you&apos;re here.
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <div className="bg-brand-cream border-l-4 border-brand-pink rounded-2xl p-8 mb-14">
          <p className="font-serif text-2xl md:text-3xl text-brand-maroon leading-snug mb-3">
            &ldquo;Don&apos;t take yourself too seriously.&rdquo;
          </p>
          <p className="text-brand-purple text-sm font-medium">
            The best advice I ever got as a homeschool mom
          </p>
        </div>

        <OptInForm variant="inline" />
      </div>
    </div>
  );
}
