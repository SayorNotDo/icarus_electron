const { app, BrowserWindow, Menu } = require('electron');
const path = require("path");

const mode = "development";

Menu.setApplicationMenu(null);

const createWindow = () => {
    const win = new BrowserWindow({
        minWidth: 1000,
        width: 1000,
        minHeight: 800,
        height: 800,
        frame: true,
        contextIsolation: false,
        nodeIntegration: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        }
    });

    win.loadURL(mode === "development" ? "http://localhost:5173" : `file://${path.join(__dirname, '../dist/index.html')}`)

    if (mode === "development") {
        win.webContents.openDevTools();
    }
};

app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    })
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
})