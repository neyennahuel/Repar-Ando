const { app, BrowserWindow, ipcMain, Menu, shell, Notification } = require("electron");
const { autoUpdater } = require("electron-updater");
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

function sendUpdateEvent(channel, payload) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send(channel, payload);
}

function configureAutoUpdater(mode) {
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

  if (app.isPackaged) {
    configureAutoUpdater("ask");
    autoUpdater.checkForUpdates().catch(() => {
      // ignore
    });
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
  new Notification({ title, body }).show();
});

ipcMain.on("updates:set-mode", (event, mode) => {
  configureAutoUpdater(mode);
});

ipcMain.handle("updates:check", async () => {
  if (!app.isPackaged) return null;
  try {
    return await autoUpdater.checkForUpdates();
  } catch {
    sendUpdateEvent("updates:error");
    return null;
  }
});

ipcMain.handle("updates:download", async () => {
  if (!app.isPackaged) return;
  try {
    return await autoUpdater.downloadUpdate();
  } catch {
    sendUpdateEvent("updates:error");
    return null;
  }
});

ipcMain.handle("updates:install", () => {
  if (!app.isPackaged) return;
  autoUpdater.quitAndInstall();
});

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
  sendUpdateEvent("updates:error", error);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
