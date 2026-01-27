const { execFileSync } = require("child_process");
const path = require("path");

module.exports = async (context) => {
  if (process.platform !== "win32") return;

  const archValue = context.arch;
  const arch =
    typeof archValue === "string"
      ? archValue
      : archValue === 0
        ? "ia32"
        : "x64";
  const exeName = `${context.packager.appInfo.productFilename}.exe`;
  const exePath = path.join(context.appOutDir, exeName);
  const iconPath = path.join(context.packager.projectDir, "assets", "icono.ico");
  const rceditName = arch === "ia32" ? "rcedit-ia32.exe" : "rcedit-x64.exe";
  const rceditPath = path.join(
    context.packager.projectDir,
    "tools",
    "rcedit",
    rceditName
  );

  execFileSync(rceditPath, [exePath, "--set-icon", iconPath], {
    stdio: "inherit",
  });
};
