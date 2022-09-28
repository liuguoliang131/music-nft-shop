<template>
	<view class="container">
		<view class="nav">
			<image @tap="handleBack()" class="nav-left" src="../../static/Frame 1000006272.png" mode=""></image>
		</view>
		<view class="title pt23">
			<view class="title-l"></view>
			<view class="title-r">专辑信息</view>
		</view>
		<view class="box1">
			<view class="box1-l">
				<image class="box1-l-cover" :src="data.index_url"></image>
				<view class="box1-l-border"></view>
			</view>
			<view class="box1-r">
				<view class="box1-r-0">{{data.product_name}}</view>
				<view class="box1-r-1">包含{{data.singles_num}}首作品</view>
				<view class="box1-r-2">
					<text class="r-1-l">发行方</text>
					<text class="r-1-r">{{data.publish_author_name}}</text>
				</view>
				<view class="box1-r-2">
					<text class="r-1-l">发行时间</text>
					<text class="r-1-r">{{data.publish_time}}</text>
				</view>
				<view class="box1-r-2">
					<text class="r-1-l">发行价格</text>
					<text class="r-1-r">￥{{data.pay_price}}/张</text>
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
				<view class="box2-row-r">{{data.contract_address}}</view>
			</view>
			<view class="box2-row">
				<view class="box2-row-l">Token ID</view>
				<view class="box2-row-r">{{data.token_id}}</view>
			</view>
			<view class="box2-row">
				<view class="box2-row-l">Token Standard</view>
				<view class="box2-row-r">{{data.token_standard}}</view>
			</view>
		</view>
		<view class="box3">
			<view class="box3-row">
				<text class="row-1">实付</text>
				<text class="row-2">￥</text>
				<text class="row-3">{{data.total}}</text>
				<text class="row-4">合计{{data.buy_num}}张</text>
			</view>
		</view>
		<view class="fixed-bottom" @tap="handOrder()">
			去支付
		</view>
	</view>
</template>

<script>
	import {
		getTimeData
	} from '../../utils/index.js'
	import {
		h5_conllections_buy_checkout,
		h5_collections_buy_submit,
		h5_collections_buy_result
	} from '../../request/api.js'
	export default {
		data() {
			return {
				product_item_id: '',
				buy_num: '',
				data: {

				}
			}
		},
		methods: {
			handleBack() {

				let currentRoutes = getCurrentPages(); // 获取当前打开过的页面路由数组
				console.log(currentRoutes)
				if (currentRoutes.length === 1) {
					uni.redirectTo({
						url: '/pages/index/index'
					})
				} else {
					uni.navigateBack({
						delta: 1, //返回层数，2则上上页
					})
				}
			},
			async getInfo() {
				try {
					const res = await this.$post(h5_conllections_buy_checkout, {
						product_item_id: this.product_item_id,
						buy_num: this.buy_num
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
					// const res = {
					// 	data: {
					// 		info: {
					// 			product_id: 1,
					// 			// 产品id	
					// 			product_item_id: 1,
					// 			// 产品明细id	
					// 			product_name: 'giao',
					// 			// 产品名称	
					// 			singles_num: 12,
					// 			// 包含单曲数量	
					// 			publish_type: 2,
					// 			// 发行类型  1、单曲  2、专辑  3、歌单  4、EP	
					// 			publish_type_note: '啊实打实打算',
					// 			// 发行类型文案	
					// 			publish_time: 123415414512,
					// 			// 发行时间	
					// 			publish_author_name: '元音符发行方',
					// 			// 发行方	
					// 			index_url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-10-20%2F5f8eace52a8ff.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666683588&t=4296afb3ffe7983a07a9d16d8b3ccbbf',
					// 			// 发行封面图	
					// 			pay_price: '55.09',
					// 			// 实付价格	
					// 			buy_num: 3,
					// 			// 购买数量	
					// 			contract_address: 'zxcadfasf123qasdfq',
					// 			// 链上合约地址	
					// 			token_id: 'adasdasd123asfdsdf',
					// 			// 链上token_id	
					// 			token_standard: 'asdsad123asdasd234'
					// 			// 链上token标准
					// 		}
					// 	}
					// }
					const date1 = getTimeData(res.data.info.publish_time)
					res.data.info.publish_time = `${date1.y}-${date1.mon}-${date1.dd}`
					res.data.info.total = (res.data.info.buy_num * res.data.info.pay_price).toFixed(2)
					this.data = res.data.info
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'error'
					})
				}
			},
			// 下单 去支付
			async handOrder() {
				try {
					const res = await this.$post(h5_collections_buy_submit, {
						product_item_id: this.product_item_id,
						buy_num: this.buy_num
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
					// const res = {
					// 	data: {
					// 		order_no: '12312'
					// 	}
					// }
					uni.showLoading({
						title: '加载中',
						mask: true
					})
					setTimeout(() => {
						uni.hideLoading()
						this.getOrderResult(res.data.order_no)

					}, 2200)
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'error'
					})
				}
			},
			// 获取下单结果
			async getOrderResult(order_no) {
				try {
					const res = await this.$post(h5_collections_buy_result, {
						order_no
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
					// const res = {
					// 	data: {
					// 		order_no: "12313",
					// 		order_price: '50.22',
					// 		count_down: 300 //倒计时 秒
					// 	}
					// }
					uni.navigateTo({
						url: `/pages/cashier/cashier?product_item_id=${this.product_item_id}&order_no=${res.data.order_no}&order_price=${res.data.order_price}&count_down=${res.data.count_down}`
					})
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'error'
					})
				}
			}
		},
		onLoad(option) {
			this.product_item_id = Number(option.product_item_id)
			this.buy_num = Number(option.buy_num)
			this.data = JSON.parse(option.params)
		}
	}
</script>

<style scoped lang="scss">
	.container {
		padding: 0;
		padding-top: 88rpx;

		.nav {
			position: fixed;
			top: 0;
			left: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 88rpx;
			background-color: #0D0D0D;
			z-index: 10;

			.nav-left {
				position: absolute;
				top: 28rpx;
				left: 28rpx;
				width: 48rpx;
				height: 48rpx;
			}
		}

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
					// display: flex;
					// align-items: center;
					width: 400rpx;
					font-weight: 500;
					font-size: 28rpx;
					/* identical to box height */
					color: #ECECEC;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
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

					.r-1-r {
						width: 280rpx;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
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
