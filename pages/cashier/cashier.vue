<template>
	<view class="container">
		<view class="box1">
			<view class="price">
				<text class="rmb">￥</text>
				<text class="count">19.90</text>
			</view>
			<view class="time">
				<text class="time-text">剩余支付时间</text>
				<text class="time-count">01:21</text>
			</view>
		</view>
		<view class="box2">
			<view class="box2-item">
				<image class="icon" src="../../static/wx.png"></image>
				<view class="text">微信</view>
				<view class="radio">
					<view class="nocheck"></view>
					<image class="checked" src="../../static/Frame 1000006268.png"></image>
				</view>
			</view>
			<view class="empty-cell"></view>
		</view>
		<view class="box3">
			<view class="submit">立即支付</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;

		.box1 {
			height: 400rpx;
			text-align: center;

			.price {
				padding-top: 150rpx;
				height: 100rpx;
				color: rgba(209, 9, 16, 1);
				line-height: 100rpx;

				.rmb {
					font-size: 44rpx;
				}

				.count {
					font-size: 58rpx;
				}
			}

			.time {
				font-size: 28rpx;
				line-height: 40rpx;
				/* identical to box height */

				text-align: center;

				color: #AEAEAE;

				.time-text {}

				.time-count {
					margin-left: 8rpx;
				}
			}
		}

		.box2 {
			border-top: 1rpx solid #363636;
			overflow-y: scroll;
			height: 800rpx;

			.empty-cell {
				height: 240rpx;
			}

			.box2-item {
				display: flex;
				align-items: center;
				height: 100rpx;
				padding: 0 30rpx;
				border-bottom: 1rpx solid #363636;

				.icon {
					width: 54rpx;
					height: 54rpx;
				}

				.text {
					flex: 1;
					margin-left: 20rpx;
					margin-right: 20rpx;
				}

				.radio {
					position: relative;
					width: 44rpx;
					height: 44rpx;

					.nocheck {
						width: 40rpx;
						height: 40rpx;
						border-radius: 22rpx;
						border: 2rpx solid #363636;
					}

					.checked {
						position: absolute;
						top: 0rpx;
						left: 0rpx;
						width: 44rpx;
						height: 44rpx;
					}
				}
			}
		}

		.box3 {
			position: fixed;
			bottom: 140rpx;
			left: 0;
			width: 100%;
			text-align: center;

			.submit {
				display: flex;
				align-items: center;
				justify-content: center;
				line-height: 0;
				margin: auto;
				background: #D10910;
				border-radius: 48px;
				height: 96rpx;
				width: 474rpx;
				font-weight: 500;
				font-size: 32rpx;

				&:active {
					background-color: rgba(209, 9, 16, 0.6);
					color: rgba(134, 134, 134, 1);
				}
			}
		}
	}
</style>
