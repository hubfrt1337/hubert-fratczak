"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { PhoneIcon } from "./ui/Icons";

const telHref = () => `tel:${site.callPhone.replace(/\s/g, "")}`;

/**
 * Przycisk „Zadzwoń”: numer nie siedzi w HTML-u (proste boty go nie zbiorą).
 * Na telefonie od razu wybiera numer, na komputerze pokazuje go w miejscu przycisku.
 */
export function CallButton({
  className = "btn-sun",
  label = "Zadzwoń",
  showIcon = true,
}: {
  className?: string;
  label?: string;
  showIcon?: boolean;
}) {
  const [revealed, setRevealed] = useState(false);
  if (!site.callPhone) return null;

  if (revealed) {
    return (
      <a href={telHref()} className={className}>
        {showIcon ? <PhoneIcon /> : null}
        {site.callPhone}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        setRevealed(true);
        if (window.matchMedia("(pointer: coarse)").matches) window.location.href = telHref();
      }}
    >
      {showIcon ? <PhoneIcon /> : null}
      {label}
    </button>
  );
}

/** Zgodność wstecz ze starszymi komponentami. */
export function PhoneButton({
  buttonClassName = "btn-sun",
  label = "Pokaż numer telefonu",
}: {
  buttonClassName?: string;
  linkClassName?: string;
  label?: string;
}) {
  return <CallButton className={buttonClassName} label={label} />;
}
