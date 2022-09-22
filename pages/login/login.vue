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
					<label>
						<checkbox value="cb" checked="true" />
						未注册的手机号，登录时将自动进行注册，且代表您已同意
						<text>《用户协议》</text>和<text>《隐私政策》</text>
					</label>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="submit">登录</view>
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

<style lang="scss">
	.container {
		width: 100%;
		min-height: 100vh;
		background-color: $uni-bg-color;

		.header {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			padding-top: 100rpx;

			.head-img {
				width: 200rpx;
				height: 200rpx;
			}
		}

		.main {
			display: flex;
			justify-content: center;
			width: 100%;

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
						font-weight: 400;
						font-size: 28rpx;
						color: #999999;
						width: 600rpx;
						height: 80rpx;
						border: none;
						outline: none;
						background: transparent;
						border-bottom: 1px solid #666666;
					}
				}

				.captcha {
					position: relative;

					.getcaptcha {
						position: absolute;
						top: 50%;
						right: 0;
						transform: translate(0, -50%);
						color: red;
						font-size: 28rpx;

						&:active {
							color: #ffff;
						}
					}
				}

				.agree {
					color: #ffff;
					font-size: 28rpx;

					/deep/uni-checkbox {}

					text {
						color: yellow;
					}
				}
			}
		}

		.footer {
			position: fixed;
			bottom: 150rpx;
			left: 0;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			.submit {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 600rpx;
				height: 80rpx;
				background-color: red;
				border-radius: 40rpx;
				color: #ffff;
				font-size: 30rpx;
			}
		}
	}
</style>
