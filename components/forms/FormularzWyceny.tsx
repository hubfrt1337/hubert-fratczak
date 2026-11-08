"use client";

import Link from "next/link";
import { useEffect, useId, useState, type FormEvent } from "react";
import { submitForm, type SubmitStatus } from "@/lib/submitForm";
import { budgetOptions } from "@/data/pricing";
import { FormStatus } from "./FormStatus";

const elementy = [
  "Projekt graficzny",
  "Logo",
  "Teksty na stronę",
  "Blog lub aktualności",
  "Galeria lub portfolio",
  "Formularz kontaktowy",
  "Kilka wersji językowych",
  "Płatności online",
  "Rezerwacje online",
  "Integracje z innymi systemami",
  "Hosting i domena",
  "Pozycjonowanie w Google",
  "Samodzielna edycja treści",
];

const podstrony = ["1 (strona wizytówka)", "do 5", "6-10", "powyżej 10", "jeszcze nie wiem"];
const terminy = ["jak najszybciej", "w ciągu miesiąca", "w ciągu 2-3 miesięcy", "termin elastyczny"];
const budzety = ["do 1 500 zł", "1 500-3 000 zł", "3 000-6 000 zł", "powyżej 6 000 zł", "jeszcze nie wiem"];

function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-ink-200 pt-6">
      <legend className="pr-3 font-display text-lg font-bold text-ink-900">{legend}</legend>
      <div className="mt-4">{children}</div>
    </fieldset>
  );
}

/** Pełny formularz bezpłatnej wyceny (strona /bezplatna-wycena). */
export function FormularzWyceny() {
  const id = useId();
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [wybrany, setWybrany] = useState("");

  // Przycisk z cennika przekazuje pakiet w adresie: /bezplatna-wycena?projekt=...
  useEffect(() => {
    const projekt = new URLSearchParams(window.location.search).get("projekt");
    if (projekt && budgetOptions.includes(projekt)) setWybrany(projekt);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("company_website")) {
      setStatus("success");
      return;
    }
    setStatus("sending");
    setError(null);
    const s = (k: string) => String(data.get(k) ?? "") || "brak";
    try {
      await submitForm({
        subject: `Pełna wycena: ${s("budget")} (${s("name")})`,
        from_name: "Formularz wyceny (pełny)",
        replyto: String(data.get("email") ?? ""),
        rodzaj: s("budget"),
        elementy: data.getAll("elementy").map(String).join(", ") || "brak",
        podstrony: s("podstrony"),
        termin: s("termin"),
        budzet: s("budzet"),
        obecna_strona: s("obecna"),
        opis: s("message"),
        name: s("name"),
        email: s("email"),
        phone: s("phone"),
      });
      setStatus("success");
      form.reset();
      setWybrany("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Coś poszło nie tak. Napisz do nas mailem.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Fieldset legend="Rodzaj projektu (wymagane)">
        <div className="grid gap-2 sm:grid-cols-2">
          {budgetOptions.map((option, index) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-3 rounded-[10px] border border-ink-200 bg-white px-4 py-3 text-[15px] has-checked:border-accent-600 has-checked:bg-accent-50"
            >
              <input type="radio" name="budget" value={option} required={index === 0} checked={wybrany === option} onChange={() => setWybrany(option)} className="h-4 w-4 accent-accent-600" />
              {option}
            </label>
          ))}
        </div>
      </Fieldset>

      <Fieldset legend="Co ma się znaleźć w projekcie? (opcjonalnie)">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {elementy.map((item) => (
            <label key={item} className="flex cursor-pointer items-center gap-3 text-[15px]">
              <input type="checkbox" name="elementy" value={item} className="h-4 w-4 accent-accent-600" />
              {item}
            </label>
          ))}
        </div>
      </Fieldset>

      <Fieldset legend="Szczegóły (opcjonalnie)">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { key: "podstrony", label: "Liczba podstron", options: podstrony },
            { key: "termin", label: "Termin", options: terminy },
            { key: "budzet", label: "Budżet orientacyjny", options: budzety },
          ].map((field) => (
            <div key={field.key}>
              <label className="label" htmlFor={`${id}-${field.key}`}>
                {field.label}
              </label>
              <select id={`${id}-${field.key}`} name={field.key} className="field">
                <option value="">Wybierz</option>
                {field.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <label className="label" htmlFor={`${id}-obecna`}>
            Obecna strona (jeśli jest)
          </label>
          <input id={`${id}-obecna`} name="obecna" type="text" className="field" placeholder="www.twojafirma.pl" />
        </div>
        <div className="mt-4">
          <label className="label" htmlFor={`${id}-message`}>
            Opis projektu
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={5}
            className="field resize-y"
            placeholder="Czym zajmuje się firma, kim są klienci, co strona ma robić, strony, które Ci się podobają."
          />
        </div>
      </Fieldset>

      <Fieldset legend="Dane kontaktowe">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="label" htmlFor={`${id}-name`}>
              Imię i nazwisko lub firma <span className="font-normal text-ink-500">(wymagane)</span>
            </label>
            <input id={`${id}-name`} name="name" required autoComplete="name" className="field" />
          </div>
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
            <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className="field" />
          </div>
        </div>
      </Fieldset>

      <label className="flex items-start gap-3 text-sm text-ink-600">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-accent-600" />
        <span>
          Potwierdzam zapoznanie się z{" "}
          <Link href="/polityka-prywatnosci" className="font-semibold text-accent-600 hover:underline">
            informacją o przetwarzaniu danych
          </Link>
          . <span className="text-ink-500">(wymagane)</span>
        </span>
      </label>

      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={`${id}-hp`}>Proszę zostawić to pole puste</label>
        <input id={`${id}-hp`} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <FormStatus
        status={status}
        error={error}
        successMessage="Dziękujemy! Zapytanie dotarło. Wycenę wyślemy w ciągu 24 godzin."
      />

      <button type="submit" disabled={status === "sending"} className="btn-sun px-10 py-4 disabled:opacity-60">
        {status === "sending" ? "Wysyłanie…" : "Wyślij zapytanie o wycenę"}
      </button>
    </form>
  );
}
