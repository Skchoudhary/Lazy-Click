'use strict';

chrome.runtime.onInstalled.addListener(function () {
   chrome.runtime.onMessage.addListener(
     function (message, callback) {
      if (message.action == "sync-button") {
        chrome.tabs.executeScript({
          file: "options.js",
        });
      }
});
   
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "meet.google.com" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

