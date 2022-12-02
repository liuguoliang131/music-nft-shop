<template>
	<view class="container">
		<nav-head title="订单详情"></nav-head>
		<view class="title mt20">
			<text class="title-v"></text>
			<text v-if="product_type===1">单曲信息</text>
			<text v-else-if="product_type===2">专辑信息</text>
			<text v-else-if="product_type===3">数字音乐信息</text>
		</view>
		<view class="box1">
			<view class="box1-1">
				<image :src="detail.index_url" mode=""></image>
				<view class="sideline"></view>
				<image class="rare" v-if="detail.rare_type==='SSR'"
					src="https://file.yuanyinfu.com/front-end-lib/SSR.png" mode=""></image>
				<image class="rare" v-else-if="detail.rare_type==='UR'"
					src="https://file.yuanyinfu.com/front-end-lib/UR.png" mode=""></image>
				<image class="rare" v-else-if="detail.rare_type==='R'"
					src="https://file.yuanyinfu.com/front-end-lib/R.png" mode=""></image>
				<image class="rare" v-else-if="detail.rare_type==='SR'"
					src="https://file.yuanyinfu.com/front-end-lib/SR.png" mode=""></image>
			</view>
			<view class="box1-2">
				<view class="box1-2-1">
					{{detail.name}}
				</view>
				<!-- <view class="box1-2-2">
					<view class="box1-2-2-r">
						包含{{detail.singles_num}}首单曲
					</view>
				</view> -->
				<view class="box1-2-2">
					<view class="box1-2-2-l">
						发行方
					</view>
					<view class="box1-2-2-r">
						{{detail.publish_author}}
					</view>
				</view>
				<view class="box1-2-2">
					<view class="box1-2-2-l">
						发行时间
					</view>
					<view class="box1-2-2-r">
						{{detail.publish_time}}
					</view>
				</view>
				<view class="box1-2-2">
					<view class="box1-2-2-l">
						音乐类型
					</view>
					<view class="box1-2-2-r">
						<template v-if="product_type===1">
							单曲唱片
						</template>
						<template v-else-if="product_type===2">
							专辑唱片
						</template>
						<template v-else-if="product_type===3">
							数字音乐
						</template>
					</view>
				</view>
				<view class="box1-2-2">
					<view class="box1-2-2-l">
						转赠数量
					</view>
					<view class="box1-2-2-r">
						{{detail.donation_num}}张
					</view>
				</view>
			</view>
		</view>
		<view class="box2">
			<view class="box2-row1">
				<input class="input" type="text" placeholder="请输入对方的钱包地址" v-model="user_address">
				<view class="sub" @tap="handValid">校验</view>
			</view>
			<view class="box2-row2" v-if="addressCheck">
				接收方：
				<image v-if="addressCheck.avatar" class="row2-2-a" :src="addressCheck.avatar" mode=""></image>
				<image v-else class="row2-2-a" src="https://file.yuanyinfu.com/front-end-lib/userNotLogin.png" mode="">
				</image>
				<view class="row2-2-b" v-if="addressCheck.nick_name">
					{{addressCheck.nick_name}}
				</view>
				<view class="row2-2-c" v-if="addressCheck.phone">
					{{addressCheck.phone}}
				</view>
			</view>
			<view class="box2-row2" v-else>
				接收方：
				<view class="row2-3" v-if="addressCheck!==null">
					地址错误，请核实
				</view>

			</view>
		</view>
		<view class="splitline"></view>
		<view class="box3">
			<view class="box3-row1">
				<view class="row1-1">奇点余额：</view>
				<view class="row1-2">
					<text class="row1-2-1">{{myAmount}}</text>奇点
				</view>
				<view class="row1-3" @tap="handRecharge">
					充值<image src="https://file.yuanyinfu.com/front-end-lib/gt.png" mode=""></image>
				</view>
			</view>
			<view class="box3-row2">
				<image src="https://file.yuanyinfu.com/front-end-lib/tanhao-icon.png" mode=""></image>
				转赠手续费需扣除{{detail.donation_fee}}奇点
			</view>
			<view class="box3-row3" v-html="tips"></view>

		</view>
		<view class="footer"></view>
		<view :class="['container-btn']" v-show="addressCheck" @tap="handSubgift">确认转赠</view>
		<view :class="['container-btn','cancel']" v-show="!addressCheck">确认转赠</view>

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
				<view :class="['dialog-text3']">请前往元音符App进行充值</view>
				<view class="dialog-bottom" @tap="goDownload">下载App</view>
			</view>
		</my-dialog>
		<my-dialog ref="myDialog1">
			<view class="dialog-content">
				<view class="dialog-text1">未设置支付密码</view>
				<view :class="['dialog-text2']">请前往元音符App进行设置</view>
				<view class="dialog-bottom" @tap="goDownload">下载App</view>
			</view>
		</my-dialog>
	</view>
</template>

<script>
	import {
		getTimeData,
		jumpBefore
	} from '../../utils/index.js'
	import {
		h5_collections_user_if_approve,
		h5_collections_user_getAmount,
		h5_collections_user_if_password,
		h5_user_check_user,
		h5_collections_donation_submit
	} from '../../request/api.js'
	import {
		get1,
		post1
	} from '../../request/index.js'
	import md5 from 'js-md5'
	import WybPopup from '../../components/wyb-popup/wyb-popup.vue'
	import MyDialog from '../../components/dialog.vue'
	import NavHead from '../../components/navHead.vue'
	export default {
		components: {
			NavHead,
			WybPopup,
			MyDialog
		},
		data() {
			return {
				product_type: 1,
				detail: {
					index_url: '',
					rare_type: '',
					name: '',
					publish_time: '',
					donation_fee: 0

				},
				user_address: '',
				addressCheck: null,
				tips: `温馨提示：<br/>
					1、数字音乐藏品是使用区块链技术生成的唯一数字存证，藏品转赠后无法退还，请您谨慎操作；<br/>
					2、平台用户在完成实名认证后，方可进行藏品转赠、接受等操作；<br/>
					3、购买藏品24小时后，才可进行转赠操作；<br/>
					4、转赠前请务必认真核实被赠予方的身份，以免上当受骗，因此造成的任何损失与元音符平台无关。`,
				password: [],
				keyboardList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '清空'],
				certified: false, //是否实名认证
				myAmount: 0, //余额
				hasPw: null //是否设置了密码
			};
		},
		onLoad(e) {
			this.product_type = Number(e.product_type)
			this.detail = JSON.parse(e.info)

		},
		onShow() {
			this.getUserAmountAndHasPw()
		},
		methods: {
			// 点击充值
			handRecharge() {
				this.$refs.myDialog.show()
			},
			// 校验地址
			async handValid() {
				if (!this.certified) {
					return this.goIdAuth()
				}
				try {
					const res = await this.$post(h5_user_check_user, {
						user_address: this.user_address,
						is_check: 1
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					this.addressCheck = res.data || false
				} catch (e) {
					//TODO handle the exception
					throw e
				}



			},

			// 密码输入完毕
			async confirmPassword() {

				try {
					const params = {
						product_item_id: this.detail.product_item_id,
						user_address: this.user_address,
						owner_id: this.detail.owner_id,
						password: md5(this.password.join(''))
					}
					const res = await this.$post(h5_collections_donation_submit, params)
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
							icon: 'none'
						})
					}
					this.$refs.popup.close()
					uni.navigateTo({
						url: `/pages/subgiftRecord/subgiftRecord?tabbar=${this.product_type}`
					})

				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'none'
					})
				}
			},
			// 确认转赠
			handSubgift() {
				try {
					// 打开零钱支付的密码输入框
					if (this.hasPw === null) {
						return false
					} else if (this.hasPw === true) {
						if (this.myAmount - Number(this.detail.donation_fee) >= 0) {
							this.$refs.popup.show()
						} else {
							this.$refs.myDialog.show()
						}
					} else {
						this.$refs.myDialog1.show()
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
					this.confirmPassword()
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
			goIdAuth() {
				// 身份认证
				uni.showToast({
					title: '还没有实名认证,即将跳转到实名认证页',
					icon: 'none'
				})
				setTimeout(() => {
					uni.navigateTo({
						url: `/pages/idAuth/idAuth`
					})
				}, 2000)

			},
			// 查询账户余额和是否设置零钱支付的密码
			getUserAmountAndHasPw() {
				this.$get(h5_collections_user_if_approve).then(res => {
					if (res.code === 200 || res.code === 0) {
						this.certified = res.data === 'true' ? true : false
					} else if (res.code === 7) {
						// 身份认证
						// uni.navigateTo({
						// 	url: `/pages/idAuth/idAuth`
						// })

					} else {
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})

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
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0 40rpx;
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 400;
		font-size: 24rpx;
		line-height: 30rpx;
		color: #777777;


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
			.box2-row1 {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-top: 29rpx;

				.input {
					background: #292929;
					border: 1rpx solid #2F2F2F;
					border-radius: 8rpx;
					box-sizing: border-box;
					padding: 0 16rpx;
					width: 590rpx;
					height: 80rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 26rpx;
					color: #DDDDDD;

					&::placeholder {
						color: #DDDDDD;
					}

				}

				.sub {
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 28rpx;
					line-height: 40rpx;
					text-align: right;
					color: #D10910;
				}
			}

			.box2-row2 {
				padding-top: 16rpx;
				display: flex;
				align-items: center;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 24rpx;
				line-height: 48rpx;
				color: #777777;

				.row2-2-a {
					width: 38rpx;
					height: 38rpx;
					border-radius: 19rpx;
					margin-right: 8rpx;
				}

				.row2-2-b {
					margin-right: 15rpx;
				}

				.row2-2-c {}

				.row2-3 {
					color: #D10910;
				}
			}


		}

		.splitline {
			margin-top: 34rpx;
			margin-bottom: 32rpx;
			height: 1rpx;
			opacity: 0.3;
			background-color: #AEAEAE;
			border-radius: 1rpx;
		}

		.box3 {
			.box3-row1 {
				display: flex;
				align-items: center;

				.row1-1 {
					font-style: normal;
					font-weight: 400;
					font-size: 24rpx;
					line-height: 34rpx;
					color: #AEAEAE;
				}

				.row1-2 {
					flex: 1;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
					font-weight: 400;
					font-size: 24rpx;
					line-height: 34px;
					color: #DDDDDD;

					.row1-2-1 {
						font-weight: 600;
						font-size: 30rpx;
						line-height: 42px;
						color: #DDDDDD;
						margin-right: 5rpx;
					}
				}

				.row1-3 {
					color: #D10910;
					font-weight: 500;
					font-size: 28rpx;

					image {
						width: 24rpx;
						height: 24rpx;
						vertical-align: middle;
					}
				}
			}

			.box3-row2 {
				display: flex;
				align-items: center;
				font-size: 24rpx;
				line-height: 34rpx;
				color: #777777;

				image {
					vertical-align: middle;
					width: 36rpx;
					height: 36rpx;
					margin-right: 8rpx;
				}
			}

			.box3-row3 {
				padding-top: 52rpx;
				line-height: 40rpx;
			}


		}

		.footer {
			height: 200rpx;
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

		.cancel {
			background: #7C7C7C;
			color: #fff;
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
			background-color: #fff;
			border-radius: 16rpx;

			.dialog-text1 {
				padding-top: 70rpx;
				padding-bottom: 20rpx;
			}

			.dialog-text2 {
				padding-bottom: 70rpx;
			}

			.dialog-text3 {
				height: 248rpx;
				display: flex;
				align-items: center;
				justify-content: center;
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
