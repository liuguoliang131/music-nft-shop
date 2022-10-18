<template>
	<view class="container">
		<cu-head></cu-head>
		<view class="h16"></view>
		<view class="board">
			<view class="board-1">
				<view class="text1">总收益(元)</view>
				<view class="text2">{{board.total_profit}}</view>
			</view>
			<view class="board-2">
				<view class="text1">购买总额(元)</view>
				<view class="text2">{{board.total_buy_amount}}</view>
			</view>
			<view class="board-3">
				<view class="text1">购买单数</view>
				<view class="text2">{{board.total_buy_order}}</view>
			</view>
		</view>
		<view class="member-title">
			<view class="title-l"></view>
			成员列表（{{board.total_members||'0'}}人）
		</view>
		<scroll-view class="member-list" scroll-y @scrolltolower="handleScrollTolower">
			<view class="member-item" v-for="(item,idx) in list" :key="idx" @tap="handGo(item)">
				<view class="item-top">
					<view class="item-1">
						<image :src="item.avatar" mode="" class="item-1-img"></image>
					</view>
					<view class="item-2">
						<view class="item-2-1">{{item.nick_name}}</view>
						<view class="item-2-2">{{item.phone}}</view>
					</view>
					<view class="item-3">
						<view class="item-3-1">购买总额(元)</view>
						<view class="item-3-2">{{item.total_buy_amount}}</view>
					</view>
				</view>
				<view class="item-bottom">
					<view class="explain">{{item.explain}}</view>
				</view>

			</view>
		</scroll-view>
	</view>
</template>

<script>
	import CuHead from '../../components/cu-head.vue'
	import {
		h5_community_overview, //信息
		h5_community_memberList //成员列表
	} from '../../request/api.js'
	import {
		getTimeData
	} from '../../utils/index.js'
	export default {
		components: {
			CuHead
		},
		data() {
			return {
				board: {
					total_profit: '',
					total_buy_amount: '',
					total_buy_order: '',
					total_members: ''
				},
				page: 1,
				list: []
			}
		},
		methods: {
			handGo(item) {
				let url = `/pages/memberDetails/memberDetails?member_id=${item.id}`
				uni.navigateTo({
					url
				})
			},
			// 获取信息
			async getInfo() {
				try {
					const res = await this.$post(h5_community_overview, {})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
					this.board = res.data

				} catch (e) {
					console.log(e)
					throw e
					//TODO handle the exception
				}
			},
			// 获取成员列表
			async getList() {
				try {
					const res = await this.$post(h5_community_memberList, {
						page: this.page
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
					if (res.data.list && Array.isArray(res.data.list)) {
						res.data.list.forEach(item => {
							const date = getTimeData(item.in_time)
							item.explain =
								`该用户于${date.y.substring(2,4)}年${date.mon}月${date.dd}日被${item.inviter}邀请加入`
						})
						if (this.page === 1) {
							this.list = res.data.list
						} else {
							this.list = [...this.list, ...res.data.list]
						}

					} else {
						this.page = this.page - 1
					}
				} catch (e) {
					console.log(e)
					throw e
					//TODO handle the exception
				}
			},
			// 滚动事件
			handleScrollTolower() {
				if (window.requestAnimationFrame && typeof window.requestAnimationFrame === 'function') {
					window.requestAnimationFrame(() => {
						this.page++
						this.getList()
					})
				} else {
					setTimeout(() => {
						this.page++
						this.getList()
					}, 17)
				}
			},
		},
		onLoad() {
			this.getInfo()
			this.getList()
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
			box-sizing: border-box;
			padding: 0 32rpx 32rpx 32rpx;
			height: calc(100vh - 340rpx);

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
							overflow: hidden; // 溢出隐藏
							white-space: nowrap; // 强制一行
							text-overflow: ellipsis; // 文字溢出显示省略号

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
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号

					}
				}

			}
		}
	}
</style>
