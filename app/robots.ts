import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Strona do zbierania opinii ma zostać poza wyszukiwarką.
      disallow: ["/opinia"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
