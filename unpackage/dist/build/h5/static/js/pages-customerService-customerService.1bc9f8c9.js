(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-customerService-customerService"],{"0fe8":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container .nav[data-v-feb71240]{position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:%?88?%;background-color:#0d0d0d}.container .nav .nav-left[data-v-feb71240]{position:absolute;top:%?28?%;left:%?28?%;width:%?48?%;height:%?48?%}.container .item-content .row1[data-v-feb71240]{font-weight:600;font-size:%?30?%;line-height:%?28?%;\n  /* identical to box height, or 93% */text-align:center;color:#ececec}.container .item-content .row2[data-v-feb71240]{display:flex;justify-content:center;padding-top:%?24?%;padding-bottom:%?24?%}.container .item-content .row2 .code2[data-v-feb71240]{width:%?270?%;height:%?270?%}.container .item-content .row3[data-v-feb71240]{padding-bottom:%?34?%;font-size:%?24?%;text-align:center;color:#ececec}.container .item-content .row4[data-v-feb71240]{text-align:center}.container .item-content .row4 .save[data-v-feb71240]{margin:auto;width:%?400?%;height:%?96?%;display:flex;align-items:center;justify-content:center;background:#d10910;border-radius:48px;line-height:0;font-size:%?32?%}.container .item-content .row4 .save[data-v-feb71240]:active{background-color:rgba(209,9,16,.6);color:#868686}.container .item1[data-v-feb71240]{padding-top:%?66?%}.container .item2[data-v-feb71240]{padding-top:%?82?%}',""]),t.exports=e},1072:function(t,e,r){"use strict";var n=r("35e8"),o=r.n(n);o.a},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"35e8":function(t,e,r){var n=r("0fe8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("a0392f54",n,!0,{sourceMap:!1,shadowMode:!1})},"3c91":function(t,e,r){"use strict";r.r(e);var n=r("4e94"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"40fc":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"container"},[r("cu-head"),2===t.identity_type?r("v-uni-view",{staticClass:"item-content item1"},[r("v-uni-view",{staticClass:"row1"},[t._v("大客户咨询二维码")]),r("v-uni-view",{staticClass:"row2"},[r("v-uni-image",{staticClass:"code2",attrs:{src:t.customer_service_vip,mode:""}})],1),r("v-uni-view",{staticClass:"row3"},[t._v("长按识别二维码")]),r("v-uni-view",{staticClass:"row4"},[r("v-uni-view",{staticClass:"save",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handSave(t.customer_service_vip,"大客户咨询二维码")}}},[t._v("保存到相册")])],1)],1):t._e(),r("v-uni-view",{staticClass:"item-content item2"},[r("v-uni-view",{staticClass:"row1"},[t._v("客服二维码")]),r("v-uni-view",{staticClass:"row2"},[r("v-uni-image",{staticClass:"code2",attrs:{src:t.customer_service,mode:""}})],1),r("v-uni-view",{staticClass:"row3"},[t._v("长按识别二维码")]),r("v-uni-view",{staticClass:"row4"},[r("v-uni-view",{staticClass:"save",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handSave(t.customer_service,t.客服二维码)}}},[t._v("保存到相册")])],1)],1)],1)},i=[]},"4e94":function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("1da1")),i=r("df47"),a=r("173f"),c=n(r("aed0")),s={data:function(){return{customer_service:"",identity_type:1,customer_service_vip:""}},components:{CuHead:c.default},methods:{handleBack:function(){var t=getCurrentPages();console.log(t),1===t.length?uni.redirectTo({url:"/pages/index/index"}):uni.navigateBack({delta:1})},handSave:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"客服二维码";uni.downloadFile({url:t,success:function(t){var r=t.tempFilePath;if((0,i.isApp)())(0,i.saveBase64Image)(r);else{var n=document.createElement("a");n.download=e,n.href=r,n.click()}},fail:function(t){uni.showToast({title:t.message,icon:"error"})}})},getInfo:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$get(a.h5_user_info);case 3:if(r=e.sent,0===r.code){e.next=6;break}return e.abrupt("return",uni.showToast({title:r.msg,icon:"error"}));case 6:t.$store.commit("user/set_userInfo",r.data),t.customer_service=r.data.customer_service,t.identity_type=r.data.identity_type||1,t.customer_service_vip=r.data.customer_service_vip||"",e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),uni.showToast({title:e.t0.message,icon:"error"});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}},created:function(){this.getInfo()}};e.default=s},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=b;var l="suspendedStart",h="suspendedYield",v="executing",d="completed",p={},g={};g[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(F([])));y&&y!==n&&o.call(y,a)&&(g=y);var w=E.prototype=x.prototype=Object.create(g);L.prototype=w.constructor=E,E.constructor=L,E[s]=L.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},k(j.prototype),j.prototype[c]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,r,n){var o=new j(b(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=F,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),p}}}function b(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=C(t,r,a),i}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function x(){}function L(){}function E(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(r,n,i,a){var c=_(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function C(t,e,r){var n=l;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return G()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var s=_(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=_(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function F(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:G}}function G(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},ff5f:function(t,e,r){"use strict";r.r(e);var n=r("40fc"),o=r("3c91");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("1072");var a,c=r("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"feb71240",null,!1,n["a"],a);e["default"]=s.exports}}]);