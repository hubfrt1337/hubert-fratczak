"use client";

import { useEffect, useState, type FormEvent } from "react";
import { submitForm, type SubmitStatus } from "@/lib/submitForm";
import { budgetOptions } from "@/data/pricing";
import { site } from "@/data/site";
import { BUDGET_EVENT } from "../BudgetCta";
import { FormStatus } from "./FormStatus";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [budget, setBudget] = useState("");

  // Kliknięcie "Zapytaj o ten pakiet" w cenniku podpowiada widełki budżetu.
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

    // Honeypot — boty wypełniają ukryte pole, ludzie nie.
    if (data.get("company_website")) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    setError(null);

    try {
      await submitForm({
        subject: `Nowe zapytanie ze strony — ${String(data.get("name") ?? "")}`,
        from_name: "Formularz kontaktowy",
        // Web3Forms ustawia to jako Reply-To — odpowiadasz klientowi wprost
        // z podglądu maila, bez kopiowania adresu.
        replyto: String(data.get("email") ?? ""),
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? "") || "—",
        budget: String(data.get("budget") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setStatus("success");
      form.reset();
      setBudget("");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Coś poszło nie tak. Napisz proszę bezpośrednio na maila.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label className="label" htmlFor="name">
          Imię <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="field"
          placeholder="Jan Kowalski"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="email">
            E-mail <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field"
            placeholder="jan@firma.pl"
          />
        </div>

        <div>
          <label className="label" htmlFor="phone">
            Telefon <span className="font-normal text-ink-500">(opcjonalnie)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+\(\)\s\-]{9,20}"
            title="Wpisz numer telefonu, np. 600 123 456"
            aria-describedby="phone-hint"
            className="field"
            placeholder="600 123 456"
          />
        </div>
      </div>
      <p id="phone-hint" className="-mt-3 text-xs text-ink-500">
        Zostaw numer, jeśli wolisz, żebym oddzwonił zamiast pisać.
      </p>

      <div>
        <label className="label" htmlFor="budget">
          Orientacyjny budżet
        </label>
        <select
          id="budget"
          name="budget"
          className="field"
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
        >
          <option value="">Wybierz widełki</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="label" htmlFor="message">
          Opis projektu <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="field resize-y"
          placeholder="Czym zajmuje się Twoja firma, co ma robić strona i na kiedy jest potrzebna."
        />
      </div>

      {/* honeypot — ukryte przed użytkownikiem i czytnikami ekranu */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_website">Nie wypełniaj tego pola</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <FormStatus
        status={status}
        error={error}
        successMessage="Dziękuję! Wiadomość dotarła — odezwę się w ciągu 24 godzin."
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Wysyłam…" : "Wyślij zapytanie"}
      </button>

      <p className="text-xs leading-relaxed text-ink-500">
        Wysyłając formularz zgadzasz się na kontakt w sprawie zapytania. Szczegóły
        w{" "}
        <a
          href="/polityka-prywatnosci"
          className="underline underline-offset-2 hover:text-ink-800"
        >
          polityce prywatności
        </a>
        . Wolisz mailem? {site.email}
      </p>
    </form>
  );
}
