const electron = require('electron');
const url = require('url');
const path = require('path');

const { BrowserWindow } = electron;

let fileWindow;
let HTTPWindow;


module.exports.createFileWindow = (width, height, title, protocol, Url) => {
    fileWindow = new BrowserWindow({
        width: width,
        height: height,
        title: title
    });

    fileWindow.loadURL(url.format({
        pathname: path.join(__dirname, Url),
        protocol: protocol,
        slashes: true
    }))

    //garbage collection handell
    fileWindow.on('closed', _ => {
        fileWindow = null;
    })
}


module.exports.createHTTPWindow = (width, height, title, Url) => {
    HTTPWindow = new BrowserWindow({
        width: width,
        height: height,
        title: title
    });

    HTTPWindow.loadURL(Url)

    //garbage collection handell
    HTTPWindow.on('closed', _ => {
        HTTPWindow = null;
    })
}