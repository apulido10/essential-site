import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://essentialsites.co"),
  title: "Essential Sites | Web Design for Small Business",
  description:
    "Fast, clean websites that help small businesses grow. No hassle. Just results.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Essential Sites",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
