const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

const mainMenu = require('./mainMenu')
// console.log(mainMenuTemplate)

let mainWindow;
let mainMenuTemplate = mainMenu.getMainMenuTemplate();

app.on('ready', _ => {
    const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize

    mainWindow = new BrowserWindow({
        width: width / 1.5,
        height: height / 1.6
    });


    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.on('closed', _ => {
        app.quit();
    });

    //build menu from template 
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //insert menu
    Menu.setApplicationMenu(mainMenu);
})








if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}


// //add developer tools if not in production
// if (process.env.NODE_ENV !== 'production') {
//     mainMenuTemplate.push(
//         {
//             label: 'dev tools',
//             submenu: [
//                 {
//                     label: 'toggle inspect',
//                     accelerator: process.platform == 'darwin' ? "Command+I" : 'Ctrl + I',
//                     click(item, focusedWindow) {
//                         focusedWindow.toggleDevTools();
//                     }
//                 },
//                 {
//                     role: 'reload'
//                 }
//             ]
//         }
//     )
// }


