(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cashier-cashier~pages-goldSinglesDetail-goldSinglesDetail~pages-login-login~pages-preOrderDeta~649e51c1"],{1754:function(t,e,o){"use strict";o.r(e);var n=o("ff3f"),r=o("f69f");for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);o("569e");var a,s=o("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"fe19e6e4",null,!1,n["a"],a);e["default"]=c.exports},"1da1":function(t,e,o){"use strict";function n(t,e,o,n,r,i,a){try{var s=t[i](a),c=s.value}catch(u){return void o(u)}s.done?e(c):Promise.resolve(c).then(n,r)}function r(t){return function(){var e=this,o=arguments;return new Promise((function(r,i){var a=t.apply(e,o);function s(t){n(a,r,i,s,c,"next",t)}function c(t){n(a,r,i,s,c,"throw",t)}s(void 0)}))}}o("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"2b51":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'@font-face{font-family:iconfont;src:url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKUAAsAAAAABlAAAAJJAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApcdgE2AiQDCAsGAAQgBYRtBy8bmwXIrjBu4UkbIjvjLimCmu1EP9KHAd4jgmi/3+zde18toRbpnkUTzRKRUkgQE6RA9xL+tMuG6RYp8bFsgmbcecAB9mDhH67tDS3pQsIsmSbPL7chM1RKsFr5mNDBoUDPJItlaZG8fvhi/tciWcbRfJ7L6U2gA1l9oBz3orEmTRpAvTigAPfCKLISSiNtGLvAJdwn0DCHgMfN/kgLK1jLAvE0p7YWzoUVCparCZWavYV4U6qllxTNa/j5+JeKMEmZWQ1njw1PK39hF+TnFG59QoSADpfI2AEUxFVt+oQpGIc10pYlYF+1wRfTfZfYq12wv86qboEZqLgnpau61VyC21L06V8d9cuJmT795hWPJp8ayHj0wrZNx+/+1Nzdf8MBtu9H2p+tgB5tn/W1PEZvgeD5Xf/if61ZgE9foa3Qz0ttd57gtyh79hS62nKmQlXWDiczp2tqaGAK+we+sZbxPeRDzXiEt2o2RVazQhbsDkpNu6io2UPDNn24aagxRVHHlgkQehaSjg9kPYcs2IvSxENFL0w03ASd2bQW82is0d6iB+YE2ZWCOO5tNKodIN0xe51Vh/wE15t5DGQsUcy1UOB6jg19T1NjSyCsJQcFHkPGJJS1XKC7jaXtVpV4nNS9KGYl16KOrCHbFvIA4wRkLkkg/uitaOn9A4jaYWzrlq6a/ARa25hPDiRG9CBbBtGr616e6faolGGLAMGaxAEFZiGGkUCpn7WAXFsxaURSKeH2oNDXEFvfxL/uGDRY1hT2lKy8Y3KDmgYA") format("woff2")}.iconfont[data-v-fe19e6e4]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-close[data-v-fe19e6e4]:before{content:"\\e622"}.wyb-popup-box[data-v-fe19e6e4]{position:fixed;transition-timing-function:ease-out;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.wyb-popup-container[data-v-fe19e6e4]{position:relative;box-sizing:border-box}.wyb-popup-slot[data-v-fe19e6e4]{width:100%;height:100%}.wyb-popup-mask[data-v-fe19e6e4]{position:fixed;top:0;left:0;bottom:0;right:0;transition-timing-function:ease;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.wyb-popup-close[data-v-fe19e6e4]{position:absolute;fontSize:%?40?%;color:grey;z-index:20000}.wyb-popup-custom-close[data-v-fe19e6e4]{left:0;top:0;position:absolute}',""]),t.exports=e},"569e":function(t,e,o){"use strict";var n=o("8785"),r=o.n(n);r.a},"7e9f":function(t,e,o){"use strict";o("a9e3"),o("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{w:uni.getSystemInfoSync().screenWidth,h:uni.getSystemInfoSync().screenHeight,isShow:!1,winReBottom:"",winReTop:"",sizeChange:!1,contentOpacity:null,contentTransform:null,maskOpacity:0}},computed:{autoCenterTop:function(){uni.getSystemInfoSync().statusBarHeight;var t=uni.getSystemInfoSync().windowHeight,e=this.rpxToPx(this.height),o="".concat((t-e)/2-this.negativeTop,"px");return o},autoTransform:function(){var t="";switch(this.type){case"center":"zoom-lessen"===this.centerAnim?t="scale(".concat(this.zoomLessenMulti,")"):"slide-up"===this.centerAnim?t="translateY(".concat(100*this.slideMulti,"%)"):"slide-down"===this.centerAnim?t="translateY(".concat(-100*this.slideMulti,"%)"):"fade"===this.centerAnim&&(t="auto");break;case"bottom":t="translateY(100%)";break;case"top":t="translateY(-100%)";break;case"left":t="translateX(-100%)";break;case"right":t="translateX(100%)";break}return t},autoWidth:function(){return"center"===this.type?"".concat(this.width,"rpx"):"size-fixed"===this.mode?"top"===this.type||"bottom"===this.type?"100%":"".concat(this.width,"rpx"):"top"===this.type||"bottom"===this.type?"100%":"auto"},autoHeight:function(){return"center"===this.type?"".concat(this.height,"rpx"):"size-fixed"===this.mode?"left"===this.type||"right"===this.type?"100%":"".concat(this.height,"rpx"):"left"===this.type||"right"===this.type?"100%":"auto"},autoTop:function(){return"center"===this.type?this.autoCenterTop:"bottom"===this.type?"auto":0},autoBottom:function(){return"center"===this.type||"top"===this.type?"auto":0},autoLeft:function(){return"center"===this.type?"".concat((this.w-this.rpxToPx(this.width))/2,"px"):"right"===this.type?"auto":0},autoRight:function(){return"center"===this.type||"left"===this.type?"auto":0}},props:{type:{type:String,default:"bottom"},mode:{type:String,default:"size-auto"},height:{type:[String,Number],default:400},width:{type:[String,Number],default:500},radius:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10076},maskClickClose:{type:Boolean,default:!0},maskAlpha:{type:Number,default:.5},duration:{type:Number,default:400},showCloseIcon:{type:Boolean,default:!1},scrollY:{type:Boolean,default:!1},scrollX:{type:Boolean,default:!1},closeIconPos:{type:String,default:"top-right"},closeIcon:{type:String,default:""},closeIconSize:{type:[String,Number],default:"20"},vertOffset:{type:[String,Number],default:"22"},horiOffset:{type:[String,Number],default:"22"},centerAnim:{type:String,default:"zoom-lessen"},bgColor:{type:String,default:"#ffffff"},zoomLessenMulti:{type:Number,default:1.15},slideMulti:{type:Number,default:1},negativeTop:{type:Number,default:0}},mounted:function(){var t=this,e=uni.getSystemInfoSync().windowHeight;uni.onWindowResize((function(o){t.sizeChange=!0,"bottom"===t.type?t.winReBottom=e-o.size.windowHeight+"px":"center"===t.type&&(t.winReTop=(o.size.windowHeight-t.rpxToPx(t.height))/2-t.negativeTop+"px")}))},methods:{close:function(){this.maskClickClose&&this.hide()},show:function(){var t=this;this.isShow=!0,this.wait(10).then((function(){t.maskIn(),t.contentIn(),t.wait(t.duration+1).then((function(){t.$emit("show",{pageScroll:!1,overflow:"hidden"})}))}))},hide:function(){var t=this;this.contentOut(),this.maskOut(),this.wait(this.duration+1).then((function(){t.isShow=!1,t.$emit("hide",{pageScroll:!0,overflow:"scroll"})}))},contentIn:function(){switch(this.type){case"center":"zoom-lessen"===this.centerAnim?(this.contentOpacity=1,this.contentTransform="scale(1)"):"slide-up"===this.centerAnim||"slide-down"===this.centerAnim?(this.contentOpacity=1,this.contentTransform="translateY(0)"):"fade"===this.centerAnim&&(this.contentOpacity=1);break;case"bottom":case"top":this.contentTransform="translateY(0)";break;case"left":case"right":this.contentTransform="translateX(0)";break}},contentOut:function(){this.contentOpacity=null,this.contentTransform=null},maskIn:function(){this.maskOpacity=1},maskOut:function(){this.maskOpacity=0},rpxToPx:function(t){return t/750*this.w},wait:function(t){return new Promise((function(e){setTimeout((function(){e()}),t)}))}}};e.default=n},8785:function(t,e,o){var n=o("2b51");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=o("4f06").default;r("996f6f46",n,!0,{sourceMap:!1,shadowMode:!1})},"96cf":function(t,e){!function(e){"use strict";var o,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=b;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",y={},m={};m[a]=function(){return this};var g=Object.getPrototypeOf,v=g&&g(g(C([])));v&&v!==n&&r.call(v,a)&&(m=v);var w=S.prototype=A.prototype=Object.create(m);k.prototype=w.constructor=S,S.constructor=k,S[c]=k.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},I(L.prototype),L.prototype[s]=function(){return this},f.AsyncIterator=L,f.async=function(t,e,o,n){var r=new L(b(t,e,o,n));return f.isGeneratorFunction(e)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},I(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function o(){while(e.length){var n=e.pop();if(n in t)return o.value=n,o.done=!1,o}return o.done=!0,o}},f.values=C,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=o)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=o),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),T(o),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var r=n.arg;T(o)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=o),y}}}function b(t,e,o,n){var r=e&&e.prototype instanceof A?e:A,i=Object.create(r.prototype),a=new z(n||[]);return i._invoke=E(t,o,a),i}function x(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(n){return{type:"throw",arg:n}}}function A(){}function k(){}function S(){}function I(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(o,n,i,a){var s=x(t[o],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,a)}))}a(s.arg)}var o;function n(t,n){function r(){return new Promise((function(o,r){e(t,n,o,r)}))}return o=o?o.then(r,r):r()}this._invoke=n}function E(t,e,o){var n=l;return function(r,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===r)throw i;return N()}o.method=r,o.arg=i;while(1){var a=o.delegate;if(a){var s=P(a,o);if(s){if(s===y)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===l)throw n=d,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=h;var c=x(t,e,o);if("normal"===c.type){if(n=o.done?d:p,c.arg===y)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(n=d,o.method="throw",o.arg=c.arg)}}}function P(t,e){var n=t.iterator[e.method];if(n===o){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=o,P(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var r=x(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,y;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=o),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=o,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:o,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},f69f:function(t,e,o){"use strict";o.r(e);var n=o("7e9f"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},ff3f:function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isShow?o("v-uni-view",[o("v-uni-view",{staticClass:"wyb-popup-box",style:{transitionDuration:t.duration+"ms",opacity:t.contentOpacity||("center"===t.type?0:1),transform:t.contentTransform||t.autoTransform,zIndex:t.zIndex,borderTopRightRadius:"center"===t.type||"bottom"===t.type||"left"===t.type?t.radius+"px":0,borderTopLeftRadius:"center"===t.type||"bottom"===t.type||"right"===t.type?t.radius+"px":0,borderBottomRightRadius:"center"===t.type||"top"===t.type||"left"===t.type?t.radius+"px":0,borderBottomLeftRadius:"center"===t.type||"top"===t.type||"right"===t.type?t.radius+"px":0,width:t.autoWidth,height:t.autoHeight,minWidth:t.width+"rpx",minHeight:t.height+"rpx",top:t.sizeChange&&"center"===t.type?t.winReTop:t.autoTop,bottom:t.autoBottom,left:t.autoLeft,right:t.autoRight,backgroundColor:t.bgColor},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)},click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[t.showCloseIcon?o("v-uni-view",{staticClass:"wyb-popup-close",style:{width:t.closeIcon?t.closeIconSize+"rpx":"auto",height:t.closeIcon?t.closeIconSize+"rpx":"auto",top:"top-right"===t.closeIconPos||"top-left"===t.closeIconPos?t.vertOffset+"rpx":"auto",bottom:"bottom-right"===t.closeIconPos||"bottom-left"===t.closeIconPos?t.vertOffset+"rpx":"auto",left:"bottom-left"===t.closeIconPos||"top-left"===t.closeIconPos?t.horiOffset+"rpx":"auto",right:"bottom-right"===t.closeIconPos||"top-right"===t.closeIconPos?t.horiOffset+"rpx":"auto"}},[t.showCloseIcon&&t.closeIcon?o("v-uni-image",{staticClass:"wyb-popup-custom-close",style:{width:t.closeIconSize+"rpx",height:t.closeIconSize+"rpx"},attrs:{src:t.closeIcon},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}}):t._e(),t.showCloseIcon&&!t.closeIcon?o("v-uni-view",{staticClass:"iconfont icon-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}}):t._e()],1):t._e(),o("v-uni-scroll-view",{staticClass:"wyb-popup-container",style:{width:t.autoWidth,height:t.autoHeight},attrs:{"enable-flex":!0,"scroll-y":t.scrollY,"scroll-x":t.scrollX}},[o("v-uni-view",{staticClass:"wyb-popup-slot"},[t._t("default")],2)],1)],1),o("v-uni-view",{staticClass:"wyb-popup-mask",style:{opacity:t.maskOpacity,transitionDuration:t.duration+"ms",backgroundColor:"rgba(0, 0, 0, "+t.maskAlpha+")",zIndex:t.zIndex-1},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1):t._e()},i=[]}}]);