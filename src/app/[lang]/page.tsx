import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import getDictionary, { type Lang } from "@/lib/getDictionary";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const dict = await getDictionary(lang);

  return (
    <div>
      <Hero lang={lang} dict={dict} />
      <Services dict={dict} />
      <Contact dict={dict} />
    </div>
  );
}
