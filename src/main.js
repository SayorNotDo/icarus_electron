const { app, BrowserWindow, ipcMain, nativeTheme, nativeImage } = require('electron')

const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Icarus",
    icon: nativeImage.createFromPath("public/favicon.ico"),
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      webSecurity: false,
      nodeIntegrationInSubFrames: true,
      preload: "./preload.js"
    }
  })


  mainWindow.loadURL('http://localhost:3000/')
  // mainWindow.loadURL()

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.focus()
  })

  // 打开开发者工具
  mainWindow.webContents.openDevTools()

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })
}


// Electron 在初始化后并准备
app.whenReady().then(() => {
  // 创建浏览器窗口时，调用该函数
  // 部分API在ready事件触发后才能使用
  createWindow()

  // app 被激活时触发事件
  app.on('activate', () => {
    // 在MacOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// 当全部窗口关闭时调用
app.on('window-all-closed', () => {
  // 如果不是苹果系统，则执行退出函数
  if (process.platform !== 'darwin') {
    app.quit()
  }
})