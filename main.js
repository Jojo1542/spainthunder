const electron = require('electron')
const {app, autoUpdater, dialog, BrowserWindow} = electron

const path = require('path')
const url  = require('url')

const server = 'https://spainthunder-panel1.herokuapp.com/'
const feed = `${server}/update/${process.platform}/${app.getVersion()}`

autoUpdater.setFeedURL(feed)

setInterval(() => {autoUpdater.checkForUpdates()}, 60000)

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
 const dialogOpts = {
	 type: 'información',
	 buttons: ['Reiniciar', 'Despues'],
	 title: 'Actualización de aplicación',
	 message: process.platform === 'win32'
 }
dialog.showMessageBox(dialogOpts, (response) => {
      if (response === 0) autoUpdater.quitAndInstall()
    })
  })


let win

function createWindow(){
	win = new BrowserWindow ({width: 800, height:600})
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}))

}

exports.win2 = () => {
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'menu.html'),
		protocol: 'file',
		slashes: true
	}))
}
exports.win3 = () => {
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}))
}

exports.openWindow = () => {
	let newWin = new BrowserWindow ({width: 1366, height:768})
  newWin.loadURL('http://sparkymc.com/');
}
exports.openWindow2 = () => {
	let newWin2 = new BrowserWindow ({width: 1366, height:768})
  newWin2.loadURL('https://www.youtube.com/watch?v=jiKoSKRMqxk');
}

app.on('ready', createWindow)
