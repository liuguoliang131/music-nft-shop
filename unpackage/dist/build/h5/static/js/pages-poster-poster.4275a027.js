(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-poster-poster"],{"6f44":function(e,t,n){"use strict";n.r(t);var a=n("a42a"),o=n("948d");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("a9a7");var r,c=n("f0c5"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"0e8ee9de",null,!1,a["a"],r);t["default"]=s.exports},7932:function(e,t,n){"use strict";var a=n("4ea4");n("99af"),n("a9e3"),n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var o=a(n("1da1")),i=a(n("f4c9")),r=n("df47"),c=n("173f"),s=a(n("aed0")),d={data:function(){return{isWx:!1,inApp:!1,product_item_id:"",context:null,posterData:{poster_url:"",ava_url:"",user_name:"",code:""},posterImageBase64:""}},components:{CuHead:s.default},methods:{handleBack:function(){var e=getCurrentPages();console.log(e),1===e.length?uni.redirectTo({url:"/pages/index/index"}):uni.navigateBack({delta:1})},getQrcode:function(e,t,n,a,o){return new i.default(o,{width:e,height:t,text:n,render:a,correctLevel:1})},downloadFile:function(e){return(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){uni.getImageInfo({src:e,success:function(e){t(e.tempFilePath)},fail:function(e){n(e)}})})));case 1:case"end":return t.stop()}}),t)})))()},handleSavePhoto:function(){console.log("save"),uni.canvasToTempFilePath({canvasId:"firstCanvas",success:function(e){if(console.log("res",e),(0,r.isApp)())(0,r.saveBase64Image)(e.tempFilePath);else{var t=document.createElement("a");t.download="分享海报",t.href=e.tempFilePath,t.click()}},fail:function(e){console.log(e)}})},getInfo:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$post(c.h5_collections_index_sharePoster,{product_item_id:e.product_item_id});case 3:if(n=t.sent,0===n.code){t.next=6;break}return t.abrupt("return",uni.showToast({title:n.msg,icon:"error"}));case 6:e.initCanvas(n.data),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log("error",t.t0),uni.showToast({icon:"error",title:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},initCanvas:function(e){var t=this,n=this;uni.getSystemInfo().then((function(a){console.log("device",a[1]);var o=a[1].windowWidth,i=315,r=375,c=387,s={url:e.poster_url,x:0,y:0,width:i*o/r,height:c*o/r,radius:8*o/r},d={url:e.user_avatar,x:0,y:0,width:0,height:0};d.x=12*o/r,d.y=16*o/r,d.width=30*o/r,d.height=30*o/r;var l={x:47*o/r,y:37*o/r,fontSize:16*o/r,color:"#1C1C1E",text:e.user_name},u={x:97.5*o/r,y:218*o/r,width:120*o/r,height:120*o/r,shareUrl:window.location.protocol+"//"+window.location.host+"/#/pages/preOrderDetails/preOrderDetails?product_item_id=".concat(t.product_item_id,"&share_sign=").concat(encodeURIComponent(e.share_sign))},h=document.createElement("div");h.height=u.height,h.width=u.width;var f=n.getQrcode(u.width,u.height,u.shareUrl,"canvas",h),v=f._el.querySelector("canvas"),p=v.toDataURL("image/png");console.log("code2Url",p),n.context=uni.createCanvasContext("firstCanvas",n),console.log("that.context",n.context),console.log(n.$refs.Canvas),uni.downloadFile({url:s.url,success:function(e){n.context.drawImage(e.tempFilePath,s.x,s.y,s.width,s.height),n.context.setFontSize(l.fontSize),n.context.setFillStyle("Roboto "+l.color),n.context.fillText(l.text,l.x,l.y),uni.downloadFile({url:p,success:function(e){n.context.drawImage(p,u.x,u.y,u.width,u.height),uni.downloadFile({url:d.url,success:function(e){n.context.arc(d.x+d.width/2,d.y+d.height/2,d.width/2,0,2*Math.PI),n.context.clip(),n.context.beginPath(),n.context.drawImage(e.tempFilePath,d.x,d.y,d.width,d.height),n.context.draw(),setTimeout((function(){uni.canvasToTempFilePath({canvasId:"firstCanvas",success:function(e){console.log("posterRes",e),n.posterImageBase64=e.tempFilePath},fail:function(e){console.log(e)}})}),1e3)}})}})}})}))},handleShare:function(e){var t=window.location.protocol+"//"+window.location.host+"/#/pages/preOrderDetails/preOrderDetails?product_item_id=".concat(this.product_item_id,"&share_sign=").concat(encodeURIComponent(data.share_sign)),n="元音符"+t,a="";uni.canvasToTempFilePath({canvasId:"firstCanvas",success:function(e){console.log("res",e),a=e.tempFilePath},fail:function(e){console.log(e)}});var o=window.localStorage.getItem("AppConfigInfo");o=o?JSON.parse(o):{"version-code":"1710"},Number(o["version-code"])>=1750&&(0,r.shareBase64Image)({share_title:n,share_way:e,img:a})}},mounted:function(){},onLoad:function(e){console.log("poster onload",e),this.isWx=(0,r.isWxBrowser)(),this.inApp=(0,r.isApp)(),this.product_item_id=e.product_item_id?Number(e.product_item_id):null},onReady:function(e){console.log("poster onready"),this.getInfo()}};t.default=d},"948d":function(e,t,n){"use strict";n.r(t);var a=n("7932"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},a317:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container .content .box1[data-v-0e8ee9de]{position:relative;padding-top:%?80?%;text-align:center}.container .content .box1 .thecanvas[data-v-0e8ee9de]{z-index:1;width:%?630?%;height:%?774?%;margin:auto;background:#e7e7e7;border-radius:%?16?%!important}.container .content .box1 .posterImageBase64[data-v-0e8ee9de]{position:absolute;z-index:2;top:%?80?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);width:%?630?%;height:%?774?%;border-radius:%?16?%!important}.container .content .box2[data-v-0e8ee9de]{display:flex;justify-content:center;margin-top:%?24?%;width:100%}.container .content .box2 .save[data-v-0e8ee9de]{display:flex;align-items:center;justify-content:center;line-height:0;width:%?474?%;height:%?96?%;background:#d10910;border-radius:44px;color:#ececec;font-size:%?32?%}.container .content .box2 .save[data-v-0e8ee9de]:active{background-color:rgba(209,9,16,.6);color:#868686}.container .content .box2 .noactive[data-v-0e8ee9de]:active{background-color:#d10910;color:#ececec}.container .content .box3[data-v-0e8ee9de]{padding-top:%?26?%;display:flex;align-items:center;justify-content:center;font-size:%?28?%;color:#e6e6e6}.container .content .box3 uni-image[data-v-0e8ee9de]{width:%?72?%;height:%?72?%;margin-left:%?24?%}',""]),e.exports=t},a42a:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"container"},[a("cu-head"),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"box1"},[e.posterImageBase64?a("v-uni-image",{staticClass:"posterImageBase64",attrs:{src:e.posterImageBase64,mode:""}}):e._e(),a("v-uni-canvas",{ref:"Canvas",staticClass:"thecanvas",attrs:{type:"2d","canvas-id":"firstCanvas"}})],1),a("v-uni-view",{staticClass:"box2"},[e.isWx?a("v-uni-view",{staticClass:"save noactive"},[e._v("长按二维码保存海报")]):a("v-uni-view",{staticClass:"save",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSavePhoto()}}},[e._v("点击保存海报到相册")])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.inApp,expression:"inApp"}],staticClass:"box3"},[e._v("可分享至"),a("v-uni-image",{attrs:{src:n("628d"),mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleShare("wxFriend")}}}),a("v-uni-image",{attrs:{src:n("66ad"),mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleShare("timeline")}}}),a("v-uni-image",{attrs:{src:n("7afd"),mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleShare("weibo")}}})],1)],1)],1)},i=[]},a9a7:function(e,t,n){"use strict";var a=n("ca5d"),o=n.n(a);o.a},ca5d:function(e,t,n){var a=n("a317");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("4f06").default;o("659abe40",a,!0,{sourceMap:!1,shadowMode:!1})}}]);