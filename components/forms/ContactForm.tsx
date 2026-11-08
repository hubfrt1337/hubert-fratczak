"use client";

import Link from "next/link";
import { useEffect, useId, useState, type FormEvent } from "react";
import { submitForm, type SubmitStatus } from "@/lib/submitForm";
import { budgetOptions } from "@/data/pricing";
import { BUDGET_EVENT } from "../BudgetCta";
import { FormStatus } from "./FormStatus";

/** Szybki formularz wyceny (pas „Bezpłatna wycena strony www”). Pełna wersja: FormularzWyceny. */
export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [budget, setBudget] = useState("");

  // Kliknięcie „Zapytaj o ten pakiet” w cenniku podpowiada rodzaj projektu.
  useEffect(() => {
    const onPreselect = (event: Event) => {
      const value = (event as CustomEvent<string>).detail;
      if (budgetOptions.includes(value)) setBudget(value);
    };
    window.addEventListener(BUDGET_EVENT, onPreselect);
    return () => window.removeEventListener(BUDGET_EVENT, onPreselect);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: boty wypełniają ukryte pole, ludzie nie.
    if (data.get("company_website")) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    setError(null);
    try {
      await submitForm({
        subject: `Wycena ze strony: ${String(data.get("budget") ?? "")} (${String(data.get("name") ?? "")})`,
        from_name: "Formularz wyceny (szybki)",
        replyto: String(data.get("email") ?? ""),
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? "") || "brak",
        budget: String(data.get("budget") ?? ""),
        message: String(data.get("message") ?? "") || "brak",
      });
      setStatus("success");
      form.reset();
      setBudget("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Coś poszło nie tak. Napisz do nas mailem.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="label" htmlFor={`${id}-budget`}>
          Rodzaj projektu <span className="font-normal text-ink-500">(wymagane)</span>
        </label>
        <select
          id={`${id}-budget`}
          name="budget"
          required
          className="field"
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
        >
          <option value="">Wybierz rodzaj projektu</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="label" htmlFor={`${id}-name`}>
          Imię i nazwisko lub nazwa firmy <span className="font-normal text-ink-500">(wymagane)</span>
        </label>
        <input id={`${id}-name`} name="name" type="text" required autoComplete="name" className="field" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor={`${id}-email`}>
            E-mail <span className="font-normal text-ink-500">(wymagane)</span>
          </label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className="field" />
        </div>
        <div>
          <label className="label" htmlFor={`${id}-phone`}>
            Telefon
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+\(\)\s\-]{9,20}"
            title="Wpisz numer telefonu, np. 600 123 456"
            className="field"
          />
        </div>
      </div>

      <div>
        <label className="label" htmlFor={`${id}-message`}>
          Krótki opis projektu
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          className="field resize-y"
          placeholder="Czym zajmuje się firma, co ma robić strona, na kiedy jest potrzebna."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-600">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-accent-600" />
        <span>
          Potwierdzam zapoznanie się z{" "}
          <Link href="/polityka-prywatnosci" className="font-semibold text-accent-600 hover:underline">
            informacją o przetwarzaniu danych
          </Link>
          . <span className="text-ink-500">(wymagane)</span>
        </span>
      </label>

      {/* honeypot: ukryte przed użytkownikiem i czytnikami ekranu */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={`${id}-hp`}>Proszę zostawić to pole puste</label>
        <input id={`${id}-hp`} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <FormStatus
        status={status}
        error={error}
        successMessage="Dziękujemy! Zapytanie dotarło. Odezwiemy się z wyceną w ciągu 24 godzin."
      />

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-sun disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Wysyłanie…" : "Wyślij zapytanie"}
        </button>
        <Link href="/bezplatna-wycena" className="text-sm font-semibold text-accent-600 hover:underline">
          Pełny formularz wyceny ›
        </Link>
      </div>

      <p className="text-xs leading-relaxed text-ink-500">
        Dane z formularza wykorzystujemy tylko do przygotowania wyceny i odpowiedzi na zapytanie.
        Więcej w{" "}
        <Link href="/polityka-prywatnosci" className="underline underline-offset-2">
          polityce prywatności
        </Link>
        .
      </p>
    </form>
  );
}
