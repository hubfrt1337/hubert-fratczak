import Image from "next/image";

/**
 * Zrzut strony w ramce okna przeglądarki. Kontener ma dokładnie proporcje zrzutów (16:9),
 * więc nic nie jest ucinane. Zrzuty: public/portfolio/*.png (1600×900).
 */
export function OknoPrzegladarki({
  src,
  alt,
  sizes,
  adres,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  adres?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-[10px_26px] border border-ink-200 bg-white shadow-2xl shadow-accent-900/20 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-ink-100 bg-ink-50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b5f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffc23d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2ccf6a]" />
        <span className="ml-3 flex h-5 flex-1 items-center truncate rounded-md bg-white px-2 text-[11px] text-ink-400">
          {adres ?? ""}
        </span>
      </div>
      <div className="relative aspect-video w-full bg-ink-100">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
    </div>
  );
}
