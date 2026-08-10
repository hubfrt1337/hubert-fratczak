# Hubert Frątczak — strona wizytówka + sprzedażowa

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion · deploy na Vercel.
Cała strona jest statyczna — brak backendu, formularze wysyłane przez zewnętrzny serwis.

---

## 1. Uruchomienie lokalnie

```bash
npm install
cp .env.example .env.local   # PowerShell: Copy-Item .env.example .env.local
npm run dev
```

Strona: http://localhost:3000 · formularz opinii: http://localhost:3000/opinia

Dostępne skrypty:

| Komenda | Do czego |
| --- | --- |
| `npm run dev` | serwer developerski |
| `npm run build` | build produkcyjny (sprawdza też typy) |
| `npm run start` | podgląd builda produkcyjnego |
| `npm run placeholders` | regeneruje favicon i ikonę iOS w `public/` |
| `npm run hero` | składa `public/hero.png` z miniatur portfolio |
| `npm run og` | składa `public/og.png` — miniaturę do udostępniania linku |
| `npm run screenshots` | odświeża zrzuty ekranu realizacji (patrz punkt 2) |

---

## 2. Gdzie co podmienić

Wszystkie treści siedzą w katalogu [`data/`](data/) — **nie musisz ruszać komponentów**.
Placeholdery są zapisane w `[NAWIASACH KWADRATOWYCH]`, więc łatwo je znaleźć:
w VS Code wyszukaj `\[[A-Z_0-9]+\]` z włączonym regexem.

| Plik | Co zawiera | Placeholdery do uzupełnienia |
| --- | --- | --- |
| [`data/site.ts`](data/site.ts) | imię, e-mail, telefon, miasto, social media, menu | uzupełnione; `city` i `social` są puste — po wpisaniu wartości same pojawią się w stopce |
| [`data/projects.ts`](data/projects.ts) | 3 realizacje (mini case study) | uzupełnione |
| [`data/pricing.ts`](data/pricing.ts) | 3 pakiety (ceny, terminy), widełki budżetu w formularzu, notka pod cennikiem | uzupełnione |
| [`data/testimonials.ts`](data/testimonials.ts) | opinie klientów | pusta tablica = sekcja się nie wyświetla |
| [`data/services.ts`](data/services.ts) | 3 karty oferty | — |
| [`data/process.ts`](data/process.ts) | 4 kroki procesu | — |
| [`data/faq.ts`](data/faq.ts) | pytania i odpowiedzi | — |
| [`components/About.tsx`](components/About.tsx) | sekcja „O mnie” | uzupełnione (bio + zdjęcie) |
| [`app/polityka-prywatnosci/page.tsx`](app/polityka-prywatnosci/page.tsx) | polityka prywatności | `[NAZWA_FIRMY]`, `[NIP]`, `[DATA_AKTUALIZACJI]`, … |

### Obrazki

W `public/` leżą wygenerowane wypełniacze. Podmień pliki **zachowując nazwy** — wtedy nic
w kodzie nie trzeba zmieniać:

| Plik | Wymiary | Gdzie się pojawia |
| --- | --- | --- |
| `public/hero.png` | 1200×900 | pierwszy ekran — kolaż z miniatur portfolio, generowany przez `npm run hero` |
| `public/authorHubert.png` | 800×800 | Twoje zdjęcie w sekcji „O mnie” (już wgrane) |
| `public/portfolio/projekt-1..3.png` | 1600×900 | miniatury realizacji (16:9) |
| `public/og.png` | 1200×630 | podgląd przy udostępnianiu linku (Facebook, LinkedIn) — generuje `npm run og` |
| `public/favicon.svg`, `public/apple-touch-icon.png` | 64, 180 | ikona w karcie przeglądarki |

Wszystkie obrazy idą przez `next/image` (automatyczna optymalizacja, WebP, lazy loading —
poza hero, które ma `priority`). Jeśli podmienisz na `.jpg`, popraw rozszerzenie w
`data/projects.ts` oraz w `components/Hero.tsx` / `components/About.tsx`.

### Zrzuty ekranu realizacji

Miniatury w `public/portfolio/` są prawdziwymi zrzutami stron, robione automatycznie:

```bash
npm run screenshots
```

Skrypt [`scripts/capture-portfolio.mjs`](scripts/capture-portfolio.mjs) **nie ma własnego
puppeteera** — pożycza go z projektu `cv-saas-backend` (wyłącznie odczyt zależności, nic
tam nie zapisuje). Jeśli przeniesiesz tamten projekt, wskaż nową ścieżkę:

```bash
PUPPETEER_FROM=C:/nowa/sciezka npm run screenshots
```

Każdy kadr ma proporcje 16:9 (1600×900) i jest dobrany tak, żeby kończył się na granicy
sekcji, a nie w połowie tekstu:

| Plik | Strona | Kadr |
| --- | --- | --- |
| `projekt-1.png` | stworzcv.com | viewport 1024×576 — header + cała niebieska sekcja hero, ani piksela dalej (przy 1024 px menu jest jeszcze w wersji desktopowej, a hero ma równo 16:9) |
| `projekt-2.png` | www.dariazietek.pl | viewport 1600×900 — hero na pełny ekran |
| `projekt-3.png` | otsz.pl | viewport 1166×656 — kadr do końca granatowej sekcji hero |

Na końcu skrypt składa jeszcze dwa obrazki z tych samych zrzutów:

- `public/hero.png` — kaskadę trzech okien na pierwszy ekran ([`scripts/build-hero.mjs`](scripts/build-hero.mjs), osobno: `npm run hero`),
- `public/og.png` — miniaturę pokazywaną przy wklejeniu linku na Facebooku, LinkedInie
  czy w Messengerze ([`scripts/build-og.mjs`](scripts/build-og.mjs), osobno: `npm run og`).

> **Po zmianie `og.png` Facebook nadal pokaże stary obrazek** — trzyma go w cache’u
> tygodniami. Wejdź na [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/),
> wklej adres strony i kliknij **Scrape Again**. LinkedIn ma swój odpowiednik:
> [Post Inspector](https://www.linkedin.com/post-inspector/).

Dodajesz nową realizację? Dopisz wpis w tablicy `targets` w skrypcie i w
[`data/projects.ts`](data/projects.ts).

### Notka pod cennikiem

`pricingNote` w [`data/pricing.ts`](data/pricing.ts) to jedno zdanie wyświetlane pod
kartami pakietów — miejsce na komunikat dotyczący wszystkich pakietów naraz, najczęściej
czasową promocję („Dla pierwszych trzech klientów: -20% na każdy pakiet”). Teraz stoi tam
uczciwe zastrzeżenie do cen startowych. Nie chcesz żadnej notki? Wpisz pusty string `""`
— akapit zniknie ze strony.

### Opinie klientów

Sekcja „Opinie” **nie renderuje się**, dopóki tablica w `data/testimonials.ts` jest pusta —
żadnych zaślepek ani wymyślonych cytatów. Kiedy zbierzesz pierwsze opinie (np. przez
`/opinia`), dopisz je ręcznie:

```ts
export const testimonials: Testimonial[] = [
  {
    name: "Anna Kowalska",
    company: "Gabinet Dentystyczny Kowalska",
    quote: "Strona powstała w dwa tygodnie, telefon dzwoni częściej niż wcześniej.",
    photo: "/opinie/anna.jpg", // opcjonalne; bez zdjęcia pokaże się inicjał
  },
];
```

---

## 3. Podłączenie formularzy

Oba formularze (kontakt i `/opinia`) korzystają z jednego pliku:
[`lib/submitForm.ts`](lib/submitForm.ts). Obsłużone są **Web3Forms** i **Formspree** —
kod rozpoznaje serwis po adresie w `NEXT_PUBLIC_FORM_ENDPOINT`.

### Wariant A — Web3Forms (polecany, darmowy, bez konta)

1. Wejdź na [web3forms.com](https://web3forms.com), podaj swój e-mail, odbierz klucz dostępu.
2. W `.env.local` wpisz:

```env
NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
NEXT_PUBLIC_WEB3FORMS_KEY=twoj-klucz-z-maila
```

### Wariant B — Formspree

1. Załóż formularz na [formspree.io](https://formspree.io) i skopiuj jego ID.
2. W `.env.local`:

```env
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/TWOJE_ID
NEXT_PUBLIC_WEB3FORMS_KEY=
```

### Rozróżnianie wiadomości

Oba formularze wysyłają inny temat, więc w skrzynce łatwo je odfiltrować:

- zapytanie z kontaktu → `Nowe zapytanie ze strony — <imię>`
- opinia z `/opinia` → `NOWA OPINIA — <imię>`

Chcesz kierować opinie na zupełnie inny adres? Załóż drugi formularz w Web3Forms/Formspree
i w [`components/forms/OpinionForm.tsx`](components/forms/OpinionForm.tsx) przekaż jego
endpoint — albo w Web3Forms dodaj pole `to` w wywołaniu `submitForm`.

Oba formularze mają ukryte pole-pułapkę (honeypot) odsiewające boty.

---

## 4. Strona `/opinia`

Osobna podstrona z formularzem do zbierania referencji po zakończonym projekcie.
Świadomie **nie ma jej w menu ani w `sitemap.xml`**, a `robots.txt` blokuje jej
indeksowanie (`app/robots.ts`) — link wysyłasz klientowi ręcznie mailem:

```
https://twoja-domena.pl/opinia
```

Pola: imię i nazwisko, firma, treść opinii, **wymagana** zgoda na publikację.
Opinie trafiają na maila, moderujesz je sam i dopiero potem przenosisz do
`data/testimonials.ts`.

---

## 5. Wdrożenie na Vercel

1. Wrzuć projekt na GitHub:

```bash
git init
git add .
git commit -m "Strona wizytówka"
git remote add origin https://github.com/TWOJ_LOGIN/NAZWA.git
git push -u origin main
```

2. Na [vercel.com](https://vercel.com) → **Add New → Project** → wskaż repozytorium.
   Vercel sam wykryje Next.js — żadnej konfiguracji nie trzeba zmieniać.

3. W **Settings → Environment Variables** dodaj (dla Production, Preview i Development):

| Zmienna | Wartość |
| --- | --- |
| `NEXT_PUBLIC_FORM_ENDPOINT` | endpoint z punktu 3 |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | klucz Web3Forms (przy Formspree zostaw pusty) |
| `NEXT_PUBLIC_SITE_URL` | `https://www.hubertfratczak.pl` (z `www` — na to przekierowuje Vercel) |

> `NEXT_PUBLIC_SITE_URL` musi być ustawiony **przed** buildem — trafia do metadanych
> Open Graph, `sitemap.xml` i `robots.txt`. Po zmianie zrób redeploy.

4. **Deploy**. Każdy `git push` do `main` automatycznie publikuje nową wersję.

### Domena

Domena **www.hubertfratczak.pl** jest już podpięta w Vercelu, z przekierowaniem
z wersji bez `www` na wersję z `www`. Dlatego `NEXT_PUBLIC_SITE_URL` musi być ustawiony
na `https://www.hubertfratczak.pl` — adres kanoniczny, sitemapa i tagi Open Graph mają
wskazywać dokładnie ten adres, na którym użytkownik faktycznie ląduje. Gdyby stała tam
wersja bez `www`, Google widziałby dwa warianty tej samej strony.

Zmiana domeny w przyszłości = podmiana tej jednej zmiennej + redeploy. Nic w kodzie.

---

## 6. Struktura projektu

```
app/
  layout.tsx                  metadane SEO, fonty, style globalne
  page.tsx                    strona główna (kolejność sekcji)
  globals.css                 paleta kolorów, typografia, klasy .btn/.field
  opinia/page.tsx             formularz opinii (noindex)
  polityka-prywatnosci/page.tsx
  robots.ts, sitemap.ts       generowane automatycznie
components/
  Header, Hero, ForWho, Services, Process, Portfolio,
  Testimonials, Pricing, Faq, About, Contact, Footer
  forms/                      ContactForm, OpinionForm, FormStatus
  ui/                         Container, Reveal (animacje), SectionHeading, Icons
data/                         WSZYSTKIE treści do podmiany
lib/submitForm.ts             wysyłka formularzy
scripts/                      generator obrazków zastępczych
public/                       obrazki, favicon
```

## 7. Zmiana kolorów i fontów

Wszystko w jednym miejscu — [`app/globals.css`](app/globals.css), blok `@theme`:

- `--color-ink-*` — grafitowa baza (tło ciemnych sekcji, teksty),
- `--color-accent-*` — kolor akcentu (CTA, wyróżnienia). Podmieniasz `--color-accent-600`
  i cała strona zmienia charakter. Uwaga na kontrast: biały tekst na przycisku wymaga
  koloru o kontraście ≥ 4.5:1 (obecny `#d14415` ma 4.6:1 — WCAG AA).

Fonty (Sora do nagłówków, Inter do treści) ładuje `next/font/google`
w [`app/layout.tsx`](app/layout.tsx) — samohostowane, bez zapytań do Google przy wejściu.

## 8. Wydajność i dostępność

- Wszystkie podstrony prerenderowane statycznie; JS tylko tam, gdzie jest potrzebny
  (menu mobilne, formularze, animacje pojawiania się).
- FAQ działa na natywnych `<details>` — zero JavaScriptu.
- Animacje respektują systemowe „ogranicz ruch” (`prefers-reduced-motion`).
- Semantyczne sekcje, `alt` przy każdym obrazie, `aria-label`/`aria-expanded`
  przy przycisku menu, widoczny focus na klawiaturze.
