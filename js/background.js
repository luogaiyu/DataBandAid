// 监听来自content-script的消息
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
// {
// 	console.log('收到来自content-script的消息：');
// 	console.log(request, sender, sendResponse);
// 	sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));

// });
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
console.log('start ....')
fetch("https://abtest.corp.kuaishou.com/rest/i/abtest/metricTemplate/abGroup/trendChart", {
	"headers": {
	  "accept": "application/json, text/plain, */*",
	  "accept-language": "zh,zh-CN;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6",
	  "content-type": "application/json",
	  "platform-version": "{\"laneId\":\"abtest3\"}",
	  "priority": "u=1, i",
	  "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
	  "sec-ch-ua-mobile": "?0",
	  "sec-ch-ua-platform": "\"macOS\"",
	  "sec-fetch-dest": "empty",
	  "sec-fetch-mode": "cors",
	  "sec-fetch-site": "same-origin",
	  "cookie":"apdid=036c0e6c-30bd-423e-905d-f9bd0d076da6296fba81fa1c1434404e54d11fa44be8:1725595483:1; accessproxy_session=63ec7edc-255c-41cc-b153-668910c8f5d5; _did=web_47528501898C2DDF; hdige2wqwoino=FjyYeJw6ZP6jWziASXJnxmG8dK4HpmtA25326dc7; idp_theme_change_identification=2; tiangong_user_id=yinbowen; userToken=7SFHyqSmlCFGXsc6qisEyg==-yinbowen; userName=yinbowen; $$$$idp_theme_change_identificationcopy_test=2; _ga=GA1.1.2117444561.1725607809; _ga_F6CM1VE30P=GS1.1.1726129367.6.0.1726129367.0.0.0; JSESSIONID=3C085C7500A6AD0050C81E4588379FA4; abUser=yinbowen; abToken=df3fbf0deca938852c98aa87c4bd0457; ehid=7g-guoIkbgIomSPnghImz5vC4oeVlbOyvniMo",
	  "x-requested-with": "XMLHttpRequest"
	},
	"referrer": "https://abtest.corp.kuaishou.com/abnew",
	"referrerPolicy": "strict-origin-when-cross-origin",
	"body": "{\"startTime\":\"2024-06-11 00:00:00\",\"endTime\":\"2024-06-11 23:59:59\",\"needFillUp\":1,\"fromGroup\":[\"w_n_kuaishou_apps_did_2440:ALADDIN_TK_QUALITY_GOODS_v5:base\",\"w_n_kuaishou_apps_did_2440:ALADDIN_TK_QUALITY_GOODS_v5:exp1\"],\"pValue\":\"0.95\",\"world\":\"w_n_kuaishou_apps_did_2440\",\"experiment\":\"ALADDIN_TK_QUALITY_GOODS_v5\",\"metricId\":242167,\"chartType\":\"trend\",\"percentage\":true,\"aggregate\":true,\"baseColumn\":\"fromGroup\",\"granularity\":\"day\",\"useRankSum\":false,\"compareMethod\":1,\"produceTypes\":[2],\"queryType\":2,\"metricRankId\":0,\"configId\":\"search_merchant_did\",\"pageLabelId\":0,\"complexFilter\":{\"logicOp\":\"AND\",\"singleFilter\":[]},\"dimensions\":[],\"dimensionsCn\":[],\"isExpReport\":false,\"enterType\":\"NORMAL\",\"toGroup\":[\"w_n_kuaishou_apps_did_2440:ALADDIN_TK_QUALITY_GOODS_v5:exp4\"],\"baseCategory\":{},\"isShowSum\":false}",
	"method": "POST",
	"mode": "cors",
	"credentials": "include"
  }).then(response => response.text())
  .then(data => {
	console.log('Response:', data);
  })
  .catch(error => {
	console.error('Request failed:', error);
  });;

console.log('end ....')


// 	,'accept': 'application/json, text/plain, */*'
// 	,'content-type': 'application/json'
// 	,'cookie': 'apdid=036c0e6c-30bd-423e-905d-f9bd0d076da6296fba81fa1c1434404e54d11fa44be8:1725595483:1; accessproxy_session=63ec7edc-255c-41cc-b153-668910c8f5d5; _did=web_47528501898C2DDF; hdige2wqwoino=FjyYeJw6ZP6jWziASXJnxmG8dK4HpmtA25326dc7; idp_theme_change_identification=2; tiangong_user_id=yinbowen; userToken=7SFHyqSmlCFGXsc6qisEyg==-yinbowen; userName=yinbowen; $$$$idp_theme_change_identificationcopy_test=2; kuaishouToken=5e1bd6c525e29535f8c064b2e304c5336c47d5c02e86efef167ff28c39f7ceb191c73141b0686631ab87537fce14a5f579f3b65a262b2d4ae4f339c4cd35a7a179487d448243a0d7badaade4d6bb09059bd8725467d3ee1b06ec05a7c58b7ccea908a9ccab9b526cc09982785495f098bba3a08b46f4ca16ce87292cc318505b74b9141676f02dea; _ga=GA1.1.2117444561.1725607809; _ga_F6CM1VE30P=GS1.1.1726129367.6.0.1726129367.0.0.0; JSESSIONID=3C085C7500A6AD0050C81E4588379FA4; abUser=yinbowen; abToken=df3fbf0deca938852c98aa87c4bd0457; ehid=1u2LDD_4Xsm5VyymruYDX9tLFoDXuRUAxB1m9'
// 	,'origin':'https://abtest.corp.kuaishou.com'
// 	,'platform-version': {"laneId":"abtest3"}
// 	,'sec-ch-ua-mobile': '?0'
// 	,'x-requested-with': 'XMLHttpRequest'
// 	,'referer': 'https://abtest.corp.kuaishou.com/abnew'
// 	,'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'




// {
// 	':authority': 'abtest.corp.kuaishou.com'
// 	,':path': '/rest/i/abtest/metricTemplate/abGroup/trendChart'
// 	,':scheme': 'https'
// 	,'accept-encoding':' gzip, deflate, br, zstd'
// 	,'accept-language': 'zh,zh-CN;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6'
// 	,'content-length': '807'

// }