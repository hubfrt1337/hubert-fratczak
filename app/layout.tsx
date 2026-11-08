import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { site } from "@/data/site";
import { businessJsonLd } from "@/data/jsonLd";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const title = `Tworzenie stron internetowych Poznań | ${site.name}`;
const description =
  "Webuko: tworzymy strony internetowe dla firm z Poznania i całej Polski. Wizytówki od 1 490 zł, strony firmowe i sklepy. Płacisz raz, bez abonamentu. Bezpłatna wycena w 24 godziny.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "tworzenie stron internetowych Poznań",
    "strony internetowe Poznań",
    "strona wizytówka",
    "strona dla firmy",
    "sklep internetowy",
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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        {/* Dane firmy dla Google: kto, gdzie, za ile. Bez telefonu, bo numer celowo nie trafia do HTML-a (patrz CallReveal). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
