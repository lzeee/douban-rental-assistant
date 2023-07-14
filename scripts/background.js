// 在小图标上写文字
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "off",
  });
});

// 只影响豆瓣的“我的小组”讨论页面
const extensions = 'https://www.douban.com/group'

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(extensions)) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'on' ? 'off' : 'on'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
	
	// 调整页面的CSS
    if (nextState === "on") {
      // Insert the CSS file when the user turns the extension on
      await chrome.scripting.insertCSS({
        files: ["style/showTarget.css"],
        target: { tabId: tab.id },
      });
    } else if (nextState === "off") {
      // Remove the CSS file when the user turns the extension off
      await chrome.scripting.removeCSS({
        files: ["style/showTarget.css"],
        target: { tabId: tab.id },
      });
    }
  }
});