
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const setScrollPadding = () => {
      const h = headerRef.current?.offsetHeight ?? 0;
      // set CSS variable (optional) and native scroll padding-top so anchors don't hide under fixed header
      document.documentElement.style.setProperty("--site-header-height", `${h}px`);
      // modern browsers respect scrollPaddingTop for in-page scrolling
      (document.documentElement as any).style.scrollPaddingTop = `${h}px`;
    };

    // set on mount
    setScrollPadding();
    // update on resize (handles mobile/portrait/landscape changes)
    window.addEventListener("resize", setScrollPadding);
    return () => window.removeEventListener("resize", setScrollPadding);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-gray-800"
      role="banner"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="#" aria-label="Home">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
          </Link>
        </div>

        {/* Desktop Nav (use hash links if sections are on same page) */}
        <nav className="hidden md:flex" aria-label="Primary Navigation">
          <ul className="flex items-center gap-8 font-medium text-white text-sm">
            <li className="relative group">
              <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group">
              <Link href="/about" className="hover:text-cyan-400 transition">About</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group">
              <Link href="/skills" className="hover:text-cyan-400 transition">Skills</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group">
              <Link href="/work" className="hover:text-cyan-400 transition">Projects</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group">
              <Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </li>
          </ul>
        </nav>

        {/* Mobile Sheet Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="p-2 rounded-md" aria-label="Open menu">
              <Menu size={24} className="text-white" />
            </SheetTrigger>

            <SheetContent side="right" className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
              <nav aria-label="Mobile Navigation">
                <ul className="flex flex-col items-start gap-6 font-semibold text-lg">
                  <li><Link href="/" className="hover:text-cyan-400 transition">Home</Link></li>
                  <li><Link href="/about" className="hover:text-cyan-400 transition">About</Link></li>
                  <li><Link href="/skills" className="hover:text-cyan-400 transition">Skills</Link></li>
                  <li><Link href="/work" className="hover:text-cyan-400 transition">Projects</Link></li>
                  <li><Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
