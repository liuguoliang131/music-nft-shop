<template>
	<view class="container">
		<view class="nav">
			<image @tap="handleBack()" class="nav-left" src="../../static/Frame 1000006270.png" mode=""></image>
		</view>
		<view class="box1">
			<view class="price">
				<text class="rmb">￥</text>
				<text class="count">{{order_price}}</text>
			</view>
			<view class="time">
				<text class="time-text">剩余支付时间</text>
				<text class="time-count">{{displayTime}}</text>
			</view>
		</view>
		<view class="box2">
			<view class="box2-item" v-for="(item,idx) in list" :key="item.pay_id">
				<image class="icon" :src="item.pay_img_url"></image>
				<view class="text">{{item.pay_name}}</view>
				<view class="radio" @click="handSelect(idx)">
					<image v-show="item.checked" class="checked" src="../../static/Frame 1000006268.png"></image>
					<view v-show="!item.checked" class="nocheck"></view>
				</view>
			</view>
			<view class="empty-cell"></view>
		</view>
		<view class="box3">
			<view class="submit" @tap="handPay()">立即支付</view>
		</view>
	</view>
</template>

<script>
	import {
		h5_collections_buy_result,
		h5_conllections_buy_pay_type_list,
		h5_collections_buy_pay
	} from '../../request/api.js'
	import {
		requestPayment
	} from '../../request/index.js'
	export default {
		data() {
			return {
				timer: null,
				product_item_id: '',
				count_down: '',
				order_no: '',
				order_price: '',
				displayTime: '',
				list: []
			};
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
			// 获取下单结果
			async getOrderResult() {
				try {
					const res = await this.$post(h5_collections_buy_result, {
						order_no: this.order_no
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
					this.order_no = res.data.order_no
					this.order_price = res.data.order_price
					this.count_down = res.data.count_down
					this.startCountDown()
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'error'
					})
				}
			},
			// 开启倒计时
			startCountDown() {
				this.timer = setInterval(() => {
					if (this.count_down === 1) {
						clearInterval(this.timer)
						uni.showToast({
							title: '订单已失效请重新下单，即将为您返回到详情页',
							mask: true,
							duration: 3000
						})
						setTimeout(() => {
							uni.navigateBack({
								delta: 2
							})
						}, 3000)
					}
					this.count_down--
					let minute = parseInt(this.count_down / 60)
					let second = parseInt(this.count_down % 60)
					minute = minute < 10 ? '0' + minute : minute
					second = second < 10 ? '0' + second : second
					this.displayTime = minute + ':' + second
				}, 1000)
			},
			// 获取支付方式列表
			async getPayType() {
				try {
					const res = await this.$post(h5_conllections_buy_pay_type_list, {
						module_type: 1
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
					// const res = {
					// 	data: [{
					// 			pay_id: '1',
					// 			pay_name: '微信',
					// 			pay_img_url: '图标url',
					// 			tag: '标签文案'
					// 		},
					// 		{
					// 			pay_id: '2',
					// 			pay_name: '支付宝',
					// 			pay_img_url: '图标url',
					// 			tag: '标签文案'
					// 		},
					// 	]
					// }
					res.data.forEach((item, idx) => {
						item.checked = !idx
					})
					this.list = res.data || []
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: error.message,
						icon: 'error'
					})
				}
			},
			// 选择方式
			handSelect(idx) {
				this.list.forEach(item => item.checked = false)
				this.list[idx].checked = true
			},
			// 支付
			async handPay() {
				try {
					const res = await this.$post(h5_collections_buy_pay, {
						order_no: this.order_no,
						pay_id: this.list.find(item => item.checked).pay_id
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
					// const res = {
					// 	data: {
					// 		pay_string: '', //支付宝支付串
					// 		wx_pay_string: 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx2016121516420242444321ca0631331346&package=1405458241'
					// 	}
					// }
					const url = Object.keys(res.data).find(key => {
						return res.data[key]
					})

					console.log('pay')
					window.location.href = url
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
			this.order_no = option.order_no
			this.order_price = option.order_price
			this.getOrderResult()
			this.getPayType()
		}
	}
</script>

<style lang="scss">
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

		.box1 {
			height: 400rpx;
			text-align: center;

			.price {
				padding-top: 150rpx;
				height: 100rpx;
				color: rgba(209, 9, 16, 1);
				line-height: 100rpx;

				.rmb {
					font-size: 44rpx;
				}

				.count {
					font-size: 58rpx;
				}
			}

			.time {
				font-size: 28rpx;
				line-height: 40rpx;
				/* identical to box height */

				text-align: center;

				color: #AEAEAE;

				.time-text {}

				.time-count {
					margin-left: 8rpx;
				}
			}
		}

		.box2 {
			border-top: 1rpx solid #363636;
			overflow-y: scroll;
			height: 800rpx;

			.empty-cell {
				height: 240rpx;
			}

			.box2-item {
				display: flex;
				align-items: center;
				height: 100rpx;
				padding: 0 30rpx;
				border-bottom: 1rpx solid #363636;

				.icon {
					width: 54rpx;
					height: 54rpx;
				}

				.text {
					flex: 1;
					margin-left: 20rpx;
					margin-right: 20rpx;
				}

				.radio {
					position: relative;
					width: 44rpx;
					height: 44rpx;

					.nocheck {
						width: 40rpx;
						height: 40rpx;
						border-radius: 22rpx;
						border: 2rpx solid #363636;
					}

					.checked {
						position: absolute;
						top: 0rpx;
						left: 0rpx;
						width: 44rpx;
						height: 44rpx;
					}
				}
			}
		}

		.box3 {
			position: fixed;
			bottom: 140rpx;
			left: 0;
			width: 100%;
			text-align: center;

			.submit {
				display: flex;
				align-items: center;
				justify-content: center;
				line-height: 0;
				margin: auto;
				background: #D10910;
				border-radius: 48px;
				height: 96rpx;
				width: 474rpx;
				font-weight: 500;
				font-size: 32rpx;

				&:active {
					background-color: rgba(209, 9, 16, 0.6);
					color: rgba(134, 134, 134, 1);
				}
			}
		}
	}
</style>
