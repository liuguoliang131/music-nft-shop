(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-settlement-settlement"],{"173f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.h5_collections_index_info=e.h5_order_detail=e.h5_order_list=e.h5_collections_index_list=e.h5_collections_user_collectionInfo=e.h5_collections_user_collectionList=e.h5_collections_index_sharePoster=e.h5_user_info=e.h5_base_captcha=e.h5_base_login=e.h5_conllections_buy_showsuccess=e.h5_conllections_buy_pay=e.h5_conllections_buy_pay_type_list=e.h5_conllections_buy_result=e.h5_conllections_buy_submit=e.h5_conllections_buy_checkout=void 0;var r="/h5/collections_buy/checkout";e.h5_conllections_buy_checkout=r;var o="/h5/collections_buy/submit";e.h5_conllections_buy_submit=o;var i="/h5/collections_buy/result";e.h5_conllections_buy_result=i;var a="/h5/collections_buy/pay_type_list";e.h5_conllections_buy_pay_type_list=a;var c="/h5/collections_buy/pay";e.h5_conllections_buy_pay=c;var s="/h5/collections_buy/showsuccess";e.h5_conllections_buy_showsuccess=s;var l="/h5/base/login";e.h5_base_login=l;var u="/h5/base/captcha";e.h5_base_captcha=u;var d="/h5/user/info";e.h5_user_info=d;var h="/h5/collections_index/sharePoster";e.h5_collections_index_sharePoster=h;var f="/h5/collections_user/collectionList";e.h5_collections_user_collectionList=f;var v="/h5/collections_user/collectionInfo";e.h5_collections_user_collectionInfo=v;var _="/h5/collections_index/list";e.h5_collections_index_list=_;var b="h5/collections_user/orderList";e.h5_order_list=b;var p="/h5/collections_user/orderInfo";e.h5_order_detail=p;var x="/h5/collections_index/info";e.h5_collections_index_info=x},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},4593:function(t,e,n){var r=n("ea6a");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("0ec66776",r,!0,{sourceMap:!1,shadowMode:!1})},"7a9c":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"title pt23"},[n("v-uni-view",{staticClass:"title-l"}),n("v-uni-view",{staticClass:"title-r"},[t._v("专辑信息")])],1),n("v-uni-view",{staticClass:"box1"},[n("v-uni-view",{staticClass:"box1-l"},[n("v-uni-image",{staticClass:"box1-l-cover",attrs:{src:t.data.index_url}}),n("v-uni-view",{staticClass:"box1-l-border"})],1),n("v-uni-view",{staticClass:"box1-r"},[n("v-uni-view",{staticClass:"box1-r-0"},[t._v(t._s(t.data.product_name))]),n("v-uni-view",{staticClass:"box1-r-1"},[t._v("包含"+t._s(t.data.singles_num)+"首作品")]),n("v-uni-view",{staticClass:"box1-r-2"},[n("v-uni-text",{staticClass:"r-1-l"},[t._v("发行方")]),n("v-uni-text",{staticClass:"r-1-r"},[t._v(t._s(t.data.publish_author_name))])],1),n("v-uni-view",{staticClass:"box1-r-2"},[n("v-uni-text",{staticClass:"r-1-l"},[t._v("发行时间")]),n("v-uni-text",{staticClass:"r-1-r"},[t._v(t._s(t.data.publish_time))])],1),n("v-uni-view",{staticClass:"box1-r-2"},[n("v-uni-text",{staticClass:"r-1-l"},[t._v("发行价格")]),n("v-uni-text",{staticClass:"r-1-r"},[t._v("￥"+t._s(t.data.pay_price)+"/张")])],1)],1)],1),n("v-uni-view",{staticClass:"title pt37"},[n("v-uni-view",{staticClass:"title-l"}),n("v-uni-view",{staticClass:"title-r"},[t._v("认证信息")])],1),n("v-uni-view",{staticClass:"box2"},[n("v-uni-view",{staticClass:"box2-row"},[n("v-uni-view",{staticClass:"box2-row-l"},[t._v("Contract Address")]),n("v-uni-view",{staticClass:"box2-row-r"},[t._v(t._s(t.data.contract_address))])],1),n("v-uni-view",{staticClass:"box2-row"},[n("v-uni-view",{staticClass:"box2-row-l"},[t._v("Token ID")]),n("v-uni-view",{staticClass:"box2-row-r"},[t._v(t._s(t.data.token_id))])],1),n("v-uni-view",{staticClass:"box2-row"},[n("v-uni-view",{staticClass:"box2-row-l"},[t._v("Token Standard")]),n("v-uni-view",{staticClass:"box2-row-r"},[t._v(t._s(t.data.token_standard))])],1)],1),n("v-uni-view",{staticClass:"box3"},[n("v-uni-view",{staticClass:"box3-row"},[n("v-uni-text",{staticClass:"row-1"},[t._v("实付")]),n("v-uni-text",{staticClass:"row-2"},[t._v("￥")]),n("v-uni-text",{staticClass:"row-3"},[t._v(t._s(t.data.total))]),n("v-uni-text",{staticClass:"row-4"},[t._v("合计"+t._s(t.data.buy_num)+"张")])],1)],1),n("v-uni-view",{staticClass:"fixed-bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handOrder()}}},[t._v("去支付")])],1)},i=[]},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=g;var d="suspendedStart",h="suspendedYield",f="executing",v="completed",_={},b={};b[a]=function(){return this};var p=Object.getPrototypeOf,x=p&&p(p(I([])));x&&x!==r&&o.call(x,a)&&(b=x);var w=L.prototype=m.prototype=Object.create(b);C.prototype=w.constructor=L,L.constructor=C,L[s]=C.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[c]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,n,r){var o=new E(g(t,e,n,r));return u.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=I,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,_):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),_}}}function g(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new z(r||[]);return i._invoke=O(t,n,a),i}function y(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function m(){}function C(){}function L(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(n,r,i,a){var c=y(t[n],t,r);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function O(t,e,n){var r=d;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return N()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===_)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=y(t,e,n);if("normal"===s.type){if(r=n.done?v:h,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return _;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var o=y(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,_;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,_):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},abbf:function(t,e,n){"use strict";n.r(e);var r=n("d677"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},bc04:function(t,e,n){"use strict";n.r(e);var r=n("7a9c"),o=n("abbf");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("de56");var a,c=n("f0c5"),s=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"9d7beece",null,!1,r["a"],a);e["default"]=s.exports},d677:function(t,e,n){"use strict";var r=n("4ea4");n("99af"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=r(n("1da1")),i=n("df47"),a=n("173f"),c={data:function(){return{product_item_id:"",buy_num:"",data:{}}},methods:{getInfo:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$post(a.h5_conllections_buy_checkout,{product_item_id:t.product_item_id,buy_num:t.buy_num});case 3:if(n=e.sent,0===n.code){e.next=6;break}return e.abrupt("return",uni.showToast({title:n.msg,icon:"error"}));case 6:r=(0,i.getTimeData)(n.data.info.publish_time),n.data.info.publish_time="".concat(r.y,"-").concat(r.mon,"-").concat(r.dd),n.data.info.total=(n.data.info.buy_num*n.data.info.pay_price).toFixed(2),t.data=n.data.info,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),uni.showToast({title:e.t0.message,icon:"error"});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},handOrder:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$post(h5_collections_buy_submit,{product_item_id:t.product_item_id,buy_num:t.buy_num});case 3:if(n=e.sent,0===n.code){e.next=6;break}return e.abrupt("return",uni.showToast({title:n.msg,icon:"error"}));case 6:uni.showLoading({title:"加载中",mask:!0}),setTimeout((function(){uni.hideLoading(),t.getOrderResult(n.data.order_no)}),2200),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),uni.showToast({title:e.t0.message,icon:"error"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},getOrderResult:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$post(a.h5_collections_buy_result,{order_no:t});case 3:if(r=n.sent,0===r.code){n.next=6;break}return n.abrupt("return",uni.showToast({title:r.msg,icon:"error"}));case 6:uni.navigateTo({url:"/pages/cashier/cashier?product_item_id=".concat(e.product_item_id,"&order_no=").concat(r.data.order_no,"&order_price=").concat(r.data.order_price,"&count_down=").concat(r.data.count_down)}),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),uni.showToast({title:n.t0.message,icon:"error"});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()}},onLoad:function(t){this.product_item_id=Number(t.product_item_id),this.buy_num=Number(t.buy_num),this.getInfo()}};e.default=c},de56:function(t,e,n){"use strict";var r=n("4593"),o=n.n(r);o.a},ea6a:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-9d7beece]{padding:0}.container .title[data-v-9d7beece]{padding:0 %?40?% 0 %?40?%;display:flex;align-items:center;font-size:%?24?%;line-height:%?34?%;color:#ac9147}.container .title .title-l[data-v-9d7beece]{width:%?6?%;height:%?24?%;margin-right:%?20?%;border-radius:%?2?%;background-color:#ac9147}.container .pt23[data-v-9d7beece]{padding-top:%?23?%}.container .pt37[data-v-9d7beece]{padding-top:%?37?%}.container .box1[data-v-9d7beece]{display:flex;padding:%?21?% %?40?% 0 %?40?%}.container .box1 .box1-l[data-v-9d7beece]{position:relative;width:%?240?%}.container .box1 .box1-l .box1-l-cover[data-v-9d7beece]{box-sizing:border-box;width:%?240?%;height:%?240?%;border-radius:10px}.container .box1 .box1-l .box1-l-border[data-v-9d7beece]{box-sizing:border-box;position:absolute;top:%?10?%;left:%?10?%;width:%?220?%;height:%?220?%;border:%?1?% solid hsla(0,0%,100%,.2);border-radius:20px}.container .box1 .box1-r[data-v-9d7beece]{flex:1;margin-left:%?41?%}.container .box1 .box1-r .box1-r-0[data-v-9d7beece]{display:flex;align-items:center;font-weight:500;font-size:%?28?%;\n  /* identical to box height */color:#ececec}.container .box1 .box1-r .box1-r-1[data-v-9d7beece]{padding-top:%?16?%;font-weight:400;font-size:%?26?%;line-height:%?48?%;\n  /* identical to box height, or 185% */color:#aeaeae}.container .box1 .box1-r .box1-r-2[data-v-9d7beece]{display:flex;font-size:%?26?%;line-height:%?48?%;\n  /* identical to box height, or 185% */color:#aeaeae}.container .box1 .box1-r .box1-r-2 .r-1-l[data-v-9d7beece]{width:%?128?%}.container .box2[data-v-9d7beece]{padding:%?15?% %?40?% %?32?% %?40?%}.container .box2 .box2-row[data-v-9d7beece]{display:flex;height:%?48?%}.container .box2 .box2-row .box2-row-l[data-v-9d7beece]{width:%?240?%;height:%?48?%;line-height:%?48?%;text-align:right;color:#666;font-size:%?26?%}.container .box2 .box2-row .box2-row-r[data-v-9d7beece]{flex:1;margin-left:%?24?%;height:%?48?%;line-height:%?48?%;color:#aeaeae;font-size:%?26?%;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .box3[data-v-9d7beece]{padding-top:%?32?%;border-top:%?1?% solid #363636}.container .box3 .box3-row[data-v-9d7beece]{display:flex;justify-content:flex-end;color:#d10910;height:%?50?%;padding:0 %?32?% 0 %?32?%}.container .box3 .box3-row .row-1[data-v-9d7beece]{font-size:%?26?%;padding-right:%?8?%;line-height:%?50?%}.container .box3 .box3-row .row-2[data-v-9d7beece]{font-size:%?28?%;line-height:%?55?%}.container .box3 .box3-row .row-3[data-v-9d7beece]{font-size:%?36?%;padding-right:%?16?%;line-height:%?50?%}.container .box3 .box3-row .row-4[data-v-9d7beece]{font-size:%?26?%;line-height:%?50?%}.container .fixed-bottom[data-v-9d7beece]{position:fixed;bottom:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:%?98?%;background:#d10910;color:#ececec;font-size:%?32?%;font-weight:500}.container .fixed-bottom[data-v-9d7beece]:active{background-color:rgba(209,9,16,.6);color:#868686}',""]),t.exports=e}}]);