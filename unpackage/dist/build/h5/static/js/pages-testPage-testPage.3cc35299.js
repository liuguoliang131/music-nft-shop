(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-testPage-testPage"],{"0222":function(t,e,i){"use strict";i.r(e);var a=i("1e63"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"1a94":function(t,e,i){t.exports=i.p+"static/img/Frame 77.deabb462.png"},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"1e63":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("173f"),r=i("df47"),o=i("1a64"),s=a(i("df28")),c={data:function(){return{show:!1,detail:{product_item_id:"5",name:"aaa",index_img:"",code_num:"12e1",sale_price:"12",evaluate_type:"1",rare_type:"1",publish_author:"qweqw",publish_time:"123",singles_num:0,contract_address:"",token_id:"",token_standard:"",certificate:{code:"",name:"",block_chain_hash:"",publish_author:"",publish_time:""},music_list:[{name:"与伤共舞",desc:"命运面前，休论公道。",singer:"刘思佳",lyricist:"嫩成",composer:"逄博",music_url:"https://media.shenglangnft.com/与伤共舞.mp3",music_time:208},{name:"真的吗",desc:"当所有的热烈回归平静",singer:"刘思达",lyricist:"刘思达",composer:"刘思达",music_url:"https://media.shenglangnft.com/真的吗MMM.wav",music_time:185}]}}},onLoad:function(t){var e=t.id,i=t.type||"order";"collection"===i?this.getDetail(e):this.getOrderDetail(e)},methods:{filterTimes:function(t){return(0,s.default)(t).format("YYYY/MM/DD HH:mm:ss")},getDetail:function(t){var e=this;(0,o.post)(n.h5_collections_user_collectionInfo,{owner_id:Number(t)}).then((function(t){console.log(t),e.detail=t.data}))},getOrderDetail:function(t){var e=this;(0,o.post)(n.h5_order_detail,{order_id:Number(t)}).then((function(t){e.detail.index_img=t.data.index_url}))},showCre:function(){this.show=!0},hiddenCre:function(){this.show=!1},handGoMusicPlayer:function(){if((0,r.isApp)()){var t=window.localStorage.getItem("AppConfigInfo");t=t?JSON.parse(t):{"version-code":"1750"},Number(t["version-code"])>=1800?(0,r.playAlbum)(this.detail.music_list,detail.name,""):uni.navigateTo({url:"/pages/musicPlayer/musicPlayer?owner_id=".concat(this.detail.owner_id,"&code_num=").concat(this.detail.code_num,"&product_item_id=").concat(this.detail.product_item_id,"&music_list=").concat(JSON.stringify(this.detail.music_list),"&name=").concat(this.detail.name)})}else uni.navigateTo({url:"/pages/musicPlayer/musicPlayer?owner_id=".concat(this.detail.owner_id,"&code_num=").concat(this.detail.code_num,"&product_item_id=").concat(this.detail.product_item_id,"&music_list=").concat(JSON.stringify(this.detail.music_list),"&name=").concat(this.detail.name)})}}};e.default=c},3169:function(t,e,i){"use strict";var a=i("5b5f"),n=i.n(a);n.a},"58fb":function(t,e,i){"use strict";i.r(e);var a=i("c60b"),n=i("0222");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("3169");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"089b9a1c",null,!1,a["a"],o);e["default"]=c.exports},"5b5f":function(t,e,i){var a=i("7116");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7e2f3500",a,!0,{sourceMap:!1,shadowMode:!1})},"6c57":function(t,e,i){var a=i("23e7"),n=i("da84");a({global:!0},{globalThis:n})},7116:function(t,e,i){var a=i("24fb"),n=i("1de5"),r=i("1a94");e=a(!1);var o=n(r);e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-089b9a1c]{padding-bottom:%?120?%;padding-left:%?40?%;padding-right:%?40?%}.collection-box[data-v-089b9a1c]{background:#151516;border-radius:4px;padding:%?20?%}.collection-box-box[data-v-089b9a1c]{background:#151516;border:.5px solid #5b5b5b;border-radius:4px;padding:%?20?%}.collection-head[data-v-089b9a1c]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.collection-head-box[data-v-089b9a1c]{width:%?400?%;height:%?400?%;background-position:50%;background-size:cover;display:flex;align-items:center;justify-content:center}.collection-head-box-1[data-v-089b9a1c]{background-image:url('+o+');width:%?326?%;height:%?326?%;background-position:50%;background-size:cover;display:flex;align-items:center;justify-content:center}.collection-head-box-image[data-v-089b9a1c]{width:%?200?%;height:%?200?%;border-radius:50%}.collection-head-title[data-v-089b9a1c]{margin-top:%?26?%;font-family:PingFang SC;font-style:normal;font-weight:500;font-size:18px;line-height:25px;text-align:center;color:#ececec}.collection-head-tags[data-v-089b9a1c]{margin-top:%?9?%;font-weight:400;font-size:13px;line-height:18px;text-align:right;color:#aeaeae}.title[data-v-089b9a1c]{font-size:%?24?%;color:#ab9449;font-weight:500;position:relative;padding-left:%?20?%}.title[data-v-089b9a1c]::before{content:"";width:%?10?%;height:100%;background-color:#ab9449;position:absolute;left:0;top:0;border-radius:4px}.mt-2[data-v-089b9a1c]{margin-top:%?39?%}.flex[data-v-089b9a1c]{display:flex;align-items:center}.box[data-v-089b9a1c]{padding-left:%?20?%}.image[data-v-089b9a1c]{width:%?260?%;height:%?260?%;border-radius:%?24?%}.box-title[data-v-089b9a1c]{font-size:14px;font-weight:500}.number[data-v-089b9a1c]{font-size:12px;margin-top:%?20?%;color:#8a8a8a}.price[data-v-089b9a1c]{color:#e7573d}.content[data-v-089b9a1c]{font-size:12px;color:#8a8a8a}.key[data-v-089b9a1c]{width:%?240?%;text-align:right;padding-right:%?10?%}.container-bottom[data-v-089b9a1c]{position:fixed;bottom:0;left:0;width:100%;height:%?100?%;background-color:#1d1d1d;display:flex;align-items:center;justify-content:center}.container-bottom .my-btn[data-v-089b9a1c]{height:100%;width:50vw;display:inline-block;border:none;color:#847443;background-color:#fff;font-size:16px;display:flex;align-items:center;justify-content:center;font-weight:500}.container-bottom .my-btn.primary[data-v-089b9a1c]{background:#ac9147;color:#fff}.head[data-v-089b9a1c]{display:flex;flex-direction:column;align-items:center}.head-title[data-v-089b9a1c]{color:#101010;font-weight:500;font-size:18px;position:relative;margin-top:%?14?%}.head-title[data-v-089b9a1c]::before{content:"";width:%?60?%;height:%?1?%;background-color:#666;position:absolute;top:50%;left:calc(100% + %?10?%);opacity:.8}.head-title[data-v-089b9a1c]::after{content:"";width:%?60?%;height:%?1?%;background-color:#666;position:absolute;top:50%;right:calc(100% + %?10?%);opacity:.8}.body[data-v-089b9a1c]{margin-top:%?20?%}.flex[data-v-089b9a1c]{display:flex;align-items:flex-start;flex-shrink:0;flex:1;width:100%}.flex .number[data-v-089b9a1c]{text-align:left;width:calc(100% - %?120?%);word-break:break-all;font-weight:600;font-size:13px;line-height:18px;color:#333}.flex .key[data-v-089b9a1c]{width:%?140?%;text-align:justify;text-align-last:justify;margin-left:%?20?%;height:auto;font-weight:400;font-size:13px;text-align:right;color:#999}.cu-modal[data-v-089b9a1c]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1110;opacity:0;outline:0;text-align:center;-ms-transform:scale(1.185);-webkit-transform:scale(1.185);transform:scale(1.185);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:%?2000?%;perspective:%?2000?%;background:rgba(0,0,0,.6);transition:all .3s ease-in-out 0s;pointer-events:none}.cu-modal[data-v-089b9a1c]::before{content:"\\200B";display:inline-block;height:100%;vertical-align:middle}.cu-modal.show[data-v-089b9a1c]{opacity:1;transition-duration:.3s;-ms-transform:scale(1);-webkit-transform:scale(1);transform:scale(1);overflow-x:hidden;overflow-y:auto;pointer-events:auto}.cu-dialog[data-v-089b9a1c]{position:relative;display:inline-block;vertical-align:middle;width:calc(100vw - %?240?%);border-radius:6px;overflow:hidden;background-color:#f6f6f6;color:#1d1d1d;padding:%?20?%}.cu-modal.bottom-modal[data-v-089b9a1c]::before{vertical-align:bottom}.cu-modal.bottom-modal .cu-dialog[data-v-089b9a1c]{width:100%;border-radius:0}.cu-modal.bottom-modal[data-v-089b9a1c]{margin-bottom:%?-1000?%}.cu-modal.bottom-modal.show[data-v-089b9a1c]{margin-bottom:0}.cu-modal.drawer-modal[data-v-089b9a1c]{-webkit-transform:scale(1);transform:scale(1);display:flex}.cu-modal.drawer-modal .cu-dialog[data-v-089b9a1c]{height:100%;min-width:%?200?%;border-radius:0;margin:initial;transition-duration:.3s}.cu-modal.drawer-modal.justify-start .cu-dialog[data-v-089b9a1c]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.cu-modal.drawer-modal.justify-end .cu-dialog[data-v-089b9a1c]{-webkit-transform:translateX(100%);transform:translateX(100%)}.cu-modal.drawer-modal.show .cu-dialog[data-v-089b9a1c]{-webkit-transform:translateX(0);transform:translateX(0)}.cu-modal .cu-dialog > .cu-bar:first-child .action[data-v-089b9a1c]{min-width:%?100?%;margin-right:0;min-height:%?100?%}.level[data-v-089b9a1c]{font-size:12px;background:linear-gradient(102.78deg,#ffe476,#ffedbe);padding:%?8?% %?30?%;border-radius:10px 0 10px 0;font-weight:500;color:#b17a0f}.border-bottom[data-v-089b9a1c]{border-bottom:.5px solid #363636;padding:18px 0}',""]),t.exports=e},bf19:function(t,e,i){"use strict";var a=i("23e7");a({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},c60b:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container collection"},[i("v-uni-button",[t._v("欣赏专辑")])],1)},r=[]},df28:function(t,e,i){i("4160"),i("fb6a"),i("f4b3"),i("6c57"),i("a9e3"),i("d3b7"),i("ac1f"),i("25f0"),i("466d"),i("5319"),i("1276"),i("bf19"),function(e,i){t.exports=i()}(0,(function(){"use strict";var t=1e3,e=6e4,i=36e5,a="millisecond",n="second",r="minute",o="hour",s="day",c="week",d="month",u="quarter",l="year",f="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,i){var a=String(t);return!a||a.length>=e?t:""+Array(e+1-a.length).join(i)+t},v={s:p,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),a=Math.floor(i/60),n=i%60;return(e<=0?"+":"-")+p(a,2,"0")+":"+p(n,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var a=12*(i.year()-e.year())+(i.month()-e.month()),n=e.clone().add(a,d),r=i-n<0,o=e.clone().add(a+(r?-1:1),d);return+(-(a+(i-n)/(r?n-o:o-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:d,y:l,w:c,d:s,D:f,h:o,m:r,s:n,ms:a,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",y={};y[w]=g;var $=function(t){return t instanceof S},_=function t(e,i,a){var n;if(!e)return w;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(n=r),i&&(y[r]=i,n=r);var o=e.split("-");if(!n&&o.length>1)return t(o[0])}else{var s=e.name;y[s]=e,n=s}return!a&&n&&(w=n),n||!a&&w},x=function(t,e){if($(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new S(i)},M=v;M.l=_,M.i=$,M.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function g(t){this.$L=_(t.locale,null,!0),this.parse(t)}var p=g.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var a=e.match(m);if(a){var n=a[2]-1||0,r=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],n,a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)):new Date(a[1],n,a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return M},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(t,e){var i=x(t);return this.startOf(e)<=i&&i<=this.endOf(e)},p.isAfter=function(t,e){return x(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<x(t)},p.$g=function(t,e,i){return M.u(t)?this[e]:this.set(i,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var i=this,a=!!M.u(e)||e,u=M.p(t),h=function(t,e){var n=M.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return a?n:n.endOf(s)},m=function(t,e){return M.w(i.toDate()[t].apply(i.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},b=this.$W,g=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case l:return a?h(1,0):h(31,11);case d:return a?h(1,g):h(0,g+1);case c:var w=this.$locale().weekStart||0,y=(b<w?b+7:b)-w;return h(a?p-y:p+(6-y),g);case s:case f:return m(v+"Hours",0);case o:return m(v+"Minutes",1);case r:return m(v+"Seconds",2);case n:return m(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var i,c=M.p(t),u="set"+(this.$u?"UTC":""),h=(i={},i[s]=u+"Date",i[f]=u+"Date",i[d]=u+"Month",i[l]=u+"FullYear",i[o]=u+"Hours",i[r]=u+"Minutes",i[n]=u+"Seconds",i[a]=u+"Milliseconds",i)[c],m=c===s?this.$D+(e-this.$W):e;if(c===d||c===l){var b=this.clone().set(f,1);b.$d[h](m),b.init(),this.$d=b.set(f,Math.min(this.$D,b.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[M.p(t)]()},p.add=function(a,u){var f,h=this;a=Number(a);var m=M.p(u),b=function(t){var e=x(h);return M.w(e.date(e.date()+Math.round(t*a)),h)};if(m===d)return this.set(d,this.$M+a);if(m===l)return this.set(l,this.$y+a);if(m===s)return b(1);if(m===c)return b(7);var g=(f={},f[r]=e,f[o]=i,f[n]=t,f)[m]||1,p=this.$d.getTime()+a*g;return M.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||h;var a=t||"YYYY-MM-DDTHH:mm:ssZ",n=M.z(this),r=this.$H,o=this.$m,s=this.$M,c=i.weekdays,d=i.months,u=function(t,i,n,r){return t&&(t[i]||t(e,a))||n[i].slice(0,r)},l=function(t){return M.s(r%12||12,t,"0")},f=i.meridiem||function(t,e,i){var a=t<12?"AM":"PM";return i?a.toLowerCase():a},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:M.s(s+1,2,"0"),MMM:u(i.monthsShort,s,d,3),MMMM:u(d,s),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:u(i.weekdaysMin,this.$W,c,2),ddd:u(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:M.s(r,2,"0"),h:l(1),hh:l(2),a:f(r,o,!0),A:f(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:n};return a.replace(b,(function(t,e){return e||m[t]||n.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(a,f,h){var m,b=M.p(f),g=x(a),p=(g.utcOffset()-this.utcOffset())*e,v=this-g,w=M.m(this,g);return w=(m={},m[l]=w/12,m[d]=w,m[u]=w/3,m[c]=(v-p)/6048e5,m[s]=(v-p)/864e5,m[o]=v/i,m[r]=v/e,m[n]=v/t,m)[b]||v,h?w:M.a(w)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),a=_(t,e,!0);return a&&(i.$L=a),i},p.clone=function(){return M.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),D=S.prototype;return x.prototype=D,[["$ms",a],["$s",n],["$m",r],["$H",o],["$W",s],["$M",d],["$y",l],["$D",f]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,S,x),t.$i=!0),x},x.locale=_,x.isDayjs=$,x.unix=function(t){return x(1e3*t)},x.en=y[w],x.Ls=y,x.p={},x}))},f4b3:function(t,e,i){"use strict";var a=i("23e7"),n=i("d039"),r=i("7b0b"),o=i("c04e"),s=n((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}));a({target:"Date",proto:!0,forced:s},{toJSON:function(t){var e=r(this),i=o(e);return"number"!=typeof i||isFinite(i)?e.toISOString():null}})}}]);