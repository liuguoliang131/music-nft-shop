(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-testPage1-testPage1"],{"0740":function(t,e,i){"use strict";i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={name:"mySwiper",data:function(){return{width:0,height:0,startX:0,moveX:0,startOffset:0,loading:!1,activeIndex:0}},props:{list:{required:!0,type:Array,description:"[\n\t\t\t\t{\n\t\t\t\t\timage:'https://xxxx....',\n\t\t\t\t\turl:'https://xxxxxxxx'  点击\n\t\t\t\t}\n\t\t\t]\n\t\t\t"},showPage:{default:!0,description:"是否显示小点"}},methods:{init:function(){var t=this;this.width=this.$refs.strip.$parent.$parent.$parent.$el.offsetWidth,this.height=this.$refs.strip.$parent.$parent.$parent.$el.offsetHeight,this.$refs.swiper.$el.style.width=this.width+"px",this.$refs.swiper.$el.style.height=this.height+"px",this.$refs.strip.$children.forEach((function(e){e.$el.style.width=t.width+"px",e.$el.style.height=t.height+"px"}))},touchStart:function(t,e){if(this.loading)return!1;this.startX=t.changedTouches[0].pageX,this.moveX=t.changedTouches[0].pageX,this.startOffset=this.$refs.strip.$el.offsetLeft},touchMove:function(t,e){if(this.loading)return!1;this.$refs.strip.$el.style.left=this.$refs.strip.$el.offsetLeft+(t.changedTouches[0].pageX-this.moveX)+"px",this.moveX=t.changedTouches[0].pageX},touchEnd:function(t,e){var i=this;if(this.loading)return!1;var s=t.changedTouches[0].pageX-this.startX;this.$refs.strip.$el.style.transition="left 0.3s",s>0?0===e?this.$refs.strip.$el.style.left=this.startOffset+"px":(this.$refs.strip.$el.style.left=this.startOffset+this.width+"px",this.activeIndex=e-1):s<0?this.list.length===e+1?this.$refs.strip.$el.style.left=this.startOffset+"px":(this.$refs.strip.$el.style.left=this.startOffset-this.width+"px",this.activeIndex=e+1):this.$refs.strip.$el.style.left=this.startOffset+"px",this.loading=setTimeout((function(){i.$refs.strip.$el.style.transition="none",i.loading=!1}),300)},handGo:function(t){console.log(t)}},mounted:function(){this.init()}};e.default=s},"510d":function(t,e,i){"use strict";i.r(e);var s=i("d88f"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},5689:function(t,e,i){"use strict";var s=i("6e70"),n=i.n(s);n.a},"5c1d":function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("MySwiper",{attrs:{list:t.list,showPage:!0}})],1)},a=[]},"6e70":function(t,e,i){var s=i("6fbf");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("2fa6cfea",s,!0,{sourceMap:!1,shadowMode:!1})},"6fbf":function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.swiper[data-v-c85e86b2]{position:relative;overflow:hidden;margin:auto}.swiper .strip[data-v-c85e86b2]{position:absolute;top:0;left:0;display:flex;align-items:center}.swiper .strip .strip-item[data-v-c85e86b2]{position:relative}.swiper .strip .strip-item .cover[data-v-c85e86b2]{width:100%;height:100%}.swiper .strip .strip-item .button[data-v-c85e86b2]{position:absolute;bottom:%?26.8?%;right:%?20.8?%;width:%?96?%;height:%?96?%}.swiper .page[data-v-c85e86b2]{width:100%;display:flex;align-content:center;justify-content:center;flex-wrap:wrap;position:absolute;bottom:0;left:0;z-index:999}.swiper .page .page-item[data-v-c85e86b2]{border-radius:%?4?%;width:%?30?%;height:%?8?%;background-color:hsla(0,0%,100%,.3);margin:%?10?%}.swiper .page .active[data-v-c85e86b2]{background-color:hsla(0,0%,100%,.8)}',""]),t.exports=e},"8aa8":function(t,e,i){"use strict";i.r(e);var s=i("0740"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},9184:function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{ref:"swiper",staticClass:"swiper"},[i("v-uni-view",{ref:"strip",staticClass:"strip"},t._l(t.list,(function(e,s){return i("v-uni-view",{key:s,staticClass:"strip-item",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart(e,s)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove(e,s)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd(e,s)}}},[i("v-uni-image",{staticClass:"cover",attrs:{src:e.image,mode:""}}),i("v-uni-image",{staticClass:"button",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/play.png",mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handGo(e.url)}}})],1)})),1),i("v-uni-view",{staticClass:"page"},t._l(t.list,(function(e,s){return i("v-uni-view",{key:s,class:["page-item",t.activeIndex===s?"active":""]})})),1)],1)},a=[]},bde5:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-c28f53aa]{padding:0;text-align:center}',""]),t.exports=e},d0ff:function(t,e,i){"use strict";var s=i("d3a3"),n=i.n(s);n.a},d3a3:function(t,e,i){var s=i("bde5");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("5417e00e",s,!0,{sourceMap:!1,shadowMode:!1})},d88f:function(t,e,i){"use strict";var s=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("dbbf")),a={data:function(){return{list:[{image:"https://file.yuanyinfu.com/a_2022-04-29-12-38-59-100047-6ef232385b64eb08ab69c42926bac532.jpg"},{image:"https://file.yuanyinfu.com/a_2022-04-29-12-47-12-100051-854b10175a60e5a41130357fbbfb4f04.jpg"},{image:"https://file.yuanyinfu.com/a_2022-04-29-12-55-22-100053-5b9775e1fb6d29664102d4a3ef5a09b1.jpg"}]}},components:{MySwiper:n.default}};e.default=a},dbbf:function(t,e,i){"use strict";i.r(e);var s=i("9184"),n=i("8aa8");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("5689");var r,o=i("f0c5"),f=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"c85e86b2",null,!1,s["a"],r);e["default"]=f.exports},f9bd:function(t,e,i){"use strict";i.r(e);var s=i("5c1d"),n=i("510d");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("d0ff");var r,o=i("f0c5"),f=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"c28f53aa",null,!1,s["a"],r);e["default"]=f.exports}}]);