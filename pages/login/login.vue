<template>
	<view class="container">
		<view class="header">
			<image class="head-img" src="../../static/logo.png" alt=""></image>
		</view>
		<view class="main">
			<view class="form">
				<view class="form-item phone">
					<input class="uni-input" type="number" placeholder="请输入手机号码" />
				</view>
				<view class="form-item captcha">
					<input class="uni-input" type="number" placeholder="请输入验证码" />
					<view class="getcaptcha" @tap="handGetCaptcha()">获取验证码</view>
				</view>
				<view class="agree">
					<checkbox :value="agree" class="checkbox" />
					<text class="agree-label">
						未注册的手机号，登录时将自动进行注册，<br />且代表您已同意
						<text>《用户协议》</text>和<text>《隐私政策》</text>
					</text>
				</view>
				<view class="sub">
					<view class="submit">登录</view>
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
	export default {
		data() {
			return {
				form: {
					phone: '',
					captcha: ''
				},
				agree: false,
				timer: null
			};
		},
		methods: {
			// 获取验证码
			handGetCaptcha() {
				if (this.timer) {
					return false
				}

				uni.showToast({
					title: '已发送',
					icon: 'success'
				})

			},
			// 点击登录
			handValid() {

			},
			login() {

			}
		},
		onLoad() {
			console.log(config.BASE_URL);
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
