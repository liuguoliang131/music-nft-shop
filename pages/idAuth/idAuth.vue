<template>
	<view class="container">
		<view class="nav">
			<image @tap="handleBack()" class="nav-left" src="../../static/Frame 1000006270.png" mode=""></image>
		</view>
		<view class="header">
			<view class="header-text">
				个人身份未认证
			</view>
			<view class="header-text1">
				平台将全程保证您的信息安全
			</view>
		</view>
		<view class="main">
			<view class="form">
				<view class="form-item phone">
					<input class="uni-input" maxlength="11" placeholder="真实姓名" v-model="form.name" />
				</view>
				<view class="form-item captcha">
					<input class="uni-input" maxlength="18" type="text" placeholder="身份证号"
						v-model="form.identification_number" />
				</view>
				<view class="tips">
					提示：实名认证会关联到后续的账户提现，请录入您真实的身份信息
				</view>
				<view class="sub">
					<view class="submit" @tap="handValid()">认证</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		h5_collections_user_verified
	} from '../../request/api.js'
	export default {
		data() {
			return {
				form: {
					name: '',
					identification_number: ''
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
			// 点击
			async handValid() {
				if (!/^[\u4e00-\u9fa5]{1,11}$/.test(this.form.name)) {
					return uni.showToast({
						title: '真实姓名只能是汉字',
						icon: 'error'
					})
				}
				if (!(/^[1-9]{1}[0-9Xx]{14,17}$/.test(
						this.form.identification_number))) {
					return uni.showToast({
						title: '身份证号不符合规则',
						icon: 'error'
					})
				}
				try {
					const res = await this.$post(h5_collections_user_verified, {
						...this.form
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
					uni.navigateBack({
						delta: 1
					})
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'error'
					})
				}

			},
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0 40rpx;
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

		.header {
			box-sizing: border-box;
			width: 100%;
			height: 390rpx;
			background-color: rgba(255, 255, 255, 0.15);
			border-radius: 16rpx;
			text-align: center;

			.header-text {
				padding-top: 230rpx;
				font-size: 32rpx;
				font-weight: 700;
			}

			.header-text1 {
				padding-top: 20rpx;
				font-size: 26rpx;
				color: #868686;
			}

		}

		.main {
			display: flex;
			justify-content: center;
			width: 100%;
			padding-top: 0rpx;

			.form {
				width: 600rpx;
				padding-top: 50rpx;
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

		.tips {
			width: 100%;
			padding-top: 50rpx;
			font-size: 26rpx;
			color: rgba(140, 100, 100, 1);
		}

		.sub {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-top: 50rpx;

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
	}
</style>
