(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-poster-poster"],{"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(h){return void r(h)}s.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,u,"next",t)}function u(t){n(a,o,i,s,u,"throw",t)}s(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},3898:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("cu-head"),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"box1"},[n("v-uni-canvas",{ref:"Canvas",staticClass:"thecanvas",attrs:{type:"2d","canvas-id":"firstCanvas"}})],1),n("v-uni-view",{staticClass:"box2"},[n("v-uni-view",{staticClass:"save",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSavePhoto()}}},[t._v("点击保存海报到相册")])],1),n("v-uni-view",{staticClass:"box3"},[t._v("可分享至微信或朋友圈"),n("v-uni-image",{attrs:{src:r("628d"),mode:""}}),n("v-uni-image",{attrs:{src:r("66ad"),mode:""}})],1)],1)],1)},i=[]},"5a83":function(t,e,r){"use strict";var n=r("f90e"),o=r.n(n);o.a},"628d":function(t,e,r){t.exports=r.p+"static/img/share-wx.1836acb0.png"},"66ad":function(t,e){t.exports="data:image/png;base64,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"},"6f44":function(t,e,r){"use strict";r.r(e);var n=r("3898"),o=r("948d");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("5a83");var a,s=r("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"2ed4432e",null,!1,n["a"],a);e["default"]=u.exports},7932:function(t,e,r){"use strict";var n=r("4ea4");r("99af"),r("a9e3"),r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("1da1")),i=n(r("f4c9")),a=r("df47"),s=r("173f"),u=n(r("aed0")),h={data:function(){return{product_item_id:"",context:null,posterData:{poster_url:"",ava_url:"",user_name:"",code:""}}},components:{CuHead:u.default},methods:{handleBack:function(){var t=getCurrentPages();console.log(t),1===t.length?uni.redirectTo({url:"/pages/index/index"}):uni.navigateBack({delta:1})},getQrcode:function(t,e,r,n,o){return new i.default(o,{width:t,height:e,text:r,render:n,correctLevel:1})},downloadFile:function(t){return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){uni.getImageInfo({src:t,success:function(t){e(t.tempFilePath)},fail:function(t){r(t)}})})));case 1:case"end":return e.stop()}}),e)})))()},handleSavePhoto:function(){console.log("save"),uni.canvasToTempFilePath({canvasId:"firstCanvas",success:function(t){if(console.log("res",t),(0,a.isApp)())(0,a.saveBase64Image)(t.tempFilePath);else{var e=document.createElement("a");e.download="分享海报",e.href=t.tempFilePath,e.click()}},fail:function(t){console.log(t)}})},getInfo:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$post(s.h5_collections_index_sharePoster,{product_item_id:t.product_item_id});case 3:if(r=e.sent,0===r.code){e.next=6;break}return e.abrupt("return",uni.showToast({title:r.msg,icon:"error"}));case 6:t.initCanvas(r.data),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("error",e.t0),uni.showToast({icon:"error",title:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},initCanvas:function(t){var e=this,r=this;uni.getSystemInfo().then((function(n){console.log("device",n[1]);var o=n[1].windowWidth,i=315,a=375,s=387,u={url:t.poster_url,x:0,y:0,width:i*o/a,height:s*o/a,radius:8*o/a},h={url:t.user_avatar,x:0,y:0,width:0,height:0};h.x=12*o/a,h.y=16*o/a,h.width=30*o/a,h.height=30*o/a;var c={x:47*o/a,y:37*o/a,fontSize:16*o/a,color:"#1C1C1E",text:t.user_name},l={x:97.5*o/a,y:218*o/a,width:120*o/a,height:120*o/a,shareUrl:window.location.protocol+"//"+window.location.host+"/#/pages/preOrderDetails/preOrderDetails?product_item_id=".concat(e.product_item_id,"&share_sign=").concat(t.share_sign)},f=document.createElement("div");f.height=l.height,f.width=l.width;var d=r.getQrcode(l.width,l.height,l.shareUrl,"canvas",f),g=d._el.querySelector("canvas"),p=g.toDataURL("image/png");console.log("code2Url",p),r.context=uni.createCanvasContext("firstCanvas",r),console.log("that.context",r.context),console.log(r.$refs.Canvas),uni.downloadFile({url:u.url,success:function(t){r.context.drawImage(t.tempFilePath,u.x,u.y,u.width,u.height),r.context.setFontSize(c.fontSize),r.context.setFillStyle("Roboto "+c.color),r.context.fillText(c.text,c.x,c.y),uni.downloadFile({url:p,success:function(t){r.context.drawImage(p,l.x,l.y,l.width,l.height),uni.downloadFile({url:h.url,success:function(t){r.context.arc(h.x+h.width/2,h.y+h.height/2,h.width/2,0,2*Math.PI),r.context.clip(),r.context.beginPath(),r.context.drawImage(t.tempFilePath,h.x,h.y,h.width,h.height),r.context.draw()}})}})}})}))}},mounted:function(){},onLoad:function(t){console.log("poster onload",t),this.product_item_id=Number(t.product_item_id)},onReady:function(t){console.log("poster onready"),this.getInfo()}};e.default=h},"948d":function(t,e,r){"use strict";r.r(e);var n=r("7932"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",h="object"===typeof t,c=e.regeneratorRuntime;if(c)h&&(t.exports=c);else{c=e.regeneratorRuntime=h?t.exports:{},c.wrap=A;var l="suspendedStart",f="suspendedYield",d="executing",g="completed",p={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(B([])));w&&w!==n&&o.call(w,a)&&(v=w);var y=T.prototype=E.prototype=Object.create(v);b.prototype=y.constructor=T,T.constructor=b,T[u]=b.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,T):(t.__proto__=T,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(y),t},c.awrap=function(t){return{__await:t}},k(x.prototype),x.prototype[s]=function(){return this},c.AsyncIterator=x,c.async=function(t,e,r,n){var o=new x(A(t,e,r,n));return c.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(y),y[u]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},c.values=B,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),h=o.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:B(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),p}}}function A(t,e,r,n){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),a=new D(n||[]);return i._invoke=I(t,r,a),i}function C(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function E(){}function b(){}function T(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t){function e(r,n,i,a){var s=C(t[r],t,n);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&o.call(h,"__await")?Promise.resolve(h.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(s.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function I(t,e,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===g){if("throw"===o)throw i;return R()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=C(t,e,r);if("normal"===u.type){if(n=r.done?g:f,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=g,r.method="throw",r.arg=u.arg)}}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=C(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function B(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},dbc5:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container .content[data-v-2ed4432e]{padding-top:%?88?%}.container .content .box1[data-v-2ed4432e]{padding-top:%?80?%;text-align:center}.container .content .box1 .thecanvas[data-v-2ed4432e]{margin:auto;width:%?630?%;height:%?774?%;background:#e7e7e7;border-radius:%?16?%!important}.container .content .box2[data-v-2ed4432e]{display:flex;justify-content:center;margin-top:%?24?%;width:100%}.container .content .box2 .save[data-v-2ed4432e]{display:flex;align-items:center;justify-content:center;line-height:0;width:%?474?%;height:%?96?%;background:#d10910;border-radius:44px;color:#ececec;font-size:%?32?%}.container .content .box2 .save[data-v-2ed4432e]:active{background-color:rgba(209,9,16,.6);color:#868686}.container .content .box3[data-v-2ed4432e]{padding-top:%?26?%;display:flex;align-items:center;justify-content:center;font-size:%?28?%;color:#e6e6e6}.container .content .box3 uni-image[data-v-2ed4432e]{width:%?72?%;height:%?72?%;margin-left:%?24?%}',""]),t.exports=e},f4c9:function(t,e,r){var n;r("99af"),r("d3b7"),r("acd8"),r("ac1f"),r("25f0"),r("466d"),r("5319"),function(e,r){t.exports=r()}(0,(function(){function t(t){this.mode=r.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,n=this.data.length;e<n;e++){var o=[],i=this.data.charCodeAt(e);i>65536?(o[0]=240|(1835008&i)>>>18,o[1]=128|(258048&i)>>>12,o[2]=128|(4032&i)>>>6,o[3]=128|63&i):i>2048?(o[0]=224|(61440&i)>>>12,o[1]=128|(4032&i)>>>6,o[2]=128|63&i):i>128?(o[0]=192|(1984&i)>>>6,o[1]=128|63&i):o[0]=i,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[n][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=a.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},createMovieClip:function(t,e,r){var n=t.createEmptyMovieClip(e,r),o=1;this.make();for(var i=0;i<this.modules.length;i++)for(var a=i*o,s=0;s<this.modules[i].length;s++){var u=s*o,h=this.modules[i][s];h&&(n.beginFill(0,100),n.moveTo(u,a),n.lineTo(u+o,a),n.lineTo(u+o,a+o),n.lineTo(u,a+o),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)this.modules[n+i][o+s]=-2==i||2==i||-2==s||2==s||0==i&&0==s}},setupTypeNumber:function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=a.getBCHTypeInfo(r),o=0;o<15;o++){var i=!t&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,i=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var u=0;u<2;u++)if(null==this.modules[n][s-u]){var h=!1;i<t.length&&(h=1==(t[i]>>>o&1));var c=a.getMask(e,n,s-u);c&&(h=!h),this.modules[n][s-u]=h,o--,-1==o&&(i++,o=7)}if(n+=r,n<0||this.moduleCount<=n){n-=r,r=-r;break}}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,n){for(var o=c.getRSBlocks(t,r),i=new l,s=0;s<n.length;s++){var u=n[s];i.put(u.mode,4),i.put(u.getLength(),a.getLengthInBits(u.mode,t)),u.write(i)}var h=0;for(s=0;s<o.length;s++)h+=o[s].dataCount;if(i.getLengthInBits()>8*h)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*h+")");i.getLengthInBits()+4<=8*h&&i.put(0,4);while(i.getLengthInBits()%8!=0)i.putBit(!1);while(1){if(i.getLengthInBits()>=8*h)break;if(i.put(e.PAD0,8),i.getLengthInBits()>=8*h)break;i.put(e.PAD1,8)}return e.createBytes(i,o)},e.createBytes=function(t,e){for(var r=0,n=0,o=0,i=new Array(e.length),s=new Array(e.length),u=0;u<e.length;u++){var c=e[u].dataCount,l=e[u].totalCount-c;n=Math.max(n,c),o=Math.max(o,l),i[u]=new Array(c);for(var f=0;f<i[u].length;f++)i[u][f]=255&t.buffer[f+r];r+=c;var d=a.getErrorCorrectPolynomial(l),g=new h(i[u],d.getLength()-1),p=g.mod(d);s[u]=new Array(d.getLength()-1);for(f=0;f<s[u].length;f++){var v=f+p.getLength()-s[u].length;s[u][f]=v>=0?p.get(v):0}}var m=0;for(f=0;f<e.length;f++)m+=e[f].totalCount;var w=new Array(m),y=0;for(f=0;f<n;f++)for(u=0;u<e.length;u++)f<i[u].length&&(w[y++]=i[u][f]);for(f=0;f<o;f++)for(u=0;u<e.length;u++)f<s[u].length&&(w[y++]=s[u][f]);return w};for(var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},o={L:1,M:0,Q:3,H:2},i={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},a={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(a.getBCHDigit(e)-a.getBCHDigit(a.G15)>=0)e^=a.G15<<a.getBCHDigit(e)-a.getBCHDigit(a.G15);return(t<<10|e)^a.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(a.getBCHDigit(e)-a.getBCHDigit(a.G18)>=0)e^=a.G18<<a.getBCHDigit(e)-a.getBCHDigit(a.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return a.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case i.PATTERN000:return(e+r)%2==0;case i.PATTERN001:return e%2==0;case i.PATTERN010:return r%3==0;case i.PATTERN011:return(e+r)%3==0;case i.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case i.PATTERN101:return e*r%2+e*r%3==0;case i.PATTERN110:return(e*r%2+e*r%3)%2==0;case i.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new h([1],0),r=0;r<t;r++)e=e.multiply(new h([1,s.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:return 8;case r.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(n,o),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var u=-1;u<=1;u++)o+u<0||e<=o+u||0==s&&0==u||a==t.isDark(n+s,o+u)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<e-1;n++)for(o=0;o<e-1;o++){var h=0;t.isDark(n,o)&&h++,t.isDark(n+1,o)&&h++,t.isDark(n,o+1)&&h++,t.isDark(n+1,o+1)&&h++,0!=h&&4!=h||(r+=3)}for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var c=0;for(o=0;o<e;o++)for(n=0;n<e;n++)t.isDark(n,o)&&c++;var l=Math.abs(100*c/e/e-50)/5;return r+=10*l,r}},s={glog:function(t){if(t<1)throw new Error("glog("+t+")");return s.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return s.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},u=0;u<8;u++)s.EXP_TABLE[u]=1<<u;for(u=8;u<256;u++)s.EXP_TABLE[u]=s.EXP_TABLE[u-4]^s.EXP_TABLE[u-5]^s.EXP_TABLE[u-6]^s.EXP_TABLE[u-8];for(u=0;u<255;u++)s.LOG_TABLE[s.EXP_TABLE[u]]=u;function h(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var r=0;while(r<t.length&&0==t[r])r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}function c(t,e){this.totalCount=t,this.dataCount=e}function l(){this.buffer=[],this.length=0}h.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=s.gexp(s.glog(this.get(r))+s.glog(t.get(n)));return new h(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=s.glog(this.get(0))-s.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<t.getLength();n++)r[n]^=s.gexp(s.glog(t.get(n))+e);return new h(r,0).mod(t)}},c.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],c.getRSBlocks=function(t,e){var r=c.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,o=[],i=0;i<n;i++)for(var a=r[3*i+0],s=r[3*i+1],u=r[3*i+2],h=0;h<a;h++)o.push(new c(s,u));return o},c.getRsBlockTable=function(t,e){switch(e){case o.L:return c.RS_BLOCK_TABLE[4*(t-1)+0];case o.M:return c.RS_BLOCK_TABLE[4*(t-1)+1];case o.Q:return c.RS_BLOCK_TABLE[4*(t-1)+2];case o.H:return c.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},l.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var f=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function d(){return"undefined"!=typeof CanvasRenderingContext2D}function g(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}var p=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,r=this._el,n=t.getModuleCount();Math.floor(e.width/n),Math.floor(e.height/n);function o(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)e.hasOwnProperty(n)&&r.setAttribute(n,e[n]);return r}this.clear();var i=o("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:e.colorLight});i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(i),i.appendChild(o("rect",{fill:e.colorLight,width:"100%",height:"100%"})),i.appendChild(o("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<n;a++)for(var s=0;s<n;s++)if(t.isDark(a,s)){var u=o("use",{x:String(s),y:String(a)});u.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),i.appendChild(u)}},t.prototype.clear=function(){while(this._el.hasChildNodes())this._el.removeChild(this._el.lastChild)},t}(),v="svg"===document.documentElement.tagName.toLowerCase(),m=v?p:d()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,r=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,n,o,i,a,s,u,h,c){if("nodeName"in t&&/img/i.test(t.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*e;else"undefined"==typeof h&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);r.apply(this,arguments)}}function n(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var n=document.createElement("img"),o=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)},i=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)};return n.onabort=o,n.onerror=o,n.onload=i,void(n.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}var o=function(t,e){this._bIsPainted=!1,this._android=g(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return o.prototype.draw=function(t){var e=this._elImage,r=this._oContext,n=this._htOption,o=t.getModuleCount(),i=n.width/o,a=n.height/o,s=Math.round(i),u=Math.round(a);e.style.display="none",this.clear();for(var h=0;h<o;h++)for(var c=0;c<o;c++){var l=t.isDark(h,c),f=c*i,d=h*a;r.strokeStyle=l?n.colorDark:n.colorLight,r.lineWidth=1,r.fillStyle=l?n.colorDark:n.colorLight,r.fillRect(f,d,i,a),r.strokeRect(Math.floor(f)+.5,Math.floor(d)+.5,s,u),r.strokeRect(Math.ceil(f)-.5,Math.ceil(d)-.5,s,u)}this._bIsPainted=!0},o.prototype.makeImage=function(){this._bIsPainted&&n.call(this,t)},o.prototype.isPainted=function(){return this._bIsPainted},o.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},o.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},o}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,n=t.getModuleCount(),o=Math.floor(e.width/n),i=Math.floor(e.height/n),a=['<table style="border:0;border-collapse:collapse;">'],s=0;s<n;s++){a.push("<tr>");for(var u=0;u<n;u++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+o+"px;height:"+i+"px;background-color:"+(t.isDark(s,u)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var h=r.childNodes[0],c=(e.width-h.offsetWidth)/2,l=(e.height-h.offsetHeight)/2;c>0&&l>0&&(h.style.margin=l+"px "+c+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();function w(t,e){for(var r=1,n=y(t),i=0,a=f.length;i<=a;i++){var s=0;switch(e){case o.L:s=f[i][0];break;case o.M:s=f[i][1];break;case o.Q:s=f[i][2];break;case o.H:s=f[i][3];break}if(n<=s)break;r++}if(r>f.length)throw new Error("Too long data");return r}function y(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}return n=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:o.H},"string"===typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(m=p),this._android=g(),this._el=t,this._oQRCode=null,this._oDrawing=new m(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},n.prototype.makeCode=function(t){this._oQRCode=new e(w(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},n.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},n.prototype.clear=function(){this._oDrawing.clear()},n.CorrectLevel=o,n}))},f90e:function(t,e,r){var n=r("dbc5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("db092904",n,!0,{sourceMap:!1,shadowMode:!1})}}]);