(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goldSinglesList-goldSinglesList"],{"133c":function(t,e,i){"use strict";i.r(e);var a=i("8179"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"2aee":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7");var a=i("1a64"),n={data:function(){return{isApprove:!0}},methods:{getApprove:function(){var t=this;uni.showLoading({title:"加载中",mask:!0});return new Promise((function(e,i){if(t.$store.state.user.inApp){var n=window.localStorage.getItem("AppConfigInfo")||{},s=JSON.parse(n),o={version_code:s.version_code||1900,os:s.os,channel:s.channel};(0,a.post1)("/h5/show/configure",o).then((function(i){uni.hideLoading(),i.data&&i.data.config?t.isApprove=i.data.config.audit_status:t.isApprove=!0,e(t.isApprove)}))}else uni.hideLoading(),t.isApprove=!1,e(t.isApprove)}))}}};e.default=n},"4fca":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-7161249a]{padding:0;margin:0}.container .empty[data-v-7161249a]{position:relative;box-sizing:border-box;padding:0 %?32?% %?32?% %?32?%;height:calc(100vh - %?148?%);text-align:center;overflow:hidden;padding-top:%?300?%}.container .empty .empty-center .empty-img[data-v-7161249a]{width:%?120?%;height:%?120?%}.container .empty .empty-center .empty-text[data-v-7161249a]{margin-top:%?44?%;font-size:%?24?%;line-height:%?34?%;\n  /* identical to box height */text-align:center;color:#cdcdcd}.container .list[data-v-7161249a]{width:100vw;height:calc(100vh %?-88?%)}.container .list[data-v-7161249a] .scroll .item{display:flex;box-sizing:border-box;width:%?702?%;height:%?270?%;background:#292929;border-radius:%?16?%;margin:auto;margin-top:%?20?%}.container .list[data-v-7161249a] .scroll .item .item-1{position:relative;width:%?270?%;height:%?270?%}.container .list[data-v-7161249a] .scroll .item .item-1 .item-1-sign{z-index:2;position:absolute;top:0;left:0;width:%?84?%;height:%?40?%}.container .list[data-v-7161249a] .scroll .item .item-1 .item-1-out{z-index:1;position:absolute;top:0;left:0;width:%?270?%;height:%?270?%;border-radius:%?16?%}.container .list[data-v-7161249a] .scroll .item .item-1 .item-1-in{z-index:0;position:relative;left:%?28?%;top:%?4.34?%;width:%?259.5?%;height:%?259.5?%}.container .list[data-v-7161249a] .scroll .item .item-2{width:%?380?%;margin-left:%?32?%;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?32?%;line-height:%?44?%;color:#ddd}.container .list[data-v-7161249a] .scroll .item .item-2 .item-2-1{margin-top:%?16?%;font-weight:600;font-size:%?32?%;line-height:%?44?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#ddd}.container .list[data-v-7161249a] .scroll .item .item-2 .item-2-2{display:flex;align-items:center;line-height:0;vertical-align:middle;margin-top:%?8?%}.container .list[data-v-7161249a] .scroll .item .item-2 .item-2-2 .item-2-2-1{width:%?40?%;height:%?40?%;border-radius:%?20?%}.container .list[data-v-7161249a] .scroll .item .item-2 .item-2-2 .item-2-2-2{flex:1;padding-left:%?8?%;font-weight:400;font-size:%?28?%;line-height:%?40?%;\n  /* identical to box height */color:#aeaeae;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .list[data-v-7161249a] .scroll .item .item-2 .item-2-3{margin-top:%?16?%;font-weight:400;font-size:%?28?%;line-height:%?40?%;\n  /* identical to box height */color:#aeaeae}.container .list[data-v-7161249a] .scroll .item .item-2 .item-2-4{margin-top:%?40?%;display:flex;align-items:center}.container .list[data-v-7161249a] .scroll .item .item-2 .item-2-4 .item-2-4-1{flex:1;font-family:PingFang SC;font-style:normal;font-weight:600;font-size:%?32?%;line-height:%?44?%;color:#aeaeae}.container .list[data-v-7161249a] .scroll .item .item-2 .item-2-4 .item-2-4-2{display:flex;align-items:center;width:%?182?%;height:%?48?%;border-radius:%?24?%;background:linear-gradient(92.75deg,#f4c85f 53.95%,#ffebbc 151.4%)}.container .list[data-v-7161249a] .scroll .item .item-2 .item-2-4 .item-2-4-2 uni-image{width:%?36?%;height:%?36?%;margin-left:%?6?%;margin-right:%?8?%}.container .list[data-v-7161249a] .scroll .item .item-2 .item-2-4 .item-2-4-2 uni-text{font-weight:500;font-size:%?28?%;\n  /* identical to box height */text-align:center;color:#744b0d}',""]),t.exports=e},"533f":function(t,e,i){var a=i("4fca");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("9c3c4794",a,!0,{sourceMap:!1,shadowMode:!1})},"5b80":function(t,e,i){"use strict";i.r(e);var a=i("ef14"),n=i("133c");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("c7b9");var o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"7161249a",null,!1,a["a"],void 0);e["default"]=r.exports},8179:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("c7eb")),s=a(i("2909")),o=a(i("1da1"));i("d3b7"),i("e25e"),i("99af");var r=a(i("adff")),l=a(i("465b")),c=i("173f"),d=i("df47"),u=a(i("2aee")),p={components:{NavHead:r.default,MyScroll:l.default},mixins:[u.default],data:function(){return{isFinish:!1,loading:!1,page:1,list:[]}},methods:{mock:function(t){return new Promise((function(e){setTimeout((function(){e(t>10?{code:0,msg:"success",data:{}}:{code:0,msg:"success",data:{list:[{name:"giao",id:parseInt(Math.random()*Math.random()*100)},{name:"giao1",id:parseInt(Math.random()*Math.random()*100)},{name:"giao2",id:parseInt(Math.random()*Math.random()*100)},{name:"giao3",id:parseInt(Math.random()*Math.random()*100)}]}})}),1e3)}))},getList:function(){var t=this;return(0,o.default)((0,n.default)().mark((function e(){var i;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.$post(c.collections_index_singleMusicList,{page:t.page++});case 4:if(i=e.sent,0===i.code){e.next=9;break}return t.isFinish=!0,t.loading=!1,e.abrupt("return",uni.showToast({title:i.msg,icon:"none"}));case 9:i.data.list&&Array.isArray(i.data.list)&&i.data.list.length?1===t.page?t.list=i.data.list:t.list=[].concat((0,s.default)(t.list),(0,s.default)(i.data.list)):(t.isFinish=!0,t.page=t.page-1),t.loading=!1,e.next=19;break;case 13:throw e.prev=13,e.t0=e["catch"](0),t.isFinish=!0,t.loading=!1,console.log(e.t0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))()},handGo:function(t){uni.navigateTo({url:"/pages/goldSinglesDetail/goldSinglesDetail?product_item_id=".concat(t.product_item_id)})},handPlay:function(t){return(0,o.default)((0,n.default)().mark((function e(){var i;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.prev=0,i={page:"musicPlayPage",isNeedLogin:!1,params:{product_item_id:t.product_item_id}},(0,d.openAppPage)(i),e.next=9;break;case 5:throw e.prev=5,e.t0=e["catch"](0),uni.showToast({title:e.t0.message,icon:"none"}),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},onLoad:function(){}};e.default=p},c7b9:function(t,e,i){"use strict";var a=i("533f"),n=i.n(a);n.a},ef14:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("nav-head",{attrs:{title:"黄金单曲"}}),t.isFinish&&0===t.list.length?i("v-uni-view",{staticClass:"empty"},[i("v-uni-view",{staticClass:"empty-center"},[i("v-uni-image",{staticClass:"empty-img",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/empty-icon.png",mode:""}}),i("v-uni-view",{staticClass:"empty-text"},[t._v("空空如也")])],1)],1):i("my-scroll",{staticClass:"list",attrs:{isFinish:t.isFinish,loading:t.loading},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.getList.apply(void 0,arguments)}}},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handGo(e)}}},[i("v-uni-view",{staticClass:"item-1"},["SSR"===e.rare_type?i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.publicState.isApprove,expression:"!$store.state.publicState.isApprove"}],staticClass:"item-1-sign",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/SSR.png",mode:""}}):"UR"===e.rare_type?i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.publicState.isApprove,expression:"!$store.state.publicState.isApprove"}],staticClass:"item-1-sign",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/UR.png",mode:""}}):"R"===e.rare_type?i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.publicState.isApprove,expression:"!$store.state.publicState.isApprove"}],staticClass:"item-1-sign",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/R.png",mode:""}}):"N"===e.rare_type?i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.publicState.isApprove,expression:"!$store.state.publicState.isApprove"}],staticClass:"item-1-sign",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/N.png",mode:""}}):"SR"===e.rare_type?i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.publicState.isApprove,expression:"!$store.state.publicState.isApprove"}],staticClass:"item-1-sign",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/SR.png",mode:""}}):t._e(),i("v-uni-image",{staticClass:"item-1-out",attrs:{src:e.index_img,mode:""}}),i("v-uni-image",{staticClass:"item-1-in",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/turn.png",mode:""}})],1),i("v-uni-view",{staticClass:"item-2"},[i("v-uni-view",{staticClass:"item-2-1"},[t._v(t._s(e.product_name))]),i("v-uni-view",{staticClass:"item-2-2"},[i("v-uni-image",{staticClass:"item-2-2-1",attrs:{src:e.author_avatar,mode:""}}),i("v-uni-view",{staticClass:"item-2-2-2"},[t._v(t._s(e.author_name))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.publicState.isApprove,expression:"!$store.state.publicState.isApprove"}],staticClass:"item-2-3"},[t._v("限量"+t._s(e.stock_num)+"份")]),i("v-uni-view",{staticClass:"item-2-4"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.publicState.isApprove,expression:"!$store.state.publicState.isApprove"}],staticClass:"item-2-4-1"},[t._v("￥"+t._s(e.sale_price))]),i("v-uni-view",{staticClass:"item-2-4-2",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.handPlay(e)}}},[i("v-uni-image",{attrs:{src:"https://file.yuanyinfu.com/front-end-lib/play.png",mode:""}}),i("v-uni-text",[t._v("立即试听")])],1)],1)],1)],1)})),1)],1)},n=[]}}]);