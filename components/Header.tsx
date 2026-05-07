"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center h-12 overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="Thrive Homeschool Group"
            width={260}
            height={100}
            className="h-24 w-auto object-contain scale-[1.35] object-center"
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
            className="bg-brand-pink text-white px-4 py-2 rounded-full hover:bg-brand-purple transition-colors"
          >
            Free Guide
          </Link>
        </nav>

        {/* Mobile hamburger */}
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
          <Link href="/free-guide" onClick={() => setOpen(false)} className="bg-brand-pink text-white px-4 py-2 rounded-full text-center">
            Free Guide
          </Link>
        </div>
      )}
    </header>
  );
}
