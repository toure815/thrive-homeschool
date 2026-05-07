import type { Metadata } from "next";
import Image from "next/image";
import OptInForm from "@/components/OptInForm";

export const metadata: Metadata = {
  title: "Free SMART Homeschooling Guide",
  description: "Download the free SMART Homeschooling Guide, a practical framework for homeschool families who want to plan with confidence and teach with joy.",
};

export default function FreeGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream to-brand-pink/10">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Ebook cover */}
          <div className="flex justify-center">
            <div className="relative w-64 md:w-80 shadow-2xl rounded-lg overflow-hidden">
              <Image
                src="/images/ebook-cover.png"
                alt="S.M.A.R.T. Homeschooling Guide by Stacie J. Young"
                width={400}
                height={566}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Opt-in side */}
          <div>
            <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-3">Free Download</p>
            <h1 className="font-serif text-4xl font-bold text-brand-maroon mb-4 text-balance">
              The S.M.A.R.T. Homeschooling Guide
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Stop second-guessing your homeschool plan. This free guide gives you a practical framework to set goals, structure your days, and adjust as you go without the mom guilt.
            </p>

            <ul className="space-y-2 text-gray-600 text-sm mb-8">
              {[
                "The SMART goal system adapted for homeschool families",
                "A weekly rhythm template you can actually follow",
                "How to plan for multiple ages at once",
                "What to do when the plan falls apart",
                "A quick-start checklist for new homeschoolers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-pink mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <OptInForm variant="inline" />

            <p className="text-xs text-gray-400 mt-4">
              By signing up, you agree to receive email from Thrive Homeschool Group. Unsubscribe anytime.{" "}
              <a href="/privacy-policy" className="underline">Privacy policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
