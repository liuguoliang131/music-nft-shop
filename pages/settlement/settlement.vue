<template>
	<!-- <view class="container">
		<nav-head title="订单预览"></nav-head>
		<view class="title pt23">
			<view class="title-l"></view>
			<view class="title-r" v-if="product_type===1">单曲信息</view>
			<view class="title-r" v-else-if="product_type===2">专辑信息</view>
			<view class="title-r" v-else-if="product_type===3">数字音乐信息</view>
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
					<text class="r-1-r">￥{{data.price}}/张</text>
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
				<text class="row-3">{{data.pay_price}}</text>
				<text class="row-4">合计{{data.buy_num}}张</text>
			</view>
		</view>
		<view class="fixed-bottom" @tap="handOrder()">
			去支付
		</view>
	</view> -->
	<view class="container">
		<nav-head title="订单预览"></nav-head>
		<view class="title mt20">
			<text class="title-v"></text>
			<text v-if="product_type===1">单曲信息</text>
			<text v-else-if="product_type===2">专辑信息</text>
			<text v-else-if="product_type===3">数字音乐信息</text>
		</view>
		<view class="box1">
			<view class="box1-1">
				<image :src="data.index_url" mode=""></image>
				<view class="sideline"></view>
				<image class="rare" v-if="data.rare_type==='SSR'" src="https://file.yuanyinfu.com/front-end-lib/SSR.png"
					mode=""></image>
				<image class="rare" v-else-if="data.rare_type==='UR'"
					src="https://file.yuanyinfu.com/front-end-lib/UR.png" mode=""></image>
				<image class="rare" v-else-if="data.rare_type==='R'"
					src="https://file.yuanyinfu.com/front-end-lib/R.png" mode=""></image>
				<image class="rare" v-else-if="data.rare_type==='SR'"
					src="https://file.yuanyinfu.com/front-end-lib/SR.png" mode=""></image>
			</view>
			<view class="box1-2">
				<view class="box1-2-1">
					{{data.name}}
				</view>
				<!-- <view class="box1-2-2">
					<view class="box1-2-2-r">
						包含{{data.singles_num}}首单曲
					</view>
				</view> -->
				<view class="box1-2-2">
					<view class="box1-2-2-l">
						创作者
					</view>
					<view class="box1-2-2-r">
						{{data.creater_name}}
					</view>
				</view>
				<view class="box1-2-2">
					<view class="box1-2-2-l">
						发行方
					</view>
					<view class="box1-2-2-r">
						{{data.publish_author}}
					</view>
				</view>
				<view class="box1-2-2">
					<view class="box1-2-2-l">
						发行时间
					</view>
					<view class="box1-2-2-r">
						{{data.publish_time}}
					</view>
				</view>
				<!-- <view class="box1-2-2">
					<view class="box1-2-2-l">
						发行价格
					</view>
					<view class="box1-2-2-r">
						￥{{data.buy_price}}/张
					</view>
				</view> -->
			</view>
		</view>
		<view class="title mt34 mb7">
			<text class="title-v"></text>
			认证信息
		</view>
		<view class="box2">
			<!-- <view class="box2-1" v-if="data.order_status === 3">
				<view class="box2-1-l">
					Record Number
				</view>
				<view class="box2-1-r">
					{{data.code_num_min === data.code_num_max ? data.code_num_max : `${data.code_num_min}~${data.code_num_max}`}}
				</view>
			</view> -->
			<view class="box2-1">
				<view class="box2-1-l">
					Contract Address
				</view>
				<view class="box2-1-r">
					{{data.contract_address}}
				</view>
			</view>
			<view class="box2-1">
				<view class="box2-1-l">
					Token ID
				</view>
				<view class="box2-1-r">
					{{data.token_id}}
				</view>
			</view>
			<view class="box2-1">
				<view class="box2-1-l">
					Token Standard
				</view>
				<view class="box2-1-r">
					{{data.token_standard}}
				</view>
			</view>
		</view>
		<view class="splitline">

		</view>
		<view class="box3">
			<view class="box3-row">
				<text class="row-1">实付</text>
				<text class="row-2">￥</text>
				<text class="row-3">{{data.pay_price}}</text>
				<text class="row-4">合计{{data.buy_num}}张</text>
			</view>
		</view>

		<view class="container-btn" @tap="handOrder()">
			去支付
		</view>
	</view>
</template>

<script>
	import {
		getTimeData
	} from '../../utils/index.js'
	import {
		h5_conllections_buy_submit,
		h5_conllections_buy_result
	} from '../../request/api.js'
	import NavHead from '../../components/navHead.vue'
	export default {
		components: {
			NavHead
		},
		data() {
			return {
				product_item_id: '',
				buy_num: '',
				data: {

				},
				product_type: 1
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
			filterTimes(e) {
				return dayjs(e).format('YYYY/MM/DD HH:mm:ss')
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
							icon: 'none'
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
						icon: 'none'
					})
				}
			},
			// 下单 去支付
			async handOrder() {
				try {
					const res = await this.$post(h5_conllections_buy_submit, {
						product_item_id: this.product_item_id,
						buy_num: this.buy_num
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'none'
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
						icon: 'none'
					})
				}
			},
			// 获取下单结果
			async getOrderResult(order_no) {
				try {
					const res = await this.$post(h5_conllections_buy_result, {
						order_no
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'none'
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
						icon: 'none'
					})
				}
			}
		},
		onLoad(option) {
			this.product_item_id = Number(option.product_item_id)
			this.buy_num = Number(option.buy_num)
			this.data = JSON.parse(option.params)
			this.product_type = Number(option.type)
		}
	}
</script>

<style scoped lang="scss">
	.container {
		padding: 0 32rpx;
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 400;
		font-size: 24rpx;
		line-height: 34rpx;

		.title {
			display: flex;
			align-items: center;
			color: #E4C985;
			font-size: 24rpx;
			font-weight: 400;
			height: 24rpx;

			.title-v {
				width: 6rpx;
				height: 24rpx;
				background: #E4C985;
				border-radius: 2rpx;
				margin-right: 12rpx;
			}
		}

		.mt20 {
			margin-top: 20rpx;
		}

		.mt34 {
			margin-top: 34rpx;
		}

		.mb7 {
			margin-bottom: 15rpx;
		}


		.box1 {
			margin-top: 23rpx;
			width: 686rpx;
			display: flex;

			.box1-1 {
				position: relative;
				width: 240rpx;
				height: 240rpx;
				border-radius: 20rpx;

				image {
					width: 240rpx;
					height: 240rpx;
					border-radius: 20rpx;
				}

				.sideline {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					margin: auto;
					width: 220rpx;
					height: 220rpx;
					border: 1rpx solid rgba(255, 255, 255, 0.2);
					border-radius: 20rpx;
				}

				.rare {
					position: absolute;
					top: 0;
					left: 0;
					width: 84rpx;
					height: 40rpx;
					border-radius: 0;
				}
			}

			.box1-2 {
				flex: 1;
				padding-left: 40rpx;

				.box1-2-1 {
					font-weight: 500;
					font-size: 28rpx;
					line-height: 40rpx;
					color: #DDDDDD;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
				}

				.box1-2-2 {
					display: flex;
					align-items: center;
					margin-top: 10rpx;
					font-weight: 400;
					font-size: 26rpx;
					line-height: 36rpx;


					.box1-2-2-l {
						width: 128rpx;
						color: #777777;
					}

					.box1-2-2-r {
						flex: 1;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
						color: #AEAEAE;
					}
				}
			}
		}

		.box2 {
			.box2-1 {
				display: flex;
				align-items: center;
				margin-top: 10rpx;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 26rpx;
				line-height: 36rpx;



				.box2-1-l {
					box-sizing: border-box;
					width: 254rpx;
					padding-left: 18rpx;
					color: #777777;
				}

				.box2-1-r {
					flex: 1;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
					color: #AEAEAE;
				}
			}
		}

		.splitline {
			margin-top: 33rpx;
			margin-bottom: 32rpx;
			height: 1rpx;
			opacity: 0.3;
			background-color: #AEAEAE;
			border-radius: 1rpx;
		}

		.box3 {
			// padding-top: 32rpx;
			// border-top: 1rpx solid #363636;

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
					font-weight: 600;
				}

				.row-4 {
					font-size: 26rpx;
					line-height: 50rpx;
				}
			}
		}

		.container-btn {
			position: fixed;
			bottom: 20rpx;
			left: 50%;
			transform: translate(-50%, 0);
			width: 686rpx;
			height: 96rpx;
			background: #D10910;
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 500;
			font-size: 32rpx;
			line-height: 44rpx;
			text-align: center;
			color: #ECECEC;
			border-radius: 48rpx;
		}
	}
</style>
