"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./ui/Container";
import { CloseIcon, MenuIcon } from "./ui/Icons";
import { nav, site } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blokada przewijania tła, kiedy otwarte jest menu mobilne.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled || open
          ? "border-b border-ink-100 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-white"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-ink-950"
        >
          {site.name}
          <span className="text-accent-600">.</span>
        </Link>

        <nav aria-label="Nawigacja główna" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="/#kontakt" className="btn-primary hidden md:inline-flex">
            Wyceń stronę
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            aria-controls="menu-mobilne"
            className="-mr-2 rounded-lg p-2 text-ink-900 md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="menu-mobilne"
          className="border-t border-ink-100 bg-white md:hidden"
        >
          <Container className="py-4">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink-100 py-3.5 text-base font-medium text-ink-800"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/#kontakt"
              onClick={() => setOpen(false)}
              className="btn-primary mt-5 w-full"
            >
              Wyceń stronę
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
