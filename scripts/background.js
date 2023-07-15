// 在插件图标上标明插件是否启动
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "off",
  });
});

// 只影响豆瓣的“我的小组讨论”页面
const targetUrl = 'https://www.douban.com/group'

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(targetUrl)) {
    // 确定
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'on' ? 'off' : 'on'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
  }
});