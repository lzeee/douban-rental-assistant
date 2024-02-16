const targetUrl = 'https://www.douban.com/group'
const topicUrl = 'https://www.douban.com/group/topic/'

function checkTargetPage(url) {
  // 只影响到豆瓣网站下的“我的小组讨论”页面，根据情况调整badge颜色
  console.log(url);
  if (url && url.startsWith(targetUrl) && !url.startsWith(topicUrl)) {
    chrome.action.setIcon({ path: '/images/icon-color.png' });
  } else {
    chrome.action.setIcon({ path: '/images/icon-grey.png' })
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    const currentUrl = tab.url;
    checkTargetPage(currentUrl);
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    const currentUrl = tab.url;
    checkTargetPage(currentUrl);
  });
});