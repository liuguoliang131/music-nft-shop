(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-orderList-orderList"],{"0c15":function(t,e,i){"use strict";i.r(e);var a=i("e88a"),n=i("85a0");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("921a");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"2a290d31",null,!1,a["a"],void 0);e["default"]=s.exports},"0f5e":function(t,e,i){var a=i("a847");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("71754fcd",a,!0,{sourceMap:!1,shadowMode:!1})},1248:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.order[data-v-2a290d31]{padding:0;max-height:100vh}.order[data-v-2a290d31] .bar{padding:0 %?80?%}.order-nav[data-v-2a290d31]{box-sizing:border-box;width:%?750?%;height:%?70?%;padding:0 %?20?%;display:flex;align-items:center;justify-content:space-around}.order-nav-item[data-v-2a290d31]{font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?60?%;\n  /* identical to box height, or 200% */text-align:center;color:#777;height:%?60?%;padding-top:%?10?%}.order-nav-item.active[data-v-2a290d31]{color:#c8a964}.order .empty[data-v-2a290d31]{position:relative;box-sizing:border-box;padding:0 %?32?% %?32?% %?32?%;height:calc(100vh - %?238?%);text-align:center;overflow:hidden;padding-top:%?300?%}.order .empty .empty-center .empty-img[data-v-2a290d31]{width:%?120?%;height:%?120?%}.order .empty .empty-center .empty-text[data-v-2a290d31]{margin-top:%?44?%;font-size:%?24?%;line-height:%?34?%;\n  /* identical to box height */text-align:center;color:#cdcdcd}.order .scroll-box[data-v-2a290d31]{width:%?750?%}.order .splitline[data-v-2a290d31]{width:%?542?%;height:1px;background-color:#343434;position:relative;left:%?208?%}.order .hasbox:nth-last-child(1) .splitline[data-v-2a290d31]{visibility:hidden}.order-body[data-v-2a290d31]{padding-top:%?20?%;width:%?750?%}.order-body-item[data-v-2a290d31]{padding:%?20?% %?40?%;display:flex;align-items:flex-start}.order-body-item-imageBox[data-v-2a290d31]{width:%?140?%;height:%?140?%;position:relative}.order-body-item-imageBox-image[data-v-2a290d31]{width:100%;height:100%;border-radius:%?24?%;background-size:cover;background-position:50%;background-repeat:no-repeat}.order-body-item-imageBox-level[data-v-2a290d31]{position:absolute;top:0;left:0;width:%?84?%;height:%?40?%}.order-body-item-imageBox-level uni-image[data-v-2a290d31]{width:100%;height:100%}.order-body-item-box[data-v-2a290d31]{display:flex;align-items:flex-start;flex-direction:column;justify-content:space-between;font-size:%?24?%;height:80%;padding-left:%?20?%;color:#8a8a8a;flex:auto}.order-body-item-box-flex[data-v-2a290d31]{display:flex;align-items:center;justify-content:space-between;width:100%}.order-body-item-title[data-v-2a290d31]{color:#fff;font-size:%?28?%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:calc(100vw - %?400?%)}.order .my-btn[data-v-2a290d31]{width:%?156?%;height:%?48?%;line-height:%?50?%;border-radius:%?24?%;font-family:PingFang SC;font-style:normal;font-weight:500;font-size:%?24?%;border:%?1?% solid #c8a964;text-align:center;color:#c8a964;display:flex;align-items:center;justify-content:center;background-color:initial}.order .cancel-my-btn[data-v-2a290d31]{border:%?1?% solid #aeaeae;color:#aeaeae;margin-right:%?20?%}.center[data-v-2a290d31]{width:100%;height:%?200?%;display:flex;align-items:center;justify-content:center;font-size:%?28?%;color:#666}',""]),t.exports=e},"21de":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("c740");var a={name:"myTab",props:{slide:{default:!0,description:"是否让横向滑动"},list:{default:function(){return[]},type:Array},activeBar:{type:Number,required:!0}},data:function(){return{}},watch:{activeBar:{handler:function(t){var e=this.list.findIndex((function(e,i){return e.id===t}));this.$refs.contentBlock.$el.style.left=-e*this.$refs.myTab.$el.offsetWidth+"px"}}},methods:{init:function(){},handActive:function(t){this.$emit("active",t.id)}}};e.default=a},2649:function(t,e,i){"use strict";i.r(e);var a=i("6a03"),n=i("bedf");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("a619");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"375d630a",null,!1,a["a"],void 0);e["default"]=s.exports},2909:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,a.default)(t)||(0,n.default)(t)||(0,o.default)(t)||(0,r.default)()};var a=s(i("6005")),n=s(i("db90")),o=s(i("06c5")),r=s(i("3427"));function s(t){return t&&t.__esModule?t:{default:t}}},3427:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},i("d9e2"),i("d401")},"465b":function(t,e,i){"use strict";i.r(e);var a=i("c833"),n=i("901b");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("7c40");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"2435f82c",null,!1,a["a"],void 0);e["default"]=s.exports},6005:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,a.default)(t)};var a=function(t){return t&&t.__esModule?t:{default:t}}(i("6b75"))},"6a03":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{ref:"myTab",staticClass:"mytab"},[i("v-uni-view",{class:[t.slide?"tab-window":"noSlide"]},[i("v-uni-view",{staticClass:"bar"},t._l(t.list,(function(e){return i("v-uni-view",{key:e.id,class:["bar-item",t.activeBar===e.id?"bar-active":""],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handActive(e)}}},[t._v(t._s(e.name)),i("v-uni-view",{staticClass:"line"})],1)})),1)],1),i("v-uni-view",{staticClass:"content-widow"},[i("v-uni-view",{ref:"contentBlock",staticClass:"content-block"},t._l(t.list,(function(e){return i("v-uni-view",{key:e.id,staticClass:"content-item"},[t._t("item",null,{data:e})],2)})),1)],1)],1)},n=[]},7296:function(t,e,i){var a=i("da68");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("725139bf",a,!0,{sourceMap:!1,shadowMode:!1})},"7c40":function(t,e,i){"use strict";var a=i("7296"),n=i.n(a);n.a},"85a0":function(t,e,i){"use strict";i.r(e);var a=i("f0e3"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"901b":function(t,e,i){"use strict";i.r(e);var a=i("9cc3"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"921a":function(t,e,i){"use strict";var a=i("dc96"),n=i.n(a);n.a},"9cc3":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"myScroll",data:function(){return{scrollTop:0}},props:{isFinish:{default:!1},loading:{default:!1},data:{type:Object,description:"和myTab组件组合使用，接收每个tab的list"}},methods:{scroll:function(t){this.scrollTop=this.$refs.window.$el.scrollTop,this.$refs.scroll.$el.scrollHeight-this.$refs.window.$el.scrollTop<=this.$refs.window.$el.clientHeight+10&&this.onload()},onload:function(){!1===this.isFinish&&(this.loading||this.$emit("load",this.data))},notFull:function(){this.$refs.scroll.$el.scrollHeight<this.$refs.window.$el.clientHeight&&this.onload()}},mounted:function(){this.notFull()},created:function(){},updated:function(){!1===this.loading&&this.notFull()},activated:function(){this.$refs.window.$el.scrollTop=this.scrollTop}};e.default=a},a619:function(t,e,i){"use strict";var a=i("0f5e"),n=i.n(a);n.a},a847:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.mytab[data-v-375d630a]{width:%?750?%}.mytab .tab-window[data-v-375d630a]{width:%?750?%;height:%?80?%;display:-webkit-box;overflow-x:scroll}.mytab .tab-window[data-v-375d630a]::-webkit-scrollbar{display:none}.mytab .tab-window .bar[data-v-375d630a]{height:100%;display:flex;align-items:center}.mytab .tab-window .bar .bar-item[data-v-375d630a]{position:relative;height:100%;width:%?187.5?%;display:flex;align-items:center;justify-content:center;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?28?%;color:#aeaeae;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.mytab .tab-window .bar .bar-item .line[data-v-375d630a]{position:absolute;bottom:%?0?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);width:%?60?%;height:%?6?%;border-radius:%?2?%;opacity:0;background-color:#c8a964;transition:all .5s}.mytab .tab-window .bar .bar-active[data-v-375d630a]{color:#c8a964;font-weight:600}.mytab .tab-window .bar .bar-active .line[data-v-375d630a]{opacity:1}.mytab .noSlide[data-v-375d630a]{width:%?750?%;height:%?80?%}.mytab .noSlide .bar[data-v-375d630a]{box-sizing:border-box;width:100%;height:100%;display:flex;align-items:center;justify-content:space-between}.mytab .noSlide .bar .bar-item[data-v-375d630a]{position:relative;height:100%;max-width:%?187.5?%;display:flex;align-items:center;justify-content:center;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?28?%;color:#aeaeae;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.mytab .noSlide .bar .bar-item .line[data-v-375d630a]{position:absolute;bottom:%?0?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);width:%?60?%;height:%?6?%;border-radius:%?3?%;opacity:0;background-color:#c8a964;transition:all .5s}.mytab .noSlide .bar .bar-active[data-v-375d630a]{color:#c8a964;font-weight:600}.mytab .noSlide .bar .bar-active .line[data-v-375d630a]{opacity:1}.mytab .content-widow[data-v-375d630a]{width:%?750?%;position:relative}.mytab .content-widow .content-block[data-v-375d630a]{position:absolute;top:0;left:0;width:%?750?%;display:flex;transition:all .5s}.mytab .content-widow .content-block .content-item[data-v-375d630a]{width:100%}',""]),t.exports=e},bedf:function(t,e,i){"use strict";i.r(e);var a=i("21de"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},c833:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{ref:"window",staticClass:"window",style:{height:this.$store.state.publicState.remainingHeight},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[i("v-uni-view",{ref:"scroll",staticClass:"scroll"},[t._t("default",null,{data:t.data}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isFinish,expression:"isFinish"}],staticClass:"noMore"},[t._v("没有更多了")]),i("v-uni-view",{staticClass:"footer"})],2)],1)},n=[]},da68:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.window[data-v-2435f82c]{position:relative;height:100vh;overflow-y:scroll}.scroll[data-v-2435f82c]{width:100%}.scroll .loading[data-v-2435f82c]{display:flex;align-items:center;justify-content:center;width:100%;height:%?60?%;font-size:%?24?%;color:#aeaeae}.scroll .noMore[data-v-2435f82c]{display:flex;align-items:center;justify-content:center;width:100%;height:%?60?%;font-size:%?24?%;color:#aeaeae}',""]),t.exports=e},db90:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630")},dc96:function(t,e,i){var a=i("1248");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("65a120e2",a,!0,{sourceMap:!1,shadowMode:!1})},e88a:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container order"},[i("nav-head",{attrs:{title:"我的订单",otherHeight:"140rpx",useSelfBack:!0},on:{navBack:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBack.apply(void 0,arguments)}}}),i("my-tab",{attrs:{list:t.tabList,activeBar:t.activeBar,slide:!1},on:{active:function(e){arguments[0]=e=t.$handleEvent(e),t.handActive.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"order-nav"},t._l(t.navList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"order-nav-item",class:a===t.activeNav?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickNavItem(a)}}},[t._v(t._s(e))])})),1),t.isFinish&&0===t.list.length?i("v-uni-view",{class:["empty"],style:{height:t.$store.state.publicState.remainingHeight}},[i("v-uni-view",{staticClass:"empty-center"},[i("v-uni-image",{staticClass:"empty-img",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/empty-icon.png",mode:""}}),i("v-uni-view",{staticClass:"empty-text"},[t._v("还没有相关订单")])],1)],1):i("my-scroll",{class:["scroll-box"],attrs:{isFinish:t.isFinish,loading:t.loading},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.getList.apply(void 0,arguments)}}},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"hasbox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleGoToDetail(e,t.activeBar)}}},[i("v-uni-view",{staticClass:"order-body-item"},[i("v-uni-view",{staticClass:"order-body-item-imageBox"},[i("v-uni-view",{staticClass:"order-body-item-imageBox-image",style:"background-image:url("+(e.index_img||e.music_pic)+")"}),e.rare_type?i("v-uni-view",{staticClass:"order-body-item-imageBox-level"},["SSR"===e.rare_type?i("v-uni-image",{attrs:{src:"https://file.yuanyinfu.com/front-end-lib/SSR.png",mode:""}}):"UR"===e.rare_type?i("v-uni-image",{attrs:{src:"https://file.yuanyinfu.com/front-end-lib/UR.png",mode:""}}):"R"===e.rare_type?i("v-uni-image",{attrs:{src:"https://file.yuanyinfu.com/front-end-lib/R.png",mode:""}}):"SR"===e.rare_type?i("v-uni-image",{attrs:{src:"https://file.yuanyinfu.com/front-end-lib/SR.png",mode:""}}):t._e()],1):t._e()],1),i("v-uni-view",{staticClass:"order-body-item-box"},[i("v-uni-view",{staticClass:"order-body-item-box-flex"},[i("v-uni-view",{staticClass:"order-body-item-title"},[t._v(t._s(e.name||e.music_name))]),i("v-uni-view",{staticClass:"order-body-item-type",staticStyle:{color:"#D10910","font-size":"28rpx","font-weight":"500"}},[t._v(t._s(t._f("filterStatus")(e.pay_status))),i("v-uni-text",{staticClass:"cuIcon-right"})],1)],1),i("v-uni-view",{staticClass:"order-body-item-box-flex"},[i("v-uni-view",{staticClass:"order-body-item-tag"},[t._v("包含"+t._s(e.singles_num||"1")+"首单曲")]),i("v-uni-view",{staticClass:"order-body-item-type",staticStyle:{"margin-top":"16rpx"}},[t._v("￥"+t._s(e.buy_price||e.order_price))])],1),i("v-uni-view",{staticClass:"order-body-item-box-flex"},[i("v-uni-view",{staticClass:"order-body-item-price",staticStyle:{"margin-left":"auto",color:"#666","font-size":"20rpx"}},[t._v("× "+t._s(e.buy_num||"1"))])],1),i("v-uni-view",{staticClass:"order-body-item-box-flex"},[i("v-uni-view",{staticClass:"order-body-item-price",staticStyle:{"margin-left":"auto",color:"#fff","margin-top":"10rpx"}},[t._v("实付金额 ￥"+t._s(e.order_price))])],1),0===e.pay_status?i("v-uni-view",{staticClass:"order-body-item-box-flex",staticStyle:{"margin-top":"20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","margin-left":"auto","margin-top":"8rpx"}},[i("v-uni-button",{staticClass:"my-btn cancel-my-btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.handleClickCancle(e)}}},[t._v("取消订单")]),i("v-uni-button",{staticClass:"my-btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.handleGoCashier(e)}}},[t._v("去支付")])],1)],1):t._e()],1)],1),a!==t.list.length-1?i("v-uni-view",{staticClass:"splitline"}):t._e()],1)})),1)],1)},n=[]},f0e3:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("ade3")),o=a(i("c7eb")),r=a(i("2909")),s=a(i("1da1"));i("a9e3"),i("99af");var l=a(i("2649")),d=a(i("465b")),c=a(i("adff")),u=i("173f"),f=i("df47"),v=i("1a64"),h={components:{MyTab:l.default,MyScroll:d.default,NavHead:c.default},data:function(){return{tabList:[{name:"黄金单曲",id:1,activeNav:0,isFinish:!1,loading:!1,page:1,list:[]},{name:"黄金专辑",id:2,activeNav:0,isFinish:!1,loading:!1,page:1,list:[]},{name:"数字音乐",id:3,activeNav:0,isFinish:!1,loading:!1,page:1,list:[]}],activeBar:1,navList:["全部","待支付","已取消","已完成"],activeNav:0,isFinish:!1,loading:!1,page:1,list:[]}},created:function(){},onLoad:function(t){t.product_type&&(this.activeBar=Number(t.product_type))},onShow:function(){this.$store.state.publicState.refresh&&(this.initParams(),this.getList(),this.$store.commit("publicState/set_refresh",!1))},filters:{filterStatus:function(t){return{0:"待支付",1:"已完成",2:"已取消",3:"已取消",4:"已取消",5:"已取消"}[t]}},methods:{handleBack:function(){var t=getCurrentPages();1===t.length?uni.reLaunch({url:"/pages/mine/mine"}):uni.navigateBack({delta:1})},initParams:function(){this.page=1,this.list=[],this.isFinish=!1,this.loading=!1},handActive:function(t){if(this.activeBar===t)return!1;this.activeBar=t,this.initParams(),this.getList()},getList:function(t){var e=this;return(0,s.default)((0,o.default)().mark((function t(){var i,a,n,s;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=null,a=null,4===e.activeBar?(i=u.order_list,n=["","create","cancel","pay"],a={page:e.page++,type:n[e.activeNav]}):(i=u.order_collectionsList,a={page:e.page++,order_type:e.activeNav,product_type:e.activeBar}),t.prev=3,e.loading=!0,t.next=7,(0,v.post1)(i,a);case 7:if(s=t.sent,0===s.code){t.next=12;break}return e.isFinish=!0,e.loading=!1,t.abrupt("return",uni.showToast({title:s.msg,icon:"none"}));case 12:s.data.list&&Array.isArray(s.data.list)&&s.data.list.length?1===e.page?e.list=s.data.list:e.list=[].concat((0,r.default)(e.list),(0,r.default)(s.data.list)):(e.isFinish=!0,e.page=e.page-1),e.loading=!1,t.next=22;break;case 16:throw t.prev=16,t.t0=t["catch"](3),e.isFinish=!0,e.loading=!1,uni.showToast({title:t.t0.message,icon:"none"}),t.t0;case 22:case"end":return t.stop()}}),t,null,[[3,16]])})))()},handleClickNavItem:function(t){if(this.activeNav===t)return!1;this.activeNav=t,this.initParams(),this.getList()},handleGoToDetail:function(t,e){var i="/pages/orderDetail/orderDetail?id=".concat(t.order_id,"&product_type=").concat(e);uni.navigateTo({url:i})},handleClickCancle:function(t){var e,i=this;uni.showModal((e={title:"提示",confirmColor:"确认取消",cancelText:"返回"},(0,n.default)(e,"confirmColor","#DC2D1E"),(0,n.default)(e,"content","是否确认取消订单？"),(0,n.default)(e,"cancelColor","#999999"),(0,n.default)(e,"success",(function(e){e.confirm&&(0,v.post)(u.h5_order_cancle,{order_id:t.order_id}).then((function(t){uni.showToast({title:"取消成功"}),i.initParams(),i.getList()}))})),e))},handleGoCashier:function(t){if(this.$store.state.user.inApp)(0,f.openAppPage)({page:"diskConfirmOrderPage",isNeedLogin:!0,params:t});else{var e="/pages/cashier/cashier?product_item_id=".concat(t.product_item_id,"&order_no=").concat(t.order_no,"&order_price=").concat(t.order_total_price,"&order_id=").concat(t.order_id);uni.navigateTo({url:e})}}}};e.default=h}}]);