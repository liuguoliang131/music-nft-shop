(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-recommendedAlbumList-recommendedAlbumList"],{"0de2":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("c7eb")),o=a(i("2909")),r=a(i("1da1"));i("d3b7"),i("e25e"),i("99af");var s=a(i("adff")),c=a(i("465b")),l=i("df47"),d=i("173f"),u=i("1a64"),p=a(i("2aee")),f={components:{NavHead:s.default,MyScroll:c.default},mixins:[p.default],data:function(){return{isFinish:!1,loading:!1,page:1,list:[]}},methods:{mock:function(t){return new Promise((function(e){setTimeout((function(){e(t>10?{code:0,msg:"success",data:{}}:{code:0,msg:"success",data:{list:[{name:"giao",id:parseInt(Math.random()*Math.random()*100)},{name:"giao1",id:parseInt(Math.random()*Math.random()*100)},{name:"giao2",id:parseInt(Math.random()*Math.random()*100)},{name:"giao3",id:parseInt(Math.random()*Math.random()*100)}]}})}),1e3)}))},getList:function(){var t=this;return(0,r.default)((0,n.default)().mark((function e(){var i;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,(0,u.post1)(d.collections_index_digitMusicList,{page:t.page++});case 4:if(i=e.sent,0===i.code){e.next=9;break}return t.isFinish=!0,t.loading=!1,e.abrupt("return",uni.showToast({title:i.msg,icon:"none"}));case 9:i.data.list&&Array.isArray(i.data.list)&&i.data.list.length?1===t.page?t.list=i.data.list:t.list=[].concat((0,o.default)(t.list),(0,o.default)(i.data.list)):(t.isFinish=!0,t.page=t.page-1),t.loading=!1,e.next=19;break;case 13:throw e.prev=13,e.t0=e["catch"](0),t.isFinish=!0,t.loading=!1,console.log(e.t0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))()},handGo:function(t){var e="/pages/recommendedAlbumDetail/recommendedAlbumDetail?product_item_id="+t.product_item_id;uni.navigateTo({url:e})},handPlay:function(t){return(0,r.default)((0,n.default)().mark((function e(){var i;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.prev=0,i={page:"musicPlayPage",isNeedLogin:!1,params:{product_item_id:t.product_item_id}},(0,l.openAppPage)(i),e.next=9;break;case 5:throw e.prev=5,e.t0=e["catch"](0),uni.showToast({title:e.t0.message,icon:"none"}),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},onLoad:function(){}};e.default=f},2793:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-a618c678]{padding:0;margin:0}.container .empty[data-v-a618c678]{position:relative;box-sizing:border-box;padding:0 %?32?% %?32?% %?32?%;height:calc(100vh - %?148?%);text-align:center;overflow:hidden;padding-top:%?300?%}.container .empty .empty-center .empty-img[data-v-a618c678]{width:%?120?%;height:%?120?%}.container .empty .empty-center .empty-text[data-v-a618c678]{margin-top:%?44?%;font-size:%?24?%;line-height:%?34?%;\n  /* identical to box height */text-align:center;color:#cdcdcd}.container .list[data-v-a618c678]{width:100vw;height:calc(100vh %?-88?%)}.container .list[data-v-a618c678] .scroll{display:flex;flex-wrap:wrap}.container .list[data-v-a618c678] .scroll .item{box-sizing:border-box;width:%?346?%;height:%?448?%;border:%?1?% solid #5f5f5f;border-radius:%?20?%;margin-top:%?20?%;margin-left:%?20?%}.container .list[data-v-a618c678] .scroll .item .cover-content{position:relative;width:%?304?%;height:%?304?%;margin:auto;margin-top:%?20?%}.container .list[data-v-a618c678] .scroll .item .cover-content .cover-img{width:100%;height:100%}.container .list[data-v-a618c678] .scroll .item .cover-content .cover-turn{z-index:1;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;width:%?279?%;height:%?279?%}.container .list[data-v-a618c678] .scroll .item .cover-content .cover-turn1{z-index:2;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;width:%?180?%;height:%?180?%;border-radius:%?90?%}.container .list[data-v-a618c678] .scroll .item .cover-content .cover-play{z-index:2;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;width:%?63.36?%;height:%?63.36?%;border-radius:%?31.68?%}.container .list[data-v-a618c678] .scroll .item .item-row1{width:%?344?%;padding-top:%?16?%;text-indent:%?20?%;margin:auto;font-family:PingFang SC;font-style:normal;font-weight:600;font-size:%?28?%;line-height:%?40?%;color:#ddd;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .list[data-v-a618c678] .scroll .item .item-row2{display:flex;width:%?344?%;padding-top:%?12?%;margin:auto}.container .list[data-v-a618c678] .scroll .item .item-row2 .item-row2-1{width:50%;text-indent:%?20?%;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?34?%;color:#aeaeae;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .list[data-v-a618c678] .scroll .item .item-row2 .item-row2-2{box-sizing:border-box;width:50%;text-align:right;padding-right:%?16?%;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?34?%;color:#d10910;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .list[data-v-a618c678] .scroll .item .item-row2 .item-row2-2 .row2-2-price{font-family:PingFang SC;font-style:normal;font-weight:600;font-size:%?32?%;line-height:%?44?%;color:#d10910}',""]),t.exports=e},"2aee":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7");var a=i("1a64"),n={data:function(){return{isApprove:!0}},methods:{getApprove:function(){var t=this;uni.showLoading({title:"加载中",mask:!0});return new Promise((function(e,i){if(t.$store.state.user.inApp){var n=window.localStorage.getItem("AppConfigInfo")||{},o=JSON.parse(n),r={version_code:o.version_code||1900,os:o.os,channel:o.channel};(0,a.post1)("/h5/show/configure",r).then((function(i){uni.hideLoading(),i.data&&i.data.config?t.isApprove=i.data.config.audit_status:t.isApprove=!0,e(t.isApprove)}))}else uni.hideLoading(),t.isApprove=!1,e(t.isApprove)}))}}};e.default=n},"52e5":function(t,e,i){"use strict";i.r(e);var a=i("0de2"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},6880:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("nav-head",{attrs:{title:"数字音乐"}}),t.isFinish&&0===t.list.length?i("v-uni-view",{staticClass:"empty"},[i("v-uni-view",{staticClass:"empty-center"},[i("v-uni-image",{staticClass:"empty-img",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/emptybox.png",mode:""}}),i("v-uni-view",{staticClass:"empty-text"},[t._v("空空如也")])],1)],1):i("my-scroll",{staticClass:"list",attrs:{isFinish:t.isFinish,loading:t.loading},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.getList.apply(void 0,arguments)}}},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handGo(e)}}},[i("v-uni-view",{staticClass:"cover-content"},[i("v-uni-image",{staticClass:"cover-img",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/albumbg.png"}}),i("v-uni-image",{staticClass:"cover-turn",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/turn.png",mode:""}}),i("v-uni-image",{staticClass:"cover-turn1",attrs:{src:e.index_img,mode:""}}),i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:1===e.publish_type,expression:"item.publish_type===1"}],staticClass:"cover-play",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/play.png",mode:""},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.handPlay(e)}}})],1),i("v-uni-view",{staticClass:"item-row1"},[t._v(t._s(e.product_name))]),i("v-uni-view",{staticClass:"item-row2"},[i("v-uni-text",{staticClass:"item-row2-1"},[t._v(t._s(e.author_name))]),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.publicState.isApprove,expression:"!$store.state.publicState.isApprove"}],staticClass:"item-row2-2"},[i("v-uni-text",{staticClass:"row2-2-unit"},[t._v("￥")]),i("v-uni-text",{staticClass:"row2-2-price"},[t._v(t._s(e.sale_price))])],1)],1)],1)})),1)],1)},n=[]},bac1:function(t,e,i){"use strict";i.r(e);var a=i("6880"),n=i("52e5");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("bbae");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"a618c678",null,!1,a["a"],void 0);e["default"]=s.exports},bbae:function(t,e,i){"use strict";var a=i("ee38"),n=i.n(a);n.a},ee38:function(t,e,i){var a=i("2793");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("99098f18",a,!0,{sourceMap:!1,shadowMode:!1})}}]);