(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-preOrderDetails-preOrderDetails"],{"3c1e":function(t,e,a){"use strict";var i=a("88c9"),n=a.n(i);n.a},"4b27":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={wybPopup:a("1754").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("cu-head"),i("v-uni-view",{staticClass:"preOrderDetails-header"},[i("v-uni-view",{staticClass:"cover"},[i("div",{staticClass:"cover-content"},[i("v-uni-image",{staticClass:"cover-img",attrs:{src:a("f199")}}),i("v-uni-image",{staticClass:"cover-turn",attrs:{src:a("0b55"),mode:""}}),i("v-uni-image",{staticClass:"cover-turn1",attrs:{src:t.data.index_img,mode:""}})],1)]),i("v-uni-view",{staticClass:"row1"},["SSR"===t.data.rare_type?i("v-uni-image",{attrs:{src:a("6e9c"),mode:""}}):"UR"===t.data.rare_type?i("v-uni-image",{attrs:{src:a("d14b"),mode:""}}):"R"===t.data.rare_type?i("v-uni-image",{attrs:{src:a("07b2"),mode:""}}):"N"===t.data.rare_type?i("v-uni-image",{attrs:{src:a("9d3e"),mode:""}}):"SR"===t.data.rare_type?i("v-uni-image",{attrs:{src:a("0057"),mode:""}}):t._e(),t._v(t._s(t.data.name))],1),i("v-uni-view",{staticClass:"row2"},[t._v(t._s(t.data.sale_time1)+" "+t._s(0===t.data.sale_status?"未开售":1===t.data.sale_status?"开售中":"已停售")),i("v-uni-text",[t._v("限量"+t._s(t.data.stock_num_desc)+"张")])],1),i("v-uni-view",{staticClass:"price"},[i("v-uni-text",{staticClass:"rmb"},[t._v("￥")]),i("v-uni-text",{staticClass:"count"},[t._v(t._s(t.data.sale_price))]),i("v-uni-text",{staticClass:"unit"},[t._v("/张")])],1)],1),i("v-uni-view",{staticClass:"preOrderDetails-body"},[i("v-uni-view",{staticClass:"card cardbox1"},[i("v-uni-view",{staticClass:"card-body"},[i("v-uni-view",{staticClass:"row1"},[t._v("专辑信息")]),i("v-uni-view",{staticClass:"row2"},[i("v-uni-view",{staticClass:"row2-1"},[i("v-uni-text",{staticClass:"row2-1-l"},[t._v("专辑名称")]),i("v-uni-text",{staticClass:"row2-1-r"},[t._v(t._s(t.data.name))])],1),i("v-uni-view",{staticClass:"row2-1"},[i("v-uni-text",{staticClass:"row2-1-l"},[t._v("稀有度")]),i("v-uni-text",{staticClass:"row2-1-r"},[t._v(t._s(t.data.rare_type))])],1),i("v-uni-view",{staticClass:"row2-1"},[i("v-uni-text",{staticClass:"row2-1-l"},[t._v("发行量")]),i("v-uni-text",{staticClass:"row2-1-r"},[t._v(t._s(t.data.stock_num_desc)+"张")])],1),i("v-uni-view",{staticClass:"row2-1"},[i("v-uni-text",{staticClass:"row2-1-l"},[t._v("发行方")]),i("v-uni-text",{staticClass:"row2-1-r"},[t._v(t._s(t.data.publish_author))])],1),i("v-uni-view",{staticClass:"row2-1"},[i("v-uni-text",{staticClass:"row2-1-l"},[t._v("发行时间")]),i("v-uni-text",{staticClass:"row2-1-r"},[t._v(t._s(t.data.publish_time1))])],1)],1),i("v-uni-view",{staticClass:"row3"},[t._v("购买须知")]),i("v-uni-view",{staticClass:"row4",domProps:{innerHTML:t._s(t.data.buy_notice)}})],1)],1),i("v-uni-view",{staticClass:"card cardbox2"},[i("v-uni-view",{staticClass:"card-body"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.data.introduction,expression:"data.introduction"}],staticClass:"work"},[i("v-uni-view",{staticClass:"row1"},[t._v("专辑介绍")]),i("v-uni-view",{staticClass:"row2",domProps:{innerHTML:t._s(t.data.introduction)}})],1),t._l(t.data.music_list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"work"},[i("v-uni-view",{staticClass:"row1"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"row2",domProps:{innerHTML:t._s(e.desc)}})],1)}))],2)],1)],1),i("v-uni-view",{staticClass:"h120"}),i("v-uni-view",{staticClass:"preOrderDetails-footer"},[i("v-uni-view",{staticClass:"abs",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handShare()}}},[i("v-uni-image",{staticClass:"abs-img",attrs:{src:a("5360")}}),i("v-uni-text",{staticClass:"abs-text"},[t._v("分享")])],1),2===t.data.is_halt?i("v-uni-view",{staticClass:"footer-btn gray-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handOrLogin(3)}}},[t._v("已停售")]):1===t.data.is_halt&&0===t.data.sale_status?i("v-uni-view",{staticClass:"footer-btn noactive",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handOrLogin(0)}}},[t._v(t._s(t.countDown))]):1===t.data.is_halt&&1===t.data.sale_status?i("v-uni-view",{staticClass:"footer-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.popup.show()}}},[t._v("立即抢购")]):1===t.data.is_halt&&2===t.data.sale_status?i("v-uni-view",{staticClass:"footer-btn gray-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handOrLogin(2)}}},[t._v("已售罄")]):t._e()],1),i("wyb-popup",{ref:"popup",attrs:{type:"bottom",height:"701",width:"750",radius:"6",bgColor:"#1D1D1D",showCloseIcon:!0}},[i("v-uni-view",{staticClass:"popup-content"},[i("v-uni-view",{staticClass:"popup-i"},[i("v-uni-view",{staticClass:"i-img"},[i("v-uni-image",{attrs:{src:t.data.index_img,mode:""}}),i("v-uni-view",{staticClass:"img-line"})],1),i("v-uni-view",{staticClass:"i-title"},[i("v-uni-view",{staticClass:"title-t"},[t._v(t._s(t.data.name))]),i("v-uni-view",{staticClass:"title-p"},[t._v("发行价格"),i("v-uni-text",{staticClass:"title-p-rmb"},[t._v("￥"+t._s(t.data.sale_price))]),t._v("/张")],1)],1)],1),i("v-uni-view",{staticClass:"popup-f"},[i("v-uni-image",{staticClass:"popup-f-img",attrs:{src:a("e30f")}}),i("v-uni-text",[t._v("购买专辑可以永久聆听")])],1),i("v-uni-view",{staticClass:"popup-count"},[i("v-uni-view",{staticClass:"count-text"},[t._v("数量")]),i("v-uni-view",{staticClass:"number-count"},[i("v-uni-view",{staticClass:"minus",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handMinus()}}},[i("v-uni-view",{staticClass:"minus-img"},[i("v-uni-view",{class:["h",this.count>1?"active-icon":""]})],1)],1),i("v-uni-input",{staticClass:"countc",attrs:{type:"number",maxlength:"3",name:"",id:""},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onCountChange()}},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}}),i("v-uni-view",{staticClass:"plus",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handPlus()}}},[i("v-uni-view",{staticClass:"plus-img"},[i("v-uni-view",{class:["h",this.count<100?"active-icon":""]}),i("v-uni-view",{class:["v",this.count<100?"active-icon":""]})],1)],1)],1)],1),i("v-uni-view",{staticClass:"popup-e"},[i("v-uni-view",{staticClass:"e-text"},[t._v("实付")]),i("v-uni-view",{staticClass:"e-price"},[i("v-uni-text",{staticClass:"rmb"},[t._v("￥")]),i("v-uni-text",{staticClass:"count"},[t._v(t._s(t.total))])],1)],1),i("v-uni-view",{staticClass:"popup-d"},[i("v-uni-view",{staticClass:"d-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handOrder()}}},[t._v("立即抢购")])],1),i("v-uni-view",{staticClass:"popup-c"},[t._v("喜欢的话，就不要错过哦！")])],1)],1)],1)},o=[]},5360:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJrSURBVHgB7dyBUcIwFMbxV48BHKEjsIG4gU4gG+gGlgl0A48JxAnECWADuoFsUN939I4QAkKbpHlJ/nc5sPQ0/q6ghlai3FGF+kHTNBX1b1EUxZosxPMp+WZKfluOtA2v1L+ahxUUriQ7c7qqG8odNTrz2Iy6ZesoQTV1n8cl3fJ4PrtHo0SRx9/iLY9Vc1yV5NMHIHzzzWNsejzV15QPOgSp1QeTQ+GjBCAPyia8Zs3VfZJCaUGmyqYZ/05V6fslg3IpCEoC5RoQFD3KtSAoapQuIChalK4gKEqUPiAoOhQGeaMeICgqFAbBMsOLsulqEBQNSgtSKZs6gaAoUAwg864gSDzKCZAp9Ug0igsQJBbFFQgSieISBIlDcQ2CRKH4AEFiUHyBIBEoPkGQjlLTfiIlBZABZO0SBAV9pJhAeNyT40YUaKdA+CjZkv0WtH+WrPWJbJR3ykoaKIBo79qt2jewBpnM4ChBgbQTGhQlOJB2UoOhBAnSTmwQFP5aT0GCoCFQggZBvlEMIJugQJBPlBMgJYWWLxQxIMgHiigQ5BpFHAhyiSISBLlCEQuCXKDw5xnz+BUJgmyjiAdBNlGiAEG2UKIBQTZQogJBllA20kB4jpUyZyfn5j/ywDpqTbs11ZqEZX3hGleFsTZW3LcSQZCT1Xxbl8sNVb4yzFBGMZRRDGUUQxnFUEYxlFEMZRRDOop6mkNJiaaj/Cj3vf+PgVDSURbK/UmzO3EmuQp9A0O80+H1/zWPLzp8asXWHY9Je39WmPZgmE86vKA5pWbGnz78Vy7WRHBld00JVvy3Ax81OGLGlE5Lyh33B/IqpjcOY96PAAAAAElFTkSuQmCC"},5585:function(t,e,a){"use strict";var i=a("4ea4");a("99af"),a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),o=i(a("1754")),r=i(a("aed0")),s=a("173f"),c=a("1a64"),u=a("df47"),d={components:{WybPopup:o.default,CuHead:r.default},data:function(){return{product_item_id:"",share_sign:"",show_pop:!1,data:{name:"",product_item_id:"",index_img:"",sale_time:"",stock_num:0,remain_stock_num:"",sale_price:"",sale_status:"",rare_type:"",evaluate_type:"",publish_author:"",publish_time:"",singles_num:"",buy_notice:"",music_list:[],is_login:"",publish_time1:"",sale_time1:""},count:1,statusTimer:null,countDown:""}},computed:{total:function(){return this.data.sale_price?(this.count*this.data.sale_price).toFixed(2):0}},methods:{handleBack:function(){var t=getCurrentPages();1===t.length?this.$store.state.user.token?uni.redirectTo({url:"/pages/index/index"}):(0,u.goLogin)():uni.navigateBack({delta:1})},getDetails:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var i,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$post(s.collections_index_detail,{product_item_id:t});case 3:if(i=a.sent,console.log(i),0===i.code){a.next=7;break}return a.abrupt("return",uni.showToast({icon:"error",title:i.msg}));case 7:n=(0,u.getTimeData)(1e3*i.data.sale_time),o=(0,u.getTimeData)(1e3*i.data.publish_time),i.data.sale_time1="".concat(n.mon,"月").concat(n.dd,"日").concat(n.hh,":").concat(n.MM),i.data.publish_time1="".concat(o.y,"-").concat(o.mon,"-").concat(o.dd),e.data=i.data,1===i.data.is_halt&&e.handSetTimeout(),a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](0),uni.showToast({icon:"error",title:a.t0.message});case 18:case"end":return a.stop()}}),a,null,[[0,15]])})))()},handSetTimeout:function(){var t=this;0===this.data.sale_status&&(this.statusTimer=setInterval((function(){var e=(new Date).getTime(),a=1e3*t.data.sale_time-e;if(a>0){var i=parseInt(a/1e3/60/60),n=parseInt(a/1e3/60%60),o=parseInt(a/1e3%60);i=i<10?"0"+i:i,n=n<10?"0"+n:n,o=o<10?"0"+o:o,t.countDown="距离开售 ".concat(i,"时").concat(n,"分").concat(o,"秒")}else t.getDetails(t.product_item_id),clearTimeout(t.statusTimer)}),1e3))},onCountChange:function(){this.count>100?(uni.showToast({icon:"none",title:"单次购买数量不可超过100张",duration:3e3}),this.count=100):this.count<1&&(this.count=1)},handMinus:function(){this.count>1&&this.count--},handPlus:function(){this.count<100&&this.count++},handShare:function(){if(!this.$store.state.user.token)return(0,u.goLogin)();uni.navigateTo({url:"/pages/poster/poster?product_item_id=".concat(this.product_item_id,"&product_type=2")})},handOrLogin:function(t){3===t?uni.showToast({title:"已停售，感谢您的关注",icon:"none"}):2===t?uni.showToast({title:"已售罄，感谢您的关注",icon:"none"}):0===t&&uni.showToast({title:"未开售",icon:"none"}),this.$store.state.user.token||(0,u.goLogin)()},handOrder:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.$store.state.user.token){e.next=3;break}return e.abrupt("return",(0,u.goLogin)());case 3:return e.next=5,t.$post(s.h5_conllections_buy_checkout,{product_item_id:t.product_item_id,buy_num:Number(t.count)});case 5:if(a=e.sent,0===a.code){e.next=14;break}if(710!==a.code){e.next=11;break}uni.navigateTo({url:"/pages/idAuth/idAuth"}),e.next=12;break;case 11:return e.abrupt("return",uni.showToast({title:a.msg,icon:"error"}));case 12:e.next=16;break;case 14:i=a.data.info,t.$store.state.user.inApp?(n=window.localStorage.getItem("AppConfigInfo"),n=n?JSON.parse(n):{"version-code":"1750"},Number(n["version-code"])>=1900?(o={page:"diskConfirmOrderPage",isNeedLogin:!0,params:i},(0,u.openAppPage)(o)):uni.showToast({title:"请更新到最新版本后重试",icon:"none"})):uni.navigateTo({url:"/pages/settlement/settlement?product_item_id=".concat(t.product_item_id,"&buy_num=").concat(t.count,"&params=").concat(JSON.stringify(i))});case 16:e.next=22;break;case 18:e.prev=18,e.t0=e["catch"](0),console.log("error",e.t0),uni.showToast({title:e.t0.message,icon:"error"});case 22:case"end":return e.stop()}}),e,null,[[0,18]])})))()},visitStatics:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.post1)(s.collections_index_visit,{product_item_id:t.product_item_id});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))()}},onLoad:function(t){console.log("onload",t),this.product_item_id=Number(t.product_item_id),this.share_sign=t.share_sign||"",this.getDetails(this.product_item_id),this.visitStatics()},onShow:function(){},created:function(){console.log("created")},beforeDestroy:function(){clearTimeout(this.statusTimer)}};e.default=d},"5af5":function(t,e,a){"use strict";a.r(e);var i=a("5585"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"88c9":function(t,e,a){var i=a("f1b7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("01425b27",i,!0,{sourceMap:!1,shadowMode:!1})},"9d3e":function(t,e){t.exports="data:image/png;base64,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"},b485:function(t,e,a){"use strict";a.r(e);var i=a("4b27"),n=a("5af5");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("3c1e");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"27897a3e",null,!1,i["a"],r);e["default"]=c.exports},f1b7:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */@-webkit-keyframes turning-data-v-27897a3e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes turning-data-v-27897a3e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.card[data-v-27897a3e]{background:#151516;border-radius:%?8?%;padding:%?36?% %?16?%}.card .card-body[data-v-27897a3e]{padding:%?20?%;background:transparent;border:%?0.5?% solid #5b5b5b;border-radius:%?8?%}.container[data-v-27897a3e]{padding:0 %?24?%}.container .preOrderDetails-header[data-v-27897a3e]{text-align:center;overflow:hidden}.container .preOrderDetails-header .cover[data-v-27897a3e]{margin:%?41?% auto 0 auto;text-align:center}.container .preOrderDetails-header .cover .cover-content[data-v-27897a3e]{position:relative;width:%?375?%;height:%?375?%;margin:auto}.container .preOrderDetails-header .cover .cover-content .cover-img[data-v-27897a3e]{width:%?375?%;height:%?375?%}.container .preOrderDetails-header .cover .cover-content .cover-turn[data-v-27897a3e]{z-index:1;position:absolute;top:%?24?%;left:%?24?%;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;width:%?327?%;height:%?327?%}.container .preOrderDetails-header .cover .cover-content .cover-turn1[data-v-27897a3e]{z-index:2;position:absolute;top:%?84.5?%;left:%?84.5?%;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;width:%?206?%;height:%?206?%;border-radius:%?103?%}.container .preOrderDetails-header .cover .cover-content .cover-play[data-v-27897a3e]{z-index:2;position:absolute;left:%?100.98?%;top:%?100.98?%;width:%?172.02?%;height:%?172.02?%;border-radius:%?86.01?%}.container .preOrderDetails-header .row1[data-v-27897a3e]{margin-top:%?25?%;font-weight:500;font-size:%?36?%;text-align:center;color:#ececec;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .preOrderDetails-header .row1 uni-image[data-v-27897a3e]{width:%?84?%;height:%?40?%;margin-right:%?4?%;vertical-align:middle}.container .preOrderDetails-header .row2[data-v-27897a3e]{margin-top:%?9?%;font-size:%?26?%;color:#aeaeae;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .preOrderDetails-header .row2 uni-text[data-v-27897a3e]{margin-left:%?16?%}.container .preOrderDetails-header .price[data-v-27897a3e]{margin-top:%?11?%;color:#d10910}.container .preOrderDetails-header .price .rmb[data-v-27897a3e]{font-size:%?28?%}.container .preOrderDetails-header .price .count[data-v-27897a3e]{font-size:%?36?%;margin-right:%?4?%;font-weight:600}.container .preOrderDetails-header .price .unit[data-v-27897a3e]{font-size:%?26?%}.container .preOrderDetails-body[data-v-27897a3e]{margin-top:%?16?%}.container .preOrderDetails-body .cardbox1 .row1[data-v-27897a3e]{height:%?44?%;margin-bottom:%?16?%;font-weight:600;font-size:%?32?%;line-height:%?44?%;color:#ac9147}.container .preOrderDetails-body .cardbox1 .row2 .row2-1[data-v-27897a3e]{display:flex;font-size:%?26?%;line-height:%?48?%;\n  /* identical to box height, or 185% */overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#aeaeae}.container .preOrderDetails-body .cardbox1 .row2 .row2-1 .row2-1-l[data-v-27897a3e]{margin-right:%?24?%;width:%?104?%;text-align:right}.container .preOrderDetails-body .cardbox1 .row2 .row2-1 .row2-1-r[data-v-27897a3e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .preOrderDetails-body .cardbox1 .row3[data-v-27897a3e]{margin-top:%?24?%;margin-bottom:%?16?%;font-weight:600;font-size:%?32?%;line-height:%?44?%;color:#ac9147}.container .preOrderDetails-body .cardbox1 .row4[data-v-27897a3e]{width:100%;font-size:%?26?%;line-height:%?36?%;color:#aeaeae;white-space:pre-wrap}.container .preOrderDetails-body .cardbox2[data-v-27897a3e]{margin-top:%?21?%;margin-bottom:%?25?%}.container .preOrderDetails-body .cardbox2 .work .row1[data-v-27897a3e]{margin-bottom:%?16?%;font-weight:600;font-size:%?32?%;line-height:%?44?%;color:#ac9147;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .preOrderDetails-body .cardbox2 .work .row2[data-v-27897a3e]{padding-bottom:%?24?%;font-size:%?26?%;line-height:%?36?%;color:#aeaeae;white-space:pre-wrap}.container .preOrderDetails-body .cardbox2 .work .row2[data-v-27897a3e]:nth-last-child(1){padding-bottom:%?24?%}.container .h120[data-v-27897a3e]{height:%?120?%}.container .preOrderDetails-footer[data-v-27897a3e]{z-index:8;position:fixed;bottom:0;left:0;display:flex;align-items:center;justify-content:flex-end;width:100%;height:%?120?%;background-color:#151516}.container .preOrderDetails-footer .abs[data-v-27897a3e]{position:absolute;top:%?26?%;left:%?58?%;width:%?50?%;display:flex;flex-direction:column;justify-content:center;align-items:center}.container .preOrderDetails-footer .abs .abs-img[data-v-27897a3e]{width:%?42?%;height:%?42?%}.container .preOrderDetails-footer .abs .abs-text[data-v-27897a3e]{font-family:PingFang SC;font-style:normal;font-weight:400;padding-top:%?2?%;font-size:%?22?%;-webkit-transform:scale(.95);transform:scale(.95);color:#ececec}.container .preOrderDetails-footer .abs:active .abs-text[data-v-27897a3e]{color:#868686}.container .preOrderDetails-footer .footer-btn[data-v-27897a3e]{width:%?524?%;height:%?73?%;margin-right:%?40?%;line-height:%?73?%;text-align:center;background:#d10910;border-radius:%?48?%;font-weight:500;font-size:%?32?%;color:#ececec}.container .preOrderDetails-footer .footer-btn[data-v-27897a3e]:active{background-color:rgba(209,9,16,.6);color:#868686}.container .preOrderDetails-footer .noactive[data-v-27897a3e]{background:#d10910!important;color:#ececec!important}.container .preOrderDetails-footer .gray-btn[data-v-27897a3e]{background:#7c7c7c}.container .preOrderDetails-footer .gray-btn[data-v-27897a3e]:active{background:#7c7c7c;color:#ececec}.container[data-v-27897a3e] .icon-close{font-size:%?36?%}.container[data-v-27897a3e] .wyb-popup-box{z-index:998!important}.container[data-v-27897a3e] .wyb-popup-mask{z-index:997!important}.container .popup-content .popup-i[data-v-27897a3e]{position:relative;display:flex;padding-top:%?24?%;padding-left:%?28?%}.container .popup-content .popup-i .i-img[data-v-27897a3e]{position:relative;width:%?148?%;height:%?148?%}.container .popup-content .popup-i .i-img uni-image[data-v-27897a3e]{width:100%;height:100%;border-radius:%?20?%}.container .popup-content .popup-i .i-img .img-line[data-v-27897a3e]{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:%?135?%;height:%?135?%;border:%?0.6?% solid hsla(0,0%,100%,.2);border-radius:%?20?%;background-color:initial}.container .popup-content .popup-i .i-title[data-v-27897a3e]{flex:1;padding-top:%?4?%}.container .popup-content .popup-i .i-title .title-t[data-v-27897a3e]{margin-left:%?24?%;font-weight:500;font-size:%?32?%;line-height:%?44?%;color:#ececec;padding-bottom:%?20?%;width:%?480?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .popup-content .popup-i .i-title .title-p[data-v-27897a3e]{display:inline-block;margin-left:%?16?%;padding:%?10?% %?16?%;font-size:%?24?%;background:rgba(220,45,30,.2);mix-blend-mode:normal;border-radius:22px;color:#dc2d1e;color:#d10910}.container .popup-content .popup-i .i-title .title-p .title-p-rmb[data-v-27897a3e]{padding-left:%?4?%;font-weight:600;font-size:%?28?%;color:#d10910;-webkit-transform:rotate(-.39deg);transform:rotate(-.39deg)}.container .popup-content .popup-f[data-v-27897a3e]{display:flex;align-items:center;padding:%?26?% %?40?% %?44?% %?40?%}.container .popup-content .popup-f .popup-f-img[data-v-27897a3e]{width:%?40?%;height:%?40?%}.container .popup-content .popup-f uni-text[data-v-27897a3e]{font-size:%?28?%;color:#aeaeae;margin-left:%?16?%}.container .popup-content .popup-count[data-v-27897a3e]{display:flex;align-items:center;justify-content:space-between;padding:0 %?32?% %?24?% %?40?%;color:#ececec;font-size:%?28?%}.container .popup-content .popup-count .number-count[data-v-27897a3e]{display:flex;align-items:center;box-sizing:border-box;width:%?194?%;height:%?60?%;border-radius:%?16?%;border:%?1?% solid #686868}.container .popup-content .popup-count .number-count .minus[data-v-27897a3e]{box-sizing:border-box;width:%?62?%;height:%?58?%;font-size:%?32?%;border-right:%?1?% solid #686868}.container .popup-content .popup-count .number-count .minus .minus-img[data-v-27897a3e]{position:relative;width:%?62?%;height:%?58?%;border-radius:%?16?% 0 0 %?16?%}.container .popup-content .popup-count .number-count .minus .minus-img .h[data-v-27897a3e]{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:%?32?%;height:%?2?%;background-color:#686868}.container .popup-content .popup-count .number-count uni-input.countc[data-v-27897a3e]{flex:1;height:%?58?%;text-align:center;font-size:%?36?%;font-weight:600;color:#d10910}.container .popup-content .popup-count .number-count .plus[data-v-27897a3e]{display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:%?62?%;height:%?58?%;font-size:%?32?%;border-left:%?1?% solid #686868}.container .popup-content .popup-count .number-count .plus .plus-img[data-v-27897a3e]{position:relative;width:%?62?%;height:%?58?%;border-radius:0 %?16?% %?16?% 0}.container .popup-content .popup-count .number-count .plus .plus-img .h[data-v-27897a3e]{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:%?32?%;height:%?2?%;background-color:#686868}.container .popup-content .popup-count .number-count .plus .plus-img .v[data-v-27897a3e]{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:%?2?%;height:%?32?%;background-color:#686868}.container .popup-content .popup-count .number-count .active-icon[data-v-27897a3e]{background-color:#e8e8e8!important}.container .popup-content .popup-e[data-v-27897a3e]{padding-top:%?24?%;padding:0 %?32?% %?64?% %?40?%;display:flex;align-items:center;justify-content:space-between}.container .popup-content .popup-e .e-text[data-v-27897a3e]{color:#ececec;font-size:%?28?%}.container .popup-content .popup-e .e-price[data-v-27897a3e]{color:#d10910}.container .popup-content .popup-e .e-price .rmb[data-v-27897a3e]{font-size:%?28?%}.container .popup-content .popup-e .e-price .count[data-v-27897a3e]{font-size:%?40?%;font-weight:600}.container .popup-content .popup-d[data-v-27897a3e]{text-align:center}.container .popup-content .popup-d .d-btn[data-v-27897a3e]{display:flex;align-items:center;justify-content:center;line-height:0;margin:auto;width:%?474?%;height:%?96?%;background:#d10910;border-radius:%?90?%;font-weight:500;font-size:%?32?%;color:#ececec}.container .popup-content .popup-d .d-btn[data-v-27897a3e]:active{background-color:rgba(209,9,16,.6);color:#868686}.container .popup-content .popup-c[data-v-27897a3e]{padding-top:%?20?%;font-size:%?22?%;line-height:%?30?%;text-align:center;color:#666}',""]),t.exports=e}}]);