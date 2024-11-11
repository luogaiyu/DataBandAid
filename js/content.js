// 向backgroud 发送请求, 使用 chrome.runtime api
chrome.runtime.sendMessage({ action: "getNetworkRequests" }, function(response) {
    console.log("当天的网络请求列表:", response);
});