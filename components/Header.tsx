"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronIcon, CloseIcon, MenuIcon } from "./ui/Icons";
import { Logo } from "./ui/Logo";
import { CallButton } from "./CallReveal";
import { nav } from "@/data/site";

/** Zdarzenie, którym dolny pasek na telefonie otwiera menu. */
export const MENU_EVENT = "webuko-menu";

/**
 * Nagłówek przyklejony do góry, przezroczysty nad zdjęciem w hero.
 * Po przewinięciu dostaje granatowe tło. Menu „Oferta” rozwija się po najechaniu.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onMenu = () => setOpen(true);
    window.addEventListener(MENU_EVENT, onMenu);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener(MENU_EVENT, onMenu);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-accent-950/95 shadow-lg shadow-black/20 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 transition-all sm:px-8 ${
          scrolled ? "h-[70px]" : "h-[88px]"
        }`}
      >
        <Link href="/" aria-label="Webuko, strona główna" className="shrink-0">
          <Logo dark />
        </Link>

        <nav aria-label="Nawigacja główna" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) =>
              item.children ? (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-semibold text-white/90 hover:text-sun-300"
                  >
                    {item.label}
                    <ChevronIcon className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute top-full left-0 pt-3 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="leaf-b w-80 overflow-hidden bg-white py-3 shadow-2xl shadow-black/25">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-5 py-2.5 text-[15px] font-medium text-ink-700 hover:bg-accent-50 hover:text-accent-700"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-[15px] font-semibold text-white/90 hover:text-sun-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <CallButton
            label="Bezpłatna konsultacja"
            className="btn-sun hidden px-5 py-2.5 text-[13px] sm:inline-flex"
          />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            aria-controls="menu-mobilne"
            className="rounded-lg p-2 text-white xl:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-mobilne"
          className="h-[calc(100dvh-70px)] overflow-y-auto border-t border-white/10 bg-accent-950 pb-28 xl:hidden"
        >
          <ul className="mx-auto max-w-[1280px] px-5 py-4 sm:px-8">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-white/10">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setOfferOpen((v) => !v)}
                      aria-expanded={offerOpen}
                      className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold text-white"
                    >
                      {item.label}
                      <ChevronIcon className={`h-5 w-5 transition-transform ${offerOpen ? "rotate-180" : ""}`} />
                    </button>
                    {offerOpen ? (
                      <ul className="pb-3">
                        <li>
                          <Link href={item.href} onClick={() => setOpen(false)} className="block py-2 pl-4 text-sun-300">
                            Cała oferta
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 pl-4 text-white/80"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-lg font-semibold text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <CallButton label="Bezpłatna konsultacja" className="btn-sun w-full" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
