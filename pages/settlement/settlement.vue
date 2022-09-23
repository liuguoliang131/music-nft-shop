<template>
	<view class="container">
		<view class="title pt23">
			<view class="title-l"></view>
			<view class="title-r">专辑信息</view>
		</view>
		<view class="box1">
			<view class="box1-l">
				<image class="box1-l-cover" src="../../static/唱首歌给你听.png"></image>
				<view class="box1-l-border"></view>
			</view>
			<view class="box1-r">
				<view class="box1-r-0">最新梦想单曲</view>
				<view class="box1-r-1">包含10首作品</view>
				<view class="box1-r-2">
					<text class="r-1-l">发行方</text>
					<text class="r-1-r">元音符</text>
				</view>
				<view class="box1-r-2">
					<text class="r-1-l">发行时间</text>
					<text class="r-1-r">2022-10-12</text>
				</view>
				<view class="box1-r-2">
					<text class="r-1-l">发行价格</text>
					<text class="r-1-r">￥19.90/张</text>
				</view>
			</view>
		</view>
		<view class="title pt37">
			<view class="title-l"></view>
			<view class="title-r">认证信息</view>
		</view>
		<view class="box2">
			<view class="box2-row">
				<view class="box2-row-l">Contract Address</view>
				<view class="box2-row-r">0xf9ec07f93e7290xf9ec07f93e7290xf9ec07f93e729</view>
			</view>
			<view class="box2-row">
				<view class="box2-row-l">Token ID</view>
				<view class="box2-row-r">0xf9ec07f93e729</view>
			</view>
			<view class="box2-row">
				<view class="box2-row-l">Token Standard</view>
				<view class="box2-row-r">0xf9ec07f93e729</view>
			</view>
		</view>
		<view class="box3">
			<view class="box3-row">
				<text class="row-1">实付</text>
				<text class="row-2">￥</text>
				<text class="row-3">19.90</text>
				<text class="row-4">合计1张</text>
			</view>
		</view>
		<view class="fixed-bottom">
			去支付
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		padding: 0;

		.title {
			padding: 0 40rpx 0 40rpx;
			display: flex;
			align-items: center;
			font-size: 24rpx;
			line-height: 34rpx;
			color: #AC9147;

			.title-l {
				width: 6rpx;
				height: 24rpx;
				margin-right: 20rpx;
				border-radius: 2rpx;
				background-color: #AC9147;
			}

			.title-r {}
		}

		.pt23 {
			padding-top: 23rpx;
		}

		.pt37 {
			padding-top: 37rpx;
		}

		.box1 {
			display: flex;
			padding: 21rpx 40rpx 0 40rpx;

			.box1-l {
				position: relative;
				width: 240rpx;

				.box1-l-cover {
					box-sizing: border-box;
					width: 240rpx;
					height: 240rpx;
					border-radius: 10px;
				}

				.box1-l-border {
					box-sizing: border-box;
					position: absolute;
					top: 10rpx;
					left: 10rpx;
					width: 220rpx;
					height: 220rpx;
					border: 1rpx solid rgba(255, 255, 255, 0.2);
					border-radius: 20px;
				}
			}

			.box1-r {
				flex: 1;
				margin-left: 41rpx;

				.box1-r-0 {
					display: flex;
					align-items: center;
					font-weight: 500;
					font-size: 28rpx;
					/* identical to box height */

					color: #ECECEC;
				}

				.box1-r-1 {
					padding-top: 16rpx;
					font-weight: 400;
					font-size: 26rpx;
					line-height: 48rpx;
					/* identical to box height, or 185% */


					color: #AEAEAE;

				}

				.box1-r-2 {
					display: flex;
					font-size: 26rpx;
					line-height: 48rpx;
					/* identical to box height, or 185% */
					color: #AEAEAE;

					.r-1-l {
						width: 128rpx;
					}
				}

			}
		}

		.box2 {
			padding: 15rpx 40rpx 32rpx 40rpx;

			.box2-row {
				display: flex;
				height: 48rpx;

				.box2-row-l {
					width: 240rpx;
					height: 48rpx;
					line-height: 48rpx;
					text-align: right;
					color: #666666;
					font-size: 26rpx;
				}

				.box2-row-r {
					flex: 1;
					margin-left: 24rpx;
					height: 48rpx;
					line-height: 48rpx;
					color: #AEAEAE;
					font-size: 26rpx;
					text-align: left;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号

				}
			}
		}

		.box3 {
			padding-top: 32rpx;
			border-top: 1rpx solid #363636;

			.box3-row {
				display: flex;
				// align-items: center;
				justify-content: flex-end;
				color: #D10910;
				height: 50rpx;
				padding: 0 32rpx 0 32rpx;

				.row-1 {
					font-size: 26rpx;
					padding-right: 8rpx;
					line-height: 50rpx;
				}

				.row-2 {
					font-size: 28rpx;
					line-height: 55rpx;
				}

				.row-3 {
					font-size: 36rpx;
					padding-right: 16rpx;
					line-height: 50rpx;
				}

				.row-4 {
					font-size: 26rpx;
					line-height: 50rpx;
				}
			}
		}

		.fixed-bottom {
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 98rpx;
			background: #D10910;
			color: #ECECEC;
			font-size: 32rpx;
			font-weight: 500;

			&:active {
				background-color: rgba(209, 9, 16, 0.6);
				color: rgba(134, 134, 134, 1);
			}
		}
	}
</style>
