(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-mine"],{"03a2":function(i,e,t){var n=t("ab3e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=t("4f06").default;a("323e4d53",n,!0,{sourceMap:!1,shadowMode:!1})},"4f66":function(i,e,t){"use strict";var n=t("03a2"),a=t.n(n);a.a},5804:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{userInfo:{}}},methods:{copy:function(i){uni.setClipboardData({data:i,success:function(){uni.showToast({title:"内容已复制"})},fail:function(i){console.log(i)}})},goToCollections:function(){uni.navigateTo({url:"/pages/collections/collections"})},goToOrder:function(){uni.navigateTo({url:"/pages/orderList/orderList"})},goToLogin:function(){this.$store.commit("user/set_token",""),this.$store.commit("user/set_userInfo",""),uni.redirectTo({url:"/pages/login/login"})},goCustomer:function(){uni.navigateTo({url:"/pages/customerService/customerService"})}},onLoad:function(){this.$store.state.user.userInfo&&(this.userInfo=this.$store.state.user.userInfo)}};e.default=n},"6ef0":function(i,e,t){"use strict";t.r(e);var n=t("f344"),a=t("ab4d");for(var o in a)"default"!==o&&function(i){t.d(e,i,(function(){return a[i]}))}(o);t("4f66");var s,l=t("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"1a1d8e66",null,!1,n["a"],s);e["default"]=c.exports},a3c8:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABJCAYAAACesWDiAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATxSURBVHgB7ZxNcts2FIAfQLvupjM+gn2CpieovKjtXZJpnZmsJF+gMk9g+QSS2gNYXnUmdcbNzpou7BskPUFyg6pNMuM4EZAHydAPTRIPFADSM/w2tkUQBL+AD8ADFYCamhqPMKgQf3b3GzySTSlhC//8JxKs9zS+fAclUglBSgzj8hh/bdw7yGAQjdlJWaJKFZQrJklJokoRZCUmSWBRQQWtJCZJIFFBBNmLkSNs2iapqGdRXgW96P7U4pw3gSpGwrWU7OQgvrx+0d1vKanYwC3SuZ5EeRGkxEScH0vizTEJg1sU8zzl5soW5VSQSzH36y5H1MqCLrqNzTHfaGJFRzQxGF8EO/sMrPe8QOOVKM5EGxh7RDphRVGFBSkxYu2bthRwRAuociQF73+Am95hfD2CFZkEfoaBnxHjG4qSY3am4htYYC2obDFJrEUBDgRiOhBQCpMFVU1MEl+iSIIuuvtbgssraowJKSbJRBSIFnDWpJSXDHoHvw7jrOMkQef93ddY1BAUyxWT5A/8R10H0aGIwqciPoiHvbRja0AiX44arv+Xt3EVxGjuRsgWiuqsc3mBv2feA2fwfeYxICFzbxy7aeu7aKOrHkWoEOpxQzmnkCNHgfmn/7KOkQSpYGYuBK0xl2/Pf9s7LVuUEnPe37vCieUVGJY5GFffqTlZ1nHyKFaVtVEedotiWsy0ngdVUZQPMZrCM+kqiLJNo6hQYTvK5go67+4+YRF7rIJYVgK9DFG2YvIWxaZ7zBT08vfdYzTeWb5S9s2FEOVSTEbmYSSE2HkW//1m3swU7lbo/0LmlcOKCiBmBk4aX+Gk8cm8edkNugJjS/yKCilmBmY1fzka7syblQJZ0LwWp6LGY/kq4qwNIcVovAia1+ZOFOVyLsVovAqa1+pVlBcxmlUECcEOOZNNmyyeS1HuxEwniwzkJi622suHlgURF6tT1mF6Mg7/O6oi4wk567Nn8eXgoD3cVtLVeiivGiXms2DbPx8ND5NylJiX/b23uL10apajxLCT9+J2GxNlHWlYhCuI6Y5l7rJw1+Qs3lRUC0Xd61FKFP4YpPUoao+RYEIvLz5Z56oKCdL4EKXqUjf9EW7+SruZUGI0KwnSuBSVlSMOLUbjRJDGpShNWWI0VkGaihJVIJi/RhlLmT+1HiwSfF2mfp32oCSWPWozYlwNuYfqj8l6MLlYvof7HpPEqyANVdRiT/kC3z5ikPVQ+RejCSJIsygKMJleaDYtoP8ebjuhdlC8xCATE1FCnkEBIkywh9xeKkXQQ6IWZKAWZKAWZKAWZKAWZKAWZKAWZKAWZKAWZKAWZKAWZKAWZMBK0DiSx1V7D7Eo070/9thUzi4fRMghV535CxGyQSm/lv7hzZsxbGSf9QBFUcWwxCZm6iP2FBNSD+3N1ixs3nhVqVy1Ubn4SWYMUrsDlG3hab3VE2UnRm9v8x+Su7i5MShvWziVCjx6tjHG9KU+UpB+CKJci9FYjWJVFOVLjKbQtk8VRPkWMzsPHFDkPcTJTxS39PnCy0tZL3FxYC0BUp3XAMqlCorRONk4LNKjoCAoZ0Apt6oYjdOdVWtRHnAlRuNl67kMUa7FaLzuzYcQ5UuMJsjLC1RRi+sg03rQt5iFNoUnXZQcJaf6OJJ17r6KMCOUmNn1oESUqIjJH9VXkbL+qwpKmZoS+QrqEsJ/7in4TgAAAABJRU5ErkJggg=="},ab3e:function(i,e,t){var n=t("24fb");e=n(!1),e.push([i.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.mine[data-v-1a1d8e66]{height:100vh;position:relative}.mine .logout[data-v-1a1d8e66]{font-style:normal;font-weight:500;font-size:14px;line-height:20px;\n  /* identical to box height */text-align:center;color:#d10910;position:absolute;bottom:%?240?%;left:0;width:100%}.mine-head[data-v-1a1d8e66]{display:flex;align-items:center}.mine-head-image[data-v-1a1d8e66]{width:%?110?%;height:%?110?%;border-radius:50%}.mine-head-box[data-v-1a1d8e66]{margin-left:%?20?%;display:flex;flex-direction:column;justify-content:space-between;height:%?90?%}.mine-head-box-title[data-v-1a1d8e66]{font-family:PingFang SC;font-style:normal;font-weight:400;font-size:16px;line-height:22px;color:#ececec}.mine-head-box-phone[data-v-1a1d8e66]{font-weight:400;font-size:12px;line-height:17px;color:#aeaeae}.mine-head-icon[data-v-1a1d8e66]{margin-left:auto}.mine-notice[data-v-1a1d8e66]{display:flex;align-items:center;background:#1d1d1d;border:.5px solid #2f2f2f;border-radius:4px;margin-top:%?20?%;padding:%?10?%}.mine-notice-name[data-v-1a1d8e66]{background:linear-gradient(90deg,#9c8746,#645735 93.2%);border-radius:3px;font-size:12px;width:%?140?%;padding:%?10?%;display:flex;align-items:center;justify-content:center}.mine-notice-title[data-v-1a1d8e66]{flex:1;overflow:hidden;padding:%?10?%;font-weight:500;font-size:%?18?%;color:#aeaeae;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mine-notice-copy[data-v-1a1d8e66]{color:#b19e63;width:%?40?%}.mine-list[data-v-1a1d8e66]{margin-top:%?20?%}.mine-list-item[data-v-1a1d8e66]{display:flex;align-items:center;border-bottom:.5px solid #363636;height:%?80?%;font-weight:500;font-size:12px;line-height:17px;color:#9b8751}.mine-list-item-image[data-v-1a1d8e66]{width:%?48?%;height:%?48?%;margin-right:%?20?%}',""]),i.exports=e},ab4d:function(i,e,t){"use strict";t.r(e);var n=t("5804"),a=t.n(n);for(var o in n)"default"!==o&&function(i){t.d(e,i,(function(){return n[i]}))}(o);e["default"]=a.a},c23c:function(i,e){i.exports="data:image/png;base64,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"},f344:function(i,e,t){"use strict";var n;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return n}));var a=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("v-uni-view",{staticClass:"container mine"},[n("cu-head"),n("v-uni-view",{staticClass:"mine-head"},[n("v-uni-image",{staticClass:"mine-head-image",attrs:{src:i.userInfo.avatar,mode:""}}),n("v-uni-view",{staticClass:"mine-head-box"},[n("v-uni-view",{staticClass:"mine-head-box-title"},[i._v(i._s(i.userInfo.nick_name||"未设置昵称"))]),n("v-uni-view",{staticClass:"mine-head-box-phone"},[i._v(i._s(i.userInfo.phone?i.userInfo.phone.substring(0,3)+"****"+i.userInfo.phone.substring(7,12):""))])],1)],1),n("v-uni-view",{staticClass:"mine-notice"},[n("v-uni-view",{staticClass:"mine-notice-name"},[i._v("资产地址：")]),n("v-uni-view",{staticClass:"mine-notice-title"},[i._v(i._s(i.userInfo.public_key))]),n("v-uni-text",{staticClass:"cuIcon-copy mine-notice-copy",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.copy(i.userInfo.public_key)}}})],1),n("v-uni-view",{staticClass:"mine-list"},[n("v-uni-view",{staticClass:"mine-list-item",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.goToCollections.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"mine-list-item-image",attrs:{src:t("a3c8"),mode:""}}),i._v("我的专辑"),n("v-uni-text",{staticClass:"cuIcon-right mine-head-icon",staticStyle:{color:"#fff"}})],1),n("v-uni-view",{staticClass:"mine-list-item",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.goToOrder.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"mine-list-item-image",attrs:{src:t("fdb1"),mode:""}}),i._v("专辑订单"),n("v-uni-text",{staticClass:"cuIcon-right mine-head-icon",staticStyle:{color:"#fff"}})],1),n("v-uni-view",{staticClass:"mine-list-item",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.goCustomer.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"mine-list-item-image",attrs:{src:t("c23c"),mode:""}}),i._v("联系客服"),n("v-uni-text",{staticClass:"cuIcon-right mine-head-icon",staticStyle:{color:"#fff"}})],1)],1),n("v-uni-view",{staticClass:"logout",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.goToLogin.apply(void 0,arguments)}}},[i._v("退出登录")])],1)},o=[]},fdb1:function(i,e){i.exports="data:image/png;base64,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"}}]);