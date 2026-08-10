/**
 * Generuje ikony strony (favicon i ikonę na ekran główny iOS).
 * Uruchom:  npm run placeholders
 *
 * Pozostałe obrazki są prawdziwe i ten skrypt ich NIE nadpisuje:
 *   public/authorHubert.png   — Twoje zdjęcie
 *   public/portfolio/*.png    — `npm run screenshots`
 *   public/hero.png           — `npm run hero`
 *   public/og.png             — `npm run og`
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");

const INK = "#0e1116";
const ACCENT = "#d14415";

function icon(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="${INK}"/>
    <text x="32" y="43" font-family="Segoe UI, Arial, sans-serif" font-size="32" font-weight="700" fill="#ffffff" text-anchor="middle">H</text>
    <circle cx="50" cy="46" r="5" fill="${ACCENT}"/>
  </svg>`;
}

await mkdir(path.join(publicDir, "portfolio"), { recursive: true });

await sharp(Buffer.from(icon(180)))
  .png()
  .toFile(path.join(publicDir, "apple-touch-icon.png"));
console.log("✓ apple-touch-icon.png");

// favicon jako SVG — ostry na każdym ekranie, waży kilkaset bajtów
await writeFile(path.join(publicDir, "favicon.svg"), icon(64), "utf8");
console.log("✓ favicon.svg");
