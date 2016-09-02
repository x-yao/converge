const {app, BrowserWindow ,ipcMain ,dialog ,webContents} = require('electron')

let win

const installExtensions = () => {
  // if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer').default; // eslint-disable-line global-require
    const {VUEJS_DEVTOOLS} = require('electron-devtools-installer');
    console.log(VUEJS_DEVTOOLS);
    installer(VUEJS_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
  // }
}

function showErr(){
  ipcMain.on('open-error-dialog', function (event) {
    dialog.showErrorBox('An Error Message', 'Demonstrating an error message.')
  })
}

function openNewUrl(){
  ipcMain.on('open-new-url', function (event,url) {
    win = new BrowserWindow({width: 500, height: 500})
    win.loadURL(`file://${__dirname}/`+url);
    win.on('closed', () => {
      win = null
    });
    win.show()
    win.openDevTools();
  })
}

function createWindow () {
  // Create the browser window.
  installExtensions();
  // showErr();
  openNewUrl()
  // app.commandLine.appendSwitch('--enable-touch-events');
  win = new BrowserWindow({width: 375, height: 603})
  // and load the index.html of the app.
  // win.loadURL(`file://${__dirname}/index.html`)
  win.loadURL(`http://localhost:8080`)
  // Open the DevTools.
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.