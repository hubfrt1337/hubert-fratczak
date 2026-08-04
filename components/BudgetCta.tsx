"use client";

/**
 * Przycisk w cenniku: przewija do formularza i podpowiada w nim widełki budżetu.
 * Formularz nasłuchuje zdarzenia BUDGET_EVENT (patrz components/forms/ContactForm.tsx).
 */

export const BUDGET_EVENT = "preselect-budget";

export function BudgetCta({
  budget,
  children,
  className,
}: {
  budget: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <a
      href="#kontakt"
      className={className}
      onClick={() => {
        window.dispatchEvent(
          new CustomEvent<string>(BUDGET_EVENT, { detail: budget }),
        );
      }}
    >
      {children}
    </a>
  );
}
