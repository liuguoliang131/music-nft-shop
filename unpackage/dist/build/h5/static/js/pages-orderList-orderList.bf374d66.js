(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-orderList-orderList"],{"0057":function(t,e,i){t.exports=i.p+"static/img/SR.79d31795.png"},"0c15":function(t,e,i){"use strict";i.r(e);var a=i("8a63"),n=i("85a0");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("a408");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"45e8b540",null,!1,a["a"],r);e["default"]=d.exports},"0f5e":function(t,e,i){var a=i("a847");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("71754fcd",a,!0,{sourceMap:!1,shadowMode:!1})},"1da9":function(t,e,i){var a=i("ffd6");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3ec70cc6",a,!0,{sourceMap:!1,shadowMode:!1})},"21de":function(t,e,i){"use strict";i("c740"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"myTab",props:{slide:{default:!0,description:"是否让横向滑动"},list:{default:function(){return[]},type:Array},activeBar:{type:Number,required:!0}},data:function(){return{}},watch:{activeBar:{handler:function(t){var e=this.list.findIndex((function(e,i){return e.id===t}));this.$refs.contentBlock.$el.style.left=-e*this.$refs.myTab.$el.offsetWidth+"px"}}},methods:{init:function(){console.log(this.$refs.myTab)},handActive:function(t){this.$emit("active",t.id)}}};e.default=a},2649:function(t,e,i){"use strict";i.r(e);var a=i("6a03"),n=i("bedf");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("a619");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"375d630a",null,!1,a["a"],r);e["default"]=d.exports},"6a03":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{ref:"myTab",staticClass:"mytab"},[i("v-uni-view",{class:[t.slide?"tab-window":"noSlide"]},[i("v-uni-view",{staticClass:"bar"},t._l(t.list,(function(e){return i("v-uni-view",{key:e.id,class:["bar-item",t.activeBar===e.id?"bar-active":""],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handActive(e)}}},[t._v(t._s(e.name)),i("v-uni-view",{staticClass:"line"})],1)})),1)],1),i("v-uni-view",{staticClass:"content-widow"},[i("v-uni-view",{ref:"contentBlock",staticClass:"content-block"},t._l(t.list,(function(e){return i("v-uni-view",{key:e.id,staticClass:"content-item"},[t._t("item",null,{data:e})],2)})),1)],1)],1)},o=[]},"85a0":function(t,e,i){"use strict";i.r(e);var a=i("f0e3"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"8a63":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container order"},[a("nav-head",{attrs:{title:"我的订单"}}),a("my-tab",{attrs:{list:t.tabList,activeBar:t.activeBar,slide:!1},on:{active:function(e){arguments[0]=e=t.$handleEvent(e),t.handActive.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"order-nav"},t._l(t.navList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"order-nav-item",class:i===t.activeNav?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickNavItem(i)}}},[t._v(t._s(e))])})),1),t.isFinish&&0===t.list.length?a("v-uni-view",{class:["empty"]},[a("v-uni-view",{staticClass:"empty-center"},[a("v-uni-image",{staticClass:"empty-img",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/empty-icon.png",mode:""}}),a("v-uni-view",{staticClass:"empty-text"},[t._v("还没有相关订单")])],1)],1):a("my-scroll",{class:["scroll-box"],attrs:{isFinish:t.isFinish,loading:t.loading},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.getList.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return a("v-uni-view",{key:n,staticClass:"order-body-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleGoToDetail(e,t.activeBar)}}},[a("v-uni-view",{staticClass:"order-body-item-imageBox"},[a("v-uni-view",{staticClass:"order-body-item-imageBox-image",style:"background-image:url("+(e.index_img||e.music_pic)+")"}),e.rare_type?a("v-uni-view",{staticClass:"order-body-item-imageBox-level"},["SSR"===e.rare_type?a("v-uni-image",{attrs:{src:"https://file.yuanyinfu.com/front-end-lib/SSR.png",mode:""}}):"UR"===e.rare_type?a("v-uni-image",{attrs:{src:"https://file.yuanyinfu.com/front-end-lib/UR.png",mode:""}}):"R"===e.rare_type?a("v-uni-image",{attrs:{src:"https://file.yuanyinfu.com/front-end-lib/R.png",mode:""}}):"N"===e.rare_type?a("v-uni-image",{attrs:{src:"https://file.yuanyinfu.com/front-end-lib/N.png",mode:""}}):"SR"===e.rare_type?a("v-uni-image",{attrs:{src:i("0057"),mode:""}}):t._e()],1):t._e()],1),a("v-uni-view",{staticClass:"order-body-item-box"},[a("v-uni-view",{staticClass:"order-body-item-box-flex"},[a("v-uni-view",{staticClass:"order-body-item-title"},[t._v(t._s(e.name||e.music_name))]),a("v-uni-view",{staticClass:"order-body-item-type",staticStyle:{color:"#D10910","font-size":"28rpx","font-weight":"500"}},[t._v(t._s(t._f("filterStatus")(e.pay_status))),a("v-uni-text",{staticClass:"cuIcon-right"})],1)],1),a("v-uni-view",{staticClass:"order-body-item-box-flex"},[a("v-uni-view",{staticClass:"order-body-item-tag"},[t._v("包含"+t._s(e.singles_num||"1")+"首单曲")]),a("v-uni-view",{staticClass:"order-body-item-type",staticStyle:{"margin-top":"16rpx"}},[t._v("￥"+t._s(e.buy_price||e.order_price))])],1),a("v-uni-view",{staticClass:"order-body-item-box-flex"},[a("v-uni-view",{staticClass:"order-body-item-price",staticStyle:{"margin-left":"auto",color:"#666","font-size":"20rpx"}},[t._v("× "+t._s(e.buy_num||"1"))])],1),a("v-uni-view",{staticClass:"order-body-item-box-flex"},[a("v-uni-view",{staticClass:"order-body-item-price",staticStyle:{"margin-left":"auto",color:"#fff","margin-top":"10rpx"}},[t._v("实付金额 ￥"+t._s(e.order_price))])],1),0===e.pay_status?a("v-uni-view",{staticClass:"order-body-item-box-flex",staticStyle:{"margin-top":"20rpx"}},[a("v-uni-view",{staticStyle:{display:"flex","align-items":"center","margin-left":"auto","margin-top":"8rpx"}},[a("v-uni-button",{staticClass:"my-btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.handleClickCancle(e)}}},[t._v("取消订单")]),a("v-uni-button",{staticClass:"my-btn",staticStyle:{"border-color":"#C9A43D",color:"#C9A43D","margin-left":"10rpx"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.handleGoCashier(e)}}},[t._v("去支付")])],1)],1):t._e()],1)],1)})),1)],1)},o=[]},a408:function(t,e,i){"use strict";var a=i("1da9"),n=i.n(a);n.a},a619:function(t,e,i){"use strict";var a=i("0f5e"),n=i.n(a);n.a},a847:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.mytab[data-v-375d630a]{width:%?750?%}.mytab .tab-window[data-v-375d630a]{width:%?750?%;height:%?80?%;display:-webkit-box;overflow-x:scroll}.mytab .tab-window[data-v-375d630a]::-webkit-scrollbar{display:none}.mytab .tab-window .bar[data-v-375d630a]{height:100%;display:flex;align-items:center}.mytab .tab-window .bar .bar-item[data-v-375d630a]{position:relative;height:100%;width:%?187.5?%;display:flex;align-items:center;justify-content:center;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?28?%;color:#aeaeae;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.mytab .tab-window .bar .bar-item .line[data-v-375d630a]{position:absolute;bottom:%?0?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);width:%?60?%;height:%?6?%;border-radius:%?2?%;opacity:0;background-color:#c8a964;transition:all .5s}.mytab .tab-window .bar .bar-active[data-v-375d630a]{color:#c8a964;font-weight:600}.mytab .tab-window .bar .bar-active .line[data-v-375d630a]{opacity:1}.mytab .noSlide[data-v-375d630a]{width:%?750?%;height:%?80?%}.mytab .noSlide .bar[data-v-375d630a]{box-sizing:border-box;width:100%;height:100%;display:flex;align-items:center;justify-content:space-between}.mytab .noSlide .bar .bar-item[data-v-375d630a]{position:relative;height:100%;max-width:%?187.5?%;display:flex;align-items:center;justify-content:center;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?28?%;color:#aeaeae;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.mytab .noSlide .bar .bar-item .line[data-v-375d630a]{position:absolute;bottom:%?0?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);width:%?60?%;height:%?6?%;border-radius:%?3?%;opacity:0;background-color:#c8a964;transition:all .5s}.mytab .noSlide .bar .bar-active[data-v-375d630a]{color:#c8a964;font-weight:600}.mytab .noSlide .bar .bar-active .line[data-v-375d630a]{opacity:1}.mytab .content-widow[data-v-375d630a]{width:%?750?%;position:relative}.mytab .content-widow .content-block[data-v-375d630a]{position:absolute;top:0;left:0;width:%?750?%;display:flex;transition:all .5s}.mytab .content-widow .content-block .content-item[data-v-375d630a]{width:100%}',""]),t.exports=e},bedf:function(t,e,i){"use strict";i.r(e);var a=i("21de"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},f0e3:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("ade3")),o=a(i("2909"));i("96cf");var r=a(i("1da1")),s=a(i("2649")),d=a(i("465b")),l=a(i("adff")),c=i("173f"),u=i("df47"),v=i("1a64"),f={components:{MyTab:s.default,MyScroll:d.default,NavHead:l.default},data:function(){return{tabList:[{name:"黄金单曲",id:1,activeNav:0,isFinish:!1,loading:!1,page:1,list:[]},{name:"黄金专辑",id:2,activeNav:0,isFinish:!1,loading:!1,page:1,list:[]},{name:"数字音乐",id:3,activeNav:0,isFinish:!1,loading:!1,page:1,list:[]}],activeBar:1,navList:["全部","待支付","已取消","已完成"],activeNav:0,isFinish:!1,loading:!1,page:1,list:[]}},created:function(){},onLoad:function(){console.log("onload")},filters:{filterStatus:function(t){var e={0:"待支付",1:"已完成",2:"已取消",3:"已取消",4:"已取消",5:"已取消"};return e[t]}},methods:{initParams:function(){this.page=1,this.list=[],this.isFinish=!1,this.loading=!1},handActive:function(t){if(this.activeBar===t)return!1;this.activeBar=t,this.initParams(),this.getList()},getList:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var i,a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=null,a=null,4===e.activeBar?(i=c.order_list,n=["","create","cancel","pay"],a={page:e.page++,type:n[e.activeNav]}):(i=c.order_collectionsList,a={page:e.page++,order_type:e.activeNav,product_type:e.activeBar}),t.prev=3,e.loading=!0,t.next=7,(0,v.post1)(i,a);case 7:if(r=t.sent,0===r.code){t.next=12;break}return e.isFinish=!0,e.loading=!1,t.abrupt("return",uni.showToast({title:r.msg,icon:"none"}));case 12:r.data.list&&Array.isArray(r.data.list)&&r.data.list.length?1===e.page?e.list=r.data.list:e.list=[].concat((0,o.default)(e.list),(0,o.default)(r.data.list)):(e.isFinish=!0,e.page=e.page-1),e.loading=!1,t.next=22;break;case 16:throw t.prev=16,t.t0=t["catch"](3),e.isFinish=!0,e.loading=!1,uni.showToast({title:t.t0.message,icon:"none"}),t.t0;case 22:case"end":return t.stop()}}),t,null,[[3,16]])})))()},handleClickNavItem:function(t){if(this.activeNav===t)return!1;this.activeNav=t,this.initParams(),this.getList()},handleGoToDetail:function(t,e){var i="/pages/orderDetail/orderDetail?id=".concat(t.order_id,"&product_type=").concat(e);uni.navigateTo({url:i})},handleClickCancle:function(t){var e;uni.showModal((e={title:"提示",confirmColor:"确认取消",cancelText:"返回"},(0,n.default)(e,"confirmColor","#DC2D1E"),(0,n.default)(e,"content","是否确认取消订单？"),(0,n.default)(e,"cancelColor","#999999"),(0,n.default)(e,"success",(function(e){e.confirm&&(0,v.post)(c.h5_order_cancle,{order_id:t.order_id}).then((function(t){uni.showToast({title:"取消成功"})}))})),e))},handleGoCashier:function(t){if(this.$store.state.user.inApp)(0,u.openAppPage)({page:"diskConfirmOrderPage",isNeedLogin:!0,params:t});else{var e="/pages/cashier/cashier?product_item_id=".concat(t.product_item_id,"&order_no=").concat(t.order_no,"&order_price=").concat(t.order_total_price,"&order_id=").concat(t.order_id);uni.navigateTo({url:e})}}}};e.default=f},ffd6:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.order[data-v-45e8b540]{padding:0;max-height:100vh}.order[data-v-45e8b540] .bar{padding:0 %?80?%}.order-nav[data-v-45e8b540]{box-sizing:border-box;width:%?750?%;height:%?60?%;padding:0 %?20?%;display:flex;align-items:center;justify-content:space-around;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?60?%;\n  /* identical to box height, or 200% */text-align:center;color:#777}.order-nav-item[data-v-45e8b540]{text-align:center}.order-nav-item.active[data-v-45e8b540]{color:#c8a964}.order .empty[data-v-45e8b540]{position:relative;box-sizing:border-box;padding:0 %?32?% %?32?% %?32?%;height:calc(100vh - %?228?%);text-align:center;overflow:hidden;padding-top:%?300?%}.order .empty .empty-center .empty-img[data-v-45e8b540]{width:%?120?%;height:%?120?%}.order .empty .empty-center .empty-text[data-v-45e8b540]{margin-top:%?44?%;font-size:%?24?%;line-height:%?34?%;\n  /* identical to box height */text-align:center;color:#cdcdcd}.order .scroll-box[data-v-45e8b540]{width:%?750?%;height:calc(100vh - %?228?%)}.order .h5-scroll[data-v-45e8b540]{height:calc(100vh - %?80?%)}.order-body[data-v-45e8b540]{padding-top:%?20?%;width:%?750?%}.order-body-item[data-v-45e8b540]{padding:%?20?% %?40?%;display:flex;align-items:flex-start;border-bottom:1px solid #343434}.order-body-item-imageBox[data-v-45e8b540]{width:%?140?%;height:%?140?%;position:relative}.order-body-item-imageBox-image[data-v-45e8b540]{width:100%;height:100%;border-radius:%?24?%;background-size:cover;background-position:50%;background-repeat:no-repeat}.order-body-item-imageBox-level[data-v-45e8b540]{position:absolute;top:0;left:0;width:%?84?%;height:%?40?%}.order-body-item-imageBox-level uni-image[data-v-45e8b540]{width:100%;height:100%}.order-body-item-box[data-v-45e8b540]{display:flex;align-items:flex-start;flex-direction:column;justify-content:space-between;font-size:%?24?%;height:80%;padding-left:%?20?%;color:#8a8a8a;flex:auto}.order-body-item-box-flex[data-v-45e8b540]{display:flex;align-items:center;justify-content:space-between;width:100%}.order-body-item-title[data-v-45e8b540]{color:#fff;font-size:%?28?%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:calc(100vw - %?400?%)}.order .my-btn[data-v-45e8b540]{border:none;height:%?50?%;border-radius:%?50?%;padding:0 %?40?%;line-height:%?50?%;font-size:%?24?%;background-color:#0d0d0d;color:#aeaeae;border:%?1?% solid #666;display:flex;align-items:center;justify-content:center;font-weight:500}.center[data-v-45e8b540]{width:100%;height:%?200?%;display:flex;align-items:center;justify-content:center;font-size:%?28?%;color:#666}',""]),t.exports=e}}]);