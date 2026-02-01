import Link from "next/link";
import getDictionary, { type Lang } from "@/lib/getDictionary";

export default async function Bundles({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const dict = await getDictionary(lang);

  const bundles = [
    { title: dict.bundles.starter, features: dict.bundles.starterFeatures },
    { title: dict.bundles.professional, features: dict.bundles.professionalFeatures },
    { title: dict.bundles.business, features: dict.bundles.businessFeatures },
    { title: dict.bundles.appointments, features: dict.bundles.appointmentsFeatures },
    { title: dict.bundles.stripeCart, features: dict.bundles.stripeCartFeatures },
  ];

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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bundles.map((bundle, index) => (
              <div
                key={index}
                className="bg-dark-card border border-white/5 rounded-xl p-6 flex flex-col justify-between hover:border-accent/20 transition-all duration-300"
              >
                <div>
                  <h3 className="text-white font-semibold text-lg mb-5">
                    {bundle.title}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {bundle.features.map((feature, idx) => (
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
        </div>
      </section>
    </div>
  );
}
