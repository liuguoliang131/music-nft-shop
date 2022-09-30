<template>
	<view class="container">
		<cu-head></cu-head>
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
				<image class="item-icon" src="../../static/playIcon.png"></image>
				<!-- <image class="item-icon" src="../../static/pauseIcon.png"></image> -->
			</view>
		</view>
		<view class="player">
			<image class="cover" src="../../static/唱首歌给你听.png" mode=""></image>
			<view class="player-c">
				<view class="music">
					<text class="music-name">歌曲名</text>
					<text class="music-author">歌手名</text>
				</view>
				<view class="box2">
					<text class="box2-now">01:12</text>
					<text class="box2-line">/</text>
					<text class="box2-all">03:54</text>
				</view>
			</view>
			<image class="player-icon" src="../../static/play.png" mode=""></image>
			<!-- <image class="player-icon" src="../../static/pause.png" mode=""></image> -->
			<view class="progress">
				<view class="bar"></view>
				<view class="bar-red" ref="barRed">
					<view class="red-btn" @touchmove="handTouchmove"></view>
					<view class="red-line"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import CuHead from '../../components/cu-head.vue'
	export default {
		data() {
			return {

			};
		},
		components: {
			CuHead
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
			},
			// 拖动进度条
			handTouchmove(e) {
				const clientWidth = window.innerWidth
				const clientX = e.touches[0].pageX
				const parentX = this.$refs.barRed.$el.offsetLeft
				console.log('鼠标距离左侧', e.touches[0].pageX)
				console.dir(this.$refs.barRed.$el.offsetLeft)
				this.$refs.barRed.$el.style.left = clientX - 282 - 136 + 'px'

			}
		}
	}
</script>

<style lang="scss">
	.container {
		position: relative;
		box-sizing: border-box;
		padding: 0;


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
				height: 80rpx;
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

				.box2 {
					padding-left: 300rpx;
					background-color: pink;
					width: 158rpx;
					font-size: 20rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;

					.box2-line {
						margin: 0 8rpx;
					}
				}



			}

			.player-icon {
				width: 72rpx;
				height: 72rpx;
				margin-right: 50rpx;
			}

			.progress {
				position: absolute;
				top: 60rpx;
				left: 136rpx;
				width: 300rpx;
				height: 42rpx;
				overflow: hidden;
				display: flex;
				align-items: center;

				.bar {
					width: 280rpx;
					height: 3rpx;
					background: #AEAEAE;
				}

				.bar-red {
					position: absolute;
					top: 0;
					left: -50rpx;
					display: flex;
					align-items: center;
					width: 280rpx;
					height: 42rpx;

					.red-line {
						width: 280rpx;
						height: 3rpx;
						background: #D10910;
					}

					.red-btn {
						position: absolute;
						top: 12rpx;
						right: -9rpx;
						width: 18rpx;
						height: 18rpx;
						background: #D10910;
						border-radius: 9rpx;
					}
				}


			}
		}

	}
</style>
