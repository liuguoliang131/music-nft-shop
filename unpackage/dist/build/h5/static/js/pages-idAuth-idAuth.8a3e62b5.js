(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-idAuth-idAuth"],{"1da1":function(t,e,n){"use strict";function r(t,e,n,r,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,a)}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,u,"next",t)}function u(t){r(i,a,o,c,u,"throw",t)}c(void 0)}))}},n("d3b7")},"209a":function(t,e,n){"use strict";var r=n("89f6"),a=n.n(r);a.a},"89f6":function(t,e,n){var r=n("f4e4");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("05de2be2",r,!0,{sourceMap:!1,shadowMode:!1})},a89f:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("nav-head",{attrs:{title:"身份认证"}}),n("v-uni-view",{staticClass:"header"},[n("v-uni-view",{staticClass:"header-text"},[t._v("个人身份未认证")]),n("v-uni-view",{staticClass:"header-text1"},[t._v("平台将全程保证您的信息安全")])],1),n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"form"},[n("v-uni-view",{staticClass:"form-item phone"},[n("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"11",placeholder:"真实姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("v-uni-view",{staticClass:"form-item captcha"},[n("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"18",type:"text",placeholder:"身份证号"},model:{value:t.form.identification_number,callback:function(e){t.$set(t.form,"identification_number",e)},expression:"form.identification_number"}})],1),n("v-uni-view",{staticClass:"sub"},[n("v-uni-view",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handValid()}}},[t._v("认证")])],1)],1)],1)],1)},a=[]},b636:function(t,e,n){var r=n("e065");r("asyncIterator")},bd76:function(t,e,n){"use strict";n.r(e);var r=n("ec4f"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},c7eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(z){f=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new O(r||[]);return o(i,"_invoke",{value:k(t,n,c)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(z){return{type:"throw",arg:z}}}t.wrap=l;var h={};function v(){}function p(){}function m(){}var g={};f(g,c,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(C([])));y&&y!==n&&a.call(y,c)&&(g=y);var w=m.prototype=v.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;o(this,"_invoke",{value:function(o,i){function c(){return new e((function(n,c){(function n(o,i,c,u){var s=d(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==(0,r.default)(l)&&a.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)})(o,i,n,c)}))}return n=n?n.then(c,c):c()}})}function k(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return P()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=d(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=d(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function C(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=m,o(w,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:p,configurable:!0}),p.displayName=f(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),f(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new _(l(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),f(w,s,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=C,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t},n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=function(t){return t&&t.__esModule?t:{default:t}}(n("53ca"))},c992:function(t,e,n){"use strict";n.r(e);var r=n("a89f"),a=n("bd76");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("209a");var i=n("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"0a4e8662",null,!1,r["a"],void 0);e["default"]=c.exports},ec4f:function(t,e,n){"use strict";(function(t){n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4");var a=r(n("c7eb")),o=r(n("5530")),i=r(n("1da1")),c=n("173f"),u=r(n("adff")),s={data:function(){return{form:{name:"",identification_number:""}}},components:{NavHead:u.default},methods:{handleBack:function(){var e=getCurrentPages();t("log",e," at pages/idAuth/idAuth.vue:53"),1===e.length?uni.redirectTo({url:"/pages/index/index"}):uni.navigateBack({delta:1})},handValid:function(){var t=this;return(0,i.default)((0,a.default)().mark((function e(){var n;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(/^[\u4e00-\u9fa5]{1,11}$/.test(t.form.name)){e.next=2;break}return e.abrupt("return",uni.showToast({title:"真实姓名只能是汉字",icon:"none"}));case 2:if(/^[1-9]{1}[0-9Xx]{14,17}$/.test(t.form.identification_number)){e.next=4;break}return e.abrupt("return",uni.showToast({title:"身份证号不符合规则",icon:"none"}));case 4:return e.prev=4,e.next=7,t.$post(c.h5_collections_user_verified,(0,o.default)({},t.form));case 7:if(n=e.sent,0===n.code){e.next=10;break}return e.abrupt("return",uni.showToast({title:n.msg,icon:"none"}));case 10:uni.navigateBack({delta:1}),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](4),uni.showToast({title:e.t0.message,icon:"none"});case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))()}}};e.default=s}).call(this,n("0de9")["log"])},f4e4:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-0a4e8662]{padding:0 %?40?%}.container .header[data-v-0a4e8662]{box-sizing:border-box;width:100%;height:%?390?%;background-color:hsla(0,0%,100%,.15);border-radius:%?16?%;text-align:center}.container .header .header-text[data-v-0a4e8662]{padding-top:%?230?%;font-size:%?32?%;font-weight:700}.container .header .header-text1[data-v-0a4e8662]{padding-top:%?20?%;font-size:%?26?%;color:#868686}.container .main[data-v-0a4e8662]{display:flex;justify-content:center;width:100%;padding-top:%?0?%}.container .main .form[data-v-0a4e8662]{width:%?600?%;padding-top:%?50?%}.container .main .form .form-item[data-v-0a4e8662]{display:flex;align-items:center;justify-content:center;width:100%}.container .main .form .form-item .uni-input[data-v-0a4e8662]{box-sizing:border-box;width:%?650?%;height:%?90?%;padding:0 %?10?%;border:none;outline:none;background:transparent;border-bottom:%?0.5?% solid #363636;font-weight:400;font-size:%?28?%;color:#ececec;font-size:%?28?%}.container .main .form .form-item .uni-input[data-v-0a4e8662]::-webkit-input-placeholder{color:#363636}.container .main .form .form-item .uni-input[data-v-0a4e8662]::placeholder{color:#363636}.container .main .form .form-item .uni-input[data-v-0a4e8662]:hover{border-bottom:%?0.5?% solid #ececec}.container .main .form .captcha[data-v-0a4e8662]{position:relative}.container .main .form .captcha .getcaptcha[data-v-0a4e8662]{position:absolute;top:50%;right:%?10?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#d10910;font-size:%?28?%}.container .main .form .captcha .getcaptcha[data-v-0a4e8662]:active{color:rgba(209,9,16,.6)}.container .main .form .agree[data-v-0a4e8662]{display:flex;color:#fff;font-size:%?28?%;padding-top:%?26?%;padding-bottom:%?136?%}.container .main .form .agree .checkbox[data-v-0a4e8662]{margin-right:%?24?%;margin-left:%?10?%}.container .main .form .agree .checkbox[data-v-0a4e8662] .uni-checkbox-input{width:%?24?%;height:%?24?%;border:.5px solid #868686;border-radius:%?6?%;background-color:initial}.container .main .form .agree .checkbox[data-v-0a4e8662] .uni-checkbox-input::before{font-size:%?24?%}.container .main .form .agree .agree-label[data-v-0a4e8662]{font-size:%?22?%;line-height:%?36?%;color:#666}.container .main .form .agree .agree-label uni-text[data-v-0a4e8662]{color:#ac9147}.container .tips[data-v-0a4e8662]{width:100%;padding-top:%?50?%;font-size:%?26?%;color:#8c6464}.container .sub[data-v-0a4e8662]{width:100%;display:flex;align-items:center;justify-content:center;padding-top:%?50?%}.container .sub .submit[data-v-0a4e8662]{display:flex;align-items:center;justify-content:center;width:%?474?%;height:%?96?%;background:#d10910;border-radius:%?48?%;font-weight:500;font-size:%?32?%;color:#ececec}.container .sub .submit[data-v-0a4e8662]:active{background-color:rgba(209,9,16,.6);color:#868686}',""]),t.exports=e}}]);