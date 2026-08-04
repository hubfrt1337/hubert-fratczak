"use client";

import { useState, type FormEvent } from "react";
import { submitForm, type SubmitStatus } from "@/lib/submitForm";
import { FormStatus } from "./FormStatus";

export function OpinionForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string | null>(null);

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

    try {
      await submitForm({
        // Osobny temat = łatwe filtrowanie w skrzynce przed publikacją opinii.
        subject: `NOWA OPINIA — ${String(data.get("name") ?? "")}`,
        from_name: "Formularz opinii",
        name: String(data.get("name") ?? ""),
        company: String(data.get("company") ?? ""),
        quote: String(data.get("quote") ?? ""),
        consent: data.get("consent") ? "TAK — zgoda na publikację" : "NIE",
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Coś poszło nie tak. Spróbuj ponownie za chwilę.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="label" htmlFor="name">
          Imię i nazwisko <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="field"
          placeholder="Anna Kowalska"
        />
      </div>

      <div>
        <label className="label" htmlFor="company">
          Firma <span aria-hidden="true">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className="field"
          placeholder="Nazwa firmy"
        />
      </div>

      <div>
        <label className="label" htmlFor="quote">
          Treść opinii <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="quote"
          name="quote"
          required
          rows={6}
          className="field resize-y"
          placeholder="Jak wyglądała współpraca? Co było dla Ciebie najważniejsze i co dała Ci nowa strona?"
        />
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-ink-200 bg-ink-50/60 p-4">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 h-5 w-5 shrink-0 rounded border-ink-300 accent-accent-600"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-ink-700">
          Zgadzam się na publikację tej opinii wraz z moim imieniem i nazwą firmy
          na stronie. <span aria-hidden="true">*</span>
        </label>
      </div>

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
        successMessage="Dziękuję za opinię! To dla mnie realna pomoc."
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Wysyłam…" : "Wyślij opinię"}
      </button>
    </form>
  );
}
