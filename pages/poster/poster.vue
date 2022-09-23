<template>
	<view class="container">
		<view class="nav">
			<image class="nav-left" src="../../static/Frame 1000006270.png" mode=""></image>
		</view>
		<view class="content">
			<view class="box1">
				<canvas ref="Canvas" class="thecanvas" canvas-id="firstCanvas"></canvas>
			</view>
			<view class="box2">
				<view class="save">点击保存海报到相册</view>
			</view>
			<view class="box3">
				可分享至微信或朋友圈
				<image src="../../static/share-wx.png" mode=""></image>
				<image src="../../static/share-friends.png" mode=""></image>
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
			initCanvas() {
				// console.log('this.$refs', this.$refs)
				// var ctx = uni.createCanvasContext('firstCanvas')
				// const bg = new Image()
				// bg.load = () => {
				// 	console.log('bg')
				// 	ctx.drawImage(bg, 0, 0, 630, 774)
				// }
				// bg.src = require('../../static/分享-分享图.png')
			}
		},
		mounted() {
			this.initCanvas()
		}
	}
</script>

<style lang="scss">
	.container {
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

		.content {
			padding-top: 88rpx;

			.box1 {
				padding-top: 80rpx;
				text-align: center;

				.thecanvas {
					margin: auto;
					width: 630rpx;
					height: 774rpx;
					background: #E7E7E7;
					border-radius: 16rpx;
				}
			}

			.box2 {
				display: flex;
				justify-content: center;
				margin-top: 24rpx;
				width: 100%;

				.save {
					display: flex;
					align-items: center;
					justify-content: center;
					line-height: 0;
					width: 474rpx;
					height: 96rpx;
					background: #D10910;
					border-radius: 44px;
					color: rgba(236, 236, 236, 1);

					&:active {
						background-color: rgba(209, 9, 16, 0.6);
						color: rgba(134, 134, 134, 1);
					}

				}
			}

			.box3 {
				padding-top: 26rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				color: #E6E6E6;

				image {
					width: 72rpx;
					height: 72rpx;
					margin-left: 24rpx;
				}
			}
		}
	}
</style>
