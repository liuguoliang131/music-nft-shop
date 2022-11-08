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
				<image v-if="item.pay_id===2" class="icon" src="../../static/wx.png"></image>
				<image v-else-if="item.pay_id===4" class="icon" src="../../static/lingqian.png"></image>
				<view class="text">
					{{item.pay_name}}
					<text class="text-1" v-if="item.pay_id===4">
						余额：￥{{myAmount.toFixed(2)}}
					</text>
				</view>
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
		<wyb-popup ref="popup" type="bottom" height="701" width="750" radius="6" bgColor="#ffffff" :showCloseIcon="true"
			@hide="clearPassword()">
			<view class="popup-content">
				<view class="popup-content-title">
					请输入交易密码
				</view>
				<view class="password-content">
					<view class="block">
						<view class="block-item" v-for="item in 6" :key="item"></view>
					</view>
					<view class="point">
						<view class="point-item" v-for="item in password" :key="item">
							<view class="point-item-center"></view>
						</view>
					</view>
				</view>
				<view class="keyboard">
					<view class="keyboard-button" v-for="item in keyboardList" :key="item.text" @tap="handInput(item)">
						{{item}}
					</view>
				</view>
			</view>
		</wyb-popup>
		<my-dialog ref="myDialog">
			<view class="dialog-content">
				<view class="dialog-text1">您的余额不足</view>
				<view :class="['dialog-text2',$store.state.user.inApp?'hideText':'']">请前往元音符App进行充值</view>
				<view v-if="$store.state.user.inApp" class="dialog-bottom" @tap="goNativePage({
					page:'cashRechargePage',isNeedLogin:true,params:{}})">去充值</view>
				<view v-else class="dialog-bottom" @tap="goDownload">下载App</view>
			</view>
		</my-dialog>
		<my-dialog ref="myDialog1">
			<view class="dialog-content">
				<view class="dialog-text1">未设置支付密码</view>
				<view :class="['dialog-text2',$store.state.user.inApp?'hideText':'']">请前往元音符App进行设置</view>
				<view v-if="$store.state.user.inApp" class="dialog-bottom" @tap="goNativePage({
					page:'pwdSettingPage',isNeedLogin:true,params:{}})">去设置</view>
				<view v-else class="dialog-bottom" @tap="goDownload">下载App</view>
			</view>
		</my-dialog>
	</view>
</template>

<script>
	import {
		h5_conllections_buy_result,
		h5_conllections_buy_pay_type_list,
		h5_conllections_buy_pay,
		h5_collections_wallet_pay_wallet, //零钱支付
		h5_collections_user_getAmount, //查询余额
		h5_collections_user_if_password, //查询是否设置了零钱支付的密码
		h5_conllections_buy_showsuccess
	} from '../../request/api.js'
	import {
		post1,
		get1
	} from '../../request/index.js'
	import {
		requestPayment
	} from '../../request/index.js'
	import CuHead from '../../components/cu-head.vue'
	import {
		openAppPage,
		jumpBefore,
		isWxBrowser,
		getOpenId
	} from '../../utils/index.js'
	import md5 from 'js-md5'
	import WybPopup from '../../components/wyb-popup/wyb-popup.vue'
	import MyDialog from '../../components/dialog.vue'
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
				listenTimer: null, //监听回调
				password: [],
				keyboardList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '清空'],
				myAmount: 0, //余额
				hasPw: null //是否设置了密码  null为请求loading状态
			};
		},
		components: {
			CuHead,
			WybPopup,
			MyDialog
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
					uni.showLoading({
						title: '加载中',
						mask: true
					});
					const res = await post1(h5_conllections_buy_result, {
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
					this.getPayType()

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
				if (this.timer) {
					clearInterval(this.timer)
				}
				this.timer = setInterval(() => {
					if (this.count_down <= 1) {
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
					} else {
						this.count_down--
						let minute = parseInt(this.count_down / 60)
						let second = parseInt(this.count_down % 60)
						minute = minute < 10 ? '0' + minute : minute
						second = second < 10 ? '0' + second : second
						this.displayTime = minute + ':' + second
					}

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
					uni.hideLoading()

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
			// 微信支付
			async wxPay(pay_id) {
				try {
					let pay_type = isWxBrowser() ? 'js' : 'h5'
					let data = {
						order_no: this.order_no,
						pay_id,
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
					// 微信浏览器内支付 or H5支付
					if (pay_type === 'js') {
						const params = res.data.wx_pay_param
						params.packageNew = params.package
						this.paymentFn(params)
					} else {
						window.location.href = res.data.wx_pay_param.pay_string
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
			// 微信支付 支付方法
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
			// 零钱支付
			async balancePay() {

				try {
					const params = {
						order_no: this.order_no,
						module_type: 3,
						password: md5(this.password.join(''))
					}
					const res = await this.$post(h5_collections_wallet_pay_wallet, params)
					if (res.code === 900) {
						// 未设置密码
						return this.$refs.myDialog1.show()
					} else if (res.code === 901) {
						// 余额不足
						return this.$refs.myDialog.show()
					} else if (res.code !== 0 && res.code !== 900 && res.code !== 901) {
						// 其他报错
						return uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
					this.$refs.popup.close()
					post1(h5_conllections_buy_showsuccess, {
						order_no: this.order_no
					}).then(res => {
						if (res.code === 200) {
							clearTimeout(this.timer)
							uni.redirectTo({
								url: `/pages/paySuccess/paySuccess?order_no=${this.order_no}&order_price=${this.order_price}&product_item_id=${this.product_item_id}&order_id=${res.data.order_id}`
							})
						} else if (res.code !== 0 && res.code !== 200) {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}

					})

				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message
					})
				}
			},
			// 支付
			handPay() {
				try {
					const pay_id = this.list.find(item => item.checked).pay_id
					if (pay_id === 2) {
						// 微信支付
						this.wxPay(pay_id)
					} else if (pay_id === 4) {
						// 打开零钱支付的密码输入框
						if (this.hasPw === null) {
							return false
						} else if (this.hasPw === true) {
							if (this.myAmount - Number(this.order_price) >= 0) {
								this.$refs.popup.show()
							} else {
								this.$refs.myDialog.show()
							}
						} else {
							this.$refs.myDialog1.show()
						}


					}

				} catch (e) {

				}
			},

			// 零钱支付 键盘输入
			handInput(k) {
				if (k === 'C') {
					if (this.password.length === 0) {
						return false
					}
					this.password.pop()
				} else if (k === '清空') {

					this.password = []
				} else {
					if (this.password.length === 6) {
						return false
					}
					this.password.push(k)
				}
				if (this.password.length === 6) {
					this.balancePay()
				}
			},
			// 清空密码输入
			clearPassword() {
				this.password = []
			},
			// 下载app
			goDownload() {
				jumpBefore(null)

			},
			// 打开APP页面
			goNativePage(data) {

				openAppPage(data)

			},
			// 监听是否支付成功
			listenPaySuccess() {

				post1(h5_conllections_buy_showsuccess, {
					order_no: this.order_no
				}).then(res => {
					if (res.code === 200) {
						clearTimeout(this.timer)
						uni.redirectTo({
							url: `/pages/paySuccess/paySuccess?order_no=${this.order_no}&order_price=${this.order_price}&product_item_id=${this.product_item_id}&order_id=${res.data.order_id}`
						})
					} else if (res.code !== 0 && res.code !== 200) {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					} else {
						this.listenPaySuccess()
					}

				}).catch(error => {
					uni.showToast({
						icon: 'error',
						title: res.message
					})
				})

			},

			// 查询账户余额和是否设置零钱支付的密码
			getUserAmountAndHasPw() {

				post1(h5_collections_user_getAmount).then(res => {
					if (res.code !== 0) {
						return uni.showToast({
							icon: 'none',
							title: res.msg
						})
					}
					this.myAmount = res.data.money_account.amount || 0
					post1(h5_collections_user_if_password).then(res1 => {
						this.hasPw = res1.data === 'false' ? false : true

					}).catch(error1 => {
						uni.showToast({
							title: error1.message
						})
					})
				}).catch(error => {
					uni.showToast({
						title: error.message
					})
				})

			}

		},
		onLoad(option) {
			this.product_item_id = Number(option.product_item_id)
			this.order_no = option.order_no
			this.order_price = option.order_price
			this.getOrderResult()
		},
		onShow() {
			this.listenPaySuccess()
			this.getUserAmountAndHasPw()
		},
		onHide() {

		},
		beforeDestroy() {
			clearTimeout(this.timer)
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
					font-size: 30rpx;

					.text-1 {
						margin-left: 40rpx;
						font-size: 20rpx;
						color: #D10910;
					}
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

		/deep/.icon-close {
			font-size: 36rpx;
		}

		/deep/.wyb-popup-box {
			z-index: 998 !important;
		}

		/deep/.wyb-popup-mask {
			z-index: 997 !important;
		}

		.popup-content {
			padding: 0;
			text-align: center;

			.popup-content-title {
				height: 100rpx;
				text-align: center;
				line-height: 100rpx;
				font-size: 30rpx;
				color: rgba(0, 0, 0, 1);
			}

			.password-content {
				position: relative;
				margin: 0 90rpx;

				.block {
					display: flex;
					align-items: center;

					.block-item {
						box-sizing: border-box;
						border: 1rpx solid rgba(0, 0, 0, 0.05);
						background-color: rgba(0, 0, 0, 0.1);
						width: 70rpx;
						height: 70rpx;
						margin: 0 12.5rpx;
						border-radius: 10rpx;
					}
				}

				.point {
					width: 100%;
					position: absolute;
					top: 0;
					left: 0;
					display: flex;
					align-items: center;

					.point-item {
						box-sizing: border-box;
						width: 70rpx;
						height: 70rpx;
						margin: 0 12.5rpx;
						display: flex;
						align-items: center;
						justify-content: center;

						.point-item-center {
							width: 26rpx;
							height: 26rpx;
							border-radius: 13rpx;
							background-color: rgba(0, 0, 0, 1);
						}
					}
				}
			}

			.keyboard {
				width: 100%;
				padding-top: 40rpx;
				display: flex;
				align-content: center;
				justify-content: center;
				flex-wrap: wrap;

				.keyboard-button {
					box-sizing: border-box;
					width: 190rpx;
					height: 80rpx;
					margin: 20rpx;
					border-radius: 7rpx;
					background-color: #fff;
					box-shadow: 0rpx 0rpx 2rpx 3rpx rgba(0, 0, 0, 0.1);
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 36rpx;
					font-weight: 600;
					color: #363636;

					&:active {
						background-color: rgba(0, 0, 0, 0.05);
						box-shadow: 0rpx 0rpx 1rpx 1rpx rgba(0, 0, 0, 0.2);
						color: rgba(0, 0, 0, 0.7);
					}
				}
			}
		}

		.dialog-content {
			position: relative;
			font-weight: 600;
			font-size: 32rpx;
			line-height: 44rpx;
			color: rgba(0, 0, 0, 0.9);
			overflow: hidden; // 溢出隐藏
			white-space: nowrap; // 强制一行
			text-overflow: ellipsis; // 文字溢出显示省略号
			text-align: center;

			.dialog-text1 {
				padding-top: 70rpx;
				padding-bottom: 20rpx;
			}

			.dialog-text2 {
				padding-bottom: 70rpx;
			}

			.hideText {
				visibility: hidden;
			}

			.dialog-bottom {
				display: flex;
				align-items: center;
				justify-content: center;
				line-height: 0;
				margin: auto;
				background: #D10910;
				color: #fff;
				border-radius: 0 0 16rpx 16rpx;
				height: 96rpx;
				width: 500rpx;
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
