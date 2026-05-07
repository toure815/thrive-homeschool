import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Thrive Homeschool Group.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl font-bold text-brand-navy mb-2">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          By accessing thrivehomeschoolgroup.com, you agree to these terms. If you do not agree, please do not use the site.
        </p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">Use of Content</h2>
        <p>
          All content on this site — including blog posts, printables, and free downloads — is for personal, non-commercial use only. You may not reproduce, distribute, or sell our content without written permission.
        </p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">Affiliate Links</h2>
        <p>
          This site contains affiliate links. We are a participant in the Amazon Services LLC Associates Program and other affiliate programs. We earn commissions on qualifying purchases at no extra cost to you.
        </p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">Disclaimer</h2>
        <p>
          Content on this site is for informational purposes only and does not constitute professional educational, legal, or financial advice. Results from applying our methods will vary by family.
        </p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">Limitation of Liability</h2>
        <p>
          Thrive Homeschool Group is not liable for any damages arising from use of this site or reliance on its content.
        </p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">Changes</h2>
        <p>We may update these terms at any time. Continued use of the site constitutes acceptance of the updated terms.</p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">Contact</h2>
        <p>Questions? Email <a href="mailto:hello@thrivehomeschoolgroup.com" className="text-brand-purple underline">hello@thrivehomeschoolgroup.com</a>.</p>
      </div>
    </div>
  );
}
