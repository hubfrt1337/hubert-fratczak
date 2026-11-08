/**
 * Logo Webuko.pl: znak </> w kafelku „liść” + nazwa z pomarańczową końcówką „.pl”.
 * `dark` = wersja na ciemne tło (biały napis, pomarańczowy kafelek).
 */
export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`flex h-10 w-10 items-center justify-center rounded-[12px_4px] ${
          dark ? "bg-sun-400 text-accent-950" : "bg-accent-600 text-white"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
          <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />
        </svg>
      </span>
      <span className={`font-display text-[24px] leading-none font-extrabold tracking-tight ${dark ? "text-white" : "text-ink-900"}`}>
        webuko<span className={dark ? "text-sun-400" : "text-sun-600"}>.pl</span>
      </span>
    </span>
  );
}
