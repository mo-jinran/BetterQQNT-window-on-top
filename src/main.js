const { BrowserWindow, ipcMain } = require("electron");


ipcMain.on("mojinran.window_on_top.toggleWindowOnTop", (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    window.setAlwaysOnTop(!window.isAlwaysOnTop());
    event.returnValue = window.isAlwaysOnTop();
});