<template>
	<view class="container order">
		<nav-head title="我的订单" otherHeight="140rpx" :useSelfBack="true" @navBack="handleBack"></nav-head>
		<my-tab :list="tabList" :activeBar="activeBar" @active="handActive" :slide="false"></my-tab>
		<view class="order-nav">
			<view class="order-nav-item" :class="index === activeNav ? 'active' : ''"
				v-for="( item , index ) in navList" :key='index' @click="handleClickNavItem(index)">
				{{item}}
			</view>
		</view>
		<view :class="['empty']" :style="{height:$store.state.publicState.remainingHeight}"
			v-if="isFinish&&list.length===0">
			<view class="empty-center">
				<image src="https://file.yuanyinfu.com/front-end-lib/empty-icon.png" mode="" class="empty-img"></image>
				<view class="empty-text">还没有相关订单</view>
			</view>
		</view>
		<my-scroll v-else :class="['scroll-box']" :isFinish="isFinish" :loading="loading" @load="getList">
			<view class="hasbox" v-for="(item , index) in list" :key='index' @click="handleGoToDetail(item,activeBar)">
				<view class="order-body-item">
					<view class="order-body-item-imageBox">
						<view class="order-body-item-imageBox-image"
							:style="`background-image:url(${item.index_img||item.music_pic})`">
						</view>
						<view class="order-body-item-imageBox-level" v-if="item.rare_type">
							<image v-if="item.rare_type==='SSR'" src="https://file.yuanyinfu.com/front-end-lib/SSR.png"
								mode=""></image>
							<image v-else-if="item.rare_type==='UR'"
								src="https://file.yuanyinfu.com/front-end-lib/UR.png" mode=""></image>
							<image v-else-if="item.rare_type==='R'" src="https://file.yuanyinfu.com/front-end-lib/R.png"
								mode=""></image>
							<!-- <image v-else-if="item.rare_type==='N'" src="https://file.yuanyinfu.com/front-end-lib/N.png"
								mode=""></image> -->
							<image v-else-if="item.rare_type==='SR'"
								src="https://file.yuanyinfu.com/front-end-lib/SR.png" mode=""></image>
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
							<view class="order-body-item-price" style="margin-left: auto;color: #666;font-size: 20rpx;">
								× {{item.buy_num||'1'}}
							</view>
						</view>
						<view class="order-body-item-box-flex">
							<view class="order-body-item-price"
								style="margin-left: auto;color: #fff;margin-top: 10rpx;">
								实付金额 ￥{{item.order_price}}
							</view>
						</view>

						<view class="order-body-item-box-flex" style="margin-top: 20rpx;" v-if="item.pay_status === 0">
							<view style="display: flex;align-items: center;margin-left: auto;margin-top: 8rpx;">
								<button class="my-btn cancel-my-btn" @click.stop="handleClickCancle(item)">取消订单</button>
								<button class="my-btn" @click.stop="handleGoCashier(item)" style="">去支付</button>
							</view>
						</view>
					</view>
				</view>
				<view class="splitline" v-if="index!==list.length-1"></view>
			</view>
		</my-scroll>


	</view>
</template>

<script>
	import MyTab from '../../components/myTab.vue'
	import MyScroll from '../../components/myScroll.vue'
	import NavHead from '../../components/navHead.vue'
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
					},
					{
						name: '数字音乐',
						id: 3,
						activeNav: 0,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					}

				],
				activeBar: 1,
				navList: ['全部', '待支付', '已取消', '已完成'],
				activeNav: 0,
				isFinish: false,
				loading: false,
				page: 1,
				list: []
			}
		},
		created() {

		},
		onLoad(e) {
			console.log('onload')
			if (e.product_type) {
				this.activeBar = Number(e.product_type)
			}

		},
		onShow() {
			if (this.$store.state.publicState.refresh) {
				this.initParams()
				this.getList()
				this.$store.commit('publicState/set_refresh', false)
			}
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
			handleBack() {
				let currentRoutes = getCurrentPages() // 获取当前打开过的页面路由数组
				// return console.log(currentRoutes)
				if (currentRoutes.length === 1) {
					uni.reLaunch({
						url: '/pages/mine/mine'
					})
				} else {
					uni.navigateBack({
						delta: 1, //返回层数，2则上上页
					})
				}
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
			async getList(data) {
				let url = null
				let params = null
				if (this.activeBar === 4) {
					url = order_list
					// pay：已完成， cancel：已取消， create：待支付
					const fType = ['', 'create', 'cancel', 'pay']
					params = {
						page: this.page++,
						type: fType[this.activeNav]
					}
				} else {
					url = order_collectionsList
					params = {
						page: this.page++,
						order_type: this.activeNav,
						product_type: this.activeBar
					}
				}
				try {
					this.loading = true
					const res = await post1(url, params)
					if (res.code !== 0) {
						this.isFinish = true
						this.loading = false
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					if (res.data.list && Array.isArray(res.data.list) && res.data.list.length) {
						if (this.page === 1) {
							this.list = res.data.list
						} else {
							this.list = [...this.list, ...res.data.list]
						}

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
			},
			handleClickNavItem(idx) {
				if (this.activeNav === idx) return false
				this.activeNav = idx
				this.initParams()
				this.getList()
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
								this.initParams()
								this.getList()

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
			height: 70rpx;
			padding: 0 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;

			&-item {
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 24rpx;
				line-height: 60rpx;
				/* identical to box height, or 200% */
				text-align: center;
				color: #777777;
				height: 60rpx;
				padding-top: 10rpx;

				&.active {
					color: #C8A964;
				}
			}

		}

		.empty {
			position: relative;
			box-sizing: border-box;
			padding: 0 32rpx 32rpx 32rpx;
			height: calc(100vh - 238rpx);
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
			// height: calc(100vh - 238rpx);
		}


		.splitline {
			width: 542rpx;
			height: 1px;
			background-color: #343434;
			position: relative;
			left: 208rpx;
		}

		.hasbox:nth-last-child(1) .splitline {
			visibility: hidden;
		}

		&-body {
			padding-top: 20rpx;
			width: 750rpx;


			&-item {
				padding: 20rpx 40rpx;
				display: flex;
				align-items: flex-start;

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
			width: 156rpx;
			height: 48rpx;
			line-height: 50rpx;
			border-radius: 24rpx;
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 500;
			font-size: 24rpx;
			border: 1rpx solid #C8A964;
			text-align: center;
			color: #C8A964;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: transparent;
		}

		.cancel-my-btn {
			border: 1rpx solid #AEAEAE;
			color: #AEAEAE;
			margin-right: 20rpx;
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
