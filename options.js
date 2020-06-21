"use strict";

function triggerClickEvent(videoButton, audioButton) {
  // "HNeRed"  class show button is active
  // U26fgb JRY2Pb mUbCce kpROve uJNmj M9Bg4d HNeRed
  // U26fgb JRY2Pb mUbCce kpROve uJNmj FTMc0c N2RpBe jY9Dbb M9Bg4d
  const videoButtonStatus = videoButton.classList.contains("HNeRed");
  const audioButtonStatus = audioButton.classList.contains("HNeRed");
  if (videoButtonStatus === audioButtonStatus) {
    videoButton.click();
    audioButton.click();
  } else {
    !audioButtonStatus && videoButtonStatus
      ? videoButton.click()
      : audioButton.click();
  }
}

// triggerClickEvent(
//   document.evaluate(
//     '//*[@id="ow3"]/div[1]/div/div[4]/div[3]/div[9]/div[2]/div[3]/div/div',
//     document,
//     null,
//     XPathResult.FIRST_ORDERED_NODE_TYPE,
//     null
//   ).singleNodeValue,
//   document.evaluate(
//     '//*[@id="ow3"]/div[1]/div/div[4]/div[3]/div[9]/div[2]/div[1]/div/div/div',
//     document,
//     null,
//     XPathResult.FIRST_ORDERED_NODE_TYPE,
//     null
//   ).singleNodeValue
// );

function init() {
  chrome.storage.sync.get("currentTabURL", function (data) {
    serveTheAction(data.currentTabURL);
  });
}

function serveTheAction(url) {
  let videoXPath = "";
  let audioXPath = "";
  if (url.startsWith("https://meet.google.com")) {
    videoXPath =
      '//*[@id="ow3"]/div[1]/div/div[4]/div[3]/div[9]/div[2]/div[3]/div/div';
    audioXPath =
      '//*[@id="ow3"]/div[1]/div/div[4]/div[3]/div[9]/div[2]/div[1]/div/div/div';
  } else if (url.startsWith("https://meet.jit.si/")) {
    videoXPath =
      '//*[@id="new-toolbox"]/div[2]/div[2]/div[3]/div/div[1]/div/div/div[1]';
    audioXPath =
      '//*[@id="new-toolbox"]/div[2]/div[2]/div[1]/div/div[1]/div/div/div[1]';
  }
  if (audioXPath && videoXPath) {
    let videoNode = document.evaluate(
      videoXPath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    let audioNode = document.evaluate(
      audioXPath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    triggerClickEvent(videoNode, audioNode);
  } else {
    alert("Extension is not functional with current tab.");
  }
}

init();
