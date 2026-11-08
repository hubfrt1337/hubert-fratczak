import { Header } from "../Header";
import { Footer } from "../Footer";
import { BackToTop, MobileBar } from "../MobileBar";

/** Szkielet każdej podstrony: nagłówek, treść, stopka, dolny pasek na telefonie. */
export function Strona({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileBar />
      <BackToTop />
    </>
  );
}

/** Szerokość treści sekcji. */
export function Wrap({
  children,
  className = "",
  szeroki = false,
}: {
  children: React.ReactNode;
  className?: string;
  szeroki?: boolean;
}) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-8 ${szeroki ? "max-w-[1300px]" : "max-w-[1140px]"} ${className}`}>
      {children}
    </div>
  );
}

/** Nagłówek sekcji z lekką i grubą częścią: <Naglowek lekki="Bezpłatna" gruby="wycena strony www" />. */
export function Naglowek({
  lekki,
  gruby,
  po,
  as: Tag = "h2",
  className = "",
  center = false,
  white = false,
}: {
  lekki?: string;
  gruby: string;
  po?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  center?: boolean;
  white?: boolean;
}) {
  return (
    <Tag className={`h-sekcja ${center ? "text-center" : ""} ${white ? "text-white" : ""} ${className}`}>
      {lekki ? <>{lekki} </> : null}
      <strong>{gruby}</strong>
      {po ?? null}
    </Tag>
  );
}
