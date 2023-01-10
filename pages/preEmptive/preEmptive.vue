<template>
	<view class="container">
		<nav-head title="我的优先购"></nav-head>
		<view class="container-body">
			<view class="empty" v-if="isFinish&&list.length===0">
				<view class="empty-center">
					<image src="https://file.yuanyinfu.com/front-end-lib/unhappy-icon.png" mode="" class="empty-img">
					</image>
					<view class="empty-text">您还没有相关权益</view>
				</view>
			</view>
			<my-scroll v-else :class="['scroll-box',$store.state.user.inApp?'heightSub148':'']" @load="getList"
				:loading="loading" :isFinish="isFinish">
				<view class="item" v-for="(item,index) in list" :key="index" @tap="handGo(item)">
					<view class="item-1 nowrap">
						{{item.priority_name}}
					</view>
					<view class="item-2 nowrap">
						<text class="item-2-1">份数：{{item.total_num}}</text>
						<text class="item-2-2">剩余：{{item.surplus_num}}</text>
					</view>
					<view class="item-3 nowrap">
						优先购时间：{{formatTime(item.start_time*1000)}}-{{formatTime(item.stop_time*1000)}}
					</view>
					<view class="item-4"></view>
					<view class="item-5">
						<view class="status1" v-if="item.status===1">
							生效中
						</view>
						<view class="status2" v-else-if="item.status===2">
							已失效
						</view>
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
	import {
		h5_user_priorityList
	} from '../../request/api.js'
	export default {
		components: {
			MyScroll
		},
		data() {
			return {
				list: [],
				page: 1,
				isFinish: false,
				loading: false
			}
		},
		methods: {
			formatTime(val) {
				return dayjs(val).format('YYYY.MM.DD hh:mm')
			},
			async getList() {
				try {
					this.loading = true
					const res = await this.$post1(h5_user_priorityList, {
						page: this.page++
					})

					if (res.code !== 0) {
						this.isFinish = true
						this.loading = false
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					if (res.data.list && Array.isArray(res.data.list) && res.data.list.length) {

						this.list = [...this.list, ...res.data.list]

					} else {
						this.isFinish = true
						this.page = this.page - 1
					}
					this.loading = false
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'none'
					})
					throw e
				}
			},
			handGo(item) {
				if (item.item_type === 1) {
					// 版权
					uni.navigateTo({
						url: `/pages/copyrightDetail/copyrightDetail?music_info_id=${item.item_id}`
					})
				} else if (item.item_type === 2) {
					// 唱片
					const urls = {
						1: `/pages/goldSinglesDetail/goldSinglesDetail`,
						2: `/pages/preOrderDetails/preOrderDetails`,
						3: `/pages/recommendedAlbumDetail/recommendedAlbumDetail`
					}
					uni.navigateTo({
						url: `${urls[item.product_type]}?product_item_id=${item.item_id}`
					})
				}

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
			.empty {
				position: relative;
				box-sizing: border-box;
				padding: 0 32rpx 32rpx 32rpx;
				height: calc(100vh - 148rpx);
				text-align: center;
				overflow: hidden;
				padding-top: 300rpx;

				.empty-center {
					.empty-img {
						width: 120rpx;
						height: 120rpx;
					}

					.empty-text {
						margin-top: 44rpx;
						font-size: 24rpx;
						line-height: 34rpx;
						/* identical to box height */

						text-align: center;

						color: #CDCDCD;
					}
				}

			}

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

			// 在App中的高度
			.heightSub148 {
				height: calc(100vh - 148rpx);
			}
		}
	}
</style>
