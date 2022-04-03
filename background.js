chrome.action.onClicked.addListener(function (tab) {
  chrome.storage.sync.get("isActive", ({ isActive }) => {
    if (isActive) {
      chrome.storage.sync.set({ isActive: false });
      chrome.action.setIcon({ path: "fsc.png" });
      chrome.action.setTitle({ title: "Auto claim is inactive" });
    } else {
      chrome.storage.sync.set({ isActive: true });
      chrome.action.setIcon({ path: "fsc_active.png" });
      chrome.action.setTitle({ title: "Auto claim is active" });
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url.includes("flipsidecrypto.xyz/drops")
  ) {
    console.log(tab.url);
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id,
      },
      files: ["script.js"],
    });
  }
});
