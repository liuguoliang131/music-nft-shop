(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-invitationToRegister-invitationToRegister"],{"05eb":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={tfVerifyImg:n("d5cf").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("nav-head",{attrs:{left:!1,title:"注册"}}),n("v-uni-view",{staticClass:"header"},[e.sharedByGuy?n("v-uni-view",{},[e._v("您的好友"+e._s(e.sharedByGuy)+"诚邀您加入元音符")]):e._e(),e.sharedByGuy?n("v-uni-view",{},[e._v("一起来共享版权回报")]):e._e()],1),n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"title"},[e._v("填写注册信息")]),n("v-uni-view",{staticClass:"input-box"},[n("v-uni-view",{staticClass:"box-item"},[n("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"11",type:"number",placeholder:"请输入手机号码","placeholder-style":"color: #AEAEAE;"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),n("v-uni-view",{staticClass:"box-item"},[n("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"6",type:"number",placeholder:"请输入验证码","placeholder-style":"color: #AEAEAE;"},model:{value:e.form.captcha,callback:function(t){e.$set(e.form,"captcha",t)},expression:"form.captcha"}}),e.timer?n("v-uni-view",{staticClass:"getcaptcha"},[e._v(e._s(e.countDown))]):n("v-uni-view",{staticClass:"getcaptcha",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handShowPopup.apply(void 0,arguments)}}},[e._v("获取验证码")])],1),n("v-uni-view",{staticClass:"box-item"},[n("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"12",type:"text",placeholder:"请输入昵称","placeholder-style":"color: #AEAEAE;"},model:{value:e.form.nick_name,callback:function(t){e.$set(e.form,"nick_name","string"===typeof t?t.trim():t)},expression:"form.nick_name"}})],1)],1),n("v-uni-view",{staticClass:"agree"},[n("v-uni-checkbox-group",{attrs:{name:"agree"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handCheckboxChange(t)}}},[n("v-uni-checkbox",{staticClass:"checkbox",attrs:{value:!0}})],1),n("v-uni-text",{staticClass:"agree-label"},[e._v("登录时代表您已同意"),n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handView("https://h5.shenglangnft.com/base/agreement")}}},[e._v("《用户协议》")]),e._v("和"),n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handView("https://h5.shenglangnft.com/base/privacy_policy")}}},[e._v("《隐私政策》")])],1)],1),n("v-uni-view",{staticClass:"submit",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handValid.apply(void 0,arguments)}}},[e._v("注册")]),n("v-uni-view",{staticClass:"gologin",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handGoLogin.apply(void 0,arguments)}}},[e._v("已注册，去登录")])],1),e.showVerify?n("tf-verify-img",{on:{succeed:function(t){arguments[0]=t=e.$handleEvent(t),e.verifySuccess.apply(void 0,arguments)},close:function(t){arguments[0]=t=e.$handleEvent(t),e.showVerify=!1}}}):e._e()],1)},o=[]},4190:function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("c7eb")),o=i(n("1da1"));n("ac1f"),n("00b4");i(n("d5cf"));var r=n("173f"),s=n("1a64"),c=n("df47"),u={data:function(){return{form:{phone:"",captcha:"",nick_name:""},sharedByGuy:"",next:"/",id:"",showVerify:!1,agree:!1,timer:null,countDown:0,share_sign:""}},filters:{filterPhone:function(e){return e.substring(0,3)+"****"+e.substring(7,11)}},methods:{handCheckboxChange:function(e){this.agree=!this.agree},handView:function(e){uni.navigateTo({url:"/pages/userAgreement/userAgreement?url=".concat(e)})},handShowPopup:function(){if(!/^[1]{1}[0-9]{10}$/.test(this.form.phone))return e("log",this.form.phone," at pages/invitationToRegister/invitationToRegister.vue:104"),uni.showToast({title:"手机号码不符合规则",icon:"none"});this.showVerify=!0},verifySuccess:function(){this.showVerify=!1,this.handGetCaptcha()},handGetCaptcha:function(){var t=this;return(0,o.default)((0,a.default)().mark((function n(){var i;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$post(r.h5_base_captcha,{phone:t.form.phone,use_type:7});case 2:if(i=n.sent,e("log",i," at pages/invitationToRegister/invitationToRegister.vue:125"),0===i.code){n.next=6;break}return n.abrupt("return",uni.showToast({title:i.msg,icon:"none"}));case 6:uni.showToast({title:"已发送",icon:"success"}),t.countDown=60,t.timer=setInterval((function(){1===t.countDown&&(clearInterval(t.timer),t.timer=null),t.countDown--}),1e3);case 9:case"end":return n.stop()}}),n)})))()},handValid:function(){return this.agree?/^[1]{1}[0-9]{10}$/.test(this.form.phone)?/^[0-9]{6}$/.test(this.form.captcha)?void this.register():uni.showToast({title:"验证码不符合规则",icon:"none"}):(e("log",this.form.phone," at pages/invitationToRegister/invitationToRegister.vue:155"),uni.showToast({title:"手机号码不符合规则",icon:"none"})):uni.showToast({title:"请勾选同意用户协议和隐私政策",icon:"none"})},register:function(){var t=this;return(0,o.default)((0,a.default)().mark((function n(){var i,o;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,uni.showLoading({title:"请求中",mask:!0}),i={phone:t.form.phone,captcha:t.form.captcha,nick_name:t.form.nick_name},t.share_sign&&(i.share_sign=t.share_sign),n.next=6,(0,s.post1)(r.h5_base_register,i);case 6:if(o=n.sent,e("log",o," at pages/invitationToRegister/invitationToRegister.vue:185"),0===o.code){n.next=11;break}return uni.hideLoading(),n.abrupt("return",uni.showToast({icon:"none",title:o.msg}));case 11:t.$store.commit("user/set_token",o.data.token),t.login(),n.next=20;break;case 15:n.prev=15,n.t0=n["catch"](0),e("log","catch",n.t0," at pages/invitationToRegister/invitationToRegister.vue:197"),uni.hideLoading(),uni.showToast({icon:"none",title:n.t0.message});case 20:case"end":return n.stop()}}),n,null,[[0,15]])})))()},login:function(){var t=this;return(0,o.default)((0,a.default)().mark((function n(){var i;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.get1)(r.h5_user_info);case 3:if(i=n.sent,0===i.code){n.next=7;break}return uni.hideLoading(),n.abrupt("return",uni.showToast({title:i.msg,icon:"none"}));case 7:t.$store.commit("user/set_userInfo",i.data),uni.hideLoading(),uni.showToast({icon:"success",title:"登录成功"}),t.nextGoWhere(),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](0),e("log","error",n.t0," at pages/invitationToRegister/invitationToRegister.vue:228"),uni.showToast({icon:"none",title:n.t0.message});case 17:case"end":return n.stop()}}),n,null,[[0,13]])})))()},handGoLogin:function(){(0,c.goLogin)({origin:"invitationToRegister"})},getSharedByGuy:function(e){var t=this;(0,s.post1)(r.h5_base_inviterInfo,{share_sign:e}).then((function(e){if(0!==e.code)return uni.showToast({title:e.msg,icon:"none"});t.sharedByGuy=e.data.nick_name||""}))},nextGoWhere:function(){if(!this.next)return uni.reLaunch({url:"/pages/index/index"});"goldSinglesDetail"===this.next?uni.reLaunch({url:"/pages/goldSinglesDetail/goldSinglesDetail?product_item_id="+this.id}):"preOrderDetails"===this.next?uni.reLaunch({url:"/pages/preOrderDetails/preOrderDetails?product_item_id="+this.id}):"recommendedAlbumDetail"===this.next?uni.reLaunch({url:"/pages/recommendedAlbumDetail/recommendedAlbumDetail?product_item_id="+this.id}):"copyrightDetail"===this.next?uni.reLaunch({url:"/pages/copyrightDetail/copyrightDetail?music_info_id="+this.id}):uni.reLaunch({url:"/pages/index/index"})}},onLoad:function(e){var t="",n=window.sessionStorage.getItem("afterBackQuery");if(n){var i=JSON.parse(n),a=i.query;a.share_sign&&(t=decodeURIComponent(a.share_sign))}e.share_sign&&(t=decodeURIComponent(e.share_sign)),t&&(this.share_sign=t,this.getSharedByGuy(t)),e.next&&(this.next=e.next),e.id&&(this.id=e.id)}};t.default=u}).call(this,n("0de9")["log"])},"60d6":function(e,t,n){"use strict";n.r(t);var i=n("4190"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},8503:function(e,t,n){"use strict";n.r(t);var i=n("05eb"),a=n("60d6");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("a1c2");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"3840e7ad",null,!1,i["a"],void 0);t["default"]=s.exports},a1c2:function(e,t,n){"use strict";var i=n("ab54"),a=n.n(i);a.a},ab54:function(e,t,n){var i=n("bbac");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("039d7d55",i,!0,{sourceMap:!1,shadowMode:!1})},bbac:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-3840e7ad]{padding:0;text-align:center;max-height:100vh;overflow-y:hidden;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?30?%;line-height:%?42?%;color:#d0afaf}.container .header[data-v-3840e7ad]{box-sizing:border-box;width:%?750?%;height:%?660.72?%;padding:%?19.5?%;background-image:url(https://file.yuanyinfu.com/front-end-lib/registerBG1.png),url(https://file.yuanyinfu.com/front-end-lib/registerBG2.png);background-position:%?129.57?% %?89.5?%,0 0;background-size:%?490.86?% %?392.14?%,%?750?% %?660.72?%;background-repeat:no-repeat,no-repeat}.container .main[data-v-3840e7ad]{position:relative;top:%?-271.22?%;width:%?686?%;height:%?670?%;background:#292929;border-radius:%?16?%;margin:auto;box-sizing:border-box;overflow:hidden}.container .main .title[data-v-3840e7ad]{font-size:%?30?%;line-height:%?42?%;color:#ddd;padding-top:%?32?%}.container .main .input-box[data-v-3840e7ad]{margin:auto;margin-top:%?11?%;width:%?622?%}.container .main .input-box .box-item[data-v-3840e7ad]{position:relative;font-size:%?28?%}.container .main .input-box .box-item .uni-input[data-v-3840e7ad]{box-sizing:border-box;height:%?96?%;width:100%;border-bottom:%?1?% solid #aeaeae;border-radius:%?1?%;color:#aeaeae;font-size:%?28?%;text-align:left}.container .main .input-box .box-item .uni-input[data-v-3840e7ad]:hover{border-bottom:%?1?% solid #fff}.container .main .input-box .box-item .getcaptcha[data-v-3840e7ad]{position:absolute;top:0;right:0;height:%?96?%;display:flex;align-items:center;color:#d10910}.container .main .submit[data-v-3840e7ad]{display:flex;align-items:center;justify-content:center;margin:auto;margin-top:%?25?%;width:%?650?%;height:%?96?%;font-weight:500;font-size:%?32?%;line-height:%?96?%;text-align:center;color:#ececec;background:#d10910;border-radius:%?48?%}.container .main .gologin[data-v-3840e7ad]{margin-top:%?32?%;font-family:PingFang SC;font-style:normal;font-weight:400;font-size:%?26?%;line-height:%?36?%;text-align:center;color:#aeaeae}.container .main .agree[data-v-3840e7ad]{display:flex;color:#fff;font-size:%?28?%;width:%?622?%;padding-top:%?26?%;margin:auto}.container .main .agree .checkbox[data-v-3840e7ad]{margin-right:%?24?%;margin-left:%?10?%}.container .main .agree .checkbox[data-v-3840e7ad] .uni-checkbox-input{width:%?24?%;height:%?24?%;border:.5px solid #868686;border-radius:%?6?%;background-color:initial}.container .main .agree .checkbox[data-v-3840e7ad] .uni-checkbox-input::before{font-size:%?24?%}.container .main .agree .agree-label[data-v-3840e7ad]{font-size:%?22?%;line-height:%?48?%;color:#666}.container .main .agree .agree-label uni-text[data-v-3840e7ad]{color:#ac9147}',""]),e.exports=t}}]);