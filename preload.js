const { contextBridge, ipcRenderer } = require("electron"); // eslint-disable-line @typescript-eslint/no-unused-vars

/* eslint-disable @typescript-eslint/no-explicit-any */
//window.ipcRenderer = ipcRenderer;

contextBridge.exposeInMainWorld("search", {
  send: (channel, data) => ipcRenderer.invoke(channel, data),
  handle: (channel, callable, event, data) => ipcRenderer.on(channel, callable(event, data)),
});
