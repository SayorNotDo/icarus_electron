const {
  app,
  BrowserWindow,
  Menu,
  ipcMain,
  dialog,
  nativeTheme,
  webContents,
  Notification,
} = require("electron");
const path = require("path");

const mode = "development";

Menu.setApplicationMenu(null);

async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog();
  if (canceled) {
    return;
  } else {
    return filePaths[0];
  }
}

// Customized Theme
ipcMain.handle("dark-mode:toggle", () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = "light";
  } else {
    nativeTheme.themeSource = "dark";
  }
  return nativeTheme.shouldUseDarkColors;
});

ipcMain.handle("dark-mode:system", () => {
  nativeTheme.themeSource = "system";
});

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 1000,
    width: 1000,
    minHeight: 800,
    height: 800,
    frame: true,
    titleBarStyle: "hidden",
    titleBarOverlay: true,
    userContentSize: true,
    contextIsolation: true,
    nodeIntegration: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL(
    mode === "development"
      ? "http://localhost:5173"
      : `file://${path.join(__dirname, "../dist/index.html")}`
  );

  if (mode === "development") {
    win.webContents.openDevTools();
  }

  // serial-ports listener
  win.webContents.session.on(
    "select-serial-port",
    (event, portList, webContents, callback) => {
      win.webContents.on("select-serial-added", (event, port) => {
        console.log("serial-port-added FIRED WITH", port);
        // Optionally update portlist to add the new port
      });
      win.webContents.session.on("serial-port-removed", (event, port) => {
        console.log("serial-port-removed FIRED WITH", port);
        // Optionally update portlist to remove the port
      });

      event.preventDefault();
      if (portList.length && portList.length > 0) {
        callback(portList[0].portId);
      } else {
        callback(""); // Could not find any matching serial
      }
    }
  );

  win.webContents.session.setPermissionCheckHandler(
    (webContents, permission, requestingOrigin, details) => {
      if (permission === "serial" && details.securityOrigin === "file:///") {
        return true;
      } else {
        return false;
      }
    }
  );
  win.webContents.session.setDevicePermissionHandler((details) => {
    if (details.deviceType === "serial" && details.origin === "file:///") {
      return true;
    }
    return false;
  });
};

app.whenReady().then(() => {
  ipcMain.handle("dialog:openFile", handleFileOpen);
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
