"use client";

/**
 * Przycisk w cenniku: przechodzi do formularza i podpowiada w nim rodzaj projektu.
 * Na tej samej stronie formularz nasłuchuje zdarzenia BUDGET_EVENT; na innej stronie
 * wybór przekazujemy w parametrze ?projekt=.
 */

export const BUDGET_EVENT = "preselect-budget";

export function BudgetCta({
  budget,
  children,
  className,
  href = "#wycena",
}: {
  budget: string;
  children: React.ReactNode;
  className: string;
  href?: string;
}) {
  const target = href.startsWith("#") ? href : `${href}?projekt=${encodeURIComponent(budget)}`;
  return (
    <a
      href={target}
      className={className}
      onClick={() => {
        window.dispatchEvent(new CustomEvent<string>(BUDGET_EVENT, { detail: budget }));
      }}
    >
      {children}
    </a>
  );
}
