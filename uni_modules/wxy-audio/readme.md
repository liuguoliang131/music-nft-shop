# wxy-audio 介绍

## 组件来源

最近做的项目需要H5和APP同步,使用原生audio无法实现,后来借鉴了[luchapi封装audio音频组件](https://ext.dcloud.net.cn/plugin?id=480)和[sel***@163.com基于luch开发的audio插件修改版](https://ext.dcloud.net.cn/plugin?id=2737)
不过都没有滑动条，于是就加上了,并调整了部分样式，经测试H5,APP和微信小程序都没有问题，这里先感谢两位作者。

## 示例代码

```vue
<wxy-audio src="https://jiustech.ygsjyxx.cn/uploads/school/202107/60fa690877b52.mp3" :play.sync="audioPlay"></wxy-audio>
// 控制变量audioPlay ，如果true音频会播放，否则暂停
```

支持显示毫秒
```vue
<wxy-audio src="https://jiustech.ygsjyxx.cn/uploads/school/202107/60fa690871806.mp3" :play.sync="audioPlay" msshow name="音频播放" author="未知"></wxy-audio>
```

## 组件属性

|参数			|说明																				|类型	|必填	|默认		|
|---------------|-----------------------------------------------------------------------------------|-------|-------|-----------|
|play			|是否播放,双向绑定，需加 .sync														|Boolean|否|true|
|src			|资源路径																			|String	|是|—			|
|poster			|封面图片路径																		|String	|否|—			|
|name			|音频名称																			|String	|否|	|
|author			|作者名字																			|String	|否|	|
|autoplay		|是否自动开始播放																	|Boolean|否|false		|
|loop			|是否循环播放																		|Boolean|否|false		|
|obeyMuteSwitch	|是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音|Boolean|否|true		|
|msshow	|是否显示毫秒|Boolean|否|false		|
|width	|宽度,若是数值则单位是rpx,可带单位px,em,vw,vh,%等,不可为auto|String|否|100%		|
|size	|组件字体大小,由于是em布局,也将影响组件高度和布局，单位规则同上,不可为auto|String|否|APP和小程序是14px,H5是16px|

其他api可在组件内contextInit函数初始化时自定义添加,这里要说明的obeyMuteSwitch赋值给音频对象时会报错，提示它只是getter属性

支持通过refs调用获取音频信息
- this.$refs.audio.getDuration()获取总时间
- this.$refs.audio.getCurrentTime()获取当前时间