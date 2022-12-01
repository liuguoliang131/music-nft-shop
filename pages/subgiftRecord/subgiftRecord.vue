<template>
	<view class="container">
		<nav-head title="转赠记录"></nav-head>
		<my-tab :list="tabList" :activeBar="activeBar" @active="handActive" :slide="false"></my-tab>
		<view class="type-nav">
			<view class="type-nav-item" :class="index === activeNav ? 'active' : ''" v-for="( item , index ) in navList"
				:key='index' @click="handleClickNavItem(index)">
				{{item}}
			</view>
		</view>
		<view :class="['empty']" v-if="isFinish&&list.length===0">
			<view class="empty-center">
				<image src="https://file.yuanyinfu.com/front-end-lib/empty-icon.png" mode="" class="empty-img"></image>
				<view class="empty-text">还没有转赠记录</view>
			</view>
		</view>
		<my-scroll v-else :class="['scroll-box']" :isFinish="isFinish" :loading="loading" @load="getList">
			<view class="get-item" v-for="item in list" :key="item.product_item_id">
				<view class="item-left">
					<image :src="item.index_url" mode=""></image>
				</view>
				<view class="item-right">
					<view class="item-right-1">
						<view class="right-1-1">{{item.product_name}}</view>
						<view class="right-1-2">
							<text v-if="item.donation_status_desc==='转出中'" class="status1">转出中</text>
							<text v-else-if="item.donation_status_desc==='转出成功'" class="status2">转出成功</text>
							<text v-else-if="item.donation_status_desc==='转出失败'" class="status3">转出失败</text>
						</view>
					</view>
					<view class="item-right-2">
						单号：{{item.donation_no}}
					</view>
					<view class="item-right-3">
						转入人: {{item.donation_address}}
					</view>
					<view class="item-right-4">
						转受时间: {{filterTimes(item.donation_time*1000)}}
					</view>
				</view>
			</view>
		</my-scroll>
	</view>
</template>

<script>
	import MyTab from '../../components/myTab.vue'
	import MyScroll from '../../components/myScroll.vue'
	import NavHead from '../../components/navHead.vue'
	import {
		h5_collections_donation_list
	} from '../../request/api.js'
	import {
		post1
	} from '../../request/index.js'
	import dayjs from 'dayjs'
	export default {
		components: {
			MyTab,
			MyScroll,
			NavHead
		},
		data() {
			return {
				tabList: [
					// {
					// 	name: '版权',
					// 	id: 4,
					// 	activeNav: 0,
					// 	isFinish: false,
					// 	loading: false,
					// 	page: 1,
					// 	list: []
					// },
					{
						name: '数字音乐',
						id: 3,
						activeNav: 0,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					},
					{
						name: '黄金单曲',
						id: 1,
						activeNav: 0,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					},
					{
						name: '黄金专辑',
						id: 2,
						activeNav: 0,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					}

				],
				activeBar: 3,
				navList: ['全部', '转出', '转入'],
				activeNav: 0,
				isFinish: false,
				loading: false,
				page: 1,
				list: []
			}
		},
		onLoad(e) {
			if (e.tabbar) {
				this.activeBar = Number(e.tabbar)
			}

		},
		methods: {
			filterTimes(e) {
				return dayjs(e).format('YYYY/MM/DD HH:mm:ss')
			},
			initParams() {
				this.page = 1
				this.list = []
				this.isFinish = false
				this.loading = false
			},
			handActive(id) {
				if (this.activeBar === id) return false
				this.activeBar = id
				this.initParams()
				this.getList()
			},
			handleClickNavItem(idx) {
				if (this.activeNav === idx) return false
				this.activeNav = idx
				this.initParams()
				this.getList()
			},
			async getList() {
				try {
					this.loading = true
					let params = {
						page: this.page++,
						product_type: this.activeBar,
						donation_type: this.activeNav
					}
					const res = await post1(h5_collections_donation_list, params)
					if (res.code !== 0) {
						this.isFinish = true
						this.loading = false
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					if (res.data && res.data.list && Array.isArray(res.data.list) && res.data.list.length) {
						this.list = [...this.list, ...res.data.list]

					} else {
						this.isFinish = true
						this.page = this.page - 1
					}
					this.loading = false
				} catch (e) {
					this.isFinish = true
					this.loading = false
					uni.showToast({
						title: e.message,
						icon: 'none'
					})
					throw e
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;

		/deep/.bar {
			padding: 0 80rpx;
		}

		.type-nav {
			box-sizing: border-box;
			width: 750rpx;
			height: 60rpx;
			padding: 0 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 400;
			font-size: 24rpx;
			line-height: 60rpx;
			/* identical to box height, or 200% */
			text-align: center;
			color: #777777;

			&-item {
				text-align: center;

				&.active {
					color: #C8A964;
				}
			}

		}

		.empty {
			position: relative;
			box-sizing: border-box;
			padding: 0 32rpx 32rpx 32rpx;
			height: calc(100vh - 228rpx);
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
			width: 750rpx;
			height: calc(100vh - 228rpx);
		}

		.get-item {
			display: flex;
			height: 229rpx;
			box-sizing: border-box;
			padding: 32rpx 0;
			border-bottom: 1rpx solid #363636;

			.item-left {
				margin-left: 29.74rpx;
				width: 180rpx;
				height: 168rpx;

				image {
					width: 145rpx;
					height: 145rpx;
					border-radius: 16rpx;
				}
			}

			.item-right {
				flex: 1;

				.item-right-1 {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.right-1-1 {
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 400;
						font-size: 28rpx;
						line-height: 40rpx;
						color: #DDDDDD;
						width: 350rpx;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
					}

					.right-1-2 {

						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 500;
						font-size: 28rpx;
						line-height: 40rpx;
						text-align: center;
						color: #C8A964;
						margin-right: 40rpx;
						flex: 1;
						text-align: right;

						.status1 {
							color: #D10910;
						}

						.status2 {
							color: #C8A964;
						}

						.status3 {
							color: #AEAEAE;
						}
					}
				}

				.item-right-2 {
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 24rpx;
					line-height: 34rpx;
					/* identical to box height */

					color: #DDDDDD;
					margin-top: 7rpx;
					width: 500rpx;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
				}

				.item-right-3 {
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 24rpx;
					line-height: 34rpx;
					/* identical to box height */

					color: #777777;
					margin-top: 8rpx;
					width: 500rpx;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
				}

				.item-right-4 {
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 24rpx;
					line-height: 34rpx;
					/* identical to box height */

					margin-top: 8rpx;
					width: 500rpx;
					color: #777777;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
				}
			}
		}
	}
</style>
