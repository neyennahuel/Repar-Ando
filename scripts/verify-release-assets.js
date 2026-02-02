const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const latestPath = path.join(distDir, "latest.yml");

if (!fs.existsSync(latestPath)) {
  console.log("verify-release-assets: latest.yml not found, skipping.");
  process.exit(0);
}

const content = fs.readFileSync(latestPath, "utf8");
const expected = new Set();

content.split(/\r?\n/).forEach((line) => {
  const trimmed = line.trim();
  if (trimmed.startsWith("path:")) {
    const value = trimmed.slice("path:".length).trim();
    if (value) expected.add(value);
    return;
  }
  if (trimmed.startsWith("- url:")) {
    const value = trimmed.slice("- url:".length).trim();
    if (value) expected.add(value);
  }
});

if (!expected.size) {
  console.log("verify-release-assets: no files listed in latest.yml.");
  process.exit(0);
}

const missing = [];
const created = [];

function tryCreateFromSpacedName(fileName) {
  // Common electron-builder pattern: "Repar-Ando-Setup-1.0.10.exe"
  // Dist output uses spaces: "Repar-Ando Setup 1.0.10.exe"
  const spaced = fileName.replace(/-Setup-/i, " Setup ");
  if (spaced === fileName) return false;
  const src = path.join(distDir, spaced);
  const dest = path.join(distDir, fileName);
  if (!fs.existsSync(src)) return false;
  fs.copyFileSync(src, dest);
  created.push(fileName);
  return true;
}

expected.forEach((fileName) => {
  const target = path.join(distDir, fileName);
  if (fs.existsSync(target)) return;
  if (tryCreateFromSpacedName(fileName)) return;
  missing.push(fileName);
});

if (created.length) {
  console.log(
    `verify-release-assets: created ${created.length} file(s): ${created.join(", ")}`
  );
}

if (missing.length) {
  console.error(
    `verify-release-assets: missing ${missing.length} file(s): ${missing.join(", ")}`
  );
  process.exit(1);
}

console.log("verify-release-assets: ok");
