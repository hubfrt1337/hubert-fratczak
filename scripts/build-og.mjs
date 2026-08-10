/**
 * Składa obrazek Open Graph (public/og.png) — miniaturę, którą Facebook,
 * LinkedIn i Messenger pokazują przy udostępnianiu linku do strony.
 *
 * Uruchom osobno:  npm run og
 * Odpala się też automatycznie na końcu `npm run screenshots`.
 *
 * Rozmiar 1200×630 to standard OG — Facebook wyświetla go w całości,
 * bez przycinania.
 */
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const sharp = createRequire(import.meta.url)("sharp");

const WIDTH = 1200;
const HEIGHT = 630;

const INK = "#0e1116";
const ACCENT = "#d14415";
const MUTED = "#b0b9c8";

const CARD_W = 480;
const CARD_H = 270; // 16:9
const RADIUS = 10;

/** Ostatni element leży na wierzchu. */
const cards = [
  { file: "projekt-3.png", x: 648, y: 58 },
  { file: "projekt-1.png", x: 700, y: 302 },
];

const SHADOW_PAD = 36;

const mask = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${CARD_W}" height="${CARD_H}">
     <rect width="${CARD_W}" height="${CARD_H}" rx="${RADIUS}" ry="${RADIUS}" fill="#fff"/>
   </svg>`,
);

const shadowShape = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${CARD_W + SHADOW_PAD * 2}" height="${CARD_H + SHADOW_PAD * 2}">
     <rect x="${SHADOW_PAD}" y="${SHADOW_PAD}" width="${CARD_W}" height="${CARD_H}"
           rx="${RADIUS}" ry="${RADIUS}" fill="#000" fill-opacity="0.55"/>
   </svg>`,
);

const backdrop = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
     <defs>
       <radialGradient id="glow" cx="78%" cy="24%" r="62%">
         <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.22"/>
         <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
       </radialGradient>
     </defs>
     <rect width="${WIDTH}" height="${HEIGHT}" fill="${INK}"/>
     <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>
   </svg>`,
);

const textLayer = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
     <g font-family="Segoe UI, Arial, sans-serif">
       <rect x="72" y="214" width="6" height="176" fill="${ACCENT}"/>

       <text x="104" y="264" font-size="58" font-weight="700" fill="#ffffff"
             letter-spacing="-1.5">Hubert Frątczak</text>

       <text x="104" y="318" font-size="31" font-weight="400" fill="${MUTED}">Strony internetowe dla firm</text>

       <text x="104" y="376" font-size="22" font-weight="600" fill="${MUTED}"
             letter-spacing="0.5">Wizytówki · Sklepy · Serwisy firmowe</text>

       <text x="72" y="556" font-size="24" font-weight="700" fill="${ACCENT}"
             letter-spacing="0.5">www.hubertfratczak.pl</text>
     </g>
   </svg>`,
);

export async function buildOg(publicDir) {
  const shadow = await sharp(shadowShape).blur(12).png().toBuffer();
  const layers = [];

  for (const card of cards) {
    const img = await sharp(path.join(publicDir, "portfolio", card.file))
      .resize(CARD_W, CARD_H, { fit: "cover", position: "top" })
      .composite([{ input: mask, blend: "dest-in" }])
      .png()
      .toBuffer();

    layers.push({
      input: shadow,
      left: card.x - SHADOW_PAD,
      top: card.y - SHADOW_PAD + 12,
    });
    layers.push({ input: img, left: card.x, top: card.y });
  }

  layers.push({ input: textLayer, left: 0, top: 0 });

  const outPath = path.join(publicDir, "og.png");
  await sharp(backdrop).composite(layers).png({ compressionLevel: 9 }).toFile(outPath);

  console.log(`  ✓ public/og.png (${WIDTH}×${HEIGHT})`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await buildOg(path.join(process.cwd(), "public"));
}
