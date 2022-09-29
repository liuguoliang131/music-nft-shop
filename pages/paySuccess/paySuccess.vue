<template>
	<view class="container">
		<view class="nav">
			<image @tap="handleBack()" class="nav-left" src="../../static/Frame 1000006272.png" mode=""></image>
		</view>
		<view class="box1">
			<image class="icon" src="../../static/Frame 41.png"></image>
			<view class="row1">支付成功</view>
			<view class="row2">实付 ￥3188.00</view>
			<view class="row3">恭喜您已购买成功</view>
		</view>
		<view class="box2">
			<view class="btn1">查看订单</view>
			<view class="btn2">返回专辑</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
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
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;
		padding-top: 88rpx;

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

		.box1 {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;
			height: 606rpx;
			color: rgba(155, 135, 81, 1);

			.icon {
				width: 104rpx;
				height: 104rpx;
				margin-top: 112rpx;
			}

			.row1 {
				margin-top: 16rpx;
				font-size: 36rpx;
				line-height: 50rpx;
			}

			.row2 {
				margin-top: 16rpx;
				font-size: 28rpx;
				line-height: 40rpx;
			}

			.row3 {
				margin-top: 8rpx;
				font-size: 28rpx;
				line-height: 40rpx;
			}
		}

		.box2 {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 40rpx;
			font-size: 32rpx;

			.btn1 {
				font-weight: 500;
				line-height: 96rpx;
				text-align: center;
				width: 320rpx;
				height: 96rpx;
				background: #FFFFFF;
				border-radius: 90rpx;
				color: #DC2D1E;
				margin-right: 30rpx;

				&:active {
					background-color: rgba(255, 255, 255, 0.7);
					color: rgba(209, 9, 16, 0.6);
				}
			}

			.btn2 {
				font-weight: 500;
				line-height: 96rpx;
				text-align: center;
				width: 320rpx;
				height: 96rpx;
				background: #D10910;
				border-radius: 90rpx;
				color: #ECECEC;

				&:active {
					background-color: rgba(209, 9, 16, 0.6);
					color: rgba(134, 134, 134, 1);
				}
			}
		}
	}
</style>
