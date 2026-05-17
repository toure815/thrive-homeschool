import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-maroon text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-serif text-lg font-bold mb-2">Thrive Homeschool Group</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Practical resources for homeschool families who want to teach with intention and joy.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-3 text-brand-pink">Navigate</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/free-guide" className="hover:text-white transition-colors">Free SMART Guide</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3 text-brand-pink">Legal</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-gray-400 space-y-1">
          <p>© {new Date().getFullYear()} Thrive Homeschool Group. All rights reserved.</p>
          <p>
            This site contains affiliate links. We may earn a commission at no cost to you. We only recommend resources we genuinely use and trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
