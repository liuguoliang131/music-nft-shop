(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-testPage1-testPage1"],{"0740":function(t,e,i){"use strict";i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"mySwiper",data:function(){return{width:0,height:0,startX:0,moveX:0,startOffset:0,loading:!1,activeIndex:0}},props:{list:{required:!0,type:Array,description:"[\n\t\t\t\t{\n\t\t\t\t\timage:'https://xxxx....',\n\t\t\t\t\turl:'https://xxxxxxxx'  点击\n\t\t\t\t}\n\t\t\t]\n\t\t\t"},showPage:{default:!0,description:"是否显示小点"}},methods:{init:function(){var t=this;this.width=this.$refs.strip.$parent.$parent.$parent.$el.offsetWidth,this.height=this.$refs.strip.$parent.$parent.$parent.$el.offsetHeight,this.$refs.swiper.$el.style.width=this.width+"px",this.$refs.swiper.$el.style.height=this.height+"px",this.$refs.strip.$children.forEach((function(e){e.$el.style.width=t.width+"px",e.$el.style.height=t.height+"px"}))},touchStart:function(t,e){if(this.loading)return!1;this.startX=t.changedTouches[0].pageX,this.moveX=t.changedTouches[0].pageX,this.startOffset=this.$refs.strip.$el.offsetLeft},touchMove:function(t,e){if(this.loading)return!1;this.$refs.strip.$el.style.left=this.$refs.strip.$el.offsetLeft+(t.changedTouches[0].pageX-this.moveX)+"px",this.moveX=t.changedTouches[0].pageX},touchEnd:function(t,e){var i=this;if(this.loading)return!1;var n=t.changedTouches[0].pageX-this.startX;this.$refs.strip.$el.style.transition="left 0.3s",n>0?0===e?this.$refs.strip.$el.style.left=this.startOffset+"px":(this.$refs.strip.$el.style.left=this.startOffset+this.width+"px",this.activeIndex=e-1):n<0?this.list.length===e+1?this.$refs.strip.$el.style.left=this.startOffset+"px":(this.$refs.strip.$el.style.left=this.startOffset-this.width+"px",this.activeIndex=e+1):this.$refs.strip.$el.style.left=this.startOffset+"px",this.loading=setTimeout((function(){i.$refs.strip.$el.style.transition="none",i.loading=!1}),300)},handGo:function(t){console.log(t)}},mounted:function(){this.init()}};e.default=n},"0ddc":function(t,e,i){"use strict";i.r(e);var n=i("611c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"0f57":function(t,e,i){var n=i("ff75");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0cb5f90f",n,!0,{sourceMap:!1,shadowMode:!1})},"1e1c":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.drag?i("v-uni-view",{ref:"floating",staticClass:"floatingComponent",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onStart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.onMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.onEnd.apply(void 0,arguments)}}},[t._t("default")],2):i("v-uni-view",{ref:"floating",staticClass:"floatingComponent"},[t._t("default")],2)},o=[]},"31a4":function(t,e,i){var n=i("dbe4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("23e47d72",n,!0,{sourceMap:!1,shadowMode:!1})},3667:function(t,e,i){"use strict";i.r(e);var n=i("4d6e"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},4499:function(t,e,i){"use strict";i.r(e);var n=i("66b2"),a=i("3667");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d924");var c,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"f318706c",null,!1,n["a"],c);e["default"]=u.exports},"4d6e":function(t,e,i){"use strict";var n;function a(t){var e,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t%1e3;return t/=1e3,e=Math.floor(t/60),t=Math.floor(t%60),e+="",t+="",n+="",e=1===e.length?"0"+e:e,t=1===t.length?"0"+t:t,n=1===n.length?"00"+n:2==n.length?"0"+n:n,i?e+":"+t+"."+n:e+":"+t}i("99af"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{play:{type:Boolean,required:!0},src:{type:String},poster:{type:String,default:""},name:{type:String,default:""},author:{type:String,default:""},autoplay:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},obeyMuteSwitch:{type:Boolean,default:!0},volume:{type:Number,default:1},msshow:{type:Boolean,default:!1},width:{type:String,default:"100%"},size:{type:String,default:"14px"},block:{type:Object,default:function(){return{size:12,color:"#00e3ab"}}}},computed:{style:function(){var t={};return"auto"==this.width?t.width="100%":t.width=this.addUnit(this.width),"auto"==this.size?t.fontSize="14px":t.fontSize=this.addUnit(this.size),"auto"==this.size&&(t.fontSize="16px"),t}},data:function(){return{audioTimeUpdate:"00:00",audioTimeTotal:"00:00",innerAudioContext:null,value:0}},watch:{play:function(t){t?n.innerAudioContext.play():n.innerAudioContext.pause()},src:function(){this.innerAudioContext.destroy(),this.contextInit()}},created:function(){n=this,n.msshow&&(n.audioTimeUpdate="00:00.000"),n.contextInit()},beforeDestroy:function(){console.log("audio destroy"),n.innerAudioContext.destroy()},methods:{audioPlay:function(){n.$emit("update:play",!0)},audioPause:function(){n.$emit("update:play",!1)},handleBtnClick:function(){n.$emit("update:play",!n.play)},contextInit:function(){var t=uni.createInnerAudioContext();t.autoplay=n.autoplay,t.src=n.src,t.loop=n.loop,t.onCanplay((function(){n.audioTimeTotal=a(Math.floor(1e3*t.duration),n.msshow)})),t.onPlay((function(){n.audioTimeUpdate=a(Math.floor(1e3*t.currentTime),n.msshow),n.audioPlay()})),t.onTimeUpdate((function(){n.audioTimeUpdate=a(Math.floor(1e3*t.currentTime),n.msshow),n.value=t.currentTime/t.duration*100})),t.onEnded((function(){n.audioTimeUpdate=a(Math.floor(1e3*t.duration),n.msshow),n.value=100,n.audioPause()})),t.onError((function(t){})),n.innerAudioContext=t,n.$emit("update:play",!1),window.hasOwnProperty("WeixinJSBridge")&&WeixinJSBridge.invoke("getNetworkType",{},(function(t){n.innerAudioContext.play()}),!1)},_seeking:function(t){},_seeked:function(t){n.innerAudioContext.seek(t.detail.value/100*n.innerAudioContext.duration)},getDuration:function(){return n.innerAudioContext.duration},getCurrentTime:function(){return n.innerAudioContext.currentTime},addUnit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rpx";return t=String(t),/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)?"".concat(t).concat(e):t}}};e.default=o},"4f51":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.floatingComponent[data-v-1f6303c2]{color:#fff;position:fixed;z-index:11;bottom:%?30?%;left:%?25?%}',""]),t.exports=e},"510d":function(t,e,i){"use strict";i.r(e);var n=i("d88f"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},5689:function(t,e,i){"use strict";var n=i("6e70"),a=i.n(n);a.a},"611c":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"floatingComponent",props:{drag:{type:Boolean,default:!1}},data:function(){return{fLeft:0,fTop:0,left:0,top:0}},methods:{init:function(){console.log("floating",this.$refs.floating)},onStart:function(t){this.fLeft=t.touches[0].clientX-this.$refs.floating.$el.offsetLeft,this.fTop=t.touches[0].clientY-this.$refs.floating.$el.offsetTop},onMove:function(t){var e=window.innerWidth,i=window.innerHeight,n=t.touches[0].clientX-this.fLeft,a=t.touches[0].clientY-this.fTop,o=this.$refs.floating.$el.offsetWidth,c=this.$refs.floating.$el.offsetHeight;n+o<e&&n>0&&(this.$refs.floating.$el.style.left=n+"px"),a+c<i&&a>0&&(this.$refs.floating.$el.style.top=a+"px")},onEnd:function(t){console.log("onEnd",t)}},mounted:function(){this.init()}};e.default=n},"66b2":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"audio-warp",style:[t.style]},[i("v-uni-view",{staticClass:"cover-warp",class:{hasbg:!t.poster}},[t.poster?i("v-uni-image",{staticClass:"cover-img",attrs:{src:t.poster}}):t._e(),i("v-uni-view",{staticClass:"play-btn",class:{pause:t.play},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBtnClick.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"audio-con"},[i("v-uni-view",{staticClass:"audio-time-info"},[i("v-uni-text",{staticClass:"audio-time"},[t._v(t._s(t.audioTimeUpdate))]),i("v-uni-slider",{staticClass:"audio-slider",attrs:{"block-size":12,"block-color":"#dd524d",activeColor:"#dd524d",value:t.value},on:{changing:function(e){arguments[0]=e=t.$handleEvent(e),t._seeking.apply(void 0,arguments)},change:function(e){arguments[0]=e=t.$handleEvent(e),t._seeked.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"audio-time"},[t._v(t._s(t.audioTimeTotal))])],1),i("v-uni-text",{staticClass:"audio-title am-text-eill"},[t._v(t._s(t.name))]),i("v-uni-text",{staticClass:"audio-author am-text-eill"},[t._v(t._s(t.author))])],1)],1)},o=[]},"6e70":function(t,e,i){var n=i("6fbf");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2fa6cfea",n,!0,{sourceMap:!1,shadowMode:!1})},"6fbf":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.swiper[data-v-c85e86b2]{position:relative;overflow:hidden;margin:auto}.swiper .strip[data-v-c85e86b2]{position:absolute;top:0;left:0;display:flex;align-items:center}.swiper .strip .strip-item[data-v-c85e86b2]{position:relative}.swiper .strip .strip-item .cover[data-v-c85e86b2]{width:100%;height:100%}.swiper .strip .strip-item .button[data-v-c85e86b2]{position:absolute;bottom:%?26.8?%;right:%?20.8?%;width:%?96?%;height:%?96?%}.swiper .page[data-v-c85e86b2]{width:100%;display:flex;align-content:center;justify-content:center;flex-wrap:wrap;position:absolute;bottom:0;left:0;z-index:999}.swiper .page .page-item[data-v-c85e86b2]{border-radius:%?4?%;width:%?30?%;height:%?8?%;background-color:hsla(0,0%,100%,.3);margin:%?10?%}.swiper .page .active[data-v-c85e86b2]{background-color:hsla(0,0%,100%,.8)}',""]),t.exports=e},"7e30":function(t,e,i){"use strict";var n=i("31a4"),a=i.n(n);a.a},"85f2":function(t,e,i){"use strict";var n=i("c536"),a=i.n(n);a.a},"8aa8":function(t,e,i){"use strict";i.r(e);var n=i("0740"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},9184:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{ref:"swiper",staticClass:"swiper"},[i("v-uni-view",{ref:"strip",staticClass:"strip"},t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"strip-item",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart(e,n)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove(e,n)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd(e,n)}}},[i("v-uni-image",{staticClass:"cover",attrs:{src:e.image,mode:""}}),i("v-uni-image",{staticClass:"button",attrs:{src:"https://file.yuanyinfu.com/front-end-lib/play.png",mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handGo(e.url)}}})],1)})),1),i("v-uni-view",{staticClass:"page"},t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,class:["page-item",t.activeIndex===n?"active":""]})})),1)],1)},o=[]},c536:function(t,e,i){var n=i("4f51");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("cccb3c34",n,!0,{sourceMap:!1,shadowMode:!1})},d88f:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("dbbf")),o=n(i("4499")),c=n(i("e8f6")),r={data:function(){return{list:[{image:"https://file.yuanyinfu.com/a_2022-04-29-12-38-59-100047-6ef232385b64eb08ab69c42926bac532.jpg"},{image:"https://file.yuanyinfu.com/a_2022-04-29-12-47-12-100051-854b10175a60e5a41130357fbbfb4f04.jpg"},{image:"https://file.yuanyinfu.com/a_2022-04-29-12-55-22-100053-5b9775e1fb6d29664102d4a3ef5a09b1.jpg"}],play:!0,block:{size:12,color:"#dd524d"},active:{name:"0923-004单曲测试",singer:"哇哈哈",desc:"04萤火虫的微光、独行的灯火，还是燎原的火把，都是值得被看见的女性力量，对别人来说，也许这些光亮微不足道，但对自己来说，每一个都是值得纪念的高光时刻",music_url:"https://media.shenglangnft.com/music/1663550442714210.mp3",music_time:217,cover_img:"https://file.yuanyinfu.com/a_2022-04-29-12-55-22-100053-5b9775e1fb6d29664102d4a3ef5a09b1.jpg",checked:!0}}},components:{MySwiper:a.default,FloatingComponent:c.default,MyAudio:o.default}};e.default=r},d924:function(t,e,i){"use strict";var n=i("0f57"),a=i.n(n);a.a},dbbf:function(t,e,i){"use strict";i.r(e);var n=i("9184"),a=i("8aa8");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5689");var c,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"c85e86b2",null,!1,n["a"],c);e["default"]=u.exports},dbe4:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.container[data-v-76290bb3]{padding:0;text-align:center}',""]),t.exports=e},e8f6:function(t,e,i){"use strict";i.r(e);var n=i("1e1c"),a=i("0ddc");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("85f2");var c,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"1f6303c2",null,!1,n["a"],c);e["default"]=u.exports},f9bd:function(t,e,i){"use strict";i.r(e);var n=i("fccb"),a=i("510d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("7e30");var c,r=i("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"76290bb3",null,!1,n["a"],c);e["default"]=u.exports},fccb:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={myAudio:i("4499").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("floating-component",[i("my-audio",{staticClass:"audio1",attrs:{name:t.active.name,id:"audio1",width:"700",poster:t.active.cover_img,block:t.block,src:t.active.music_url,play:t.play,autoplay:!0},on:{"update:play":function(e){arguments[0]=e=t.$handleEvent(e),t.play=e}}})],1)],1)},o=[]},ff75:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */.am-text-eill[data-v-f318706c]{\n  /*超出省略号*/overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.audio-warp[data-v-f318706c]{display:flex;overflow:hidden;height:3.5em;border-radius:.2em;border:1px solid rgba(0,0,0,.3);background-color:#353535;padding:.5em 0;border-radius:.5em}.cover-warp[data-v-f318706c]{position:relative;flex-shrink:0;width:3.5em;height:3.5em;margin-left:.5em}.cover-warp.hasbg[data-v-f318706c]{background-color:#353535}.cover-warp .cover-img[data-v-f318706c]{width:3.5em;height:3.5em}.cover-warp .play-btn[data-v-f318706c]{position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:2.5em;height:2.5em;border-radius:50%;background-size:100% 100%;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA2LTA0VDE3OjU1OjA3KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA2LTA1VDA5OjUwOjUwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNi0wNVQwOTo1MDo1MCswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OWI0YTlkMi02ZWIzLTUyNDQtYjM4OS03MzdmYTA1OTM1ZWEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyODIyOGJlOC0zZDgxLTlhNDMtOGJjMy02NDA2NTQzYWIwMzQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0YjA1NDBlYy1mMjE1LWU4NDEtYjkwYy0xZjBiNGQ3OGJkODkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRiMDU0MGVjLWYyMTUtZTg0MS1iOTBjLTFmMGI0ZDc4YmQ4OSIgc3RFdnQ6d2hlbj0iMjAxOS0wNi0wNFQxNzo1NTowNyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNzc4YjE2NC1mODFhLWU5NDktOThmMC00OGQ0MDZlNmU3ZjYiIHN0RXZ0OndoZW49IjIwMTktMDYtMDRUMTc6NTU6MDcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODliNGE5ZDItNmViMy01MjQ0LWIzODktNzM3ZmEwNTkzNWVhIiBzdEV2dDp3aGVuPSIyMDE5LTA2LTA1VDA5OjUwOjUwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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")}.cover-warp .play-btn.pause[data-v-f318706c]{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA2LTA0VDE3OjU0OjM1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA2LTA1VDA5OjUwOjI0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNi0wNVQwOTo1MDoyNCswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZGU0NjY1NS05N2I2LTBjNGMtYTQ4NS0wN2E1ZjY5ZjU1YjciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiYTUxOWZkZi0xYWQwLTYwNDUtOGIyNS1hNTZlOGM0YzhkZmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZjRlOTFiYS1iYTBjLWVkNDMtOTc1Yi01YTcwODhmNzdiMWUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJmNGU5MWJhLWJhMGMtZWQ0My05NzViLTVhNzA4OGY3N2IxZSIgc3RFdnQ6d2hlbj0iMjAxOS0wNi0wNFQxNzo1NDozNSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxY2U4ZTUwMi1iYzUwLThkNDktYTU0ZC04OWVjOGUzMDI5ZTIiIHN0RXZ0OndoZW49IjIwMTktMDYtMDRUMTc6NTQ6MzUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmRlNDY2NTUtOTdiNi0wYzRjLWE0ODUtMDdhNWY2OWY1NWI3IiBzdEV2dDp3aGVuPSIyMDE5LTA2LTA1VDA5OjUwOjI0KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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")}.audio-con[data-v-f318706c]{position:relative;flex:1;padding:0 1em;background-color:#353535}.audio-con .audio-title[data-v-f318706c]{position:absolute;left:10%;top:0;color:#aeaeae}.audio-con .audio-author[data-v-f318706c]{position:absolute;left:10%;bottom:0;color:#888}.audio-con .audio-time-info[data-v-f318706c]{display:flex;flex-wrap:nowrap;height:100%;align-items:center;touch-action:none}.audio-con .audio-time-info .audio-time[data-v-f318706c]{color:#9d9d9d}.audio-con .audio-time-info .audio-slider[data-v-f318706c]{flex:1}',""]),t.exports=e}}]);