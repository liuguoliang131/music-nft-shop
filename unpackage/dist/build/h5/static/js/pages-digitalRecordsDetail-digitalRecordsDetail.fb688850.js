(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-digitalRecordsDetail-digitalRecordsDetail"],{"0d01":function(t,i,e){"use strict";var a=e("4ea4");e("99af"),e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("adff")),o=a(e("dcd9")),s=e("173f"),r=e("1a64"),c=e("df47"),l=a(e("df28")),d=a(e("855a")),v={components:{NavHead:n.default,MyDialog:o.default},mixins:[d.default],data:function(){return{id:null,show:!1,detail:{order_id:null,product_item_id:null,name:"",singles_num:1,publish_time:"",publish_author:"",index_url:"",pay_price:"",order_total_price:"",buy_price:"",buy_num:3,contract_address:"",token_id:"",token_standard:"",order_no:"",order_status:0,pay_type:0,order_create_time:"",pay_time:0,certificate:{}}}},onLoad:function(t){var i=t.id;this.id=i,this.getOrderDetail(i)},filters:{filterPayType:function(t){var i={1:"支付宝",2:"微信支付",3:"银行卡",4:"零钱"};return i[t]||"未知"}},methods:{filterTimes:function(t){return(0,l.default)(t).format("YYYY/MM/DD HH:mm:ss")},getOrderDetail:function(t){var i=this;(0,r.post)(s.collections_user_collectionInfo,{owner_id:t}).then((function(t){i.detail=t.data}))},handViewCert:function(){this.$refs.dialog.show()},handZhuanZeng:function(){if(this.$store.state.user.inApp){var t=window.localStorage.getItem("AppConfigInfo");t=t?JSON.parse(t):{"version-code":"1750"},Number(t["version-code"])>=1900?(0,c.openAppPage)({page:"sendDiskGiftPage",isNeedLogin:!0,params:this.detail}):uni.showToast({title:"请更新到最新版本后重试",icon:"none"})}else(0,c.jumpBefore)(null)},handTingGe:function(){if(this.$store.state.user.inApp){var t=window.localStorage.getItem("AppConfigInfo");t=t?JSON.parse(t):{"version-code":"1750"},Number(t["version-code"])>=1800?(0,c.playAlbum)(this.detail.music_list,this.detail.name,""):uni.navigateTo({url:"/pages/musicPlayer/musicPlayer?owner_id=".concat(this.detail.owner_id,"&code_num=").concat(this.detail.code_num,"&product_item_id=").concat(this.detail.product_item_id,"&music_list=").concat(JSON.stringify(this.detail.music_list),"&name=").concat(this.detail.name)})}else uni.navigateTo({url:"/pages/musicPlayer/musicPlayer?owner_id=".concat(this.detail.owner_id,"&code_num=").concat(this.detail.code_num,"&product_item_id=").concat(this.detail.product_item_id,"&music_list=").concat(JSON.stringify(this.detail.music_list),"&name=").concat(this.detail.name)})}}};i.default=v},"31a3":function(t,i,e){"use strict";e.r(i);var a=e("571d"),n=e("a1b3");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("51d0");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"32f326cf",null,!1,a["a"],s);i["default"]=c.exports},"51d0":function(t,i,e){"use strict";var a=e("a20d"),n=e.n(a);n.a},"571d":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"container"},[a("nav-head",{attrs:{title:"唱片详情"}}),a("v-uni-view",{staticClass:"title mt20"},[a("v-uni-text",{staticClass:"title-v"}),t._v("数字音乐信息")],1),a("v-uni-view",{staticClass:"box1"},[a("v-uni-view",{staticClass:"box1-1"},[a("v-uni-image",{attrs:{src:t.detail.index_img,mode:""}}),a("v-uni-view",{staticClass:"sideline"})],1),a("v-uni-view",{staticClass:"box1-2"},[a("v-uni-view",{staticClass:"box1-2-1"},[t._v(t._s(t.detail.name))]),a("v-uni-view",{staticClass:"box1-2-2"},[a("v-uni-view",{staticClass:"box1-2-2-l"},[t._v("发行方")]),a("v-uni-view",{staticClass:"box1-2-2-r"},[t._v(t._s(t.detail.publish_author))])],1),a("v-uni-view",{staticClass:"box1-2-2"},[a("v-uni-view",{staticClass:"box1-2-2-l"},[t._v("发行时间")]),a("v-uni-view",{staticClass:"box1-2-2-r"},[t._v(t._s(t.filterTimes(1e3*t.detail.publish_time)))])],1),a("v-uni-view",{staticClass:"box1-2-2"},[a("v-uni-view",{staticClass:"box1-2-2-l"},[t._v("发行价格")]),a("v-uni-view",{staticClass:"box1-2-2-r"},[t._v("￥"+t._s(t.detail.sale_price)+"/张")])],1)],1)],1),a("v-uni-view",{staticClass:"title mt34 mb7"},[a("v-uni-text",{staticClass:"title-v"}),t._v("认证信息")],1),a("v-uni-view",{staticClass:"box2"},[a("v-uni-view",{staticClass:"box2-1"},[a("v-uni-view",{staticClass:"box2-1-l"},[t._v("Record Number")]),a("v-uni-view",{staticClass:"box2-1-r"},[t._v(t._s(t.detail.code_num))])],1),a("v-uni-view",{staticClass:"box2-1"},[a("v-uni-view",{staticClass:"box2-1-l"},[t._v("Contract Address")]),a("v-uni-view",{staticClass:"box2-1-r"},[t._v(t._s(t.detail.contract_address))])],1),a("v-uni-view",{staticClass:"box2-1"},[a("v-uni-view",{staticClass:"box2-1-l"},[t._v("Token ID")]),a("v-uni-view",{staticClass:"box2-1-r"},[t._v(t._s(t.detail.token_id))])],1),a("v-uni-view",{staticClass:"box2-1"},[a("v-uni-view",{staticClass:"box2-1-l"},[t._v("Token Standard")]),a("v-uni-view",{staticClass:"box2-1-r"},[t._v(t._s(t.detail.token_standard))])],1),a("v-uni-view",{staticClass:"box2-1"},[a("v-uni-view",{staticClass:"box2-1-l"},[t._v("数字证书")]),a("v-uni-view",{staticClass:"box2-1-r viewcert",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handViewCert.apply(void 0,arguments)}}},[t._v("查看证书"),a("v-uni-image",{attrs:{src:e("faac"),mode:""}})],1)],1)],1),a("v-uni-view",{staticClass:"splitline"}),a("v-uni-view",{staticClass:"title mb9"},[a("v-uni-text",{staticClass:"title-v"}),t._v("介绍信息")],1),a("v-uni-view",{staticClass:"auth"},[a("v-uni-image",{staticClass:"auth-1",attrs:{src:t.detail.index_img,mode:""}}),a("v-uni-view",{staticClass:"auth-2"},[t._v(t._s(t.detail.music_list?t.detail.music_list[0].singer:""))])],1),a("v-uni-view",{staticClass:"text",domProps:{innerHTML:t._s(t.detail.music_list?t.detail.music_list[0].desc:"")}}),a("v-uni-view",{staticClass:"h116"}),a("v-uni-view",{staticClass:"fixed-bottom"},[a("v-uni-view",{staticClass:"zhuanzeng",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handZhuanZeng.apply(void 0,arguments)}}},[t._v("转赠")]),a("v-uni-view",{staticClass:"tingge",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handTingGe.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:e("5458"),mode:""}}),t._v("听歌")],1)],1),a("my-dialog",{ref:"dialog"},[a("v-uni-view",{staticClass:"cert-content"},[a("v-uni-view",{staticClass:"cert-row1"},[a("v-uni-image",{attrs:{src:e("387c"),mode:""}})],1),a("v-uni-view",{staticClass:"cert-row2"},[a("v-uni-view",{staticClass:"row2-line1"}),t._v("数字音乐证书"),a("v-uni-view",{staticClass:"row2-line2"})],1),a("v-uni-view",{staticClass:"cert-row3"},[a("v-uni-view",{staticClass:"row3-1"},[t._v("编       号")]),a("v-uni-view",{staticClass:"row3-2"},[t._v(t._s(t.detail.certificate.code))])],1),a("v-uni-view",{staticClass:"cert-row3"},[a("v-uni-view",{staticClass:"row3-1"},[t._v("名       称")]),a("v-uni-view",{staticClass:"row3-2"},[t._v(t._s(t.detail.certificate.name))])],1),a("v-uni-view",{staticClass:"cert-row3"},[a("v-uni-view",{staticClass:"row3-1"},[t._v("发  行 者")]),a("v-uni-view",{staticClass:"row3-2"},[t._v(t._s(t.detail.certificate.publish_author))])],1),a("v-uni-view",{staticClass:"cert-row3"},[a("v-uni-view",{staticClass:"row3-1"},[t._v("发行时间")]),a("v-uni-view",{staticClass:"row3-2"},[t._v(t._s(t.filterTimes(1e3*t.detail.certificate.publish_time)))])],1),a("v-uni-view",{staticClass:"cert-row3"},[a("v-uni-view",{staticClass:"row3-1"},[t._v("哈希地址")]),a("v-uni-view",{staticClass:"h102"},[t._v(t._s(t.detail.certificate.block_chain_hash))])],1)],1)],1)],1)},o=[]},70374:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-32f326cf]{padding:0 %?32?%;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?34?%}.container .title[data-v-32f326cf]{display:flex;align-items:center;color:#e4c985;font-size:%?24?%;font-weight:400;height:%?24?%}.container .title .title-v[data-v-32f326cf]{width:%?6?%;height:%?24?%;background:#e4c985;border-radius:%?2?%;margin-right:%?12?%}.container .mt20[data-v-32f326cf]{margin-top:%?20?%}.container .mt34[data-v-32f326cf]{margin-top:%?34?%}.container .mb7[data-v-32f326cf]{margin-bottom:%?15?%}.container .mb9[data-v-32f326cf]{margin-bottom:%?22?%}.container .box1[data-v-32f326cf]{margin-top:%?23?%;width:%?686?%;display:flex}.container .box1 .box1-1[data-v-32f326cf]{position:relative;width:%?240?%;height:%?240?%}.container .box1 .box1-1 uni-image[data-v-32f326cf]{width:%?240?%;height:%?240?%;border-radius:%?20?%}.container .box1 .box1-1 .sideline[data-v-32f326cf]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:%?220?%;height:%?220?%;border:%?1?% solid hsla(0,0%,100%,.2);border-radius:%?20?%}.container .box1 .box1-2[data-v-32f326cf]{flex:1;padding-left:%?40?%}.container .box1 .box1-2 .box1-2-1[data-v-32f326cf]{font-weight:500;font-size:%?28?%;line-height:%?40?%;color:#ddd;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .box1 .box1-2 .box1-2-2[data-v-32f326cf]{display:flex;align-items:center;margin-top:%?10?%;font-weight:400;font-size:%?26?%;line-height:%?36?%}.container .box1 .box1-2 .box1-2-2 .box1-2-2-l[data-v-32f326cf]{width:%?128?%;color:#777}.container .box1 .box1-2 .box1-2-2 .box1-2-2-r[data-v-32f326cf]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#aeaeae}.container .box2 .box2-1[data-v-32f326cf]{display:flex;align-items:center;margin-top:%?10?%;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?26?%;line-height:%?36?%}.container .box2 .box2-1 .box2-1-l[data-v-32f326cf]{box-sizing:border-box;width:%?250?%;padding-left:%?18?%;color:#777}.container .box2 .box2-1 .box2-1-r[data-v-32f326cf]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#aeaeae}.container .box2 .box2-1 .viewcert[data-v-32f326cf]{color:#d10910}.container .box2 .box2-1 .viewcert uni-image[data-v-32f326cf]{width:%?24?%;height:%?24?%;vertical-align:middle}.container .splitline[data-v-32f326cf]{margin-top:%?33?%;margin-bottom:%?32?%;height:.5px;opacity:.3;background-color:#aeaeae;border-radius:%?1?%}.container .auth[data-v-32f326cf]{display:flex;align-items:center}.container .auth .auth-1[data-v-32f326cf]{width:%?48?%;height:%?48?%;border-radius:%?24?%;margin-right:%?8?%}.container .auth .auth-2[data-v-32f326cf]{font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?26?%;line-height:%?36?%;color:#aeaeae;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .text[data-v-32f326cf]{margin-top:%?8?%;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?34?%;white-space:pre-wrap;color:#777}.container .price[data-v-32f326cf]{color:#d10910!important}.container .fixed-bottom[data-v-32f326cf]{position:fixed;bottom:%?20?%;left:0;width:%?686?%;height:%?96?%;padding:0 %?32?%;display:flex;align-items:center;justify-content:space-between}.container .fixed-bottom .zhuanzeng[data-v-32f326cf]{background:#c8a964;width:%?332?%;height:%?96?%;border-radius:%?48?%;display:flex;align-items:center;justify-content:center;font-family:PingFang SC;font-style:normal;font-weight:500;font-size:%?32?%;line-height:96px;color:#532609}.container .fixed-bottom .tingge[data-v-32f326cf]{background:#fff;width:%?332?%;height:%?96?%;border-radius:%?48?%;display:flex;align-items:center;justify-content:center;font-family:PingFang SC;font-style:normal;font-weight:500;font-size:%?32?%;line-height:96px;color:#532609}.container .fixed-bottom .tingge uni-image[data-v-32f326cf]{margin-right:%?8?%;width:%?40?%;height:%?40?%}.container .h116[data-v-32f326cf]{height:%?116?%}.container[data-v-32f326cf] .visible .center-box{width:%?558?%;height:%?584?%;border-radius:%?20?%;background:#fff}.container[data-v-32f326cf] .visible .center-box .cert-content{position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;box-sizing:border-box;width:%?526?%;height:%?552?%;padding:0 %?16?%;border:%?0.5?% solid #ac9147;border-radius:%?12?%;text-align:center}.container[data-v-32f326cf] .visible .center-box .cert-content .cert-row1{padding-top:%?20?%;padding-bottom:%?8?%}.container[data-v-32f326cf] .visible .center-box .cert-content .cert-row1 uni-image{width:%?98?%;height:%?130?%}.container[data-v-32f326cf] .visible .center-box .cert-content .cert-row2{padding-bottom:%?4?%;display:flex;align-items:center;justify-content:center;font-family:PingFang SC;font-style:normal;font-weight:600;font-size:%?28?%;line-height:%?40?%;\n  /* identical to box height */text-align:center;color:#222}.container[data-v-32f326cf] .visible .center-box .cert-content .cert-row2 .row2-line1{width:%?56?%;height:%?0.5?%;background-color:#666;margin-right:%?8?%}.container[data-v-32f326cf] .visible .center-box .cert-content .cert-row2 .row2-line2{width:%?56?%;height:%?0.5?%;background-color:#666;margin-left:%?8?%}.container[data-v-32f326cf] .visible .center-box .cert-content .cert-row3{display:flex;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?34?%;\n  /* identical to box height */text-align:left;color:#999;padding-top:%?16?%}.container[data-v-32f326cf] .visible .center-box .cert-content .cert-row3 .row3-1{width:%?96?%;margin-right:%?24?%;text-align:left}.container[data-v-32f326cf] .visible .center-box .cert-content .cert-row3 .row3-2{font-family:PingFang SC;font-style:normal;font-weight:600;font-size:%?24?%;line-height:%?34?%;\n  /* identical to box height */color:#666;flex:1;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container[data-v-32f326cf] .visible .center-box .cert-content .cert-row3 .h102{font-family:PingFang SC;font-style:normal;font-weight:600;font-size:%?24?%;line-height:%?34?%;\n  /* identical to box height */color:#666;width:%?370?%;height:%?110?%;word-wrap:break-word;word-break:break-all;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical}',""]),t.exports=i},a1b3:function(t,i,e){"use strict";e.r(i);var a=e("0d01"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},a20d:function(t,i,e){var a=e("70374");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("60e7636e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);