const { app, BrowserWindow, ipcMain, Menu, shell, Notification } = require("electron");
const fs = require("fs");
const http = require("http");
const os = require("os");
const path = require("path");

if (process.env.NODE_ENV === "development") {
  const electronPath =
    process.platform === "win32"
      ? path.join(__dirname, "node_modules", ".bin", "electron.cmd")
      : path.join(__dirname, "node_modules", ".bin", "electron");
  require("electron-reload")(__dirname, { electron: electronPath });
}

let mainWindow = null;
let updateMode = "ask";
let autoUpdater = null;
const updaterCacheDirName = "repar-ando-updater";
const sharePort = 47211;
let shareServer = null;
let shareData = null;
let shareUpdatedAt = null;

function getLocalIPv4s() {
  const interfaces = os.networkInterfaces();
  const ips = [];
  Object.values(interfaces).forEach((entries) => {
    (entries || []).forEach((entry) => {
      if (entry.family !== "IPv4") return;
      if (entry.internal) return;
      ips.push(entry.address);
    });
  });
  return ips;
}

function buildMaintenanceRows(data) {
  const rows = [];
  if (!data || !Array.isArray(data.pcs)) return rows;
  data.pcs.forEach((pc) => {
    (pc.maintenanceHistory || []).forEach((record) => {
      if (record.hidden) return;
      rows.push({
        date: record.date || "",
        equipo: pc.equipo || "",
        usuario: pc.usuario || "",
        tipo: record.type || "",
        tecnico: record.technician || "",
        notas: record.notes || "",
      });
    });
  });
  rows.sort((a, b) => {
    const aTime = new Date(a.date).getTime() || 0;
    const bTime = new Date(b.date).getTime() || 0;
    return bTime - aTime;
  });
  return rows;
}

function startShareServer() {
  if (shareServer) return;
  shareServer = http.createServer((req, res) => {
    const url = new URL(req.url || "/", "http://localhost");
    if (url.pathname !== "/") {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }

    const rows = buildMaintenanceRows(shareData);
    const rowsHtml = rows.length
      ? rows
          .map(
            (row) => `
        <tr>
          <td>${row.date || "-"}</td>
          <td>${row.equipo || "-"}</td>
          <td>${row.usuario || "-"}</td>
          <td>${row.tipo || "-"}</td>
          <td>${row.tecnico || "-"}</td>
          <td>${row.notas || "-"}</td>
        </tr>`
          )
          .join("")
      : '<tr><td class="empty" colspan="6">Sin datos.</td></tr>';

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Repar-Ando - Mantenimientos</title>
    <style>
      :root { color-scheme: light; }
      body { margin: 0; font-family: "Cambria", serif; background: #f9f4ed; color: #3b2f2a; }
      header { padding: 16px 20px; background: #fff7eb; border-bottom: 1px solid #e7c7a0; }
      h1 { margin: 0 0 8px; font-size: 22px; }
      .container { padding: 16px 20px 32px; }
      table { width: 100%; border-collapse: collapse; background: #fffdf9; border-radius: 12px; overflow: hidden; }
      th, td { padding: 10px 12px; border-bottom: 1px solid #f0dcc0; text-align: left; font-size: 14px; }
      th { background: #fff4e3; font-weight: 700; }
      .empty { padding: 20px; text-align: center; color: #8b6a4a; }
      .meta { font-size: 12px; color: #8b6a4a; margin-top: 8px; }
    </style>
  </head>
  <body>
    <header>
      <h1>Mantenimientos</h1>
    </header>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Equipo</th>
            <th>Usuario</th>
            <th>Tipo</th>
            <th>Tecnico</th>
            <th>Notas</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
      <div class="meta" id="updatedAt"></div>
    </div>
    <script>
      const updatedAtEl = document.getElementById("updatedAt");
      const updatedAt = ${shareUpdatedAt ? `"${shareUpdatedAt}"` : "null"};
      if (updatedAt) {
        const date = new Date(updatedAt);
        if (!Number.isNaN(date.getTime())) {
          updatedAtEl.textContent = "Actualizado: " + date.toLocaleString();
        }
      }
    </script>
  </body>
</html>`);
  });

  shareServer.listen(sharePort, "0.0.0.0");
}

function getUpdaterCacheDir() {
  const localAppData = app.getPath("localAppData");
  return path.join(localAppData, updaterCacheDirName);
}

function clearUpdaterCache() {
  try {
    const dir = getUpdaterCacheDir();
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  } catch {
    // ignore cache cleanup failures
  }
}

function sendUpdateEvent(channel, payload) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send(channel, payload);
}

function configureAutoUpdater(mode) {
  if (!autoUpdater) return;
  updateMode = mode === "auto" ? "auto" : "ask";
  autoUpdater.autoDownload = updateMode === "auto";
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 960,
    minHeight: 600,
    title: "Repar-Ando",
    frame: false,
    backgroundColor: "#f9f4ed",
    icon: path.join(__dirname, "assets", "icono.ico"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.webContents.on("did-finish-load", () => {
    win.webContents.insertCSS(`
      ::-webkit-scrollbar { width: 8px !important; background: transparent !important; }
      ::-webkit-scrollbar-track { background: transparent !important; }
      ::-webkit-scrollbar-track-piece { background: transparent !important; }
      ::-webkit-scrollbar-thumb {
        background: rgba(180, 83, 9, 0.7) !important;
        border-radius: 999px !important;
        border: 2px solid transparent !important;
        background-clip: padding-box !important;
      }
      ::-webkit-scrollbar-thumb:hover { background: rgba(180, 83, 9, 0.9) !important; }
      ::-webkit-scrollbar-button,
      ::-webkit-scrollbar-button:single-button,
      ::-webkit-scrollbar-button:vertical:decrement,
      ::-webkit-scrollbar-button:vertical:increment {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
        background: transparent !important;
      }
      ::-webkit-scrollbar-corner { background: transparent !important; }
    `);
  });

  win.loadFile(path.join(__dirname, "index.html"));
  mainWindow = win;
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();
  startShareServer();

  if (app.isPackaged) {
    try {
      // Lazy-load updater so dev mode doesn't crash.
      ({ autoUpdater } = require("electron-updater"));
      wireUpdaterEvents();
      configureAutoUpdater("ask");
      autoUpdater.checkForUpdates().catch(() => {
        // ignore
      });
    } catch {
      // ignore updater failures in production bootstrap
    }
  }

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

ipcMain.on("window:minimize", (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) win.minimize();
});

ipcMain.on("window:toggle-maximize", (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (!win) return;
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});

ipcMain.on("window:close", (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) win.close();
});

ipcMain.on("open-external", (event, url) => {
  if (typeof url !== "string") return;
  shell.openExternal(url);
});

ipcMain.on("notify", (event, payload) => {
  if (!payload || typeof payload !== "object") return;
  const { title, body } = payload;
  if (!title || !body) return;
  if (!Notification.isSupported()) return;
  const iconPath = path.join(__dirname, "assets", "icono.png");
  new Notification({ title, body, icon: iconPath }).show();
});

ipcMain.on("updates:set-mode", (event, mode) => {
  configureAutoUpdater(mode);
});

ipcMain.on("share:update", (_event, data) => {
  shareData = data;
  shareUpdatedAt = new Date().toISOString();
});

ipcMain.handle("share:get-urls", () => {
  const ips = getLocalIPv4s();
  return {
    urls: ips.map((ip) => `http://${ip}:${sharePort}`),
  };
});

ipcMain.handle("updates:check", async () => {
  if (!app.isPackaged || !autoUpdater) return null;
  try {
    return await autoUpdater.checkForUpdates();
  } catch {
    clearUpdaterCache();
    try {
      return await autoUpdater.checkForUpdates();
    } catch (error) {
      sendUpdateEvent("updates:error", error?.message || String(error));
      return null;
    }
    return null;
  }
});

ipcMain.handle("updates:download", async () => {
  if (!app.isPackaged || !autoUpdater) return;
  try {
    return await autoUpdater.downloadUpdate();
  } catch {
    sendUpdateEvent("updates:error");
    return null;
  }
});

ipcMain.handle("updates:install", () => {
  if (!app.isPackaged || !autoUpdater) return;
  autoUpdater.quitAndInstall();
});

function wireUpdaterEvents() {
  if (!autoUpdater) return;
  autoUpdater.on("update-available", (info) => {
    sendUpdateEvent("updates:available", info);
    if (updateMode === "auto") {
      autoUpdater.downloadUpdate().catch(() => {
        sendUpdateEvent("updates:error");
      });
    }
  });

  autoUpdater.on("update-downloaded", (info) => {
    sendUpdateEvent("updates:downloaded", info);
  });

  autoUpdater.on("download-progress", (progress) => {
    sendUpdateEvent("updates:progress", progress);
  });

  autoUpdater.on("error", (error) => {
    sendUpdateEvent("updates:error", error?.message || String(error));
  });
}


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
