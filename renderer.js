// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// const electron = require('electron');
// const ipcRenderer = electron.ipcRenderer;
// ipcRenderer.on('cpu',(event,data) => {
//     cpuContent.textContent = `${data.cpu.toFixed(2)}%`
//   });

const cpuContent = document.querySelector('#cpu')

window.addEventListener('cpu', function(e) {
    cpuContent.textContent = `${e.detail.toFixed(2)}%`
})