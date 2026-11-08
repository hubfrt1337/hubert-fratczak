/**
 * Tła sekcji (hero, pas parallax, liczniki, pas kontaktu) składane z własnych zrzutów realizacji.
 * Kolaż przechylonych okien na ciemnym morskim tle; przyciemnienie robi CSS (nakładka), więc obraz zostaje jasny.
 * Uruchom:  node scripts/build-tla.mjs   → public/tla/*.webp
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const pub = path.join(process.cwd(), "public");
const out = path.join(pub, "tla");
await mkdir(out, { recursive: true });

const shots = [1, 2, 3, 4, 5, 6, 7].map((n) => path.join(pub, "portfolio", `projekt-${n}.png`));

/** Siatka okien przeglądarki obrócona o `angle`, przycięta do width×height. */
async function collage({ width, height, angle, tile, gap, offset, blur, file }) {
  const tileH = Math.round((tile * 9) / 16);
  const cols = Math.ceil((width * 1.6) / (tile + gap)) + 1;
  const rows = Math.ceil((height * 1.9) / (tileH + gap)) + 1;
  const W = cols * (tile + gap);
  const H = rows * (tileH + gap);

  const radius = Math.round(tile * 0.02);
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${tile}" height="${tileH}"><rect width="${tile}" height="${tileH}" rx="${radius}" fill="#fff"/></svg>`,
  );
  const tiles = await Promise.all(
    shots.map((file) =>
      sharp(file)
        .resize(tile, tileH, { fit: "cover", position: "top" })
        .composite([{ input: mask, blend: "dest-in" }])
        .png()
        .toBuffer(),
    ),
  );

  const layers = [];
  let k = offset;
  for (let r = 0; r < rows; r++) {
    const shift = r % 2 ? Math.round((tile + gap) / 2) : 0;
    for (let c = 0; c < cols; c++) {
      layers.push({ input: tiles[k % tiles.length], left: c * (tile + gap) - shift, top: r * (tileH + gap) });
      k += 3;
    }
  }

  const base = await sharp({
    create: { width: W, height: H, channels: 4, background: "#052424" },
  })
    .composite(layers.filter((l) => l.left > -tile))
    .png()
    .toBuffer();

  let img = sharp(base).rotate(angle, { background: "#052424" });
  const rotated = await img.png().toBuffer();
  const meta = await sharp(rotated).metadata();
  let pipeline = sharp(rotated).extract({
    left: Math.round((meta.width - width) / 2),
    top: Math.round((meta.height - height) / 2),
    width,
    height,
  });
  if (blur) pipeline = pipeline.blur(blur);
  await pipeline.webp({ quality: 72 }).toFile(path.join(out, file));
  console.log(`  ✓ public/tla/${file} (${width}×${height})`);
}

await collage({ width: 1920, height: 1000, angle: -9, tile: 560, gap: 40, offset: 0, blur: 0, file: "hero.webp" });
await collage({ width: 1920, height: 700, angle: 8, tile: 420, gap: 32, offset: 2, blur: 0, file: "pas.webp" });
await collage({ width: 1920, height: 800, angle: -6, tile: 480, gap: 36, offset: 4, blur: 3, file: "liczniki.webp" });
await collage({ width: 1920, height: 600, angle: 10, tile: 380, gap: 30, offset: 1, blur: 4, file: "kontakt.webp" });
