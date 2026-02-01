import getDictionary, { type Lang } from "@/lib/getDictionary";

const inputClass = "w-full bg-dark-card border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors";
const labelClass = "block text-gray-400 text-sm mb-2";

export default async function Quote({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const dict = await getDictionary(lang);

  return (
    <div className="bg-dark min-h-screen flex flex-col">
      <section className="pt-32 pb-24 px-6 flex-1">
        <div className="max-w-2xl mx-auto">
          <p className="text-accent text-sm font-medium tracking-widest uppercase text-center mb-3">{dict.quote.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            {dict.quote.title}
          </h2>
          <p className="text-gray-500 text-center mb-12">
            {dict.quote.subtitle}
          </p>

          <form className="flex flex-col gap-5">
            <div>
              <label className={labelClass}>{dict.quote.fullName}</label>
              <input type="text" className={inputClass} placeholder={dict.contact.namePlaceholder} />
            </div>
            <div>
              <label className={labelClass}>{dict.quote.businessName}</label>
              <input type="text" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>{dict.quote.email}</label>
              <input type="email" className={inputClass} placeholder={dict.contact.emailPlaceholder} />
            </div>
            <div>
              <label className={labelClass}>{dict.quote.phone}</label>
              <input type="tel" className={inputClass} placeholder="(123) 456-7890" />
            </div>
            <div>
              <label className={labelClass}>{dict.quote.websiteType}</label>
              <select className={inputClass}>
                {dict.quote.websiteTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>{dict.quote.features}</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dict.quote.featuresList.map((f) => (
                  <label key={f} className="flex items-center gap-2 text-gray-400 text-sm">
                    <input type="checkbox" className="accent-accent rounded" />
                    {f}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className={labelClass}>{dict.quote.domainLogo}</label>
              <select className={inputClass}>
                {dict.quote.domainOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>{dict.quote.aboutBusiness}</label>
              <textarea rows={5} className={`${inputClass} resize-none`} placeholder={dict.quote.aboutPlaceholder} />
            </div>
            <div>
              <label className={labelClass}>{dict.quote.budget}</label>
              <select className={inputClass}>
                {dict.quote.budgetOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>{dict.quote.timeline}</label>
              <select className={inputClass}>
                {dict.quote.timelineOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white py-3.5 rounded-lg font-medium transition-colors mt-2">
              {dict.quote.submit}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
