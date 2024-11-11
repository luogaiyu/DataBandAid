// 监听来自content-script的消息
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
// {
// 	console.log('收到来自content-script的消息：');
// 	console.log(request, sender, sendResponse);
// 	sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
// });

function test_function(url,requestHeadersMap){
	console.log('test_function 开始运行获取链接操作......');
	console.log(
		requestHeadersMap.get("accept")
		// requestHeadersMap.get("accept-language") + "  \n " +
		// requestHeadersMap.get("content-type") + "  \n " +
		// requestHeadersMap.get("platform-version") + "  \n " +
		// requestHeadersMap.get("sec-ch-ua") + "  \n " +
		// requestHeadersMap.get("sec-ch-ua-mobile") + "  \n " +
		// requestHeadersMap.get("sec-ch-ua-platform") + "  \n " +
		// requestHeadersMap.get("sec-fetch-dest") + "  \n " +
		// requestHeadersMap.get("sec-fetch-mode") + "  \n " + 
		// requestHeadersMap.get("sec-fetch-site") + "  \n " +
		// requestHeadersMap.get("x-requested-with") + "  \n " +
		// requestHeadersMap.get("cookie") + "  \n " 
	);
	fetch(url, {
		"headers": {
			"accept":requestHeadersMap.get("accept"),
			"accept-language":requestHeadersMap.get("accept-language"),
			"content-type":requestHeadersMap.get("content-type"),
			"platform-version":requestHeadersMap.get("platform-version"),
			"sec-ch-ua":requestHeadersMap.get("sec-ch-ua"),
			"sec-ch-ua-mobile":requestHeadersMap.get("sec-ch-ua-mobile"),
			"sec-ch-ua-platform":requestHeadersMap.get("sec-ch-ua-platform"),
			"sec-fetch-dest":requestHeadersMap.get("sec-fetch-dest"),
			"sec-fetch-mode":requestHeadersMap.get("sec-fetch-mode"),
			"sec-fetch-site":requestHeadersMap.get("sec-fetch-site"),
			"x-requested-with":requestHeadersMap.get("x-requested-with"),
			"cookie":requestHeadersMap.get("cookie"),
		},
		"referrer": "https://abtest.corp.kuaishou.com/abnew",
    	"referrerPolicy": "strict-origin-when-cross-origin",
		"body": "{\"startTime\":\"2024-06-11 00:00:00\",\"endTime\":\"2024-06-11 23:59:59\",\"needFillUp\":1,\"fromGroup\":[\"w_n_kuaishou_apps_did_2440:ALADDIN_TK_QUALITY_GOODS_v5:base\",\"w_n_kuaishou_apps_did_2440:ALADDIN_TK_QUALITY_GOODS_v5:exp1\"],\"pValue\":\"0.95\",\"world\":\"w_n_kuaishou_apps_did_2440\",\"experiment\":\"ALADDIN_TK_QUALITY_GOODS_v5\",\"metricId\":292272,\"chartType\":\"trend\",\"percentage\":true,\"aggregate\":true,\"baseColumn\":\"fromGroup\",\"granularity\":\"day\",\"useRankSum\":false,\"compareMethod\":1,\"produceTypes\":[2],\"queryType\":2,\"metricRankId\":0,\"configId\":\"search_merchant_did\",\"pageLabelId\":0,\"complexFilter\":{\"logicOp\":\"AND\",\"singleFilter\":[]},\"dimensions\":[],\"dimensionsCn\":[],\"isExpReport\":false,\"enterType\":\"NORMAL\",\"toGroup\":[\"w_n_kuaishou_apps_did_2440:ALADDIN_TK_QUALITY_GOODS_v5:exp4\"],\"baseCategory\":{},\"isShowSum\":false}",
		"method": "POST"
		,"mode": "cors",
    	"credentials": "include"
	  }).then(response => response.text())
	  .then(data => {
		console.log('结果: ', data);
	  })
	  .catch(error => {
		console.error('Request failed:', error);
	  });;
	  console.log('test_function 结束......');
}


chrome.webRequest.onBeforeSendHeaders.addListener(
	function(details) {
	  if(details.url === 'https://abtest.corp.kuaishou.com/rest/i/abtest/metricTemplate/abGroup/trendChart') {
		console.log(details.url);
		console.log(details.requestBody);
		console.log("Request Headers: ", details.requestHeaders);
		  // 查找特定的请求头，例如 Cookie
		  // 方法一：使用 Map 构造函数
		  const requestHeaders = details.requestHeaders.map(item => [item.name, item.value]);
		  const requestHeadersMap = new Map(requestHeaders);
		  // console.log(requestHeadersMap[])
		  console.log(requestHeadersMap)
		  test_function(details.url,requestHeadersMap);
	  }
	  return { requestHeaders: details.requestHeaders };
	},
	{ urls: ["<all_urls>"] },
	["requestHeaders","extraHeaders"]
);



// // 导航插件
// chrome.webNavigation.onCompleted.addListener((details) => {
// 	console.log('执行导航插件....')
// 	console.log(details);
	
// 	chrome.scripting.executeScript({
// 	  target: { tabId: details.tabId },
// 	  files: ['js/content1.js']
// 	});
// 	console.log('结束导航插件....')
//   }, { url: [{ urlMatches: '.*' }] });
  


// chrome.webRequest.onCompleted.addListener(
// 	async (details) => {
// 	  if (details.type === 'main_frame') {
// 		const filter = chrome.webRequest.filterResponseData(details.requestId);
// 		const decoder = new TextDecoder("utf-8");
// 		const encoder = new TextEncoder();
  
// 		let data = [];
  
// 		filter.ondata = event => {
// 		  data.push(event.data);
// 		};
  
// 		filter.onstop = async () => {
// 		  const str = decoder.decode(new Blob(data));
// 		  const responseBody = str;
  
// 		  // 将响应体发送到内容脚本
// 		  chrome.tabs.sendMessage(details.tabId, { responseBody });
// 		  filter.write(encoder.encode(str));
// 		  filter.disconnect();
// 		};
// 	  }
// 	},
// 	{ urls: ["<all_urls>"] },
// 	["responseHeaders"]
//   );

//


// console.log('end ....')

