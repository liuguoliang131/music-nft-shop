<template>
	<view class="container">
		<view class="header">
			<image class="head-img" src="../../static/logo.png" alt=""></image>
		</view>
		<view class="main">
			<view class="form">
				<view class="form-item phone">
					<input class="uni-input" maxlength="11" type="number" placeholder="请输入手机号码" v-model="form.phone" />
				</view>
				<view class="form-item captcha">
					<input class="uni-input" maxlength="6" type="number" placeholder="请输入验证码" v-model="form.captcha" />
					<view v-if="!timer" class="getcaptcha" @tap="handGetCaptcha()">获取验证码</view>
					<view v-else class="getcaptcha">{{countDown}}</view>
				</view>
				<view class="agree">
					<checkbox-group @change="handCheckboxChange($event)" name="agree">
						<checkbox class="checkbox" :value="true" />
					</checkbox-group>
					<text class="agree-label">
						未注册的手机号，登录时将自动进行注册，<br />且代表您已同意
						<text>《用户协议》</text>和<text>《隐私政策》</text>
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
	</view>
</template>

<script>
	import config from '../../utils/uniKey.js'
	import {
		getHashQuery
	} from '../../utils/index.js'
	import {
		h5_base_login,
		h5_base_captcha
	} from '../../request/api.js'
	export default {
		data() {
			return {
				form: {
					phone: '',
					captcha: ''
				},
				agree: false,
				timer: null,
				countDown: 0
			};
		},
		methods: {
			handCheckboxChange(e) {
				this.agree = !this.agree
			},
			// 获取验证码
			async handGetCaptcha() {
				if (!/^[1]{1}[0-9]{10}$/.test(this.form.phone)) {
					console.log(this.form.phone)
					return uni.showToast({
						title: '手机号码不符合规则',
						icon: 'error'
					})
				}
				const res = await this.$post(h5_base_captcha, {
					phone: this.form.phone,
					use_type: 6
				})
				console.log(res)
				if (res.code !== 0) {
					return uni.showToast({
						title: res.msg,
						icon: 'error'
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
						icon: 'error'
					})
				}
				if (!/^[1]{1}[0-9]{10}$/.test(this.form.phone)) {
					console.log(this.form.phone)
					return uni.showToast({
						title: '手机号码不符合规则',
						icon: 'error'
					})
				}
				if (!/^[0-9]{6}$/.test(this.form.captcha)) {
					return uni.showToast({
						title: '验证码不符合规则',
						icon: 'error'
					})
				}
				this.login()

			},
			login() {
				const {
					query
				} = getHashQuery()
				const data = {
					phone: this.form.phone,
					captcha: this.form.captcha
				}
				if (query.share_sign) {
					data.share_sign = query.share_sign
				}
				this.$post(h5_base_login, data).then(res => {
					console.log(res)
					if (res.code !== 0) {
						return uni.showToast({
							icon: 'error',
							title: res.msg
						})
					}
					this.$store.commit('user/set_token', res.data.token)
					this.$store.commit('user/set_userInfo', res.data.user_info)
					uni.showToast({
						icon: 'success',
						title: '登录成功'
					})
					if (getCurrentPages().length > 1) {
						uni.navigateBack({
							delta: 1
						})
					} else {
						uni.redirectTo({
							url: '/pages/index/index'
						})
					}
				}).catch(error => {
					console.log('error', error)
					uni.showToast({
						icon: 'error',
						title: 'error'
					})
				})
			}
		},
		onLoad() {

		}
	}
</script>

<style lang="scss" scoped>
	.container {

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
			padding-top: 200rpx;

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
						border-bottom: 0.5rpx solid #363636;
						font-weight: 400;
						font-size: 28rpx;
						color: #ECECEC;
						font-size: 28rpx;

						&::placeholder {
							color: #363636;
						}

						&:hover {
							border-bottom: 0.5rpx solid #ECECEC;
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
					padding-bottom: 136rpx;

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
						line-height: 36rpx;
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
				width: 474rpx;
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
	}
</style>
