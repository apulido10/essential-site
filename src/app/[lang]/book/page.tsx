import getDictionary, { type Lang } from "@/lib/getDictionary";

export default async function BookPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const dict = await getDictionary(lang);

  return (
    <div className="bg-dark min-h-screen flex flex-col">
      <section className="pt-32 pb-24 px-6 flex-1">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{dict.book.tag}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {dict.book.title}
          </h1>
          <p className="text-gray-500 mb-10 text-lg">
            {dict.book.subtitle}
          </p>

          <div className="w-full rounded-xl overflow-hidden border border-white/5">
            <iframe
              src="https://calendly.com/hello-essentialsites"
              width="100%"
              height="630"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
