import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { industries } from "@/data/branze";
import { projects } from "@/data/projects";
import { uslugi } from "@/data/uslugi";

const glowne = [
  "strony-internetowe",
  "o-nas",
  "wspolpraca",
  "realizacje",
  "strony-www-cennik",
  "faq",
  "bezplatna-wycena",
  "kontakt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const wpis = (path: string, priority: number, changeFrequency: "monthly" | "yearly" = "monthly") => ({
    url: `${site.url}/${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    ...glowne.map((p) => wpis(p, 0.8)),
    ...uslugi.map((u) => wpis(u.slug, 0.8)),
    ...industries.map((i) => wpis(i.path, 0.7)),
    ...projects.map((p) => wpis(`realizacje/${p.slug}`, 0.6, "yearly")),
    wpis("polityka-prywatnosci", 0.3, "yearly"),
  ];
}
