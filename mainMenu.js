const window = require('./utils/window');



const getMainMenuTemplate = () => {
    return [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Add Item',
                    click() {
                        window.createFileWindow(400, 300, 'youtube', 'file', '../addItem.html');
                    }
                },

                {
                    label: 'Clear Item'
                },

                {
                    label: 'Quit',
                    accelerator: process.platform == 'darwin' ? "Command+Q" : 'Ctrl + Q',
                    click() {
                        app.quit();
                    }
                }

            ]
        },


        {
            label: 'websites',
            submenu: [
                {
                    label: 'youtube',
                    click() {
                        window.createHTTPWindow(400, 300, 'youtube', 'https://www.youtube.com')
                    }
                }
            ]
        },

        {
            label: 'dev tools',
            submenu: [
                {
                    label: 'toggle inspect',
                    accelerator: process.platform == 'darwin' ? "Command+I" : 'Ctrl + I',
                    click(item, focusedWindow) {
                        focusedWindow.toggleDevTools();
                    }
                },
                {
                    role: 'reload'
                }
            ]
        }
    ];

}


module.exports = {
    getMainMenuTemplate
}