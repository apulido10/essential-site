"use client";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/dictionaries/en";
import type { Lang } from "@/lib/getDictionary";

interface HeaderProps { lang: Lang; dict: Dictionary; }

export default function Header({ lang, dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const otherLang = lang === "en" ? "es" : "en";
  const switchedPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href={`/${lang}`}>
          <Image
            src="/images/essentiallogo.png"
            alt="Essential Sites"
            width={180}
            height={60}
            className="h-10 w-auto invert"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href={`/${lang}`} className="text-gray-400 hover:text-white text-sm tracking-wide transition-colors">{dict.nav.home}</Link>
          <Link href={`/${lang}/Bundles`} className="text-gray-400 hover:text-white text-sm tracking-wide transition-colors">{dict.nav.bundles}</Link>
          <Link href={`/${lang}/book`} className="text-gray-400 hover:text-white text-sm tracking-wide transition-colors">{dict.nav.book}</Link>
          <Link href={switchedPath} className="text-gray-400 hover:text-white text-sm font-semibold border border-white/10 px-3 py-1.5 rounded transition-colors">
            {otherLang.toUpperCase()}
          </Link>
          <Link href={`/${lang}/Quote`} className="bg-accent hover:bg-accent-dark text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
            {dict.nav.getQuote}
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <Link href={switchedPath} className="text-gray-400 hover:text-white text-sm font-semibold border border-white/10 px-3 py-1.5 rounded transition-colors">
            {otherLang.toUpperCase()}
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-400 hover:text-white"
            aria-label="Open Menu"
          >
            <HiMenu size={24} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setIsOpen(false)} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-dark-secondary border-l border-white/5 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <span className="text-white font-medium">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white" aria-label="Close Menu">
            <HiX size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          <Link href={`/${lang}`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors">{dict.nav.home}</Link>
          <Link href={`/${lang}/Bundles`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors">{dict.nav.bundles}</Link>
          <Link href={`/${lang}/book`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors">{dict.nav.book}</Link>
          <Link href={`/${lang}/Quote`} onClick={() => setIsOpen(false)} className="bg-accent hover:bg-accent-dark text-white text-center font-medium px-4 py-3 rounded-lg transition-colors mt-4">
            {dict.nav.getQuote}
          </Link>
        </nav>
      </div>
    </header>
  );
}
