<template>
	<view class="container">
		<view class="nav">
			<image @tap="handleBack()" class="nav-left" src="../../static/Frame 1000006270.png" mode=""></image>
		</view>
		<view class="title">
			<text class="title-l"></text>
			最新梦想单曲
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in 29">
				<text class="item-idx">
					{{index+1<10?'0'+(index+1):index+1}}
				</text>
				<text class="item-content">
					<text class="name">歌曲名</text>
					<text class="author">—歌手</text>
				</text>
				<image class="item-icon" src="../../static/Frame 1000006266.png"></image>
				<!-- <image class="item-icon" src="../../static/Frame 1000006267.png"></image> -->
			</view>
		</view>
		<view class="player">
			<image class="cover" src="../../static/唱首歌给你听.png" mode=""></image>
			<view class="player-c">
				<view class="music">
					<text class="music-name">歌曲名</text>
					<text class="music-author">歌手名</text>
				</view>
				<view class="progress">进度条</view>
			</view>
			<image class="player-icon" src="../../static/Frame 1000006041.png" mode=""></image>
			<!-- <image class="player-icon" src="../../static/Frame 1000006042.png" mode=""></image> -->
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
		position: relative;
		box-sizing: border-box;
		padding: 0;
		padding-top: 88rpx;

		.nav {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 10;
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

		.title {
			position: fixed;
			top: 88rpx;
			left: 0;
			z-index: 10;
			display: flex;
			align-items: center;
			width: 100%;
			height: 82rpx;
			font-size: 36rpx;
			color: #AC9147;
			background-color: $uni-bg-color;

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
			padding-top: 170rpx;
			padding-bottom: 120rpx;
			width: 100%;
			overflow-y: scroll;

			.item {
				display: flex;
				align-items: center;
				margin: 0 24rpx;
				padding: 0 15rpx;
				height: 102rpx;
				border-bottom: 1rpx solid #363636;
				font-weight: 500;
				font-size: 28rpx;
				color: #ECECEC;
				overflow: hidden; // 溢出隐藏
				white-space: nowrap; // 强制一行
				text-overflow: ellipsis; // 文字溢出显示省略号

				.item-idx {
					margin-right: 16rpx;
				}

				.item-content {
					flex: 1;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号

					.name {}

					.author {
						margin-left: 16rpx;
						font-weight: 400;
						font-size: 26rpx;
						color: #AEAEAE;
					}
				}

				.item-icon {
					width: 48rpx;
					height: 48rpx;
				}
			}
		}

		.player {
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 10;
			width: 100%;
			height: 120rpx;
			background-color: #fff;
			display: flex;
			align-items: center;

			.cover {
				width: 90rpx;
				height: 90rpx;
				border-radius: 45rpx;
				margin-left: 21rpx;
				margin-right: 25rpx;
			}

			.player-c {
				flex: 1;
				background-color: rgba(0, 0, 0, 0.1);

				.music {
					font-weight: 700;
					font-size: 32rpx;
					line-height: 44rpx;
					height: 44rpx;
					color: #000000;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号

					.music-name {
						margin-right: 16rpx;
					}

					.music-author {
						font-size: 26rpx;
						font-weight: 400;
						line-height: 36rpx;
						color: #AEAEAE;
					}
				}

				.progress {
					height: 42rpx;
				}
			}

			.player-icon {
				width: 72rpx;
				height: 72rpx;
				margin-right: 50rpx;
				margin-left: 21rpx;
			}
		}

	}
</style>
