const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");

try {
  fs.rmSync(distDir, { recursive: true, force: true });
  fs.mkdirSync(distDir, { recursive: true });
  console.log("clean-dist: dist cleaned");
} catch (error) {
  console.error("clean-dist: failed to clean dist", error);
  process.exit(1);
}
