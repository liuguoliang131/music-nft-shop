<template>
	<view class="container">
		<view class="nav">
			<image @tap="handleBack()" class="nav-left" src="../../static/Frame 1000006270.png" mode=""></image>
		</view>
		<view class="box">
			<view class="title">
				<text class="title-l"></text>
				最新梦想单曲
			</view>
			<view class="list">
				<view class="item" v-for="item in 2">{{item}}</view>
			</view>
			<view class="player">
				播放器
			</view>
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
		box-sizing: border-box;
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

			.nav-left {
				position: absolute;
				top: 28rpx;
				left: 28rpx;
				width: 48rpx;
				height: 48rpx;
			}
		}

		.box {
			position: relative;
			height: calc(100% - 88rpx);

			.title {
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				align-items: center;
				width: 100%;
				height: 82rpx;
				font-size: 36rpx;
				color: #AC9147;

				.title-l {
					width: 6rpx;
					height: 32rpx;
					margin-left: 40rpx;
					margin-right: 20rpx;
					border-radius: 2rpx;
					background: #AC9147;
				}
			}

			.list {
				flex: 1;
				padding-top: 82rpx;
				padding-bottom: 120rpx;
				width: 100%;
				overflow-y: scroll;
			}

			.player {
				position: fixed;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 120rpx;
				background-color: #fff;
			}

		}
	}
</style>
