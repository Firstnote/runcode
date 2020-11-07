/*! @preserve @jsc/bilibili-h5-player: 0.7.0-6c3a194 (2020-06-11T12:02:08.032Z) */
!(function (e, t) {
	if ("object" == typeof exports && "object" == typeof module)
		module.exports = t();
	else if ("function" == typeof define && define.amd) define([], t);
	else {
		var i = t();
		for (var n in i) ("object" == typeof exports ? exports : e)[n] = i[n];
	}
})(this, function () {
	return (function (e) {
		var t = {};
		function i(n) {
			if (t[n]) return t[n].exports;
			var o = (t[n] = {
				i: n,
				l: !1,
				exports: {},
			});
			return e[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
		}
		return (
			(i.m = e),
			(i.c = t),
			(i.d = function (e, t, n) {
				i.o(e, t) ||
					Object.defineProperty(e, t, {
						enumerable: !0,
						get: n,
					});
			}),
			(i.r = function (e) {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module",
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0,
					});
			}),
			(i.t = function (e, t) {
				if ((1 & t && (e = i(e)), 8 & t)) return e;
				if (4 & t && "object" == typeof e && e && e.__esModule) return e;
				var n = Object.create(null);
				if (
					(i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e,
					}),
					2 & t && "string" != typeof e)
				)
					for (var o in e)
						i.d(
							n,
							o,
							function (t) {
								return e[t];
							}.bind(null, o)
						);
				return n;
			}),
			(i.n = function (e) {
				var t =
					e && e.__esModule
						? function () {
								return e.default;
						  }
						: function () {
								return e;
						  };
				return i.d(t, "a", t), t;
			}),
			(i.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}),
			(i.p = ""),
			i((i.s = 171))
		);
	})([
		function (e, t, i) {
			function n(e) {
				return (n =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			var o = i(2),
				r = i(15).f,
				a = i(11),
				s = i(24),
				c = i(44),
				l = i(93),
				u = i(58);
			e.exports = function (e, t) {
				var i,
					p,
					d,
					f,
					h,
					m = e.target,
					y = e.global,
					v = e.stat;
				if ((i = y ? o : v ? o[m] || c(m, {}) : (o[m] || {}).prototype))
					for (p in t) {
						if (
							((f = t[p]),
							(d = e.noTargetGet ? (h = r(i, p)) && h.value : i[p]),
							!u(y ? p : m + (v ? "." : "#") + p, e.forced) && void 0 !== d)
						) {
							if (n(f) === n(d)) continue;
							l(f, d);
						}
						(e.sham || (d && d.sham)) && a(f, "sham", !0), s(i, p, f, e);
					}
			};
		},
		function (e, t) {
			e.exports = function (e) {
				try {
					return !!e();
				} catch (e) {
					return !0;
				}
			};
		},
		function (e, t) {
			function i(e) {
				return (i =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			var n = "object",
				o = function (e) {
					return e && e.Math == Math && e;
				};
			e.exports =
				o(
					("undefined" == typeof globalThis ? "undefined" : i(globalThis)) ==
						n && globalThis
				) ||
				o(
					("undefined" == typeof window ? "undefined" : i(window)) == n &&
						window
				) ||
				o(("undefined" == typeof self ? "undefined" : i(self)) == n && self) ||
				o(
					("undefined" == typeof global ? "undefined" : i(global)) == n &&
						global
				) ||
				Function("return this")();
		},
		function (e, t, i) {
			var n = i(1);
			e.exports = !n(function () {
				return (
					7 !=
					Object.defineProperty({}, "a", {
						get: function () {
							return 7;
						},
					}).a
				);
			});
		},
		function (e, t) {
			function i(e) {
				return (i =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			e.exports = function (e) {
				return "object" === i(e) ? null !== e : "function" == typeof e;
			};
		},
		function (e, t, i) {
			var n = i(2),
				o = i(25),
				r = i(37),
				a = i(59),
				s = n.Symbol,
				c = o("wks");
			e.exports = function (e) {
				return c[e] || (c[e] = (a && s[e]) || (a ? s : r)("Symbol." + e));
			};
		},
		function (e, t, i) {
			e.exports = i(153);
		},
		function (e, t, i) {
			"use strict";
			function n(e) {
				return (n =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			var o = i(76),
				r = i(154),
				a = Object.prototype.toString;
			function s(e) {
				return "[object Array]" === a.call(e);
			}
			function c(e) {
				return null !== e && "object" === n(e);
			}
			function l(e) {
				return "[object Function]" === a.call(e);
			}
			function u(e, t) {
				if (null != e)
					if (("object" !== n(e) && (e = [e]), s(e)))
						for (var i = 0, o = e.length; i < o; i++) t.call(null, e[i], i, e);
					else
						for (var r in e)
							Object.prototype.hasOwnProperty.call(e, r) &&
								t.call(null, e[r], r, e);
			}
			e.exports = {
				isArray: s,
				isArrayBuffer: function (e) {
					return "[object ArrayBuffer]" === a.call(e);
				},
				isBuffer: r,
				isFormData: function (e) {
					return "undefined" != typeof FormData && e instanceof FormData;
				},
				isArrayBufferView: function (e) {
					return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
						? ArrayBuffer.isView(e)
						: e && e.buffer && e.buffer instanceof ArrayBuffer;
				},
				isString: function (e) {
					return "string" == typeof e;
				},
				isNumber: function (e) {
					return "number" == typeof e;
				},
				isObject: c,
				isUndefined: function (e) {
					return void 0 === e;
				},
				isDate: function (e) {
					return "[object Date]" === a.call(e);
				},
				isFile: function (e) {
					return "[object File]" === a.call(e);
				},
				isBlob: function (e) {
					return "[object Blob]" === a.call(e);
				},
				isFunction: l,
				isStream: function (e) {
					return c(e) && l(e.pipe);
				},
				isURLSearchParams: function (e) {
					return (
						"undefined" != typeof URLSearchParams &&
						e instanceof URLSearchParams
					);
				},
				isStandardBrowserEnv: function () {
					return (
						("undefined" == typeof navigator ||
							("ReactNative" !== navigator.product &&
								"NativeScript" !== navigator.product &&
								"NS" !== navigator.product)) &&
						"undefined" != typeof window &&
						"undefined" != typeof document
					);
				},
				forEach: u,
				merge: function e() {
					var t = {};
					function i(i, o) {
						"object" === n(t[o]) && "object" === n(i)
							? (t[o] = e(t[o], i))
							: (t[o] = i);
					}
					for (var o = 0, r = arguments.length; o < r; o++) u(arguments[o], i);
					return t;
				},
				deepMerge: function e() {
					var t = {};
					function i(i, o) {
						"object" === n(t[o]) && "object" === n(i)
							? (t[o] = e(t[o], i))
							: "object" === n(i)
							? (t[o] = e({}, i))
							: (t[o] = i);
					}
					for (var o = 0, r = arguments.length; o < r; o++) u(arguments[o], i);
					return t;
				},
				extend: function (e, t, i) {
					return (
						u(t, function (t, n) {
							e[n] = i && "function" == typeof t ? o(t, i) : t;
						}),
						e
					);
				},
				trim: function (e) {
					return e.replace(/^\s*/, "").replace(/\s*$/, "");
				},
			};
		},
		function (e, t, i) {
			var n = i(3),
				o = i(54),
				r = i(12),
				a = i(19),
				s = Object.defineProperty;
			t.f = n
				? s
				: function (e, t, i) {
						if ((r(e), (t = a(t, !0)), r(i), o))
							try {
								return s(e, t, i);
							} catch (e) {}
						if ("get" in i || "set" in i)
							throw TypeError("Accessors not supported");
						return "value" in i && (e[t] = i.value), e;
				  };
		},
		function (e, t, i) {
			var n, o, r;
			function a(e) {
				return (a =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			(r = function () {
				"use strict";
				var e = (function () {
						function e(e, t) {
							for (var i = 0; i < t.length; i++) {
								var n = t[i];
								(n.enumerable = n.enumerable || !1),
									(n.configurable = !0),
									"value" in n && (n.writable = !0),
									Object.defineProperty(e, n.key, n);
							}
						}
						return function (t, i, n) {
							return i && e(t.prototype, i), n && e(t, n), t;
						};
					})(),
					t = (function () {
						function t() {
							!(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError("Cannot call a class as a function");
							})(this, t);
						}
						return (
							e(t, [
								{
									key: "setCookie",
									value: function (e, t) {
										var i = new Date();
										i.setTime(i.getTime() + 3e5),
											(document.cookie =
												e +
												"=" +
												escape(t) +
												";expires=" +
												i.toGMTString() +
												";domain=.bilibili.com;path=/");
									},
								},
								{
									key: "getCookie",
									value: function (e) {
										var t,
											i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
										return (t = document.cookie.match(i))
											? unescape(t[2])
											: null;
									},
								},
								{
									key: "getURLlist",
									value: function (e) {
										var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
											i = window.location.search.substr(1).match(t);
										return null != i ? unescape(i[2]) : null;
									},
								},
								{
									key: "set_param",
									value: function (e, t) {
										var i = location.search.substring(1),
											n = new RegExp("(^|&" + e + ")=[^&]*");
										return n.test(i)
											? "?" + (i = i.replace(n, "$1=" + t))
											: "" == i
											? "?" + e + "=" + t
											: "?" + i + "&" + e + "=" + t;
									},
								},
								{
									key: "changeURLform",
									value: function () {
										var e;
										if (
											(window.browser.version.iqiyi
												? (e = "iqiyi_video_app")
												: window.browser.version.weibo
												? (e = "weibo")
												: window.browser.version.QQLive && (e = "QQLive"),
											e && !this.getURLlist("bsource"))
										) {
											var t = this.set_param("bsource", e.toLowerCase());
											window.history &&
												history.replaceState &&
												history.replaceState(
													null,
													null,
													"//" +
														location.host +
														location.pathname +
														t +
														location.hash
												);
										}
									},
								},
								{
									key: "identify",
									value: function () {
										var e,
											t = this.getURLlist("bsource")
												? this.getURLlist("bsource").toLowerCase()
												: "";
										if (t) e = t;
										else if (
											document.referrer &&
											/(.)*((baike.so.com)|(m.so.com)|(m.image.so.com)|(m.video.so.com)|(www.so.com)|(\.baidu.com)|(\.google.com)|(\.sm.cn)|(m.soso.com)|(www.soso.com)|(\.sogou.com)|(\.bing.com))/.test(
												document.referrer
											)
										) {
											var i = document.referrer;
											/(.)*((baike.so.com)|(m.image.so.com)|(m.so.com)|(m.video.so.com)|(www.so.com))/.test(
												i
											)
												? (e = "seo_360")
												: /(.)*\.baidu.com/.test(i)
												? (e = "seo_baidu")
												: /(.)*\.google.com/.test(i)
												? (e = "seo_google")
												: /(.)*\.sm.cn/.test(i)
												? (e = "seo_sm")
												: /(.)*((m.soso.com)|(www.soso.com)|(\.sogou.com))/.test(
														i
												  )
												? (e = "seo_sougo")
												: /(.)*\.bing.com/.test(i) && (e = "seo_bing");
										} else
											this.getCookie("bsource")
												? (e = this.getCookie("bsource"))
												: window.browser.version.baiduspider
												? (e = "baiduspider")
												: window.browser.version.QQLive
												? (e = "qqlive")
												: window.browser.version.mqq
												? (e = "qq")
												: window.browser.version.weibo
												? (e = "weibo")
												: window.browser.version.MicroMessenger
												? (e = "wechat")
												: window.browser.version.mbaidu
												? (e = "bdbox")
												: window.browser.version.iqiyi
												? (e = "iqiyi_video_app")
												: window.browser.version.qq
												? (e = "qqbrowser_app")
												: window.browser.version.uc
												? (e = "uc_browser_app")
												: window.browser.version.xiaomiqjs
												? (e = "xiaomiqjs")
												: window.browser.version.dianpin && (e = "dianping");
										return e;
									},
								},
							]),
							t
						);
					})(),
					i = Object.freeze({
						default: t,
						__moduleExports: t,
					});
				function n() {
					var e = navigator.userAgent;
					return !(
						!/ OS \d/.test(e) ||
						~e.indexOf("CriOS") ||
						e.indexOf("Mozilla") ||
						!/Safari\/[\d\.]+$/.test(e)
					);
				}
				var o = function () {
						var e;
						window.browser = {
							version:
								((e = navigator.userAgent),
								navigator.appVersion,
								{
									mobile: /AppleWebKit.*Mobile.*/i.test(e),
									ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(e),
									android: /Android/i.test(e) || /Linux/i.test(e),
									windowsphone: /Windows Phone/i.test(e),
									iPhone: /iPhone/i.test(e),
									iPad: /iPad/i.test(e),
									webApp: !/Safari/i.test(e),
									MicroMessenger: /MicroMessenger/i.test(e),
									weibo: /Weibo/i.test(e),
									uc: /UCBrowser/i.test(e),
									qq: /MQQBrowser/i.test(e),
									baidu: /Baidu/i.test(e),
									mqq: /QQ\/([\d\.]+)/i.test(e),
									mbaidu: /baiduboxapp/i.test(e),
									iqiyi: /iqiyi/i.test(e),
									QQLive: /QQLive/i.test(e),
									Safari: n(),
									Youku: /youku/i.test(e),
									chrome: /CriOS/i.test(e),
									CMDC: /CMDC/i.test(e),
									BiliApp: /BiliApp/i.test(e),
									xiaomiqjs: /MiuiQuickSearchBox/.test(e),
									baiduspider: /Baiduspider/.test(e),
									dianping: /dianping/.test(e),
								}),
							language: (
								navigator.browserLanguage || navigator.language
							).toLowerCase(),
						};
					},
					r = Object.freeze({
						default: o,
						__moduleExports: o,
					}),
					a = (r && o) || r,
					s = new ((i && t) || i)();
				function c(e, t, i, n) {
					e &&
						t &&
						(n
							? (i &&
									(new Date().getTime(),
									setTimeout(function () {
										document.hidden || (location.href = t);
									}, 2e3)),
							  (location.href = e))
							: (i &&
									setTimeout(function () {
										location.href = t;
									}, 500),
							  (location.href = e)));
				}
				return (
					"function" != typeof Object.assign &&
						Object.defineProperty(Object, "assign", {
							value: function (e, t) {
								if (null == e)
									throw new TypeError(
										"Cannot convert undefined or null to object"
									);
								for (var i = Object(e), n = 1; n < arguments.length; n++) {
									var o = arguments[n];
									if (null != o)
										for (var r in o)
											Object.prototype.hasOwnProperty.call(o, r) &&
												(i[r] = o[r]);
								}
								return i;
							},
							writable: !0,
							configurable: !0,
						}),
					Object.assign(s, {
						openApp: function (e) {
							var t,
								i = (e = e || {}),
								n = i.schema,
								o = i.universalLink,
								r = i.autoDownload,
								a = i.onlySchema,
								s = i.directDownload,
								l = i.isAbTest,
								u = i.delayDownload,
								p = i.downloadUrl;
							if (
								((n = n || "bilibili://rank/rank"),
								(o = o || "http://m.bilibili.com/index.html"),
								window.browser.version.BiliApp)
							)
								location.href = n;
							else {
								!1 === r || r || (r = !0);
								var d =
									p ||
									(function (e, t, i, n) {
										var o;
										return (
											browser.version.MicroMessenger
												? (o = i
														? "//a.app.qq.com/o/simple.jsp?pkgname=tv.danmaku.bili&ckey=CK1390582495291"
														: "app_bili" === window.bsource
														? "//a.app.qq.com/o/simple.jsp?pkgname=tv.danmaku.bili&ckey=CK1389719810898"
														: browser.version.android
														? "//a.app.qq.com/o/simple.jsp?pkgname=tv.danmaku.bili&ckey=CK1385399615180&android_schema=" +
														  encodeURIComponent(e)
														: "//a.app.qq.com/o/simple.jsp?pkgname=tv.danmaku.bili&ckey=CK1385399615180")
												: browser.version.android
												? ((o = window.isOverSea
														? "//dl.hdslb.com/mobile/upload/iBiliPlayer-internation-default.apk"
														: "bdts" === window.bsource
														? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_bdts.apk"
														: "baidu_aladdin" === window.bsource
														? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_baidu_aladdin.apk"
														: browser.version.weibo ||
														  window.WeiboJSBridge ||
														  window.WebViewJavascriptBridge ||
														  window.__WeiboJSBridge
														? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_weibo.apk"
														: browser.version.baidu ||
														  window.bd_searchbox_interface ||
														  window.bdbox_android_common
														? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_bdbox.apk"
														: (browser.version.uc ||
																window.ucbrowser ||
																window.ucapi) &&
														  document.referrer &&
														  document.referrer.indexOf("tv.uc.cn") >= 0
														? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_uc_video.apk"
														: "QQLive" === window.bsource ||
														  "qqlive" === window.bsource
														? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_qqlive.apk"
														: window.bsource
														? window.bsource.indexOf("seo") >= 0
															? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_seo.apk"
															: "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_" +
															  encodeURIComponent(window.bsource) +
															  ".apk"
														: i
														? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_bilih5.apk"
														: "//dl.hdslb.com/mobile/latest/iBiliPlayer-bilih5.apk"),
												  browser.version.qq && (o = "https:" + o),
												  t ||
														n ||
														(o =
															"http://d.bilibili.com/download_app.html?download_url=" +
															encodeURIComponent(o) +
															"&schema=" +
															encodeURIComponent(e)))
												: browser.version.ios
												? ((o =
														"https://itunes.apple.com/cn/app/bi-li-bi-li-dong-hua/id736536022"),
												  (browser.version.weibo || browser.version.chrome) &&
														(o =
															"https://itunes.apple.com/cn/app/id736536022?mt=8#id1047562725"),
												  t ||
														(o =
															"http://d.bilibili.com/download_app.html?download_url=" +
															encodeURIComponent(o) +
															"&schema=" +
															encodeURIComponent(e)))
												: browser.version.windowsphone &&
												  (o =
														"https://www.windowsphone.com/zh-cn/store/purchase/validate?app=75620dee-4a7a-4dae-8677-0d930e05f57e&apptype=regular&offer=3869edb1-e34c-469a-af6e-2c8a7856cb61"),
											o
										);
									})(n, s, l, u);
								(d.indexOf(".apk") > 0 ||
									d.indexOf("d.bilibili.com") > 0 ||
									d.indexOf("app.qq.com") > 0) &&
									window.reportMsgObj &&
									window.reportObserver &&
									((window.reportMsgObj.request_download = 1),
									window.reportObserver.forceCommit()),
									browser.version.android && browser.version.MicroMessenger
										? (location.href = d)
										: browser.version.ios
										? ((t = navigator.appVersion.match(/os [\d._]*/gi)) &&
												(t = (t = t
													.join(",")
													.replace(/[^0-9|_.]/gi, "")).replace(
													/_[0-9]*/gi,
													""
												)),
										  t &&
										  Number(t) >= 9 &&
										  !window.browser.version.qq &&
										  !a &&
										  !s
												? (location.href =
														"http://d.bilibili.com/download_app.html?preUrl=" +
														encodeURIComponent(o) +
														"&schema=" +
														encodeURIComponent(n))
												: c(n, d, r, u))
										: c(n, d, r, u);
							}
						},
						judgeOverSea: function () {
							var e = new XMLHttpRequest();
							(e.onreadystatechange = function (e) {
								if (4 === this.readyState && 200 === this.status) {
									var t = JSON.parse(this.response);
									0 === t.code &&
										t.data &&
										t.data.country &&
										"中国" !== t.data.country &&
										(window.isOverSea = !0);
								}
							}),
								(e.onerror = function () {}),
								(e.ontimeout = function () {}),
								e.open(
									"GET",
									"//api.bilibili.com/x/web-interface/zone?jsonp=jsonp"
								),
								e.send();
						},
						init: function (e) {
							var t = (e = e || {}).changeURL;
							a(),
								window.bsource ||
									((window.bsource = s.identify()),
									window.bsource && s.setCookie("bsource", window.bsource)),
								t && s.changeURLform();
						},
						autoOpen: function (e) {
							var t = (e = e || {}),
								i = t.id,
								n = t.type;
							if (
								!(
									[
										"seo",
										"Tencent_yyb",
										"wechat",
										"iqiyi_video_app",
										"bdbox",
										"qq",
										"weibo",
										"dianping",
									].indexOf(window.bsource) >= 0
								)
							)
								switch (n) {
									case "video":
										window.reportMsgObj &&
											window.reportObserver &&
											((window.reportMsgObj.click = "video" + i + "AutoOpen"),
											window.reportObserver.forceCommit());
										var o = s.getCookie("buvid3"),
											r = encodeURIComponent(
												btoa(
													"pvid=" +
														o +
														"_" +
														i +
														"_" +
														new Date().getTime() +
														"&ua=" +
														encodeURIComponent(window.navigator.userAgent) +
														"&isAutoOpen=true&bsource=" +
														window.bsource
												)
											);
										location.href = "bilibili://video/" + i + "?h5awaken=" + r;
										break;
									case "article":
										window.reportMsgObj &&
											window.reportObserver &&
											((window.reportMsgObj.click = "article" + i + "AutoOpen"),
											window.reportObserver.forceCommit()),
											(location.href = "bilibili://article/" + i);
										break;
									default:
										location.href = "bilibili://rank/rank";
								}
						},
					})
				);
			}),
				"object" === a(t) && void 0 !== e
					? (e.exports = r())
					: void 0 ===
							(o = "function" == typeof (n = r) ? n.call(t, i, t, e) : n) ||
					  (e.exports = o);
		},
		function (e, t) {
			var i = {}.hasOwnProperty;
			e.exports = function (e, t) {
				return i.call(e, t);
			};
		},
		function (e, t, i) {
			var n = i(3),
				o = i(8),
				r = i(17);
			e.exports = n
				? function (e, t, i) {
						return o.f(e, t, r(1, i));
				  }
				: function (e, t, i) {
						return (e[t] = i), e;
				  };
		},
		function (e, t, i) {
			var n = i(4);
			e.exports = function (e) {
				if (!n(e)) throw TypeError(String(e) + " is not an object");
				return e;
			};
		},
		function (e, t, i) {
			var n = i(42);
			e.exports = function (e) {
				return Object(n(e));
			};
		},
		function (e, t, i) {
			var n = i(41),
				o = i(42);
			e.exports = function (e) {
				return n(o(e));
			};
		},
		function (e, t, i) {
			var n = i(3),
				o = i(35),
				r = i(17),
				a = i(14),
				s = i(19),
				c = i(10),
				l = i(54),
				u = Object.getOwnPropertyDescriptor;
			t.f = n
				? u
				: function (e, t) {
						if (((e = a(e)), (t = s(t, !0)), l))
							try {
								return u(e, t);
							} catch (e) {}
						if (c(e, t)) return r(!o.f.call(e, t), e[t]);
				  };
		},
		function (e, t) {
			e.exports = function (e) {
				if ("function" != typeof e)
					throw TypeError(String(e) + " is not a function");
				return e;
			};
		},
		function (e, t) {
			e.exports = function (e, t) {
				return {
					enumerable: !(1 & e),
					configurable: !(2 & e),
					writable: !(4 & e),
					value: t,
				};
			};
		},
		function (e, t) {
			var i = {}.toString;
			e.exports = function (e) {
				return i.call(e).slice(8, -1);
			};
		},
		function (e, t, i) {
			var n = i(4);
			e.exports = function (e, t) {
				if (!n(e)) return e;
				var i, o;
				if (t && "function" == typeof (i = e.toString) && !n((o = i.call(e))))
					return o;
				if ("function" == typeof (i = e.valueOf) && !n((o = i.call(e))))
					return o;
				if (!t && "function" == typeof (i = e.toString) && !n((o = i.call(e))))
					return o;
				throw TypeError("Can't convert object to primitive value");
			};
		},
		function (e, t) {
			e.exports = !1;
		},
		function (e, t, i) {
			var n = i(28),
				o = i(2),
				r = function (e) {
					return "function" == typeof e ? e : void 0;
				};
			e.exports = function (e, t) {
				return arguments.length < 2
					? r(n[e]) || r(o[e])
					: (n[e] && n[e][t]) || (o[e] && o[e][t]);
			};
		},
		function (e, t, i) {
			var n = i(8).f,
				o = i(10),
				r = i(5)("toStringTag");
			e.exports = function (e, t, i) {
				e &&
					!o((e = i ? e : e.prototype), r) &&
					n(e, r, {
						configurable: !0,
						value: t,
					});
			};
		},
		function (e, t, i) {
			var n = i(10),
				o = i(13),
				r = i(36),
				a = i(68),
				s = r("IE_PROTO"),
				c = Object.prototype;
			e.exports = a
				? Object.getPrototypeOf
				: function (e) {
						return (
							(e = o(e)),
							n(e, s)
								? e[s]
								: "function" == typeof e.constructor &&
								  e instanceof e.constructor
								? e.constructor.prototype
								: e instanceof Object
								? c
								: null
						);
				  };
		},
		function (e, t, i) {
			var n = i(2),
				o = i(25),
				r = i(11),
				a = i(10),
				s = i(44),
				c = i(55),
				l = i(26),
				u = l.get,
				p = l.enforce,
				d = String(c).split("toString");
			o("inspectSource", function (e) {
				return c.call(e);
			}),
				(e.exports = function (e, t, i, o) {
					var c = !!o && !!o.unsafe,
						l = !!o && !!o.enumerable,
						u = !!o && !!o.noTargetGet;
					"function" == typeof i &&
						("string" != typeof t || a(i, "name") || r(i, "name", t),
						(p(i).source = d.join("string" == typeof t ? t : ""))),
						e !== n
							? (c ? !u && e[t] && (l = !0) : delete e[t],
							  l ? (e[t] = i) : r(e, t, i))
							: l
							? (e[t] = i)
							: s(t, i);
				})(Function.prototype, "toString", function () {
					return ("function" == typeof this && u(this).source) || c.call(this);
				});
		},
		function (e, t, i) {
			var n = i(2),
				o = i(44),
				r = i(20),
				a = n["__core-js_shared__"] || o("__core-js_shared__", {});
			(e.exports = function (e, t) {
				return a[e] || (a[e] = void 0 !== t ? t : {});
			})("versions", []).push({
				version: "3.1.3",
				mode: r ? "pure" : "global",
				copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
			});
		},
		function (e, t, i) {
			var n,
				o,
				r,
				a = i(92),
				s = i(2),
				c = i(4),
				l = i(11),
				u = i(10),
				p = i(36),
				d = i(27),
				f = s.WeakMap;
			if (a) {
				var h = new f(),
					m = h.get,
					y = h.has,
					v = h.set;
				(n = function (e, t) {
					return v.call(h, e, t), t;
				}),
					(o = function (e) {
						return m.call(h, e) || {};
					}),
					(r = function (e) {
						return y.call(h, e);
					});
			} else {
				var b = p("state");
				(d[b] = !0),
					(n = function (e, t) {
						return l(e, b, t), t;
					}),
					(o = function (e) {
						return u(e, b) ? e[b] : {};
					}),
					(r = function (e) {
						return u(e, b);
					});
			}
			e.exports = {
				set: n,
				get: o,
				has: r,
				enforce: function (e) {
					return r(e) ? o(e) : n(e, {});
				},
				getterFor: function (e) {
					return function (t) {
						var i;
						if (!c(t) || (i = o(t)).type !== e)
							throw TypeError("Incompatible receiver, " + e + " required");
						return i;
					};
				},
			};
		},
		function (e, t) {
			e.exports = {};
		},
		function (e, t, i) {
			e.exports = i(2);
		},
		function (e, t, i) {
			var n = i(12),
				o = i(61),
				r = i(48),
				a = i(27),
				s = i(62),
				c = i(43),
				l = i(36)("IE_PROTO"),
				u = function () {},
				p = function () {
					var e,
						t = c("iframe"),
						i = r.length;
					for (
						t.style.display = "none",
							s.appendChild(t),
							t.src = String("javascript:"),
							(e = t.contentWindow.document).open(),
							e.write("<script>document.F=Object</script>"),
							e.close(),
							p = e.F;
						i--;

					)
						delete p.prototype[r[i]];
					return p();
				};
			(e.exports =
				Object.create ||
				function (e, t) {
					var i;
					return (
						null !== e
							? ((u.prototype = n(e)),
							  (i = new u()),
							  (u.prototype = null),
							  (i[l] = e))
							: (i = p()),
						void 0 === t ? i : o(i, t)
					);
				}),
				(a[l] = !0);
		},
		function (e, t, i) {
			var n = i(57),
				o = i(48);
			e.exports =
				Object.keys ||
				function (e) {
					return n(e, o);
				};
		},
		function (e, t, i) {
			var n = i(12),
				o = i(107),
				r = i(46),
				a = i(50),
				s = i(108),
				c = i(109),
				l = function (e, t) {
					(this.stopped = e), (this.result = t);
				};
			(e.exports = function (e, t, i, u, p) {
				var d,
					f,
					h,
					m,
					y,
					v,
					b = a(t, i, u ? 2 : 1);
				if (p) d = e;
				else {
					if ("function" != typeof (f = s(e)))
						throw TypeError("Target is not iterable");
					if (o(f)) {
						for (h = 0, m = r(e.length); m > h; h++)
							if (
								(y = u ? b(n((v = e[h]))[0], v[1]) : b(e[h])) &&
								y instanceof l
							)
								return y;
						return new l(!1);
					}
					d = f.call(e);
				}
				for (; !(v = d.next()).done; )
					if ((y = c(d, b, v.value, u)) && y instanceof l) return y;
				return new l(!1);
			}).stop = function (e) {
				return new l(!0, e);
			};
		},
		function (e, t) {
			e.exports = {};
		},
		function (e, t, i) {
			"use strict";
			var n = i(16),
				o = function (e) {
					var t, i;
					(this.promise = new e(function (e, n) {
						if (void 0 !== t || void 0 !== i)
							throw TypeError("Bad Promise constructor");
						(t = e), (i = n);
					})),
						(this.resolve = n(t)),
						(this.reject = n(i));
				};
			e.exports.f = function (e) {
				return new o(e);
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(169),
				o = i(170),
				r = i(84);
			e.exports = {
				formats: r,
				parse: o,
				stringify: n,
			};
		},
		function (e, t, i) {
			"use strict";
			var n = {}.propertyIsEnumerable,
				o = Object.getOwnPropertyDescriptor,
				r =
					o &&
					!n.call(
						{
							1: 2,
						},
						1
					);
			t.f = r
				? function (e) {
						var t = o(this, e);
						return !!t && t.enumerable;
				  }
				: n;
		},
		function (e, t, i) {
			var n = i(25),
				o = i(37),
				r = n("keys");
			e.exports = function (e) {
				return r[e] || (r[e] = o(e));
			};
		},
		function (e, t) {
			var i = 0,
				n = Math.random();
			e.exports = function (e) {
				return (
					"Symbol(" +
					String(void 0 === e ? "" : e) +
					")_" +
					(++i + n).toString(36)
				);
			};
		},
		function (e, t, i) {
			var n = i(1);
			e.exports = !n(function () {
				return Object.isExtensible(Object.preventExtensions({}));
			});
		},
		function (e, t, i) {
			"use strict";
			var n = i(20),
				o = i(2),
				r = i(1);
			e.exports =
				n ||
				!r(function () {
					var e = Math.random();
					__defineSetter__.call(null, e, function () {}), delete o[e];
				});
		},
		function (e, t) {
			e.exports = function (e) {
				try {
					return {
						error: !1,
						value: e(),
					};
				} catch (e) {
					return {
						error: !0,
						value: e,
					};
				}
			};
		},
		function (e, t, i) {
			var n = i(1),
				o = i(18),
				r = "".split;
			e.exports = n(function () {
				return !Object("z").propertyIsEnumerable(0);
			})
				? function (e) {
						return "String" == o(e) ? r.call(e, "") : Object(e);
				  }
				: Object;
		},
		function (e, t) {
			e.exports = function (e) {
				if (null == e) throw TypeError("Can't call method on " + e);
				return e;
			};
		},
		function (e, t, i) {
			var n = i(2),
				o = i(4),
				r = n.document,
				a = o(r) && o(r.createElement);
			e.exports = function (e) {
				return a ? r.createElement(e) : {};
			};
		},
		function (e, t, i) {
			var n = i(2),
				o = i(11);
			e.exports = function (e, t) {
				try {
					o(n, e, t);
				} catch (i) {
					n[e] = t;
				}
				return t;
			};
		},
		function (e, t, i) {
			var n = i(57),
				o = i(48).concat("length", "prototype");
			t.f =
				Object.getOwnPropertyNames ||
				function (e) {
					return n(e, o);
				};
		},
		function (e, t, i) {
			var n = i(47),
				o = Math.min;
			e.exports = function (e) {
				return e > 0 ? o(n(e), 9007199254740991) : 0;
			};
		},
		function (e, t) {
			var i = Math.ceil,
				n = Math.floor;
			e.exports = function (e) {
				return isNaN((e = +e)) ? 0 : (e > 0 ? n : i)(e);
			};
		},
		function (e, t) {
			e.exports = [
				"constructor",
				"hasOwnProperty",
				"isPrototypeOf",
				"propertyIsEnumerable",
				"toLocaleString",
				"toString",
				"valueOf",
			];
		},
		function (e, t) {
			t.f = Object.getOwnPropertySymbols;
		},
		function (e, t, i) {
			var n = i(16);
			e.exports = function (e, t, i) {
				if ((n(e), void 0 === t)) return e;
				switch (i) {
					case 0:
						return function () {
							return e.call(t);
						};
					case 1:
						return function (i) {
							return e.call(t, i);
						};
					case 2:
						return function (i, n) {
							return e.call(t, i, n);
						};
					case 3:
						return function (i, n, o) {
							return e.call(t, i, n, o);
						};
				}
				return function () {
					return e.apply(t, arguments);
				};
			};
		},
		function (e, t, i) {
			function n(e) {
				return (n =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			var o = i(27),
				r = i(4),
				a = i(10),
				s = i(8).f,
				c = i(37),
				l = i(38),
				u = c("meta"),
				p = 0,
				d =
					Object.isExtensible ||
					function () {
						return !0;
					},
				f = function (e) {
					s(e, u, {
						value: {
							objectID: "O" + ++p,
							weakData: {},
						},
					});
				},
				h = (e.exports = {
					REQUIRED: !1,
					fastKey: function (e, t) {
						if (!r(e))
							return "symbol" == n(e)
								? e
								: ("string" == typeof e ? "S" : "P") + e;
						if (!a(e, u)) {
							if (!d(e)) return "F";
							if (!t) return "E";
							f(e);
						}
						return e[u].objectID;
					},
					getWeakData: function (e, t) {
						if (!a(e, u)) {
							if (!d(e)) return !0;
							if (!t) return !1;
							f(e);
						}
						return e[u].weakData;
					},
					onFreeze: function (e) {
						return l && h.REQUIRED && d(e) && !a(e, u) && f(e), e;
					},
				});
			o[u] = !0;
		},
		function (e, t, i) {
			var n = i(12),
				o = i(123);
			e.exports =
				Object.setPrototypeOf ||
				("__proto__" in {}
					? (function () {
							var e,
								t = !1,
								i = {};
							try {
								(e = Object.getOwnPropertyDescriptor(
									Object.prototype,
									"__proto__"
								).set).call(i, []),
									(t = i instanceof Array);
							} catch (e) {}
							return function (i, r) {
								return n(i), o(r), t ? e.call(i, r) : (i.__proto__ = r), i;
							};
					  })()
					: void 0);
		},
		function (e, t, i) {
			"use strict";
			function n(e) {
				return (n =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			var o = Object.prototype.hasOwnProperty,
				r = Array.isArray,
				a = (function () {
					for (var e = [], t = 0; t < 256; ++t)
						e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
					return e;
				})(),
				s = function (e, t) {
					for (
						var i = t && t.plainObjects ? Object.create(null) : {}, n = 0;
						n < e.length;
						++n
					)
						void 0 !== e[n] && (i[n] = e[n]);
					return i;
				};
			e.exports = {
				arrayToObject: s,
				assign: function (e, t) {
					return Object.keys(t).reduce(function (e, i) {
						return (e[i] = t[i]), e;
					}, e);
				},
				combine: function (e, t) {
					return [].concat(e, t);
				},
				compact: function (e) {
					for (
						var t = [
								{
									obj: {
										o: e,
									},
									prop: "o",
								},
							],
							i = [],
							o = 0;
						o < t.length;
						++o
					)
						for (
							var a = t[o], s = a.obj[a.prop], c = Object.keys(s), l = 0;
							l < c.length;
							++l
						) {
							var u = c[l],
								p = s[u];
							"object" === n(p) &&
								null !== p &&
								-1 === i.indexOf(p) &&
								(t.push({
									obj: s,
									prop: u,
								}),
								i.push(p));
						}
					return (
						(function (e) {
							for (; e.length > 1; ) {
								var t = e.pop(),
									i = t.obj[t.prop];
								if (r(i)) {
									for (var n = [], o = 0; o < i.length; ++o)
										void 0 !== i[o] && n.push(i[o]);
									t.obj[t.prop] = n;
								}
							}
						})(t),
						e
					);
				},
				decode: function (e, t, i) {
					var n = e.replace(/\+/g, " ");
					if ("iso-8859-1" === i) return n.replace(/%[0-9a-f]{2}/gi, unescape);
					try {
						return decodeURIComponent(n);
					} catch (e) {
						return n;
					}
				},
				encode: function (e, t, i) {
					if (0 === e.length) return e;
					var o = e;
					if (
						("symbol" === n(e)
							? (o = Symbol.prototype.toString.call(e))
							: "string" != typeof e && (o = String(e)),
						"iso-8859-1" === i)
					)
						return escape(o).replace(/%u[0-9a-f]{4}/gi, function (e) {
							return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
						});
					for (var r = "", s = 0; s < o.length; ++s) {
						var c = o.charCodeAt(s);
						45 === c ||
						46 === c ||
						95 === c ||
						126 === c ||
						(c >= 48 && c <= 57) ||
						(c >= 65 && c <= 90) ||
						(c >= 97 && c <= 122)
							? (r += o.charAt(s))
							: c < 128
							? (r += a[c])
							: c < 2048
							? (r += a[192 | (c >> 6)] + a[128 | (63 & c)])
							: c < 55296 || c >= 57344
							? (r +=
									a[224 | (c >> 12)] +
									a[128 | ((c >> 6) & 63)] +
									a[128 | (63 & c)])
							: ((s += 1),
							  (c = 65536 + (((1023 & c) << 10) | (1023 & o.charCodeAt(s)))),
							  (r +=
									a[240 | (c >> 18)] +
									a[128 | ((c >> 12) & 63)] +
									a[128 | ((c >> 6) & 63)] +
									a[128 | (63 & c)]));
					}
					return r;
				},
				isBuffer: function (e) {
					return (
						!(!e || "object" !== n(e)) &&
						!!(
							e.constructor &&
							e.constructor.isBuffer &&
							e.constructor.isBuffer(e)
						)
					);
				},
				isRegExp: function (e) {
					return "[object RegExp]" === Object.prototype.toString.call(e);
				},
				maybeMap: function (e, t) {
					if (r(e)) {
						for (var i = [], n = 0; n < e.length; n += 1) i.push(t(e[n]));
						return i;
					}
					return t(e);
				},
				merge: function e(t, i, a) {
					if (!i) return t;
					if ("object" !== n(i)) {
						if (r(t)) t.push(i);
						else {
							if (!t || "object" !== n(t)) return [t, i];
							((a && (a.plainObjects || a.allowPrototypes)) ||
								!o.call(Object.prototype, i)) &&
								(t[i] = !0);
						}
						return t;
					}
					if (!t || "object" !== n(t)) return [t].concat(i);
					var c = t;
					return (
						r(t) && !r(i) && (c = s(t, a)),
						r(t) && r(i)
							? (i.forEach(function (i, r) {
									if (o.call(t, r)) {
										var s = t[r];
										s && "object" === n(s) && i && "object" === n(i)
											? (t[r] = e(s, i, a))
											: t.push(i);
									} else t[r] = i;
							  }),
							  t)
							: Object.keys(i).reduce(function (t, n) {
									var r = i[n];
									return o.call(t, n) ? (t[n] = e(t[n], r, a)) : (t[n] = r), t;
							  }, c)
					);
				},
			};
		},
		function (e, t, i) {
			var n = i(3),
				o = i(1),
				r = i(43);
			e.exports =
				!n &&
				!o(function () {
					return (
						7 !=
						Object.defineProperty(r("div"), "a", {
							get: function () {
								return 7;
							},
						}).a
					);
				});
		},
		function (e, t, i) {
			var n = i(25);
			e.exports = n("native-function-to-string", Function.toString);
		},
		function (e, t, i) {
			var n = i(21),
				o = i(45),
				r = i(49),
				a = i(12);
			e.exports =
				n("Reflect", "ownKeys") ||
				function (e) {
					var t = o.f(a(e)),
						i = r.f;
					return i ? t.concat(i(e)) : t;
				};
		},
		function (e, t, i) {
			var n = i(10),
				o = i(14),
				r = i(94).indexOf,
				a = i(27);
			e.exports = function (e, t) {
				var i,
					s = o(e),
					c = 0,
					l = [];
				for (i in s) !n(a, i) && n(s, i) && l.push(i);
				for (; t.length > c; ) n(s, (i = t[c++])) && (~r(l, i) || l.push(i));
				return l;
			};
		},
		function (e, t, i) {
			var n = i(1),
				o = /#|\.prototype\./,
				r = function (e, t) {
					var i = s[a(e)];
					return i == l || (i != c && ("function" == typeof t ? n(t) : !!t));
				},
				a = (r.normalize = function (e) {
					return String(e).replace(o, ".").toLowerCase();
				}),
				s = (r.data = {}),
				c = (r.NATIVE = "N"),
				l = (r.POLYFILL = "P");
			e.exports = r;
		},
		function (e, t, i) {
			var n = i(1);
			e.exports =
				!!Object.getOwnPropertySymbols &&
				!n(function () {
					return !String(Symbol());
				});
		},
		function (e, t, i) {
			var n = i(18);
			e.exports =
				Array.isArray ||
				function (e) {
					return "Array" == n(e);
				};
		},
		function (e, t, i) {
			var n = i(3),
				o = i(8),
				r = i(12),
				a = i(30);
			e.exports = n
				? Object.defineProperties
				: function (e, t) {
						r(e);
						for (var i, n = a(t), s = n.length, c = 0; s > c; )
							o.f(e, (i = n[c++]), t[i]);
						return e;
				  };
		},
		function (e, t, i) {
			var n = i(21);
			e.exports = n("document", "documentElement");
		},
		function (e, t, i) {
			function n(e) {
				return (n =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			var o = i(14),
				r = i(45).f,
				a = {}.toString,
				s =
					"object" ==
						("undefined" == typeof window ? "undefined" : n(window)) &&
					window &&
					Object.getOwnPropertyNames
						? Object.getOwnPropertyNames(window)
						: [];
			e.exports.f = function (e) {
				return s && "[object Window]" == a.call(e)
					? (function (e) {
							try {
								return r(e);
							} catch (e) {
								return s.slice();
							}
					  })(e)
					: r(o(e));
			};
		},
		function (e, t, i) {
			t.f = i(5);
		},
		function (e, t, i) {
			var n = i(3),
				o = i(30),
				r = i(14),
				a = i(35).f,
				s = function (e) {
					return function (t) {
						for (
							var i, s = r(t), c = o(s), l = c.length, u = 0, p = [];
							l > u;

						)
							(i = c[u++]),
								(n && !a.call(s, i)) || p.push(e ? [i, s[i]] : s[i]);
						return p;
					};
				};
			e.exports = {
				entries: s(!0),
				values: s(!1),
			};
		},
		function (e, t, i) {
			var n = i(18),
				o = i(5)("toStringTag"),
				r =
					"Arguments" ==
					n(
						(function () {
							return arguments;
						})()
					);
			e.exports = function (e) {
				var t, i, a;
				return void 0 === e
					? "Undefined"
					: null === e
					? "Null"
					: "string" ==
					  typeof (i = (function (e, t) {
							try {
								return e[t];
							} catch (e) {}
					  })((t = Object(e)), o))
					? i
					: r
					? n(t)
					: "Object" == (a = n(t)) && "function" == typeof t.callee
					? "Arguments"
					: a;
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(19),
				o = i(8),
				r = i(17);
			e.exports = function (e, t, i) {
				var a = n(t);
				a in e ? o.f(e, a, r(0, i)) : (e[a] = i);
			};
		},
		function (e, t, i) {
			var n = i(1);
			e.exports = !n(function () {
				function e() {}
				return (
					(e.prototype.constructor = null),
					Object.getPrototypeOf(new e()) !== e.prototype
				);
			});
		},
		function (e, t, i) {
			var n = i(24),
				o = i(125),
				r = Object.prototype;
			o !== r.toString &&
				n(r, "toString", o, {
					unsafe: !0,
				});
		},
		function (e, t, i) {
			"use strict";
			var n = i(0),
				o = i(136),
				r = i(23),
				a = i(52),
				s = i(22),
				c = i(11),
				l = i(24),
				u = i(5),
				p = i(20),
				d = i(32),
				f = i(71),
				h = f.IteratorPrototype,
				m = f.BUGGY_SAFARI_ITERATORS,
				y = u("iterator"),
				v = function () {
					return this;
				};
			e.exports = function (e, t, i, u, f, b, g) {
				o(i, t, u);
				var w,
					x,
					_,
					k = function (e) {
						if (e === f && D) return D;
						if (!m && e in O) return O[e];
						switch (e) {
							case "keys":
							case "values":
							case "entries":
								return function () {
									return new i(this, e);
								};
						}
						return function () {
							return new i(this);
						};
					},
					S = t + " Iterator",
					E = !1,
					O = e.prototype,
					A = O[y] || O["@@iterator"] || (f && O[f]),
					D = (!m && A) || k(f),
					T = ("Array" == t && O.entries) || A;
				if (
					(T &&
						((w = r(T.call(new e()))),
						h !== Object.prototype &&
							w.next &&
							(p ||
								r(w) === h ||
								(a ? a(w, h) : "function" != typeof w[y] && c(w, y, v)),
							s(w, S, !0, !0),
							p && (d[S] = v))),
					"values" == f &&
						A &&
						"values" !== A.name &&
						((E = !0),
						(D = function () {
							return A.call(this);
						})),
					(p && !g) || O[y] === D || c(O, y, D),
					(d[t] = D),
					f)
				)
					if (
						((x = {
							values: k("values"),
							keys: b ? D : k("keys"),
							entries: k("entries"),
						}),
						g)
					)
						for (_ in x) (m || E || !(_ in O)) && l(O, _, x[_]);
					else
						n(
							{
								target: t,
								proto: !0,
								forced: m || E,
							},
							x
						);
				return x;
			};
		},
		function (e, t, i) {
			"use strict";
			var n,
				o,
				r,
				a = i(23),
				s = i(11),
				c = i(10),
				l = i(5),
				u = i(20),
				p = l("iterator"),
				d = !1;
			[].keys &&
				("next" in (r = [].keys())
					? (o = a(a(r))) !== Object.prototype && (n = o)
					: (d = !0)),
				null == n && (n = {}),
				u ||
					c(n, p) ||
					s(n, p, function () {
						return this;
					}),
				(e.exports = {
					IteratorPrototype: n,
					BUGGY_SAFARI_ITERATORS: d,
				});
		},
		function (e, t, i) {
			var n = i(12),
				o = i(16),
				r = i(5)("species");
			e.exports = function (e, t) {
				var i,
					a = n(e).constructor;
				return void 0 === a || null == (i = n(a)[r]) ? t : o(i);
			};
		},
		function (e, t, i) {
			var n,
				o,
				r,
				a = i(2),
				s = i(1),
				c = i(18),
				l = i(50),
				u = i(62),
				p = i(43),
				d = a.location,
				f = a.setImmediate,
				h = a.clearImmediate,
				m = a.process,
				y = a.MessageChannel,
				v = a.Dispatch,
				b = 0,
				g = {},
				w = function (e) {
					if (g.hasOwnProperty(e)) {
						var t = g[e];
						delete g[e], t();
					}
				},
				x = function (e) {
					return function () {
						w(e);
					};
				},
				_ = function (e) {
					w(e.data);
				},
				k = function (e) {
					a.postMessage(e + "", d.protocol + "//" + d.host);
				};
			(f && h) ||
				((f = function (e) {
					for (var t = [], i = 1; arguments.length > i; )
						t.push(arguments[i++]);
					return (
						(g[++b] = function () {
							("function" == typeof e ? e : Function(e)).apply(void 0, t);
						}),
						n(b),
						b
					);
				}),
				(h = function (e) {
					delete g[e];
				}),
				"process" == c(m)
					? (n = function (e) {
							m.nextTick(x(e));
					  })
					: v && v.now
					? (n = function (e) {
							v.now(x(e));
					  })
					: y
					? ((r = (o = new y()).port2),
					  (o.port1.onmessage = _),
					  (n = l(r.postMessage, r, 1)))
					: !a.addEventListener ||
					  "function" != typeof postMessage ||
					  a.importScripts ||
					  s(k)
					? (n =
							"onreadystatechange" in p("script")
								? function (e) {
										u.appendChild(
											p("script")
										).onreadystatechange = function () {
											u.removeChild(this), w(e);
										};
								  }
								: function (e) {
										setTimeout(x(e), 0);
								  })
					: ((n = k), a.addEventListener("message", _, !1))),
				(e.exports = {
					set: f,
					clear: h,
				});
		},
		function (e, t, i) {
			var n = i(21);
			e.exports = n("navigator", "userAgent") || "";
		},
		function (e, t, i) {
			var n = i(12),
				o = i(4),
				r = i(33);
			e.exports = function (e, t) {
				if ((n(e), o(t) && t.constructor === e)) return t;
				var i = r.f(e);
				return (0, i.resolve)(t), i.promise;
			};
		},
		function (e, t, i) {
			"use strict";
			e.exports = function (e, t) {
				return function () {
					for (var i = new Array(arguments.length), n = 0; n < i.length; n++)
						i[n] = arguments[n];
					return e.apply(t, i);
				};
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(7);
			function o(e) {
				return encodeURIComponent(e)
					.replace(/%40/gi, "@")
					.replace(/%3A/gi, ":")
					.replace(/%24/g, "$")
					.replace(/%2C/gi, ",")
					.replace(/%20/g, "+")
					.replace(/%5B/gi, "[")
					.replace(/%5D/gi, "]");
			}
			e.exports = function (e, t, i) {
				if (!t) return e;
				var r;
				if (i) r = i(t);
				else if (n.isURLSearchParams(t)) r = t.toString();
				else {
					var a = [];
					n.forEach(t, function (e, t) {
						null != e &&
							(n.isArray(e) ? (t += "[]") : (e = [e]),
							n.forEach(e, function (e) {
								n.isDate(e)
									? (e = e.toISOString())
									: n.isObject(e) && (e = JSON.stringify(e)),
									a.push(o(t) + "=" + o(e));
							}));
					}),
						(r = a.join("&"));
				}
				if (r) {
					var s = e.indexOf("#");
					-1 !== s && (e = e.slice(0, s)),
						(e += (-1 === e.indexOf("?") ? "?" : "&") + r);
				}
				return e;
			};
		},
		function (e, t, i) {
			"use strict";
			e.exports = function (e) {
				return !(!e || !e.__CANCEL__);
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(7),
				o = i(159),
				r = {
					"Content-Type": "application/x-www-form-urlencoded",
				};
			function a(e, t) {
				!n.isUndefined(e) &&
					n.isUndefined(e["Content-Type"]) &&
					(e["Content-Type"] = t);
			}
			var s,
				c = {
					adapter:
						((("undefined" != typeof process &&
							"[object process]" === Object.prototype.toString.call(process)) ||
							"undefined" != typeof XMLHttpRequest) &&
							(s = i(80)),
						s),
					transformRequest: [
						function (e, t) {
							return (
								o(t, "Accept"),
								o(t, "Content-Type"),
								n.isFormData(e) ||
								n.isArrayBuffer(e) ||
								n.isBuffer(e) ||
								n.isStream(e) ||
								n.isFile(e) ||
								n.isBlob(e)
									? e
									: n.isArrayBufferView(e)
									? e.buffer
									: n.isURLSearchParams(e)
									? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
									  e.toString())
									: n.isObject(e)
									? (a(t, "application/json;charset=utf-8"), JSON.stringify(e))
									: e
							);
						},
					],
					transformResponse: [
						function (e) {
							if ("string" == typeof e)
								try {
									e = JSON.parse(e);
								} catch (e) {}
							return e;
						},
					],
					timeout: 0,
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					maxContentLength: -1,
					validateStatus: function (e) {
						return e >= 200 && e < 300;
					},
				};
			(c.headers = {
				common: {
					Accept: "application/json, text/plain, */*",
				},
			}),
				n.forEach(["delete", "get", "head"], function (e) {
					c.headers[e] = {};
				}),
				n.forEach(["post", "put", "patch"], function (e) {
					c.headers[e] = n.merge(r);
				}),
				(e.exports = c);
		},
		function (e, t, i) {
			"use strict";
			var n = i(7),
				o = i(160),
				r = i(77),
				a = i(162),
				s = i(163),
				c = i(81);
			e.exports = function (e) {
				return new Promise(function (t, l) {
					var u = e.data,
						p = e.headers;
					n.isFormData(u) && delete p["Content-Type"];
					var d = new XMLHttpRequest();
					if (e.auth) {
						var f = e.auth.username || "",
							h = e.auth.password || "";
						p.Authorization = "Basic " + btoa(f + ":" + h);
					}
					if (
						(d.open(
							e.method.toUpperCase(),
							r(e.url, e.params, e.paramsSerializer),
							!0
						),
						(d.timeout = e.timeout),
						(d.onreadystatechange = function () {
							if (
								d &&
								4 === d.readyState &&
								(0 !== d.status ||
									(d.responseURL && 0 === d.responseURL.indexOf("file:")))
							) {
								var i =
										"getAllResponseHeaders" in d
											? a(d.getAllResponseHeaders())
											: null,
									n = {
										data:
											e.responseType && "text" !== e.responseType
												? d.response
												: d.responseText,
										status: d.status,
										statusText: d.statusText,
										headers: i,
										config: e,
										request: d,
									};
								o(t, l, n), (d = null);
							}
						}),
						(d.onabort = function () {
							d && (l(c("Request aborted", e, "ECONNABORTED", d)), (d = null));
						}),
						(d.onerror = function () {
							l(c("Network Error", e, null, d)), (d = null);
						}),
						(d.ontimeout = function () {
							l(
								c(
									"timeout of " + e.timeout + "ms exceeded",
									e,
									"ECONNABORTED",
									d
								)
							),
								(d = null);
						}),
						n.isStandardBrowserEnv())
					) {
						var m = i(164),
							y =
								(e.withCredentials || s(e.url)) && e.xsrfCookieName
									? m.read(e.xsrfCookieName)
									: void 0;
						y && (p[e.xsrfHeaderName] = y);
					}
					if (
						("setRequestHeader" in d &&
							n.forEach(p, function (e, t) {
								void 0 === u && "content-type" === t.toLowerCase()
									? delete p[t]
									: d.setRequestHeader(t, e);
							}),
						e.withCredentials && (d.withCredentials = !0),
						e.responseType)
					)
						try {
							d.responseType = e.responseType;
						} catch (t) {
							if ("json" !== e.responseType) throw t;
						}
					"function" == typeof e.onDownloadProgress &&
						d.addEventListener("progress", e.onDownloadProgress),
						"function" == typeof e.onUploadProgress &&
							d.upload &&
							d.upload.addEventListener("progress", e.onUploadProgress),
						e.cancelToken &&
							e.cancelToken.promise.then(function (e) {
								d && (d.abort(), l(e), (d = null));
							}),
						void 0 === u && (u = null),
						d.send(u);
				});
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(161);
			e.exports = function (e, t, i, o, r) {
				var a = new Error(e);
				return n(a, t, i, o, r);
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(7);
			e.exports = function (e, t) {
				t = t || {};
				var i = {};
				return (
					n.forEach(["url", "method", "params", "data"], function (e) {
						void 0 !== t[e] && (i[e] = t[e]);
					}),
					n.forEach(["headers", "auth", "proxy"], function (o) {
						n.isObject(t[o])
							? (i[o] = n.deepMerge(e[o], t[o]))
							: void 0 !== t[o]
							? (i[o] = t[o])
							: n.isObject(e[o])
							? (i[o] = n.deepMerge(e[o]))
							: void 0 !== e[o] && (i[o] = e[o]);
					}),
					n.forEach(
						[
							"baseURL",
							"transformRequest",
							"transformResponse",
							"paramsSerializer",
							"timeout",
							"withCredentials",
							"adapter",
							"responseType",
							"xsrfCookieName",
							"xsrfHeaderName",
							"onUploadProgress",
							"onDownloadProgress",
							"maxContentLength",
							"validateStatus",
							"maxRedirects",
							"httpAgent",
							"httpsAgent",
							"cancelToken",
							"socketPath",
						],
						function (n) {
							void 0 !== t[n]
								? (i[n] = t[n])
								: void 0 !== e[n] && (i[n] = e[n]);
						}
					),
					i
				);
			};
		},
		function (e, t, i) {
			"use strict";
			function n(e) {
				this.message = e;
			}
			(n.prototype.toString = function () {
				return "Cancel" + (this.message ? ": " + this.message : "");
			}),
				(n.prototype.__CANCEL__ = !0),
				(e.exports = n);
		},
		function (e, t, i) {
			"use strict";
			var n = String.prototype.replace,
				o = /%20/g,
				r = i(53),
				a = {
					RFC1738: "RFC1738",
					RFC3986: "RFC3986",
				};
			e.exports = r.assign(
				{
					default: a.RFC3986,
					formatters: {
						RFC1738: function (e) {
							return n.call(e, o, "+");
						},
						RFC3986: function (e) {
							return String(e);
						},
					},
				},
				a
			);
		},
		function (e, t) {
			e.exports =
				'<svg width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="svgo-inline-loader-a" d="M0 0h54v54H0z"/><path d="M35.469 5.41a2.699 2.699 0 012.85 2.077 1.895 1.895 0 01-.185 1.362c-.05.09-.108.171-.166.254l-.174.247-.351.493c-.472.654-.955 1.3-1.454 1.934l-.01.013a162.636 162.636 0 014.04.231l1.11.083.554.045.277.023.139.011.07.006.077.008a7.779 7.779 0 012.483.658 7.873 7.873 0 013.703 3.467c.408.76.688 1.589.826 2.44.02.105.031.212.046.319l.01.08.01.076.014.139.057.555.107 1.111c.068.741.129 1.483.182 2.226.213 2.97.314 5.96.244 8.947a112.38 112.38 0 01-.57 8.919c-.007.086-.022.2-.035.306-.012.108-.03.215-.049.321l-.027.16-.034.159c-.023.106-.045.212-.074.316a7.94 7.94 0 01-1.842 3.394 7.9 7.9 0 01-4.483 2.446c-.107.017-.214.035-.321.049l-.322.036-.554.048-1.11.09c-.74.058-1.48.108-2.219.155-1.48.092-2.96.165-4.44.22-5.921.218-11.844.148-17.762-.204-.74-.044-1.479-.095-2.218-.149l-1.11-.087-.554-.046-.277-.024-.139-.012-.147-.014a7.807 7.807 0 01-2.497-.67 7.9 7.9 0 01-3.71-3.494 7.918 7.918 0 01-.821-2.449c-.017-.106-.035-.213-.045-.32l-.018-.161-.009-.08-.006-.07-.048-.555-.089-1.112a128.68 128.68 0 01-.148-2.227c-.173-2.97-.242-5.951-.174-8.932.066-2.978.25-5.948.532-8.908a7.864 7.864 0 012.051-4.614 7.82 7.82 0 014.436-2.405c.106-.016.21-.034.317-.047l.317-.034.554-.047 1.109-.088a154.233 154.233 0 014.487-.273l-.028-.035a59.498 59.498 0 01-1.454-1.934l-.351-.493-.174-.247c-.058-.083-.117-.165-.166-.254a1.896 1.896 0 01-.184-1.363 2.699 2.699 0 012.85-2.077 1.89 1.89 0 011.237.595c.07.075.13.156.19.237l.181.242.36.486c.476.651.94 1.31 1.39 1.981a45.03 45.03 0 011.678 2.683 231.804 231.804 0 017.029-.007c.122-.212.246-.422.37-.63.418-.695.854-1.375 1.303-2.046.45-.67.914-1.33 1.39-1.981l.36-.486.181-.242c.06-.081.12-.162.19-.237a1.89 1.89 0 011.238-.595zM20.366 22.632a2 2 0 00-.196.655 60.682 60.682 0 00-.416 7.208c0 2.174.106 4.347.318 6.52l.115 1.087a2 2 0 002.912 1.547 131.76 131.76 0 006.459-3.597 119.102 119.102 0 004.685-2.937l1.133-.757a2 2 0 00.029-3.292 91.839 91.839 0 00-5.847-3.78 99.132 99.132 0 00-5.407-2.994l-1.103-.558a2 2 0 00-2.682.898z" id="svgo-inline-loader-d"/><filter x="-19.6%" y="-20.7%" width="139.2%" height="141.3%" filterUnits="objectBoundingBox" id="svgo-inline-loader-c"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feOffset in="SourceAlpha" result="shadowOffsetOuter2"/><feGaussianBlur stdDeviation="3" in="shadowOffsetOuter2" result="shadowBlurOuter2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="shadowMatrixOuter2"/></feMerge></filter></defs><g fill="none" fill-rule="evenodd" opacity=".812"><mask id="svgo-inline-loader-b" fill="#fff"><use xlink:href="#svgo-inline-loader-a"/></mask><g mask="url(#svgo-inline-loader-b)"><use fill="#000" filter="url(#svgo-inline-loader-c)" xlink:href="#svgo-inline-loader-d"/><use fill="#FFF" xlink:href="#svgo-inline-loader-d"/></g></g></svg>';
		},
		function (e, t, i) {
			var n = i(87),
				o = i(88);
			"string" == typeof (o = o.__esModule ? o.default : o) &&
				(o = [[e.i, o, ""]]);
			var r = {
					attributes: {
						"data-injector": "bilibili-player",
					},
					insert: "head",
					singleton: !1,
				},
				a = (n(o, r), o.locals ? o.locals : {});
			e.exports = a;
		},
		function (e, t, i) {
			"use strict";
			var n,
				o = function () {
					return (
						void 0 === n &&
							(n = Boolean(window && document && document.all && !window.atob)),
						n
					);
				},
				r = (function () {
					var e = {};
					return function (t) {
						if (void 0 === e[t]) {
							var i = document.querySelector(t);
							if (
								window.HTMLIFrameElement &&
								i instanceof window.HTMLIFrameElement
							)
								try {
									i = i.contentDocument.head;
								} catch (e) {
									i = null;
								}
							e[t] = i;
						}
						return e[t];
					};
				})(),
				a = [];
			function s(e) {
				for (var t = -1, i = 0; i < a.length; i++)
					if (a[i].identifier === e) {
						t = i;
						break;
					}
				return t;
			}
			function c(e, t) {
				for (var i = {}, n = [], o = 0; o < e.length; o++) {
					var r = e[o],
						c = t.base ? r[0] + t.base : r[0],
						l = i[c] || 0,
						u = "".concat(c, " ").concat(l);
					i[c] = l + 1;
					var p = s(u),
						d = {
							css: r[1],
							media: r[2],
							sourceMap: r[3],
						};
					-1 !== p
						? (a[p].references++, a[p].updater(d))
						: a.push({
								identifier: u,
								updater: y(d, t),
								references: 1,
						  }),
						n.push(u);
				}
				return n;
			}
			function l(e) {
				var t = document.createElement("style"),
					n = e.attributes || {};
				if (void 0 === n.nonce) {
					var o = i.nc;
					o && (n.nonce = o);
				}
				if (
					(Object.keys(n).forEach(function (e) {
						t.setAttribute(e, n[e]);
					}),
					"function" == typeof e.insert)
				)
					e.insert(t);
				else {
					var a = r(e.insert || "head");
					if (!a)
						throw new Error(
							"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
						);
					a.appendChild(t);
				}
				return t;
			}
			var u,
				p =
					((u = []),
					function (e, t) {
						return (u[e] = t), u.filter(Boolean).join("\n");
					});
			function d(e, t, i, n) {
				var o = i
					? ""
					: n.media
					? "@media ".concat(n.media, " {").concat(n.css, "}")
					: n.css;
				if (e.styleSheet) e.styleSheet.cssText = p(t, o);
				else {
					var r = document.createTextNode(o),
						a = e.childNodes;
					a[t] && e.removeChild(a[t]),
						a.length ? e.insertBefore(r, a[t]) : e.appendChild(r);
				}
			}
			function f(e, t, i) {
				var n = i.css,
					o = i.media,
					r = i.sourceMap;
				if (
					(o ? e.setAttribute("media", o) : e.removeAttribute("media"),
					r &&
						btoa &&
						(n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
							btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
							" */"
						)),
					e.styleSheet)
				)
					e.styleSheet.cssText = n;
				else {
					for (; e.firstChild; ) e.removeChild(e.firstChild);
					e.appendChild(document.createTextNode(n));
				}
			}
			var h = null,
				m = 0;
			function y(e, t) {
				var i, n, o;
				if (t.singleton) {
					var r = m++;
					(i = h || (h = l(t))),
						(n = d.bind(null, i, r, !1)),
						(o = d.bind(null, i, r, !0));
				} else
					(i = l(t)),
						(n = f.bind(null, i, t)),
						(o = function () {
							!(function (e) {
								if (null === e.parentNode) return !1;
								e.parentNode.removeChild(e);
							})(i);
						});
				return (
					n(e),
					function (t) {
						if (t) {
							if (
								t.css === e.css &&
								t.media === e.media &&
								t.sourceMap === e.sourceMap
							)
								return;
							n((e = t));
						} else o();
					}
				);
			}
			e.exports = function (e, t) {
				(t = t || {}).singleton ||
					"boolean" == typeof t.singleton ||
					(t.singleton = o());
				var i = c((e = e || []), t);
				return function (e) {
					if (
						((e = e || []),
						"[object Array]" === Object.prototype.toString.call(e))
					) {
						for (var n = 0; n < i.length; n++) {
							var o = s(i[n]);
							a[o].references--;
						}
						for (var r = c(e, t), l = 0; l < i.length; l++) {
							var u = s(i[l]);
							0 === a[u].references && (a[u].updater(), a.splice(u, 1));
						}
						i = r;
					}
				};
			};
		},
		function (e, t, i) {
			(t = i(89)(!1)).push([
				e.i,
				'.player-icon{display:inline-block;line-height:1;font-weight:400;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.player-icon.icon-play:before{content:"A";color:#de698c}.player-icon.icon-repeat:before{content:"C"}.player-icon.icon-fullscreen:before{content:"E"}.player-icon.icon-pause:before{content:"F";color:#de698c}.player-icon.icon-mute:before{content:"G"}.player-icon.icon-unmute:before{content:"H"}.player-icon.icon-preview:before{content:""}.player-icon.icon-share:before{content:"K"}.player-icon.icon-comment,.player-icon.icon-widescreen{content:"";display:block}.player-icon.icon-comment{background:transparent url(//s1.hdslb.com/bfs/static/mult/images/Icon_Barrage-Off.png) no-repeat;background-size:100% auto}.player-icon.icon-widescreen{background:transparent url(//s1.hdslb.com/bfs/static/mult/images/Icon_Fullscreen.png) no-repeat;background-size:100% auto}.player-container{position:relative;display:inline-block;width:100%;height:100%}.player-container .dummy{margin-top:62.5%}.player-container.player-container-new .player-box .display .load-layer .icon-preview{bottom:50%;right:50%;width:54px;height:54px;-webkit-transform:translateX(50%) translateY(50%);transform:translateX(50%) translateY(50%);-webkit-filter:drop-shadow(0 0 6px 0 rgba(0,0,0,.2));filter:drop-shadow(0 0 6px 0 rgba(0,0,0,.2));background:none}.player-container.player-container-new .player-box .display .load-layer .icon-preview:before{content:none}.player-container.player-container-new .player-box .display .load-layer .icon-preview .bp-svgicon{pointer-events:none}.player-container.wide{z-index:100000!important}.player-container.wide .player-box{position:fixed;width:auto;height:auto}.player-container.wide .player-box .display .control-bar{padding-bottom:env(safe-area-inset-bottom)}.player-container.wide .player-box .display .state-icon{margin-bottom:env(safe-area-inset-bottom)}.player-container .display.fullScreen{z-index:4}.player-container .player-box{position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}.player-container .player-box.portrait{-webkit-transform:rotate(90deg) translateY(-100%);transform:rotate(90deg) translateY(-100%);-webkit-transform-origin:top left;transform-origin:top left;height:100vw;width:100vh}.player-container .player-box.full{padding-bottom:0}.player-container .player-box.full .comment-layer{bottom:0}.player-container .player-box.full .display .control-bar{padding-bottom:env(safe-area-inset-bottom)}.player-container .player-box.full .display .state-icon{margin-bottom:env(safe-area-inset-bottom)}.player-container .player-box .audioCover{overflow:hidden;position:absolute;left:0;top:0;z-index:-1;height:100%;width:100%;pointer-events:none}.player-container .player-box .audioCover.fullScreen{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.player-container .player-box .audioCover .background{display:block;width:100%;-webkit-filter:blur(60px);filter:blur(60px)}.player-container .player-box .audioCover .backgroundCover{position:absolute;left:0;top:0;height:100%;display:block;width:100%;background-color:rgba(0,0,0,.5);z-index:0}.player-container .player-box .audioCover .cover{position:absolute;top:50%;left:50%;width:91px;height:91px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:50%;border:5px solid rgba(251,114,153,.25)}.player-container .player-box .audioCover .cover.fullScreen{width:150px;height:150px;border:14px solid rgba(251,114,153,.25)}.player-container .player-box .audioCover .cover .coverImg{width:79px;height:79px;border:6px solid rgba(251,114,153,.4);border-radius:50%}.player-container .player-box .audioCover .cover .coverImg.fullScreen{width:130px;height:130px;border:10px solid rgba(251,114,153,.4)}.player-container .player-box video{background-color:#000;display:none}.player-container .player-box video.show{display:inline}.player-container .player-box .display{position:absolute;top:0;bottom:0;left:0;right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:translateZ(0);transform:translateZ(0)}.player-container .player-box .display .control-bar{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;z-index:2;bottom:0;left:0;right:0;height:44px;border:0 solid #e2e2e2;background-color:rgba(0,0,0,.5);font-size:0;text-align:left;opacity:1}.player-container .player-box .display .control-bar.hide{visibility:hidden;opacity:0}.player-container .player-box .display .control-bar>*{font-size:23px;display:inline-block}.player-container .player-box .display .control-bar .control-btn{height:100%;background-color:transparent;color:#585858;width:48px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.player-container .player-box .display .control-bar .control-btn.btn-comment.active>.player-icon.icon-comment{background:transparent url(//s1.hdslb.com/bfs/static/mult/images/Icon_Barrage-On.png) no-repeat;background-size:100% auto}.player-container .player-box .display .control-bar .control-btn i{list-style:none;cursor:default;height:24px;width:24px}.player-container .player-box .display .control-bar .control-btn i:before{line-height:88px;display:inline-block;height:100%;font-size:24pt}.player-container .player-box .display .control-bar .control-btn.hide{display:none}.player-container .player-box .display .control-bar .control-btn.active{color:#ccc}.player-container .player-box .display .control-bar .control-split{height:100%;width:1pt;margin:0;padding:0;background-color:#e2e2e2}.player-container .player-box .display .control-bar .control-time-split:before{content:"/";margin:0 .5px}.player-container .player-box .display .control-bar .time-container{height:44px}.player-container .player-box .display .control-bar .time-container .control-text,.player-container .player-box .display .control-bar .time-container .control-time-split{font-size:15px;font-family:arial,sans-serif;color:#fff;height:100%;line-height:44px;vertical-align:top;float:left}.player-container .player-box .display .control-bar .time-container .control-time-split{width:6px}.player-container .player-box .display .control-bar .time-container .control-text{width:50px}.player-container .player-box .display .control-bar .time-container .control-text.time-current-text{text-align:right}.player-container .player-box .display .control-bar .time-container .control-text.time-total-text{text-align:left}.player-container .player-box .display .control-bar .time-container .time-current-text:before,.player-container .player-box .display .control-bar .time-container .time-total-text:after{width:2pt;content:"";display:inline-block}.player-container .player-box .display .control-bar>.right{font-size:0;cursor:default;height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.player-container .player-box .display .control-bar>.right>*{font-size:23px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.player-container .player-box .display .control-bar .control-volume-slider{display:inline-block;width:40pt;height:88px;position:relative}.player-container .player-box .display .control-bar .control-volume-slider.hide{display:none}.player-container .player-box .display .control-bar .control-volume-slider.mute .ui-slider-thumb{background-color:#949494}.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-container{top:40.66666667px;right:5pt;left:0;height:5pt}.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-thumb{background-color:#00a1d6;border-radius:3pt}.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-thumb:after{width:0;height:5pt;right:0;border-radius:3pt}.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-tracker{right:0;background-color:#949494;border-radius:3pt}.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-label{display:none}.player-container .player-box .display .control-bar .control-volume-slider .ui-slider-event-layer{right:0}.player-container .player-box .display .control-bar .control-slider{position:relative;height:44px;-webkit-box-flex:1;-ms-flex:1;flex:1}.player-container .player-box .display .control-bar .control-slider .ui-slider-container{position:absolute;height:100%;left:0;right:7pt;width:auto;top:50%;-webkit-box-shadow:none;box-shadow:none;border-radius:0;background-color:transparent}.player-container .player-box .display .control-bar .control-slider .ui-slider-label{display:none}.player-container .player-box .display .control-bar .control-slider .ui-slider-thumb{top:0;bottom:0;left:0;height:3px;-webkit-transform:translateZ(0);transform:translateZ(0);border-radius:0;-webkit-box-shadow:none;box-shadow:none;background-color:#de698c}.player-container .player-box .display .control-bar .control-slider .ui-slider-thumb:after{content:"";position:absolute;display:block;right:-14px;top:-6px;width:14px;height:14px;border-radius:14px;-webkit-box-shadow:none;box-shadow:none;background-color:#fff;-webkit-box-shadow:.5px .5px 3px #000!important;box-shadow:.5px .5px 3px #000!important}.player-container .player-box .display .control-bar .control-slider .ui-slider-event-layer{top:-50%;left:0;right:-7pt;width:auto;height:100%}.player-container .player-box .display .control-bar .control-slider .ui-slider-tracker{top:0;bottom:0;left:0;right:0;width:auto;height:3px;border-style:none;-webkit-box-shadow:none;box-shadow:none;background:#4c4c4c}.player-container .player-box .display .input-bar{position:absolute;display:none;z-index:2;top:0;left:0;right:0;height:40pt;background:hsla(0,0%,100%,.6)}.player-container .player-box .display .input-bar.hide{display:none}.player-container .player-box .display .input-bar .text-input{position:absolute;top:0;bottom:0;left:0;width:78%;margin:5pt;border-style:none;border-width:0;font-size:14pt;line-height:14pt}.player-container .player-box .display .input-bar .text-input:focus{outline-offset:0}.player-container .player-box .display .input-bar .send-btn{position:absolute;top:0;bottom:0;right:0;width:20%;margin:5pt;border:0 #fff;background-color:#0ad;color:#fff;font-size:14pt;line-height:14pt;font-weight:700}.player-container .player-box .display .comment-layer{position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;pointer-events:none;overflow:hidden;font-size:17px}.player-container .player-box .display .load-layer{display:block;position:absolute;z-index:3;top:0;bottom:0;left:0;right:0;overflow:hidden;cursor:pointer;text-align:center}.player-container .player-box .display .load-layer.hide{display:none}.player-container .player-box .display .load-layer>img{border-style:none;display:inline-block;position:relative;width:100%;height:100%}.player-container .player-box .display .load-layer .icon-preview{position:absolute;display:block;bottom:16px;right:13px;width:46px;height:46px;background:url(//s1.hdslb.com/bfs/static/mult/images/TV-Play.png) no-repeat;background-size:100% auto}.player-container .player-box .display .load-layer .player-video-time{display:none;position:absolute;z-index:999;bottom:18px;left:12px;border:1px solid hsla(0,0%,100%,.6);background-color:hsla(0,0%,100%,.2);padding-left:8px;padding-right:8px;border-radius:2px;color:#fff;font-size:12px;line-height:20px;text-align:center}.player-container .player-box .display .state-icon{position:absolute;display:block;opacity:.85;bottom:56px;right:11.5px;width:46px;height:46px;margin-left:-45px;margin-top:-45px;z-index:2}.player-container .player-box .display .state-icon.hide{display:none}.player-container .player-box .display .state-icon i{font-style:normal;font-weight:400;line-height:100;text-align:center;color:#fff;font-size:80pt;list-style:none;display:none;position:absolute;top:0;bottom:0;left:0;right:0}.player-container .player-box .display .state-icon i.buff-icon{background:url(//s1.hdslb.com/bfs/static/player/img/loading.gif) no-repeat 50%}.player-container .player-box .display .state-icon i.pause-icon{background:url(//s1.hdslb.com/bfs/static/mult/images/TV-Play.png) no-repeat;background-size:100% auto}.player-container .player-box .display .state-icon i.play-icon{background:url(//s1.hdslb.com/bfs/static/mult/images/TV-Pause.png) no-repeat;background-size:100% auto}.player-container .player-box .display .state-icon i.active{display:block}.player-container .player-box .display .buff-tips{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;pointer-events:none;display:none}.player-container .player-box .display .buff-tips.active{display:-webkit-box;display:-ms-flexbox;display:flex}.player-container .player-box .display .buff-tips img{width:40px;height:40px}.player-container .player-box .display .buff-tips span{color:#fff;margin-top:8px;font-size:15px}.player-container .player-box .display .danmaku-container{position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;pointer-events:none;overflow:hidden;-webkit-text-size-adjust:none}.player-container .player-box .display .danmaku-container .bilibili-danmaku{line-height:normal!important}.player-container .player-box .display .fullscreen-tips{position:absolute;top:0;left:50%;color:#fff;width:80px;line-height:20px;text-align:center;z-index:2;margin-left:-40px;font-size:10px}.player-container .player-box .display .fullscreen-tips span{background-color:rgba(0,0,0,.5);border-radius:4px;display:block;-webkit-transition:opacity .3s;-o-transition:.3s opacity;transition:opacity .3s;position:absolute;left:0;right:0;top:12px;opacity:0}.player-container .player-box .display .playtime-record{position:absolute;bottom:48px;left:8px;padding:1px 8px;overflow:hidden;background-color:rgba(34,34,34,.5);text-align:center;color:#fafafa;font-size:16px;line-height:24px;-webkit-transition:opacity .3s;-o-transition:.3s opacity;transition:opacity .3s;display:none}.player-container .player-box .display .playtime-record .playtime-record-jump{color:#f25d8e;text-decoration:none}.player-container .player-box .display .play-block{position:absolute;bottom:50px;left:5%;width:90%;font-size:14px;background:rgba(0,0,0,.8);height:44px;line-height:44px;padding:0 12px;border-radius:4px;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box;display:none}.player-container .player-box .display .play-block .play-block-tv{float:left;color:#fff}.player-container .player-box .display .play-block .play-block-tv img{width:32px;margin-right:12px;vertical-align:middle}.player-container .player-box .display .play-block .play-block-download{float:right;color:#fb7299}.player-container .player-box .display .play-block .play-block-download span{padding-left:12px;border-left:1px solid hsla(0,0%,100%,.4)}.player-container .player-box .display .play-block .play-block-close{position:absolute;top:-18.5px;left:-3.5px}.player-container .player-ending-panel{position:absolute;overflow:hidden;top:0;bottom:0;left:0;right:0;z-index:1000;background-color:rgba(0,0,0,.8);display:none}.player-container .player-ending-panel .player-ending-panel-background{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;height:234px;z-index:-2}.player-container .player-ending-panel .player-ending-panel-container{background:rgba(0,0,0,.8);height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 12px;color:#fff;font-size:14px}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-header{margin-bottom:12px}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-video{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-bottom:30px}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-video .player-ending-panel-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-left:12px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-video .player-ending-panel-content .player-ending-panel-title{overflow:hidden;word-break:break-all;height:40px}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-video .player-ending-panel-content .player-ending-panel-button{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:start;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #fb7299;border-radius:4px;padding:3px 4px 2.5px;text-align:center;color:#fb7299;font-size:13px}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-video .player-ending-panel-pic{border-radius:6px;width:115px;height:70px;overflow:hidden;position:relative}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-video .player-ending-panel-pic img{width:100%;height:100%}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-video .player-ending-panel-pic .player-ending-panel-counter{position:absolute;bottom:0;width:100%;height:3px;background-color:#fb7299}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-video .player-ending-panel-pic .player-ending-panel-counter.hidden{width:0;-webkit-transition:width 3.5s cubic-bezier(.075,.82,.165,1);-o-transition:width 3.5s cubic-bezier(.075,.82,.165,1);transition:width 3.5s cubic-bezier(.075,.82,.165,1)}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-recommend.hide{visibility:hidden}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:end;align-self:flex-end}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-buttons.gameMode{-ms-flex-item-align:center;align-self:center}.player-container .player-ending-panel .player-ending-panel-container .player-ending-panel-buttons img{vertical-align:-14%;margin-left:24px;margin-right:3px;width:16px;height:16px}.player-container .controls-simple{position:absolute;left:0;bottom:0;width:100%;height:30px;background-color:#fff;display:table}.player-container .controls-simple .mukio-control{display:table-cell;vertical-align:middle}.player-container .controls-simple .mukio-control .control{display:inline-block;font-size:14px;line-height:18px;color:#fff;background-color:#5abcf7;border:1px solid #fff;border-radius:5px}.player-container .controls-simple .mukio-control .control:active{border-color:#ccc}.player-container .controls-simple .mukio-control .style-panel{top:30px;display:none;position:absolute}',
				"",
			]),
				(e.exports = t);
		},
		function (e, t, i) {
			"use strict";
			e.exports = function (e) {
				var t = [];
				return (
					(t.toString = function () {
						return this.map(function (t) {
							var i = (function (e, t) {
								var i = e[1] || "",
									n = e[3];
								if (!n) return i;
								if (t && "function" == typeof btoa) {
									var o =
											((a = n),
											(s = btoa(
												unescape(encodeURIComponent(JSON.stringify(a)))
											)),
											(c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
												s
											)),
											"/*# ".concat(c, " */")),
										r = n.sources.map(function (e) {
											return "/*# sourceURL="
												.concat(n.sourceRoot || "")
												.concat(e, " */");
										});
									return [i].concat(r).concat([o]).join("\n");
								}
								var a, s, c;
								return [i].join("\n");
							})(t, e);
							return t[2] ? "@media ".concat(t[2], " {").concat(i, "}") : i;
						}).join("");
					}),
					(t.i = function (e, i, n) {
						"string" == typeof e && (e = [[null, e, ""]]);
						var o = {};
						if (n)
							for (var r = 0; r < this.length; r++) {
								var a = this[r][0];
								null != a && (o[a] = !0);
							}
						for (var s = 0; s < e.length; s++) {
							var c = [].concat(e[s]);
							(n && o[c[0]]) ||
								(i &&
									(c[2]
										? (c[2] = "".concat(i, " and ").concat(c[2]))
										: (c[2] = i)),
								t.push(c));
						}
					}),
					t
				);
			};
		},
		function (e, t, i) {
			i(91),
				i(99),
				i(101),
				i(102),
				i(103),
				i(104),
				i(105),
				i(106),
				i(110),
				i(111),
				i(112),
				i(113),
				i(114),
				i(116),
				i(117),
				i(118),
				i(119),
				i(120),
				i(121),
				i(122),
				i(124),
				i(69),
				i(126),
				i(127),
				i(128),
				i(129),
				i(130),
				i(131);
			var n = i(28);
			e.exports = n.Object;
		},
		function (e, t, i) {
			"use strict";
			function n(e) {
				return (n =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			var o = i(0),
				r = i(2),
				a = i(20),
				s = i(3),
				c = i(59),
				l = i(1),
				u = i(10),
				p = i(60),
				d = i(4),
				f = i(12),
				h = i(13),
				m = i(14),
				y = i(19),
				v = i(17),
				b = i(29),
				g = i(30),
				w = i(45),
				x = i(63),
				_ = i(49),
				k = i(15),
				S = i(8),
				E = i(35),
				O = i(11),
				A = i(24),
				D = i(25),
				T = i(36),
				C = i(27),
				L = i(37),
				P = i(5),
				j = i(64),
				q = i(96),
				R = i(22),
				F = i(26),
				B = i(97).forEach,
				M = T("hidden"),
				I = P("toPrimitive"),
				N = F.set,
				z = F.getterFor("Symbol"),
				U = Object.prototype,
				V = r.Symbol,
				H = r.JSON,
				W = H && H.stringify,
				G = k.f,
				Y = S.f,
				Q = x.f,
				J = E.f,
				X = D("symbols"),
				K = D("op-symbols"),
				Z = D("string-to-symbol-registry"),
				$ = D("symbol-to-string-registry"),
				ee = D("wks"),
				te = r.QObject,
				ie = !te || !te.prototype || !te.prototype.findChild,
				ne =
					s &&
					l(function () {
						return (
							7 !=
							b(
								Y({}, "a", {
									get: function () {
										return Y(this, "a", {
											value: 7,
										}).a;
									},
								})
							).a
						);
					})
						? function (e, t, i) {
								var n = G(U, t);
								n && delete U[t], Y(e, t, i), n && e !== U && Y(U, t, n);
						  }
						: Y,
				oe = function (e, t) {
					var i = (X[e] = b(V.prototype));
					return (
						N(i, {
							type: "Symbol",
							tag: e,
							description: t,
						}),
						s || (i.description = t),
						i
					);
				},
				re =
					c && "symbol" == n(V.iterator)
						? function (e) {
								return "symbol" == n(e);
						  }
						: function (e) {
								return Object(e) instanceof V;
						  },
				ae = function (e, t, i) {
					e === U && ae(K, t, i), f(e);
					var n = y(t, !0);
					return (
						f(i),
						u(X, n)
							? (i.enumerable
									? (u(e, M) && e[M][n] && (e[M][n] = !1),
									  (i = b(i, {
											enumerable: v(0, !1),
									  })))
									: (u(e, M) || Y(e, M, v(1, {})), (e[M][n] = !0)),
							  ne(e, n, i))
							: Y(e, n, i)
					);
				},
				se = function (e, t) {
					f(e);
					var i = m(t),
						n = g(i).concat(pe(i));
					return (
						B(n, function (t) {
							(s && !ce.call(i, t)) || ae(e, t, i[t]);
						}),
						e
					);
				},
				ce = function (e) {
					var t = y(e, !0),
						i = J.call(this, t);
					return (
						!(this === U && u(X, t) && !u(K, t)) &&
						(!(i || !u(this, t) || !u(X, t) || (u(this, M) && this[M][t])) || i)
					);
				},
				le = function (e, t) {
					var i = m(e),
						n = y(t, !0);
					if (i !== U || !u(X, n) || u(K, n)) {
						var o = G(i, n);
						return (
							!o || !u(X, n) || (u(i, M) && i[M][n]) || (o.enumerable = !0), o
						);
					}
				},
				ue = function (e) {
					var t = Q(m(e)),
						i = [];
					return (
						B(t, function (e) {
							u(X, e) || u(C, e) || i.push(e);
						}),
						i
					);
				},
				pe = function (e) {
					var t = e === U,
						i = Q(t ? K : m(e)),
						n = [];
					return (
						B(i, function (e) {
							!u(X, e) || (t && !u(U, e)) || n.push(X[e]);
						}),
						n
					);
				};
			c ||
				(A(
					(V = function () {
						if (this instanceof V)
							throw TypeError("Symbol is not a constructor");
						var e =
								arguments.length && void 0 !== arguments[0]
									? String(arguments[0])
									: void 0,
							t = L(e),
							i = function e(i) {
								this === U && e.call(K, i),
									u(this, M) && u(this[M], t) && (this[M][t] = !1),
									ne(this, t, v(1, i));
							};
						return (
							s &&
								ie &&
								ne(U, t, {
									configurable: !0,
									set: i,
								}),
							oe(t, e)
						);
					}).prototype,
					"toString",
					function () {
						return z(this).tag;
					}
				),
				(E.f = ce),
				(S.f = ae),
				(k.f = le),
				(w.f = x.f = ue),
				(_.f = pe),
				s &&
					(Y(V.prototype, "description", {
						configurable: !0,
						get: function () {
							return z(this).description;
						},
					}),
					a ||
						A(U, "propertyIsEnumerable", ce, {
							unsafe: !0,
						})),
				(j.f = function (e) {
					return oe(P(e), e);
				})),
				o(
					{
						global: !0,
						wrap: !0,
						forced: !c,
						sham: !c,
					},
					{
						Symbol: V,
					}
				),
				B(g(ee), function (e) {
					q(e);
				}),
				o(
					{
						target: "Symbol",
						stat: !0,
						forced: !c,
					},
					{
						for: function (e) {
							var t = String(e);
							if (u(Z, t)) return Z[t];
							var i = V(t);
							return (Z[t] = i), ($[i] = t), i;
						},
						keyFor: function (e) {
							if (!re(e)) throw TypeError(e + " is not a symbol");
							if (u($, e)) return $[e];
						},
						useSetter: function () {
							ie = !0;
						},
						useSimple: function () {
							ie = !1;
						},
					}
				),
				o(
					{
						target: "Object",
						stat: !0,
						forced: !c,
						sham: !s,
					},
					{
						create: function (e, t) {
							return void 0 === t ? b(e) : se(b(e), t);
						},
						defineProperty: ae,
						defineProperties: se,
						getOwnPropertyDescriptor: le,
					}
				),
				o(
					{
						target: "Object",
						stat: !0,
						forced: !c,
					},
					{
						getOwnPropertyNames: ue,
						getOwnPropertySymbols: pe,
					}
				),
				o(
					{
						target: "Object",
						stat: !0,
						forced: l(function () {
							_.f(1);
						}),
					},
					{
						getOwnPropertySymbols: function (e) {
							return _.f(h(e));
						},
					}
				),
				H &&
					o(
						{
							target: "JSON",
							stat: !0,
							forced:
								!c ||
								l(function () {
									var e = V();
									return (
										"[null]" != W([e]) ||
										"{}" !=
											W({
												a: e,
											}) ||
										"{}" != W(Object(e))
									);
								}),
						},
						{
							stringify: function (e) {
								for (var t, i, n = [e], o = 1; arguments.length > o; )
									n.push(arguments[o++]);
								if (((i = t = n[1]), (d(t) || void 0 !== e) && !re(e)))
									return (
										p(t) ||
											(t = function (e, t) {
												if (
													("function" == typeof i && (t = i.call(this, e, t)),
													!re(t))
												)
													return t;
											}),
										(n[1] = t),
										W.apply(H, n)
									);
							},
						}
					),
				V.prototype[I] || O(V.prototype, I, V.prototype.valueOf),
				R(V, "Symbol"),
				(C[M] = !0);
		},
		function (e, t, i) {
			var n = i(2),
				o = i(55),
				r = n.WeakMap;
			e.exports = "function" == typeof r && /native code/.test(o.call(r));
		},
		function (e, t, i) {
			var n = i(10),
				o = i(56),
				r = i(15),
				a = i(8);
			e.exports = function (e, t) {
				for (var i = o(t), s = a.f, c = r.f, l = 0; l < i.length; l++) {
					var u = i[l];
					n(e, u) || s(e, u, c(t, u));
				}
			};
		},
		function (e, t, i) {
			var n = i(14),
				o = i(46),
				r = i(95),
				a = function (e) {
					return function (t, i, a) {
						var s,
							c = n(t),
							l = o(c.length),
							u = r(a, l);
						if (e && i != i) {
							for (; l > u; ) if ((s = c[u++]) != s) return !0;
						} else
							for (; l > u; u++)
								if ((e || u in c) && c[u] === i) return e || u || 0;
						return !e && -1;
					};
				};
			e.exports = {
				includes: a(!0),
				indexOf: a(!1),
			};
		},
		function (e, t, i) {
			var n = i(47),
				o = Math.max,
				r = Math.min;
			e.exports = function (e, t) {
				var i = n(e);
				return i < 0 ? o(i + t, 0) : r(i, t);
			};
		},
		function (e, t, i) {
			var n = i(28),
				o = i(10),
				r = i(64),
				a = i(8).f;
			e.exports = function (e) {
				var t = n.Symbol || (n.Symbol = {});
				o(t, e) ||
					a(t, e, {
						value: r.f(e),
					});
			};
		},
		function (e, t, i) {
			var n = i(50),
				o = i(41),
				r = i(13),
				a = i(46),
				s = i(98),
				c = [].push,
				l = function (e) {
					var t = 1 == e,
						i = 2 == e,
						l = 3 == e,
						u = 4 == e,
						p = 6 == e,
						d = 5 == e || p;
					return function (f, h, m, y) {
						for (
							var v,
								b,
								g = r(f),
								w = o(g),
								x = n(h, m, 3),
								_ = a(w.length),
								k = 0,
								S = y || s,
								E = t ? S(f, _) : i ? S(f, 0) : void 0;
							_ > k;
							k++
						)
							if ((d || k in w) && ((b = x((v = w[k]), k, g)), e))
								if (t) E[k] = b;
								else if (b)
									switch (e) {
										case 3:
											return !0;
										case 5:
											return v;
										case 6:
											return k;
										case 2:
											c.call(E, v);
									}
								else if (u) return !1;
						return p ? -1 : l || u ? u : E;
					};
				};
			e.exports = {
				forEach: l(0),
				map: l(1),
				filter: l(2),
				some: l(3),
				every: l(4),
				find: l(5),
				findIndex: l(6),
			};
		},
		function (e, t, i) {
			var n = i(4),
				o = i(60),
				r = i(5)("species");
			e.exports = function (e, t) {
				var i;
				return (
					o(e) &&
						("function" != typeof (i = e.constructor) ||
						(i !== Array && !o(i.prototype))
							? n(i) && null === (i = i[r]) && (i = void 0)
							: (i = void 0)),
					new (void 0 === i ? Array : i)(0 === t ? 0 : t)
				);
			};
		},
		function (e, t, i) {
			var n = i(0),
				o = i(100);
			n(
				{
					target: "Object",
					stat: !0,
					forced: Object.assign !== o,
				},
				{
					assign: o,
				}
			);
		},
		function (e, t, i) {
			"use strict";
			var n = i(3),
				o = i(1),
				r = i(30),
				a = i(49),
				s = i(35),
				c = i(13),
				l = i(41),
				u = Object.assign;
			e.exports =
				!u ||
				o(function () {
					var e = {},
						t = {},
						i = Symbol();
					return (
						(e[i] = 7),
						"abcdefghijklmnopqrst".split("").forEach(function (e) {
							t[e] = e;
						}),
						7 != u({}, e)[i] || "abcdefghijklmnopqrst" != r(u({}, t)).join("")
					);
				})
					? function (e, t) {
							for (
								var i = c(e), o = arguments.length, u = 1, p = a.f, d = s.f;
								o > u;

							)
								for (
									var f,
										h = l(arguments[u++]),
										m = p ? r(h).concat(p(h)) : r(h),
										y = m.length,
										v = 0;
									y > v;

								)
									(f = m[v++]), (n && !d.call(h, f)) || (i[f] = h[f]);
							return i;
					  }
					: u;
		},
		function (e, t, i) {
			i(0)(
				{
					target: "Object",
					stat: !0,
					sham: !i(3),
				},
				{
					create: i(29),
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(3);
			n(
				{
					target: "Object",
					stat: !0,
					forced: !o,
					sham: !o,
				},
				{
					defineProperty: i(8).f,
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(3);
			n(
				{
					target: "Object",
					stat: !0,
					forced: !o,
					sham: !o,
				},
				{
					defineProperties: i(61),
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(65).entries;
			n(
				{
					target: "Object",
					stat: !0,
				},
				{
					entries: function (e) {
						return o(e);
					},
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(38),
				r = i(1),
				a = i(4),
				s = i(51).onFreeze,
				c = Object.freeze;
			n(
				{
					target: "Object",
					stat: !0,
					forced: r(function () {
						c(1);
					}),
					sham: !o,
				},
				{
					freeze: function (e) {
						return c && a(e) ? c(s(e)) : e;
					},
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(31),
				r = i(67);
			n(
				{
					target: "Object",
					stat: !0,
				},
				{
					fromEntries: function (e) {
						var t = {};
						return (
							o(
								e,
								function (e, i) {
									r(t, e, i);
								},
								void 0,
								!0
							),
							t
						);
					},
				}
			);
		},
		function (e, t, i) {
			var n = i(5),
				o = i(32),
				r = n("iterator"),
				a = Array.prototype;
			e.exports = function (e) {
				return void 0 !== e && (o.Array === e || a[r] === e);
			};
		},
		function (e, t, i) {
			var n = i(66),
				o = i(32),
				r = i(5)("iterator");
			e.exports = function (e) {
				if (null != e) return e[r] || e["@@iterator"] || o[n(e)];
			};
		},
		function (e, t, i) {
			var n = i(12);
			e.exports = function (e, t, i, o) {
				try {
					return o ? t(n(i)[0], i[1]) : t(i);
				} catch (t) {
					var r = e.return;
					throw (void 0 !== r && n(r.call(e)), t);
				}
			};
		},
		function (e, t, i) {
			var n = i(0),
				o = i(1),
				r = i(14),
				a = i(15).f,
				s = i(3),
				c = o(function () {
					a(1);
				});
			n(
				{
					target: "Object",
					stat: !0,
					forced: !s || c,
					sham: !s,
				},
				{
					getOwnPropertyDescriptor: function (e, t) {
						return a(r(e), t);
					},
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(3),
				r = i(56),
				a = i(14),
				s = i(15),
				c = i(67);
			n(
				{
					target: "Object",
					stat: !0,
					sham: !o,
				},
				{
					getOwnPropertyDescriptors: function (e) {
						for (
							var t, i, n = a(e), o = s.f, l = r(n), u = {}, p = 0;
							l.length > p;

						)
							void 0 !== (i = o(n, (t = l[p++]))) && c(u, t, i);
						return u;
					},
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(1),
				r = i(63).f;
			n(
				{
					target: "Object",
					stat: !0,
					forced: o(function () {
						return !Object.getOwnPropertyNames(1);
					}),
				},
				{
					getOwnPropertyNames: r,
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(1),
				r = i(13),
				a = i(23),
				s = i(68);
			n(
				{
					target: "Object",
					stat: !0,
					forced: o(function () {
						a(1);
					}),
					sham: !s,
				},
				{
					getPrototypeOf: function (e) {
						return a(r(e));
					},
				}
			);
		},
		function (e, t, i) {
			i(0)(
				{
					target: "Object",
					stat: !0,
				},
				{
					is: i(115),
				}
			);
		},
		function (e, t) {
			e.exports =
				Object.is ||
				function (e, t) {
					return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
				};
		},
		function (e, t, i) {
			var n = i(0),
				o = i(1),
				r = i(4),
				a = Object.isExtensible;
			n(
				{
					target: "Object",
					stat: !0,
					forced: o(function () {
						a(1);
					}),
				},
				{
					isExtensible: function (e) {
						return !!r(e) && (!a || a(e));
					},
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(1),
				r = i(4),
				a = Object.isFrozen;
			n(
				{
					target: "Object",
					stat: !0,
					forced: o(function () {
						a(1);
					}),
				},
				{
					isFrozen: function (e) {
						return !r(e) || (!!a && a(e));
					},
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(1),
				r = i(4),
				a = Object.isSealed;
			n(
				{
					target: "Object",
					stat: !0,
					forced: o(function () {
						a(1);
					}),
				},
				{
					isSealed: function (e) {
						return !r(e) || (!!a && a(e));
					},
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(13),
				r = i(30);
			n(
				{
					target: "Object",
					stat: !0,
					forced: i(1)(function () {
						r(1);
					}),
				},
				{
					keys: function (e) {
						return r(o(e));
					},
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(4),
				r = i(51).onFreeze,
				a = i(38),
				s = i(1),
				c = Object.preventExtensions;
			n(
				{
					target: "Object",
					stat: !0,
					forced: s(function () {
						c(1);
					}),
					sham: !a,
				},
				{
					preventExtensions: function (e) {
						return c && o(e) ? c(r(e)) : e;
					},
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(4),
				r = i(51).onFreeze,
				a = i(38),
				s = i(1),
				c = Object.seal;
			n(
				{
					target: "Object",
					stat: !0,
					forced: s(function () {
						c(1);
					}),
					sham: !a,
				},
				{
					seal: function (e) {
						return c && o(e) ? c(r(e)) : e;
					},
				}
			);
		},
		function (e, t, i) {
			i(0)(
				{
					target: "Object",
					stat: !0,
				},
				{
					setPrototypeOf: i(52),
				}
			);
		},
		function (e, t, i) {
			var n = i(4);
			e.exports = function (e) {
				if (!n(e) && null !== e)
					throw TypeError("Can't set " + String(e) + " as a prototype");
				return e;
			};
		},
		function (e, t, i) {
			var n = i(0),
				o = i(65).values;
			n(
				{
					target: "Object",
					stat: !0,
				},
				{
					values: function (e) {
						return o(e);
					},
				}
			);
		},
		function (e, t, i) {
			"use strict";
			var n = i(66),
				o = {};
			(o[i(5)("toStringTag")] = "z"),
				(e.exports =
					"[object z]" !== String(o)
						? function () {
								return "[object " + n(this) + "]";
						  }
						: o.toString);
		},
		function (e, t, i) {
			"use strict";
			var n = i(0),
				o = i(3),
				r = i(39),
				a = i(13),
				s = i(16),
				c = i(8);
			o &&
				n(
					{
						target: "Object",
						proto: !0,
						forced: r,
					},
					{
						__defineGetter__: function (e, t) {
							c.f(a(this), e, {
								get: s(t),
								enumerable: !0,
								configurable: !0,
							});
						},
					}
				);
		},
		function (e, t, i) {
			"use strict";
			var n = i(0),
				o = i(3),
				r = i(39),
				a = i(13),
				s = i(16),
				c = i(8);
			o &&
				n(
					{
						target: "Object",
						proto: !0,
						forced: r,
					},
					{
						__defineSetter__: function (e, t) {
							c.f(a(this), e, {
								set: s(t),
								enumerable: !0,
								configurable: !0,
							});
						},
					}
				);
		},
		function (e, t, i) {
			"use strict";
			var n = i(0),
				o = i(3),
				r = i(39),
				a = i(13),
				s = i(19),
				c = i(23),
				l = i(15).f;
			o &&
				n(
					{
						target: "Object",
						proto: !0,
						forced: r,
					},
					{
						__lookupGetter__: function (e) {
							var t,
								i = a(this),
								n = s(e, !0);
							do {
								if ((t = l(i, n))) return t.get;
							} while ((i = c(i)));
						},
					}
				);
		},
		function (e, t, i) {
			"use strict";
			var n = i(0),
				o = i(3),
				r = i(39),
				a = i(13),
				s = i(19),
				c = i(23),
				l = i(15).f;
			o &&
				n(
					{
						target: "Object",
						proto: !0,
						forced: r,
					},
					{
						__lookupSetter__: function (e) {
							var t,
								i = a(this),
								n = s(e, !0);
							do {
								if ((t = l(i, n))) return t.set;
							} while ((i = c(i)));
						},
					}
				);
		},
		function (e, t, i) {
			i(22)(Math, "Math", !0);
		},
		function (e, t, i) {
			var n = i(2);
			i(22)(n.JSON, "JSON", !0);
		},
		function (e, t, i) {
			(e.exports = i(133)), i(149), i(150), i(151), i(152);
		},
		function (e, t, i) {
			i(69), i(134), i(137), i(141), i(148);
			var n = i(28);
			e.exports = n.Promise;
		},
		function (e, t, i) {
			"use strict";
			var n = i(135).charAt,
				o = i(26),
				r = i(70),
				a = o.set,
				s = o.getterFor("String Iterator");
			r(
				String,
				"String",
				function (e) {
					a(this, {
						type: "String Iterator",
						string: String(e),
						index: 0,
					});
				},
				function () {
					var e,
						t = s(this),
						i = t.string,
						o = t.index;
					return o >= i.length
						? {
								value: void 0,
								done: !0,
						  }
						: ((e = n(i, o)),
						  (t.index += e.length),
						  {
								value: e,
								done: !1,
						  });
				}
			);
		},
		function (e, t, i) {
			var n = i(47),
				o = i(42),
				r = function (e) {
					return function (t, i) {
						var r,
							a,
							s = String(o(t)),
							c = n(i),
							l = s.length;
						return c < 0 || c >= l
							? e
								? ""
								: void 0
							: (r = s.charCodeAt(c)) < 55296 ||
							  r > 56319 ||
							  c + 1 === l ||
							  (a = s.charCodeAt(c + 1)) < 56320 ||
							  a > 57343
							? e
								? s.charAt(c)
								: r
							: e
							? s.slice(c, c + 2)
							: a - 56320 + ((r - 55296) << 10) + 65536;
					};
				};
			e.exports = {
				codeAt: r(!1),
				charAt: r(!0),
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(71).IteratorPrototype,
				o = i(29),
				r = i(17),
				a = i(22),
				s = i(32),
				c = function () {
					return this;
				};
			e.exports = function (e, t, i) {
				var l = t + " Iterator";
				return (
					(e.prototype = o(n, {
						next: r(1, i),
					})),
					a(e, l, !1, !0),
					(s[l] = c),
					e
				);
			};
		},
		function (e, t, i) {
			var n = i(2),
				o = i(138),
				r = i(139),
				a = i(11),
				s = i(5),
				c = s("iterator"),
				l = s("toStringTag"),
				u = r.values;
			for (var p in o) {
				var d = n[p],
					f = d && d.prototype;
				if (f) {
					if (f[c] !== u)
						try {
							a(f, c, u);
						} catch (e) {
							f[c] = u;
						}
					if ((f[l] || a(f, l, p), o[p]))
						for (var h in r)
							if (f[h] !== r[h])
								try {
									a(f, h, r[h]);
								} catch (e) {
									f[h] = r[h];
								}
				}
			}
		},
		function (e, t) {
			e.exports = {
				CSSRuleList: 0,
				CSSStyleDeclaration: 0,
				CSSValueList: 0,
				ClientRectList: 0,
				DOMRectList: 0,
				DOMStringList: 0,
				DOMTokenList: 1,
				DataTransferItemList: 0,
				FileList: 0,
				HTMLAllCollection: 0,
				HTMLCollection: 0,
				HTMLFormElement: 0,
				HTMLSelectElement: 0,
				MediaList: 0,
				MimeTypeArray: 0,
				NamedNodeMap: 0,
				NodeList: 1,
				PaintRequestList: 0,
				Plugin: 0,
				PluginArray: 0,
				SVGLengthList: 0,
				SVGNumberList: 0,
				SVGPathSegList: 0,
				SVGPointList: 0,
				SVGStringList: 0,
				SVGTransformList: 0,
				SourceBufferList: 0,
				StyleSheetList: 0,
				TextTrackCueList: 0,
				TextTrackList: 0,
				TouchList: 0,
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(14),
				o = i(140),
				r = i(32),
				a = i(26),
				s = i(70),
				c = a.set,
				l = a.getterFor("Array Iterator");
			(e.exports = s(
				Array,
				"Array",
				function (e, t) {
					c(this, {
						type: "Array Iterator",
						target: n(e),
						index: 0,
						kind: t,
					});
				},
				function () {
					var e = l(this),
						t = e.target,
						i = e.kind,
						n = e.index++;
					return !t || n >= t.length
						? ((e.target = void 0),
						  {
								value: void 0,
								done: !0,
						  })
						: "keys" == i
						? {
								value: n,
								done: !1,
						  }
						: "values" == i
						? {
								value: t[n],
								done: !1,
						  }
						: {
								value: [n, t[n]],
								done: !1,
						  };
				},
				"values"
			)),
				(r.Arguments = r.Array),
				o("keys"),
				o("values"),
				o("entries");
		},
		function (e, t, i) {
			var n = i(5),
				o = i(29),
				r = i(11),
				a = n("unscopables"),
				s = Array.prototype;
			null == s[a] && r(s, a, o(null)),
				(e.exports = function (e) {
					s[a][e] = !0;
				});
		},
		function (e, t, i) {
			"use strict";
			var n,
				o,
				r,
				a = i(0),
				s = i(20),
				c = i(2),
				l = i(28),
				u = i(142),
				p = i(22),
				d = i(143),
				f = i(4),
				h = i(16),
				m = i(144),
				y = i(18),
				v = i(31),
				b = i(145),
				g = i(72),
				w = i(73).set,
				x = i(146),
				_ = i(75),
				k = i(147),
				S = i(33),
				E = i(40),
				O = i(74),
				A = i(26),
				D = i(58),
				T = i(5)("species"),
				C = "Promise",
				L = A.get,
				P = A.set,
				j = A.getterFor(C),
				q = c[C],
				R = c.TypeError,
				F = c.document,
				B = c.process,
				M = c.fetch,
				I = B && B.versions,
				N = (I && I.v8) || "",
				z = S.f,
				U = z,
				V = "process" == y(B),
				H = !!(F && F.createEvent && c.dispatchEvent),
				W = D(C, function () {
					var e = q.resolve(1),
						t = function () {},
						i = ((e.constructor = {})[T] = function (e) {
							e(t, t);
						});
					return !(
						(V || "function" == typeof PromiseRejectionEvent) &&
						(!s || e.finally) &&
						e.then(t) instanceof i &&
						0 !== N.indexOf("6.6") &&
						-1 === O.indexOf("Chrome/66")
					);
				}),
				G =
					W ||
					!b(function (e) {
						q.all(e).catch(function () {});
					}),
				Y = function (e) {
					var t;
					return !(!f(e) || "function" != typeof (t = e.then)) && t;
				},
				Q = function (e, t, i) {
					if (!t.notified) {
						t.notified = !0;
						var n = t.reactions;
						x(function () {
							for (var o = t.value, r = 1 == t.state, a = 0; n.length > a; ) {
								var s,
									c,
									l,
									u = n[a++],
									p = r ? u.ok : u.fail,
									d = u.resolve,
									f = u.reject,
									h = u.domain;
								try {
									p
										? (r || (2 === t.rejection && Z(e, t), (t.rejection = 1)),
										  !0 === p
												? (s = o)
												: (h && h.enter(),
												  (s = p(o)),
												  h && (h.exit(), (l = !0))),
										  s === u.promise
												? f(R("Promise-chain cycle"))
												: (c = Y(s))
												? c.call(s, d, f)
												: d(s))
										: f(o);
								} catch (e) {
									h && !l && h.exit(), f(e);
								}
							}
							(t.reactions = []),
								(t.notified = !1),
								i && !t.rejection && X(e, t);
						});
					}
				},
				J = function (e, t, i) {
					var n, o;
					H
						? (((n = F.createEvent("Event")).promise = t),
						  (n.reason = i),
						  n.initEvent(e, !1, !0),
						  c.dispatchEvent(n))
						: (n = {
								promise: t,
								reason: i,
						  }),
						(o = c["on" + e])
							? o(n)
							: "unhandledrejection" === e &&
							  k("Unhandled promise rejection", i);
				},
				X = function (e, t) {
					w.call(c, function () {
						var i,
							n = t.value;
						if (
							K(t) &&
							((i = E(function () {
								V
									? B.emit("unhandledRejection", n, e)
									: J("unhandledrejection", e, n);
							})),
							(t.rejection = V || K(t) ? 2 : 1),
							i.error)
						)
							throw i.value;
					});
				},
				K = function (e) {
					return 1 !== e.rejection && !e.parent;
				},
				Z = function (e, t) {
					w.call(c, function () {
						V
							? B.emit("rejectionHandled", e)
							: J("rejectionhandled", e, t.value);
					});
				},
				$ = function (e, t, i, n) {
					return function (o) {
						e(t, i, o, n);
					};
				},
				ee = function (e, t, i, n) {
					t.done ||
						((t.done = !0),
						n && (t = n),
						(t.value = i),
						(t.state = 2),
						Q(e, t, !0));
				},
				te = function e(t, i, n, o) {
					if (!i.done) {
						(i.done = !0), o && (i = o);
						try {
							if (t === n) throw R("Promise can't be resolved itself");
							var r = Y(n);
							r
								? x(function () {
										var o = {
											done: !1,
										};
										try {
											r.call(n, $(e, t, o, i), $(ee, t, o, i));
										} catch (e) {
											ee(t, o, e, i);
										}
								  })
								: ((i.value = n), (i.state = 1), Q(t, i, !1));
						} catch (e) {
							ee(
								t,
								{
									done: !1,
								},
								e,
								i
							);
						}
					}
				};
			W &&
				((q = function (e) {
					m(this, q, C), h(e), n.call(this);
					var t = L(this);
					try {
						e($(te, this, t), $(ee, this, t));
					} catch (e) {
						ee(this, t, e);
					}
				}),
				((n = function (e) {
					P(this, {
						type: C,
						done: !1,
						notified: !1,
						parent: !1,
						reactions: [],
						rejection: !1,
						state: 0,
						value: void 0,
					});
				}).prototype = u(q.prototype, {
					then: function (e, t) {
						var i = j(this),
							n = z(g(this, q));
						return (
							(n.ok = "function" != typeof e || e),
							(n.fail = "function" == typeof t && t),
							(n.domain = V ? B.domain : void 0),
							(i.parent = !0),
							i.reactions.push(n),
							0 != i.state && Q(this, i, !1),
							n.promise
						);
					},
					catch: function (e) {
						return this.then(void 0, e);
					},
				})),
				(o = function () {
					var e = new n(),
						t = L(e);
					(this.promise = e),
						(this.resolve = $(te, e, t)),
						(this.reject = $(ee, e, t));
				}),
				(S.f = z = function (e) {
					return e === q || e === r ? new o(e) : U(e);
				}),
				s ||
					"function" != typeof M ||
					a(
						{
							global: !0,
							enumerable: !0,
							forced: !0,
						},
						{
							fetch: function (e) {
								return _(q, M.apply(c, arguments));
							},
						}
					)),
				a(
					{
						global: !0,
						wrap: !0,
						forced: W,
					},
					{
						Promise: q,
					}
				),
				p(q, C, !1, !0),
				d(C),
				(r = l[C]),
				a(
					{
						target: C,
						stat: !0,
						forced: W,
					},
					{
						reject: function (e) {
							var t = z(this);
							return t.reject.call(void 0, e), t.promise;
						},
					}
				),
				a(
					{
						target: C,
						stat: !0,
						forced: s || W,
					},
					{
						resolve: function (e) {
							return _(s && this === r ? q : this, e);
						},
					}
				),
				a(
					{
						target: C,
						stat: !0,
						forced: G,
					},
					{
						all: function (e) {
							var t = this,
								i = z(t),
								n = i.resolve,
								o = i.reject,
								r = E(function () {
									var i = h(t.resolve),
										r = [],
										a = 0,
										s = 1;
									v(e, function (e) {
										var c = a++,
											l = !1;
										r.push(void 0),
											s++,
											i.call(t, e).then(function (e) {
												l || ((l = !0), (r[c] = e), --s || n(r));
											}, o);
									}),
										--s || n(r);
								});
							return r.error && o(r.value), i.promise;
						},
						race: function (e) {
							var t = this,
								i = z(t),
								n = i.reject,
								o = E(function () {
									var o = h(t.resolve);
									v(e, function (e) {
										o.call(t, e).then(i.resolve, n);
									});
								});
							return o.error && n(o.value), i.promise;
						},
					}
				);
		},
		function (e, t, i) {
			var n = i(24);
			e.exports = function (e, t, i) {
				for (var o in t) n(e, o, t[o], i);
				return e;
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(21),
				o = i(8),
				r = i(5),
				a = i(3),
				s = r("species");
			e.exports = function (e) {
				var t = n(e),
					i = o.f;
				a &&
					t &&
					!t[s] &&
					i(t, s, {
						configurable: !0,
						get: function () {
							return this;
						},
					});
			};
		},
		function (e, t) {
			e.exports = function (e, t, i) {
				if (!(e instanceof t))
					throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation");
				return e;
			};
		},
		function (e, t, i) {
			var n = i(5)("iterator"),
				o = !1;
			try {
				var r = 0,
					a = {
						next: function () {
							return {
								done: !!r++,
							};
						},
						return: function () {
							o = !0;
						},
					};
				(a[n] = function () {
					return this;
				}),
					Array.from(a, function () {
						throw 2;
					});
			} catch (e) {}
			e.exports = function (e, t) {
				if (!t && !o) return !1;
				var i = !1;
				try {
					var r = {};
					(r[n] = function () {
						return {
							next: function () {
								return {
									done: (i = !0),
								};
							},
						};
					}),
						e(r);
				} catch (e) {}
				return i;
			};
		},
		function (e, t, i) {
			var n,
				o,
				r,
				a,
				s,
				c,
				l,
				u = i(2),
				p = i(15).f,
				d = i(18),
				f = i(73).set,
				h = i(74),
				m = u.MutationObserver || u.WebKitMutationObserver,
				y = u.process,
				v = u.Promise,
				b = "process" == d(y),
				g = p(u, "queueMicrotask"),
				w = g && g.value;
			w ||
				((n = function () {
					var e, t;
					for (b && (e = y.domain) && e.exit(); o; ) {
						(t = o.fn), (o = o.next);
						try {
							t();
						} catch (e) {
							throw (o ? a() : (r = void 0), e);
						}
					}
					(r = void 0), e && e.enter();
				}),
				b
					? (a = function () {
							y.nextTick(n);
					  })
					: m && !/(iphone|ipod|ipad).*applewebkit/i.test(h)
					? ((s = !0),
					  (c = document.createTextNode("")),
					  new m(n).observe(c, {
							characterData: !0,
					  }),
					  (a = function () {
							c.data = s = !s;
					  }))
					: v && v.resolve
					? ((l = v.resolve(void 0)),
					  (a = function () {
							l.then(n);
					  }))
					: (a = function () {
							f.call(u, n);
					  })),
				(e.exports =
					w ||
					function (e) {
						var t = {
							fn: e,
							next: void 0,
						};
						r && (r.next = t), o || ((o = t), a()), (r = t);
					});
		},
		function (e, t, i) {
			var n = i(2);
			e.exports = function (e, t) {
				var i = n.console;
				i && i.error && (1 === arguments.length ? i.error(e) : i.error(e, t));
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(0),
				o = i(21),
				r = i(72),
				a = i(75);
			n(
				{
					target: "Promise",
					proto: !0,
					real: !0,
				},
				{
					finally: function (e) {
						var t = r(this, o("Promise")),
							i = "function" == typeof e;
						return this.then(
							i
								? function (i) {
										return a(t, e()).then(function () {
											return i;
										});
								  }
								: e,
							i
								? function (i) {
										return a(t, e()).then(function () {
											throw i;
										});
								  }
								: e
						);
					},
				}
			);
		},
		function (e, t, i) {
			var n = i(0),
				o = i(23),
				r = i(52),
				a = i(29),
				s = i(17),
				c = i(31),
				l = i(11),
				u = function (e, t) {
					var i = this;
					if (!(i instanceof u)) return new u(e, t);
					r && (i = r(new Error(t), o(i)));
					var n = [];
					return (
						c(e, n.push, n),
						(i.errors = n),
						void 0 !== t && l(i, "message", String(t)),
						i
					);
				};
			(u.prototype = a(Error.prototype, {
				constructor: s(5, u),
				name: s(5, "AggregateError"),
			})),
				n(
					{
						global: !0,
					},
					{
						AggregateError: u,
					}
				);
		},
		function (e, t, i) {
			"use strict";
			var n = i(0),
				o = i(16),
				r = i(33),
				a = i(40),
				s = i(31);
			n(
				{
					target: "Promise",
					stat: !0,
				},
				{
					allSettled: function (e) {
						var t = this,
							i = r.f(t),
							n = i.resolve,
							c = i.reject,
							l = a(function () {
								var i = o(t.resolve),
									r = [],
									a = 0,
									c = 1;
								s(e, function (e) {
									var o = a++,
										s = !1;
									r.push(void 0),
										c++,
										i.call(t, e).then(
											function (e) {
												s ||
													((s = !0),
													(r[o] = {
														status: "fulfilled",
														value: e,
													}),
													--c || n(r));
											},
											function (e) {
												s ||
													((s = !0),
													(r[o] = {
														status: "rejected",
														reason: e,
													}),
													--c || n(r));
											}
										);
								}),
									--c || n(r);
							});
						return l.error && c(l.value), i.promise;
					},
				}
			);
		},
		function (e, t, i) {
			"use strict";
			var n = i(0),
				o = i(33),
				r = i(40);
			n(
				{
					target: "Promise",
					stat: !0,
				},
				{
					try: function (e) {
						var t = o.f(this),
							i = r(e);
						return (i.error ? t.reject : t.resolve)(i.value), t.promise;
					},
				}
			);
		},
		function (e, t, i) {
			"use strict";
			var n = i(0),
				o = i(16),
				r = i(21),
				a = i(33),
				s = i(40),
				c = i(31);
			n(
				{
					target: "Promise",
					stat: !0,
				},
				{
					any: function (e) {
						var t = this,
							i = a.f(t),
							n = i.resolve,
							l = i.reject,
							u = s(function () {
								var i = o(t.resolve),
									a = [],
									s = 0,
									u = 1,
									p = !1;
								c(e, function (e) {
									var o = s++,
										c = !1;
									a.push(void 0),
										u++,
										i.call(t, e).then(
											function (e) {
												c || p || ((p = !0), n(e));
											},
											function (e) {
												c ||
													p ||
													((c = !0),
													(a[o] = e),
													--u ||
														l(
															new (r("AggregateError"))(
																a,
																"No one promise resolved"
															)
														));
											}
										);
								}),
									--u ||
										l(new (r("AggregateError"))(a, "No one promise resolved"));
							});
						return u.error && l(u.value), i.promise;
					},
				}
			);
		},
		function (e, t, i) {
			"use strict";
			var n = i(7),
				o = i(76),
				r = i(155),
				a = i(82);
			function s(e) {
				var t = new r(e),
					i = o(r.prototype.request, t);
				return n.extend(i, r.prototype, t), n.extend(i, t), i;
			}
			var c = s(i(79));
			(c.Axios = r),
				(c.create = function (e) {
					return s(a(c.defaults, e));
				}),
				(c.Cancel = i(83)),
				(c.CancelToken = i(167)),
				(c.isCancel = i(78)),
				(c.all = function (e) {
					return Promise.all(e);
				}),
				(c.spread = i(168)),
				(e.exports = c),
				(e.exports.default = c);
		},
		function (e, t) {
			e.exports = function (e) {
				return (
					null != e &&
					null != e.constructor &&
					"function" == typeof e.constructor.isBuffer &&
					e.constructor.isBuffer(e)
				);
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(7),
				o = i(77),
				r = i(156),
				a = i(157),
				s = i(82);
			function c(e) {
				(this.defaults = e),
					(this.interceptors = {
						request: new r(),
						response: new r(),
					});
			}
			(c.prototype.request = function (e) {
				"string" == typeof e
					? ((e = arguments[1] || {}).url = arguments[0])
					: (e = e || {}),
					((e = s(this.defaults, e)).method = e.method
						? e.method.toLowerCase()
						: "get");
				var t = [a, void 0],
					i = Promise.resolve(e);
				for (
					this.interceptors.request.forEach(function (e) {
						t.unshift(e.fulfilled, e.rejected);
					}),
						this.interceptors.response.forEach(function (e) {
							t.push(e.fulfilled, e.rejected);
						});
					t.length;

				)
					i = i.then(t.shift(), t.shift());
				return i;
			}),
				(c.prototype.getUri = function (e) {
					return (
						(e = s(this.defaults, e)),
						o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
					);
				}),
				n.forEach(["delete", "get", "head", "options"], function (e) {
					c.prototype[e] = function (t, i) {
						return this.request(
							n.merge(i || {}, {
								method: e,
								url: t,
							})
						);
					};
				}),
				n.forEach(["post", "put", "patch"], function (e) {
					c.prototype[e] = function (t, i, o) {
						return this.request(
							n.merge(o || {}, {
								method: e,
								url: t,
								data: i,
							})
						);
					};
				}),
				(e.exports = c);
		},
		function (e, t, i) {
			"use strict";
			var n = i(7);
			function o() {
				this.handlers = [];
			}
			(o.prototype.use = function (e, t) {
				return (
					this.handlers.push({
						fulfilled: e,
						rejected: t,
					}),
					this.handlers.length - 1
				);
			}),
				(o.prototype.eject = function (e) {
					this.handlers[e] && (this.handlers[e] = null);
				}),
				(o.prototype.forEach = function (e) {
					n.forEach(this.handlers, function (t) {
						null !== t && e(t);
					});
				}),
				(e.exports = o);
		},
		function (e, t, i) {
			"use strict";
			var n = i(7),
				o = i(158),
				r = i(78),
				a = i(79),
				s = i(165),
				c = i(166);
			function l(e) {
				e.cancelToken && e.cancelToken.throwIfRequested();
			}
			e.exports = function (e) {
				return (
					l(e),
					e.baseURL && !s(e.url) && (e.url = c(e.baseURL, e.url)),
					(e.headers = e.headers || {}),
					(e.data = o(e.data, e.headers, e.transformRequest)),
					(e.headers = n.merge(
						e.headers.common || {},
						e.headers[e.method] || {},
						e.headers || {}
					)),
					n.forEach(
						["delete", "get", "head", "post", "put", "patch", "common"],
						function (t) {
							delete e.headers[t];
						}
					),
					(e.adapter || a.adapter)(e).then(
						function (t) {
							return (
								l(e), (t.data = o(t.data, t.headers, e.transformResponse)), t
							);
						},
						function (t) {
							return (
								r(t) ||
									(l(e),
									t &&
										t.response &&
										(t.response.data = o(
											t.response.data,
											t.response.headers,
											e.transformResponse
										))),
								Promise.reject(t)
							);
						}
					)
				);
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(7);
			e.exports = function (e, t, i) {
				return (
					n.forEach(i, function (i) {
						e = i(e, t);
					}),
					e
				);
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(7);
			e.exports = function (e, t) {
				n.forEach(e, function (i, n) {
					n !== t &&
						n.toUpperCase() === t.toUpperCase() &&
						((e[t] = i), delete e[n]);
				});
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(81);
			e.exports = function (e, t, i) {
				var o = i.config.validateStatus;
				!o || o(i.status)
					? e(i)
					: t(
							n(
								"Request failed with status code " + i.status,
								i.config,
								null,
								i.request,
								i
							)
					  );
			};
		},
		function (e, t, i) {
			"use strict";
			e.exports = function (e, t, i, n, o) {
				return (
					(e.config = t),
					i && (e.code = i),
					(e.request = n),
					(e.response = o),
					(e.isAxiosError = !0),
					(e.toJSON = function () {
						return {
							message: this.message,
							name: this.name,
							description: this.description,
							number: this.number,
							fileName: this.fileName,
							lineNumber: this.lineNumber,
							columnNumber: this.columnNumber,
							stack: this.stack,
							config: this.config,
							code: this.code,
						};
					}),
					e
				);
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(7),
				o = [
					"age",
					"authorization",
					"content-length",
					"content-type",
					"etag",
					"expires",
					"from",
					"host",
					"if-modified-since",
					"if-unmodified-since",
					"last-modified",
					"location",
					"max-forwards",
					"proxy-authorization",
					"referer",
					"retry-after",
					"user-agent",
				];
			e.exports = function (e) {
				var t,
					i,
					r,
					a = {};
				return e
					? (n.forEach(e.split("\n"), function (e) {
							if (
								((r = e.indexOf(":")),
								(t = n.trim(e.substr(0, r)).toLowerCase()),
								(i = n.trim(e.substr(r + 1))),
								t)
							) {
								if (a[t] && o.indexOf(t) >= 0) return;
								a[t] =
									"set-cookie" === t
										? (a[t] ? a[t] : []).concat([i])
										: a[t]
										? a[t] + ", " + i
										: i;
							}
					  }),
					  a)
					: a;
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(7);
			e.exports = n.isStandardBrowserEnv()
				? (function () {
						var e,
							t = /(msie|trident)/i.test(navigator.userAgent),
							i = document.createElement("a");
						function o(e) {
							var n = e;
							return (
								t && (i.setAttribute("href", n), (n = i.href)),
								i.setAttribute("href", n),
								{
									href: i.href,
									protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
									host: i.host,
									search: i.search ? i.search.replace(/^\?/, "") : "",
									hash: i.hash ? i.hash.replace(/^#/, "") : "",
									hostname: i.hostname,
									port: i.port,
									pathname:
										"/" === i.pathname.charAt(0)
											? i.pathname
											: "/" + i.pathname,
								}
							);
						}
						return (
							(e = o(window.location.href)),
							function (t) {
								var i = n.isString(t) ? o(t) : t;
								return i.protocol === e.protocol && i.host === e.host;
							}
						);
				  })()
				: function () {
						return !0;
				  };
		},
		function (e, t, i) {
			"use strict";
			var n = i(7);
			e.exports = n.isStandardBrowserEnv()
				? {
						write: function (e, t, i, o, r, a) {
							var s = [];
							s.push(e + "=" + encodeURIComponent(t)),
								n.isNumber(i) && s.push("expires=" + new Date(i).toGMTString()),
								n.isString(o) && s.push("path=" + o),
								n.isString(r) && s.push("domain=" + r),
								!0 === a && s.push("secure"),
								(document.cookie = s.join("; "));
						},
						read: function (e) {
							var t = document.cookie.match(
								new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
							);
							return t ? decodeURIComponent(t[3]) : null;
						},
						remove: function (e) {
							this.write(e, "", Date.now() - 864e5);
						},
				  }
				: {
						write: function () {},
						read: function () {
							return null;
						},
						remove: function () {},
				  };
		},
		function (e, t, i) {
			"use strict";
			e.exports = function (e) {
				return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
			};
		},
		function (e, t, i) {
			"use strict";
			e.exports = function (e, t) {
				return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(83);
			function o(e) {
				if ("function" != typeof e)
					throw new TypeError("executor must be a function.");
				var t;
				this.promise = new Promise(function (e) {
					t = e;
				});
				var i = this;
				e(function (e) {
					i.reason || ((i.reason = new n(e)), t(i.reason));
				});
			}
			(o.prototype.throwIfRequested = function () {
				if (this.reason) throw this.reason;
			}),
				(o.source = function () {
					var e;
					return {
						token: new o(function (t) {
							e = t;
						}),
						cancel: e,
					};
				}),
				(e.exports = o);
		},
		function (e, t, i) {
			"use strict";
			e.exports = function (e) {
				return function (t) {
					return e.apply(null, t);
				};
			};
		},
		function (e, t, i) {
			"use strict";
			function n(e) {
				return (n =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			var o = i(53),
				r = i(84),
				a = Object.prototype.hasOwnProperty,
				s = {
					brackets: function (e) {
						return e + "[]";
					},
					comma: "comma",
					indices: function (e, t) {
						return e + "[" + t + "]";
					},
					repeat: function (e) {
						return e;
					},
				},
				c = Array.isArray,
				l = Array.prototype.push,
				u = function (e, t) {
					l.apply(e, c(t) ? t : [t]);
				},
				p = Date.prototype.toISOString,
				d = r.default,
				f = {
					addQueryPrefix: !1,
					allowDots: !1,
					charset: "utf-8",
					charsetSentinel: !1,
					delimiter: "&",
					encode: !0,
					encoder: o.encode,
					encodeValuesOnly: !1,
					format: d,
					formatter: r.formatters[d],
					indices: !1,
					serializeDate: function (e) {
						return p.call(e);
					},
					skipNulls: !1,
					strictNullHandling: !1,
				},
				h = function e(t, i, r, a, s, l, p, d, h, m, y, v, b) {
					var g,
						w = t;
					if (
						("function" == typeof p
							? (w = p(i, w))
							: w instanceof Date
							? (w = m(w))
							: "comma" === r &&
							  c(w) &&
							  (w = o
									.maybeMap(w, function (e) {
										return e instanceof Date ? m(e) : e;
									})
									.join(",")),
						null === w)
					) {
						if (a) return l && !v ? l(i, f.encoder, b, "key") : i;
						w = "";
					}
					if (
						"string" == typeof (g = w) ||
						"number" == typeof g ||
						"boolean" == typeof g ||
						"symbol" === n(g) ||
						"bigint" == typeof g ||
						o.isBuffer(w)
					)
						return l
							? [
									y(v ? i : l(i, f.encoder, b, "key")) +
										"=" +
										y(l(w, f.encoder, b, "value")),
							  ]
							: [y(i) + "=" + y(String(w))];
					var x,
						_ = [];
					if (void 0 === w) return _;
					if (c(p)) x = p;
					else {
						var k = Object.keys(w);
						x = d ? k.sort(d) : k;
					}
					for (var S = 0; S < x.length; ++S) {
						var E = x[S],
							O = w[E];
						if (!s || null !== O) {
							var A = c(w)
								? "function" == typeof r
									? r(i, E)
									: i
								: i + (h ? "." + E : "[" + E + "]");
							u(_, e(O, A, r, a, s, l, p, d, h, m, y, v, b));
						}
					}
					return _;
				};
			e.exports = function (e, t) {
				var i,
					o = e,
					l = (function (e) {
						if (!e) return f;
						if (
							null !== e.encoder &&
							void 0 !== e.encoder &&
							"function" != typeof e.encoder
						)
							throw new TypeError("Encoder has to be a function.");
						var t = e.charset || f.charset;
						if (
							void 0 !== e.charset &&
							"utf-8" !== e.charset &&
							"iso-8859-1" !== e.charset
						)
							throw new TypeError(
								"The charset option must be either utf-8, iso-8859-1, or undefined"
							);
						var i = r.default;
						if (void 0 !== e.format) {
							if (!a.call(r.formatters, e.format))
								throw new TypeError("Unknown format option provided.");
							i = e.format;
						}
						var n = r.formatters[i],
							o = f.filter;
						return (
							("function" == typeof e.filter || c(e.filter)) && (o = e.filter),
							{
								addQueryPrefix:
									"boolean" == typeof e.addQueryPrefix
										? e.addQueryPrefix
										: f.addQueryPrefix,
								allowDots: void 0 === e.allowDots ? f.allowDots : !!e.allowDots,
								charset: t,
								charsetSentinel:
									"boolean" == typeof e.charsetSentinel
										? e.charsetSentinel
										: f.charsetSentinel,
								delimiter: void 0 === e.delimiter ? f.delimiter : e.delimiter,
								encode: "boolean" == typeof e.encode ? e.encode : f.encode,
								encoder: "function" == typeof e.encoder ? e.encoder : f.encoder,
								encodeValuesOnly:
									"boolean" == typeof e.encodeValuesOnly
										? e.encodeValuesOnly
										: f.encodeValuesOnly,
								filter: o,
								formatter: n,
								serializeDate:
									"function" == typeof e.serializeDate
										? e.serializeDate
										: f.serializeDate,
								skipNulls:
									"boolean" == typeof e.skipNulls ? e.skipNulls : f.skipNulls,
								sort: "function" == typeof e.sort ? e.sort : null,
								strictNullHandling:
									"boolean" == typeof e.strictNullHandling
										? e.strictNullHandling
										: f.strictNullHandling,
							}
						);
					})(t);
				"function" == typeof l.filter
					? (o = (0, l.filter)("", o))
					: c(l.filter) && (i = l.filter);
				var p,
					d = [];
				if ("object" !== n(o) || null === o) return "";
				p =
					t && t.arrayFormat in s
						? t.arrayFormat
						: t && "indices" in t
						? t.indices
							? "indices"
							: "repeat"
						: "indices";
				var m = s[p];
				i || (i = Object.keys(o)), l.sort && i.sort(l.sort);
				for (var y = 0; y < i.length; ++y) {
					var v = i[y];
					(l.skipNulls && null === o[v]) ||
						u(
							d,
							h(
								o[v],
								v,
								m,
								l.strictNullHandling,
								l.skipNulls,
								l.encode ? l.encoder : null,
								l.filter,
								l.sort,
								l.allowDots,
								l.serializeDate,
								l.formatter,
								l.encodeValuesOnly,
								l.charset
							)
						);
				}
				var b = d.join(l.delimiter),
					g = !0 === l.addQueryPrefix ? "?" : "";
				return (
					l.charsetSentinel &&
						("iso-8859-1" === l.charset
							? (g += "utf8=%26%2310003%3B&")
							: (g += "utf8=%E2%9C%93&")),
					b.length > 0 ? g + b : ""
				);
			};
		},
		function (e, t, i) {
			"use strict";
			var n = i(53),
				o = Object.prototype.hasOwnProperty,
				r = Array.isArray,
				a = {
					allowDots: !1,
					allowPrototypes: !1,
					arrayLimit: 20,
					charset: "utf-8",
					charsetSentinel: !1,
					comma: !1,
					decoder: n.decode,
					delimiter: "&",
					depth: 5,
					ignoreQueryPrefix: !1,
					interpretNumericEntities: !1,
					parameterLimit: 1e3,
					parseArrays: !0,
					plainObjects: !1,
					strictNullHandling: !1,
				},
				s = function (e) {
					return e.replace(/&#(\d+);/g, function (e, t) {
						return String.fromCharCode(parseInt(t, 10));
					});
				},
				c = function (e, t) {
					return e && "string" == typeof e && t.comma && e.indexOf(",") > -1
						? e.split(",")
						: e;
				},
				l = function (e, t, i, n) {
					if (e) {
						var r = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
							a = /(\[[^[\]]*])/g,
							s = i.depth > 0 && /(\[[^[\]]*])/.exec(r),
							l = s ? r.slice(0, s.index) : r,
							u = [];
						if (l) {
							if (
								!i.plainObjects &&
								o.call(Object.prototype, l) &&
								!i.allowPrototypes
							)
								return;
							u.push(l);
						}
						for (
							var p = 0;
							i.depth > 0 && null !== (s = a.exec(r)) && p < i.depth;

						) {
							if (
								((p += 1),
								!i.plainObjects &&
									o.call(Object.prototype, s[1].slice(1, -1)) &&
									!i.allowPrototypes)
							)
								return;
							u.push(s[1]);
						}
						return (
							s && u.push("[" + r.slice(s.index) + "]"),
							(function (e, t, i, n) {
								for (var o = n ? t : c(t, i), r = e.length - 1; r >= 0; --r) {
									var a,
										s = e[r];
									if ("[]" === s && i.parseArrays) a = [].concat(o);
									else {
										a = i.plainObjects ? Object.create(null) : {};
										var l =
												"[" === s.charAt(0) && "]" === s.charAt(s.length - 1)
													? s.slice(1, -1)
													: s,
											u = parseInt(l, 10);
										i.parseArrays || "" !== l
											? !isNaN(u) &&
											  s !== l &&
											  String(u) === l &&
											  u >= 0 &&
											  i.parseArrays &&
											  u <= i.arrayLimit
												? ((a = [])[u] = o)
												: (a[l] = o)
											: (a = {
													0: o,
											  });
									}
									o = a;
								}
								return o;
							})(u, t, i, n)
						);
					}
				};
			e.exports = function (e, t) {
				var i = (function (e) {
					if (!e) return a;
					if (
						null !== e.decoder &&
						void 0 !== e.decoder &&
						"function" != typeof e.decoder
					)
						throw new TypeError("Decoder has to be a function.");
					if (
						void 0 !== e.charset &&
						"utf-8" !== e.charset &&
						"iso-8859-1" !== e.charset
					)
						throw new TypeError(
							"The charset option must be either utf-8, iso-8859-1, or undefined"
						);
					var t = void 0 === e.charset ? a.charset : e.charset;
					return {
						allowDots: void 0 === e.allowDots ? a.allowDots : !!e.allowDots,
						allowPrototypes:
							"boolean" == typeof e.allowPrototypes
								? e.allowPrototypes
								: a.allowPrototypes,
						arrayLimit:
							"number" == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
						charset: t,
						charsetSentinel:
							"boolean" == typeof e.charsetSentinel
								? e.charsetSentinel
								: a.charsetSentinel,
						comma: "boolean" == typeof e.comma ? e.comma : a.comma,
						decoder: "function" == typeof e.decoder ? e.decoder : a.decoder,
						delimiter:
							"string" == typeof e.delimiter || n.isRegExp(e.delimiter)
								? e.delimiter
								: a.delimiter,
						depth:
							"number" == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
						ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
						interpretNumericEntities:
							"boolean" == typeof e.interpretNumericEntities
								? e.interpretNumericEntities
								: a.interpretNumericEntities,
						parameterLimit:
							"number" == typeof e.parameterLimit
								? e.parameterLimit
								: a.parameterLimit,
						parseArrays: !1 !== e.parseArrays,
						plainObjects:
							"boolean" == typeof e.plainObjects
								? e.plainObjects
								: a.plainObjects,
						strictNullHandling:
							"boolean" == typeof e.strictNullHandling
								? e.strictNullHandling
								: a.strictNullHandling,
					};
				})(t);
				if ("" === e || null == e)
					return i.plainObjects ? Object.create(null) : {};
				for (
					var u =
							"string" == typeof e
								? (function (e, t) {
										var i,
											l = {},
											u = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
											p =
												t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
											d = u.split(t.delimiter, p),
											f = -1,
											h = t.charset;
										if (t.charsetSentinel)
											for (i = 0; i < d.length; ++i)
												0 === d[i].indexOf("utf8=") &&
													("utf8=%E2%9C%93" === d[i]
														? (h = "utf-8")
														: "utf8=%26%2310003%3B" === d[i] &&
														  (h = "iso-8859-1"),
													(f = i),
													(i = d.length));
										for (i = 0; i < d.length; ++i)
											if (i !== f) {
												var m,
													y,
													v = d[i],
													b = v.indexOf("]="),
													g = -1 === b ? v.indexOf("=") : b + 1;
												-1 === g
													? ((m = t.decoder(v, a.decoder, h, "key")),
													  (y = t.strictNullHandling ? null : ""))
													: ((m = t.decoder(
															v.slice(0, g),
															a.decoder,
															h,
															"key"
													  )),
													  (y = n.maybeMap(c(v.slice(g + 1), t), function (e) {
															return t.decoder(e, a.decoder, h, "value");
													  }))),
													y &&
														t.interpretNumericEntities &&
														"iso-8859-1" === h &&
														(y = s(y)),
													v.indexOf("[]=") > -1 && (y = r(y) ? [y] : y),
													o.call(l, m)
														? (l[m] = n.combine(l[m], y))
														: (l[m] = y);
											}
										return l;
								  })(e, i)
								: e,
						p = i.plainObjects ? Object.create(null) : {},
						d = Object.keys(u),
						f = 0;
					f < d.length;
					++f
				) {
					var h = d[f],
						m = l(h, u[h], i, "string" == typeof e);
					p = n.merge(p, m, i);
				}
				return n.compact(p);
			};
		},
		function (e, t, i) {
			"use strict";
			var n, o;
			i.r(t),
				(function (e) {
					(e[(e.Pugv = 0)] = "Pugv"),
						(e[(e.OgvPre = 1)] = "OgvPre"),
						(e[(e.OgvPageList = 2)] = "OgvPageList"),
						(e[(e.OgvExtraParams = 3)] = "OgvExtraParams"),
						(e[(e.ogvFollowers = 4)] = "ogvFollowers"),
						(e[(e.Game = 5)] = "Game"),
						(e[(e.PugvCenter = 6)] = "PugvCenter");
				})(n || (n = {})),
				(function (e) {
					(e.inited = "inited"),
						(e.enter = "video_media_enter"),
						(e.play = "video_media_play"),
						(e.playing = "video_media_playing"),
						(e.canplay = "video_media_canplay"),
						(e.pause = "video_media_pause"),
						(e.seek = "video_media_seek"),
						(e.seeking = "video_media_seeking"),
						(e.seeked = "video_media_seeked"),
						(e.seekEnd = "video_media_seek_end"),
						(e.time = "video_media_time"),
						(e.error = "video_media_error"),
						(e.buffer = "video_media_buffer"),
						(e.buffered = "video_media_buffer_end"),
						(e.bufferFull = "video_media_buffer_full"),
						(e.loadlag = "video_media_loadlag"),
						(e.ended = "video_media_ended"),
						(e.volume = "video_media_volume"),
						(e.mute = "video_media_mute"),
						(e.attached = "video_media_attached"),
						(e.load = "video_media_load"),
						(e.loaded = "video_media_loaded"),
						(e.playerLoad = "video_player_load"),
						(e.playerLoaded = "video_player_loaded"),
						(e.playurlLoad = "video_playurl_load"),
						(e.playurlLoaded = "video_playurl_loaded"),
						(e.danmakuLoad = "video_danmaku_load"),
						(e.danmakuLoaded = "video_danmaku_loaded"),
						(e.pagelistLoaded = "video_pagelist_loaded"),
						(e.websocketLink = "video_websocket_link"),
						(e.websocketLinked = "video_websocket_linked"),
						(e.websocketError = "video_websocket_error"),
						(e.websocketEnd = "video_websocket_end"),
						(e.initializing = "video_initializing"),
						(e.initialized = "video_initialized"),
						(e.scroll = "video_scroll"),
						(e.resize = "video_resize"),
						(e.playerResize = "video_player_resize"),
						(e.progressbarResize = "video_progressbar_resize"),
						(e.refullscreen = "video_refullscreen"),
						(e.fullscreenChanged = "video_fullscreen_mode_changed"),
						(e.mousemove = "video_mousemove"),
						(e.heartbeat = "video_heartbeat"),
						(e.controlbar = "video_controlbar"),
						(e.beforeDestroy = "video_before_destroy"),
						(e.destroy = "video_destroy"),
						(e.log = "video_log"),
						(e.logUpdate = "video_log_update"),
						(e.logClose = "video_log_close"),
						(e.promoteInit = "video_promote_init"),
						(e.preloadError = "video_preload_error"),
						(e.subtitleChange = "video_subtitle_change"),
						(e.panelHover = "video_panel_hover"),
						(e.guide_attention_pos_update = "video_guide_attention_pos_update"),
						(e.mirror = "video_mirror"),
						(e.videoResize = "video_size_resize"),
						(e.dashError = "dash_player_error"),
						(e.initialCB = "initialCallback"),
						(e.itEnded = "interactive_video_ended"),
						(e.itStart = "interactive_video_countdown_start"),
						(e.playerReload = "player_reload"),
						(e.playerReloaded = "player_reloaded"),
						(e.loadedCB = "loadedCallback"),
						(e.progressUpdate = "video_progress_update"),
						(e.fullwin = "player_fullwin"),
						(e.widewin = "player_widewin"),
						(e.selector = "player_selector"),
						(e.feedBack = "feed_back"),
						(e.flashBirdge = "flash_birdge"),
						(e.heimu = "heimu");
				})(o || (o = {}));
			i(86), i(90), i(132);
			var r = i(6),
				a = i.n(r),
				s = i(34),
				c = i.n(s),
				l = i(9),
				u = i.n(l);
			function p(e) {
				for (
					var t = location.search.replace(/^\?/, "").split("&"),
						i = {},
						n = 0,
						o = t.length;
					n < o;
					n++
				) {
					var r = t[n].split("=");
					i[r[0]] = r[1];
				}
				return e ? i[e] || "" : i;
			}
			function d(e) {
				var t = {
						share_medium: "",
						share_source: "",
						bbid: "",
						ts: "",
					},
					i = "";
				for (var n in t) {
					var o = p(n);
					if (!o) {
						i = "";
						break;
					}
					(t[n] = o), (i += "&".concat(n, "=").concat(o));
				}
				var r = u.a.getCookie("buvid3");
				return encodeURIComponent(
					btoa(
						"pvid="
							.concat(r, "_")
							.concat(e, "_")
							.concat(new Date().getTime(), "&ua=")
							.concat(
								encodeURIComponent(window.navigator.userAgent),
								"&isAutoOpen=false&bsource="
							)
							.concat(window.bsource)
							.concat(i)
					)
				);
			}
			function f(e) {
				var t = e.type,
					i = e.id,
					n = e.extra,
					o = void 0 === n ? "" : n,
					r = u.a.getCookie("_uuid");
				switch (t) {
					case "video":
						return "bilibili://video/"
							.concat(i, "?h5awaken=")
							.concat(d(i), "&uuid=")
							.concat(r)
							.concat(o);
					case "tag":
						return "bilibili://tag/".concat(i);
					case "playlist":
						return "bilibili://music/playlist/playpage/".concat(i);
					case "index":
						return "bilibili://rank/rank";
					case "audio":
						return "bilibili://music/detail/".concat(i).concat(o);
					case "audioMenu":
						return "bilibili://music/menu/detail/".concat(i).concat(o);
					case "space":
						return "bilibili://space/".concat(i);
					case "new-channel":
						return "bilibili://pegasus/channel/".concat(i);
					case "hot":
						return "bilibili://home?tab_name=热门";
					default:
						return "bilibili://rank/rank";
				}
			}
			function h(e) {
				var t = e.type,
					i = e.id,
					n = e.extra,
					o = void 0 === n ? "" : n;
				return ["tag", "index"].indexOf(t) >= 0
					? "http://m.bilibili.com/index.html"
					: "channel" === t
					? "http://m.bilibili.com/channel.html"
					: "video" === t
					? "http://m.bilibili.com/video/av"
							.concat(i, ".html?h5awaken=")
							.concat(d(i))
					: "audio" === t
					? "http://m.bilibili.com/audio/au"
							.concat(i, ".html?h5awaken=")
							.concat(d(i))
					: "new-channel" === t
					? "http://m.bilibili.com/new-channel/".concat(i)
					: i
					? location.href + o
					: "http://m.bilibili.com/index.html";
			}
			function m(e) {
				var t = "av".concat(e),
					i = JSON.parse(window.abtest).hitGroup,
					n = parseInt(new Date().getTime() / 1e3),
					o = u.a.getCookie("_uuid"),
					r = S(),
					a = "?abtest="
						.concat(1 === r.copylink_abtest ? "E" : "C", "&ts=")
						.concat(n, "&expid=")
						.concat(i, "&uuid=")
						.concat(o, "&bsource=")
						.concat(window.bsource);
				return "".concat("FromUriOpen@bilibili://").concat(E(t + a));
			}
			var y = {
				openApp: function (e) {
					var t,
						i = e.type,
						n = e.id,
						o = e.extra,
						r = void 0 === o ? "" : o,
						a = e.experience,
						s = f({
							type: i,
							id: n,
							extra: r,
						}),
						c = h({
							type: i,
							id: n,
							extra: r,
						}),
						l = navigator.userAgent,
						p = /zhihu/i.test(l);
					"video" !== i || p || O(m(n)),
						a && window.browser.version.android
							? ("uc_browser_app" === window.bsource
									? (t =
											"http://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_uc_browser_app.apk")
									: "qq" === window.bsource &&
									  (t =
											"http://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_qq.apk"),
							  u.a.openApp({
									schema: s,
									universalLink: c,
									delayDownload: !0,
									downloadUrl: t,
							  }))
							: u.a.openApp({
									schema: s,
									universalLink: c,
									delayDownload: !0,
									directDownload: p,
							  });
				},
				autoOpenApp: function (e) {
					var t = e.avid,
						i = e.type,
						n = e.extra;
					return new Promise(function (e) {
						var o = /seo|Tencent_yyb|wechat|iqiyi_video_app|bdbox|qq|weibo|dianping/.test(
								window.bsource
							),
							r = /AliGenieCC-S1/.test(navigator.userAgent),
							a = u.a.getCookie("buvid3"),
							s = encodeURIComponent(
								btoa(
									"pvid="
										.concat(a, "_")
										.concat(t, "_")
										.concat(new Date().getTime(), "&ua=")
										.concat(
											encodeURIComponent(window.navigator.userAgent),
											"&isAutoOpen=true&bsource="
										)
										.concat(window.bsource)
								)
							);
						if (!o && !r)
							switch (i) {
								case "video":
									window.reportMsgObj &&
										window.reportObserver &&
										((window.reportMsgObj.click = "video".concat(
											t,
											"AutoOpen"
										)),
										window.reportObserver.forceCommit()),
										setTimeout(function () {
											(location.href = "bilibili://video/"
												.concat(t, "?h5awaken=")
												.concat(s)
												.concat(n)),
												e();
										}, 500);
									break;
								default:
									setTimeout(function () {
										(location.href = "bilibili://rank/rank"), e();
									}, 500);
							}
					});
				},
				judgeOverSea: u.a.judgeOverSea,
				directOpenApp: function (e) {
					var t,
						i = e.type,
						n = e.id,
						o = e.extra,
						r = void 0 === o ? "" : o,
						a = e.experience,
						s = "".concat(
							f({
								type: i,
								id: n,
								extra: r,
							})
						),
						c = h({
							type: i,
							id: n,
							extra: r,
						});
					"video" === i && O(m(n)),
						a && window.browser.version.android
							? ("uc_browser_app" === window.bsource
									? (t =
											"http://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_uc_browser_app.apk")
									: "qq" === window.bsource &&
									  (t =
											"http://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_qq.apk"),
							  u.a.openApp({
									schema: s,
									universalLink: c,
									directDownload: !0,
									downloadUrl: t,
							  }))
							: u.a.openApp({
									schema: s,
									universalLink: c,
									directDownload: !0,
							  });
				},
				schemaOpenApp: function (e) {
					var t,
						i = e.type,
						n = e.id,
						o = e.extra,
						r = void 0 === o ? "" : o,
						a = e.experience,
						s = "".concat(
							f({
								type: i,
								id: n,
								extra: r,
							})
						),
						c = h({
							type: i,
							id: n,
							extra: r,
						});
					"video" === i && O(m(n)),
						a && window.browser.version.android
							? ("uc_browser_app" === window.bsource
									? (t =
											"http://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_uc_browser_app.apk")
									: "qq" === window.bsource &&
									  (t =
											"http://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_qq.apk"),
							  u.a.openApp({
									schema: s,
									universalLink: c,
									onlySchema: !0,
									autoDownload: !1,
									downloadUrl: t,
							  }))
							: u.a.openApp({
									schema: s,
									universalLink: c,
									onlySchema: !0,
									autoDownload: !1,
							  });
				},
			};
			function v(e) {
				var t;
				return (
					void 0 === e && (e = 0),
					(t = ("0" + ((e = Math.floor(e) >> 0) % 60)).slice(-2)),
					(t = Math.floor(e / 60) + ":" + t).length < 5 && (t = "0" + t),
					t
				);
			}
			function b(e, t) {
				return " ".concat(e.className, " ").indexOf(" ".concat(t, " ")) > -1;
			}
			function g(e, t, i) {
				if (e.addEventListener) e.addEventListener(t, i, !1);
				else {
					var n = "on" + t;
					if (e.attachEvent) e.attachEvent(n, i);
					else {
						var o = e[n];
						e[n] = function (e) {
							(e = e || window.event), i.call(null, e), o && o.call(null, e);
						};
					}
				}
			}
			function w(e) {
				for (var t = 0, i = 0; e; )
					(t += e.offsetTop), (i += e.offsetLeft), (e = e.offsetParent);
				return {
					left: i,
					top: t,
				};
			}
			function x(e) {
				var t = "" + document.cookie,
					i = t.indexOf(e + "=");
				if (-1 == i || "" == e) return "";
				var n = t.indexOf(";", i);
				return (
					-1 == n && (n = t.length), unescape(t.substring(i + e.length + 1, n))
				);
			}
			var _,
				k = function (e, t) {
					if (
						"undefined" != typeof localStorage &&
						localStorage &&
						localStorage.setItem
					)
						return localStorage.setItem(e, t);
					var i = new Date();
					i.setTime(i.getTime() + 31536e6),
						(document.cookie =
							e +
							"=" +
							escape(t) +
							";expires=" +
							i.toGMTString() +
							"; path=/; domain=.bilibili.com");
				},
				S = function () {
					var e;
					if (
						(e = window.abserver
							? window.abserver
							: JSON.parse(localStorage.getItem("ABTEST_INFO")))
					) {
						var t = e.vars,
							i = {};
						return (
							t.forEach(function (e) {
								i[e.name] = e.value;
							}),
							i
						);
					}
					return {};
				},
				E = function (e) {
					var t,
						i,
						n,
						o,
						r,
						a,
						s,
						c =
							"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
						l = "",
						u = 0;
					for (
						e = (function (e) {
							var t = "";
							e = e.replace(/\r\n/g, "\n");
							for (var i = 0; i < e.length; i++) {
								var n = e.charCodeAt(i);
								n < 128
									? (t += String.fromCharCode(n))
									: n > 127 && n < 2048
									? ((t += String.fromCharCode((n >> 6) | 192)),
									  (t += String.fromCharCode((63 & n) | 128)))
									: ((t += String.fromCharCode((n >> 12) | 224)),
									  (t += String.fromCharCode(((n >> 6) & 63) | 128)),
									  (t += String.fromCharCode((63 & n) | 128)));
							}
							return t;
						})(e);
						u < e.length;

					)
						(o = (t = e.charCodeAt(u++)) >> 2),
							(r = ((3 & t) << 4) | ((i = e.charCodeAt(u++)) >> 4)),
							(a = ((15 & i) << 2) | ((n = e.charCodeAt(u++)) >> 6)),
							(s = 63 & n),
							isNaN(i) ? (a = s = 64) : isNaN(n) && (s = 64),
							(l = l + c.charAt(o) + c.charAt(r) + c.charAt(a) + c.charAt(s));
					return l;
				},
				O = function (e) {
					var t = navigator.userAgent,
						i = t.indexOf("Android") > -1 || t.indexOf("Adr") > -1,
						n = !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
					if (i || (!i && !n)) {
						var o = document.createElement("input");
						document.body.appendChild(o),
							o.setAttribute("value", e),
							o.select(),
							document.execCommand("copy"),
							document.body.removeChild(o);
					}
					if (n) {
						o = document.createElement("input");
						var r = document.createRange();
						document.body.appendChild(o),
							o.setAttribute("value", e),
							r.selectNode(o),
							window.getSelection().removeAllRanges(),
							window.getSelection().addRange(r),
							document.execCommand("copy"),
							document.body.removeChild(o);
					}
				},
				A = function (e, t) {
					var i =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
					window.reportMsgObj &&
						window.reportObserver &&
						((window.reportMsgObj[e] = window.bsource || "default"),
						(window.reportMsgObj.click = e),
						window.reportObserver.forceCommit()),
						y.openApp({
							id: t,
							type: "video",
							extra: "&page=".concat(i - 1),
						});
				};
			function D(e) {
				if (!e) throw "Slider:缺少初始化参数";
				(this.opts = e),
					(this.min = e.min || 0),
					(this.max = e.max || 100),
					(this.value = -1),
					(this.label = e.label || ""),
					(this.upLayer = this.opts.upLayer),
					(this.parent = this.opts.parent),
					(this.uiValue = 0),
					(this.liveDragging =
						void 0 !== this.opts.liveDragging && this.opts.liveDragging),
					(this.container = document.createElement("div")),
					(this.container.className = "ui-slider-container"),
					(this.labelLayer = document.createElement("div")),
					(this.labelLayer.className = "ui-slider-label"),
					(this.thumb = document.createElement("div")),
					(this.thumb.className = "ui-slider-thumb"),
					(this.tracker = document.createElement("div")),
					(this.tracker.className = "ui-slider-tracker"),
					(this.eventLayer = document.createElement("div")),
					(this.eventLayer.className = "ui-slider-event-layer"),
					(this.moveCount = 0),
					(this.upLayer = this.upLayer || this.eventLayer),
					this.container.appendChild(this.tracker),
					this.container.appendChild(this.labelLayer),
					this.container.appendChild(this.thumb),
					this.container.appendChild(this.eventLayer);
				var t,
					i = this;
				(t = window.navigator.userAgent),
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						t
					)
						? (g(this.eventLayer, "touchstart", function (e) {
								i.onmousedown(),
									i.ontouchmove(e.touches[0].pageX, e.touches[0].pageY);
						  }),
						  g(this.upLayer, "touchend", function (e) {
								i._down && i.onmouseup();
						  }))
						: (g(this.eventLayer, "mousedown", function (e) {
								window.navigator.userAgent.indexOf("Firefox") > -1 &&
									(function (e) {
										if (!e.hasOwnProperty("offsetX")) {
											var t = 0,
												i = 0;
											if (e.offsetParent) {
												var n = e;
												do {
													(t += n.offsetLeft), (i += n.offsetTop);
												} while ((n = n.offsetParent));
											}
											(e.offsetX = e.layerX - t), (e.offsetY = e.layerY - i);
										}
									})(e),
									i.onmousedown(),
									i.onmousemove(e.pageX, e.pageY);
						  }),
						  g(this.upLayer, "mouseup", function (e) {
								i._down && i.onmouseup();
						  })),
					(this.upLayer.onmouseleave = function (e) {
						i._down && (console.log("out", e), i.onmouseup());
					}),
					(this.upLayer.onmousemove = function (e) {
						i._down && i.onmousemove(e.pageX, e.pageY);
					}),
					g(this.eventLayer, "touchmove", function (e) {
						i.ontouchmove(e.touches[0].pageX, e.touches[0].pageY);
					}),
					this.opts.parent.appendChild(this.container),
					this.setLabel(this.label),
					this.setValue(this.opts.value);
			}
			(D.prototype = {
				constructor: D,
				onclick: function () {},
				onmousedown: function () {
					(this.moveCount = 0),
						(this.portrait = this.opts.player.elem
							.querySelector(".player-box")
							.classList.contains("portrait")),
						(this._down = !0);
				},
				onmouseup: function () {
					this._down &&
						((this._down = !1),
						this.opts.onChange &&
							(this.opts.onChange(this.uiValue, this.moveCount),
							this.setValue(this.uiValue)));
				},
				onmousemove: function (e, t) {
					if (this._down) {
						var i;
						this.moveCount++,
							this.portrait
								? ((t -= this.container.getBoundingClientRect().top),
								  (i = this.positionToValue(t)))
								: ((e -= w(this.container).left),
								  (i = this.positionToValue(e)));
						var n = this.uiValue;
						(this.uiValue = i),
							this.setValue(i, !1),
							this._updatePosition(!0),
							this.liveDragging &&
								this.opts.onChange &&
								this.uiValue != n &&
								this.opts.onChange(this.uiValue);
					}
				},
				ontouchmove: function (e, t) {
					var i;
					this._down &&
						(this.moveCount++,
						this.portrait
							? ((t -= this.container.getBoundingClientRect().top),
							  (i = this.positionToValue(t)))
							: ((e -= w(this.container).left), (i = this.positionToValue(e))),
						(this.uiValue = i),
						this.setValue(i, !1),
						this._updatePosition(!0));
				},
				valueToPosition: function (e) {
					return (e - this.min) / (this.max - this.min);
				},
				positionToValue: function (e) {
					if (this.portrait) {
						var t = this.eventLayer.offsetWidth;
						return (
							(e = Math.max(0, e)),
							(e = Math.min(t, e)),
							this.min + ((this.max - this.min) * e) / t
						);
					}
					var i = this.eventLayer.offsetWidth;
					return (
						(e = Math.max(0, e)),
						(e = Math.min(i, e)),
						this.min + ((this.max - this.min) * e) / i
					);
				},
				getValue: function () {
					return this.min + this.getPercents() * (this.max - this.min);
				},
				getPercents: function () {
					return (this.value - this.min) / (this.max - this.min);
				},
				setValue: function (e, t) {
					(t = !1 !== t),
						(e = Math.min(this.max, Math.max(this.min, e))),
						this.value != e && ((this.value = e), this._dispatchChange(e));
				},
				setMax: function (e) {
					(this.max = e), this._updatePosition();
				},
				_dispatchChange: function (e) {
					this._updatePosition(),
						this.opts.labelFunc
							? this.setLabel(
									this.label + ": " + this.opts.labelFunc(this.value)
							  )
							: this.setLabel(this.label + ": " + this.value);
				},
				_updatePosition: function (e) {
					(this._down && !e) ||
						(this.thumb.style.width = 100 * this.getPercents() + "%");
				},
				setLabel: function (e) {
					this.labelLayer.innerHTML = e;
				},
			}),
				((_ = document.createElement("style")).type = "text/css"),
				(_.innerHTML =
					'.ui-slider-container {position: absolute;width: 100%;height: 30px;text-align: center;}.ui-slider-thumb {position: absolute;top: 0px;bottom: 0px;left: 0px;}.ui-slider-thumb:after {content: "";position: absolute;display: block;top: 0px;right: -30px;width: 30px;height: 30px;border-radius: 28px;box-shadow: 0 0 2pt rgba(0, 0, 0, 0.5);background-color: #fff;}.ui-slider-tracker {position: absolute;top: 0px;bottom: 0px;left: 0px;right: -30px;background: #888;}.ui-slider-event-layer {position: absolute;top: 0px;left: 0px;bottom: 0px;right: -30px;}.ui-slider-label {position: absolute;display: block;top: 0px;bottom: 0px;left: 0px;right: 0px;line-height: 30px;font-size: 10px;color: #fff;}'),
				document.head.appendChild(_);
			var T = (function () {
				function e() {}
				var t;
				return (
					(e.assign = function () {
						for (var e = [], t = 0; t < arguments.length; t++)
							e[t] = arguments[t];
						if (e.length <= 1) return e[0];
						var i = null != e[0] ? Object(e[0]) : {};
						return (
							e.forEach(function (e, t) {
								if (0 !== t && null != e)
									for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
							}),
							i
						);
					}),
					(e.getHexColor = function (e) {
						return "#" + ("000000" + e.toString(16)).slice(-6);
					}),
					(e.browser = {
						version:
							((t = navigator.userAgent),
							{
								trident: /Trident/i.test(t),
								presto: /Presto/i.test(t),
								webKit: /AppleWebKit/i.test(t),
								gecko: /Gecko/i.test(t) && !/KHTML/i.test(t),
								mobile: /AppleWebKit.*Mobile.*/i.test(t),
								ios: /Mac OS X[\s\_\-\/](\d+[\.\-\_]\d+[\.\-\_]?\d*)/i.test(t),
								android: /Android/i.test(t),
								linux: /Linux/i.test(t),
								windowsphone: /Windows Phone/i.test(t),
								iPhone: /iPhone/i.test(t),
								iPad:
									/iPad/i.test(t) ||
									("MacIntel" === navigator.platform &&
										navigator.maxTouchPoints > 1),
								MicroMessenger: /MicroMessenger/i.test(t),
								webApp: !/Safari/i.test(t),
								edge: /edge/i.test(t),
								safari:
									/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.test(
										t.toLowerCase()
									) ||
									/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.test(
										t.toLowerCase()
									),
							}),
					}),
					e
				);
			})();
			var C = function (e, t) {
				return (C =
					Object.setPrototypeOf ||
					({
						__proto__: [],
					} instanceof Array &&
						function (e, t) {
							e.__proto__ = t;
						}) ||
					function (e, t) {
						for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
					})(e, t);
			};
			function L(e, t) {
				function i() {
					this.constructor = e;
				}
				C(e, t),
					(e.prototype =
						null === t
							? Object.create(t)
							: ((i.prototype = t.prototype), new i()));
			}
			var P = (function (e) {
					function t() {
						var i = e.call(this) || this;
						return Object.setPrototypeOf(i, t.prototype), i;
					}
					return (
						L(t, e),
						(t.prototype.bsearch = function (e, t) {
							if (0 === this.length) return 0;
							if (t(e, this[0]) < 0) return 0;
							if (t(e, this[this.length - 1]) >= 0) return this.length;
							for (var i, n = 0, o = this.length - 1, r = 0; n <= o; ) {
								if (
									(r++,
									t(e, this[(i = Math.floor((n + o + 1) / 2)) - 1]) >= 0 &&
										t(e, this[i]) < 0)
								)
									return i;
								if (
									(t(e, this[i - 1]) < 0
										? (o = i - 1)
										: t(e, this[i]) >= 0
										? (n = i)
										: window.console.error("Catch an ERROR"),
									r > 1e3)
								) {
									window.console.error("1000");
									break;
								}
							}
							return -1;
						}),
						(t.prototype.binsert = function (e, t) {
							var i = this.bsearch(e, t);
							return this.splice(i, 0, e), i;
						}),
						(t.prototype.bremove = function (e) {
							for (var t = 0; t < this.length; t++)
								if (this[t] === e) return void this.splice(t, 1);
						}),
						t
					);
				})(Array),
				j = (function (e) {
					function t(i) {
						var n = e.call(this) || this;
						return (
							Object.setPrototypeOf(n, t.prototype),
							(n.fnCompare = i || t.fnCompareDefault),
							n
						);
					}
					return (
						L(t, e),
						(t.fnCompareDefault = function (e, t) {
							return e.stime - t.stime;
						}),
						(t.prototype.insert = function () {
							for (var e = [], t = 0; t < arguments.length; t++)
								e[t] = arguments[t];
							for (var i = 0; i < e.length; )
								this.binsert(e[i], this.fnCompare), i++;
							return this;
						}),
						(t.prototype.remove = function (e) {
							for (var t = this.bsearch(e, this.fnCompare); t >= 0; ) {
								if (this[t] === e) return this.splice(t, 1), !0;
								t--;
							}
							return !1;
						}),
						(t.prototype.getItemsByRange = function (e, t) {
							var i = this.bsearch(e, this.fnCompare),
								n = this.bsearch(t, this.fnCompare);
							return this.getItemsByIndexRange(i, n);
						}),
						(t.prototype.getItemsByIndexRange = function (e, t) {
							var i = [];
							if (t <= e) return i;
							for (; e < t && e < this.length; ) i.push(this[e]), e++;
							return i;
						}),
						t
					);
				})(P),
				q = (function () {
					function e(e, t) {
						(this.config = e), (this.scroll = t), (this.lists = []);
					}
					return (
						(e.prototype.clean = function () {
							this.lists = [];
						}),
						(e.prototype.add = function (e) {
							this.scroll
								? (e.x = e.distance)
								: (e.x = (e.distance - e.dWidth) / 2),
								e.dHength >=
								e.vDistance *
									(e.textData.vDanmaku
										? 1
										: this.config.preventShade
										? 0.85
										: 1) -
									(this.config.offsetTop || 0) -
									(this.config.offsetBottom || 0)
									? e.setY(0, -1)
									: this.setY(e, 0);
						}),
						(e.prototype.remove = function (e) {
							-1 !== e.index &&
								void 0 !== this.lists[e.index] &&
								this.lists[e.index].bremove(e);
						}),
						(e.prototype.vCheck = function (e, t, i) {
							var n,
								o,
								r = e + t.dHength;
							if (this.scroll) {
								var a = t.x + t.dWidth;
								for (n = 0; n < this.lists[i].length; n++)
									if ((o = this.lists[i][n])) {
										if (e < (this.config.offsetTop || 0)) return !1;
										if (!(o.y > r || o.bottom < e)) {
											if (o.getRight(t.start) < t.x || o.getX(t.start) > a) {
												if (o.end <= t.middle) continue;
												return !1;
											}
											return !1;
										}
									}
							} else
								for (n = 0; n < this.lists[i].length; n++)
									if (
										!(
											((o = this.lists[i][n]).y > r || o.bottom < e) &&
											e >= (this.config.offsetTop || 0)
										)
									)
										return !1;
							return !0;
						}),
						(e.prototype.setY = function (e, t) {
							var i = this.config.offsetTop || 0,
								n = !1;
							void 0 !== e.textData.offsetTop &&
								((n = !0), (i = e.textData.offsetTop || 0)),
								this.lists.length <= t && this.lists.push(new P());
							var o = this.lists[t];
							if (0 === o.length) return e.setY(i, t), void o.push(e);
							if (this.vCheck(i, e, t) || n)
								return e.setY(i, t), void this.insert(o, e);
							for (var r = 0; r < o.length; r++) {
								var a = o[r];
								if (a) {
									if (
										((i = a.bottom + 1),
										this.config.danmakuArea &&
											6 !== e.textData.mode &&
											e.textData.class < 1 &&
											i > (e.vDistance * this.config.danmakuArea) / 100)
									) {
										e.rest = -1;
										break;
									}
									if (
										i + e.dHength >
										e.vDistance *
											(e.textData.vDanmaku
												? 1
												: this.config.preventShade
												? 0.85
												: 1) -
											(this.config.offsetBottom || 0)
									)
										break;
									if (this.vCheck(i, e, t))
										return e.setY(i, t), void this.insert(o, e);
								}
							}
							0 === this.config.danmakuArea ||
							6 === e.textData.mode ||
							e.textData.class >= 1
								? this.setY(e, t + 1)
								: (e.rest = -1);
						}),
						(e.prototype.insert = function (e, t) {
							e.binsert(t, function (e, t) {
								return t && e ? e.bottom - t.bottom : 0;
							});
						}),
						e
					);
				})(),
				R = (function () {
					function e(e) {
						this.config = e;
					}
					return (
						(e.prototype.onStart = function (e) {
							this.spaceManager.add(e), (e.manager = this);
						}),
						(e.prototype.onEnd = function (e, t) {
							this.spaceManager.remove(e), (e.manager = null), e.free();
						}),
						e
					);
				})(),
				F = {
					1: (function (e) {
						function t(t) {
							var i = e.call(this, t) || this;
							return (i.spaceManager = new q(t, !0)), i;
						}
						return (
							L(t, e),
							(t.prototype.onUpdate = function (e, t) {
								return (
									!(!e.paused && e.rest < (+new Date() - e.pauseTime) / 1e3) &&
									((e._x = e.getX(t)), (e._y = e.y), !0)
								);
							}),
							(t.prototype.onEnd = function (e, t) {
								return (
									this.spaceManager.remove(e), (e.manager = null), e.free(t)
								);
							}),
							t
						);
					})(R),
					4: (function (e) {
						function t(t) {
							var i = e.call(this, t) || this;
							return (i.spaceManager = new q(t)), i;
						}
						return (
							L(t, e),
							(t.prototype.onUpdate = function (e, t) {
								return (
									!(e.end < t) &&
									((e._x = e.x),
									(e._y =
										this.config.height * (this.config.preventShade ? 0.85 : 1) -
										(this.config.offsetBottom || 0) -
										e.y -
										e.height +
										(this.config.offsetTop || 0)),
									!0)
								);
							}),
							t
						);
					})(R),
					5: (function (e) {
						function t(t) {
							var i = e.call(this, t) || this;
							return (i.spaceManager = new q(t)), i;
						}
						return (
							L(t, e),
							(t.prototype.onUpdate = function (e, t) {
								return !(e.end < t) && ((e._x = e.x), (e._y = e.y), !0);
							}),
							t
						);
					})(R),
					6: (function (e) {
						function t(t) {
							var i = e.call(this, t) || this;
							return (i.spaceManager = new q(t, !0)), i;
						}
						return (
							L(t, e),
							(t.prototype.onUpdate = function (e, t) {
								return !(e.end < t) && ((e._x = e.getX(t)), (e._y = e.y), !0);
							}),
							(t.prototype.onEnd = function (e, t) {
								return (
									this.spaceManager.remove(e), (e.manager = null), e.free(t)
								);
							}),
							t
						);
					})(R),
					x: (function (e) {
						function t(t) {
							var i = e.call(this, t) || this;
							return (i.spaceManager = new q(t, !0)), i;
						}
						return (
							L(t, e),
							(t.prototype.onUpdate = function (e, t) {
								return (
									!(!e.paused && e.rest < (+new Date() - e.pauseTime) / 1e3) &&
									((e._x = e.getX(t)), (e._y = e.y), !0)
								);
							}),
							t
						);
					})(R),
				},
				B = function (e) {
					var t = {};
					for (var i in F) F.hasOwnProperty(i) && (t[i] = new F[i](e));
					return t;
				},
				M = {
					field: 1e3,
					duration: 3,
					liveStart: 0,
					liveCurrent: 0,
					density: 0,
					speed: 1.2,
					resize: function () {
						this.liveCurrent = 0;
					},
					validateLive: function (e) {
						if (
							((this.config = e),
							(this.density = null == e ? void 0 : e.density),
							(null == e ? void 0 : e.speed) && (this.speed = e.speed),
							this.density < 0 || 0 !== (null == e ? void 0 : e.pool))
						)
							return !0;
						var t = Math.floor(
							(((this.density * (0.5 * this.speed)) / this.duration) *
								this.field) /
								1e3
						);
						t < 1 && (t = 1),
							0 === this.liveStart && (this.liveStart = +new Date());
						var i = +new Date();
						if (i > this.liveStart + this.field)
							for (this.liveCurrent = 0; i > this.liveStart + this.field; )
								this.liveStart += this.field;
						return this.liveCurrent < t && (this.liveCurrent++, !0);
					},
				},
				I = (function () {
					function e(e) {
						(this.recyclingDivList = []),
							(this.config = e.config),
							(this.core = e),
							(this.visualArray = e.visualArray),
							(this.timeLine = e.timeLine),
							(this.danmakuModes = B(this.config)),
							(this.lastTime = 0),
							this.init(),
							this.resize(!0);
					}
					return (
						(e.prototype.init = function () {
							this.container = this.config.container;
						}),
						(e.prototype.isPause = function () {
							return this.core.paused;
						}),
						(e.prototype.validate = function (e) {
							return (
								!(!e.border && "x" !== e.mode) ||
								(1 === e.mode && 0 !== this.config.danmakuNumber
									? M.validateLive({
											density: this.config.danmakuNumber,
											pool: e.class,
									  })
									: !!this.config.danmakuFilter(e))
							);
						}),
						(e.prototype.start = function (e, t, i) {
							if (!e.on && this.validate(e)) {
								var n = this.danmakuModes[e.mode];
								if (n) {
									var o = this.getText(e, i);
									if ((n.onStart(o), (e.on = !0), o.rest <= 0))
										return void this.end(o);
									this.visualArray.push(o),
										t &&
											this.config.visible &&
											(o.manager.onUpdate(o, this.config.timeSyncFunc() / 1e3),
											o.pause(o._x, o._y));
								}
								this.config.danmakuInserting(e);
							}
						}),
						(e.prototype.onTime = function (e, t) {
							if (
								((e -= 0.001),
								t && this.clearVisualList(),
								Math.abs(this.lastTime - e) > 3 && !t)
							)
								this.clearVisualList();
							else
								for (
									var i = this.timeLine.getItemsByRange(
										{
											stime: t
												? t -
												  (((this.config.verticalDanmaku
														? this.config.height
														: this.config.width) /
														(512 * this.config.devicePR)) *
														this.config.duration) /
														this.config.speedPlus /
														this.config.videoSpeed
												: this.lastTime - 0.001,
										},
										{
											stime: t || e,
										}
									);
									i.length;

								)
									this.start(i.shift(), !0, t || e);
							this.lastTime = e;
						}),
						(e.prototype.resize = function (e) {
							var t = e
									? 0
									: (this.container.offsetHeight || 420) - this.config.height,
								i = e
									? 0
									: (this.container.offsetWidth || 680) - this.config.width;
							if (
								((this.config.width = this.container.offsetWidth || 680),
								(this.config.height = this.container.offsetHeight || 420),
								0 !== this.config.danmakuNumber && M.resize(),
								this.clearRecyclingDivList(),
								!e)
							)
								for (var n, o = this.visualArray.length, r = 0; r < o; r++)
									4 === (n = this.visualArray[r]).textData.mode &&
										((n._y += t), (n._x += i / 2), n.reset(n._x, n._y));
						}),
						(e.prototype.beforeRender = function () {
							for (var e = [], t = 0; t < arguments.length; t++)
								e[t] = arguments[t];
						}),
						(e.prototype.afterRender = function () {
							for (var e = [], t = 0; t < arguments.length; t++)
								e[t] = arguments[t];
						}),
						(e.prototype.render = function (e, t, i) {
							this.beforeRender(t);
							for (
								var n, o = this.visualArray.length, r = [], a = 0;
								a < o;
								a++
							)
								if ((n = this.visualArray[a])) {
									var s = n.manager;
									this.config.danmakuFilter(n.textData) ? n.show() : n.hide(),
										s.onUpdate(n, e)
											? i
												? n.pause(n._x, n._y)
												: t
												? n.textData.border
													? (n.render(n._x, n._y), n.pause(n._x, n._y))
													: n.pause(n._x, n._y)
												: n.render(n._x, n._y)
											: r.push(n);
								}
							o = r.length;
							for (a = 0; a < o; a++) (n = r[a]), this.end(n);
							this.afterRender(t);
						}),
						(e.prototype.fresh = function () {
							for (var e = 0; e < this.visualArray.length; e++)
								this.config.danmakuFilter(this.visualArray[e].textData)
									? this.visualArray[e].show()
									: this.visualArray[e].hide();
						}),
						(e.prototype.remove = function (e) {
							for (var t = 0; t < this.visualArray.length; t++)
								if (e === this.visualArray[t].textData.dmid) {
									this.visualArray[t].hide(), this.visualArray.splice(t, 1);
									break;
								}
						}),
						(e.prototype.end = function (e, t) {
							var i = this;
							e.textData.on = !1;
							var n = e.manager.onEnd(e, t),
								o = function () {
									i.config.isRecycling &&
										n &&
										(i.recyclingDivList[i.recyclingDivList.length] = n);
								};
							this.config.recyclingTimeout
								? (this.recyclingDivTimer = window.setTimeout(function () {
										o();
								  }, this.config.recyclingTimeout))
								: o(),
								this.visualArray.bremove(e);
						}),
						(e.prototype.clearVisualList = function () {
							for (; this.visualArray.length; )
								this.end(this.visualArray[0], !0);
							(this.lastTime = -3), this.clearRecyclingDivList();
						}),
						(e.prototype.option = function (e, t) {
							this.config[e] = t;
						}),
						(e.prototype.destroy = function () {
							this.clearVisualList();
						}),
						(e.prototype.clearRecyclingDivList = function () {
							this.recyclingDivTimer && clearTimeout(this.recyclingDivTimer);
							var e = this.recyclingDivList && this.recyclingDivList.length;
							if (e)
								for (var t = e - 1; t >= 0; t--)
									this.recyclingDivList[t] instanceof HTMLElement &&
										(this.recyclingDivList[t].style.display = "none");
						}),
						e
					);
				})(),
				N = (function (e) {
					function t(t, i, n, o) {
						return void 0 === n && (n = 0), e.call(this, t, i, n, o) || this;
					}
					return (
						L(t, e),
						(t.prototype.textRender = function (e, t) {
							var i,
								n = [],
								o = T.getHexColor(this.GetOutlineColor(e));
							(n[0] =
								"1px 0 1px " +
								o +
								",0 1px 1px " +
								o +
								",0 -1px 1px " +
								o +
								",-1px 0 1px " +
								o),
								(n[1] = "0px 0px 1px " + o + ",0 0 1px " + o + ",0 0 1px " + o),
								(n[2] = "1px 1px 2px " + o + ",0 0 1px " + o);
							var r = !0;
							this.recyclingDiv
								? ((r = !1), ((i = this.recyclingDiv).innerHTML = ""))
								: ((i = document.createElement("div")).className =
										"bilibili-danmaku"),
								e.divClassName &&
									(i.className = i.className + " " + e.divClassName);
							var a =
								"-webkit-touch-callout: none; -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;position: absolute; white-space: pre; pointer-events: none;-webkit-perspective:500px;display:none;will-change: transform;";
							e.text && (i.innerText = e.text.replace(/\r/g, "\r\n")),
								e.html
									? (i.innerHTML = e.html)
									: ((a +=
											"font-size: " +
											(e.size *
												t.fontSize *
												(t.fullScreenSync
													? this.parent.getBoundingClientRect().height / 440
													: 1) +
												t.fontSizeUnit) +
											"; "),
									  (a += "color: " + T.getHexColor(e.color) + " ;"),
									  (a +=
											"font-family: " +
											t.fontFamily +
											", Arial, Helvetica, sans-serif; "),
									  (a +=
											"font-weight: " + (t.bold ? "bold" : "normal") + "; "),
									  (a += "line-height: 1.125 ;"),
									  (a +=
											"opacity: " + (t.opacity < 0.1 ? 0.1 : t.opacity) + "; "),
									  (a += "text-shadow: " + n[t.fontBorder] + "; ")),
								e.border &&
									((a +=
										"border: 1px solid " + T.getHexColor(e.borderColor) + "; "),
									(a += "padding-left: 1px; padding-right: 1px;")),
								e.vDanmaku
									? (6 === e.mode
											? (a += "bottom: " + this.config.height + "px;")
											: (a += "top: " + this.config.height + "px;"),
									  (a +=
											"-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:tb-rl;writing-mode:vertical-rl;"))
									: 6 === e.mode
									? (a += "right: " + this.config.width + "px;")
									: (a += "left: " + this.config.width + "px;"),
								(a += "filter: glow(color=#000000,strength=3);"),
								(i.style.cssText = a),
								r && this.parent.appendChild(i),
								(i.style.display = "inline-block");
							var s = i.getBoundingClientRect();
							return {
								bitmap: i,
								width: s.width,
								height: s.height,
							};
						}),
						(t.prototype.render = function (e, t) {
							var i,
								n = !1;
							if (
								(6 === this.textData.mode && (n = !0),
								this.startTime || (this.startTime = +new Date()),
								!this.running)
							) {
								if (
									((this.running = !0),
									(this.pauseTime = +new Date()),
									this.textData.vDanmaku
										? (this.element.style.right = t + "px")
										: (this.element.style.top = t + "px"),
									4 === this.textData.mode || 5 === this.textData.mode)
								)
									return (
										(this.element.style.left = "50%"),
										void (this.element.style.marginLeft =
											-this.width / 2 + "px")
									);
								if (
									1 === this.textData.mode ||
									6 === this.textData.mode ||
									"x" === this.textData.mode
								)
									for (
										n
											? (this.element.style.right = e + "px")
											: (this.element.style.left = e + "px"),
											i = 0;
										i < this.browserPrefix.length;
										i++
									)
										this.element.style.cssText +=
											this.browserPrefix[i] +
											"transform: translate" +
											this.X +
											"(" +
											(n ? 1 : -1) * (this.distance + this.dWidth) +
											"px) translate" +
											this.Y +
											"(0px) translateZ(0px);" +
											this.browserPrefix[i] +
											"transition: " +
											this.browserPrefix[i] +
											"transform " +
											this.rest +
											"s linear;";
							}
							if (
								(1 === this.textData.mode ||
									6 === this.textData.mode ||
									"x" === this.textData.mode) &&
								this.paused
							)
								for (
									this.paused = !1, this.pauseTime = +new Date(), i = 0;
									i < this.browserPrefix.length;
									i++
								)
									this.element.style.cssText +=
										this.browserPrefix[i] +
										"transform: translate" +
										this.X +
										"(" +
										(n ? 1 : -1) * (this.wDistance + this.dWidth) +
										"px) translate" +
										this.Y +
										"(0px) translateZ(0px);" +
										this.browserPrefix[i] +
										"transition: " +
										this.browserPrefix[i] +
										"transform " +
										this.rest +
										"s linear;";
						}),
						(t.prototype.reset = function (e, t) {
							this.textData.vDanmaku
								? (this.element.style.right = t + "px")
								: (this.element.style.top = t + "px");
						}),
						(t.prototype.pause = function (e, t) {
							var i,
								n = !1;
							if (
								(this.running ||
									((this.running = !0),
									(this.pauseTime = +new Date()),
									this.textData.vDanmaku
										? (this.element.style.right = t + "px")
										: (this.element.style.top = t + "px")),
								1 === this.textData.mode ||
									6 === this.textData.mode ||
									"x" === this.textData.mode)
							)
								for (
									6 === this.textData.mode && (n = !0),
										this.paused = !0,
										this.pauseTime &&
											(this.rest =
												this.rest - (+new Date() - this.pauseTime) / 1e3),
										this.pauseTime = +new Date(),
										i = 0;
									i < this.browserPrefix.length;
									i++
								)
									this.element.style.cssText +=
										this.browserPrefix[i] +
										"transform: translate" +
										this.X +
										"(" +
										(n ? 1 : -1) * (this.wDistance - e) +
										"px) translate" +
										this.Y +
										"(0px) translateZ(0px);" +
										this.browserPrefix[i] +
										"transition: " +
										this.browserPrefix[i] +
										"transform 0s linear;";
							else if (4 === this.textData.mode || 5 === this.textData.mode)
								return (
									(this.element.style.left = "50%"),
									void (this.element.style.marginLeft = -this.width / 2 + "px")
								);
						}),
						(t.prototype.textFree = function (e) {
							this.parent.removeChild(e);
						}),
						t
					);
				})(
					(function () {
						function e(e, t, i, n) {
							void 0 === i && (i = 0),
								(this.textData = e),
								(this.config = T.assign({}, t)),
								(this.width = 0),
								(this.height = 0),
								(this.parentWidth = this.config.width),
								(this.parentHeight = this.config.height),
								(this.element = null),
								(this.start = 0),
								(this.end = 0),
								(this.speed = 0),
								(this.x = 0),
								(this.y = 0),
								(this.bottom = 0),
								(this.index = 16777215),
								(this.precise = i || 0),
								(this.browserPrefix = ["", "-webkit-", "-moz-", "-ms-"]),
								(this.parent = this.config.container),
								(this.recyclingDiv = n),
								this.init();
						}
						return (
							(e.prototype.init = function () {
								(1 !== this.textData.mode &&
									4 !== this.textData.mode &&
									5 !== this.textData.mode &&
									6 !== this.textData.mode) ||
									(window.String.prototype.trim ||
										(window.String.prototype.trim = function () {
											return this.replace(
												/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
												""
											);
										}),
									this.textData.text &&
										(this.textData.text = this.textData.text.trim()));
								var e = this.textRender(this.textData, this.config);
								(this.element = e.bitmap),
									(this.width = e.width),
									(this.height = e.height),
									this.textData.vDanmaku
										? ((this.distance = this.config.height),
										  (this.vDistance = this.config.width),
										  (this.dWidth = e.height),
										  (this.dHength = e.width),
										  (this.wDistance = this.parentHeight),
										  (this.X = "Y"),
										  (this.Y = "X"))
										: ((this.distance = this.config.width),
										  (this.vDistance = this.config.height),
										  (this.dWidth = e.width),
										  (this.dHength = e.height),
										  (this.wDistance = this.parentWidth),
										  (this.X = "X"),
										  (this.Y = "Y")),
									this.getTimePoints(),
									(1 !== this.textData.mode &&
										6 !== this.textData.mode &&
										"x" !== this.textData.mode) ||
										(this.getSpeed(),
										(this.end =
											this.start +
											((this.distance + this.dWidth) / this.speed) *
												this.config.videoSpeed),
										(this.middle =
											this.start +
											(this.distance / this.speed) * this.config.videoSpeed)),
									(this.rest =
										(this.distance + this.dWidth) / this.speed - this.precise);
							}),
							(e.prototype.GetOutlineColor = function (e) {
								return e.color ? 0 : 16777215;
							}),
							(e.prototype.getSpeed = function () {
								if ("x" === this.textData.mode)
									return (
										(this.speed =
											(this.distance + this.dWidth) /
											(this.textData.duration || this.config.duration)),
										!0
									);
								this.speed =
									((512 * this.config.devicePR + this.dWidth) /
										(this.textData.duration || this.config.duration)) *
									this.config.speedPlus *
									(this.config.speedSync ? this.config.videoSpeed : 1);
							}),
							(e.prototype.getTimePoints = function () {
								(this.start = this.textData.stime),
									(this.end =
										this.start +
										(this.textData.duration || this.config.duration) *
											this.config.videoSpeed);
							}),
							(e.prototype.setY = function (e, t) {
								(this.y = e),
									(this.bottom = this.y + this.dHength),
									(this.index = t);
							}),
							(e.prototype.getX = function (e) {
								return (
									(this.pauseTime = this.pauseTime || +new Date()),
									this.distance -
										((+new Date() -
											this.pauseTime +
											1e3 *
												((this.distance + this.dWidth) / this.speed -
													this.rest)) /
											1e3) *
											this.speed
								);
							}),
							(e.prototype.getRight = function (e) {
								return this.getX(e) + this.dWidth;
							}),
							(e.prototype.free = function (e) {
								var t = this.config && this.config.isRecycling,
									i = this.element;
								if (
									t &&
									!e &&
									(1 === this.textData.mode || 6 === this.textData.mode)
								)
									return (this.config = null), (this.textData = null), i;
								(this.config = null),
									(this.textData = null),
									this.textFree(this.element),
									(this.element = null);
							}),
							(e.prototype.hide = function () {
								this.element.style.visibility = "hidden";
							}),
							(e.prototype.show = function () {
								this.element.style.visibility = "";
							}),
							e
						);
					})()
				),
				z = (function (e) {
					function t(t) {
						return e.call(this, t) || this;
					}
					return (
						L(t, e),
						(t.prototype.getText = function (e, t) {
							var i;
							return (
								this.config.isRecycling &&
									this.recyclingDivList.length &&
									(i = this.recyclingDivList.splice(0, 1)[0]),
								!this.config.verticalDanmaku ||
								(1 !== e.mode && 6 !== e.mode && "x" !== e.mode)
									? (e.vDanmaku = !1)
									: (e.vDanmaku = !0),
								new N(e, this.config, t ? t - e.stime : 0, i)
							);
						}),
						t
					);
				})(I),
				U = (function () {
					function e(e) {
						(this.config = T.assign(
							{
								container: document.getElementById("player"),
								bold: !0,
								duration: 4.5,
								danmakuNumber: 300,
								danmakuArea: 0,
								fontBorder: 0,
								fontFamily: 'SimHei, "Microsoft JhengHei"',
								fontSize: 1,
								fontSizeUnit: "px",
								fullScreenSync: !1,
								offsetTop: 0,
								offsetBottom: 0,
								opacity: 1,
								preventShade: !1,
								speedPlus: 1,
								speedSync: !1,
								type: "div",
								videoSpeed: 1,
								visible: !0,
								isRecycling: !1,
								recyclingTimeout: 0,
								verticalDanmaku: !1,
								devicePR: 1,
								danmakuFilter: function (e) {
									return !0;
								},
								danmakuInserting: function (e) {},
								containerUpdating: function (e) {},
								listUpdating: function (e) {},
								countUpdating: function (e) {},
								timeSyncFunc: function () {
									return window.performance.now();
								},
							},
							null != e ? e : {}
						)),
							(this.container = this.config.container),
							(this.paused = !0),
							(this.danmakuArray = []),
							(this.time = 0),
							(this.timeZero = 0),
							(this.pauseTime = 0),
							(this.startTime = new Date().getTime()),
							(this.visualArray = new P()),
							(this.timeLine = new j()),
							(this.config.videoSpeed = this.config.videoSpeed || 1),
							this.setType(),
							(window.requestAnimationFrame =
								window.requestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.mozRequestAnimationFrame ||
								window.oRequestAnimationFrame ||
								window.msRequestAnimationFrame ||
								function (e) {
									return window.setTimeout(e, 1e3 / 60);
								}),
							(window.cancelAnimationFrame =
								window.cancelAnimationFrame ||
								window.webkitCancelAnimationFrame ||
								window.mozCancelAnimationFrame ||
								window.oCancelAnimationFrame ||
								window.msCancelAnimationFrame ||
								function (e) {
									window.clearTimeout(e);
								});
					}
					return (
						(e.prototype.writingMode = function (e) {
							this.config.verticalDanmaku !== e &&
								((this.config.verticalDanmaku = e),
								this.seek(this.time / 1e3, !0));
						}),
						(e.prototype.addTimely = function (e) {
							var t = this.renderDanmaku(e);
							-1 === e.stime
								? this.manager && this.manager.start(t, !0)
								: (this.timeLine.insert(t),
								  t.border && this.manager && this.manager.start(t, !0));
						}),
						(e.prototype.renderDanmaku = function (e) {
							return T.assign({}, e, {
								border: e.border || !1,
								borderColor: e.borderColor || 6750207,
								on: !1,
							});
						}),
						(e.prototype.setType = function (e, t) {
							(e = e || this.config.type), (this.config.type = e);
							var i = this.config.container,
								n = {
									div: "div",
									css: "section",
									canvas: "canvas",
								};
							if (i.tagName.toLowerCase() !== n[e]) {
								var o = i.getAttribute("class"),
									r = i.getAttribute("id"),
									a = i.parentNode,
									s = i.offsetWidth,
									c = i.offsetHeight;
								null == a || a.removeChild(i),
									this.manager && this.manager.destroy();
								var l = t || document.createElement(n[e]);
								null == a || a.appendChild(l),
									o && l.setAttribute("class", o),
									(l.width = s * this.config.devicePR),
									(l.height = c * this.config.devicePR),
									r && l.setAttribute("id", r),
									(this.config.container = l),
									(this.manager = this.createManager(e)),
									this.config.containerUpdating(i);
							} else this.manager || (this.manager = this.createManager(e));
						}),
						(e.prototype.count = function () {
							return this.danmakuArray ? this.danmakuArray.length : 0;
						}),
						(e.prototype.createManager = function (e) {
							var t;
							switch (e) {
								case "div":
									t = new z(this);
									break;
								default:
									t = new z(this);
							}
							return t;
						}),
						(e.prototype.danmakuType = function (e) {
							if (!e) return this.config.type;
							if (e === this.config.type) return e;
							switch (e) {
								case "div":
									this.option("type", "div");
									break;
								case "canvas":
									this.option("type", "canvas");
									break;
								default:
									this.option("type", "div");
							}
							return e;
						}),
						(e.prototype.play = function (e) {
							var t = this;
							(this.paused = !1),
								(this.timeZero = this.pauseTime),
								(this.pauseTime = 0),
								this.animate && window.cancelAnimationFrame(this.animate),
								(this.animate = window.requestAnimationFrame(function () {
									(t.startTime = new Date().getTime()), t.nextFrame(e);
								}));
						}),
						(e.prototype.pause = function () {
							this.paused = !0;
							var e = new Date().getTime();
							this.pauseTime = this.timeZero + e - this.startTime;
						}),
						(e.prototype.toggle = function () {
							this.paused ? this.play() : this.pause();
						}),
						(e.prototype.seek = function (e, t) {
							t || this.clear(),
								(this.timeZero = 1e3 * e),
								(this.startTime = new Date().getTime()),
								this.paused
									? (this.play(t ? e : 0), this.pause())
									: this.play(t ? e : 0);
						}),
						(e.prototype.add = function (e) {
							(e.canvas && e.canvas.length < 1) ||
								(-1 === e.stime &&
									(e.stime = this.config.timeSyncFunc() / 1e3 + 0.1),
								this.danmakuArray.push(e),
								this.addTimely(e),
								"function" == typeof this.config.listUpdating &&
									this.config.listUpdating(this.danmakuArray),
								"function" == typeof this.config.countUpdating &&
									this.config.countUpdating(this.danmakuArray.length));
						}),
						(e.prototype.remove = function (e) {
							if (this.manager) {
								for (var t = 0; t < this.danmakuArray.length; t++)
									e === this.danmakuArray[t].dmid &&
										this.danmakuArray.splice(t, 1);
								this.manager.remove(e);
							}
						}),
						(e.prototype.multipleAdd = function (e) {
							if (e && e.length) {
								this.danmakuArray = this.danmakuArray.concat(e);
								for (var t = 0; t < e.length; t++) this.timeLine.insert(e[t]);
								"function" == typeof this.config.listUpdating &&
									this.config.listUpdating(this.danmakuArray),
									"function" == typeof this.config.countUpdating &&
										this.config.countUpdating(this.danmakuArray.length);
							}
						}),
						(e.prototype.searchAreaDanmaku = function (e, t) {
							(e = (e || 0) * this.config.devicePR),
								(t = (t || 0) * this.config.devicePR);
							for (var i = [], n = this.visualArray.length - 1; n >= 0; n--) {
								var o = this.visualArray[n];
								this.config.danmakuFilter(o.textData) &&
									(this.config.verticalDanmaku &&
									o.textData &&
									4 !== o.textData.mode &&
									5 !== o.textData.mode
										? o.textData && 6 === o.textData.mode
											? t >= o.x - o._x - o.dWidth - 5 &&
											  t <= o.x - o._x + 5 &&
											  o.vDistance - e >= o._y - 5 &&
											  o.vDistance - e - o.dHength <= o._y + 5 &&
											  i.push(o)
											: t >= o._x - 5 &&
											  t <= o._x + o.dWidth + 5 &&
											  o.vDistance - e >= o._y - 5 &&
											  o.vDistance - e - o.dHength <= o._y + 5 &&
											  i.push(o)
										: o.textData && 6 === o.textData.mode
										? e >= o.x - o._x - o.width - 5 &&
										  e <= o.x - o._x + 5 &&
										  t >= o._y - 5 &&
										  t - o.height <= o._y + 5 &&
										  i.push(o)
										: e >= o._x - 5 &&
										  e <= o._x + o.width + 5 &&
										  t >= o._y - 5 &&
										  t - o.height <= o._y + 5 &&
										  i.push(o));
							}
							return i;
						}),
						(e.prototype.option = function (e, t) {
							if (e && void 0 !== t)
								switch (e) {
									case "container":
										if (1 === arguments.length) return this.config.container;
										if (
											!t ||
											"object" != typeof t ||
											1 !== t.nodeType ||
											"string" != typeof t.nodeName
										)
											return;
										return void this.setType(this.config.type, t);
									case "type":
										if (1 === arguments.length) return this.config.type;
										this.setType(t), this.seek(this.time / 1e3, !0);
										break;
									case "fontfamily":
										if (1 === arguments.length) return this.config.fontFamily;
										this.manager && (this.manager.config.fontFamily = t);
										break;
									case "bold":
										if (1 === arguments.length) return this.config.bold;
										this.manager && (this.manager.config.bold = t);
										break;
									case "preventshade":
										if (1 === arguments.length) return this.config.preventShade;
										this.manager && (this.manager.config.preventShade = t);
										break;
									case "speedplus":
										if (1 === arguments.length) return this.config.speedPlus;
										this.manager && (this.manager.config.speedPlus = t);
										break;
									case "speedsync":
										if (1 === arguments.length) return this.config.speedSync;
										this.manager && (this.manager.config.speedSync = t);
										break;
									case "fontsize":
										if (1 === arguments.length) return this.config.fontSize;
										this.manager && (this.manager.config.fontSize = t);
										break;
									case "fontsizeunit":
										if (1 === arguments.length) return this.config.fontSizeUnit;
										this.manager && (this.manager.config.fontSizeUnit = t);
										break;
									case "fullscreensync":
										if (1 === arguments.length)
											return this.config.fullScreenSync;
										this.manager && (this.manager.config.fullScreenSync = t);
										break;
									case "danmakunumber":
										if (1 === arguments.length)
											return this.config.danmakuNumber;
										this.manager && (this.manager.config.danmakuNumber = t);
										break;
									case "danmakuArea":
										if (1 === arguments.length) return this.config.danmakuArea;
										if (this.manager) {
											var i = +t;
											(i || 0 === i) &&
												((i = i < 0 ? 0 : i > 100 ? 100 : i),
												(this.manager.config.danmakuArea = i));
										}
										break;
									case "duration":
										if (1 === arguments.length) return this.config.duration;
										this.manager && (this.manager.config.duration = t);
										break;
									case "fontborder":
										if (1 === arguments.length) return this.config.fontBorder;
										this.manager && (this.manager.config.fontBorder = t);
										break;
									case "visible":
										if (1 === arguments.length) return this.config.visible;
										this.manager && (this.manager.config.visible = t);
										break;
									case "speedSync":
										if (1 === arguments.length) return this.config.speedSync;
										this.manager && (this.manager.config.speedSync = t);
										break;
									case "videospeed":
										if (1 === arguments.length) return this.config.videoSpeed;
										this.manager && (this.manager.config.videoSpeed = t);
										break;
									case "opacity":
										if (1 === arguments.length) return this.config.opacity;
										this.manager && (this.manager.config.opacity = t);
										break;
									default:
										this.manager && this.manager.option(e, t);
								}
						}),
						(e.prototype.nextFrame = function (e) {
							var t = this,
								i = new Date().getTime();
							if (
								((this.time =
									this.timeZero +
									(i - this.startTime) * this.config.videoSpeed),
								"function" == typeof this.config.timeSyncFunc)
							) {
								var n = this.config.timeSyncFunc();
								(Math.abs(n - this.time) > 1e3 || isNaN(this.time)) &&
									((this.time = n), (this.timeZero = n), (this.startTime = i));
							}
							!isNaN(this.time) &&
								this.manager &&
								this.visible() &&
								(this.manager.onTime(this.time / 1e3, e),
								this.manager.render(this.time / 1e3, this.paused, e)),
								this.paused ||
									(this.animate = window.requestAnimationFrame(function () {
										t.nextFrame();
									}));
						}),
						(e.prototype.visible = function (e) {
							return void 0 === e
								? this.config.visible
								: (this.config.visible !== e &&
										((this.config.visible = e),
										!this.config.visible &&
											this.manager &&
											this.manager.clearVisualList()),
								  e);
						}),
						(e.prototype.resize = function (e) {
							this.manager &&
								(this.manager.resize(e),
								this.time && e && this.seek(this.time / 1e3, !0));
						}),
						(e.prototype.clear = function () {
							this.manager.clearVisualList();
						}),
						(e.prototype.destroy = function () {
							this.pause(), this.clear();
						}),
						(e.prototype.reload = function () {
							(this.timeLine = new j()), (this.visualArray = new P());
						}),
						e
					);
				})(),
				V = {
					reload_count: 10,
					raw: "",
					load: function (e, t) {
						var i = this;
						void 0 === t.reload_count && (t.reload_count = 10),
							i.loadData(
								e,
								function (n, o, r) {
									n
										? "http:" === window.location.protocol &&
										  e &&
										  i.reload_count > 0
											? (i.reload_count--,
											  /^(http:)?\/\//.test(e)
													? setTimeout(function () {
															i.load(e.replace(/^(http:)?\/\//, "https://"), t);
													  }, 1e3)
													: setTimeout(function () {
															i.load(e.replace(/^(https:)?\/\//, "http://"), t);
													  }, 1e3))
											: i.reload_count > 0
											? (i.reload_count--,
											  setTimeout(function () {
													i.load(e, t);
											  }, 1e3))
											: "function" == typeof t.failedCallback &&
											  t.failedCallback(n, o)
										: i.parse(o, t, r);
								},
								t.withCredentials
							);
					},
					parseData: function (e) {
						try {
							e = e.replace(/[\x00-\x08\x0b-\x0c\x0e-\x1f\x7f]/g, "");
						} catch (e) {
							logger.w(e);
						}
						return (
							(this.raw = e),
							new window.DOMParser().parseFromString(e, "text/xml")
						);
					},
					loadData: function (e, t, i) {
						var n = this,
							o = +new Date(),
							r = new XMLHttpRequest();
						r.addEventListener("load", function () {
							(o = +new Date() - o), t(null, n.parseData(r.response), o);
						}),
							r.addEventListener("error", function () {
								t(r.statusText || "ioError", r);
							}),
							r.addEventListener("abort", function () {
								t(r.statusText || "ioError", r);
							}),
							r.open("GET", e, !0),
							i && (r.withCredentials = !0),
							r.send();
					},
					parse: function (e, t, i) {
						if ("function" == typeof t.parseFunc) t.parseFunc(e);
						else {
							if (e) {
								var n,
									o,
									r,
									a,
									s,
									c,
									l = [],
									u = +new Date();
								for (
									o = e.getElementsByTagName("d"),
										r = e.getElementsByTagName("state"),
										a = e.getElementsByTagName("text"),
										s = e.getElementsByTagName("text_side"),
										n = e.getElementsByTagName("maxlimit"),
										r && r[0] && (r = +r[0].textContent),
										a = a && a[0] ? a[0].textContent : "",
										s = s && s[0] ? s[0].textContent : "",
										n = n && n[0] ? n[0].textContent : "-",
										c = 0;
									c < o.length;
									c++
								) {
									var p = o[c],
										d = p.getAttribute("p").split(","),
										f = p.textContent,
										h = p.getAttribute("e"),
										m = void 0,
										y = void 0;
									f || (f = p.text),
										void 0 !== f &&
											((m = {
												stime: Number(d[0]),
												mode: Number(d[1]),
												size: Number(d[2]),
												color: Number(d[3]),
												date: Number(d[4]),
												class: Number(d[5]),
												uid: d[6],
												dmid: String(d[7]),
												text:
													9 === Number(d[1])
														? String(f)
														: String(f).replace(/(\/n|\\n|\n|\r\n)/g, "\r"),
											}),
											"string" == typeof h &&
												((y = h.split(",")), (m.mid = +y[0]), (m.uname = y[1])),
											l.push(m));
								}
								return (
									"function" == typeof t.successCallback &&
										t.successCallback(
											l,
											n,
											i,
											+new Date() - u,
											r,
											this.raw,
											a,
											s
										),
									!1
								);
							}
							"function" == typeof t.failedCallback &&
								t.failedCallback("parse error, empty data.");
						}
					},
				};
			function H(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						"value" in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			var W = (function () {
				function e(t) {
					var i = this;
					!(function (e, t) {
						if (!(e instanceof t))
							throw new TypeError("Cannot call a class as a function");
					})(this, e),
						(this.config = t),
						(this.danmakuCore = new U({
							container: t.container,
							bold: !0,
							duration: 6,
							danmakuNumber: 80,
							danmakuArea: 100,
							fontBorder: 2,
							fontFamily: "SimHei, 'Microsoft JhengHei'",
							fontSize: 0.618 + 0.382 / (2 * window.devicePixelRatio),
							fontSizeUnit: "px",
							opacity: 0.75,
							preventShade: !1,
							speedPlus: 1,
							speedSync: !1,
							type: "div",
							videoSpeed: 1,
							visible: !0,
							devicePR: 1,
							isRecycling: !0,
							recyclingTimeout: 1e3,
							verticalDanmaku: !1,
							timeSyncFunc: function () {
								return t.video ? 1e3 * t.video.currentTime : 0;
							},
						})),
						V.load(t.url, {
							successCallback: function (e, n, o, r, a, s, c, l) {
								i.danmakuCore.danmakuArray = e;
								for (var u = 0; u < i.danmakuCore.danmakuArray.length; u++)
									0 !==
										i.danmakuCore.danmakuArray[u].text.replace(/\r/g, "")
											.length &&
										i.danmakuCore.addTimely(i.danmakuCore.danmakuArray[u]);
								t.video.paused || i.danmakuCore.seek(t.video.currentTime, !0);
							},
							failedCallback: function (e, t) {},
						});
				}
				var t, i, n;
				return (
					(t = e),
					(i = [
						{
							key: "visible",
							value: function () {
								var e;
								return (e = this.danmakuCore).visible.apply(e, arguments);
							},
						},
						{
							key: "resize",
							value: function () {
								var e = this;
								this.resizing ||
									((this.resizing = !0),
									(this.resizePaused = this.danmakuCore.paused),
									window.requestAnimationFrame(function () {
										setTimeout(function () {
											e.pause(),
												window.requestAnimationFrame(function () {
													setTimeout(function () {
														e.danmakuCore.resize(),
															e.resizePaused || e.play(),
															(e.resizing = !1);
													}, 0);
												});
										}, 0);
									}));
							},
						},
						{
							key: "pause",
							value: function () {
								var e;
								(e = this.danmakuCore).pause.apply(e, arguments);
							},
						},
						{
							key: "play",
							value: function () {
								var e;
								(this.resizePaused = !1),
									(e = this.danmakuCore).play.apply(e, arguments);
							},
						},
						{
							key: "seek",
							value: function () {
								var e;
								(e = this.danmakuCore).seek.apply(e, arguments);
							},
						},
					]) && H(t.prototype, i),
					n && H(t, n),
					e
				);
			})();
			function G(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						"value" in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			var Y = (function () {
				function e(t) {
					!(function (e, t) {
						if (!(e instanceof t))
							throw new TypeError("Cannot call a class as a function");
					})(this, e),
						(this.player = t),
						(this.container = this.player.elem.querySelector(
							".player-ending-panel"
						)),
						(this.firstShow = !0),
						(this.index = 0);
				}
				var t, i, n;
				return (
					(t = e),
					(i = [
						{
							key: "getList",
							value: function () {
								var e = this;
								a.a
									.get("//api.bilibili.com/x/web-interface/archive/related", {
										params: {
											bvid: this.player.options.bvid,
											aid: this.player.options.aid,
										},
									})
									.then(function (t) {
										(e.list = t.data.data),
											e.container
												.querySelector(".player-ending-panel-recommend")
												.classList.remove("hide"),
											e.start(),
											e.container
												.querySelector(".player-ending-panel-video")
												.addEventListener("click", function (t) {
													t.stopPropagation(),
														A(
															"playEnd_video",
															(e.player.options.show_bv &&
																e.list[e.index].bvid) ||
																e.list[e.index].aid
														),
														e.player.track.pageReport("click", "playEnd_video");
												});
									})
									.catch(function () {});
							},
						},
						{
							key: "start",
							value: function () {
								var e = this;
								this.counterEle.classList.remove("hidden"),
									this.picEle.setAttribute("src", this.list[this.index].pic),
									(this.titleEle.innerHTML = this.list[this.index].title),
									this.index++,
									this.index === this.list.length && (this.index = 0),
									setTimeout(function () {
										e.counterEle.classList.add("hidden");
									}, 500),
									(this.timer = setTimeout(function () {
										e.start();
									}, 3500));
							},
						},
						{
							key: "stop",
							value: function () {
								clearTimeout(this.timer);
							},
						},
						{
							key: "show",
							value: function () {
								var e = this;
								(this.container.style.display = "block"),
									this.firstShow
										? ((this.firstShow = !1),
										  (this.container.innerHTML = '\n                <img class="player-ending-panel-background" src="'.concat(
												this.player.options.img,
												'">\n                <div class="player-ending-panel-container">\n                    <div class="player-ending-panel-recommend hide">\n                        <div class="player-ending-panel-header">为你推荐：</div>\n                        <div class="player-ending-panel-video">\n                            <div class="player-ending-panel-pic">\n                                <img>\n                                <div class="player-ending-panel-counter"></div>\n                            </div>\n                            <div class="player-ending-panel-content">\n                                <div class="player-ending-panel-title"></div>\n                                <div class="player-ending-panel-button">App 内打开</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="player-ending-panel-buttons">\n                        <div class="player-ending-panel-restart">\n                            <img src="//s1.hdslb.com/bfs/static/mult/images/ic_replay_end.png">\n                            <span>重新播放</span>\n                        </div>\n                    </div>\n                </div>\n            '
										  )),
										  (this.picEle = this.container.querySelector(
												".player-ending-panel-pic img"
										  )),
										  (this.titleEle = this.container.querySelector(
												".player-ending-panel-title"
										  )),
										  (this.counterEle = this.container.querySelector(
												".player-ending-panel-counter"
										  )),
										  (!this.player.options.bvid && !this.player.options.aid) ||
												this.list ||
												this.player.options.noRecommend ||
												this.getList(),
										  this.container.addEventListener("click", function () {
												A(
													"playEnd_video",
													e.player.options.bvid || e.player.options.aid,
													e.player.options.page
												),
													e.player.track.pageReport("click", "playEnd_video");
										  }),
										  this.container
												.querySelector(".player-ending-panel-restart")
												.addEventListener("click", function (t) {
													t.stopPropagation(),
														e.player.track.pageReport(
															"click",
															"playEnd_replay"
														),
														e.player.play();
												}))
										: this.start(),
									this.player.track.pageReport("show", "playEnd_video");
							},
						},
						{
							key: "hide",
							value: function () {
								(this.container.style.display = "none"), this.stop();
							},
						},
					]) && G(t.prototype, i),
					n && G(t, n),
					e
				);
			})();
			function Q(e) {
				return (Q =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			function J(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						"value" in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			var X = (function () {
				function e(t) {
					var i = this;
					!(function (e, t) {
						if (!(e instanceof t))
							throw new TypeError("Cannot call a class as a function");
					})(this, e),
						(this.player = t),
						(this.heartBeatOccur = {}),
						(this.enableHeartBeat = !0),
						(this.seek = {
							start: null,
							total: 0,
						}),
						this.player.isBVideo &&
							a()({
								url: "//api.bilibili.com/x/web-interface/nav",
								method: "get",
								withCredentials: !0,
							}).then(function (e) {
								i.mid = e.data.data.mid;
							});
				}
				var t, i, n;
				return (
					(t = e),
					(i = [
						{
							key: "bindEvents",
							value: function () {
								var e = this;
								this.player.options.eventBus.on(Z.E_VIDEO_SEEK, function () {
									null === e.seek.start &&
										(e.seek.start = e.player.currentTime);
								}),
									this.player.options.eventBus.on(
										Z.E_VIDEO_SEEKED,
										function () {
											setTimeout(function () {
												null !== e.seek.start &&
													((e.seek.total +=
														e.player.currentTime - e.seek.start),
													(e.seek.start = null),
													e.seekDelayHeartBeat &&
														(e.heartBeat(e.seekDelayHeartBeat),
														(e.seekDelayHeartBeat = !1)));
											}, 100);
										}
									),
									this.player.options.eventBus.on(Z.E_VIDEO_PLAY, function () {
										e.enableHeartBeat = !0;
									}),
									this.player.options.eventBus.on(Z.E_VIDEO_PAUSE, function () {
										e.enableHeartBeat = !1;
									}),
									this.player.options.eventBus.on(
										Z.E_VIDEO_ENDED,
										function () {}
									);
							},
						},
						{
							key: "heartBeat",
							value: function () {
								var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: 0,
									t =
										!(arguments.length > 1 && void 0 !== arguments[1]) ||
										arguments[1];
								if (this.player.isBVideo && this.stime && this.player.video) {
									var i = new XMLHttpRequest();
									i.open(
										"POST",
										"//api.bilibili.com/x/report/web/heartbeat",
										t
									),
										i.setRequestHeader(
											"Content-Type",
											"application/x-www-form-urlencoded"
										),
										(i.withCredentials = !0),
										i.send(
											c.a.stringify({
												aid: this.player.options.aid,
												bvid: this.player.options.bvid,
												cid: this.player.options.cid,
												mid: this.mid,
												csrf: x("bili_jct") || "",
												played_time: this.player.video.currentTime.toFixed(0),
												realtime: Math.max(
													parseInt(this.player.currentTime - this.seek.total),
													0
												),
												start_ts: this.stime,
												dt: 7,
												play_type: e,
											})
										);
								}
							},
						},
						{
							key: "clickNowReport",
							value: function (e) {
								var t = this;
								this.player.isBVideo &&
									(this.stime
										? e()
										: a()({
												url: "//api.bilibili.com/x/report/click/now",
												method: "get",
												withCredentials: !0,
										  })
												.then(function (e) {
													t.stime = e.data.data.now;
												})
												.catch(function () {
													t.stime = parseInt(+new Date() / 1e3);
												})
												.finally(function () {
													a()({
														url: "//api.bilibili.com/x/report/click/h5",
														method: "post",
														data: c.a.stringify({
															aid: t.player.options.aid,
															bvid: t.player.options.bvid,
															cid: t.player.options.cid,
															part: t.player.options.page,
															did:
																x("sid") ||
																Math.random().toString(36).slice(-8),
															ftime: x("fts") || parseInt(new Date() / 1e3, 10),
															jsonp: "jsonp",
															lv: "",
															mid: t.mid,
															csrf: x("bili_jct") || "",
															stime: t.stime,
														}),
														withCredentials: !0,
													}).finally(function () {
														setInterval(function () {
															t.enableHeartBeat && t.heartBeat(0);
														}, 15e3),
															e();
													}),
														t.pageReport("click", "playFirstTime", {
															area: t.player.firstClickArea,
														}),
														t.pageCustomReport(
															"playFirstTime",
															window.bsource || ""
														);
												}));
							},
						},
						{
							key: "pageReport",
							value: function (e, t, i) {
								["pv", "click", "show"].indexOf(e) < 0 ||
									(window.reportConfig &&
										window[window.reportConfig.msgObjects] &&
										((i && "object" !== Q(i)) ||
											((i = Object.assign(
												{
													screenStatus:
														this.player.screen_state === Z.UI_NORMAL
															? "half"
															: "full",
													playStatus:
														this.player.video && !this.player.video.paused
															? "play"
															: "pause",
													fromTime:
														(this.player.video &&
															this.player.video.currentTime) ||
														0,
												},
												i
											)),
											(i = JSON.stringify(i))),
										(window[window.reportConfig.msgObjects][e] = {
											event: t,
											value: i,
										}),
										window.reportObserver &&
											window.reportObserver.forceCommit()));
							},
						},
						{
							key: "pageCustomReport",
							value: function (e, t) {
								window.reportConfig &&
									window[window.reportConfig.msgObjects] &&
									((window[window.reportConfig.msgObjects][e] = t),
									window.reportObserver && window.reportObserver.forceCommit());
							},
						},
					]) && J(t.prototype, i),
					n && J(t, n),
					e
				);
			})();
			function K(e) {
				return (K =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e &&
									"function" == typeof Symbol &&
									e.constructor === Symbol &&
									e !== Symbol.prototype
									? "symbol"
									: typeof e;
						  })(e);
			}
			function Z(e, t) {
				(this.options = {
					send_cmt_url: "//corpcmt.hdslb.net/post",
					get_cmt_url: null,
				}),
					"object" === K(t) &&
						(this.options = Object.assign({}, this.options, t)),
					(this.elem = e),
					(this.screen_state = Z.UI_NORMAL),
					(this.video_state = Z.V_IDEL),
					(this.control_bar_visible = !0),
					(this.control_bar_timer = null),
					(this.control_bar_timer_delay = 3e3),
					(this.timer = null),
					(this.sliderCtrl = null),
					(this.volumeCtrl = null),
					(this.volume = 1),
					(this.currentTime = 0),
					(this.duration = 0),
					(this.live_mode = t.live),
					(this.isMPage =
						!!window.location.href.match("//m.bilibili.com/video/") ||
						!!window.location.href.match("//pre-m.bilibili.com/video/") ||
						!0),
					(this.isBVideo =
						(this.options.bvid || this.options.aid) && this.options.cid),
					(this.firstPlay = !0),
					(this.firstClickArea = "other"),
					(this.track = new X(this)),
					this.init_ui(this.options),
					(this.start_video = this.start_video),
					(this.random = Math.floor(1e5 * Math.random())),
					(this.hidePlayIcon = !1),
					this.ws();
			}
			function $(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						"value" in n && (n.writable = !0),
						Object.defineProperty(e, n.key, n);
				}
			}
			(Z.UI_NORMAL = 0),
				(Z.UI_WIDE = 1),
				(Z.UI_FULL = 2),
				(Z.V_IDEL = 0),
				(Z.V_READY = 1),
				(Z.V_BUFF = 2),
				(Z.V_PLAY = 3),
				(Z.V_PAUSE = 4),
				(Z.V_COMPLETE = 5),
				(Z.V_CANPLAY = 6),
				(Z.V_PLAYING = 7),
				(Z.E_VIDEO_READY = "ready"),
				(Z.E_VIDEO_PLAY = "video_media_play"),
				(Z.E_VIDEO_PAUSE = "video_media_pause"),
				(Z.E_VIDEO_LOADSTART = "video_media_loadstart"),
				(Z.E_VIDEO_CANPLAY = "video_media_canplay"),
				(Z.E_VIDEO_WAITING = "video_media_waiting"),
				(Z.E_VIDEO_ENDED = "video_media_ended"),
				(Z.E_VIDEO_ERROR = "video_media_error"),
				(Z.E_VIDEO_LOADED = "video_media_loaded"),
				(Z.E_VIDEO_SEEK = "video_media_seek"),
				(Z.E_VIDEO_SEEKING = "video_media_seeking"),
				(Z.E_VIDEO_SEEKED = "video_media_seeked"),
				(Z.E_VIDEO_TIME = "video_media_time"),
				(Z.isFullscreen = function () {
					return (
						null !=
						(document.webkitFullscreenElement ||
							document.fullScreenElement ||
							document.mozFullScreenElement ||
							document.msFullscreenElement)
					);
				}),
				(Z.requestFullscreen = function (e, t) {
					e.requestFullscreen
						? e.requestFullscreen()
						: e.mozRequestFullScreen
						? e.mozRequestFullScreen()
						: e.webkitRequestFullscreen
						? e.webkitRequestFullscreen()
						: t.webkitEnterFullscreen
						? t.webkitEnterFullscreen()
						: t.webkitEnterFullScreen
						? t.webkitEnterFullScreen()
						: e.msRequestFullscreen && e.msRequestFullscreen();
				}),
				(Z.exitFullscreen = function () {
					document.cancelFullScreen
						? document.cancelFullScreen()
						: document.mozCancelFullScreen
						? document.mozCancelFullScreen()
						: document.webkitCancelFullScreen
						? document.webkitCancelFullScreen()
						: document.webkitCancelFullscreen
						? document.webkitCancelFullscreen()
						: document.msCancelFullScreen
						? document.msCancelFullScreen()
						: document.msExitFullscreen && document.msExitFullscreen();
				}),
				(Z.supportFullscreen = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: document.body,
						t = !0;
					return (
						(!1 !== document.fullscreenEnabled &&
							!1 !== document.webkitFullscreenEnabled &&
							!1 !== document.webkitCancelFullScreen &&
							!1 !== document.mozFullScreenEnabled &&
							!1 !== document.msFullscreenEnabled &&
							(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ||
								e.requestFullscreen ||
								e.mozRequestFullScreen ||
								e.webkitRequestFullscreen ||
								e.msRequestFullscreen)) ||
							(t = !1),
						t
					);
				}),
				(Z.prototype = {
					constructor: Z,
					play: function () {
						this.play_video();
					},
					seek: function (e) {
						this.seek_video(e);
					},
					pause: function () {
						this.pause_video();
					},
					getDuration: function () {
						return this.video_duration();
					},
					isFullScreen: function () {
						return Z.isFullscreen();
					},
					init_ui: function (e) {
						var t = this;
						e = e || {};
						var i = this,
							n = navigator.userAgent;
						((n.match("Android") && n.match("BiliApp")) ||
							!Z.supportFullscreen()) &&
							(this.elem.querySelector(".btn-widescreen").style.display =
								"none");
						var o,
							r = this.elem.querySelector(".fullscreen-in-tips"),
							a = this.elem.querySelector(".fullscreen-out-tips");
						function s(e) {
							i.on_fullscreen_change(e);
						}
						(this.elem.querySelector(".btn-widescreen").onclick = function () {
							o &&
								(clearTimeout(o),
								(o = 0),
								(a.style.opacity = 0),
								(r.style.opacity = 0)),
								window !== window.parent && i.screen_state !== Z.UI_FULL
									? (i.track.pageReport("click", "fullScreen", {
											status: "on",
									  }),
									  i.to_full_screen(),
									  (r.style.opacity = 1),
									  (o = setTimeout(function () {
											(r.style.opacity = 0), (o = 0);
									  }, 1500)))
									: window === window.parent && i.screen_state !== Z.UI_WIDE
									? (i.track.pageReport("click", "fullScreen", {
											status: "on",
									  }),
									  i.to_wide_screen(),
									  (r.style.opacity = 1),
									  (o = setTimeout(function () {
											(r.style.opacity = 0), (o = 0);
									  }, 1500)))
									: (i.track.pageReport("click", "fullScreen", {
											status: "off",
									  }),
									  i.to_normal_screen(),
									  (a.style.opacity = 1),
									  (o = setTimeout(function () {
											(a.style.opacity = 0), (o = 0);
									  }, 1500)));
						}),
							(this.elem.querySelector(
								".btn-fullscreen"
							).onclick = function () {
								i.screen_state !== Z.UI_FULL
									? i.to_full_screen()
									: i.to_normal_screen();
							}),
							document.addEventListener("webkitfullscreenchange", s, !1),
							document.addEventListener("mozfullscreenchange", s, !1),
							document.addEventListener("MSFullscreenChange", s, !1),
							document.addEventListener("fullscreenchange", s, !1),
							(this.elem.querySelector(".display").onmousemove = function (e) {
								i.on_display_mousemove(e);
							}),
							(this.elem.querySelector(".display").onclick = function (e) {
								i.on_display_click(e);
							}),
							(this.elem.querySelector(".control-bar").onclick = function (e) {
								i.get_video_state() === Z.V_PLAY &&
									i.set_control_bar_visible(!1, i.control_bar_timer_delay);
							}),
							(this.elem.querySelector(".btn-comment").onclick = function (e) {
								i.on_comment_btn_click(e);
							}),
							(this.elem.querySelector(".btn-repeat").onclick = function (e) {
								i.on_repeat_btn_click(e);
							}),
							(this.elem.querySelector(".btn-mute").onclick = function (e) {
								i.on_mute_btn_click(e);
							}),
							(this.elem.querySelector(".btn-unmute").onclick = function (e) {
								i.on_unmute_btn_click(e);
							}),
							(this.sliderCtrl = new D({
								player: this,
								parent: this.elem.querySelector(".control-slider"),
								upLayer: this.elem.querySelector(".display"),
								onChange: function (e, t) {
									i.track.pageReport("click", "progressBar", {
										toTime: e,
										way: t > 1 ? "drag" : "click",
									}),
										i.on_slider_seek(e);
								},
							})),
							(this.volumeCtrl = new D({
								parent: this.elem.querySelector(".control-volume-slider"),
								upLayer: this.elem.querySelector(".control-volume-slider"),
								liveDragging: !0,
								onChange: function (e) {
									i.on_volume_slider_seek(e);
								},
								value: 100 * this.volume,
							}));
						var c = i.elem.querySelector(".load-layer"),
							l = this.elem.querySelector("video");
						"audio" === this.options.type &&
							(l = this.elem.querySelector("audio")),
							e.video_url
								? (e.img &&
										(c.querySelector("img").setAttribute("src", e.img),
										l.setAttribute("poster", e.img)),
								  (c.onclick = function (e) {
										e.target &&
											e.target.classList &&
											e.target.classList.contains("icon-preview") &&
											(t.firstClickArea = "playCenterPlay"),
											i.start_video();
								  }))
								: c.classList.add("hide"),
							e.preload &&
								(l.setAttribute("src", e.video_url),
								(this.video = l),
								this.bind_video_events(l)),
							i.elem.querySelector(".btn-mute").classList.add("hide"),
							i.elem
								.querySelector(".control-volume-slider")
								.classList.add("hide"),
							i.elem.querySelector(".btn-fullscreen").classList.add("hide"),
							i.elem.querySelector(".btn-repeat").classList.add("hide"),
							window.addEventListener("orientationchange", function () {
								t.screen_state === Z.UI_WIDE &&
									(0 === window.orientation && t.options.portrait_full_screen
										? (t.elem
												.querySelector(".player-box")
												.classList.add("portrait"),
										  t.portrait_resize(1))
										: (t.elem
												.querySelector(".player-box")
												.classList.remove("portrait"),
										  t.portrait_resize(0)));
							}),
							window.addEventListener("resize", function () {
								t.screen_state === Z.UI_WIDE &&
									0 === window.orientation &&
									t.options.portrait_full_screen &&
									t.portrait_resize(1);
							}),
							window.addEventListener("beforeunload", function () {
								t.video_state !== Z.V_COMPLETE && t.track.heartBeat(4, !1);
							}),
							(this.endingPanel = new Y(this));
						try {
							this.recordData = JSON.parse(
								(function (e) {
									if (
										"undefined" != typeof localStorage &&
										localStorage &&
										localStorage.getItem
									)
										return localStorage.getItem(e);
									var t = "" + document.cookie,
										i = t.indexOf(e + "=");
									if (-1 == i || "" == e) return "";
									var n = t.indexOf(";", i);
									return (
										-1 == n && (n = t.length),
										unescape(t.substring(i + e.length + 1, n))
									);
								})("last_play_time_record") || {}
							);
							var u = 0,
								p = {};
							for (var d in this.recordData)
								u++, this.recordData[d].ct && (p[this.recordData[d].ct] = d);
							if (u > 30)
								for (var f in p) {
									delete this.recordData[p[f]];
									break;
								}
						} catch (e) {
							this.recordData = {};
						}
						if (
							this.isBVideo &&
							(this.options.bvid
								? (this.recordName = "bvid_"
										.concat(this.options.bvid, "_play_")
										.concat(this.options.cid))
								: this.options.aid &&
								  (this.recordName = "aid_"
										.concat(this.options.aid, "_play_")
										.concat(this.options.cid)),
							this.isMPage && 1 === S().playblock_dialog)
						) {
							var h = this.elem.querySelector(".play-block");
							setTimeout(function () {
								(h.style.display = "block"),
									window.reportMsgObj &&
										(window.reportMsgObj.player_block_tip_show = 1);
							}, 25e3),
								setTimeout(function () {
									h.style.display = "none";
								}, 3e4),
								setTimeout(function () {
									(h.querySelector(".play-block-text").innerHTML =
										"高能预警！发射你的神弹幕"),
										(h.style.display = "block"),
										window.reportMsgObj &&
											(window.reportMsgObj.player_block_tip_show = 2);
								}, 6e4),
								setTimeout(function () {
									h.style.display = "none";
								}, 65e3),
								h
									.querySelector(".play-block-download")
									.addEventListener("click", function () {
										A(
											"playblock_download",
											t.options.bvid || t.options.aid,
											t.options.page - 1
										);
									}),
								h
									.querySelector(".play-block-close")
									.addEventListener("click", function () {
										h.style.display = "none";
									});
						}
						setTimeout(function () {
							window.WeixinJSBridge &&
								window.WeixinJSBridge.on("onPageStateChange", function (e) {
									e.active || t.pause();
								});
						}, 3e3);
					},
					init_video: function (e, t, i) {
						(e = e || ""), (t = t || "video/mp4");
						var n = this,
							o = this.elem.querySelector("video");
						"audio" === this.options.type &&
							(o = this.elem.querySelector("audio")),
							(this.video = o),
							i ||
								(this.play_video(),
								o.setAttribute("src", e),
								this.bind_video_events(o)),
							(this.timer = setInterval(function () {
								n.on_timer_interval();
							}, 100)),
							this.set_video_state(Z.V_READY);
					},
					bind_video_events: function (e) {
						var t = this,
							i = this;
						e.addEventListener(
							"play",
							function () {
								i.options.eventBus &&
									i.options.eventBus.dispatch(Z.E_VIDEO_PLAY),
									i.on_video_play(e);
							},
							{
								passive: !0,
							}
						),
							e.addEventListener("playing", function () {
								i.on_video_playing(e);
							}),
							e.addEventListener(
								"pause",
								function () {
									i.options.eventBus &&
										i.options.eventBus.dispatch(Z.E_VIDEO_PAUSE),
										i.on_video_pause(e);
								},
								{
									passive: !0,
								}
							),
							e.addEventListener(
								"waiting",
								function () {
									i.options.eventBus &&
										i.options.eventBus.dispatch(Z.E_VIDEO_WAITING),
										i.on_video_waiting(e);
								},
								{
									passive: !0,
								}
							),
							e.addEventListener(
								"loadstart",
								function () {
									i.options.eventBus &&
										i.options.eventBus.dispatch(Z.E_VIDEO_LOADSTART),
										i.on_video_loadstart(e);
								},
								{
									passive: !0,
								}
							),
							e.addEventListener("canplay", function () {
								i.options.eventBus &&
									i.options.eventBus.dispatch(Z.E_VIDEO_CANPLAY),
									i.on_video_canplay(e);
							}),
							e.addEventListener(
								"ended",
								function () {
									i.options.eventBus &&
										i.options.eventBus.dispatch(Z.E_VIDEO_ENDED),
										i.on_video_ended(e);
								},
								{
									passive: !0,
								}
							),
							e.addEventListener(
								"loadeddata",
								function () {
									i.options.eventBus &&
										i.options.eventBus.dispatch(Z.E_VIDEO_LOADED);
								},
								{
									passive: !0,
								}
							),
							e.addEventListener(
								"error",
								function () {
									i.options.eventBus &&
										i.options.eventBus.dispatch(Z.E_VIDEO_ERROR);
								},
								{
									passive: !0,
								}
							),
							e.addEventListener(
								"timeupdate",
								function () {
									i.options.eventBus &&
										i.options.eventBus.dispatch(Z.E_VIDEO_TIME);
								},
								{
									passive: !0,
								}
							),
							e.addEventListener(
								"seeking",
								function () {
									(i.seeking = !0),
										i.options.eventBus &&
											i.options.eventBus.dispatch(Z.E_VIDEO_SEEKING);
								},
								{
									passive: !0,
								}
							),
							e.addEventListener("seeked", function () {
								(i.seeking = !1),
									i.options.eventBus &&
										i.options.eventBus.dispatch(Z.E_VIDEO_SEEKED),
									t.danmaku && t.danmaku.seek(e.currentTime);
							}),
							e.addEventListener(
								"webkitendfullscreen",
								function () {
									t.on_fullscreen_change();
								},
								!1
							),
							this.track.bindEvents();
					},
					on_video_play: function (e) {
						this.set_video_state(Z.V_PLAY);
					},
					on_video_playing: function (e) {
						this.set_video_state(Z.V_PLAYING);
					},
					on_video_pause: function (e) {
						this.set_video_state(Z.V_PAUSE);
					},
					on_video_waiting: function (e) {
						this.set_video_state(Z.V_BUFF);
					},
					on_video_loadstart: function (e) {
						this.set_video_state(Z.V_BUFF);
					},
					on_video_canplay: function (e) {
						this.set_video_state(Z.V_CANPLAY);
					},
					on_video_ended: function (e) {
						this.set_video_state(Z.V_COMPLETE);
					},
					set_video_state: function (e) {
						var t = this,
							i = this.video_state;
						if (i !== e) {
							switch (
								(this.elem
									.querySelector(".buff-tips")
									.classList.remove("active"),
								this.elem
									.querySelector(".state-icon i")
									.classList.remove("active"),
								e)
							) {
								case Z.V_READY:
									this.options.eventBus &&
										this.options.eventBus.dispatch(Z.E_VIDEO_READY, {
											play: this.play.bind(this),
											pause: this.pause.bind(this),
											seek: this.seek.bind(this),
											getDuration: this.getDuration.bind(this),
											isFullScreen: this.isFullScreen,
										});
									break;
								case Z.V_PLAY:
									if (
										(this.isMPage &&
											this.endingPanel &&
											this.endingPanel.hide(),
										this.elem
											.querySelector(".player-box")
											.classList.add("full"),
										this.elem
											.querySelector(".state-icon i.play-icon")
											.classList.add("active"),
										this.elem
											.querySelector(".state-icon i.pause-icon")
											.classList.remove("active"),
										this.firstBuff
											? ((this.firstBuff = !1),
											  this.set_control_bar_visible(!1))
											: this.set_control_bar_visible(
													!1,
													this.control_bar_timer_delay
											  ),
										this.danmaku && this.danmaku.play(),
										this.firstPlay)
									) {
										if (this.isBVideo) {
											if (
												(this.recordTimer && clearInterval(this.recordTimer),
												this.recordData[this.recordName])
											) {
												var n = Number(this.recordData[this.recordName].t) >> 0;
												if (n > 10) {
													var o = this.elem.querySelector(".playtime-record");
													(o.querySelector(
														".playtime-record-time"
													).innerHTML = v(n)),
														(o.style.display = "block"),
														this.track.pageReport("show", "timeReminder"),
														(o.onclick = function () {
															t.track.pageReport("click", "timeReminderGo"),
																t.seek(n),
																(o.style.opacity = 0),
																(o.style.pointerEvents = "none");
														}),
														setTimeout(function () {
															(o.style.opacity = 0),
																(o.style.pointerEvents = "none");
														}, 5e3);
												}
											}
											var r = 0,
												a = 0;
											this.recordTimer = setInterval(function () {
												t.video &&
													((r = Number(t.video.currentTime) || 0),
													Math.abs(r - a) > 0 &&
														r > 10 &&
														((t.recordData[t.recordName] = {
															t: r,
															ct: +new Date(),
														}),
														k(
															"last_play_time_record",
															JSON.stringify(t.recordData)
														),
														(a = r)));
											}, 1e3);
										}
										(this.firstPlay = !1),
											this.track.clickNowReport(function () {
												t.track.heartBeat(1);
											}),
											window.reportMsgObj &&
												window.reportObserver &&
												((window.reportMsgObj.playFirstTime = window.bsource),
												(window.reportMsgObj.click = "playFirstTime"),
												window.reportObserver.forceCommit());
									} else
										this.seeking
											? (this.track.seekDelayHeartBeat = 3)
											: this.track.heartBeat(3);
									break;
								case Z.V_PAUSE:
									this.elem
										.querySelector(".state-icon i.pause-icon")
										.classList.add("active"),
										this.elem
											.querySelector(".state-icon i.play-icon")
											.classList.remove("active"),
										this.danmaku && this.danmaku.pause(),
										this.track.heartBeat(2);
									break;
								case Z.V_BUFF:
									void 0 === this.firstBuff && (this.firstBuff = !0),
										(this.hidePlayIcon = !0),
										this.video &&
											!this.video.paused &&
											(this.elem
												.querySelector(".state-icon")
												.classList.remove("hide"),
											this.elem
												.querySelector(".buff-tips")
												.classList.add("active")),
										this.danmaku && this.danmaku.pause();
									break;
								case Z.V_COMPLETE:
									this.elem
										.querySelector(".state-icon i.pause-icon")
										.classList.add("active"),
										this.recordTimer && clearInterval(this.recordTimer),
										delete this.recordData[this.recordName],
										k("last_play_time_record", JSON.stringify(this.recordData)),
										this.isMPage && this.endingPanel && this.endingPanel.show(),
										this.track.heartBeat(4),
										(this.firstPlay = !0);
									break;
								case Z.V_CANPLAY:
									b(".load-layer", "hide") &&
										this.elem.querySelector(".load-layer").click(),
										this.elem.querySelector(".input-bar").classList.add("hide"),
										this.elem
											.querySelector(".player-box")
											.classList.add("full"),
										this.elem
											.querySelector(".state-icon i.play-icon")
											.classList.remove("active"),
										this.elem
											.querySelector(".state-icon i.pause-icon")
											.classList.add("active"),
										this.firstBuff
											? ((this.firstBuff = !1),
											  this.set_control_bar_visible(!1))
											: this.set_control_bar_visible(
													!1,
													this.control_bar_timer_delay
											  ),
										this.danmaku && this.danmaku.pause();
									break;
								case Z.V_PLAYING:
									this.set_control_bar_visible(!1),
										this.elem
											.querySelector(".state-icon i.play-icon")
											.classList.add("active"),
										this.elem
											.querySelector(".state-icon i.pause-icon")
											.classList.remove("active"),
										this.danmaku && this.danmaku.play();
							}
							e !== Z.V_PLAY &&
								(this.elem
									.querySelector(".player-box")
									.classList.remove("full"),
								this.set_control_bar_visible(!0)),
								(this.video_state = e),
								this.on_state_change(this.video_state, i);
						}
					},
					on_state_change: function (e, t) {
						this.options.on_state_change && this.options.on_state_change(e, t);
					},
					get_video_state: function () {
						return this.video_state;
					},
					start_video: function (e, t, i) {
						var n = this.options,
							o = this;
						this.elem.querySelector(".load-layer").classList.add("hide"),
							this.init_video(n.video_url, n.video_type, n.preload),
							this.init_comment(),
							this.options.autoplay || this.play_video(),
							"audio" === this.options.type ||
								(this.elem.querySelector("video").classList.add("show"),
								(this.elem.querySelector("video").style.display = "inline")),
							this.set_control_bar_visible(!1),
							g(
								this.elem.querySelector(".state-icon i.play-icon"),
								"click",
								function (e) {
									o.track.pageReport("click", "playButton", {
										status: "off",
									}),
										b(this, "active") && o.pause_video();
								}
							),
							g(
								this.elem.querySelector(".state-icon i.pause-icon"),
								"click",
								function (e) {
									o.track.pageReport("click", "playButton", {
										status: "on",
									}),
										o.play_video();
								}
							);
					},
					pause_video: function () {
						var e = this.video;
						e && e.pause();
					},
					play_video: function () {
						var e = this.video,
							t = window.navigator.userAgent,
							i = document.querySelectorAll("video");
						if (e) {
							if (
								t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ||
								t.indexOf("iPad") > -1
							)
								for (var n = 0; n < i.length; n++) i[n].pause();
							e.play(),
								!this.tracked &&
									this.options.track &&
									((this.tracked = !0), this.send_track());
						}
					},
					set_duration: function (e) {
						this.duration = e;
					},
					seek_video: function (e) {
						this.video &&
							((e = Math.max(0, e)),
							!this.options.max_duration &&
								this.video_duration() &&
								(e = Math.min(e, this.video_duration() - 0.5)),
							this.options.eventBus &&
								this.options.eventBus.dispatch(Z.E_VIDEO_SEEK),
							(this.video.currentTime = e),
							this.video.play());
					},
					set_volume: function (e) {
						(this.volume = e), this.video && (this.video.volume = e);
					},
					video_time: function () {
						return this.currentTime;
					},
					video_duration: function () {
						return this.duration;
					},
					on_timer_interval: function () {
						this.video &&
							this.update_time(this.video.currentTime, this.video.duration);
					},
					on_slider_seek: function (e) {
						this.seek_video(e);
					},
					on_volume_slider_seek: function (e) {
						this.set_volume(e / 100);
					},
					update_time: function (e, t) {
						if (t != this.duration) {
							this.maxDuration =
								this.options.max_duration > 0
									? Math.min(this.options.max_duration, t)
									: t;
							var i = this.duration;
							(this.duration = t),
								this.sliderCtrl.setMax(this.maxDuration),
								Math.floor(i) !== Math.floor(this.maxDuration) &&
									(this.elem.querySelector(".time-total-text").innerText = v(
										this.maxDuration
									));
						}
						if (
							(this.currentLessThanMaxDurationStatus && e > this.maxDuration
								? ((this.currentLessThanMaxDurationStatus = !1),
								  this.seek_video(this.duration - 0.1))
								: e < this.maxDuration &&
								  !this.currentLessThanMaxDurationStatus &&
								  this.options.max_duration > 0 &&
								  (this.currentLessThanMaxDurationStatus = !0),
							e !== this.currentTime)
						) {
							var n = this.currentTime;
							(this.currentTime = e),
								this.sliderCtrl.setValue(e, !1),
								Math.floor(n) !== Math.floor(e) &&
									(this.elem.querySelector(".time-current-text").innerText = v(
										e > this.maxDuration ? this.maxDuration : e
									));
						}
					},
					portrait_resize: function (e) {
						e
							? ((this.elem.querySelector(".player-box").style.width =
									document.documentElement.clientHeight + "px"),
							  (this.elem.querySelector(".player-box").style.height =
									document.documentElement.clientWidth + "px"))
							: ((this.elem.querySelector(".player-box").style.width = null),
							  (this.elem.querySelector(".player-box").style.height = null));
					},
					to_wide_screen: function () {
						switch (this.screen_state) {
							case Z.UI_NORMAL:
								this.elem.classList.add("wide"),
									0 === window.orientation &&
										this.options.portrait_full_screen &&
										(this.elem
											.querySelector(".player-box")
											.classList.add("portrait"),
										this.portrait_resize(1));
								break;
							case Z.UI_FULL:
								this.elem.querySelector(".player-box").classList.remove("full"),
									this.set_control_bar_visible(!0),
									Z.exitFullscreen();
						}
						try {
							window.player_fullwin(!0);
						} catch (e) {}
						(this.parent = this.elem.parentNode),
							this.video.paused || this.video.play(),
							this.elem
								.querySelector(".btn-widescreen")
								.classList.add("active"),
							(this.screen_state = Z.UI_WIDE),
							this.comment_stage_resize();
					},
					to_normal_screen: function () {
						switch (this.screen_state) {
							case Z.UI_FULL:
								Z.exitFullscreen(),
									this.elem
										.querySelector(".player-box")
										.classList.remove("full"),
									this.set_control_bar_visible(!0);
								break;
							case Z.UI_WIDE:
								this.elem.classList.remove("wide"),
									this.elem
										.querySelector(".player-box")
										.classList.remove("portrait"),
									this.portrait_resize(0),
									this.video.paused || this.video.play();
						}
						try {
							window.player_fullwin(!1);
						} catch (e) {}
						this.elem
							.querySelector(".btn-widescreen")
							.classList.remove("active"),
							(this.screen_state = Z.UI_NORMAL),
							this.comment_stage_resize();
					},
					to_full_screen: function () {
						this.elem.classList.remove("wide"),
							this.elem.querySelector(".player-box").classList.add("full"),
							Z.requestFullscreen(this.elem, this.video);
						try {
							window.player_fullwin(!0);
						} catch (e) {}
						this.elem
							.querySelector(".btn-widescreen")
							.classList.remove("active"),
							(this.screen_state = Z.UI_FULL),
							this.comment_stage_resize();
					},
					on_fullscreen_change: function (e) {
						Z.isFullscreen() || this.to_normal_screen();
					},
					on_display_mousemove: function (e) {
						this.screen_state === Z.UI_FULL &&
							(e.pageY >= (2 * this.elem.clientHeight) / 3
								? this.control_bar_visible || this.set_control_bar_visible(!0)
								: this.control_bar_visible && this.set_control_bar_visible(!1));
					},
					on_display_click: function (e) {
						e.target === this.elem.querySelector(".display") &&
							(this.control_bar_visible
								? (this.set_control_bar_visible(!1),
								  this.elem
										.querySelector(".control-bar")
										.classList.contains("hide") ||
										this.track.pageReport("click", "playArea", {
											status: "off",
										}))
								: (this.set_control_bar_visible(!0),
								  this.get_video_state() === Z.V_PLAY &&
										this.set_control_bar_visible(
											!1,
											this.control_bar_timer_delay
										),
								  this.track.pageReport("click", "playArea", {
										status: "on",
								  })));
					},
					on_play_btn_click: function (e) {
						this.play_video();
					},
					on_keydown: function (e) {
						if (e.target != this.elem.querySelector(".text-input"))
							switch (e.which) {
								case 32:
									this.video_state != Z.V_PLAY
										? this.play_video()
										: this.pause_video();
									break;
								case 37:
									this.seek_video(this.video_time() - 5);
									break;
								case 38:
									break;
								case 39:
									this.seek_video(this.video_time() + 5);
							}
					},
					on_pause_btn_click: function (e) {
						this.pause_video();
					},
					on_share_btn_click: function (e) {
						"function" == typeof window.on_share_btn_click &&
							window.on_share_btn_click.call(this, e);
					},
					on_comment_btn_click: function (e) {
						if (!this.danmaku) return !1;
						this.danmaku.visible()
							? (this.danmaku.visible(!1),
							  this.elem
									.querySelector(".btn-comment")
									.classList.remove("active"),
							  this.track.pageReport("click", "danmuButton", {
									status: "off",
							  }))
							: (this.danmaku.visible(!0),
							  this.elem.querySelector(".btn-comment").classList.add("active"),
							  this.track.pageReport("click", "danmuButton", {
									status: "on",
							  }));
					},
					on_repeat_btn_click: function (e) {
						this.video &&
							(this.video.loop
								? ((this.video.loop = !1),
								  this.elem
										.querySelector(".btn-repeat")
										.classList.remove("active"))
								: this.elem
										.querySelector(".btn-repeat")
										.classList.add("active"));
					},
					on_mute_btn_click: function (e) {
						this.elem.querySelector(".btn-mute").classList.add("hide"),
							this.elem.querySelector(".btn-unmute").classList.remove("hide"),
							this.elem
								.querySelector(".control-volume-slider")
								.classList.add("mute"),
							this.video && (this.video.muted = !0);
					},
					on_unmute_btn_click: function (e) {
						this.elem.querySelector(".btn-unmute").classList.add("hide"),
							this.elem.querySelector(".btn-mute").classList.remove("hide"),
							this.elem
								.querySelector(".control-volume-slider")
								.classList.remove("mute"),
							this.video && (this.video.muted = !1);
					},
					set_control_bar_visible: function (e, t) {
						var i = this;
						clearTimeout(this.control_bar_timer),
							e !== this.control_bar_visible &&
								(e
									? (this.elem
											.querySelector(".control-bar")
											.classList.remove("hide"),
									  this.elem
											.querySelector(".state-icon")
											.classList.remove("hide"),
									  (this.control_bar_visible = !0))
									: (this.hidePlayIcon
											? (this.hidePlayIcon = !1)
											: this.elem
													.querySelector(".state-icon")
													.classList.remove("hide"),
									  (this.control_bar_timer = setTimeout(function () {
											i.elem
												.querySelector(".control-bar")
												.classList.add("hide"),
												i.elem
													.querySelector(".state-icon")
													.classList.add("hide"),
												(i.control_bar_visible = !1);
									  }, t || 0))));
					},
					init_comment: function () {
						if ("audio" !== this.options.type) {
							var e = this.options.cmt_url || "";
							this.options.get_cmt_url &&
								(e = this.options.get_cmt_url + this.options.cid + ".xml"),
								(this.danmaku = new W({
									container: this.elem.querySelector(".danmaku-container"),
									url: e,
									video: this.video,
								})),
								this.comment_stage_resize();
						}
					},
					comment_stage_resize: function () {
						if (!this.danmaku) return !1;
						this.danmaku.resize();
					},
					__GetCookie: function (e) {
						try {
							var t = "" + document.cookie,
								i = t.indexOf(e + "=");
							if (-1 == i || "" == e) return "";
							var n = t.indexOf(";", i);
							return (
								-1 == n && (n = t.length),
								unescape(t.substring(i + e.length + 1, n))
							);
						} catch (e) {
							return 0;
						}
					},
					ws: function () {
						var e = {
								WS_OP_HEARTBEAT: 2,
								WS_OP_HEARTBEAT_REPLY: 3,
								WS_OP_MESSAGE: 5,
								WS_OP_USER_AUTHENTICATION: 7,
								WS_OP_CONNECT_SUCCESS: 8,
								WS_PACKAGE_HEADER_TOTAL_LENGTH: 16,
								WS_PACKAGE_OFFSET: 0,
								WS_HEADER_OFFSET: 4,
								WS_VERSION_OFFSET: 6,
								WS_OPERATION_OFFSET: 8,
								WS_SEQUENCE_OFFSET: 12,
							},
							t = (function () {
								function t(t) {
									(this.config = Object.assign({}, t)),
										(this.url = this.config.url),
										(this.packetList = []),
										(this.packetLimit = 1),
										(this.WebSocket = window.WebSocket || window.MozWebSocket),
										(this._WS_BINARY_HEADER_LIST = [
											{
												name: "Header Length",
												key: "headerLen",
												bytes: 2,
												offset: e.WS_HEADER_OFFSET,
												value: e.WS_PACKAGE_HEADER_TOTAL_LENGTH,
											},
											{
												name: "Protocol Version",
												key: "ver",
												bytes: 2,
												offset: e.WS_VERSION_OFFSET,
												value: e.WS_HEADER_DEFAULT_VERSION,
											},
											{
												name: "Operation",
												key: "op",
												bytes: 4,
												offset: e.WS_OPERATION_OFFSET,
												value: e.WS_HEADER_DEFAULT_OPERATION,
											},
											{
												name: "Sequence Id",
												key: "seq",
												bytes: 4,
												offset: e.WS_SEQUENCE_OFFSET,
												value: e.WS_HEADER_DEFAULT_SEQUENCE,
											},
										]);
								}
								return (
									(t.prototype = {
										constructor: t,
										_conn: null,
										_close: !1,
										retry: 0,
										max_retry: -1,
										mergeArrayBuffer: function (e, t) {
											var i = new Uint8Array(e),
												n = new Uint8Array(t),
												o = new Uint8Array(i.byteLength + n.byteLength);
											return o.set(i, 0), o.set(n, i.byteLength), o.buffer;
										},
										getDecoder: function () {
											return window.TextDecoder
												? new window.TextDecoder()
												: {
														decode: function (e) {
															return decodeURIComponent(
																window.escape(
																	String.fromCharCode.apply(
																		String,
																		new Uint8Array(e)
																	)
																)
															);
														},
												  };
										},
										getEncoder: function () {
											return window.TextEncoder
												? new window.TextEncoder()
												: {
														encode: function (e) {
															for (
																var t = new ArrayBuffer(e.length),
																	i = new Uint8Array(t),
																	n = 0,
																	o = e.length;
																n < o;
																n++
															)
																i[n] = e.charCodeAt(n);
															return t;
														},
												  };
										},
										connect: function () {
											if (!this.WebSocket) return !1;
											var t = this;
											(this._close = !1),
												(this._conn = new this.WebSocket(this.url)),
												(this._conn.binaryType = "arraybuffer"),
												(this._conn.onopen = function () {
													var i = JSON.stringify({
															uid: t.config.uid,
															roomid: t.config.cid,
														}),
														n = new ArrayBuffer(
															e.WS_PACKAGE_HEADER_TOTAL_LENGTH
														),
														o = new DataView(n, 0),
														r = t.getEncoder().encode(i);
													o.setInt32(
														e.WS_PACKAGE_OFFSET,
														e.WS_PACKAGE_HEADER_TOTAL_LENGTH + r.byteLength
													),
														o.setInt16(
															e.WS_HEADER_OFFSET,
															e.WS_PACKAGE_HEADER_TOTAL_LENGTH
														),
														o.setInt16(e.WS_VERSION_OFFSET, 1),
														o.setInt32(e.WS_OPERATION_OFFSET, 7),
														o.setInt32(e.WS_SEQUENCE_OFFSET, 1),
														t._conn.send(t.mergeArrayBuffer(n, r));
												}),
												(this._conn.onmessage = function (e) {
													t.parsePacket(e.data);
												}),
												(this._conn.onclose = function (e) {
													t._close ||
														((-1 == t.max_retry || t.retry++ < t.max_retry) &&
															setTimeout(function () {
																t.connect();
															}, 1e3 * Math.floor(3 * Math.random() + 3)));
												});
										},
										heartbeat: function () {
											var t = new ArrayBuffer(e.WS_PACKAGE_HEADER_TOTAL_LENGTH),
												i = new DataView(t, 0);
											i.setInt32(
												e.WS_PACKAGE_OFFSET,
												e.WS_PACKAGE_HEADER_TOTAL_LENGTH
											),
												i.setInt16(
													e.WS_HEADER_OFFSET,
													e.WS_PACKAGE_HEADER_TOTAL_LENGTH
												),
												i.setInt16(e.WS_VERSION_OFFSET, 1),
												i.setInt32(e.WS_OPERATION_OFFSET, 2),
												i.setInt32(e.WS_SEQUENCE_OFFSET, 1),
												this._conn.send(t);
										},
										close: function () {
											(this._close = !0), this._conn && this._conn.close();
										},
										destroy: function () {
											clearInterval(this.interval_timer), this.close();
										},
										parsePacket: function (t) {
											var i = this,
												n = new DataView(t, 0),
												o =
													(n.getInt32(e.WS_PACKAGE_OFFSET),
													n.getInt16(e.WS_HEADER_OFFSET),
													n.getInt16(e.WS_VERSION_OFFSET),
													n.getInt32(e.WS_OPERATION_OFFSET));
											n.getInt32(e.WS_SEQUENCE_OFFSET);
											switch (o) {
												case 8:
													i.heartbeat(),
														(i.interval_timer = setInterval(function () {
															i.heartbeat();
														}, 3e4));
											}
										},
									}),
									t
								);
							})();
						(this.websocket = new t({
							url:
								"https:" == window.location.protocol
									? "wss://broadcast.chat.bilibili.com:4095/sub"
									: "ws://broadcast.chat.bilibili.com:4090/sub",
							uid: parseInt(this.__GetCookie("DedeUserID")),
							cid: parseInt(this.options.cid),
						})),
							this.websocket.connect();
					},
					send_track: function () {
						var e = this,
							t = {
								aid: this.options.aid,
								cid: this.options.cid,
								part: this.options.page || 1,
								did:
									this.__GetCookie("sid") ||
									Math.random().toString(36).slice(-8),
								ftime:
									this.__GetCookie("fts") || parseInt(new Date() / 1e3, 10),
								jsonp: "jsonp",
								lv: "",
								mid: "",
								csrf: this.__GetCookie("bili_jct") || "",
								stime: "",
							};
						a.a
							.get("//api.bilibili.com/x/web-interface/nav", {
								withCredentials: !0,
							})
							.then(function (i) {
								i &&
									200 === i.status &&
									i.data &&
									i.data.data &&
									i.data.data.level_info &&
									((t.mid = i.data.data.mid),
									(t.lv = i.data.data.level_info.current_level)),
									e.get_system_time(t);
							})
							.catch(function () {
								e.get_system_time(t);
							});
					},
					get_system_time: function (e) {
						var t = this;
						a.a
							.get("//api.bilibili.com/x/report/click/now", {
								withCredentials: !0,
								params: {
									jsonp: "jsonp",
								},
							})
							.then(function (i) {
								i &&
									200 === i.status &&
									i.data &&
									0 === i.data.code &&
									(e.stime = i.data.data.now),
									t.send_report_click(e);
							})
							.catch(function () {
								t.send_report_click(e);
							});
					},
					send_report_click: function (e) {
						a.a.post("//api.bilibili.com/x/report/click/h5", c.a.stringify(e), {
							withCredentials: !0,
						});
					},
					destroy: function () {
						clearInterval(this.timer),
							clearInterval(this.recordTimer),
							clearInterval(this.interval_timer),
							this.video &&
								(this.video.pause(),
								(this.video.src = ""),
								(this.video = null));
					},
				});
			var ee = (function () {
					function e() {
						!(function (e, t) {
							if (!(e instanceof t))
								throw new TypeError("Cannot call a class as a function");
						})(this, e),
							(this.listeners = {});
					}
					var t, i, n;
					return (
						(t = e),
						(i = [
							{
								key: "on",
								value: function (e, t, i) {
									if (!e)
										throw new Error("Event name cannot be null or undefined");
									if (!t || "function" != typeof t)
										throw new Error("Listener must be of type function.");
									void 0 !== this.listeners[e]
										? this.listeners[e].push({
												scope: i,
												callback: t,
										  })
										: (this.listeners[e] = [
												{
													scope: i,
													callback: t,
												},
										  ]);
								},
							},
							{
								key: "off",
								value: function (e, t, i) {
									if (void 0 !== this.listeners[e]) {
										for (
											var n = this.listeners[e].length, o = [], r = 0;
											r < n;
											r++
										) {
											var a = this.listeners[e][r];
											(a.scope === i && a.callback === t) || o.push(a);
										}
										this.listeners[e] = o;
									}
								},
							},
							{
								key: "dispatch",
								value: function (e, t) {
									if (void 0 !== this.listeners[e])
										for (var i = 0; i < this.listeners[e].length; i++) {
											var n = this.listeners[e][i];
											n && n.callback && n.callback.apply(n.scope, [e, t]);
										}
								},
							},
						]) && $(t.prototype, i),
						n && $(t, n),
						e
					);
				})(),
				te = i(85),
				ie = i.n(te);
			(window.BiliH5Player = function () {
				(this.options = {
					ele: "#bofqi",
					aid: null,
					bvid: null,
					cid: null,
					page: 1,
					danmaku_number: 150,
					season_type: null,
					qn: 32,
					preload: !1,
					send_cmt_url: "//corpcmt.hdslb.net/post",
					get_cmt_url: null,
					live: !1,
					track: !1,
					on_state_change: null,
					get_from_local: !1,
					comment: null,
					image: null,
					video_url: null,
					hq: !1,
					retry_times: 5,
					max_duration: null,
					portrait_full_screen: !1,
					noRecommend: !1,
					newStyle: !1,
				}),
					(this.eventBus = new ee());
			}),
				(BiliH5Player.prototype = {
					constructor: BiliH5Player,
					on: function (e, t) {
						this.eventBus.on(e, t, this);
					},
					off: function (e, t) {
						this.eventBus.off(e, t, this);
					},
					create: function (e) {
						var t = this,
							i = this;
						if (
							("[object Object]" === Object.prototype.toString.call(e) &&
								(this.options = Object.assign({}, this.options, e)),
							!this.options.ele)
						)
							return (this.player = {}), !1;
						var n = '\n        <div class="audioCover">\n            <img class="background" src='
								.concat(
									this.options.image,
									' alt=""/>\n            <div class="backgroundCover"></div>\n            <div class="cover">\n                <img class="coverImg" src='
								)
								.concat(
									this.options.image,
									' alt=""/>\n            </div>\n        </div>\n        '
								),
							o = "audio" === this.options.type,
							r = "";
						r = o
							? "<audio ".concat(
									this.options.autoplay ? "autoplay" : "",
									"></audio>"
							  )
							: "<video"
									.concat(
										"string" == typeof this.options.preload
											? ' preload="metadata"'
											: "",
										' width="100%" height="100%" '
									)
									.concat(
										this.options.autoplay ? "autoplay " : "",
										"webkit-playsinline playsinline></video>"
									);
						var s = '<div class="player-container'
								.concat(
									this.options.newStyle ? " player-container-new" : "",
									'">\n                <div class="dummy"></div>\n                <div class="player-box">\n                    '
								)
								.concat(
									r,
									'\n                    <div class="display">\n                        '
								)
								.concat(
									o ? n : "",
									'\n                        <div class="input-bar">\n                            <input class="text-input" type="text" placeholder="请在这里输入弹幕" />\n                            <button class="send-btn">发送</button>\n                        </div>\n                        <div class="control-bar hide">\n                            <div class="time-container">\n                                <span class="control-text time-current-text">00:00</span>\n                                <span class="control-time-split"></span>\n                                <span class="control-text time-total-text">24:00</span>\n                            </div>\n                            <div class="control-slider'
								)
								.concat(
									o ? " audio" : "",
									'"></div>\n                            <div class="right'
								)
								.concat(
									o ? " audio" : "",
									'">\n                                <span class="control-btn btn-mute"><i class="player-icon icon-mute"></i></span>\n                                <span class="control-btn btn-unmute hide"><i class="player-icon icon-unmute"></i></span>\n                                <span class="control-volume-slider"></span>\n                                <span class="control-btn btn-comment active'
								)
								.concat(
									o ? " hide" : "",
									'"><i class="player-icon icon-comment"></i></span>\n                                <span class="control-btn btn-repeat"><i class="player-icon icon-repeat"></i></span>\n                                <span class="control-btn btn-widescreen"><i class="player-icon icon-widescreen"></i></span>\n                                <span class="control-btn btn-fullscreen active"><i class="player-icon icon-fullscreen"></i></span>\n                            </div>\n                        </div>\n                        '
								)
								.concat(
									o ? "" : '<div class="danmaku-container"></div>',
									'\n                        <div class="load-layer">\n                            <img/><i class="player-icon icon-preview">'
								)
								.concat(
									this.options.newStyle
										? '<span class="bp-svgicon">'.concat(ie.a, "</span>")
										: "",
									'</i>\n                            <div class="player-video-time"></div>\n                        </div>\n                        <div class="state-icon">\n                            <i class="pause-icon"></i>\n                            <i class="play-icon"></i>\n                        </div>\n                        <div class="buff-tips">\n                            <img src="//s1.hdslb.com/bfs/static/mult/images/loading.svg">\n                            <span>正在缓冲</span>\n                        </div>\n                        <div class="fullscreen-tips">\n                            <span class="fullscreen-in-tips">进入全屏模式</span>\n                            <span class="fullscreen-out-tips">退出全屏模式</span>\n                        </div>\n                        <div class="playtime-record">\n                            您上次观看到<span class="playtime-record-time"></span>  <span class="playtime-record-jump">跳转</span>\n                        </div>\n                        <div class="play-block">\n                            <div class="play-block-tv">\n                                <img src="'
								)
								.concat(
									"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABACAYAAACjgtGkAAAABGdBTUEAALGPC/xhBQAAE1lJREFUeAHVWwl4VUWWPu+9vKxkIwlZSAgJxAGC7AECsggIBMSlRfHrjdbWRnHUduGTRnRQu9sRtHVg1GH0+5qve1AQlFFAsBsb1EFpEBSEAGEJCUlYsu/LS17N/9fLfbl5yQtbwHDgvFu3blXdU+eeOufUORWLXGeglIoByXOAjcANFouloEtPAQT/HPgFcC/wJWBUZxGMsZKAR4AGnEChb2eN3+njgLhfkNJz5wvVkaNZLCrldH6P38QrfRnG8AFuAaqHH31CPfL4U6rJ6eTtB1c69lXrD+LWNTQ0qPFTMlR0Qh+16LkXSDBhNzD0Sl6M/vM50Iq3VqqQyDjV+4aBqri4hFWURMuVjH3V+oKw92rr6tTQkTepqJ5JKjyml1ry0sskmvAxMPByXo5+8cDCg5mZKgmMCOuRoB58+FFUaVh8OWNekz4gbzZJXLv+IxXTq6+KSUzRjHlr5Tuacvy8B7RdKjHo8zYH+Okvf62ZccPAoerEyWxW5QIjLnW8a9YexFmBq4Dq9eVvqsi43mBMiooFY95bs47VhFcvhaDGxsZb0cexcfMWMDdZdYfU/fGV1/RA+PnVpYz1o7QFkYHAjaT4pZeXqgjNlL4qPrmf2rzlM1YTnr8Y4tCOivSbmppaddOkaWBGohqRPl6VlZWjWu0C+l7MOD96GxAaAtwJVL9bvERPhEo2JXWo2vXPPawm3H8hQtFmLhu++vpyLRkRsb3Vqr+uZhVh0oX6d6nnIDgKuJNW5zfzH9MKtkd8sho8Il1lHoYr4XQ24vkcIKXAHxgGDADagRZgT2AudUVK6hAVEZuobplxu6qvr0e1Wne1JntF5gqEhYAw+hgDgXSQegKTgKwvAtLUjsMkBL6DYMmI0+mUG1L6ytrVqyS+J5vLYQEjxGJh20pgLbAOGA7s9et5j8iGTzaJv5+frF71rtw8cTyqZSvwqIgzR8RainI+8GwzVsB7rUf5suCSGQIm3Ig33QGcgon0x0TcnmhNba2UlpZJZWWl+Pv745FFiktKxIpreXmFLFj0nGQdOy5QlJI+aqQ8u3CB+Pn6igP3kCSx2Wzih4n7+/uJBf++279fnln0vH42dky6vL7sZfHx8ZGwsDAJ7hYkvujrARUiqlDEcgz1h4CHgXTt94GWc7heEC6aIWDEIIz2FJjwM8zUln0qRw5mHpbjx08Iy2QCPEfBUhA7CO0eHiYhwSFi87FJaEiIBAUF6glbrVbNBLvdridut/uK3e4Dplk1Ay1Wiy6DH1JXWyeNTU1SU1MDRtikrq5eqlGmxDXUO/C+pub32SUgIADvDJcePaKkZ1ycxMXG6Pc1c6AY1/XA18AYMssrXJAhYAQ/w7PAhU7l9N20aat8ves7iH6TpKQkSlLvRP3y6B49pFvzV6NkXCuor2/QDCuvqNDSeP58oRQWFekPFOAfICH4GImJCZI2fBiER5WD6wtA3zve6OuQcjCjB0ZZBRHM+Grn1/Lplh2SkjxIJoxPlz59u64/ZEyWkpV7Ok/Wf/SxHIMkL1zwpPTvdwMf/xRMed9od1FXMKMf8ABQLX/zv9Tvnl2mdu/KU0XnHay67uDzf+xQs+/9hTrs2nTSkaEKuDhA4/HAvNraWvXC75eqFf+5VmUdqVKZB8tUddX1yRB+wUOZh9V9Dz6sqqqqefsV0M+TI22WDBqlotG2srKymBd+v0zShk2S0WljpK6+DkrKIsl9Q6AErZ7jtLlvgjKsgKKtgHUBY6WqqkpbGirF2ppabVmogAnUObQwtCA2m1UUNSp++Z/3NhuULpQt29jQxg4MDAwEBogfLBKVd3BwMBSry7LpQb38/OV/3pec3Fx5btEzbDEH724VPvAx9wMzEnC/oaq6Ombh4hdlwtiZMnKEixkKxPmAET4+HTPj22/3ybbPt0t+fgGsS7CEhoaKrx8siY/dNXFYCzIACo6ccL0eZUQ2dL2vr118YXk4edCDD+GEtQFDq6s1U2lp6oG1dbVuK0Rm0XrRYoXDuiUnJ8mgGwfKwIEDtPUxz/Hee+6Sx596Bgq4VCLCw36JZ60Y4pYQvNyOh58Ap7NDar90mTJxmpYMDkjigkN8pVdiN962gaysY/Luu6uksLBQJsJ5GjdurPTqlaC/epvGnVRBJ4+SWAvzTAVaAp/n+ImTsnv3t7Jv33cSCFP/r488JBMnaGfO/daP/vcTLWm335oBR9DSBx8IvosHYML3AaFA31bPLFyqThyrVYd+KHHjD/uLVX6eXnts1gq++OIrdd/989Tq1WsUCGv17Me6KSoqVqvfW6syZtyhNm78tBUZefn56rU3Vhh1szxYob9+NJ6ezj51SmXMmqP27ilQhw+VuZlBxpAhZ8+0nezpvHx1x533qF27GBTreoAlrGbdNludzD7lJg6SpcMTDge3U2qZmSGGQngUlfFrPlgvo9LGwzUO13sOc0OWqVQ9YcOGjyUWXuHIkSM8H3WJ++HDh0qfPkny4foNbnqow3pERcFHOc26NDDFPTGDIeP45MjRkzJuzERpcDTwtg1YPRjicDhk585v5JZbJrsUZZseXaNi8qSJsnvPt3pPZFBE/UZ9A+VIf4QbSw0GQ87CzEqAXzDc8HhxQlG1B9ykmYFuckVFpaQO6G+u7nLlYcOGSjWsVG6ulghNX0LPOCk4c4aWLgwVtK4aGPIDU1RKdk6OJMQnwXTR2HiB1vwQ7h+4M+WGqisDl3RcXKxkZ59ykxkZGYn9ThXvOasBxgNKSDgcoL4nT55Cp4R2dYfR2PPqaHA0O0iXFUz3HO6q3VNn9O/fT44cyXK/g7tvAv0fQDJ/CGRIDHjUraSkTCK6R3XMEN1X99M/1CH0DjuUqpbmP2ppYOoAycnJbUUDaa/EksekU4wHZAjWkMXS0NCIoEsIdIzLnTYadHRlUIfutvY8O2rYBZ4lwXtlsIo0G8DQQGERQiVWay+jjgwJ4E0Dvja/NHSK8eyCV0a66GJfD8B4DSW6qJixIheEYP9zHp41IBHz1sqTDElkTWOjU+8hWPYGnsxqamwSm/X6YEhwcDcdniwoYOjVBWHYZxVrBqlY1DCGCx3idPqz4GxSEP8OLAzaeAoPlxfDeNcDcFmHhYVCj+S4yQ3u1k2QmMe9hatEm0qr3lfjjoFf7ho9pcDdGwV4vOZbvcOsq2OA/PqAKHinp061KNbgkG7wo8pJPFdKtFHQs1SwvS4J8HA22KoZPBlCnYOsmmam0aYrXxl4Pnu2ZclQhzRi2TdDEq+Mh2izQpFCEBkWo+3SaO7QRkKYBqCEUFnR2lwqlJeXy4EfDklZaSlCBhMQ5Gk/tOBtXErzgQMHdUB5wIB+0r17d29NdT0dSKZJDOiGJdMAX4rjYP7aW+UsitiAy8Wby24M4HklQ8gMRr6ZBrhYyMo6Jlu2/k12bP9Su8+MZTz91BMyd+7PLnYI3Y4K8ekFC3UkjpMdMmSwTJ06WUaMGC6B7dATERGhXXiaXtLOj0hmMJ8UFBjoZgizZQCFHAiPbV08BCCEhy20Ds5QYXUEzKUgRCAbN30qjKoxpEiCGORhUis0lMm+SwNG4zKmT5MP1n0otB5nzpyTbdv+Ib2RGpky+WYwZ4oOUhmj8h2ko7q6xp3konPGJBoYopUqJUSn/WwIwVGxdgQuHdPSgl+BE+IX9gYMJX755f8hhfGZzto5m5zwXajDRLv9N41Nl1mzZsqw4UO8DeG1njrsyScf09G5TWD019/8E0uiVE5gF8sE2pq162XKlEnyq7k/l5iYaAlC3ohxWsZ4GWokgBHa9EK/xPOeDNGuG5dMExhCXeLN0ngyhMuEsUzuJD3hDHaSDCl++dVO4U6a7VygJDq6h/6CM2dm6PinZ99LvU9LGy5E7mbJ+M8++7vk5eXrL/8BYjx7934n//HGMgSjg3UmkVJiAJNrZZAQABPtkFkRrWbJkAstGU8rQ3FjUNisqDhyXl6ePP7bBTBxOW7RtMKB69//X2TmjOly880ToAC1H8TmnQaMcTw07wG5d85s+fu27bJ1y9+QoDoumYcPy/ff75fp06dqz9rsKgRAQkogVYAYYAgZonWID/KrbEgJaQ9Y7ckQrn1KCdegGfKwTLKzc7RU0HKMQmL71pnTsSyG6RSCue3VKDMZfvfsO+Und94mR49mCcKcMmpkmnYrXJbRJCHY9RYXa4YwZaslBAxRDqwlex1C+94YwrABvVkzcB/DDZJ5f8DnadDyy5b9UedfhgwdZBx7MHe9JmXSNwDBKyKBqoASzcS8AUGBQZJPd55n3ywWiIVLqTb6+/va6+o7YohLQqhHzEIUEdFdigq15TbeocVy8qSJ7vuuUuDH9vP1g0Rr71STRSmvRxIOwH2LPxlC0+KA6AcUF9VADtpfMmiDHAi8WbjvFlNslcHaggKE4joRSuFfnDtzVuITE6W6tka2b96smTz+lqmQuhrkh0IkIiryst4YAtOLVKa7L7N/dM7wlan1w5t1iOU8/IiQnOxc4fmM9sDQIU1giDnYTHOWmclzKZ0Hfvhq2SdOyOY1ayQOYt8biq8ODuCalSslOqm3TJo2/bJfxpQn06kG+CGrWNdidXx9IEYNWFs1IUg7VlVzbbXPEA5ApUopgfl3Q0xMjI6lMIPWWbGRwKAgybj9NqnJzpYJmIAFqo4uQQV03O1z57rffTkFSgT9EANoFGhhm8HtHBQzNkCGePNB2IH6w1OxUofQoTNHoozRr/Tqh+V4BuvdRvHEy/W+6QLO44XeSYkwz5E6hc5aM/gZ3lJ+OI4jNTU5tOdpPPW8kiGUEDPQnyAzKuGKdzakwy0/hG+2C9n6Hfn5kjw6/YrNNgNa5hgwj3OZPPRI6hBCKf0F6gaKvjcgZxlZMwOPJTAjf/bsOZ0NMz+70jI3Yz95ZL7kIcMWhJ0pw4BXCgx7cjNqAHWpaQlFGBJykkcQfO02bNZaGhudzNe2DAmA7rDKsazj5madVvaFwkpOTu4UZpCoGmzszFsNSkeFKz/Dx9rUsKCjJoGB/lrjenfOYJ8bWi8ZKqX4+HjENQ5ynC4PZdBJ3GUboJd7i6MWZEhILhuEhgbDzld79VbJqIaGtktq9Og0+QGBnquhWA3CO+PKJc/cjDnTSAYx6qfB6TRJiFJNAYF+UlRSZNqZtiXD4eAhldZSMnbsGL2FPngws22HLlTD87TccHKTaUABHEAqVg1W62lDQgrhfhTH94yVvPxTXlMLtH5kiKOhtWLlWdXBg2+U5SvearU+jZd2hWsJjlC98cYKSUiIl2FDW2Iv3Pwxz9sMuZohWArwyCx7mcXPL8jV/obRwvNK56y2rvWy4VL67eOP6pMA99//EAIz63RiWbvEngNcg3taSp5KONocqnxl6WvywIPz9a58yZLFOkJnkLHv+/0yaGAqb7kFznW7aFhfT6DiT08ueE7uves3+lSf2YFhDwIZEhbuJ/EJiD55AI4xyZ9X/VW2b/9C2/bIyAih9ETDvefxbiozC/wKeoZkog9OF/LINk8Z8gg4o3b0lCmJnBSziYzIMaDDdU4LgT9h03Fc7QzCfPJ0pBHf4Dl5np1nMIp9ST/9K2b+Bw+6UVJT+7fyQRhLnXXnPfLO2yskOan3Xrx8pJkh/VBxEKeIbNVVfjLhpslQki1xA/PcL3Q8swLHJBgTKYWY8sgBlS3DjBTbyqpKfUjOgTqeY2f2j8zhSUWGJOnXMNTHK8+jWGHS+Zxn4VmmY0Xm8VQjvU7GN7hj5fFM/sUErR4DVwEBgfpqptuzjL/SkpXv/lk2bdAHEV/Ae5a02B+RLPiwW2fNzJi5+N+W4mzqWP1F23PUqEfKyxokMsrf8x36njGSAcCuDPxIZMa8B+4jmdjuyvssGEqVXwGa0vJqEDZWqQOS5ZU/vYi9TZXmfks8lF3QCl+stLReGsGY6xF40GfR8y9KxrQpAgHgFJZjTkdZcC8Z3mDNMXO9ATjrD/++TLbv+EZmzbgbh3dHS/ewCBzcNW1zYXkDAn0kJtYOUWbvrg3MH3EZ7/x6l3y+fYfMwD7p7rvuINGrgQ+AITpK1IohfAqmMMf5F+DUPXv3yZtv/zfyHYVwZuI0U3yxO6RipdTw9A0T3ojK4W9keNLZhrJdKy5KEYEhAaLhHVJJUly5FBl4ph7guqdy5TMMSSKYWHWXmVF0KXjqEihdvLt5eLRlkg26Bf2pZ1xK2oZ3OPSRLzpiOadPy7lz5zXdY8eMkvnzHsTf1MSSvBXAp0Gre7/ShiFshZcz4PoYGwOj6zGBIvwNCg+ccCNEk0bFyRPE1PYkiIEjanhOXMcXSDGI5cQakcwiAxyNDl2mMm1EmZssfjkyQtehnWaKqyNe3QwYShNKZgBdf2zkesb2Tcj1kEZaDcZNaG0YO6Wy5W48KiJSpzvofwRC4QIOAJ/HWB+7Rmn5bZchxuNmaeEiGwmMA/bEFBFAkGBgBJCLxTQG9RBn4wk4B8oT/fyn2+vvi1P+6uofP3IdiUI6gX+XZ9mD938I3AJmtESJTOSaJmOq7aAIJrEPmUJHhErZ5Ty4GOGFIQYj3FcykkilREvHMscx6imhZjDTSYazbR8g86dsy35sw0kyYIrJ6ytjhWVABmtKwQRakw7h/wEqyi/VRvScawAAAABJRU5ErkJggg==",
									'" />\n                                <span class="play-block-text">App内畅享60帧1080P+超高清</span>\n                            </div>\n                            <div class="play-block-download">\n                                <span>下载App</span>\n                            </div>\n                            <div class="play-block-close">\n                                <img src="'
								)
								.concat(
									"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABHFJREFUWAnVmcFLFFEcx2d2uhRevMVCHTwkq3QIk92gAjEiCUNX9NLBS6wXAw20S5c61qXAP6FD7OJqRuBBEXKjNuokqHUQhXYVlPZmIKzb9zvMG2ZnZ3be7M6u24Plzbz3+733eb/9/X7z5o2q1FFKpZI6MjISxRD3T09PO1CHVVUNs0ZfCdf7qPK4z4dCoR3UH+fn57NoL+G6pqLWogXIO8VicRQTPwDQRT9jQOcAOkuapqUAv+JHl7K+gOPxeAyWfAm9W34ncpFfh+Vn0+n0V5f+imYpYFi0A6CvYJl4xQgBNMDqaYDPwOJ0m6rFE9j4+5MYpb3qSPV3FuAmY15uolWbBy7wGFZ9C5kL1eQC6juPcR52dXUVtra2vrmN6Qo8PDz8GrDPoRhyU25AewhzDkQikfbt7e1lp/EdgQ3LEvasSgyW/uNk6Qofps8iwJaxUsfFNGsFCMQiAvGe3afLgJkNkF+/A6rRASa7bgbidWv2KPNPpq4WguWi2g0mc4GmhY2Hwhezp4Uu4Bo3xMPFtDB8ltZtyWJl0wPLCLRnsrRIO0oikVBOTk6UXC4nq6bLRaNRZXx8XDk6OtJ/ksqXu7u7PyNr7JyjAvxkTFJRF0OOVnp7e5Wenh5lbm5OWVtbk1Lv6+tTJicnFfzFujwApPQoxM0WqhUmavrxIBtly+rqKhepT0wAgngVKyx1OYafYuwMVW1jYyMG6Ck/ynSDw8ND3cq0Fq3N+93dXcdh7LD8VzKZjKNslca2VCq1rMEfJwB8u4qgYxfhZKCdYGVdyD4x99JaZ2fnI3RctXfK3HtBBwlLHhj2N4OOrzQ1F2EtEUysRRFt9Fk/wSn0Heqwioj/CfIrDp2+muzWpDL9O0BYBS7xq24Li1XZLc32IGGNecJMazW/wQrYZtVkDcHM+0FMaHcJWpcuIZunZRjISgvz3KCuYodlgPEXNDRZ6cN1ATvBCn+mFUSmENnD2leDlfIaXkWugdz3g4OTecF65Wm/wHCx93zS/QUwHx6+ihesGCxIaPjwU21zczOXTCYnMEGbmMSr5hZxenpaOs86Qe/t7fnamgL2AJv4J8wSMHBpyQvS2t/f3y8NK/Tou9ZA5Bh+ChnJyqBTeDCH/WZCdoCFhQVdlFvEbDYrq6bvm4+PjxXCijFklclIWfOdbmho6BPugzrkk+WQlVtfXFzUE4P5TocInJXVbraclc0E5lspfCTdbBiv+cgk3pgpawLrNzjyRF3gdYuUAqxLJrOUAfOEhUeeWFXRlDijCzKQxXrqQ5SK8zO+SvPIE2lk4IxY9Wlh2Sm4wjs7QwUwBXhqyCNPXMbsCs24h3XfIO29cJrLEZiCPJ/lkScu7+JX5jrsb0ShG9CybrCc08zDbgD/1ScDLoI+jWMiPmUu4RdhW9AFlk0jwEYRYD+8xva0sHUAnnAiGPk16aa1vdZrgGbwm7HmWa+xfAGLwYzDQ57HDQLe94dF6H2AryZh0cZ+WBTAogas66dbQyYPGb7RBPbp9h/oiXRcNKk2SAAAAABJRU5ErkJggg==",
									'" / >\n                            </div>\n                        </div>\n                    </div>\n                    <div class="player-ending-panel"></div>\n                </div>'
								),
							c = document.createDocumentFragment(),
							l = document.createElement("div");
						(l.innerHTML = s), c.appendChild(l);
						var u = this.options.ele;
						if (
							(Object.prototype.toString
								.call(this.options.ele)
								.match(/HTML.+Element/) ||
								(u = document.querySelector(this.options.ele)),
							(function (e, t) {
								var i = document.createDocumentFragment();
								if ("[object NodeList]" === Object.prototype.toString.call(e))
									for (var n = 0; n < e.length; n++) i.appendChild(e[n]);
								else i.appendChild(e);
								t.appendChild(i);
							})(c.firstChild.childNodes, u),
							this.options.duration)
						) {
							u.querySelector(".player-video-time").style.display = "block";
							var p = this.options.duration;
							this.options.max_duration &&
								(p = Math.min(p, this.options.max_duration)),
								(u.querySelector(".player-video-time").innerHTML = v(p));
						}
						if (this.options.get_from_local)
							(this.initialized = !0), setTimeout(this.setVideo());
						else if (+this.options.type === bPlayer.type.Pugv) this.setPugv();
						else if (this.options.season_type) {
							if (!this.options.cid) return (this.initialized = !0), !1;
							var d = {};
							this.options.bvid
								? (d.bvid = this.options.bvid)
								: (d.aid = this.options.aid),
								a.a
									.get("//api.bilibili.com/x/web-interface/view", {
										withCredentials: !0,
										params: d,
									})
									.then(function (e) {
										var t = e.data;
										t && t.data && t.data.pic && (i.options.image = t.data.pic),
											i.setBangumi();
									})
									.catch(function () {
										i.setBangumi();
									});
						} else {
							if (!this.options.bvid && !this.options.aid)
								return (this.initialized = !0), !1;
							var f = {};
							this.options.bvid
								? (f.bvid = this.options.bvid)
								: (f.aid = this.options.aid),
								a.a
									.get("//api.bilibili.com/x/web-interface/view", {
										withCredentials: !0,
										params: f,
									})
									.then(function (e) {
										var n = e.data;
										if (
											n &&
											n.data &&
											n.data.pic &&
											((i.options.image = n.data.pic), !t.options.cid)
										)
											try {
												var o = (i.options.page || 1) - 1;
												if (n && n.data && n.data.pages) {
													var r = n.data.pages;
													r[o]
														? (i.options.cid = r[o].cid)
														: (i.options.cid = r[0].cid || n.data.cid);
												} else i.options.cid = n.data.cid;
											} catch (e) {
												i.options.cid = n.data.cid;
											}
										if (!t.options.duration && n && n.pages) {
											var a = n.pages.find(function (e) {
												return e.cid === i.options.cid;
											});
											a &&
												((u.querySelector(".player-video-time").style.display =
													"block"),
												(u.querySelector(".player-video-time").innerHTML = v(
													a.duration
												)));
										}
										i.setUgc();
									})
									.catch(function () {
										i.setUgc();
									});
						}
						return this;
					},
					setVideo: function () {
						var e = this.options,
							t = this;
						if (e.video_url) {
							var i = e.ele;
							Object.prototype.toString.call(e.ele).match(/HTML.+Element/) ||
								(i = document.querySelector(e.ele)),
								(i = i.querySelector(".player-container")),
								this.options.live
									? (this.player = new Z(i, {
											send_cmt_url: e.send_cmt_url,
											get_cmt_url: e.get_cmt_url,
											video_url: e.video_url,
											video_type: null,
											live: !0,
											cmt_url: e.comment,
											danmaku_number: e.danmaku_number,
											img: e.image,
											on_state_change: e.on_state_change,
											portrait_full_screen: e.portrait_full_screen,
											noRecommend: e.noRecommend,
											eventBus: this.eventBus,
									  }))
									: (this.player = new Z(i, {
											aid: e.aid,
											bvid: e.bvid,
											cid: e.cid,
											page: e.page,
											img: e.image,
											track: e.track,
											video_url: e.video_url,
											cmt_url: e.comment,
											send_cmt_url: e.send_cmt_url,
											get_cmt_url: e.get_cmt_url,
											video_type: "video/mp4",
											danmaku_number: e.danmaku_number,
											on_state_change: e.on_state_change,
											max_duration: e.max_duration,
											preload: e.preload,
											portrait_full_screen: e.portrait_full_screen,
											noRecommend: e.noRecommend,
											autoplay: e.autoplay,
											type: e.type,
											eventBus: this.eventBus,
									  })),
								(this.options.auto_start || this.options.autoplay) &&
									this.player.start_video();
						} else {
							if (this.initialized || !(retry_times > 0))
								return (this.player = {}), !1;
							setTimeout(function () {
								return (retry_times -= 1), t.setVideo(), !1;
							}, 500);
						}
					},
					cookie: {
						get: function (e) {
							var t = "" + document.cookie,
								i = t.indexOf(e + "=");
							if (-1 == i || "" == e) return "";
							var n = t.indexOf(";", i);
							return (
								-1 == n && (n = t.length),
								unescape(t.substring(i + e.length + 1, n))
							);
						},
						set: function (e, t) {
							var i = new Date();
							i.setTime(i.getTime() + 72e5),
								(document.cookie =
									e +
									"=" +
									escape(t) +
									";expires=" +
									i.toGMTString() +
									"; path=/; domain=.bilibili.com");
						},
					},
					getQuery: function () {
						return window.location.href.split("?")[1];
					},
					setUgc: function () {
						var e = this,
							t = this.options,
							i = {
								cid: t.cid,
								qn: 0,
								type: "mp4",
								otype: "json",
								fnver: 0,
								fnval: 1,
								platform: "html5",
								html5: 1,
							};
						this.options.bvid
							? (i.bvid = this.options.bvid)
							: (i.avid = this.options.aid),
							t.hq && (i.high_quality = 1),
							a.a
								.get("//api.bilibili.com/x/player/playurl", {
									withCredentials: !0,
									params: i,
								})
								.then(function (i) {
									if (
										i &&
										i.data &&
										i.data.data &&
										i.data.data.durl &&
										i.data.data.durl[0]
									) {
										var n = {
											cid: "//api.bilibili.com/x/v1/dm/list.so?oid=" + t.cid,
											src: i.data.data.durl[0].url,
											img: t.image,
										};
										e.initialized = !0;
										try {
											"http:" !== window.location.protocol &&
												((n.cid = n.cid.replace("http://", "https://")),
												(n.src = n.src.replace("http://", "https://")),
												(n.img = n.img.replace("http://", "https://")));
										} catch (i) {}
										(e.options.comment = n.cid),
											(e.options.image = n.img),
											(e.options.video_url = n.src),
											n.auto_start && (e.options.auto_start = n.auto_start),
											e.setVideo();
									} else (e.initialized = !0), (e.options.video_url = "//s1.hdslb.com/bfs/static/player/media/error.mp4"), e.setVideo();
								})
								.catch(function (e) {
									console.error(e);
								});
					},
					setBangumi: function () {
						var e = this,
							t = this.options;
						a.a
							.get("//bangumi.bilibili.com/player/web_api/v2/act/playurl", {
								withCredentials: !0,
								params: {
									cid: t.cid,
									platform: "html5",
									qn: t.qn || 32,
									season_type: t.season_type,
									build: "0.2.0",
									otype: "json",
									type: "mp4",
								},
							})
							.then(function (i) {
								var n = i.data;
								if (n.durl && n.durl[0]) {
									(n.src = n.durl[0].url || n.durl[0].backup_url[0]),
										(e.initialized = !0),
										(e.options.comment =
											"//api.bilibili.com/x/v1/dm/list.so?oid=" + t.cid),
										(e.options.video_url = n.src);
									try {
										"http:" !== window.location.protocol &&
											((e.options.comment = e.options.comment.replace(
												"http://",
												"https://"
											)),
											(e.options.video_url = e.options.video_url.replace(
												"http://",
												"https://"
											)),
											e.options.image &&
												(e.options.image = e.options.image.replace(
													"http://",
													"https://"
												)));
									} catch (e) {}
									n.auto_start && (e.options.auto_start = n.auto_start),
										e.setVideo();
								} else (e.initialized = !0), (e.options.comment = "//api.bilibili.com/x/v1/dm/list.so?oid=1"), (e.options.image = "//s1.hdslb.com/bfs/static/player/img/transparent.gif"), (e.options.video_url = "//s1.hdslb.com/bfs/static/player/media/error.mp4"), e.setVideo();
							})
							.catch(function () {
								(e.initialized = !0),
									(e.options.comment =
										"//api.bilibili.com/x/v1/dm/list.so?oid=1"),
									(e.options.image =
										"//s1.hdslb.com/bfs/static/player/img/transparent.gif"),
									(e.options.video_url =
										"//s1.hdslb.com/bfs/static/player/media/error.mp4"),
									e.setVideo();
							});
					},
					setPugv: function () {
						var e = this,
							t = this.options;
						a.a
							.get("//api.bilibili.com/pugv/player/web/playurl", {
								withCredentials: !0,
								params: {
									avid: t.aid,
									cid: t.cid,
									platform: "html5",
									qn: t.qn || 32,
									ep_id: t.episodeId,
									fnver: 0,
									fnval: 1,
								},
							})
							.then(function (i) {
								var n = i.data && i.data.data;
								if (n.durl && n.durl[0]) {
									(n.src = n.durl[0].url || n.durl[0].backup_url[0]),
										(e.initialized = !0),
										(e.options.comment =
											"//api.bilibili.com/x/v1/dm/list.so?oid=" + t.cid),
										(e.options.video_url = n.src);
									try {
										"http:" !== window.location.protocol &&
											((e.options.comment = e.options.comment.replace(
												"http://",
												"https://"
											)),
											(e.options.video_url = e.options.video_url.replace(
												"http://",
												"https://"
											)),
											e.options.image &&
												(e.options.image = e.options.image.replace(
													"http://",
													"https://"
												)));
									} catch (e) {}
									n.auto_start && (e.options.auto_start = n.auto_start),
										e.setVideo();
								} else e.setErrorVideo();
							})
							.catch(function () {
								e.setErrorVideo();
							});
					},
					sendComment: function (e, t, i) {
						if (!this.player) return !1;
						this.player.send_comment(e, t, i);
					},
					setErrorVideo: function () {
						(this.initialized = !0),
							(this.options.comment =
								"//api.bilibili.com/x/v1/dm/list.so?oid=1"),
							(this.options.image =
								"//s1.hdslb.com/bfs/static/player/img/transparent.gif"),
							(this.options.video_url =
								"//s1.hdslb.com/bfs/static/player/media/error.mp4"),
							this.setVideo();
					},
					destroy: function () {
						this.player && this.player.destroy && this.player.destroy();
						var e = this.options.ele;
						Object.prototype.toString
							.call(this.options.ele)
							.match(/HTML.+Element/) ||
							(e = document.querySelector(this.options.ele)),
							(e.innerHTML = "");
					},
					reload: function (e) {
						this.destroy(), this.create(e);
					},
				}),
				window.bPlayer ||
					(window.bPlayer = {
						get __name__() {
							return "bPlayer";
						},
						get __mode__() {
							return "singleton";
						},
						get metadata() {
							return {
								name: "@jsc/bilibili-h5-player",
								version: "0.7.0",
								revision: "6c3a194",
								lastCompiled: "2020-06-11T12:02:08.032Z",
							};
						},
						get type() {
							return n;
						},
						get events() {
							return o;
						},
					}),
				window.bPlayer;
			var ne = document.querySelector('meta[name="viewport"]');
			ne.setAttribute(
				"content",
				ne.getAttribute("content") + ",viewport-fit=cover"
			);
		},
	]);
});
