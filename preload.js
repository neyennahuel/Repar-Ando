const { contextBridge, ipcRenderer, webFrame } = require("electron");

const scrollbarCss = `
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
`;

webFrame.insertCSS(scrollbarCss);

contextBridge.exposeInMainWorld("windowControls", {
  minimize: () => ipcRenderer.send("window:minimize"),
  toggleMaximize: () => ipcRenderer.send("window:toggle-maximize"),
  close: () => ipcRenderer.send("window:close"),
});

contextBridge.exposeInMainWorld("externalLinks", {
  open: (url) => ipcRenderer.send("open-external", url),
});

contextBridge.exposeInMainWorld("systemNotifications", {
  send: (payload) => ipcRenderer.send("notify", payload),
});

contextBridge.exposeInMainWorld("appUpdates", {
  setMode: (mode) => ipcRenderer.send("updates:set-mode", mode),
  checkNow: () => ipcRenderer.invoke("updates:check"),
  download: () => ipcRenderer.invoke("updates:download"),
  install: () => ipcRenderer.invoke("updates:install"),
  onUpdateAvailable: (handler) =>
    ipcRenderer.on("updates:available", (_event, info) => handler(info)),
  onUpdateDownloaded: (handler) =>
    ipcRenderer.on("updates:downloaded", (_event, info) => handler(info)),
  onUpdateError: (handler) =>
    ipcRenderer.on("updates:error", (_event, error) => handler(error)),
});
