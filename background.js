
function loadChapter () {
  chrome.tabs.executeScript(null, { file: "jquery-2.1.3.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "app.js" });
});
}


chrome.browserAction.onClicked.addListener(loadChapter);
