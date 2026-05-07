import type { Metadata } from "next";
import OptInForm from "@/components/OptInForm";

export const metadata: Metadata = {
  title: "Free SMART Homeschooling Guide",
  description: "Download the free SMART Homeschooling Guide — a practical framework for homeschool families who want to plan with confidence and teach with joy.",
};

export default function FreeGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream to-brand-pink/10">
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-3">Free Download</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4 text-balance">
          The SMART Homeschooling Guide
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Stop second-guessing your homeschool plan. This free guide gives you a practical framework to set goals, structure your days, and adjust as you go — without the mom guilt.
        </p>

        <div className="text-left max-w-sm mx-auto mb-10">
          <p className="font-semibold text-brand-navy mb-3">Inside the guide:</p>
          <ul className="space-y-2 text-gray-600 text-sm">
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
        </div>

        <OptInForm variant="inline" />

        <p className="text-xs text-gray-400 mt-4">
          By signing up, you agree to receive email from Thrive Homeschool Group. Unsubscribe anytime.
          See our <a href="/privacy-policy" className="underline">privacy policy</a>.
        </p>
      </div>
    </div>
  );
}
