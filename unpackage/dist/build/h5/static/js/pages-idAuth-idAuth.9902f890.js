(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-idAuth-idAuth"],{"03cf":function(t,e,n){var r=n("fa32");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("b3601676",r,!0,{sourceMap:!1,shadowMode:!1})},"0fc4":function(t,e,n){"use strict";var r=n("d46b"),i=n.n(r);i.a},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,a,o){try{var c=t[a](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function c(t){r(o,i,a,c,s,"next",t)}function s(t){r(o,i,a,c,s,"throw",t)}c(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},2829:function(t,e,n){"use strict";n.r(e);var r=n("7b9f"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},5498:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("nav-head",{attrs:{title:"身份认证"}}),n("v-uni-view",{staticClass:"header"},[n("v-uni-view",{staticClass:"header-text"},[t._v("个人身份未认证")]),n("v-uni-view",{staticClass:"header-text1"},[t._v("平台将全程保证您的信息安全")])],1),n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"form"},[n("v-uni-view",{staticClass:"form-item phone"},[n("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"11",placeholder:"真实姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("v-uni-view",{staticClass:"form-item captcha"},[n("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"18",type:"text",placeholder:"身份证号"},model:{value:t.form.identification_number,callback:function(e){t.$set(t.form,"identification_number",e)},expression:"form.identification_number"}})],1),n("v-uni-view",{staticClass:"sub"},[n("v-uni-view",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handValid()}}},[t._v("认证")])],1)],1)],1)],1)},a=[]},"7b9f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("df47"),i={name:"cu-head",props:{title:{default:""},left:{default:!0},right:{default:!0}},data:function(){return{isWeb:!1}},methods:{navBack:function(){if(this.$store.state.user.inApp)(0,r.goBack)();else{var t=getCurrentPages();1===t.length?this.$store.state.user.token?uni.redirectTo({url:"/pages/index/index"}):(0,r.goLogin)():uni.navigateBack({delta:1})}}},created:function(){}};e.default=i},"8d59":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.slots[data-v-3ba5bbd9]{height:%?148?%}.slots .nav[data-v-3ba5bbd9]{position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;padding-top:%?60?%;height:%?88?%;background-color:#0f0f10;z-index:10}.slots .nav .nav-left[data-v-3ba5bbd9]{position:absolute;top:%?80?%;left:%?28?%;width:%?48?%;height:%?48?%}.slots .nav .nav-center[data-v-3ba5bbd9]{width:100%;height:%?88?%;color:#ddd;font-size:%?30?%;font-family:PingFang SC;font-style:normal;font-weight:400;text-align:center;line-height:%?88?%}.slots .nav .nav-right[data-v-3ba5bbd9]{position:absolute;top:%?60?%;right:%?28?%;display:flex;align-items:center;justify-content:flex-end;width:%?88?%;height:%?88?%}.slots .nav .nav-right uni-image[data-v-3ba5bbd9]{background-color:red;width:%?48?%!important;height:%?48?%}.web[data-v-3ba5bbd9]{height:%?88?%}.web .nav[data-v-3ba5bbd9]{position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:%?88?%;background-color:#0d0d0d;z-index:10}.web .nav .nav-left[data-v-3ba5bbd9]{position:absolute;top:%?20?%;left:%?28?%;width:%?48?%;height:%?48?%}.web .nav .nav-center[data-v-3ba5bbd9]{width:100%;height:%?88?%;color:#ddd;font-size:%?30?%;font-family:PingFang SC;font-style:normal;font-weight:400;text-align:center;line-height:%?88?%}.web .nav .nav-right[data-v-3ba5bbd9]{position:absolute;top:%?0?%;right:%?28?%;display:flex;align-items:center;justify-content:flex-end;width:%?88?%;height:%?88?%}.web .nav .nav-right uni-image[data-v-3ba5bbd9]{background-color:red;width:%?48?%!important;height:%?48?%}',""]),t.exports=e},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=y;var l="suspendedStart",d="suspendedYield",h="executing",v="completed",p={},g={};g[o]=function(){return this};var m=Object.getPrototypeOf,b=m&&m(m($([])));b&&b!==r&&i.call(b,o)&&(g=b);var w=L.prototype=k.prototype=Object.create(g);_.prototype=w.constructor=L,L.constructor=_,L[s]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[c]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,n,r){var i=new j(y(t,e,n,r));return f.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),w[s]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=$,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}}}function y(t,e,n,r){var i=e&&e.prototype instanceof k?e:k,a=Object.create(i.prototype),o=new T(r||[]);return a._invoke=C(t,n,o),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function _(){}function L(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(n,r,a,o){var c=x(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,o)}))}o(c.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function C(t,e,n){var r=l;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw a;return N()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var c=z(o,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=x(t,e,n);if("normal"===s.type){if(r=n.done?v:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}function z(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,z(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function $(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},adff:function(t,e,n){"use strict";n.r(e);var r=n("c881"),i=n("2829");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("0fc4");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"3ba5bbd9",null,!1,r["a"],o);e["default"]=s.exports},bd76:function(t,e,n){"use strict";n.r(e);var r=n("ec4f"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},c881:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{class:t.$store.state.user.inApp?"slots":"web"},[r("v-uni-view",{staticClass:"nav"},[r("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.left,expression:"left"}],staticClass:"nav-left",attrs:{src:n("108f"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navBack()}}}),r("v-uni-text",{staticClass:"nav-center"},[t._v(t._s(t.title))]),r("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.right,expression:"right"}],staticClass:"nav-right"},[t._t("default")],2)],1)],1)},a=[]},c992:function(t,e,n){"use strict";n.r(e);var r=n("5498"),i=n("bd76");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("e036");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"97707640",null,!1,r["a"],o);e["default"]=s.exports},d46b:function(t,e,n){var r=n("8d59");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("2d475e2a",r,!0,{sourceMap:!1,shadowMode:!1})},e036:function(t,e,n){"use strict";var r=n("03cf"),i=n.n(r);i.a},ec4f:function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("5530"));n("96cf");var a=r(n("1da1")),o=n("173f"),c=r(n("adff")),s={data:function(){return{form:{name:"",identification_number:""}}},components:{NavHead:c.default},methods:{handleBack:function(){var t=getCurrentPages();console.log(t),1===t.length?uni.redirectTo({url:"/pages/index/index"}):uni.navigateBack({delta:1})},handValid:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(/^[\u4e00-\u9fa5]{1,11}$/.test(t.form.name)){e.next=2;break}return e.abrupt("return",uni.showToast({title:"真实姓名只能是汉字",icon:"error"}));case 2:if(/^[1-9]{1}[0-9Xx]{14,17}$/.test(t.form.identification_number)){e.next=4;break}return e.abrupt("return",uni.showToast({title:"身份证号不符合规则",icon:"error"}));case 4:return e.prev=4,e.next=7,t.$post(o.h5_collections_user_verified,(0,i.default)({},t.form));case 7:if(n=e.sent,0===n.code){e.next=10;break}return e.abrupt("return",uni.showToast({title:n.msg,icon:"error"}));case 10:uni.navigateBack({delta:1}),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](4),uni.showToast({title:e.t0.message,icon:"error"});case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))()}}};e.default=s},fa32:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-97707640]{padding:0 %?40?%}.container .header[data-v-97707640]{box-sizing:border-box;width:100%;height:%?390?%;background-color:hsla(0,0%,100%,.15);border-radius:%?16?%;text-align:center}.container .header .header-text[data-v-97707640]{padding-top:%?230?%;font-size:%?32?%;font-weight:700}.container .header .header-text1[data-v-97707640]{padding-top:%?20?%;font-size:%?26?%;color:#868686}.container .main[data-v-97707640]{display:flex;justify-content:center;width:100%;padding-top:%?0?%}.container .main .form[data-v-97707640]{width:%?600?%;padding-top:%?50?%}.container .main .form .form-item[data-v-97707640]{display:flex;align-items:center;justify-content:center;width:100%}.container .main .form .form-item .uni-input[data-v-97707640]{box-sizing:border-box;width:%?650?%;height:%?90?%;padding:0 %?10?%;border:none;outline:none;background:transparent;border-bottom:%?0.5?% solid #363636;font-weight:400;font-size:%?28?%;color:#ececec;font-size:%?28?%}.container .main .form .form-item .uni-input[data-v-97707640]::-webkit-input-placeholder{color:#363636}.container .main .form .form-item .uni-input[data-v-97707640]::placeholder{color:#363636}.container .main .form .form-item .uni-input[data-v-97707640]:hover{border-bottom:%?0.5?% solid #ececec}.container .main .form .captcha[data-v-97707640]{position:relative}.container .main .form .captcha .getcaptcha[data-v-97707640]{position:absolute;top:50%;right:%?10?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#d10910;font-size:%?28?%}.container .main .form .captcha .getcaptcha[data-v-97707640]:active{color:rgba(209,9,16,.6)}.container .main .form .agree[data-v-97707640]{display:flex;color:#fff;font-size:%?28?%;padding-top:%?26?%;padding-bottom:%?136?%}.container .main .form .agree .checkbox[data-v-97707640]{margin-right:%?24?%;margin-left:%?10?%}.container .main .form .agree .checkbox[data-v-97707640] .uni-checkbox-input{width:%?24?%;height:%?24?%;border:.5px solid #868686;border-radius:%?6?%;background-color:initial}.container .main .form .agree .checkbox[data-v-97707640] .uni-checkbox-input::before{font-size:%?24?%}.container .main .form .agree .agree-label[data-v-97707640]{font-size:%?22?%;line-height:%?36?%;color:#666}.container .main .form .agree .agree-label uni-text[data-v-97707640]{color:#ac9147}.container .tips[data-v-97707640]{width:100%;padding-top:%?50?%;font-size:%?26?%;color:#8c6464}.container .sub[data-v-97707640]{width:100%;display:flex;align-items:center;justify-content:center;padding-top:%?50?%}.container .sub .submit[data-v-97707640]{display:flex;align-items:center;justify-content:center;width:%?474?%;height:%?96?%;background:#d10910;border-radius:%?48?%;font-weight:500;font-size:%?32?%;color:#ececec}.container .sub .submit[data-v-97707640]:active{background-color:rgba(209,9,16,.6);color:#868686}',""]),t.exports=e}}]);