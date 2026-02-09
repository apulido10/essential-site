import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import type { Lang } from "@/lib/getDictionary";
import getDictionary from "@/lib/getDictionary";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Lang;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header lang={lang} dict={dict} />
        {children}
        <Footer lang={lang} dict={dict} />
        <Analytics />
      </body>
    </html>
  );
}
