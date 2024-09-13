chrome.runtime.sendMessage({ action: "getNetworkRequests" }, function(response) {
    console.log("当天的网络请求列表:", response);
});