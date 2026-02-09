import type { MetadataRoute } from "next";

const BASE_URL = "https://essentialsites.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/Bundles", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/Quote", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const langs = ["en", "es"];

  return langs.flatMap((lang) =>
    pages.map((page) => ({
      url: `${BASE_URL}/${lang}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  );
}
