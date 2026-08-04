/**
 * Składa obrazek do sekcji hero (public/hero.png) z gotowych zrzutów realizacji
 * leżących w public/portfolio. Trzy okna ułożone kaskadowo, z miękkim cieniem.
 *
 * Uruchom osobno:      npm run hero
 * Uruchamia się też automatycznie na końcu `npm run screenshots`.
 */
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const sharp = createRequire(import.meta.url)("sharp");

const WIDTH = 1200;
const HEIGHT = 900;
const BG = { r: 246, g: 247, b: 249, alpha: 1 }; // ink-50

const CARD_W = 760;
const CARD_H = Math.round((CARD_W * 9) / 16); // 428
const RADIUS = 14;

/** Kolejność ma znaczenie: ostatni element leży na wierzchu. */
const layout = [
  { file: "projekt-3.png", x: 30, y: 20 },
  { file: "projekt-2.png", x: 200, y: 232 },
  { file: "projekt-1.png", x: 370, y: 444 },
];

const SHADOW_PAD = 40;
const SHADOW_BLUR = 14;
const SHADOW_OFFSET_Y = 16;

const roundedMask = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${CARD_W}" height="${CARD_H}">
     <rect width="${CARD_W}" height="${CARD_H}" rx="${RADIUS}" ry="${RADIUS}" fill="#fff"/>
   </svg>`,
);

const shadowShape = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${CARD_W + SHADOW_PAD * 2}" height="${CARD_H + SHADOW_PAD * 2}">
     <rect x="${SHADOW_PAD}" y="${SHADOW_PAD}" width="${CARD_W}" height="${CARD_H}"
           rx="${RADIUS}" ry="${RADIUS}" fill="#0e1116" fill-opacity="0.22"/>
   </svg>`,
);

export async function buildHero(publicDir) {
  const shadow = await sharp(shadowShape).blur(SHADOW_BLUR).png().toBuffer();

  const layers = [];

  for (const item of layout) {
    const card = await sharp(path.join(publicDir, "portfolio", item.file))
      .resize(CARD_W, CARD_H, { fit: "cover", position: "top" })
      .composite([{ input: roundedMask, blend: "dest-in" }])
      .png()
      .toBuffer();

    layers.push({
      input: shadow,
      left: item.x - SHADOW_PAD,
      top: item.y - SHADOW_PAD + SHADOW_OFFSET_Y,
    });
    layers.push({ input: card, left: item.x, top: item.y });
  }

  const outPath = path.join(publicDir, "hero.png");
  await sharp({
    create: { width: WIDTH, height: HEIGHT, channels: 4, background: BG },
  })
    .composite(layers)
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log(`  ✓ public/hero.png (${WIDTH}×${HEIGHT})`);
}

// Uruchomienie bezpośrednie: node scripts/build-hero.mjs
// (pathToFileURL, bo na Windows ręcznie sklejony "file://" nie zgadza się
// z tym, co Node wstawia do import.meta.url — jest tam file:///D:/...)
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await buildHero(path.join(process.cwd(), "public"));
}
