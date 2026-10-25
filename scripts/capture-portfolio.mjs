/**
 * Zrzuty ekranu realizacji do sekcji Portfolio.
 * Uruchom:  npm run screenshots
 *
 * Puppeteer nie jest zależnością tego projektu — pożyczamy instancję z
 * cv-saas-backend (tylko odczyt, nic tam nie jest modyfikowane). Jeśli
 * przeniesiesz tamten projekt, wskaż nową ścieżkę:
 *
 *   PUPPETEER_FROM=C:/inna/sciezka npm run screenshots
 */
import path from "node:path";
import http from "node:http";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { buildHero } from "./build-hero.mjs";
import { buildOg } from "./build-og.mjs";

const PUPPETEER_FROM =
  process.env.PUPPETEER_FROM ?? "C:/Users/Dell/cv-saas-backend";

let puppeteer;
try {
  puppeteer = createRequire(path.join(PUPPETEER_FROM, "package.json"))("puppeteer");
} catch {
  console.error(
    `Nie znalazłem puppeteera w ${PUPPETEER_FROM}.\n` +
      "Wskaż projekt, który go ma: PUPPETEER_FROM=C:/sciezka npm run screenshots",
  );
  process.exit(1);
}

const sharp = createRequire(import.meta.url)("sharp");

const OUTPUT_DIR = path.join(process.cwd(), "public", "portfolio");

/** Docelowy rozmiar miniatury — proporcje 16:9, tak jak karta w Portfolio.tsx. */
const CARD_WIDTH = 1600;
const CARD_HEIGHT = 900;
const SCALE = 2; // zrzut w 2× i zmniejszenie = ostrzejszy efekt

const targets = [
  {
    file: "projekt-1.png",
    url: "https://www.stworzcv.com",
    // 1024 px: pełne menu desktopowe (poniżej zwija się w hamburger), a sekcja
    // hero ma wtedy 1024×576 — dokładnie 16:9, więc kadr nie wymaga przycięcia.
    viewport: { width: 1024, height: 576 },
    // Baner cookie ustawiony jako zaakceptowany PRZED wejściem na stronę.
    beforeLoad: () => {
      localStorage.setItem("stworzcv_cookie_consent", "accepted");
    },
    /** Kadr do końca pierwszej sekcji (niebieskie tło hero). */
    clip: () => {
      const hero = document.querySelector("section");
      const bottom = Math.round(hero.getBoundingClientRect().bottom + window.scrollY);
      return { x: 0, y: 0, width: window.innerWidth, height: bottom };
    },
  },
  {
    file: "projekt-2.png",
    url: "https://www.dariazietek.pl/",
    viewport: { width: 1600, height: 900 }, // 16:9 — pierwszy ekran w całości
  },
  {
    file: "projekt-3.png",
    url: "https://otsz.pl",
    // 1166 px: sekcja hero ma 656 px wysokości niezależnie od szerokości okna,
    // więc przy tej szerokości wychodzi równo 16:9 i kadr kończy się na jej granicy
    // (bez ucinania w połowie następnej sekcji).
    viewport: { width: 1166, height: 656 },
    clip: () => {
      const hero = document.querySelector("main > section, section");
      const bottom = Math.round(hero.getBoundingClientRect().bottom + window.scrollY);
      return { x: 0, y: 0, width: window.innerWidth, height: bottom };
    },
  },
];

/**
 * Projekty bez publicznego adresu (statyczne strony demonstracyjne) serwujemy
 * na chwilę z dysku — zamiast `url` mają `dir`, a skrypt podstawia adres lokalny.
 */
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".json": "application/json",
};

function serveDir(dir) {
  const server = http.createServer(async (req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const file = path.join(dir, urlPath.endsWith("/") ? `${urlPath}index.html` : urlPath);
    try {
      const body = await readFile(file);
      res.writeHead(200, { "Content-Type": MIME[path.extname(file)] ?? "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end();
    }
  });
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

const localTargets = [
  {
    file: "projekt-4.png",
    url: "https://mililash.pages.dev/",
    viewport: { width: 1600, height: 900 },
  },
  {
    file: "projekt-5.png",
    dir: "D:/projekty/rzesy2",
    viewport: { width: 1600, height: 900 },
  },
  {
    file: "projekt-6.png",
    dir: "D:/projekty/paznokcie",
    viewport: { width: 1600, height: 900 },
  },
];
targets.push(...localTargets);

// Wybrane zrzuty: `npm run screenshots -- projekt-4.png projekt-5.png`
const only = process.argv.slice(2);

const browser = await puppeteer.launch({ headless: "new" });

try {
  for (const target of targets) {
    if (only.length && !only.includes(target.file)) continue;

    let server;
    if (target.dir) {
      server = await serveDir(target.dir);
      target.url = `http://127.0.0.1:${server.address().port}/`;
    }

    const page = await browser.newPage();
    await page.setViewport({ ...target.viewport, deviceScaleFactor: SCALE });

    if (target.beforeLoad) await page.evaluateOnNewDocument(target.beforeLoad);

    console.log(`→ ${target.url}`);
    await page.goto(target.url, { waitUntil: "networkidle0", timeout: 90000 });

    // Pauza na animacje wejściowe i lazy-loading obrazków.
    await new Promise((resolve) => setTimeout(resolve, 2500));

    let clip;
    if (target.clip) {
      const region = await page.evaluate(target.clip);
      clip = { ...region, x: 0, y: 0 };
    }

    const buffer = await page.screenshot({ type: "png", ...(clip ? { clip } : {}) });

    const outPath = path.join(OUTPUT_DIR, target.file);
    await sharp(buffer)
      .resize(CARD_WIDTH, CARD_HEIGHT, { fit: "cover", position: "top" })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(outPath);

    const { width, height } = await sharp(outPath).metadata();
    console.log(`  ✓ public/portfolio/${target.file} (${width}×${height})`);

    await page.close();
    server?.close();
  }

  // Hero i miniatura Open Graph korzystają z tych samych zrzutów — odświeżamy razem.
  const publicDir = path.join(process.cwd(), "public");
  console.log("→ składam obrazek hero i miniaturę Open Graph");
  await buildHero(publicDir);
  await buildOg(publicDir);
} finally {
  await browser.close();
}
