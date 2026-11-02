import type { Metadata } from "next";
import { IndustryPage } from "@/components/IndustryPage";
import { getIndustry } from "@/data/branze";

const industry = getIndustry("salony");

export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
  alternates: { canonical: `/${industry.path}` },
  openGraph: { title: industry.metaTitle, description: industry.metaDescription, url: `/${industry.path}`, images: ["/og.png"] },
};

export default function SalonsPage() {
  return <IndustryPage industry={industry} />;
}
