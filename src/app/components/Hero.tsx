"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/en";
import type { Lang } from "@/lib/getDictionary";

interface HeroProps { lang: Lang; dict: Dictionary; }

export default function Hero({ lang, dict }: HeroProps) {
  return (
    <section className="relative bg-dark pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          className="text-accent text-sm font-medium tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {dict.hero.tag}
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {dict.hero.title1}
          <span className="text-accent">{dict.hero.title2}</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {dict.hero.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <Link href={`/${lang}/Quote`} className="bg-accent hover:bg-accent-dark text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm">
            {dict.hero.cta1}
          </Link>
          <Link href={`/${lang}/Bundles`} className="border border-white/10 hover:border-white/25 text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm">
            {dict.hero.cta2}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
