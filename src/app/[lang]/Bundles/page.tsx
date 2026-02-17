import type { Metadata } from "next";
import Link from "next/link";
import getDictionary, { type Lang } from "@/lib/getDictionary";

const BASE_URL = "https://essentialsites.co";

const meta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "Pricing & Bundles | Essential Sites",
    description:
      "Transparent website packages designed for small businesses. No hidden fees.",
  },
  es: {
    title: "Precios y Paquetes | Essential Sites",
    description:
      "Paquetes de sitios web transparentes diseñados para pequeños negocios. Sin costos ocultos.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const { title, description } = meta[lang];

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/Bundles`,
      languages: {
        en: `${BASE_URL}/en/Bundles`,
        es: `${BASE_URL}/es/Bundles`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${lang}/Bundles`,
      siteName: "Essential Sites",
      locale: lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Bundles({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const dict = await getDictionary(lang);

  return (
    <div className="bg-dark min-h-screen flex flex-col">
      <section className="pt-32 pb-24 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-sm font-medium tracking-widest uppercase text-center mb-3">{dict.bundles.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            {dict.bundles.title}
          </h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
            {dict.bundles.subtitle}
          </p>

          {/* Build Packages */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
            {dict.bundles.packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-dark-card border border-white/5 rounded-xl p-6 flex flex-col justify-between hover:border-accent/20 transition-all duration-300"
              >
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-5">
                    <span className="text-3xl font-bold text-white">{pkg.price}</span>
                    <span className="text-gray-500 text-sm ml-1">{dict.bundles.buildLabel}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                        <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/${lang}/Quote`}
                  className="block text-center bg-accent hover:bg-accent-dark text-white py-2.5 rounded-lg font-medium text-sm transition-colors"
                >
                  {dict.bundles.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Monthly Plans */}
          <p className="text-accent text-sm font-medium tracking-widest uppercase text-center mb-3">{dict.bundles.monthlyIncludes}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            {dict.bundles.monthlyTitle}
          </h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
            {dict.bundles.monthlySubtitle}
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {dict.bundles.monthlyPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-dark-card border border-white/5 rounded-xl p-6 flex flex-col justify-between hover:border-accent/20 transition-all duration-300"
              >
                <div>
                  <div className="mb-5">
                    <span className="text-3xl font-bold text-accent">{plan.price}</span>
                    <span className="text-gray-500 text-sm">{dict.bundles.monthlyLabel}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                        <svg className="w-4 h-4 text-accent/50 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/${lang}/Quote`}
                  className="block text-center bg-accent hover:bg-accent-dark text-white py-2.5 rounded-lg font-medium text-sm transition-colors"
                >
                  {dict.bundles.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
