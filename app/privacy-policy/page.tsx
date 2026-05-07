import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Thrive Homeschool Group.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl font-bold text-brand-navy mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          Thrive Homeschool Group (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates thrivehomeschoolgroup.com. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our site.
        </p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">Information We Collect</h2>
        <p>We collect your name and email address when you subscribe to our email list. We also collect standard analytics data (pages visited, device type, referring URLs) through our analytics provider.</p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To send you the free resource you requested</li>
          <li>To send you our newsletter and blog updates (you may unsubscribe at any time)</li>
          <li>To improve our website and content</li>
        </ul>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">Affiliate Disclosure</h2>
        <p>
          This site contains affiliate links. If you click on an affiliate link and make a purchase, we may earn a small commission at no additional cost to you. We only recommend products we genuinely believe in. This site participates in the Amazon Services LLC Associates Program and other affiliate programs.
        </p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">Cookies</h2>
        <p>We use cookies for analytics and to improve site functionality. You may disable cookies in your browser settings.</p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">Third-Party Services</h2>
        <p>We use Kit (ConvertKit) for email marketing. Their privacy policy applies to data processed through their platform.</p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at hello@thrivehomeschoolgroup.com.</p>

        <h2 className="font-serif text-2xl font-bold text-brand-navy">Contact</h2>
        <p>Questions about this policy? Email us at <a href="mailto:hello@thrivehomeschoolgroup.com" className="text-brand-purple underline">hello@thrivehomeschoolgroup.com</a>.</p>
      </div>
    </div>
  );
}
