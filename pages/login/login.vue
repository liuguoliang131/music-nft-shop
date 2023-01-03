<template>
	<view class="container">
		<view class="h88"></view>
		<view class="header">
			<image class="head-img" src="https://file.yuanyinfu.com/front-end-lib/logo.png" alt=""></image>
		</view>
		<view class="main">
			<view class="form">
				<view class="form-item phone">
					<input class="uni-input" maxlength="11" type="number" placeholder="请输入手机号码"
						placeholder-style="color: #363636;" v-model="form.phone" />
				</view>
				<view class="form-item captcha">
					<input class="uni-input" maxlength="6" type="number" placeholder="请输入验证码"
						placeholder-style="color: #363636;" v-model="form.captcha" />
					<view v-if="!timer" class="getcaptcha" @tap="handShowPopup">获取验证码</view>
					<view v-else class="getcaptcha">{{countDown}}</view>
				</view>
				<view class="agree">
					<checkbox-group @change="handCheckboxChange($event)" name="agree">
						<checkbox class="checkbox" :value="true" />
					</checkbox-group>
					<text class="agree-label">
						登录即代表您已同意
						<text @tap="handView('https://h5.shenglangnft.com/base/agreement')">《用户协议》</text>和<text
							@tap="handView('https://h5.shenglangnft.com/base/privacy_policy')">《隐私政策》</text>
					</text>
				</view>
				<view class="sub">
					<view class="submit" @tap="handValid()">登录</view>
				</view>
			</view>
		</view>
		<view class="footer">
			COPYRIGHT © 2022 HANHOU
		</view>

		<tf-verify-img @succeed="verifySuccess" @close="showVerify = false" v-if="showVerify"></tf-verify-img>
	</view>
</template>

<script>
	import TfVerifyImg from '../../components/tf-verify-img/tf-verify-img.vue'
	import {
		h5_base_login,
		h5_base_captcha,
		h5_user_info
	} from '../../request/api.js'
	export default {
		components: {
			TfVerifyImg
		},
		data() {
			return {
				share_sign: '', //分享绑定code
				next: '', //下一个页面
				id: '', //下一个页面需要参数
				origin: '', //上一个页面
				form: {
					phone: '',
					captcha: ''
				},
				showVerify: false,
				agree: false,
				timer: null,
				countDown: 0
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
			// 查看协议
			handView(url) {
				uni.navigateTo({
					url: `/pages/userAgreement/userAgreement?url=${url}`
				})
			},
			handCheckboxChange(e) {
				this.agree = !this.agree
			},
			// 打开弹窗
			handShowPopup() {
				if (!/^[1]{1}[0-9]{10}$/.test(this.form.phone)) {
					console.log(this.form.phone)
					return uni.showToast({
						title: '手机号码不符合规则',
						icon: 'none'
					})
				}
				this.showVerify = true

			},
			// 滑动验证成功
			verifySuccess() {
				this.showVerify = false
				this.handGetCaptcha()
			},
			// 获取验证码
			async handGetCaptcha() {

				const res = await this.$post(h5_base_captcha, {
					phone: this.form.phone,
					use_type: 6
				})
				console.log(res)
				if (res.code !== 0) {
					return uni.showToast({
						title: res.msg,
						icon: 'none'
					})
				}
				uni.showToast({
					title: '已发送',
					icon: 'success'
				})
				this.countDown = 60
				this.timer = setInterval(() => {
					if (this.countDown === 1) {
						clearInterval(this.timer)
						this.timer = null
					}
					this.countDown--
				}, 1000)

			},
			// 点击登录
			handValid() {
				if (!this.agree) {
					return uni.showToast({
						title: '请勾选同意用户协议和隐私政策',
						icon: 'none'
					})
				}
				if (!/^[1]{1}[0-9]{10}$/.test(this.form.phone)) {
					console.log(this.form.phone)
					return uni.showToast({
						title: '手机号码不符合规则',
						icon: 'none'
					})
				}
				if (!/^[0-9]{6}$/.test(this.form.captcha)) {
					return uni.showToast({
						title: '验证码不符合规则',
						icon: 'none'
					})
				}
				this.login()

			},
			async login() {
				try {
					const data = {
						phone: this.form.phone,
						captcha: this.form.captcha
					}
					if (this.share_sign) {
						data.share_sign = this.share_sign
					}
					const res = await this.$post(h5_base_login, data)
					console.log(res)
					if (res.code !== 0) {
						return uni.showToast({
							icon: 'none',
							title: res.msg
						})
					}
					this.$store.commit('user/set_token', res.data.token)
					const res1 = await this.$get(h5_user_info)
					if (res1.code !== 0) {
						return uni.showToast({
							title: res1.msg,
							icon: 'none'
						})
					}
					this.$store.commit('user/set_userInfo', res1.data)
					uni.showToast({
						icon: 'success',
						title: '登录成功'
					})
					this.nextGoWhere()

				} catch (e) {
					//TODO handle the exception
					console.log('error', e)
					uni.showToast({
						icon: 'none',
						title: e.message
					})
				}

			},
			// 跳转到下一页
			nextGoWhere() {
				if (this.origin === 'invitationToRegister') {
					// 上一页注册 
					if (!this.next) {
						return uni.reLaunch({
							url: '/pages/index/index'
						})
					}

					if (this.next === 'goldSinglesDetail') {
						uni.reLaunch({
							url: '/pages/goldSinglesDetail/goldSinglesDetail?product_item_id=' + this.id
						})
					} else if (this.next === 'preOrderDetails') {
						uni.reLaunch({
							url: '/pages/preOrderDetails/preOrderDetails?product_item_id=' + this.id
						})
					} else if (this.next === 'recommendedAlbumDetail') {
						uni.reLaunch({
							url: '/pages/recommendedAlbumDetail/recommendedAlbumDetail?product_item_id=' + this
								.id
						})
					} else if (this.next === 'copyrightDetail') {
						uni.reLaunch({
							url: '/pages/copyrightDetail/copyrightDetail?music_info_id=' + this.id
						})
					} else {
						uni.reLaunch({
							url: '/pages/index/index'
						})
					}
				} else {
					if (getCurrentPages().length > 1) {
						uni.$emit('updateData', null)
						uni.navigateBack({
							delta: 1
						})
					} else {
						uni.redirectTo({
							url: '/pages/index/index'
						})
					}
				}


			}
		},
		onLoad(option) {
			// 先使用当前url携带的share_sign, 如果没有再使用本地储存的share_sign
			const storage = window.sessionStorage.getItem('afterBackQuery')
			if (storage) {
				const {
					query
				} = JSON.parse(storage)
				if (query.share_sign) {
					this.share_sign = decodeURIComponent(query.share_sign)
				}
			}
			if (option.share_sign) {
				this.share_sign = decodeURIComponent(option.share_sign)
			}
			this.next = option.next || ''
			this.id = option.id || ''
			this.origin = option.origin || ''
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.h88 {
			height: 88rpx;
		}

		.header {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			padding-top: 151rpx;

			.head-img {
				width: 200rpx;
				height: 267rpx;
			}
		}

		.main {
			display: flex;
			justify-content: center;
			width: 100%;
			padding-top: 50rpx;

			.form {
				width: 600rpx;
				padding-top: 200rpx;
				// background-color: rgba(0, 222, 0, 0.1);

				.form-item {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;

					.uni-input {
						box-sizing: border-box;
						width: 650rpx;
						height: 90rpx;
						padding: 0 10rpx;
						border: none;
						outline: none;
						background: transparent;
						border-bottom: 0.5px solid #363636;
						font-weight: 400;
						font-size: 28rpx;
						color: #ECECEC;
						font-size: 28rpx;

						&:hover {
							border-bottom: 0.5px solid #ECECEC;
						}
					}
				}

				.captcha {
					position: relative;

					.getcaptcha {
						position: absolute;
						top: 50%;
						right: 10rpx;
						transform: translate(0, -50%);
						color: rgba(209, 9, 16, 1);
						font-size: 28rpx;

						&:active {
							color: rgba(209, 9, 16, 0.6);
						}
					}
				}

				.agree {
					display: flex;
					color: #ffff;
					font-size: 28rpx;
					padding-top: 26rpx;
					padding-bottom: 100rpx;

					.checkbox {
						margin-right: 24rpx;
						margin-left: 10rpx;

						/deep/.uni-checkbox-input {
							width: 24rpx;
							height: 24rpx;
							border: 0.5px solid #868686;
							border-radius: 6rpx;
							background-color: transparent;
						}

						/deep/.uni-checkbox-input::before {
							font-size: 24rpx;
						}
					}

					.agree-label {
						font-size: 22rpx;
						line-height: 48rpx;
						color: #666666;

						text {
							color: rgba(172, 145, 71, 1)
						}
					}

				}
			}
		}

		.sub {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			.submit {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 650rpx;
				height: 96rpx;
				background: #D10910;
				border-radius: 48rpx;
				font-weight: 500;
				font-size: 32rpx;
				color: #ECECEC;

				&:active {
					background-color: rgba(209, 9, 16, 0.6);
					color: rgba(134, 134, 134, 1);
				}
			}
		}

		.footer {
			padding-top: 64rpx;
			font-family: 'Avenir';
			font-style: normal;
			font-weight: 400;
			font-size: 22rpx;
			text-align: center;
			color: #868686;
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

		.popup-content {}
	}
</style>
