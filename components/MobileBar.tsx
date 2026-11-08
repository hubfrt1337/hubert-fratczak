"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MENU_EVENT } from "./Header";
import { Ikona, MenuIcon, PhoneIcon } from "./ui/Icons";
import { site } from "@/data/site";

/**
 * Dolny pasek na telefonie: Start, Oferta, Wycena, ZADZWOŃ (na środku), Menu.
 * Zawsze pod kciukiem, więc kontakt jest o jedno dotknięcie.
 */
export function MobileBar() {
  return (
    <nav
      aria-label="Szybkie akcje"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <ul className="grid h-16 grid-cols-5 items-center text-[11px] font-semibold text-ink-600">
        <li>
          <Link href="/" className="flex flex-col items-center gap-0.5">
            <Ikona name="monitor" className="h-5 w-5" />
            Start
          </Link>
        </li>
        <li>
          <Link href="/strony-internetowe" className="flex flex-col items-center gap-0.5">
            <Ikona name="medal" className="h-5 w-5" />
            Oferta
          </Link>
        </li>
        <li className="flex justify-center">
          {site.callPhone ? (
            // Przycisk zamiast linku tel:, żeby numeru nie było w HTML-u strony.
            <button
              type="button"
              onClick={() => {
                window.location.href = `tel:${site.callPhone.replace(/\s/g, "")}`;
              }}
              className="-mt-7 flex h-16 w-16 flex-col items-center justify-center rounded-[20px] bg-sun-400 text-[10px] font-extrabold text-accent-950 shadow-lg shadow-black/20"
            >
              <PhoneIcon className="h-5 w-5" />
              ZADZWOŃ
            </button>
          ) : null}
        </li>
        <li>
          <Link href="/bezplatna-wycena" className="flex flex-col items-center gap-0.5">
            <Ikona name="dokument" className="h-5 w-5" />
            Wycena
          </Link>
        </li>
        <li>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(MENU_EVENT))}
            className="flex w-full flex-col items-center gap-0.5"
          >
            <MenuIcon className="h-5 w-5" />
            Menu
          </button>
        </li>
      </ul>
    </nav>
  );
}

/** Przycisk „do góry”, widoczny po przewinięciu. */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Przewiń do góry"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-4 bottom-20 z-40 flex h-11 w-11 items-center justify-center rounded-[12px] bg-accent-600 text-white shadow-lg transition-all md:right-6 md:bottom-6 ${
        show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m5 12 5-5 5 5" />
      </svg>
    </button>
  );
}
