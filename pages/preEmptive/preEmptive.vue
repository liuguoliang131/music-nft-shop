<template>
	<view class="container">
		<nav-head></nav-head>
		<view class="container-body">
			<my-scroll class="scroll-box" @load="getList" :loading="loading" :isFinish="isFinish">
				<view class="item" v-for="(item,index) in list" :key="index" @tap="handGo(item)">
					<view class="item-1 nowrap">
						唱片《做自己的梦》优先购
					</view>
					<view class="item-2 nowrap">
						<text class="item-2-1">份数：5</text>
						<text class="item-2-2">剩余：5</text>
					</view>
					<view class="item-3 nowrap">
						优先购时间：{{formatTime(Date.now())}}-{{formatTime(Date.now())}}
					</view>
					<view class="item-4"></view>
					<view class="item-5">
						<view class="status1">
							生效中
						</view>
						<!-- <view class="status2">
							已失效
						</view> -->
						<view class="item-5-2">
							查看商品
						</view>
					</view>
				</view>
			</my-scroll>
		</view>
	</view>
</template>

<script>
	import MyScroll from '../../components/myScroll.vue'
	import dayjs from 'dayjs'
	export default {
		components: {
			MyScroll
		},
		data() {
			return {
				list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, ],
				isFinish: false,
				loading: false
			}
		},
		methods: {
			formatTime(val) {
				return dayjs(val).format('YYYY.MM.DD hh:mm')
			},
			getList() {

			},
			handGo(item) {
				const urls = {
					1: `/pages/goldSinglesDetail/goldSinglesDetail`,
					2: `/pages/preOrderDetails/preOrderDetails`,
					3: `/pages/recommendedAlbumDetail/recommendedAlbumDetail`
				}
				uni.navigateTo({
					url: urls[1] + '?product_item_id=1'
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 400;
		font-size: 24rpx;
		line-height: 44rpx;
		color: #333333;

		.container-body {
			.scroll-box {
				height: calc(100vh - 88rpx);
				padding: 0 20rpx;

				.item {
					height: 272rpx;
					margin-top: 24rpx;
					background: #FFFFFF;
					border-radius: 16rpx;
					padding: 0 28rpx;

					.item-1 {
						font-weight: 600;
						font-size: 32rpx;
						line-height: 44rpx;
						letter-spacing: -0.03em;
						color: #333333;
						padding-top: 25rpx;
					}

					.item-2 {
						margin-top: 10rpx;
						font-weight: 600;
						font-size: 24rpx;
						line-height: 34rpx;
						color: #333333;

						.item-2-1 {
							margin-right: 40rpx;
						}

					}

					.item-3 {
						font-weight: 400;
						font-size: 24rpx;
						line-height: 34rpx;
						color: #666666;
						margin-top: 10rpx;
					}

					.item-4 {
						margin-top: 16rpx;
						margin-bottom: 30rpx;
						height: 0.5px;
						background-color: #EDEDED;
					}

					.item-5 {
						display: flex;
						align-items: center;
						justify-content: space-between;

						.status1 {
							font-family: 'PingFang SC';
							font-style: normal;
							font-weight: 500;
							font-size: 26rpx;
							// line-height: 36rpx;
							color: #DC2D1E;

						}

						.status2 {
							font-family: 'PingFang SC';
							font-style: normal;
							font-weight: 500;
							font-size: 26rpx;
							// line-height: 36rpx;
							color: #666666;
						}

						.item-5-2 {
							border: 0.5rpx solid #666666;
							border-radius: 28rpx;
							width: 176rpx;
							height: 56rpx;
							box-sizing: border-box;
							display: flex;
							align-items: center;
							justify-content: center;
							font-family: 'PingFang SC';
							font-style: normal;
							font-weight: 600;
							font-size: 28rpx;
							// line-height: 40rpx;
							text-align: center;
							color: #333333;


						}
					}

					&:active {
						filter: blur(2rpx);
					}
				}
			}
		}
	}
</style>
