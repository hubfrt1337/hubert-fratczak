/**
 * Generuje obrazek Open Graph i ikony do /public.
 * Uruchom:  npm run placeholders
 *
 * Hero, miniatury portfolio i zdjęcie w "O mnie" są już prawdziwe i ten skrypt
 * ich nie dotyka — hero i portfolio odświeża `npm run screenshots`.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");

const INK = "#0e1116";
const ACCENT = "#d14415";

function ogImage(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="${INK}"/>
    <rect x="90" y="${h / 2 - 96}" width="8" height="192" fill="${ACCENT}"/>
    <text x="130" y="${h / 2 - 30}" font-family="Segoe UI, Arial, sans-serif" font-size="66" font-weight="700" fill="#ffffff">Hubert Frątczak</text>
    <text x="130" y="${h / 2 + 34}" font-family="Segoe UI, Arial, sans-serif" font-size="34" fill="#b0b9c8">Strony internetowe dla firm</text>
    <text x="130" y="${h / 2 + 96}" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="600" fill="${ACCENT}">[OG_IMAGE — podmień /public/og.png]</text>
  </svg>`;
}

function icon(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="${INK}"/>
    <text x="32" y="43" font-family="Segoe UI, Arial, sans-serif" font-size="32" font-weight="700" fill="#ffffff" text-anchor="middle">H</text>
    <circle cx="50" cy="46" r="5" fill="${ACCENT}"/>
  </svg>`;
}

const targets = [
  // Zdjęcie w "O mnie", miniatury portfolio i hero są już prawdziwe
  // (authorHubert.png, `npm run screenshots`, `npm run hero`) — nie nadpisujemy ich.
  ["og.png", ogImage(1200, 630)],
  ["apple-touch-icon.png", icon(180)],
];

await mkdir(path.join(publicDir, "portfolio"), { recursive: true });

for (const [file, svg] of targets) {
  const out = path.join(publicDir, file);
  await sharp(Buffer.from(svg)).png().toFile(out);
  console.log("✓", file);
}

// favicon jako SVG — ostry na każdym ekranie, waży kilkaset bajtów
await writeFile(path.join(publicDir, "favicon.svg"), icon(64), "utf8");
console.log("✓ favicon.svg");
