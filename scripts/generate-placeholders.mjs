/**
 * Generuje ikony strony (favicon i ikonę na ekran główny iOS).
 * Uruchom:  npm run placeholders
 *
 * Pozostałe obrazki są prawdziwe i ten skrypt ich NIE nadpisuje:
 *   public/portfolio/*.png    — `npm run screenshots`
 *   public/hero.png           — `npm run hero`
 *   public/og.png             — `npm run og`
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");

const TEAL = "#0f6e69"; // morski marki
const SUN = "#ff8f4d"; // pomarańcz marki (CTA)

/** Znak: biała litera w i pomarańczowa kropka (jak „.pl” w logo). Ten sam co components/ui/Logo.tsx. */
const glyph = `<path d="M14 22 L21 44 L28 28 L35 44 L42 22" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="51" cy="41" r="5" fill="${SUN}"/>`;

/** Favicon: morski „liść” (duże zaokrąglenie lewy górny i prawy dolny róg, małe pozostałe). */
function icon(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
    <path d="M22 0H58A6 6 0 0 1 64 6V42A22 22 0 0 1 42 64H6A6 6 0 0 1 0 58V22A22 22 0 0 1 22 0Z" fill="${TEAL}"/>
    ${glyph}
  </svg>`;
}

/** Ikona iOS: pełne tło (iOS sam zaokrągla rogi), znak lekko pomniejszony, żeby nie dotykał krawędzi. */
function appleIcon(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
    <rect width="64" height="64" fill="${TEAL}"/>
    <g transform="translate(6.4 6.4) scale(0.8)">${glyph}</g>
  </svg>`;
}

await mkdir(path.join(publicDir, "portfolio"), { recursive: true });

await sharp(Buffer.from(appleIcon(180)))
  .png()
  .toFile(path.join(publicDir, "apple-touch-icon.png"));
console.log("✓ apple-touch-icon.png");

// PNG 48×48 dla wyników Google (lubi wielokrotności 48 px)
await sharp(Buffer.from(icon(48))).png().toFile(path.join(publicDir, "favicon-48.png"));
console.log("✓ favicon-48.png");

// favicon jako SVG — ostry na każdym ekranie, waży kilkaset bajtów
await writeFile(path.join(publicDir, "favicon.svg"), icon(64), "utf8");
console.log("✓ favicon.svg");
