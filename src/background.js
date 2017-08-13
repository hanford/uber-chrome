import { attachHeadersListener } from 'chrome-sidebar'
import { url } from './constants'

chrome.browserAction.onClicked.addListener(tab => {
  console.log('Browser Action Triggered')
  // for the current tab, inject the 'inject.js' file & execute it
  chrome.tabs.executeScript(tab.id, {
    file: 'browser.js'
  })
})

function onHeadersReceived (details) {
  for (let i = 0; i < details.responseHeaders.length; i++) {
    if (details.responseHeaders[i].name.toLowerCase() === 'content-security-policy') {
      details.responseHeaders.splice(i, 1)
    } else if (details.responseHeaders[i].name.toLowerCase() == 'x-frame-options') {
      details.responseHeaders.splice(i, 1)
    }
  }

  return {
    responseHeaders: details.responseHeaders
  }
}

const filter = {
  urls: ['*://*/*'],
  types: ['main_frame', 'sub_frame']
}

chrome.webRequest.onHeadersReceived.addListener(onHeadersReceived, filter, ['blocking', 'responseHeaders']);

chrome.browserAction.onClicked.addListener(function() {
  chrome.browsingData.remove({}, {
    'serviceWorkers': true
  }, function() {})
})
