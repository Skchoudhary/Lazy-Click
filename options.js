"use strict";

function triggerClickEvent(videoButton, audioButton) {
  // "HNeRed"  class show button is active
  // U26fgb JRY2Pb mUbCce kpROve uJNmj M9Bg4d HNeRed
  // U26fgb JRY2Pb mUbCce kpROve uJNmj FTMc0c N2RpBe jY9Dbb M9Bg4d
  const videoButtonStatus = videoButton.classList.contains("HNeRed");
  const audioButtonStatus = audioButton.classList.contains("HNeRed");
  // alert(
  //   "audioButtonStatus: " +
  //     audioButtonStatus +
  //     " audioButton.classList: " +
  //     audioButton.classList +
  //     "\n" +
  //     "videoButtonStatus: " +
  //     videoButtonStatus +
  //     " videoButton.classList: " +
  //     videoButton.classList
  // );
  if (videoButtonStatus === audioButtonStatus) {
    videoButton.click();
    audioButton.click();
  }
  else {
    (!audioButtonStatus && videoButtonStatus) ? videoButton.click() : audioButton.click();
  }
}

triggerClickEvent(
  document.evaluate(
    '//*[@id="ow4"]/div[1]/div/div[4]/div[3]/div[9]/div[2]/div[1]/div/div/div',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue,
  document.evaluate(
    '//*[@id="ow4"]/div[1]/div/div[4]/div[3]/div[9]/div[2]/div[3]/div/div',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue,
);

//  "page_action": {
//     "default_popup": "popup.html",
//     "default_icon": {
//       "16": "images/get_started16.png",
//       "32": "images/get_started32.png",
//       "48": "images/get_started48.png",
//       "128": "images/get_started128.png"
//     }
//   },