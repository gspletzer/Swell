const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld(
  'api', {
    send: (channel, data) => {
      // allowlist channels
      const allowedChannels = ['toMain', 'confirm-clear-history', 'import-proto' ];
      if (allowedChannels.includes(channel)) {
        ipcRenderer.send(channel, data); 
      }
    },
    receive: (channel, cb) => {
      console.log('listening on channel : ', channel)
      // allowlist channels
      const allowedChannels = ['fromMain', 'add-collection', 'clear-history-response', 'proto-info'];
      if (allowedChannels.includes(channel)){
        ipcRenderer.on(channel, (event, ...args) => cb(...args));
      }
    },
  }
)