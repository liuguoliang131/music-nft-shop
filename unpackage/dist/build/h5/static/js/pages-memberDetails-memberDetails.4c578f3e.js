(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-memberDetails-memberDetails"],{"02e9":function(t,e,i){var a=i("ffcf");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("b731ff20",a,!0,{sourceMap:!1,shadowMode:!1})},"180e":function(t,e,i){"use strict";i.r(e);var a=i("6d2a"),n=i("f4af");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("f064");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"23802971",null,!1,a["a"],void 0);e["default"]=s.exports},"1ea1":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b"),i("99af"),i("a9e3");var n=a(i("2909")),o=a(i("c7eb")),r=a(i("1da1")),s=i("173f"),l=i("df47"),d=a(i("465b")),c=a(i("adff")),u={components:{MyScroll:d.default,NavHead:c.default},data:function(){return{member_id:"",board:{id:"",nick_name:"",phone:"",avatar:"",in_time:"",inviter:"",total_buy_amount:""},page:1,list:[],loading:!1,isFinish:!1}},methods:{getInfo:function(){var t=this;return(0,r.default)((0,o.default)().mark((function e(){var i;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$post(s.h5_community_memberInfo,{id:t.member_id});case 3:if(i=e.sent,0===i.code){e.next=6;break}return e.abrupt("return",uni.showToast({title:i.msg,icon:"none"}));case 6:t.board=i.data,e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getMock:function(){return new Promise((function(t){setTimeout((function(){t({code:0,data:{list:[{amount:"20",buy_time:1666754543,works_name:"1026，测试专辑请勿购买001"}]},msg:"success"})}),1e3)}))},getList:function(){var t=this;return(0,r.default)((0,o.default)().mark((function e(){var i;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$post(s.h5_community_memberBuyList,{member_id:t.member_id,page:t.page++});case 3:if(i=e.sent,0===i.code){e.next=8;break}return t.isFinish=!0,t.loading=!1,e.abrupt("return",uni.showToast({title:i.msg,icon:"none"}));case 8:i.data.list&&Array.isArray(i.data.list)&&i.data.list.length?(i.data.list.forEach((function(t){var e=(0,l.getTimeData)(1e3*t.buy_time);t.buy_time_show="".concat(e.mon,"-").concat(e.dd," ").concat(e.hh,":").concat(e.MM)})),1===t.page?t.list=i.data.list:t.list=[].concat((0,n.default)(t.list),(0,n.default)(i.data.list)),t.loading=!1):(t.page=t.page-1,t.isFinish=!0,t.loading=!1),e.next=17;break;case 11:throw e.prev=11,e.t0=e["catch"](0),t.isFinish=!0,t.loading=!1,e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},onLoad:function(t){this.member_id=Number(t.member_id),this.getInfo()}};e.default=u},2909:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,a.default)(t)||(0,n.default)(t)||(0,o.default)(t)||(0,r.default)()};var a=s(i("6005")),n=s(i("db90")),o=s(i("06c5")),r=s(i("3427"));function s(t){return t&&t.__esModule?t:{default:t}}},3427:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},i("d9e2"),i("d401")},"465b":function(t,e,i){"use strict";i.r(e);var a=i("c833"),n=i("901b");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("7c40");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"2435f82c",null,!1,a["a"],void 0);e["default"]=s.exports},6005:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,a.default)(t)};var a=function(t){return t&&t.__esModule?t:{default:t}}(i("6b75"))},"6d2a":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("nav-head"),i("v-uni-view",{staticClass:"h16"}),i("v-uni-view",{staticClass:"board"},[i("v-uni-view",{staticClass:"board-top"},[i("v-uni-image",{staticClass:"top-1",attrs:{src:t.board.avatar,mode:""}}),i("v-uni-view",{staticClass:"top-2"},[i("v-uni-view",{staticClass:"top-2-1"},[t._v(t._s(t.board.nick_name))]),i("v-uni-view",{staticClass:"top-2-2"},[t._v(t._s(t.board.phone))])],1)],1),i("v-uni-view",{staticClass:"board-bottom"},[t._v("购买总额"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.board.total_buy_amount))]),t._v("元")],1)],1),i("v-uni-view",{staticClass:"member-title"},[i("v-uni-view",{staticClass:"title-l"}),t._v("购买记录")],1),t.isFinish&&0===t.list.length?i("v-uni-view",{staticClass:"empty"},[i("v-uni-image",{staticClass:"empty-img",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/empty-icon.png",mode:""}}),i("v-uni-view",{staticClass:"empty-text"},[t._v("还没有购买记录")])],1):i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"list-head"},[i("v-uni-view",{staticClass:"head-1"},[t._v("作品名称")]),i("v-uni-view",{staticClass:"head-2"},[t._v("交易金额(元)")]),i("v-uni-view",{staticClass:"head-3"},[t._v("时间")])],1),i("my-scroll",{staticClass:"scroll-view",attrs:{loading:t.loading,isFinish:t.isFinish},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.getList.apply(void 0,arguments)}}},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("v-uni-view",{staticClass:"item-1"},[t._v(t._s(e.works_name))]),i("v-uni-view",{staticClass:"item-2"},[t._v(t._s(e.amount))]),i("v-uni-view",{staticClass:"item-3"},[t._v(t._s(e.buy_time_show))])],1)})),1)],1)],1)},n=[]},7296:function(t,e,i){var a=i("da68");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("725139bf",a,!0,{sourceMap:!1,shadowMode:!1})},"7c40":function(t,e,i){"use strict";var a=i("7296"),n=i.n(a);n.a},"901b":function(t,e,i){"use strict";i.r(e);var a=i("9cc3"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9cc3":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"myScroll",data:function(){return{scrollTop:0}},props:{isFinish:{default:!1},loading:{default:!1},data:{type:Object,description:"和myTab组件组合使用，接收每个tab的list"}},methods:{scroll:function(t){this.scrollTop=this.$refs.window.$el.scrollTop,this.$refs.scroll.$el.scrollHeight-this.$refs.window.$el.scrollTop<=this.$refs.window.$el.clientHeight+10&&this.onload()},onload:function(){!1===this.isFinish&&(this.loading||this.$emit("load",this.data))},notFull:function(){this.$refs.scroll.$el.scrollHeight<this.$refs.window.$el.clientHeight&&this.onload()}},mounted:function(){this.notFull()},created:function(){},updated:function(){!1===this.loading&&this.notFull()},activated:function(){this.$refs.window.$el.scrollTop=this.scrollTop}};e.default=a},c833:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{ref:"window",staticClass:"window",style:{height:this.$store.state.publicState.remainingHeight},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[i("v-uni-view",{ref:"scroll",staticClass:"scroll"},[t._t("default",null,{data:t.data}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isFinish,expression:"isFinish"}],staticClass:"noMore"},[t._v("没有更多了")]),i("v-uni-view",{staticClass:"footer"})],2)],1)},n=[]},da68:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.window[data-v-2435f82c]{position:relative;height:100vh;overflow-y:scroll}.scroll[data-v-2435f82c]{width:100%}.scroll .loading[data-v-2435f82c]{display:flex;align-items:center;justify-content:center;width:100%;height:%?60?%;font-size:%?24?%;color:#aeaeae}.scroll .noMore[data-v-2435f82c]{display:flex;align-items:center;justify-content:center;width:100%;height:%?60?%;font-size:%?24?%;color:#aeaeae}',""]),t.exports=e},db90:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630")},f064:function(t,e,i){"use strict";var a=i("02e9"),n=i.n(a);n.a},f4af:function(t,e,i){"use strict";i.r(e);var a=i("1ea1"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},ffcf:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-23802971]{padding:0;text-align:center}.container .h16[data-v-23802971]{height:%?16?%}.container .board[data-v-23802971]{width:%?718?%;margin:auto;background:#1a170e;border-radius:%?16?%}.container .board .board-top[data-v-23802971]{display:flex;padding-top:%?32?%;padding-bottom:%?30?%}.container .board .board-top .top-1[data-v-23802971]{margin-left:%?32?%;margin-right:%?16?%;width:%?92?%;height:%?92?%;border-radius:%?46?%}.container .board .board-top .top-2[data-v-23802971]{text-align:left}.container .board .board-top .top-2 .top-2-1[data-v-23802971]{font-size:%?32?%;line-height:%?44?%;padding-top:%?4?%;padding-bottom:%?10?%;color:#ececec}.container .board .board-top .top-2 .top-2-2[data-v-23802971]{font-size:%?24?%;line-height:%?34?%;\n  /* identical to box height */color:#aeaeae}.container .board .board-bottom[data-v-23802971]{width:%?686?%;height:%?74.8?%;margin:auto;border-top:%?1?% solid #363636;line-height:%?74.8?%;text-align:left;font-size:%?24?%;color:#aeaeae;text-indent:%?14?%}.container .board .board-bottom .num[data-v-23802971]{margin:0 %?8?%;font-weight:600;font-size:%?30?%}.container .member-title[data-v-23802971]{display:flex;align-items:center;padding-top:%?52?%;padding-bottom:%?32?%;font-size:%?24?%;color:#ac9147}.container .member-title .title-l[data-v-23802971]{width:%?6?%;height:%?24?%;border-radius:%?2?%;background:#ac9147;margin-right:%?24?%;margin-left:%?40?%}.container .list[data-v-23802971]{width:%?686?%;margin:auto;padding-bottom:%?30?%}.container .list .list-head[data-v-23802971]{display:flex;align-items:center;justify-content:space-between;padding:0 %?16?% %?18?% %?16?%;font-size:%?26?%;color:#aeaeae}.container .list .list-head .head-1[data-v-23802971]{flex:1;text-align:left}.container .list .list-head .head-2[data-v-23802971]{text-align:center;width:%?150?%}.container .list .list-head .head-3[data-v-23802971]{flex:1;text-align:right}.container .list .scroll-view[data-v-23802971]{height:calc(100vh - %?595?%)}.container .list .item[data-v-23802971]{box-sizing:border-box;display:flex;align-items:center;min-height:%?98.62?%;padding:%?10?% %?16?%;border-bottom:%?1?% solid #363636;font-size:%?26?%;line-height:%?36?%;color:#ececec}.container .list .item .item-1[data-v-23802971]{flex:1;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .list .item .item-2[data-v-23802971]{text-align:center;width:%?150?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .list .item .item-3[data-v-23802971]{flex:1;text-align:right;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .empty[data-v-23802971]{height:%?860?%;text-align:center;overflow:hidden}.container .empty .empty-img[data-v-23802971]{margin-top:%?160?%;width:%?120?%;height:%?120?%}.container .empty .empty-text[data-v-23802971]{margin-top:%?44?%;font-size:%?24?%;line-height:%?34?%;\n  /* identical to box height */text-align:center;color:#cdcdcd}',""]),t.exports=e}}]);