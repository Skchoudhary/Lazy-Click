"use strict";

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "meet.google.com" },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "meet.jit.si/" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    chrome.storage.sync.set({ currentTabURL: tabs[0].url }, function () {
      chrome.tabs.executeScript({ file: "options.js" });
    });
  });
});
