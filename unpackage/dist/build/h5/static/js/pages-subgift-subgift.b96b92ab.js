(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subgift-subgift"],{"14ba":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.dialog[data-v-427891ea]{position:fixed;top:0;left:0;z-index:999;width:100vw;height:0;background-color:transparent;display:flex;align-items:center;justify-content:center;transition:background-color .5s}.dialog .center-box[data-v-427891ea]{width:%?500?%;min-height:0;background-color:initial;border-radius:%?16?%;background-color:#fff;transition:background-color .3s;color:rgba(0,0,0,.9);overflow:hidden}.visible[data-v-427891ea]{background-color:rgba(0,0,0,.5);height:100vh;visibility:visible}.visible .center-box[data-v-427891ea]{border-radius:%?16?%;background-color:#fff;overflow:hidden}.hidden[data-v-427891ea]{visibility:hidden}',""]),t.exports=e},"1a95":function(t,e,a){"use strict";var i=a("c36d"),n=a.n(i);n.a},"1dd6":function(t,e,a){"use strict";a.r(e);var i=a("3d4e"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"2c1e":function(t,e,a){"use strict";a.r(e);var i=a("7a96"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"3d4e":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c7eb")),o=i(a("1da1"));a("a9e3"),a("14d9");var r=a("df47"),s=a("173f"),c=(a("1a64"),i(a("b53b"))),d=i(a("1754")),l=i(a("dcd9")),u=i(a("adff")),v={components:{NavHead:u.default,WybPopup:d.default,MyDialog:l.default},data:function(){return{product_type:1,detail:{index_url:"",rare_type:"",name:"",publish_time:"",donation_fee:0},user_address:"",addressCheck:null,tips:"温馨提示:<br/>\n\t\t\t\t1、数字唱片是使用区块链技术生成的唯一数字存证，唱片转赠后无法退还，请您谨慎操作:<br/>\n\t\t\t\t2、平台用户在完成实名认证后，方可进行转赠、接受等操作;<br/>\n\t\t\t\t3、购买数字唱片24小时后，才可进行转赠操作;<br/>\n\t\t\t\t4、转赠前请务必认真核实被赠予方的身份，以免上当受骗，因此造成的任何损失与元音符平台无关。",password:[],keyboardList:["1","2","3","4","5","6","7","8","9","C","0","清空"],certified:!1,usable_integral:0,hasPw:null}},onLoad:function(t){this.product_type=Number(t.product_type),this.detail=JSON.parse(t.info)},onShow:function(){this.getUserAmountAndHasPw()},methods:{handRecharge:function(){this.$refs.myDialog.show()},handValid:function(){var t=this;return(0,o.default)((0,n.default)().mark((function e(){var a;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$post(s.h5_user_check_user,{user_address:t.user_address,is_check:1});case 3:if(a=e.sent,0===a.code){e.next=6;break}return e.abrupt("return",uni.showToast({title:a.msg,icon:"none"}));case 6:t.addressCheck=a.data||!1,e.next=12;break;case 9:throw e.prev=9,e.t0=e["catch"](0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},confirmPassword:function(){var t=this;return(0,o.default)((0,n.default)().mark((function e(){var a,i;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a={product_item_id:t.detail.product_item_id,user_address:t.user_address,owner_id:t.detail.owner_id,password:(0,c.default)(t.password.join(""))},e.next=4,t.$post(s.h5_collections_donation_submit,a);case 4:if(i=e.sent,900!==i.code){e.next=9;break}return e.abrupt("return",t.$refs.myDialog1.show());case 9:if(901!==i.code){e.next=13;break}return e.abrupt("return",t.$refs.myDialog.show());case 13:if(0===i.code||900===i.code||901===i.code){e.next=15;break}return e.abrupt("return",uni.showToast({title:i.msg,icon:"none"}));case 15:t.$refs.popup.close(),uni.showModal({showCancel:!1,confirmColor:"#DC2D1E",confirmText:"立即前往",content:"转赠申请成功，请前往转赠记录查看结果！",success:function(e){e.confirm&&uni.navigateTo({url:"/pages/subgiftRecord/subgiftRecord?tabbar=".concat(t.product_type)})}}),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](0),uni.showToast({title:e.t0.message,icon:"none"});case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))()},handSubgift:function(){try{if(null===this.hasPw)return!1;!0===this.hasPw?this.usable_integral-Number(this.detail.donation_fee)>=0?this.$refs.popup.show():this.$refs.myDialog.show():this.$refs.myDialog1.show()}catch(t){}},handInput:function(t){if("C"===t){if(0===this.password.length)return!1;this.password.pop()}else if("清空"===t)this.password=[];else{if(6===this.password.length)return!1;this.password.push(t)}6===this.password.length&&this.confirmPassword()},clearPassword:function(){this.password=[]},goDownload:function(){(0,r.jumpBefore)(null)},goIdAuth:function(){uni.showToast({title:"还没有实名认证,即将跳转到实名认证页",icon:"none"}),setTimeout((function(){uni.navigateTo({url:"/pages/idAuth/idAuth"})}),2e3)},getUserAmountAndHasPw:function(){var t=this;this.$post(s.h5_user_getIntegral).then((function(e){if(0!==e.code)return uni.showToast({icon:"none",title:e.msg});t.usable_integral=e.data.usable_integral||0,t.$post(s.h5_collections_user_if_password).then((function(e){t.hasPw="false"!==e.data})).catch((function(t){uni.showToast({title:t.message})}))})).catch((function(t){uni.showToast({title:t.message})}))}}};e.default=v},6190:function(t,e,a){var i=a("f8fe");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3ceddcec",i,!0,{sourceMap:!1,shadowMode:!1})},"70ac":function(t,e,a){"use strict";var i=a("6190"),n=a.n(i);n.a},"7a96":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"MyDialog",data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0},close:function(){this.visible=!1}}}},c35d:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={wybPopup:a("1754").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("nav-head",{attrs:{title:"转赠"}}),a("v-uni-view",{staticClass:"title mt20"},[a("v-uni-text",{staticClass:"title-v"}),1===t.product_type?a("v-uni-text",[t._v("单曲信息")]):2===t.product_type?a("v-uni-text",[t._v("专辑信息")]):3===t.product_type?a("v-uni-text",[t._v("数字音乐信息")]):t._e()],1),a("v-uni-view",{staticClass:"box1"},[a("v-uni-view",{staticClass:"box1-1"},[a("v-uni-image",{attrs:{src:t.detail.index_url,mode:""}}),a("v-uni-view",{staticClass:"sideline"}),"SSR"===t.detail.rare_type?a("v-uni-image",{staticClass:"rare",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/SSR.png",mode:""}}):"UR"===t.detail.rare_type?a("v-uni-image",{staticClass:"rare",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/UR.png",mode:""}}):"R"===t.detail.rare_type?a("v-uni-image",{staticClass:"rare",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/R.png",mode:""}}):"SR"===t.detail.rare_type?a("v-uni-image",{staticClass:"rare",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/SR.png",mode:""}}):t._e()],1),a("v-uni-view",{staticClass:"box1-2"},[a("v-uni-view",{staticClass:"box1-2-1"},[t._v(t._s(t.detail.name))]),a("v-uni-view",{staticClass:"box1-2-2"},[a("v-uni-view",{staticClass:"box1-2-2-l"},[t._v("发行方")]),a("v-uni-view",{staticClass:"box1-2-2-r"},[t._v(t._s(t.detail.publish_author_name))])],1),a("v-uni-view",{staticClass:"box1-2-2"},[a("v-uni-view",{staticClass:"box1-2-2-l"},[t._v("发行时间")]),a("v-uni-view",{staticClass:"box1-2-2-r"},[t._v(t._s(t.detail.publish_time))])],1),a("v-uni-view",{staticClass:"box1-2-2"},[a("v-uni-view",{staticClass:"box1-2-2-l"},[t._v("音乐类型")]),a("v-uni-view",{staticClass:"box1-2-2-r"},[1===t.product_type?[t._v("黄金单曲")]:2===t.product_type?[t._v("黄金专辑")]:3===t.product_type?[t._v("数字音乐")]:t._e()],2)],1),a("v-uni-view",{staticClass:"box1-2-2"},[a("v-uni-view",{staticClass:"box1-2-2-l"},[t._v("转赠数量")]),a("v-uni-view",{staticClass:"box1-2-2-r"},[t._v(t._s(t.detail.donation_num)+"张")])],1)],1)],1),a("v-uni-view",{staticClass:"box2"},[a("v-uni-view",{staticClass:"box2-row1"},[a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入对方的钱包地址"},model:{value:t.user_address,callback:function(e){t.user_address=e},expression:"user_address"}}),a("v-uni-view",{staticClass:"sub",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handValid.apply(void 0,arguments)}}},[t._v("校验")])],1),t.addressCheck?a("v-uni-view",{staticClass:"box2-row2"},[t._v("接收方："),t.addressCheck.avatar?a("v-uni-image",{staticClass:"row2-2-a",attrs:{src:t.addressCheck.avatar,mode:""}}):a("v-uni-image",{staticClass:"row2-2-a",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/userNotLogin.png",mode:""}}),t.addressCheck.nick_name?a("v-uni-view",{staticClass:"row2-2-b"},[t._v(t._s(t.addressCheck.nick_name))]):t._e(),t.addressCheck.phone?a("v-uni-view",{staticClass:"row2-2-c"},[t._v(t._s(t.addressCheck.phone))]):t._e()],1):a("v-uni-view",{staticClass:"box2-row2"},[t._v("接收方："),null!==t.addressCheck?a("v-uni-view",{staticClass:"row2-3"},[t._v("地址错误，请核实")]):t._e()],1)],1),a("v-uni-view",{staticClass:"splitline"}),a("v-uni-view",{staticClass:"box3"},[a("v-uni-view",{staticClass:"box3-row1"},[a("v-uni-view",{staticClass:"row1-1"},[t._v("奇点余额：")]),a("v-uni-view",{staticClass:"row1-2"},[a("v-uni-text",{staticClass:"row1-2-1"},[t._v(t._s(t.usable_integral))]),t._v("奇点")],1),a("v-uni-view",{staticClass:"row1-3",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handRecharge.apply(void 0,arguments)}}},[t._v("充值"),a("v-uni-image",{attrs:{src:"https://file.yuanyinfu.com/front-end-lib/gt.png",mode:""}})],1)],1),a("v-uni-view",{staticClass:"box3-row2"},[a("v-uni-image",{attrs:{src:"https://file.yuanyinfu.com/front-end-lib/tanhao-icon.png",mode:""}}),t._v("转赠手续费需扣除"+t._s(t.detail.donation_fee)+"奇点")],1),a("v-uni-view",{staticClass:"box3-row3",domProps:{innerHTML:t._s(t.tips)}})],1),a("v-uni-view",{staticClass:"footer"}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.addressCheck,expression:"addressCheck"}],class:["container-btn"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handSubgift.apply(void 0,arguments)}}},[t._v("确认转赠")]),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.addressCheck,expression:"!addressCheck"}],class:["container-btn","cancel"]},[t._v("确认转赠")]),a("wyb-popup",{ref:"popup",attrs:{type:"bottom",height:"701",width:"750",radius:"6",bgColor:"#ffffff",showCloseIcon:!0},on:{hide:function(e){arguments[0]=e=t.$handleEvent(e),t.clearPassword()}}},[a("v-uni-view",{staticClass:"popup-content"},[a("v-uni-view",{staticClass:"popup-content-title"},[t._v("请输入交易密码")]),a("v-uni-view",{staticClass:"password-content"},[a("v-uni-view",{staticClass:"block"},t._l(6,(function(t){return a("v-uni-view",{key:t,staticClass:"block-item"})})),1),a("v-uni-view",{staticClass:"point"},t._l(t.password,(function(t){return a("v-uni-view",{key:t,staticClass:"point-item"},[a("v-uni-view",{staticClass:"point-item-center"})],1)})),1)],1),a("v-uni-view",{staticClass:"keyboard"},t._l(t.keyboardList,(function(e){return a("v-uni-view",{key:e.text,staticClass:"keyboard-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handInput(e)}}},[t._v(t._s(e))])})),1)],1)],1),a("my-dialog",{ref:"myDialog"},[a("v-uni-view",{staticClass:"dialog-content"},[a("v-uni-view",{class:["dialog-text3"]},[t._v("请前往元音符APP进行充值")]),a("v-uni-view",{staticClass:"dialog-bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDownload.apply(void 0,arguments)}}},[t._v("下载APP")])],1)],1),a("my-dialog",{ref:"myDialog1"},[a("v-uni-view",{staticClass:"dialog-content"},[a("v-uni-view",{staticClass:"dialog-text1"},[t._v("未设置支付密码")]),a("v-uni-view",{class:["dialog-text2"]},[t._v("请前往元音符APP进行设置")]),a("v-uni-view",{staticClass:"dialog-bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDownload.apply(void 0,arguments)}}},[t._v("下载APP")])],1)],1)],1)},o=[]},c36d:function(t,e,a){var i=a("14ba");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("2b7e5a0b",i,!0,{sourceMap:!1,shadowMode:!1})},dcd9:function(t,e,a){"use strict";a.r(e);var i=a("fb8d"),n=a("2c1e");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("1a95");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"427891ea",null,!1,i["a"],void 0);e["default"]=s.exports},f400:function(t,e,a){"use strict";a.r(e);var i=a("c35d"),n=a("1dd6");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("70ac");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"a0a1c2ee",null,!1,i["a"],void 0);e["default"]=s.exports},f8fe:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-a0a1c2ee]{padding:0 %?40?%;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?30?%;color:#777}.container .title[data-v-a0a1c2ee]{display:flex;align-items:center;color:#e4c985;font-size:%?24?%;font-weight:400;height:%?24?%}.container .title .title-v[data-v-a0a1c2ee]{width:%?6?%;height:%?24?%;background:#e4c985;border-radius:%?2?%;margin-right:%?12?%}.container .mt20[data-v-a0a1c2ee]{margin-top:%?20?%}.container .mt34[data-v-a0a1c2ee]{margin-top:%?34?%}.container .mb7[data-v-a0a1c2ee]{margin-bottom:%?15?%}.container .box1[data-v-a0a1c2ee]{margin-top:%?23?%;width:%?686?%;display:flex}.container .box1 .box1-1[data-v-a0a1c2ee]{position:relative;width:%?240?%;height:%?240?%;border-radius:%?20?%}.container .box1 .box1-1 uni-image[data-v-a0a1c2ee]{width:%?240?%;height:%?240?%;border-radius:%?20?%}.container .box1 .box1-1 .sideline[data-v-a0a1c2ee]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:%?220?%;height:%?220?%;border:%?1?% solid hsla(0,0%,100%,.2);border-radius:%?20?%}.container .box1 .box1-1 .rare[data-v-a0a1c2ee]{position:absolute;top:0;left:0;width:%?84?%;height:%?40?%;border-radius:0}.container .box1 .box1-2[data-v-a0a1c2ee]{flex:1;padding-left:%?40?%}.container .box1 .box1-2 .box1-2-1[data-v-a0a1c2ee]{font-weight:500;font-size:%?28?%;line-height:%?40?%;color:#ddd;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .box1 .box1-2 .box1-2-2[data-v-a0a1c2ee]{display:flex;align-items:center;margin-top:%?10?%;font-weight:400;font-size:%?26?%;line-height:%?36?%}.container .box1 .box1-2 .box1-2-2 .box1-2-2-l[data-v-a0a1c2ee]{width:%?128?%;color:#777}.container .box1 .box1-2 .box1-2-2 .box1-2-2-r[data-v-a0a1c2ee]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#aeaeae}.container .box2 .box2-row1[data-v-a0a1c2ee]{display:flex;align-items:center;justify-content:space-between;padding-top:%?29?%}.container .box2 .box2-row1 .input[data-v-a0a1c2ee]{background:#292929;border:%?1?% solid #2f2f2f;border-radius:%?8?%;box-sizing:border-box;padding:0 %?16?%;width:%?590?%;height:%?80?%;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?26?%;color:#ddd}.container .box2 .box2-row1 .input[data-v-a0a1c2ee]::-webkit-input-placeholder{color:#ddd}.container .box2 .box2-row1 .input[data-v-a0a1c2ee]::placeholder{color:#ddd}.container .box2 .box2-row1 .sub[data-v-a0a1c2ee]{font-family:PingFang SC;font-style:normal;font-weight:500;font-size:%?28?%;line-height:%?40?%;text-align:right;color:#d10910}.container .box2 .box2-row2[data-v-a0a1c2ee]{padding-top:%?16?%;display:flex;align-items:center;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?48?%;color:#777}.container .box2 .box2-row2 .row2-2-a[data-v-a0a1c2ee]{width:%?38?%;height:%?38?%;border-radius:%?19?%;margin-right:%?8?%}.container .box2 .box2-row2 .row2-2-b[data-v-a0a1c2ee]{margin-right:%?15?%}.container .box2 .box2-row2 .row2-3[data-v-a0a1c2ee]{color:#d10910}.container .splitline[data-v-a0a1c2ee]{margin-top:%?34?%;margin-bottom:%?32?%;height:%?1?%;opacity:.3;background-color:#aeaeae;border-radius:%?1?%}.container .box3[data-v-a0a1c2ee]{margin-top:%?-15?%}.container .box3 .box3-row1[data-v-a0a1c2ee]{display:flex;align-items:center}.container .box3 .box3-row1 .row1-1[data-v-a0a1c2ee]{font-style:normal;font-weight:400;font-size:%?24?%;line-height:%?34?%;color:#aeaeae}.container .box3 .box3-row1 .row1-2[data-v-a0a1c2ee]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:400;font-size:%?24?%;line-height:34px;color:#ddd}.container .box3 .box3-row1 .row1-2 .row1-2-1[data-v-a0a1c2ee]{font-weight:600;font-size:%?30?%;line-height:42px;color:#ddd;margin-right:%?5?%}.container .box3 .box3-row1 .row1-3[data-v-a0a1c2ee]{color:#d10910;font-weight:500;font-size:%?28?%}.container .box3 .box3-row1 .row1-3 uni-image[data-v-a0a1c2ee]{width:%?24?%;height:%?24?%;vertical-align:middle}.container .box3 .box3-row2[data-v-a0a1c2ee]{display:flex;align-items:center;font-size:%?24?%;line-height:%?34?%;color:#777}.container .box3 .box3-row2 uni-image[data-v-a0a1c2ee]{vertical-align:middle;width:%?36?%;height:%?36?%;margin-right:%?8?%}.container .box3 .box3-row3[data-v-a0a1c2ee]{padding-top:%?52?%;line-height:%?40?%}.container .footer[data-v-a0a1c2ee]{height:%?200?%}.container .container-btn[data-v-a0a1c2ee]{position:fixed;bottom:%?20?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);width:%?686?%;height:%?96?%;background:#d10910;display:flex;align-items:center;justify-content:center;font-family:PingFang SC;font-style:normal;font-weight:500;font-size:%?32?%;line-height:%?44?%;text-align:center;color:#ececec;border-radius:%?48?%}.container .cancel[data-v-a0a1c2ee]{background:#7c7c7c;color:#fff}.container[data-v-a0a1c2ee] .icon-close{font-size:%?36?%}.container[data-v-a0a1c2ee] .wyb-popup-box{z-index:998!important}.container[data-v-a0a1c2ee] .wyb-popup-mask{z-index:997!important}.container .popup-content[data-v-a0a1c2ee]{padding:0;text-align:center}.container .popup-content .popup-content-title[data-v-a0a1c2ee]{height:%?100?%;text-align:center;line-height:%?100?%;font-size:%?30?%;color:#000}.container .popup-content .password-content[data-v-a0a1c2ee]{position:relative;margin:0 %?90?%}.container .popup-content .password-content .block[data-v-a0a1c2ee]{display:flex;align-items:center}.container .popup-content .password-content .block .block-item[data-v-a0a1c2ee]{box-sizing:border-box;border:%?1?% solid rgba(0,0,0,.05);background-color:rgba(0,0,0,.1);width:%?70?%;height:%?70?%;margin:0 %?12.5?%;border-radius:%?10?%}.container .popup-content .password-content .point[data-v-a0a1c2ee]{width:100%;position:absolute;top:0;left:0;display:flex;align-items:center}.container .popup-content .password-content .point .point-item[data-v-a0a1c2ee]{box-sizing:border-box;width:%?70?%;height:%?70?%;margin:0 %?12.5?%;display:flex;align-items:center;justify-content:center}.container .popup-content .password-content .point .point-item .point-item-center[data-v-a0a1c2ee]{width:%?26?%;height:%?26?%;border-radius:%?13?%;background-color:#000}.container .popup-content .keyboard[data-v-a0a1c2ee]{width:100%;padding-top:%?40?%;display:flex;align-content:center;justify-content:center;flex-wrap:wrap}.container .popup-content .keyboard .keyboard-button[data-v-a0a1c2ee]{box-sizing:border-box;width:%?190?%;height:%?80?%;margin:%?20?%;border-radius:%?7?%;background-color:#fff;box-shadow:%?0?% %?0?% %?2?% %?3?% rgba(0,0,0,.1);display:flex;align-items:center;justify-content:center;font-size:%?36?%;font-weight:600;color:#363636}.container .popup-content .keyboard .keyboard-button[data-v-a0a1c2ee]:active{background-color:rgba(0,0,0,.05);box-shadow:%?0?% %?0?% %?1?% %?1?% rgba(0,0,0,.2);color:rgba(0,0,0,.7)}.container .dialog-content[data-v-a0a1c2ee]{position:relative;font-weight:600;font-size:%?32?%;line-height:%?44?%;color:rgba(0,0,0,.9);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:center;background-color:#fff;border-radius:%?16?%}.container .dialog-content .dialog-text1[data-v-a0a1c2ee]{padding-top:%?70?%;padding-bottom:%?20?%}.container .dialog-content .dialog-text2[data-v-a0a1c2ee]{padding-bottom:%?70?%}.container .dialog-content .dialog-text3[data-v-a0a1c2ee]{height:%?248?%;display:flex;align-items:center;justify-content:center}.container .dialog-content .hideText[data-v-a0a1c2ee]{visibility:hidden}.container .dialog-content .dialog-bottom[data-v-a0a1c2ee]{display:flex;align-items:center;justify-content:center;line-height:0;margin:auto;background:#d10910;color:#fff;border-radius:0 0 %?16?% %?16?%;height:%?96?%;width:%?500?%;font-weight:500;font-size:%?32?%}.container .dialog-content .dialog-bottom[data-v-a0a1c2ee]:active{background-color:rgba(209,9,16,.6);color:#868686}',""]),t.exports=e},fb8d:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:["dialog",t.visible?"visible":"hidden"],on:{click:function(e){if(e.target!==e.currentTarget)return null;arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"center-box"},[t.visible?t._t("default"):t._e()],2)],1)},n=[]}}]);