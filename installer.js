const path = require("path");
const { createWindowsInstaller } = require("electron-winstaller");

async function buildInstaller() {
  const appDir = path.join(__dirname, "dist", "Gestion-Mantenimiento-win32-x64");
  const outputDir = path.join(__dirname, "dist", "installer");

  await createWindowsInstaller({
    appDirectory: appDir,
    outputDirectory: outputDir,
    authors: "Gestion Mantenimiento",
    exe: "Gestion-Mantenimiento.exe",
    setupExe: "Gestion-Mantenimiento-Setup.exe",
    setupIcon: path.join(__dirname, "assets", "icono.ico"),
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    shortcutName: "Repar-Ando",
    noMsi: true,
  });
}

buildInstaller().catch((error) => {
  console.error("Error creando el instalador:", error);
  process.exit(1);
});
