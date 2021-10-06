// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.os = require('os-utils');

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }

    const ramContent = document.querySelector('#ram')
    
    function getInfoRam() {
    
        const memory = process.getSystemMemoryInfo()
        const freeRam = (memory.free / memory.total) * 100
        ramContent.textContent = `${freeRam.toFixed(2)}%`
    }

    setInterval(getInfoRam, 500)

    setInterval(() => {
      os.cpuUsage(function(v){
        window.dispatchEvent(new CustomEvent('cpu', {detail : v*100}));
      });
    },500);

  })