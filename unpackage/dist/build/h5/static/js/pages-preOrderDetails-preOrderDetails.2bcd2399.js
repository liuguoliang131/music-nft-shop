(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-preOrderDetails-preOrderDetails"],{"1a80":function(t,e,i){"use strict";var a=i("b769"),o=i.n(a);o.a},"256f":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={wybPopup:i("1754").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("nav-head",{attrs:{left:!t.share_sign,right:!t.share_sign,title:"详情"}},[a("v-uni-image",{staticClass:"nav-r",attrs:{src:i("a590"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handShare.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"preOrderDetails-header"},[a("v-uni-view",{staticClass:"cover"},[a("div",{staticClass:"cover-content"},[a("v-uni-image",{staticClass:"cover-img",attrs:{src:i("f199")}}),a("v-uni-image",{staticClass:"cover-turn",attrs:{src:i("0b55"),mode:""}}),a("v-uni-image",{staticClass:"cover-turn1",attrs:{src:t.data.index_img,mode:""}})],1)]),a("v-uni-view",{staticClass:"row1"},["SSR"===t.data.rare_type?a("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!t.isApprove,expression:"!isApprove"}],attrs:{src:i("6e9c"),mode:""}}):"UR"===t.data.rare_type?a("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!t.isApprove,expression:"!isApprove"}],attrs:{src:i("d14b"),mode:""}}):"R"===t.data.rare_type?a("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!t.isApprove,expression:"!isApprove"}],attrs:{src:i("07b2"),mode:""}}):"N"===t.data.rare_type?a("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!t.isApprove,expression:"!isApprove"}],attrs:{src:i("9d3e"),mode:""}}):"SR"===t.data.rare_type?a("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!t.isApprove,expression:"!isApprove"}],attrs:{src:i("0057"),mode:""}}):t._e(),t._v(t._s(t.data.name))],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isApprove,expression:"!isApprove"}],staticClass:"row2"},[t._v(t._s(t.data.sale_time1)+" "+t._s(0===t.data.sale_status?"未开售":1===t.data.sale_status?"开售中":"已停售")),a("v-uni-text",[t._v("限量"+t._s(t.data.stock_num_desc)+"张")])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isApprove,expression:"!isApprove"}],staticClass:"price"},[a("v-uni-text",{staticClass:"rmb"},[t._v("￥")]),a("v-uni-text",{staticClass:"count"},[t._v(t._s(t.data.sale_price))]),a("v-uni-text",{staticClass:"unit"},[t._v("/张")])],1)],1),a("v-uni-view",{staticClass:"preOrderDetails-body"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isApprove,expression:"!isApprove"}],staticClass:"card cardbox1"},[a("v-uni-view",{staticClass:"card-body"},[a("v-uni-view",{staticClass:"row1"},[t._v("专辑信息")]),a("v-uni-view",{staticClass:"row2"},[a("v-uni-view",{staticClass:"row2-1"},[a("v-uni-text",{staticClass:"row2-1-l"},[t._v("专辑名称")]),a("v-uni-text",{staticClass:"row2-1-r"},[t._v(t._s(t.data.name))])],1),a("v-uni-view",{staticClass:"row2-1"},[a("v-uni-text",{staticClass:"row2-1-l"},[t._v("稀有度")]),a("v-uni-text",{staticClass:"row2-1-r"},[t._v(t._s(t.data.rare_type))])],1),a("v-uni-view",{staticClass:"row2-1"},[a("v-uni-text",{staticClass:"row2-1-l"},[t._v("发行量")]),a("v-uni-text",{staticClass:"row2-1-r"},[t._v(t._s(t.data.stock_num_desc)+"张")])],1),a("v-uni-view",{staticClass:"row2-1"},[a("v-uni-text",{staticClass:"row2-1-l"},[t._v("发行方")]),a("v-uni-text",{staticClass:"row2-1-r"},[t._v(t._s(t.data.publish_author))])],1),a("v-uni-view",{staticClass:"row2-1"},[a("v-uni-text",{staticClass:"row2-1-l"},[t._v("发行时间")]),a("v-uni-text",{staticClass:"row2-1-r"},[t._v(t._s(t.data.publish_time1))])],1)],1),a("v-uni-view",{staticClass:"row3"},[t._v("购买须知")]),a("v-uni-view",{staticClass:"row4",domProps:{innerHTML:t._s(t.data.buy_notice)}})],1)],1),a("v-uni-view",{staticClass:"card cardbox2"},[a("v-uni-view",{staticClass:"card-body"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.data.introduction,expression:"data.introduction"}],staticClass:"work"},[a("v-uni-view",{staticClass:"row1"},[t._v("专辑介绍")]),a("v-uni-view",{staticClass:"row2",domProps:{innerHTML:t._s(t.data.introduction)}})],1),t._l(t.data.music_list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"work"},[a("v-uni-view",{staticClass:"row1"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"row2",domProps:{innerHTML:t._s(e.desc)}})],1)}))],2)],1)],1),a("v-uni-view",{staticClass:"h120"}),t.share_sign?a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isApprove,expression:"!isApprove"}],staticClass:"bottom1"},[1===t.data.is_like?a("v-uni-view",{staticClass:"bottom1-1 followed",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handFollow(2)}}},[a("v-uni-image",{staticClass:"bottom1-1-1",attrs:{src:i("53cc"),mode:""}}),a("v-uni-view",{staticClass:"bottom1-1-2"},[t._v("关注")])],1):a("v-uni-view",{staticClass:"bottom1-1 unfollow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handFollow(1)}}},[a("v-uni-image",{staticClass:"bottom1-1-1",attrs:{src:i("4b85"),mode:""}}),a("v-uni-view",{staticClass:"bottom1-1-2"},[t._v("关注")])],1),a("v-uni-view",{staticClass:"bottom1-2"},[2===t.data.is_halt?a("v-uni-view",{staticClass:"bottom1-status2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handGoDownload.apply(void 0,arguments)}}},[t._v("已停售")]):1===t.data.is_halt&&0===t.data.sale_status?a("v-uni-view",{staticClass:"bottom1-status0",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handGoDownload.apply(void 0,arguments)}}},[t._v(t._s(t.countDown))]):1===t.data.is_halt&&1===t.data.sale_status?a("v-uni-view",{staticClass:"bottom1-status1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handGoDownload.apply(void 0,arguments)}}},[t._v("立即抢购")]):1===t.data.is_halt&&2===t.data.sale_status?a("v-uni-view",{staticClass:"bottom1-status2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handGoDownload.apply(void 0,arguments)}}},[t._v("已售罄")]):t._e()],1)],1):a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isApprove,expression:"!isApprove"}],staticClass:"bottom1"},[1===t.data.is_like?a("v-uni-view",{staticClass:"bottom1-1 followed",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handFollow(2)}}},[a("v-uni-image",{staticClass:"bottom1-1-1",attrs:{src:i("53cc"),mode:""}}),a("v-uni-view",{staticClass:"bottom1-1-2"},[t._v("关注")])],1):a("v-uni-view",{staticClass:"bottom1-1 unfollow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handFollow(1)}}},[a("v-uni-image",{staticClass:"bottom1-1-1",attrs:{src:i("4b85"),mode:""}}),a("v-uni-view",{staticClass:"bottom1-1-2"},[t._v("关注")])],1),a("v-uni-view",{staticClass:"bottom1-2"},[2===t.data.is_halt?a("v-uni-view",{staticClass:"bottom1-status2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handOrLogin(3)}}},[t._v("已停售")]):1===t.data.is_halt&&0===t.data.sale_status?a("v-uni-view",{staticClass:"bottom1-status0",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handOrLogin(0)}}},[t._v(t._s(t.countDown))]):1===t.data.is_halt&&1===t.data.sale_status?a("v-uni-view",{staticClass:"bottom1-status1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handBuyThe.apply(void 0,arguments)}}},[t._v("立即抢购")]):1===t.data.is_halt&&2===t.data.sale_status?a("v-uni-view",{staticClass:"bottom1-status2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handOrLogin(2)}}},[t._v("已售罄")]):t._e()],1)],1),a("wyb-popup",{ref:"popup",attrs:{type:"bottom",height:"701",width:"750",radius:"6",bgColor:"#1D1D1D",showCloseIcon:!0}},[a("v-uni-view",{staticClass:"popup-content"},[a("v-uni-view",{staticClass:"popup-i"},[a("v-uni-view",{staticClass:"i-img"},[a("v-uni-image",{attrs:{src:t.data.index_img,mode:""}}),a("v-uni-view",{staticClass:"img-line"})],1),a("v-uni-view",{staticClass:"i-title"},[a("v-uni-view",{staticClass:"title-t"},[t._v(t._s(t.data.name))]),a("v-uni-view",{staticClass:"title-p"},[t._v("发行价格"),a("v-uni-text",{staticClass:"title-p-rmb"},[t._v("￥"+t._s(t.data.sale_price))]),t._v("/张")],1)],1)],1),a("v-uni-view",{staticClass:"popup-f"},[a("v-uni-image",{staticClass:"popup-f-img",attrs:{src:i("e30f")}}),a("v-uni-text",[t._v("购买专辑可以永久聆听")])],1),a("v-uni-view",{staticClass:"popup-count"},[a("v-uni-view",{staticClass:"count-text"},[t._v("数量")]),a("v-uni-view",{staticClass:"number-count"},[a("v-uni-view",{staticClass:"minus",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handMinus()}}},[a("v-uni-view",{staticClass:"minus-img"},[a("v-uni-view",{class:["h",this.count>1?"active-icon":""]})],1)],1),a("v-uni-input",{staticClass:"countc",attrs:{type:"number",maxlength:"3",name:"",id:""},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onCountChange()}},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}}),a("v-uni-view",{staticClass:"plus",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handPlus()}}},[a("v-uni-view",{staticClass:"plus-img"},[a("v-uni-view",{class:["h",this.count<100?"active-icon":""]}),a("v-uni-view",{class:["v",this.count<100?"active-icon":""]})],1)],1)],1)],1),a("v-uni-view",{staticClass:"popup-e"},[a("v-uni-view",{staticClass:"e-text"},[t._v("实付")]),a("v-uni-view",{staticClass:"e-price"},[a("v-uni-text",{staticClass:"rmb"},[t._v("￥")]),a("v-uni-text",{staticClass:"count"},[t._v(t._s(t.total))])],1)],1),a("v-uni-view",{staticClass:"popup-d"},[a("v-uni-view",{staticClass:"d-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handOrder()}}},[t._v("立即抢购")])],1),a("v-uni-view",{staticClass:"popup-c"},[t._v("喜欢的话，就不要错过哦！")])],1)],1)],1)},n=[]},"270f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */@-webkit-keyframes turning-data-v-226ffc44{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes turning-data-v-226ffc44{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.nav-r[data-v-226ffc44]{width:%?48?%;height:%?48?%}.card[data-v-226ffc44]{background:#151516;border-radius:%?8?%;padding:%?36?% %?16?%}.card .card-body[data-v-226ffc44]{padding:%?20?%;background:transparent;border:%?0.5?% solid #5b5b5b;border-radius:%?8?%}.container[data-v-226ffc44]{padding:0 %?24?%}.container .preOrderDetails-header[data-v-226ffc44]{text-align:center;overflow:hidden}.container .preOrderDetails-header .cover[data-v-226ffc44]{margin:%?41?% auto 0 auto;text-align:center}.container .preOrderDetails-header .cover .cover-content[data-v-226ffc44]{position:relative;width:%?375?%;height:%?375?%;margin:auto}.container .preOrderDetails-header .cover .cover-content .cover-img[data-v-226ffc44]{width:%?375?%;height:%?375?%}.container .preOrderDetails-header .cover .cover-content .cover-turn[data-v-226ffc44]{z-index:1;position:absolute;top:%?24?%;left:%?24?%;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;width:%?327?%;height:%?327?%}.container .preOrderDetails-header .cover .cover-content .cover-turn1[data-v-226ffc44]{z-index:2;position:absolute;top:%?84.5?%;left:%?84.5?%;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;width:%?206?%;height:%?206?%;border-radius:%?103?%}.container .preOrderDetails-header .cover .cover-content .cover-play[data-v-226ffc44]{z-index:2;position:absolute;left:%?100.98?%;top:%?100.98?%;width:%?172.02?%;height:%?172.02?%;border-radius:%?86.01?%}.container .preOrderDetails-header .row1[data-v-226ffc44]{margin-top:%?25?%;font-weight:500;font-size:%?36?%;text-align:center;color:#ececec;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .preOrderDetails-header .row1 uni-image[data-v-226ffc44]{width:%?84?%;height:%?40?%;margin-right:%?4?%;vertical-align:middle}.container .preOrderDetails-header .row2[data-v-226ffc44]{margin-top:%?9?%;font-size:%?26?%;color:#aeaeae;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .preOrderDetails-header .row2 uni-text[data-v-226ffc44]{margin-left:%?16?%}.container .preOrderDetails-header .price[data-v-226ffc44]{margin-top:%?11?%;color:#d10910}.container .preOrderDetails-header .price .rmb[data-v-226ffc44]{font-size:%?28?%}.container .preOrderDetails-header .price .count[data-v-226ffc44]{font-size:%?36?%;margin-right:%?4?%;font-weight:600}.container .preOrderDetails-header .price .unit[data-v-226ffc44]{font-size:%?26?%}.container .preOrderDetails-body[data-v-226ffc44]{margin-top:%?16?%}.container .preOrderDetails-body .cardbox1 .row1[data-v-226ffc44]{height:%?44?%;margin-bottom:%?16?%;font-weight:600;font-size:%?32?%;line-height:%?44?%;color:#ac9147}.container .preOrderDetails-body .cardbox1 .row2 .row2-1[data-v-226ffc44]{display:flex;font-size:%?26?%;line-height:%?48?%;\n  /* identical to box height, or 185% */overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#aeaeae}.container .preOrderDetails-body .cardbox1 .row2 .row2-1 .row2-1-l[data-v-226ffc44]{margin-right:%?24?%;width:%?104?%;text-align:right}.container .preOrderDetails-body .cardbox1 .row2 .row2-1 .row2-1-r[data-v-226ffc44]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .preOrderDetails-body .cardbox1 .row3[data-v-226ffc44]{margin-top:%?24?%;margin-bottom:%?16?%;font-weight:600;font-size:%?32?%;line-height:%?44?%;color:#ac9147}.container .preOrderDetails-body .cardbox1 .row4[data-v-226ffc44]{width:100%;font-size:%?26?%;line-height:%?36?%;color:#aeaeae;white-space:pre-wrap}.container .preOrderDetails-body .cardbox2[data-v-226ffc44]{margin-top:%?21?%;margin-bottom:%?25?%}.container .preOrderDetails-body .cardbox2 .work .row1[data-v-226ffc44]{margin-bottom:%?16?%;font-weight:600;font-size:%?32?%;line-height:%?44?%;color:#ac9147;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .preOrderDetails-body .cardbox2 .work .row2[data-v-226ffc44]{padding-bottom:%?24?%;font-size:%?26?%;line-height:%?36?%;color:#aeaeae;white-space:pre-wrap}.container .preOrderDetails-body .cardbox2 .work .row2[data-v-226ffc44]:nth-last-child(1){padding-bottom:%?24?%}.container .h120[data-v-226ffc44]{height:%?120?%}.container .bottom1[data-v-226ffc44]{z-index:8;position:fixed;bottom:0;left:0;box-sizing:border-box;width:100%;height:%?120?%;padding:0 %?42?% 0 %?64?%;display:flex;align-items:center;background:#212121}.container .bottom1 .bottom1-1[data-v-226ffc44]{flex:1}.container .bottom1 .bottom1-1 .bottom1-1-1[data-v-226ffc44]{width:%?48?%;height:%?48?%}.container .bottom1 .bottom1-1 .bottom1-1-2[data-v-226ffc44]{width:%?57.62?%;text-align:center;font-family:PingFang HK;font-style:normal;font-weight:400;line-height:%?28?%;font-size:%?24?%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.83);transform:scale(.83)}.container .bottom1 .bottom1-1 .followed[data-v-226ffc44]{color:#c8a964}.container .bottom1 .bottom1-1 .unfollow[data-v-226ffc44]{color:#777}.container .bottom1 .bottom1-2[data-v-226ffc44]{width:%?522?%;height:%?74?%}.container .bottom1 .bottom1-2 .bottom1-status0[data-v-226ffc44]{width:%?522?%;height:%?74?%;background:#d10910;border-radius:%?48?%;font-family:PingFang SC;font-style:normal;font-weight:500;font-size:%?32?%;line-height:%?74?%;text-align:center;color:#ececec}.container .bottom1 .bottom1-2 .bottom1-status0[data-v-226ffc44]:active{background-color:rgba(209,9,16,.6);color:#868686}.container .bottom1 .bottom1-2 .bottom1-status1[data-v-226ffc44]{width:%?522?%;height:%?74?%;background:#d10910;border-radius:%?48?%;font-family:PingFang SC;font-style:normal;font-weight:500;font-size:%?32?%;line-height:%?74?%;text-align:center;color:#ececec}.container .bottom1 .bottom1-2 .bottom1-status1[data-v-226ffc44]:active{background-color:rgba(209,9,16,.6);color:#868686}.container .bottom1 .bottom1-2 .bottom1-status2[data-v-226ffc44]{width:%?522?%;height:%?74?%;background:#7c7c7c;border-radius:%?48?%;font-family:PingFang SC;font-style:normal;font-weight:500;font-size:%?32?%;line-height:%?74?%;text-align:center;color:#ececec}.container[data-v-226ffc44] .icon-close{font-size:%?36?%}.container[data-v-226ffc44] .wyb-popup-box{z-index:998!important}.container[data-v-226ffc44] .wyb-popup-mask{z-index:997!important}.container .popup-content .popup-i[data-v-226ffc44]{position:relative;display:flex;padding-top:%?24?%;padding-left:%?28?%}.container .popup-content .popup-i .i-img[data-v-226ffc44]{position:relative;width:%?148?%;height:%?148?%}.container .popup-content .popup-i .i-img uni-image[data-v-226ffc44]{width:100%;height:100%;border-radius:%?20?%}.container .popup-content .popup-i .i-img .img-line[data-v-226ffc44]{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:%?135?%;height:%?135?%;border:%?0.6?% solid hsla(0,0%,100%,.2);border-radius:%?20?%;background-color:initial}.container .popup-content .popup-i .i-title[data-v-226ffc44]{flex:1;padding-top:%?4?%}.container .popup-content .popup-i .i-title .title-t[data-v-226ffc44]{margin-left:%?24?%;font-weight:500;font-size:%?32?%;line-height:%?44?%;color:#ececec;padding-bottom:%?20?%;width:%?480?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .popup-content .popup-i .i-title .title-p[data-v-226ffc44]{display:inline-block;margin-left:%?16?%;padding:%?10?% %?16?%;font-size:%?24?%;background:rgba(220,45,30,.2);mix-blend-mode:normal;border-radius:22px;color:#dc2d1e;color:#d10910}.container .popup-content .popup-i .i-title .title-p .title-p-rmb[data-v-226ffc44]{padding-left:%?4?%;font-weight:600;font-size:%?28?%;color:#d10910;-webkit-transform:rotate(-.39deg);transform:rotate(-.39deg)}.container .popup-content .popup-f[data-v-226ffc44]{display:flex;align-items:center;padding:%?26?% %?40?% %?44?% %?40?%}.container .popup-content .popup-f .popup-f-img[data-v-226ffc44]{width:%?40?%;height:%?40?%}.container .popup-content .popup-f uni-text[data-v-226ffc44]{font-size:%?28?%;color:#aeaeae;margin-left:%?16?%}.container .popup-content .popup-count[data-v-226ffc44]{display:flex;align-items:center;justify-content:space-between;padding:0 %?32?% %?24?% %?40?%;color:#ececec;font-size:%?28?%}.container .popup-content .popup-count .number-count[data-v-226ffc44]{display:flex;align-items:center;box-sizing:border-box;width:%?194?%;height:%?60?%;border-radius:%?16?%;border:%?1?% solid #686868}.container .popup-content .popup-count .number-count .minus[data-v-226ffc44]{box-sizing:border-box;width:%?62?%;height:%?58?%;font-size:%?32?%;border-right:%?1?% solid #686868}.container .popup-content .popup-count .number-count .minus .minus-img[data-v-226ffc44]{position:relative;width:%?62?%;height:%?58?%;border-radius:%?16?% 0 0 %?16?%}.container .popup-content .popup-count .number-count .minus .minus-img .h[data-v-226ffc44]{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:%?32?%;height:%?2?%;background-color:#686868}.container .popup-content .popup-count .number-count uni-input.countc[data-v-226ffc44]{flex:1;height:%?58?%;text-align:center;font-size:%?36?%;font-weight:600;color:#d10910}.container .popup-content .popup-count .number-count .plus[data-v-226ffc44]{display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:%?62?%;height:%?58?%;font-size:%?32?%;border-left:%?1?% solid #686868}.container .popup-content .popup-count .number-count .plus .plus-img[data-v-226ffc44]{position:relative;width:%?62?%;height:%?58?%;border-radius:0 %?16?% %?16?% 0}.container .popup-content .popup-count .number-count .plus .plus-img .h[data-v-226ffc44]{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:%?32?%;height:%?2?%;background-color:#686868}.container .popup-content .popup-count .number-count .plus .plus-img .v[data-v-226ffc44]{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:%?2?%;height:%?32?%;background-color:#686868}.container .popup-content .popup-count .number-count .active-icon[data-v-226ffc44]{background-color:#e8e8e8!important}.container .popup-content .popup-e[data-v-226ffc44]{padding-top:%?24?%;padding:0 %?32?% %?64?% %?40?%;display:flex;align-items:center;justify-content:space-between}.container .popup-content .popup-e .e-text[data-v-226ffc44]{color:#ececec;font-size:%?28?%}.container .popup-content .popup-e .e-price[data-v-226ffc44]{color:#d10910}.container .popup-content .popup-e .e-price .rmb[data-v-226ffc44]{font-size:%?28?%}.container .popup-content .popup-e .e-price .count[data-v-226ffc44]{font-size:%?40?%;font-weight:600}.container .popup-content .popup-d[data-v-226ffc44]{text-align:center}.container .popup-content .popup-d .d-btn[data-v-226ffc44]{display:flex;align-items:center;justify-content:center;line-height:0;margin:auto;width:%?474?%;height:%?96?%;background:#d10910;border-radius:%?90?%;font-weight:500;font-size:%?32?%;color:#ececec}.container .popup-content .popup-d .d-btn[data-v-226ffc44]:active{background-color:rgba(209,9,16,.6);color:#868686}.container .popup-content .popup-c[data-v-226ffc44]{padding-top:%?20?%;font-size:%?22?%;line-height:%?30?%;text-align:center;color:#666}',""]),t.exports=e},5585:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("a9e3"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var o=a(i("1da1")),n=a(i("1754")),r=a(i("adff")),s=i("173f"),c=i("1a64"),u=i("df47"),d={components:{WybPopup:n.default,NavHead:r.default},data:function(){return{product_item_id:"",share_sign:"",show_pop:!1,data:{name:"",product_item_id:"",index_img:"",sale_time:"",stock_num:0,remain_stock_num:"",sale_price:"",sale_status:"",rare_type:"",evaluate_type:"",publish_author:"",publish_time:"",singles_num:"",buy_notice:"",music_list:[],is_login:"",publish_time1:"",sale_time1:"",is_like:0,video_url:"",video_index_pic:"",author_info:{author_name:"",author_avatar:"",desc:""},statistics_info:{like:"",play:"",visit:"",share:""}},count:1,statusTimer:null,countDown:"",isApprove:!0}},computed:{total:function(){return this.data.sale_price?(this.count*this.data.sale_price).toFixed(2):0}},methods:{handleBack:function(){var t=getCurrentPages();1===t.length?this.$store.state.user.token?uni.redirectTo({url:"/pages/index/index"}):(0,u.goLogin)():uni.navigateBack({delta:1})},getDetails:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function i(){var a,o,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,e.$post(s.collections_index_detail,{product_item_id:t});case 3:if(a=i.sent,console.log(a),0===a.code){i.next=7;break}return i.abrupt("return",uni.showToast({icon:"error",title:a.msg}));case 7:o=(0,u.getTimeData)(1e3*a.data.sale_time),n=(0,u.getTimeData)(1e3*a.data.publish_time),a.data.sale_time1="".concat(o.mon,"月").concat(o.dd,"日").concat(o.hh,":").concat(o.MM),a.data.publish_time1="".concat(n.y,"-").concat(n.mon,"-").concat(n.dd),e.data=a.data,1===a.data.is_halt&&e.handSetTimeout(),i.next=18;break;case 15:i.prev=15,i.t0=i["catch"](0),uni.showToast({icon:"error",title:i.t0.message});case 18:case"end":return i.stop()}}),i,null,[[0,15]])})))()},handSetTimeout:function(){var t=this;0===this.data.sale_status&&(this.statusTimer=setInterval((function(){var e=(new Date).getTime(),i=1e3*t.data.sale_time-e;if(i>0){var a=parseInt(i/1e3/60/60),o=parseInt(i/1e3/60%60),n=parseInt(i/1e3%60);a=a<10?"0"+a:a,o=o<10?"0"+o:o,n=n<10?"0"+n:n,t.countDown="距离开售 ".concat(a,"时").concat(o,"分").concat(n,"秒")}else t.getDetails(t.product_item_id),clearTimeout(t.statusTimer)}),1e3))},onCountChange:function(){this.count>100?(uni.showToast({icon:"none",title:"单次购买数量不可超过100张",duration:3e3}),this.count=100):this.count<1&&(this.count=1)},handMinus:function(){this.count>1&&this.count--},handPlus:function(){this.count<100&&this.count++},handShare:function(){if(!this.$store.state.user.token)return(0,u.goLogin)();uni.navigateTo({url:"/pages/poster/poster?product_item_id=".concat(this.product_item_id,"&product_type=2")})},handOrLogin:function(t){3===t?uni.showToast({title:"已停售，感谢您的关注",icon:"none"}):2===t?uni.showToast({title:"已售罄，感谢您的关注",icon:"none"}):0===t&&uni.showToast({title:"未开售",icon:"none"}),this.$store.state.user.token||(0,u.goLogin)()},handBuyThe:function(){this.$store.state.user.token?this.$refs.popup.show():(0,u.goLogin)()},handOrder:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var i,a,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.$store.state.user.token){e.next=3;break}return e.abrupt("return",(0,u.goLogin)());case 3:return e.next=5,t.$post(s.h5_conllections_buy_checkout,{product_item_id:t.product_item_id,buy_num:Number(t.count)});case 5:if(i=e.sent,0===i.code){e.next=14;break}if(710!==i.code){e.next=11;break}uni.navigateTo({url:"/pages/idAuth/idAuth"}),e.next=12;break;case 11:return e.abrupt("return",uni.showToast({title:i.msg,icon:"error"}));case 12:e.next=16;break;case 14:a=i.data.info,t.$store.state.user.inApp?(o=window.localStorage.getItem("AppConfigInfo"),o=o?JSON.parse(o):{"version-code":"1750"},Number(o["version-code"])>=1900?(n={page:"diskConfirmOrderPage",isNeedLogin:!0,params:a},(0,u.openAppPage)(n)):uni.showToast({title:"请更新到最新版本后重试",icon:"none"})):uni.navigateTo({url:"/pages/settlement/settlement?product_item_id=".concat(t.product_item_id,"&buy_num=").concat(t.count,"&params=").concat(JSON.stringify(a))});case 16:e.next=22;break;case 18:e.prev=18,e.t0=e["catch"](0),console.log("error",e.t0),uni.showToast({title:e.t0.message,icon:"error"});case 22:case"end":return e.stop()}}),e,null,[[0,18]])})))()},handFollow:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,e.$post(s.collections_index_like,{product_item_id:e.product_item_id,operation_type:t});case 3:if(a=i.sent,0===a.code){i.next=6;break}return i.abrupt("return",uni.showToast({title:a.msg,icon:"error"}));case 6:1===t?uni.showToast({title:"关注成功",icon:"none"}):uni.showToast({title:"已取消关注",icon:"none"}),e.data.is_like=1===t?1:0,i.next=12;break;case 10:i.prev=10,i.t0=i["catch"](0);case 12:case"end":return i.stop()}}),i,null,[[0,10]])})))()},visitStatics:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.post1)(s.collections_index_visit,{product_item_id:t.product_item_id});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))()},handGoDownload:function(){(0,u.goDownload)()}},onLoad:function(t){console.log("onload",t),this.isApprove="true"===window.sessionStorage.getItem("isApprove"),this.product_item_id=Number(t.product_item_id),this.share_sign=t.share_sign||"",this.getDetails(this.product_item_id),this.visitStatics()},onShow:function(){},created:function(){console.log("created")},beforeDestroy:function(){clearTimeout(this.statusTimer)}};e.default=d},"5af5":function(t,e,i){"use strict";i.r(e);var a=i("5585"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"9d3e":function(t,e){t.exports="data:image/png;base64,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"},b485:function(t,e,i){"use strict";i.r(e);var a=i("256f"),o=i("5af5");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("1a80");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"226ffc44",null,!1,a["a"],r);e["default"]=c.exports},b769:function(t,e,i){var a=i("270f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("8813911c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);