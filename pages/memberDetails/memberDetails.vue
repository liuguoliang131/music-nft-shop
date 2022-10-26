<template>
	<view class="container">
		<cu-head></cu-head>
		<view class="h16"></view>
		<view class="board">
			<view class="board-top">
				<image :src="board.avatar" mode="" class="top-1"></image>
				<view class="top-2">
					<view class="top-2-1">{{board.nick_name}}</view>
					<view class="top-2-2">{{board.phone}}</view>
				</view>
			</view>
			<view class="board-bottom">
				购买总额<text class="num">{{board.total_buy_amount}}</text>元
			</view>
		</view>
		<view class="member-title">
			<view class="title-l"></view>
			购买记录
		</view>

		<view class="empty" v-if="isFinish&&list.length===0">
			<image src="../../static/empty-icon.png" mode="" class="empty-img"></image>
			<view class="empty-text">还没有购买记录</view>
		</view>
		<view class="list" v-else>
			<view class="list-head">
				<view class="head-1">作品名称</view>
				<view class="head-2">交易金额(元)</view>
				<view class="head-3">时间</view>
			</view>
			<my-scroll class="scroll-view" @load="getList" :loading="loading" :isFinish="isFinish">
				<view class="item" v-for="(item,idx) in list" :key="idx">
					<view class="item-1">{{item.works_name}}</view>
					<view class="item-2">{{item.amount}}</view>
					<view class="item-3">{{item.buy_time_show}}</view>
				</view>
			</my-scroll>
		</view>
	</view>
</template>

<script>
	import {
		h5_community_memberInfo, //信息
		h5_community_memberBuyList //列表
	} from '../../request/api.js'
	import {
		getTimeData
	} from '../../utils/index.js'
	import MyScroll from '../../components/myScroll.vue'
	export default {
		components: {
			MyScroll
		},
		data() {
			return {
				member_id: '',
				board: {
					id: '',
					nick_name: '',
					phone: '',
					avatar: '',
					in_time: '',
					inviter: '',
					total_buy_amount: ''
				},
				page: 1,
				list: [],
				loading: false,
				isFinish: false
			};
		},
		methods: {
			// 获取信息
			async getInfo() {
				try {
					const res = await this.$post(h5_community_memberInfo, {
						id: this.member_id
					})
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
			getMock() {
				return new Promise((resolve) => {
					setTimeout(() => {
						const res = {
							"code": 0,
							"data": {
								"list": [{
									"amount": "20",
									"buy_time": 1666754543,
									"works_name": "1026，测试专辑请勿购买001"
								}]
							},
							"msg": "success"
						}
						resolve(res)
					}, 1000)
				})
			},
			// 获取成员列表
			async getList() {
				try {
					// const res = await this.getMock()
					const res = await this.$post(h5_community_memberBuyList, {
						member_id: this.member_id,
						page: this.page++
					})
					if (res.code !== 0) {
						this.isFinish = true
						this.loading = false
						return uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
					if (res.data.list && Array.isArray(res.data.list) && res.data.list.length) {
						res.data.list.forEach(item => {
							const date = getTimeData(item.buy_time * 1000)
							item.buy_time_show =
								`${date.mon}-${date.dd} ${date.hh}:${date.MM}`
						})
						if (this.page === 1) {
							this.list = res.data.list
						} else {
							this.list = [...this.list, ...res.data.list]
						}
						this.loading = false
					} else {
						this.page = this.page - 1
						this.isFinish = true
						this.loading = false
					}
				} catch (e) {
					this.isFinish = true
					this.loading = false
					console.log(e)
					throw e
					//TODO handle the exception
				}
			}
		},
		onLoad(option) {
			this.member_id = Number(option.member_id)
			this.getInfo()
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
			width: 718rpx;
			margin: auto;
			background: #1A170E;
			border-radius: 16rpx;

			.board-top {
				display: flex;
				padding-top: 32rpx;
				padding-bottom: 30rpx;

				.top-1 {
					margin-left: 32rpx;
					margin-right: 16rpx;
					width: 92rpx;
					height: 92rpx;
					border-radius: 46rpx;

				}

				.top-2 {
					text-align: left;

					.top-2-1 {
						font-size: 32rpx;
						line-height: 44rpx;
						padding-top: 4rpx;
						padding-bottom: 10rpx;
						color: #ECECEC;
					}

					.top-2-2 {
						font-size: 24rpx;
						line-height: 34rpx;
						/* identical to box height */


						color: #AEAEAE;
					}
				}
			}

			.board-bottom {
				width: 686rpx;
				height: 74.8rpx;
				margin: auto;
				border-top: 1rpx solid rgba(54, 54, 54, 1);
				line-height: 74.8rpx;
				text-align: left;
				font-size: 24rpx;
				color: #AEAEAE;
				text-indent: 14rpx;

				.num {
					margin: 0 8rpx;
					font-weight: 600;
					font-size: 30rpx;
				}
			}
		}

		.member-title {
			display: flex;
			align-items: center;
			padding-top: 52rpx;
			padding-bottom: 32rpx;
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

		.list {
			width: 686rpx;
			margin: auto;
			padding-bottom: 30rpx;

			.list-head {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 16rpx 18rpx 16rpx;
				font-size: 26rpx;

				color: #AEAEAE;


				.head-1 {
					flex: 1;
					text-align: left;
				}

				.head-2 {
					text-align: center;
					width: 150rpx;
				}

				.head-3 {
					flex: 1;
					text-align: right;
				}
			}

			.scroll-view {
				height: calc(100vh - 535rpx);
			}

			.item {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				min-height: 98.62rpx;
				padding: 10rpx 16rpx;
				border-bottom: 1rpx solid rgba(54, 54, 54, 1);
				font-size: 26rpx;
				line-height: 36rpx;
				color: #ECECEC;

				.item-1 {
					flex: 1;
					text-align: left;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
				}

				.item-2 {
					text-align: center;
					width: 150rpx;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
				}

				.item-3 {
					flex: 1;
					text-align: right;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
				}
			}
		}

		.empty {
			height: 860rpx;
			text-align: center;
			overflow: hidden;

			.empty-img {
				margin-top: 160rpx;
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
</style>
