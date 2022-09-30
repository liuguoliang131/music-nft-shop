<template>
	<view class="container">
		<cu-head></cu-head>
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
				<image class="icon" src="../../static/wx.png"></image>
				<view class="text">{{item.pay_name}}</view>
				<view class="radio" @click="handSelect(idx)">
					<image v-show="item.checked" class="checked" src="../../static/select.png"></image>
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
		h5_conllections_buy_result,
		h5_conllections_buy_pay_type_list,
		h5_conllections_buy_pay
	} from '../../request/api.js'
	import {
		requestPayment
	} from '../../request/index.js'
	import CuHead from '../../components/cu-head.vue'
	import {
		isWxBrowser,
		getOpenId
	} from '../../utils/index.js'
	export default {
		data() {
			return {
				timer: null,
				product_item_id: '',
				count_down: '',
				order_no: '',
				order_price: '',
				displayTime: '',
				list: [],
				listenTimer: null //监听回调
			};
		},
		components: {
			CuHead
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
					const res = await this.$post(h5_conllections_buy_result, {
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
					this.order_price = res.data.order_price || res.data.amount
					this.count_down = res.data.count_down
					this.startCountDown()
				} catch (e) {
					//TODO handle the exception
					console.log(e)
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
							let currentRoutes = getCurrentPages(); // 获取当前打开过的页面路由数组
							console.log(currentRoutes)
							if (currentRoutes.length === 1) {
								uni.redirectTo({
									url: '/pages/index/index'
								})
							} else {
								uni.navigateBack({
									delta: 2
								})
							}

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

			paymentFn({
				prepay_id,
				app_id,
				time_stamp,
				nonce_str,
				packageNew,
				sign,
				sign_type
			}) {
				const that = this

				function onBridgeReady() {
					WeixinJSBridge.invoke(
						'getBrandWCPayRequest', {
							"appId": app_id, //公众号名称，由商户传入
							"timeStamp": time_stamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
							"nonceStr": nonce_str, // 支付签名随机串，不长于 32 位
							"package": packageNew, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
							"signType": sign_type, // 微信支付V3的传入RSA,微信支付V2的传入格式与V2统一下单的签名格式保持一致
							"paySign": sign
						},
						function(res) {
							// 支付成功
							if (res.err_msg == "get_brand_wcpay_request:ok") {
								// 使用以上方式判断前端返回,微信团队郑重提示：
								//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
								uni.showToast({
									title: '支付成功',
									icon: 'success'
								})
							}
							// 支付过程中用户取消
							if (res.err_msg == "get_brand_wcpay_request:cancel") {
								uni.showToast({
									title: '支付取消',
									icon: 'none'
								})
							}
							// 支付失败
							if (res.err_msg == "get_brand_wcpay_request:fail") {
								uni.showToast({
									title: '支付失败',
									icon: 'error'
								})
							}
							/**
							 * 其它
							 * 1、请检查预支付会话标识prepay_id是否已失效
							 * 2、请求的appid与下单接口的appid是否一致
							 * */
							if (res.err_msg == "调用支付JSAPI缺少参数：total_fee") {
								uni.showToast({
									title: '调用支付JSAPI缺少参数：total_fee',
									icon: 'error'
								})
							}
						})
				}
				// 检测支付环境中的
				// WeixinJSBridge
				if (typeof WeixinJSBridge == "undefined") {
					if (document.addEventListener) {
						document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
					} else if (document.attachEvent) {
						document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
						document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
					}
				} else {
					onBridgeReady()
				}
			},
			// 支付
			async handPay() {
				try {
					let pay_type = isWxBrowser() ? 'js' : 'h5'
					let data = {
						order_no: this.order_no,
						pay_id: this.list.find(item => item.checked).pay_id,
						pay_type,
						open_id: getOpenId() || ''
					}

					const res = await this.$post(h5_conllections_buy_pay, data)
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
					// const url = Object.keys(res.data).find(key => {
					// 	return res.data[key]
					// })

					console.log('pay')
					if (pay_type === 'js') {
						const params = res.data.wx_pay_string
						params.packageNew = params.package
						this.paymentFn(params)
					} else {
						window.location.href = res.data.wx_pay_string.pay_string
					}

				} catch (e) {
					//TODO handle the exception
					console.log(e)
					uni.showToast({
						title: e.message,
						icon: 'error'
					})
				}
			},
			// 监听是否支付成功
			listenPaySuccess() {
				this.listenTimer = setTimeout(() => {
					// this.$post().then(res=>{
					if (res.code !== 0) {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					// 如果接收到 那么跳转到支付成功页面
					uni.reLaunch({
						url: `/pages/paySuccess/paySuccess?order_no=${this.order_no}&order_price=${this.order_price}&product_item_id=${this.product_item_id}`
					})
					// }).catch(error => {
					// 	uni.showToast({
					// 		icon: 'error',
					// 		title: res.message
					// 	})
					// })
				}, 1500)
			}

		},
		onLoad(option) {
			this.product_item_id = Number(option.product_item_id)
			this.order_no = option.order_no
			this.order_price = option.order_price
			this.getOrderResult()
			this.getPayType()
		},
		onShow() {
			this.listenPaySuccess()
		},
		beforeDestroy() {
			clearTimeout(this.timer)
			clearTimeout(this.listenTimer)
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;

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
					font-weight: 600;
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
