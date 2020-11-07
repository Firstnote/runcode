// 解析url字符串

function parseUrl(url) {
	var api = "";
	var params = {};
	var urlList = url.split(/[?&]/);
	api = urlList[0].slice(1);
	if (urlList.length > 1) {
		for (var i = 1; i < urlList.length; i++) {
			var objStrList = urlList[i].split("=");
			if (objStrList.length == 2) {
				params[objStrList[0]] = objStrList[1];
			} else if (objStrList.length > 2) {
				let newObjStrList = objStrList.slice(1, objStrList.length);
				params[objStrList[0]] = newObjStrList.join("=");
			}
		}
	}
	return {
		api: api,
		params: params,
	};
}

let url =
	"/reqxml?action=27006&path=/forward&funcId=390091&mobileNo=15251481072&riskAnswer=1-2ACKQO9=1-2ACKQOA:1-2ACKQOF=1-2ACKQOG:1-2ACKQOL=1-2ACKQOM:1-2ACKQOQ=1-2ACKQOR:1-2ACKQOV=1-2ACLXN5:1-2ACLXN9=1-2ACLXNA:1-2ACLXNF=1-2ACLXNG:1-2ACLXNK=1-2ACLXNL:1-2ACLXNP=1-2ACLXNR:1-2ACLXNW=1-2ACLXNX:1-2ACLXO2=1-2ACLXO3:1-2ACLXO6=1-2ACLXO7:1-2ACLXOC=1-2ACLXOD:1-2ACLXOI=1-2ACLXOJ:1-2ACLXON=1-2ACLXOO:1-2ACLXOS=1-2ACLXOT:1-2ACLXP4=1-2ACLXP5:1-2ACLXP8=1-2ACLXP9:1-2ACLXPD=1-2ACLXPE:1-2ACLXOY=1-2ACLXOZ&investProductDesc=%E5%80%BA%E5%88%B8%E3%80%81%E8%B4%A7%E5%B8%81%E5%B8%82%E5%9C%BA%E5%9F%BA%E9%87%91%E3%80%81%E5%80%BA%E5%88%B8%E5%9F%BA%E9%87%91%E7%AD%89%E5%9B%BA%E5%AE%9A%E6%94%B6%E7%9B%8A%E7%B1%BB%E6%8A%95%E8%B5%84%E5%93%81%E7%A7%8D&TFrom=($tfrom)&ip=1";

console.log(parseUrl(url));
