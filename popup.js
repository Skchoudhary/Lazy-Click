'use strict';


let changeColor = document.getElementById("changeState");
changeColor.onclick = function (element) {
  chrome.runtime.sendMessage({ action: "sync-button" });
};

// chrome.browserAction.onClicked.addListener(() => {
//   chrome.runtime.sendMessage({ action: "sync-button" });
// });