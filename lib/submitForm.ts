/**
 * Wysyłka formularzy bez własnego backendu.
 *
 * Obsługuje Web3Forms i Formspree — wybór zależy od tego, co wpiszesz
 * w NEXT_PUBLIC_FORM_ENDPOINT (patrz .env.example i README).
 */

export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const isWeb3Forms = (endpoint: string) => endpoint.includes("web3forms.com");

export type SubmitStatus = "idle" | "sending" | "success" | "error";

export type SubmitPayload = Record<string, string | boolean> & {
  /** Trafia do tematu maila — pozwala odróżnić zapytanie od opinii. */
  subject: string;
};

export async function submitForm(payload: SubmitPayload): Promise<void> {
  if (!FORM_ENDPOINT) {
    throw new Error(
      "Brak NEXT_PUBLIC_FORM_ENDPOINT. Uzupełnij plik .env.local — instrukcja w README.",
    );
  }

  const body: Record<string, unknown> = { ...payload };

  if (isWeb3Forms(FORM_ENDPOINT)) {
    if (!WEB3FORMS_KEY) {
      throw new Error(
        "Brak NEXT_PUBLIC_WEB3FORMS_KEY. Uzupełnij plik .env.local — instrukcja w README.",
      );
    }
    body.access_key = WEB3FORMS_KEY;
  }

  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Wysyłka nie powiodła się (HTTP ${response.status}).`);
  }

  // Web3Forms zwraca 200 również przy błędzie logicznym — sprawdzamy pole success.
  if (isWeb3Forms(FORM_ENDPOINT)) {
    const data = (await response.json()) as { success?: boolean; message?: string };
    if (!data.success) {
      throw new Error(data.message ?? "Wysyłka nie powiodła się.");
    }
  }
}
