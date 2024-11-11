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
      "x-requested-with": "XMLHttpRequest",
      "cookie":"apdid=036c0e6c-30bd-423e-905d-f9bd0d076da6296fba81fa1c1434404e54d11fa44be8:1725595483:1; accessproxy_session=63ec7edc-255c-41cc-b153-668910c8f5d5; _did=web_47528501898C2DDF; hdige2wqwoino=FjyYeJw6ZP6jWziASXJnxmG8dK4HpmtA25326dc7; idp_theme_change_identification=2; tiangong_user_id=yinbowen; userToken=7SFHyqSmlCFGXsc6qisEyg==-yinbowen; userName=yinbowen; $$$$idp_theme_change_identificationcopy_test=2; JSESSIONID=3C085C7500A6AD0050C81E4588379FA4; abUser=yinbowen; abToken=df3fbf0deca938852c98aa87c4bd0457; _gid=GA1.2.751373711.1726732379; _ga=GA1.1.2117444561.1725607809; _ga_F6CM1VE30P=GS1.1.1726742077.8.1.1726742084.0.0.0; ehid=9JQ9komJi_lhS4sEdZZ8kxRC7prezmhE-VU7d"
    },
    "referrer": "https://abtest.corp.kuaishou.com/abnew",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"startTime\":\"2024-06-11 00:00:00\",\"endTime\":\"2024-06-11 23:59:59\",\"needFillUp\":1,\"fromGroup\":[\"w_n_kuaishou_apps_did_2440:ALADDIN_TK_QUALITY_GOODS_v5:base\",\"w_n_kuaishou_apps_did_2440:ALADDIN_TK_QUALITY_GOODS_v5:exp1\"],\"pValue\":\"0.95\",\"world\":\"w_n_kuaishou_apps_did_2440\",\"experiment\":\"ALADDIN_TK_QUALITY_GOODS_v5\",\"metricId\":292272,\"chartType\":\"trend\",\"percentage\":true,\"aggregate\":true,\"baseColumn\":\"fromGroup\",\"granularity\":\"day\",\"useRankSum\":false,\"compareMethod\":1,\"produceTypes\":[2],\"queryType\":2,\"metricRankId\":0,\"configId\":\"search_merchant_did\",\"pageLabelId\":0,\"complexFilter\":{\"logicOp\":\"AND\",\"singleFilter\":[]},\"dimensions\":[],\"dimensionsCn\":[],\"isExpReport\":false,\"enterType\":\"NORMAL\",\"toGroup\":[\"w_n_kuaishou_apps_did_2440:ALADDIN_TK_QUALITY_GOODS_v5:exp4\"],\"baseCategory\":{},\"isShowSum\":false}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then(response => response.text())
  .then(data => {
    console.log('结果: ', data);
  });