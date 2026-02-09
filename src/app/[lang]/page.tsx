import type { Metadata } from "next";
import type { Lang } from "@/lib/getDictionary";
import getDictionary from "@/lib/getDictionary";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Contact from "../components/Contact";

const BASE_URL = "https://essentialsites.co";

const meta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "Essential Sites | Web Design for Small Business",
    description:
      "Fast, clean websites that help small businesses grow. No hassle. Just results.",
  },
  es: {
    title: "Essential Sites | Diseño Web para Pequeños Negocios",
    description:
      "Sitios web rápidos y limpios que ayudan a los pequeños negocios a crecer. Sin complicaciones. Solo resultados.",
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
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${lang}`,
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Essential Sites",
      url: BASE_URL,
      description:
        "Fast, clean websites that help small businesses grow. No hassle. Just results.",
      serviceType: [
        "Web Design",
        "Web Development",
        "SEO",
        "Payment Integration",
        "Website Maintenance",
      ],
    },
    {
      "@type": "WebSite",
      name: "Essential Sites",
      url: BASE_URL,
      inLanguage: ["en", "es"],
    },
  ],
};

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const dict = await getDictionary(lang);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero lang={lang} dict={dict} />
      <Services dict={dict} />
      <Work dict={dict} />
      <Contact dict={dict} />
    </div>
  );
}
