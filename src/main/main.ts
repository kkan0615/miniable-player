import { app, BrowserWindow, ipcMain } from 'electron'
import { createAppWindow } from './windows/app'
import { createPlayerWindow } from './windows/player'
import {
  closePlayerWindow,
  closePlayWindowNavigator,
  createDefaultPlayerWindowConfig, getPlayerWindowConfig,
  openPlayerWindow,
  openPlayWindowNavigator, setFrameOfPlayerWindow, setPlayerWindowConfig
} from './services/playerWindow'
import { closeAppWindow, openAppWindow } from './services/appWindow'
import { closeSelectorWindow, openSelectorWindow } from './services/selectorWindow'
import { createSelectorWindow } from './windows/selector'
import { addToPlayList, getVideoInPc, setPlayerInfo } from './services/player'
import {
  changeElectronSystemDarkMode,
  getElectronSystemConfig,
  getElectronSystemDarkMode, setElectronSystemConfig
} from './services/systemForWindow'
import isDev from 'electron-is-dev'
import { createTray } from './windows/tray'

app.whenReady()
  .then(() => {
    app.on('activate', () => {
      if (!BrowserWindow.getAllWindows().length) {
        createAppWindow()
      }
    })
  })

/* When app is ready to open */
app.on('ready', () => {
  if (isDev)
    createAppWindow()
  createPlayerWindow()
  createTray()

  /* System for window */
  ipcMain.handle('get-electron-system-config', getElectronSystemConfig)
  ipcMain.handle('get-electron-system-dark-mode', getElectronSystemDarkMode)
  ipcMain.handle('change-electron-system-dark-mode', changeElectronSystemDarkMode)
  ipcMain.on('set-electron-system-config', setElectronSystemConfig)

  /** App windows */
  ipcMain.on('open-app-window', openAppWindow)
  ipcMain.on('close-app-window', closeAppWindow)

  /** Player windows */
  ipcMain.on('open-player-window', openPlayerWindow)
  ipcMain.on('close-player-window', closePlayerWindow)
  ipcMain.on('open-player-window-navigator', openPlayWindowNavigator)
  ipcMain.on('close-player-window-navigator', closePlayWindowNavigator)
  ipcMain.on('set-default-player-window-config', createDefaultPlayerWindowConfig)
  ipcMain.handle('get-player-window-config', getPlayerWindowConfig)
  ipcMain.on('set-player-window-config', setPlayerWindowConfig)
  ipcMain.on('set-frame-player-window', setFrameOfPlayerWindow)

  /** Selector windows */
  ipcMain.on('open-selector-window', openSelectorWindow)
  ipcMain.on('close-selector-window', closeSelectorWindow)

  /* Player */
  ipcMain.on('open-player-window', openPlayerWindow)
  ipcMain.on('close-player-window', closePlayerWindow)
  ipcMain.on('set-player-info', setPlayerInfo)
  ipcMain.on('add-to-play-list', addToPlayList)
  ipcMain.handle('get-video-in-pc', getVideoInPc)
})

/* When all windows are closed */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    /* Cancel all jobs */
    app.quit()
  }
})
