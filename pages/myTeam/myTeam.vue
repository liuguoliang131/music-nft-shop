<template>
	<view class="container">
		<cu-head></cu-head>
		<view class="h16"></view>
		<view class="board">
			<view class="board-1">
				<view class="text1">总收益(元)</view>
				<view class="text2">15,000</view>
			</view>
			<view class="board-2">
				<view class="text1">购买总额(元)</view>
				<view class="text2">50,000</view>
			</view>
			<view class="board-3">
				<view class="text1">购买单数</view>
				<view class="text2">100</view>
			</view>
		</view>
		<view class="member-title">
			<view class="title-l"></view>
			成员列表（40人）
		</view>
		<view class="member-list">
			<view class="member-item" v-for="item in 12">
				<view class="item-top">
					<view class="item-1">
						<image src="../../static/唱首歌给你听.png" mode="" class="item-1-img"></image>
					</view>
					<view class="item-2">
						<view class="item-2-1">用户昵称</view>
						<view class="item-2-2">138****3344</view>
					</view>
					<view class="item-3">
						<view class="item-3-1">购买总额(元)</view>
						<view class="item-3-2">1,500</view>
					</view>
				</view>
				<view class="item-bottom">
					<view class="explain">该用户于XXXX年XX月XX日被130****1100邀请加入</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import CuHead from '../../components/cu-head.vue'
	export default {
		components: {
			CuHead
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;
		text-align: center;

		.h16 {
			height: 16rpx;
		}

		.board {
			display: flex;
			align-items: center;
			width: 718rpx;
			padding: 24rpx 0 20rpx 0;
			background: #1A170E;
			border-radius: 16rpx;
			margin: auto;
			text-align: left;

			.text1 {
				font-size: 24rpx;
				padding-bottom: 8rpx;
				color: #AEAEAE;
			}

			.text2 {
				font-weight: 500;
				font-size: 32rpx;
				line-height: 44rpx;
				color: #ECECEC;
			}

			.board-1 {
				width: 248rpx;
				height: 92rpx;
				border-right: 1px solid rgba(54, 54, 54, 1);
				text-indent: 32rpx;
			}

			.board-2 {
				width: 280rpx;
				height: 92rpx;
				text-indent: 64rpx;
			}

			.board-3 {
				flex: 1;
				height: 92rpx;
			}
		}

		.member-title {
			display: flex;
			align-items: center;
			padding-top: 48rpx;
			padding-bottom: 14.8rpx;
			font-size: 24rpx;
			color: #AC9147;

			.title-l {
				width: 6rpx;
				height: 24rpx;
				border-radius: 2rpx;
				background: #AC9147;
				margin-right: 24rpx;
				margin-left: 40rpx;
			}
		}

		.member-list {
			padding: 0 32rpx;

			.member-item {
				border-bottom: 1rpx solid #363636;

				.item-top {
					display: flex;

					.item-1 {
						box-sizing: border-box;
						padding-right: 16rpx;
						padding-top: 29.18rpx;

						.item-1-img {
							width: 64rpx;
							height: 64rpx;
							border-radius: 32rpx;
						}
					}

					.item-2 {
						width: 430rpx;
						padding-top: 29.18rpx;
						text-align: left;

						.item-2-1 {
							padding-bottom: 4rpx;
							font-size: 26rpx;
							line-height: 36rpx;
							color: #AEAEAE;

						}

						.item-2-2 {
							width: 518rpx;
							font-size: 24rpx;
							line-height: 34rpx;
							color: #AEAEAE;
							transform-origin: 0 0;
							transform: scale(0.83);
						}

					}

					.item-3 {
						padding-top: 29.18rpx;
						width: 176rpx;

						.item-3-1 {
							width: 212rpx;
							margin-bottom: 4rpx;
							font-size: 24rpx;
							line-height: 28rpx;
							text-align: center;
							color: #AEAEAE;
							transform-origin: 0 0;
							transform: scale(0.83);
						}

						.item-3-2 {
							font-size: 28rpx;
							line-height: 40rpx;
							text-align: center;
							color: #ECECEC;
						}
					}
				}

				.item-bottom {
					padding-left: 80rpx;
					padding-bottom: 15rpx;
					text-align: left;

					.explain {
						width: 730rpx;
						font-size: 24rpx;
						line-height: 28rpx;
						color: #666666;
						transform-origin: 0 0;
						transform: scale(0.83);

					}
				}

			}
		}
	}
</style>
