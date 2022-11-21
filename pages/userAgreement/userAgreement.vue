<template>
	<view class="container">
		<nav-head title="用户协议"></nav-head>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	import NavHead from "../../components/navHead.vue"
	export default {
		data() {
			return {
				url: ''
			}
		},
		components: {
			NavHead
		},
		methods: {
			handleBack() {

				let currentRoutes = getCurrentPages(); // 获取当前打开过的页面路由数组
				console.log(currentRoutes)
				if (currentRoutes.length === 1) {
					uni.redirectTo({
						url: '/pages/index/index'
					})
				} else {
					uni.navigateBack({
						delta: 1, //返回层数，2则上上页
					})
				}
			}
		},
		onLoad(option) {
			this.url = option.url
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #fff;

		// .nav {
		// 	position: fixed;
		// 	top: 0;
		// 	left: 0;
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: center;
		// 	width: 100%;
		// 	height: 88rpx;
		// 	background-color: #0D0D0D;
		// 	z-index: 10;

		// 	.nav-left {
		// 		position: absolute;
		// 		top: 28rpx;
		// 		left: 28rpx;
		// 		width: 48rpx;
		// 		height: 48rpx;
		// 	}
		// }
	}
</style>
