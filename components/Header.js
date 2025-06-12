"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.jpg"
            alt=""
            width={70}
            height={70}
            className="rounded-xl object-cover"
          />
          <span className="text-xl md:text-2xl font-bold text-orange-500"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 font-medium text-gray-700">
          <Link href="/services" className="hover:text-orange-500 transition">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-orange-500 transition">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-orange-500 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/quote"
          className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-4 pt-3 space-y-4 font-medium text-gray-700">
          <Link href="/services" className="block hover:text-orange-500">
            Services
          </Link>
          <Link href="/portfolio" className="block hover:text-orange-500">
            Portfolio
          </Link>
          <Link href="/about" className="block hover:text-orange-500">
            About Us
          </Link>
          <Link href="/contact" className="block hover:text-orange-500">
            Contact
          </Link>
          <Link
            href="/quote"
            className="block text-center mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
