<template>
	<view class="slots">
		<view class="nav">
			<image @tap="navBack()" class="nav-left" src="../static/navLeft.png" mode=""></image>
		</view>
	</view>

</template>

<script>
	export default {
		name: "cu-head",
		data() {
			return {

			};
		},
		methods: {
			navBack() {
				let currentRoutes = getCurrentPages(); // 获取当前打开过的页面路由数组
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
		}
	}
</script>

<style lang="scss" scoped>
	.slots {
		height: 88rpx;
	}

	.nav {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 88rpx;
		background-color: #0D0D0D;
		z-index: 10;

		.nav-left {
			position: absolute;
			top: 28rpx;
			left: 28rpx;
			width: 48rpx;
			height: 48rpx;
		}
	}
</style>
