/**
 * Znak Webuko: morski „liść” z białą literą w i pomarańczową kropką (ten sam co favicon,
 * scripts/generate-placeholders.mjs). Zmieniasz znak = zmień w obu miejscach.
 */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M22 0H58A6 6 0 0 1 64 6V42A22 22 0 0 1 42 64H6A6 6 0 0 1 0 58V22A22 22 0 0 1 22 0Z" fill="#0f6e69" />
      <path
        d="M14 22 L21 44 L28 28 L35 44 L42 22"
        fill="none"
        stroke="#ffffff"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="51" cy="41" r="5" fill="#ff8f4d" />
    </svg>
  );
}

/**
 * Logo Webuko.pl: znak + nazwa z pomarańczową końcówką „.pl”.
 * `dark` = wersja na ciemne tło (biały napis, jasna obwódka znaku).
 */
export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`h-10 w-10 ${dark ? "rounded-[14px_4px] ring-1 ring-white/25" : ""}`} />
      <span className={`font-display text-[24px] leading-none font-extrabold tracking-tight ${dark ? "text-white" : "text-ink-900"}`}>
        webuko<span className={dark ? "text-sun-400" : "text-sun-600"}>.pl</span>
      </span>
    </span>
  );
}
