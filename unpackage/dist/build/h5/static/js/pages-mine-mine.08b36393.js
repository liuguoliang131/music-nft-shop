(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-mine"],{"1da1":function(t,e,n){"use strict";function i(t,e,n,i,r,o,a){try{var c=t[o](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(i,r)}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,s,"next",t)}function s(t){i(a,r,o,c,s,"throw",t)}c(void 0)}))}},n("d3b7")},"242f":function(t,e,n){var i=n("b590");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("07a46abc",i,!0,{sourceMap:!1,shadowMode:!1})},5804:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("c7eb")),o=i(n("1da1")),a=n("173f"),c=i(n("adff")),s={data:function(){return{userInfo:{}}},components:{NavHead:c.default},methods:{copy:function(t){uni.setClipboardData({data:t,success:function(){uni.showToast({title:"内容已复制"})},fail:function(t){}})},goToCollections:function(){uni.navigateTo({url:"/pages/myRecords/myRecords"})},goToOrder:function(){uni.navigateTo({url:"/pages/orderList/orderList"})},goToLogin:function(){this.$store.dispatch("user/dispatch_clearUserData"),this.$store.dispatch("globalAudio/dispatch_music"),this.$store.commit("globalAudio/set_show",!1),uni.redirectTo({url:"/pages/login/login"})},goCustomer:function(){uni.navigateTo({url:"/pages/customerService/customerService"})},goToInviteFriends:function(){uni.navigateTo({url:"/pages/inviteFriends/inviteFriends"})},goToMyTeam:function(){uni.navigateTo({url:"/pages/myTeam/myTeam"})},goToSubgiftRecord:function(){uni.navigateTo({url:"/pages/subgiftRecord/subgiftRecord"})},getUserInfo:function(){var t=this;return(0,o.default)((0,r.default)().mark((function e(){var n;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$store.state.user.userInfo){e.next=4;break}t.userInfo=t.$store.state.user.userInfo,e.next=11;break;case 4:return e.next=6,t.$get(a.h5_user_info);case 6:if(n=e.sent,0===n.code){e.next=9;break}return e.abrupt("return",uni.showToast({title:n.msg,icon:"none"}));case 9:t.userInfo=n.data,t.$store.commit("user/set_userInfo",n.data);case 11:case"end":return e.stop()}}),e)})))()}},onLoad:function(){this.getUserInfo()}};e.default=s},"6ef0":function(t,e,n){"use strict";n.r(e);var i=n("a189"),r=n("ab4d");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("baee");var a=n("f0c5"),c=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"0ec052aa",null,!1,i["a"],void 0);e["default"]=c.exports},a189:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container mine"},[n("nav-head",{attrs:{title:"我的"}}),n("v-uni-view",{staticClass:"mine-head"},[n("v-uni-image",{staticClass:"mine-head-image",attrs:{src:t.userInfo.avatar,mode:""}}),n("v-uni-view",{staticClass:"mine-head-box"},[n("v-uni-view",{staticClass:"mine-head-box-title"},[t._v(t._s(t.userInfo.nick_name||"未设置昵称"))]),n("v-uni-view",{staticClass:"mine-head-box-phone"},[t._v(t._s(t.userInfo.phone?t.userInfo.phone.substring(0,3)+"****"+t.userInfo.phone.substring(7,12):""))])],1)],1),n("v-uni-view",{staticClass:"mine-notice"},[n("v-uni-view",{staticClass:"mine-notice-name"},[t._v("资产地址：")]),n("v-uni-view",{staticClass:"mine-notice-title"},[t._v(t._s(t.userInfo.address))]),n("v-uni-image",{staticClass:"mine-notice-copy",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/copy-icon.png",mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.userInfo.address)}}})],1),2===t.userInfo.identity_type?n("v-uni-view",{staticClass:"mine-list"},[n("v-uni-view",{staticClass:"mine-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToInviteFriends.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"mine-list-item-image mine-list-item-bgimage"}),t._v("邀请好友"),n("v-uni-text",{staticClass:"cuIcon-right mine-head-icon",staticStyle:{color:"#fff"}})],1),n("v-uni-view",{staticClass:"mine-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToCollections.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"mine-list-item-image",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/mine.png",mode:""}}),t._v("我的唱片"),n("v-uni-text",{staticClass:"cuIcon-right mine-head-icon",staticStyle:{color:"#fff"}})],1),n("v-uni-view",{staticClass:"mine-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToOrder.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"mine-list-item-image",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/order.png",mode:""}}),t._v("我的订单"),n("v-uni-text",{staticClass:"cuIcon-right mine-head-icon",staticStyle:{color:"#fff"}})],1),n("v-uni-view",{staticClass:"mine-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToSubgiftRecord.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"mine-list-item-image",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/order.png",mode:""}}),t._v("转赠记录"),n("v-uni-text",{staticClass:"cuIcon-right mine-head-icon",staticStyle:{color:"#fff"}})],1),n("v-uni-view",{staticClass:"mine-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCustomer.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"mine-list-item-image",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/kefu.png",mode:""}}),t._v("联系客服"),n("v-uni-text",{staticClass:"cuIcon-right mine-head-icon",staticStyle:{color:"#fff"}})],1)],1):n("v-uni-view",{staticClass:"mine-list"},[n("v-uni-view",{staticClass:"mine-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToCollections.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"mine-list-item-image",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/mine.png",mode:""}}),t._v("我的唱片"),n("v-uni-text",{staticClass:"cuIcon-right mine-head-icon",staticStyle:{color:"#fff"}})],1),n("v-uni-view",{staticClass:"mine-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToOrder.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"mine-list-item-image",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/order.png",mode:""}}),t._v("我的订单"),n("v-uni-text",{staticClass:"cuIcon-right mine-head-icon",staticStyle:{color:"#fff"}})],1),n("v-uni-view",{staticClass:"mine-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToSubgiftRecord.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"mine-list-item-image",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/subgiftRecordIcon.png",mode:""}}),t._v("转赠记录"),n("v-uni-text",{staticClass:"cuIcon-right mine-head-icon",staticStyle:{color:"#fff"}})],1),n("v-uni-view",{staticClass:"mine-list-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCustomer.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"mine-list-item-image",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/kefu.png",mode:""}}),t._v("联系客服"),n("v-uni-text",{staticClass:"cuIcon-right mine-head-icon",staticStyle:{color:"#fff"}})],1)],1),n("v-uni-view",{staticClass:"logout",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToLogin.apply(void 0,arguments)}}},[t._v("退出登录")])],1)},r=[]},ab4d:function(t,e,n){"use strict";n.r(e);var i=n("5804"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},b590:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-0ec052aa]{padding:0}.mine[data-v-0ec052aa]{height:100vh;position:relative}.mine .logout[data-v-0ec052aa]{font-style:normal;font-weight:500;font-size:%?28?%;line-height:%?40?%;\n  /* identical to box height */text-align:center;color:#d10910;position:fixed;bottom:%?50?%;left:0;width:100%}.mine-head[data-v-0ec052aa]{display:flex;align-items:center;padding-top:%?40?%}.mine-head-image[data-v-0ec052aa]{width:%?110?%;height:%?110?%;border-radius:50%;margin-left:%?32?%}.mine-head-box[data-v-0ec052aa]{margin-left:%?24?%;display:flex;flex-direction:column;justify-content:space-between;height:%?90?%}.mine-head-box-title[data-v-0ec052aa]{font-family:PingFang SC;font-style:normal;font-weight:400;font-size:16px;line-height:22px;color:#ececec}.mine-head-box-phone[data-v-0ec052aa]{font-weight:400;font-size:12px;line-height:17px;color:#aeaeae}.mine-head-icon[data-v-0ec052aa]{margin-left:auto}.mine-notice[data-v-0ec052aa]{display:flex;align-items:center;background:#1d1d1d;border:%?1.3?% solid #2f2f2f;border-radius:%?10.6?%;margin-top:%?16?%;width:%?892?%;height:%?80?%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.75) translate(%?53?%);transform:scale(.75) translate(%?53?%)}.mine-notice-name[data-v-0ec052aa]{background:linear-gradient(90deg,#9c8746,#645735 93.2%);border-radius:%?6?%;font-size:%?24?%;width:%?160?%;height:%?65?%;margin:%?6?%;display:flex;align-items:center;justify-content:center}.mine-notice-title[data-v-0ec052aa]{flex:1;overflow:hidden;padding:%?10?%;font-weight:500;font-size:%?18?%;color:#aeaeae;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mine-notice-copy[data-v-0ec052aa]{color:#b19e63;width:%?32?%;height:%?32?%;margin-right:%?28?%;margin-left:%?20?%}.mine-list[data-v-0ec052aa]{padding:%?18?% %?20?% 0 %?20?%}.mine-list-item[data-v-0ec052aa]{display:flex;align-items:center;box-sizing:border-box;border-bottom:%?1?% solid #363636;padding:0 %?20?%;height:%?88.62?%;font-weight:500;font-size:%?24?%;line-height:17px;color:#9b8751}.mine-list-item-image[data-v-0ec052aa]{width:%?48?%;height:%?48?%;margin-right:%?20?%}.mine-list-item-bgimage[data-v-0ec052aa]{background:url(https://file.yuanyinfu.com/front-end-lib/yaoqing.png) %?4?% 0/%?48?% %?57.23?% no-repeat}',""]),t.exports=e},b636:function(t,e,n){var i=n("e065");i("asyncIterator")},baee:function(t,e,n){"use strict";var i=n("242f"),r=n.n(i);r.a},c7eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,n){return t[e]=n}}function f(t,e,n,i){var r=e&&e.prototype instanceof v?e:v,a=Object.create(r.prototype),c=new I(i||[]);return o(a,"_invoke",{value:C(t,n,c)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=f;var h={};function v(){}function m(){}function g(){}var p={};l(p,c,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(T([])));b&&b!==n&&r.call(b,c)&&(p=b);var w=g.prototype=v.prototype=Object.create(p);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;o(this,"_invoke",{value:function(o,a){function c(){return new e((function(n,c){(function n(o,a,c,s){var u=d(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==(0,i.default)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)})(o,a,n,c)}))}return n=n?n.then(c,c):c()}})}function C(t,e,n){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return O()}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var s=d(t,e,n);if("normal"===s.type){if(i=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i="completed",n.method="throw",n.arg=s.arg)}}}function E(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var r=d(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=g,o(w,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),l(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,i,r,o){void 0===o&&(o=Promise);var a=new _(f(e,n,i,r),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},t.values=T,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;L(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t},n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var i=function(t){return t&&t.__esModule?t:{default:t}}(n("53ca"))}}]);