import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Thrive Homeschool Group for collaborations, questions, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl font-bold text-brand-navy mb-3">Contact</h1>
      <p className="text-gray-600 mb-8">
        Have a question, a collaboration idea, or just want to say hi? I&apos;d love to hear from you.
      </p>

      <div className="bg-brand-cream rounded-2xl p-8">
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:hello@thrivehomeschoolgroup.com"
            className="text-brand-purple hover:text-brand-pink underline underline-offset-2"
          >
            hello@thrivehomeschoolgroup.com
          </a>
        </p>
        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Response time:</span> Within 2 business days.
        </p>

        <div className="border-t border-brand-pink/20 pt-6">
          <p className="font-semibold text-brand-navy mb-2">For collaborations &amp; partnerships:</p>
          <p className="text-gray-600 text-sm">
            I&apos;m open to sponsored content and affiliate partnerships that align with our audience of homeschool families. Please include &ldquo;Partnership&rdquo; in your subject line.
          </p>
        </div>
      </div>
    </div>
  );
}
