"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300 ${scrolled ? "shadow-md py-0" : "shadow-sm py-0"}`}>
      <div className={`max-w-6xl mx-auto px-4 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-12" : "h-16"}`}>
        <Link href="/" className={`flex items-center overflow-hidden transition-all duration-300 ${scrolled ? "h-9" : "h-12"}`}>
          <Image
            src="/images/logo.png"
            alt="Thrive Homeschool Group"
            width={260}
            height={100}
            className={`w-auto object-contain object-center transition-all duration-300 ${scrolled ? "h-16 scale-[1.2]" : "h-24 scale-[1.35]"}`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/about" className="text-gray-700 hover:text-brand-purple transition-colors">About</Link>
          <Link href="/blog" className="text-gray-700 hover:text-brand-purple transition-colors">Blog</Link>
          <Link href="/contact" className="text-gray-700 hover:text-brand-purple transition-colors">Contact</Link>
          <Link
            href="/free-guide"
            className="bg-brand-pink text-white px-4 py-2 rounded-full hover:bg-brand-purple transition-colors text-sm font-semibold"
          >
            Free Guide
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/about" onClick={() => setOpen(false)} className="text-gray-700">About</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="text-gray-700">Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-gray-700">Contact</Link>
          <Link href="/free-guide" onClick={() => setOpen(false)} className="bg-brand-pink text-white px-4 py-2 rounded-full text-center font-semibold">
            Free Guide
          </Link>
        </div>
      )}
    </header>
  );
}
