(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-memberDetails-memberDetails"],{"02e9":function(t,e,a){var i=a("ffcf");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("b731ff20",i,!0,{sourceMap:!1,shadowMode:!1})},"180e":function(t,e,a){"use strict";a.r(e);var i=a("6d2a"),n=a("f4af");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("f064");var s=a("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"23802971",null,!1,i["a"],void 0);e["default"]=r.exports},"1ea1":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7"),a("159b"),a("99af"),a("a9e3");var n=i(a("2909")),o=i(a("c7eb")),s=i(a("1da1")),r=a("173f"),d=a("df47"),l=i(a("465b")),c=i(a("adff")),u={components:{MyScroll:l.default,NavHead:c.default},data:function(){return{member_id:"",board:{id:"",nick_name:"",phone:"",avatar:"",in_time:"",inviter:"",total_buy_amount:""},page:1,list:[],loading:!1,isFinish:!1}},methods:{getInfo:function(){var t=this;return(0,s.default)((0,o.default)().mark((function e(){var a;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$post(r.h5_community_memberInfo,{id:t.member_id});case 3:if(a=e.sent,0===a.code){e.next=6;break}return e.abrupt("return",uni.showToast({title:a.msg,icon:"none"}));case 6:t.board=a.data,e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getMock:function(){return new Promise((function(t){setTimeout((function(){t({code:0,data:{list:[{amount:"20",buy_time:1666754543,works_name:"1026，测试专辑请勿购买001"}]},msg:"success"})}),1e3)}))},getList:function(){var t=this;return(0,s.default)((0,o.default)().mark((function e(){var a;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$post(r.h5_community_memberBuyList,{member_id:t.member_id,page:t.page++});case 3:if(a=e.sent,0===a.code){e.next=8;break}return t.isFinish=!0,t.loading=!1,e.abrupt("return",uni.showToast({title:a.msg,icon:"none"}));case 8:a.data.list&&Array.isArray(a.data.list)&&a.data.list.length?(a.data.list.forEach((function(t){var e=(0,d.getTimeData)(1e3*t.buy_time);t.buy_time_show="".concat(e.mon,"-").concat(e.dd," ").concat(e.hh,":").concat(e.MM)})),1===t.page?t.list=a.data.list:t.list=[].concat((0,n.default)(t.list),(0,n.default)(a.data.list)),t.loading=!1):(t.page=t.page-1,t.isFinish=!0,t.loading=!1),e.next=17;break;case 11:throw e.prev=11,e.t0=e["catch"](0),t.isFinish=!0,t.loading=!1,e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},onLoad:function(t){this.member_id=Number(t.member_id),this.getInfo()}};e.default=u},"6d2a":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("nav-head"),a("v-uni-view",{staticClass:"h16"}),a("v-uni-view",{staticClass:"board"},[a("v-uni-view",{staticClass:"board-top"},[a("v-uni-image",{staticClass:"top-1",attrs:{src:t.board.avatar,mode:""}}),a("v-uni-view",{staticClass:"top-2"},[a("v-uni-view",{staticClass:"top-2-1"},[t._v(t._s(t.board.nick_name))]),a("v-uni-view",{staticClass:"top-2-2"},[t._v(t._s(t.board.phone))])],1)],1),a("v-uni-view",{staticClass:"board-bottom"},[t._v("购买总额"),a("v-uni-text",{staticClass:"num"},[t._v(t._s(t.board.total_buy_amount))]),t._v("元")],1)],1),a("v-uni-view",{staticClass:"member-title"},[a("v-uni-view",{staticClass:"title-l"}),t._v("购买记录")],1),t.isFinish&&0===t.list.length?a("v-uni-view",{staticClass:"empty"},[a("v-uni-image",{staticClass:"empty-img",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/empty-icon.png",mode:""}}),a("v-uni-view",{staticClass:"empty-text"},[t._v("还没有购买记录")])],1):a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"list-head"},[a("v-uni-view",{staticClass:"head-1"},[t._v("作品名称")]),a("v-uni-view",{staticClass:"head-2"},[t._v("交易金额(元)")]),a("v-uni-view",{staticClass:"head-3"},[t._v("时间")])],1),a("my-scroll",{staticClass:"scroll-view",attrs:{loading:t.loading,isFinish:t.isFinish},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.getList.apply(void 0,arguments)}}},t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item"},[a("v-uni-view",{staticClass:"item-1"},[t._v(t._s(e.works_name))]),a("v-uni-view",{staticClass:"item-2"},[t._v(t._s(e.amount))]),a("v-uni-view",{staticClass:"item-3"},[t._v(t._s(e.buy_time_show))])],1)})),1)],1)],1)},n=[]},f064:function(t,e,a){"use strict";var i=a("02e9"),n=a.n(i);n.a},f4af:function(t,e,a){"use strict";a.r(e);var i=a("1ea1"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},ffcf:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-23802971]{padding:0;text-align:center}.container .h16[data-v-23802971]{height:%?16?%}.container .board[data-v-23802971]{width:%?718?%;margin:auto;background:#1a170e;border-radius:%?16?%}.container .board .board-top[data-v-23802971]{display:flex;padding-top:%?32?%;padding-bottom:%?30?%}.container .board .board-top .top-1[data-v-23802971]{margin-left:%?32?%;margin-right:%?16?%;width:%?92?%;height:%?92?%;border-radius:%?46?%}.container .board .board-top .top-2[data-v-23802971]{text-align:left}.container .board .board-top .top-2 .top-2-1[data-v-23802971]{font-size:%?32?%;line-height:%?44?%;padding-top:%?4?%;padding-bottom:%?10?%;color:#ececec}.container .board .board-top .top-2 .top-2-2[data-v-23802971]{font-size:%?24?%;line-height:%?34?%;\n  /* identical to box height */color:#aeaeae}.container .board .board-bottom[data-v-23802971]{width:%?686?%;height:%?74.8?%;margin:auto;border-top:%?1?% solid #363636;line-height:%?74.8?%;text-align:left;font-size:%?24?%;color:#aeaeae;text-indent:%?14?%}.container .board .board-bottom .num[data-v-23802971]{margin:0 %?8?%;font-weight:600;font-size:%?30?%}.container .member-title[data-v-23802971]{display:flex;align-items:center;padding-top:%?52?%;padding-bottom:%?32?%;font-size:%?24?%;color:#ac9147}.container .member-title .title-l[data-v-23802971]{width:%?6?%;height:%?24?%;border-radius:%?2?%;background:#ac9147;margin-right:%?24?%;margin-left:%?40?%}.container .list[data-v-23802971]{width:%?686?%;margin:auto;padding-bottom:%?30?%}.container .list .list-head[data-v-23802971]{display:flex;align-items:center;justify-content:space-between;padding:0 %?16?% %?18?% %?16?%;font-size:%?26?%;color:#aeaeae}.container .list .list-head .head-1[data-v-23802971]{flex:1;text-align:left}.container .list .list-head .head-2[data-v-23802971]{text-align:center;width:%?150?%}.container .list .list-head .head-3[data-v-23802971]{flex:1;text-align:right}.container .list .scroll-view[data-v-23802971]{height:calc(100vh - %?595?%)}.container .list .item[data-v-23802971]{box-sizing:border-box;display:flex;align-items:center;min-height:%?98.62?%;padding:%?10?% %?16?%;border-bottom:%?1?% solid #363636;font-size:%?26?%;line-height:%?36?%;color:#ececec}.container .list .item .item-1[data-v-23802971]{flex:1;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .list .item .item-2[data-v-23802971]{text-align:center;width:%?150?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .list .item .item-3[data-v-23802971]{flex:1;text-align:right;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .empty[data-v-23802971]{height:%?860?%;text-align:center;overflow:hidden}.container .empty .empty-img[data-v-23802971]{margin-top:%?160?%;width:%?120?%;height:%?120?%}.container .empty .empty-text[data-v-23802971]{margin-top:%?44?%;font-size:%?24?%;line-height:%?34?%;\n  /* identical to box height */text-align:center;color:#cdcdcd}',""]),t.exports=e}}]);