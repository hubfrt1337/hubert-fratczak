import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const title = `${site.name} — strony internetowe dla małych firm`;
const description =
  "Projektuję i wdrażam strony internetowe, które przynoszą klientów: wizytówki, sklepy z integracjami i większe serwisy. Konkretna wycena, stały kontakt, wsparcie po wdrożeniu.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "strony internetowe",
    "tworzenie stron www",
    "freelancer",
    "sklep internetowy",
    "strona dla firmy",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
