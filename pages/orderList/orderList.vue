<template>
	<view class="container order">
		<cu-head />
		<my-tab :list="tabList" :activeBar="activeBar" @active="handActive" :slide="false">
			<template v-slot:item="{data}">
				<view class="order-nav">
					<view class="order-nav-item" :class="index === data.activeNav ? 'active' : ''"
						v-for="( item , index ) in navList" :key='index' @click="handleClickNavItem(data,index)">
						{{item}}
					</view>
				</view>
				<view class="empty" v-if="data.isFinish&&data.list.length===0">
					<view class="empty-center">
						<image src="../../static/empty-icon.png" mode="" class="empty-img"></image>
						<view class="empty-text">还没有相关订单</view>
					</view>
				</view>
				<my-scroll v-else :key="data.id" class="scroll-box" :isFinish="data.isFinish" :loading="data.loading"
					:data="data" @load="getList">
					<view class="order-body-item" v-for="(item , index) in data.list" :key='index'
						@click="handleGoToDetail(item,data.id)">
						<view class="order-body-item-imageBox">
							<view class="order-body-item-imageBox-image"
								:style="`background-image:url(${item.index_img||item.music_pic})`">
							</view>
							<view class="order-body-item-imageBox-level" v-if="item.rare_type">
								<image v-if="item.rare_type==='SSR'" src="../../static/SSR.png" mode=""></image>
								<image v-else-if="item.rare_type==='UR'" src="../../static/UR.png" mode=""></image>
								<image v-else-if="item.rare_type==='R'" src="../../static/R.png" mode=""></image>
								<image v-else-if="item.rare_type==='N'" src="../../static/N.png" mode=""></image>
								<image v-else-if="item.rare_type==='SR'" src="../../static/SR.png" mode=""></image>
							</view>
						</view>
						<view class="order-body-item-box">
							<view class="order-body-item-box-flex">
								<view class="order-body-item-title">
									{{item.name||item.music_name}}
								</view>
								<view class="order-body-item-type"
									style="color: #D10910;font-size: 28rpx;font-weight: 500;">
									{{item.pay_status | filterStatus}} <text class="cuIcon-right"></text>
								</view>
							</view>
							<view class="order-body-item-box-flex">

								<view class="order-body-item-tag">
									包含{{item.singles_num||'1'}}首单曲
								</view>
								<view class="order-body-item-type" style="margin-top: 16rpx;">
									￥{{item.buy_price||item.order_price}}
								</view>
							</view>
							<view class="order-body-item-box-flex">
								<view class="order-body-item-price"
									style="margin-left: auto;color: #666;font-size: 20rpx;">
									× {{item.buy_num||'1'}}
								</view>
							</view>
							<view class="order-body-item-box-flex">
								<view class="order-body-item-price"
									style="margin-left: auto;color: #fff;margin-top: 10rpx;">
									实付金额 ￥{{item.order_price}}
								</view>
							</view>

							<view class="order-body-item-box-flex" style="margin-top: 20rpx;"
								v-if="item.pay_status === 0">
								<view style="display: flex;align-items: center;margin-left: auto;margin-top: 8rpx;">
									<button class="my-btn" @click.stop="handleClickCancle(item)">取消订单</button>
									<button class="my-btn" @click.stop="handleGoCashier(item)"
										style="border-color: #C9A43D;color: #C9A43D;margin-left: 10rpx;">去支付</button>
								</view>
							</view>
						</view>
					</view>
				</my-scroll>
				<!-- <scroll-view class="order-body" scroll-y style="height: calc(100vh - 228rpx);"
					@scrolltolower='handleScrollTolower'>
					<view class="order-body-item" v-for="(item , index) in list" :key='index'
						@click="handleGoToDetail(item)">
						<view class="order-body-item-imageBox">
							<view class="order-body-item-imageBox-image"
								:style="`background-image:url(${item.index_img})`">
							</view>
							<view class="order-body-item-imageBox-level" v-if="item.rare_type">
								<image v-if="item.rare_type==='SSR'" src="../../static/SSR.png" mode=""></image>
								<image v-else-if="item.rare_type==='UR'" src="../../static/UR.png" mode=""></image>
								<image v-else-if="item.rare_type==='R'" src="../../static/R.png" mode=""></image>
								<image v-else-if="item.rare_type==='N'" src="../../static/N.png" mode=""></image>
								<image v-else-if="item.rare_type==='SR'" src="../../static/SR.png" mode=""></image>
							</view>
						</view>
						<view class="order-body-item-box">
							<view class="order-body-item-box-flex">
								<view class="order-body-item-title">
									{{item.title}}
								</view>
								<view class="order-body-item-type"
									style="color: #D10910;font-size: 28rpx;font-weight: 500;">
									{{item.order_status | filterStatus}} <text class="cuIcon-right"></text>
								</view>
							</view>
							<view class="order-body-item-box-flex">

								<view class="order-body-item-tag">
									包含{{item.singles_num}}首单曲
								</view>
								<view class="order-body-item-type" style="margin-top: 16rpx;">
									￥{{item.buy_price}}
								</view>
							</view>
							<view class="order-body-item-box-flex">
								<view class="order-body-item-price"
									style="margin-left: auto;color: #666;font-size: 20rpx;">
									× {{item.buy_num}}
								</view>
							</view>
							<view class="order-body-item-box-flex">
								<view class="order-body-item-price"
									style="margin-left: auto;color: #fff;margin-top: 10rpx;">
									实付金额 ￥{{item.order_total_price}}
								</view>
							</view>

							<view class="order-body-item-box-flex" style="margin-top: 20rpx;"
								v-if="item.order_status === 1">
								<view style="display: flex;align-items: center;margin-left: auto;margin-top: 8rpx;">
									<button class="my-btn" @click.stop="handleClickCancle(item)">取消订单</button>
									<button class="my-btn" @click.stop="handleGoCashier(item)"
										style="border-color: #C9A43D;color: #C9A43D;margin-left: 10rpx;">去支付</button>
								</view>
							</view>
						</view>
					</view>
					<view class="no-data" v-if="list.length===0">
						<image src="../../static/no-data.png" mode=""></image>
						~您还没有相关订单~
					</view>
				</scroll-view> -->
			</template>
		</my-tab>
		<!-- <view class="order-nav">
			<view class="order-nav-item" :class="index === activeNav ? 'active' : ''"
				v-for="( item , index ) in navList" :key='index' @click="handleClickNavItem(index)">
				{{item}}
			</view>
		</view> -->


	</view>
</template>

<script>
	import MyTab from '../../components/myTab.vue'
	import MyScroll from '../../components/myScroll.vue'
	import {
		h5_order_list,
		h5_order_cancle,
		order_collectionsList, //唱片的列表
		order_list //版权的列表
	} from '../../request/api.js'
	import {
		openAppPage
	} from '../../utils/index.js'
	import {
		post,
		post1
	} from '../../request/index.js'
	export default {
		components: {
			MyTab,
			MyScroll
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
				activeBar: 1,
				navList: ['全部', '待支付', '已取消', '已完成']
			}
		},
		onLoad() {

		},
		filters: {
			filterStatus(e) {
				const list = {
					0: '待支付',
					1: '已完成',
					2: '已取消',
					3: '已取消',
					4: '已取消',
					5: '已取消'

				}
				return list[e]
			}
		},
		methods: {
			handActive(id) {
				this.activeBar = id
			},
			async getList(data) {
				// if (e) {
				// 	this.page = 1
				// 	this.list = []
				// }
				// post(h5_order_list, {
				// 	page: this.page,
				// 	order_type: this.activeNav
				// }).then(res => {
				// 	if (res.data && Array.isArray(res.data)) {
				// 		if (this.page === 1) {
				// 			console.log(1)
				// 			this.list = res.data
				// 		} else {
				// 			console.log(2)
				// 			this.list = [...this.list, ...res.data]
				// 		}

				// 	} else {
				// 		this.page = this.page - 1
				// 	}
				// })
				const active = this.tabList.find((item) => item.id === data.id)
				let url = null
				let params = null
				if (active.id === 4) {
					url = order_list
					// pay：已完成， cancel：已取消， create：待支付
					const fType = ['', 'create', 'cancel', 'pay']
					params = {
						page: active.page++,
						type: fType[active.activeNav]
					}
				} else {
					url = order_collectionsList
					params = {
						page: active.page++,
						order_type: active.activeNav,
						product_type: active.id
					}
				}
				try {
					active.loading = true
					const res = await post1(url, params)
					if (res.code !== 0) {
						active.isFinish = true
						active.loading = false
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					if (res.data.list && Array.isArray(res.data.list) && res.data.list.length) {
						if (active.page === 1) {
							active.list = res.data.list
						} else {
							active.list = [...active.list, ...res.data.list]
						}

					} else {
						active.isFinish = true
						active.page = active.page - 1
					}
					active.loading = false
				} catch (e) {
					active.isFinish = true
					active.loading = false
					console.log(e)
					throw e
					//TODO handle the exception
				}
			},
			handleClickNavItem(item, idx) {
				item.activeNav = idx
				item.page = 1
				item.list = []
				this.getList(item)
			},
			handleGoToDetail(e, product_type) {
				let url = `/pages/orderDetail/orderDetail?id=${e.order_id}&product_type=${product_type}`
				uni.navigateTo({
					url
				})
			},
			handleClickCancle(a) {
				uni.showModal({
					title: '提示',
					confirmColor: '确认取消',
					cancelText: '返回',
					confirmColor: '#DC2D1E',
					content: '是否确认取消订单？',
					cancelColor: '#999999',
					success: (e) => {
						if (e.confirm) {
							post(h5_order_cancle, {
								order_id: a.order_id
							}).then(res => {
								uni.showToast({
									title: '取消成功'
								})

							})
						}
					}
				})
			},
			// 去往收银台
			handleGoCashier(item) {
				if (this.$store.state.user.inApp) {
					openAppPage({
						"page": "diskConfirmOrderPage",
						"isNeedLogin": true,
						"params": item
					})
				} else {
					let url =
						`/pages/cashier/cashier?product_item_id=${item.product_item_id}&order_no=${item.order_no}&order_price=${item.order_total_price}&order_id=${item.order_id}`
					uni.navigateTo({
						url
					})
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	.order {
		padding: 0;
		max-height: 100vh;


		/deep/.bar {
			padding: 0 80rpx;
		}


		&-nav {
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

		&-body {
			padding-top: 20rpx;
			width: 750rpx;

			&-item {
				padding: 20rpx 40rpx;
				display: flex;
				align-items: flex-start;
				border-bottom: 1px solid #343434;

				&-imageBox {
					width: 140rpx;
					height: 140rpx;
					position: relative;

					&-image {
						width: 100%;
						height: 100%;
						border-radius: 24rpx;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
					}

					&-level {
						position: absolute;
						top: 0;
						left: 0;
						width: 84rpx;
						height: 40rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}
				}

				&-box {
					display: flex;
					align-items: flex-start;
					flex-direction: column;
					justify-content: space-between;
					font-size: 24rpx;
					height: 80%;
					padding-left: 20rpx;
					color: #8A8A8A;
					flex: auto;

					&-flex {
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 100%;
					}
				}

				&-title {
					color: #FFFFFF;
					font-size: 28rpx;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					width: calc(100vw - 400rpx);

				}

			}
		}

		.my-btn {
			border: none;
			height: 50rpx;
			border-radius: 50rpx;
			padding: 0 40rpx;
			line-height: 50rpx;
			font-size: 24rpx;
			background-color: #0D0D0D;
			color: #AEAEAE;
			border: 1rpx solid #666;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 500;
		}
	}

	.center {
		width: 100%;
		height: 200rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		color: #666666;
	}
</style>
