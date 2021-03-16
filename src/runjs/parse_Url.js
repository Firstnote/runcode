function parseUrl(_url) {
  if (!!_url) {
    var url = "?" + _url.split("?")[1];
    var rt = {
      path: "/3g/get_channel_package",
      _routeCode: "6D169C2DF68A80DC82104789FC9AEE27",
      uuid: "",
    };
    // ?XXXXXX&a=1&b=12
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      var arr = str.split("&");
      if (arr.length > 0) {
        rt.uuid = arr[0];
        if (arr[0].indexOf("=") != -1) {
          rt.uuid = arr[0].split("=")[0];
        }
      }
      // 处理 bcdef 参数
      for (var i = 1; i < arr.length; i++) {
        var urlParm = arr[i];
        if (urlParm.split("=").length > 1) {
          if (urlParm.split("=")[0] == "b") {
            rt.b = urlParm.split("=")[1];
          }
          if (urlParm.split("=")[0] == "c") {
            rt.c = urlParm.split("=")[1];
          }
          if (urlParm.split("=")[0] == "d") {
            rt.d = urlParm.split("=")[1];
          }
          if (urlParm.split("=")[0] == "e") {
            rt.e = urlParm.split("=")[1];
          }
          if (urlParm.split("=")[0] == "f") {
            rt.f = urlParm.split("=")[1];
          }
        }
      }
    }
    return rt;
  } else {
    return null;
  }
}

const url =
  "http://ec2-52-83-78-73.cn-northwest-1.compute.amazonaws.com.cn/t?QvUbei&b=300164&c=SZACCOUNT";

console.log(parseUrl(url));
