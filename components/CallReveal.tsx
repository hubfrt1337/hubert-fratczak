"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { PhoneIcon } from "./ui/Icons";

/**
 * Numer telefonu schowany pod przyciskiem — renderuje się dopiero po kliknięciu,
 * więc nie ma go w HTML-u strony.
 */
export function CallReveal() {
  const [revealed, setRevealed] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  // Przycisk znika po kliknięciu — przenosimy fokus na numer, żeby nie zginął.
  useEffect(() => {
    if (revealed) linkRef.current?.focus();
  }, [revealed]);

  if (!site.callPhone) return null;

  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold text-white">Wolisz porozmawiać?</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-300">
        Zadzwoń — w kilkanaście minut ustalimy, czego potrzebujesz, a Ty od razu
        dowiesz się, ile to mniej więcej kosztuje i kiedy strona może być gotowa.
      </p>

      {revealed ? (
        <a
          ref={linkRef}
          href={`tel:${site.callPhone.replace(/\s/g, "")}`}
          className="btn-primary mt-5"
        >
          <PhoneIcon />
          {site.callPhone}
        </a>
      ) : (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="btn-ghost-dark mt-5"
        >
          <PhoneIcon />
          Pokaż numer telefonu
        </button>
      )}
    </div>
  );
}
