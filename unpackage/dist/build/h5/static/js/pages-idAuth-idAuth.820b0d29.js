(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-idAuth-idAuth"],{"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"210f":function(t,e,r){var n=r("c1d4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("599b4c78",n,!0,{sourceMap:!1,shadowMode:!1})},"24de":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"container"},[r("v-uni-view",{staticClass:"header"},[r("v-uni-view",{staticClass:"header-text"},[t._v("个人身份未认证")]),r("v-uni-view",{staticClass:"header-text1"},[t._v("平台将全程保证您的信息安全")])],1),r("v-uni-view",{staticClass:"main"},[r("v-uni-view",{staticClass:"form"},[r("v-uni-view",{staticClass:"form-item phone"},[r("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"11",placeholder:"真实姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("v-uni-view",{staticClass:"form-item captcha"},[r("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"18",type:"text",placeholder:"身份证号"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),r("v-uni-view",{staticClass:"tips"},[t._v("提示：实名认证会关联到后续的账户提现，请录入您真实的身份信息")]),r("v-uni-view",{staticClass:"sub"},[r("v-uni-view",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handValid()}}},[t._v("认证")])],1)],1)],1)],1)},i=[]},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{f=e.regeneratorRuntime=s?t.exports:{},f.wrap=w;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},m={};m[a]=function(){return this};var g=Object.getPrototypeOf,b=g&&g(g(G([])));b&&b!==n&&o.call(b,a)&&(m=b);var y=_.prototype=k.prototype=Object.create(m);L.prototype=y.constructor=_,_.constructor=L,_[u]=L.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(y),t},f.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[c]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,r,n){var o=new j(w(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(y),y[u]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=G,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var o=e&&e.prototype instanceof k?e:k,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=O(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function L(){}function _(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function O(t,e,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=C(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function C(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function G(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},bd76:function(t,e,r){"use strict";r.r(e);var n=r("ec4f"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},c1d4:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-3472b60e]{padding:0 %?40?%}.container .header[data-v-3472b60e]{box-sizing:border-box;width:100%;height:%?390?%;background-color:hsla(0,0%,100%,.15);border-radius:%?16?%;text-align:center}.container .header .header-text[data-v-3472b60e]{padding-top:%?230?%;font-size:%?32?%;font-weight:700}.container .header .header-text1[data-v-3472b60e]{padding-top:%?20?%;font-size:%?26?%;color:#868686}.container .main[data-v-3472b60e]{display:flex;justify-content:center;width:100%;padding-top:%?0?%}.container .main .form[data-v-3472b60e]{width:%?600?%;padding-top:%?50?%}.container .main .form .form-item[data-v-3472b60e]{display:flex;align-items:center;justify-content:center;width:100%}.container .main .form .form-item .uni-input[data-v-3472b60e]{box-sizing:border-box;width:%?650?%;height:%?90?%;padding:0 %?10?%;border:none;outline:none;background:transparent;border-bottom:%?0.5?% solid #363636;font-weight:400;font-size:%?28?%;color:#ececec;font-size:%?28?%}.container .main .form .form-item .uni-input[data-v-3472b60e]::-webkit-input-placeholder{color:#363636}.container .main .form .form-item .uni-input[data-v-3472b60e]::placeholder{color:#363636}.container .main .form .form-item .uni-input[data-v-3472b60e]:hover{border-bottom:%?0.5?% solid #ececec}.container .main .form .captcha[data-v-3472b60e]{position:relative}.container .main .form .captcha .getcaptcha[data-v-3472b60e]{position:absolute;top:50%;right:%?10?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#d10910;font-size:%?28?%}.container .main .form .captcha .getcaptcha[data-v-3472b60e]:active{color:rgba(209,9,16,.6)}.container .main .form .agree[data-v-3472b60e]{display:flex;color:#fff;font-size:%?28?%;padding-top:%?26?%;padding-bottom:%?136?%}.container .main .form .agree .checkbox[data-v-3472b60e]{margin-right:%?24?%;margin-left:%?10?%}.container .main .form .agree .checkbox[data-v-3472b60e] .uni-checkbox-input{width:%?24?%;height:%?24?%;border:.5px solid #868686;border-radius:%?6?%;background-color:initial}.container .main .form .agree .checkbox[data-v-3472b60e] .uni-checkbox-input::before{font-size:%?24?%}.container .main .form .agree .agree-label[data-v-3472b60e]{font-size:%?22?%;line-height:%?36?%;color:#666}.container .main .form .agree .agree-label uni-text[data-v-3472b60e]{color:#ac9147}.container .tips[data-v-3472b60e]{width:100%;padding-top:%?50?%;font-size:%?26?%;color:#8c6464}.container .sub[data-v-3472b60e]{width:100%;display:flex;align-items:center;justify-content:center;padding-top:%?50?%}.container .sub .submit[data-v-3472b60e]{display:flex;align-items:center;justify-content:center;width:%?474?%;height:%?96?%;background:#d10910;border-radius:%?48?%;font-weight:500;font-size:%?32?%;color:#ececec}.container .sub .submit[data-v-3472b60e]:active{background-color:rgba(209,9,16,.6);color:#868686}',""]),t.exports=e},c992:function(t,e,r){"use strict";r.r(e);var n=r("24de"),o=r("bd76");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("e857");var a,c=r("f0c5"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"3472b60e",null,!1,n["a"],a);e["default"]=u.exports},e857:function(t,e,r){"use strict";var n=r("210f"),o=r.n(n);o.a},ec4f:function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("1da1")),i={data:function(){return{form:{name:"",id:""}}},methods:{handValid:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(/^[\u4e00-\u9fa5]{1,11}$/.test(t.form.name)){e.next=3;break}return console.log(t.form.phone),e.abrupt("return",uni.showToast({title:"真实姓名只能是汉字",icon:"error"}));case 3:if(/^[1-9]{1}[0-9Xx]{14,17}$/.test(t.form.id)){e.next=5;break}return e.abrupt("return",uni.showToast({title:"身份证号不符合规则",icon:"error"}));case 5:try{uni.navigateBack({delta:1})}catch(r){uni.showToast({title:r.message,icon:"error"})}case 6:case"end":return e.stop()}}),e)})))()}}};e.default=i}}]);