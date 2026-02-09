import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/en";
import type { Lang } from "@/lib/getDictionary";

interface FooterProps { lang: Lang; dict: Dictionary; }

export default function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="bg-dark-secondary border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-white font-semibold text-sm">EssentialSites.co</p>
          <p className="text-gray-600 text-xs mt-1">
            &copy; {new Date().getFullYear()} {dict.footer.rights}
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href={`/${lang}/Bundles`} className="text-gray-500 hover:text-white transition-colors">{dict.nav.bundles}</Link>
          <a href="mailto:hello@essentialsites.co" className="text-gray-500 hover:text-white transition-colors">
            hello@essentialsites.co
          </a>
        </div>
      </div>
    </footer>
  );
}
