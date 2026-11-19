// The press kit as a PDF: prints press-kit/press-kit.html (A4 pages) to static/press/press-kit.pdf
// with a headless Chrome or Edge, so the press area can offer it for download. The printing is done over the DevTools
// protocol by scripts/print-pdf.mjs (Node 22 or newer): Chrome's own --print-to-pdf flag stopped writing the file on
// Windows in November 2026.
// Run with: node scripts/make-press-kit.js   (set CHROME=/path/to/chrome if it is not found)
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");
const { execFileSync } = require("child_process");

const root = path.join(__dirname, "..");
const src = path.join(root, "press-kit", "press-kit.html");
const out = path.join(root, "static", "press", "press-kit.pdf");

const candidates = [
  process.env.CHROME,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const browser = candidates.find((p) => fs.existsSync(p));
if (!browser) throw new Error("No Chrome or Edge found: set CHROME to its path");

fs.mkdirSync(path.dirname(out), { recursive: true });
execFileSync(process.execPath, [path.join(__dirname, "print-pdf.mjs"), browser, pathToFileURL(src).href, out], { stdio: "inherit" });
console.log(`${path.relative(root, out)}: ${Math.round(fs.statSync(out).size / 1024)} KB`);
