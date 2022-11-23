<template>
	<view :class="$store.state.user.inApp?'slots':'web'">
		<view class="nav">
			<image v-show="left" @tap="navBack()" class="nav-left" src="../static/navLeft.png" mode=""></image>
			<text class="nav-center">{{title}}</text>
			<text v-show="right" class="nav-right">
				<slot></slot>
			</text>
		</view>
	</view>

</template>

<script>
	import {
		isApp,
		hasPlus,
		goLogin,
		goBack
	} from '../utils/index.js'
	export default {
		name: "cu-head",
		props: {
			title: {
				default: ''
			},
			left: {
				default: true
			},
			right: {
				default: true
			}
		},
		data() {
			return {
				isWeb: false //是否是浏览器环境下
			};
		},
		methods: {
			navBack() {
				if (this.$store.state.user.inApp) {
					goBack()
				} else {
					let currentRoutes = getCurrentPages(); // 获取当前打开过的页面路由数组
					if (currentRoutes.length === 1) {
						if (this.$store.state.user.token) {
							uni.redirectTo({
								url: '/pages/index/index'
							})

						} else {
							goLogin()
						}
					} else {
						uni.navigateBack({
							delta: 1, //返回层数，2则上上页
						})
					}
				}

			}
		},
		created() {

		}
	}
</script>

<style lang="scss" scoped>
	.slots {
		height: 148rpx;

		.nav {
			position: fixed;
			top: 0;
			left: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			padding-top: 60rpx;
			height: 88rpx;
			background-color: $uni-bg-color;
			z-index: 10;

			.nav-left {
				position: absolute;
				top: 80rpx;
				left: 28rpx;
				width: 48rpx;
				height: 48rpx;
			}

			.nav-center {
				width: 100%;
				height: 88rpx;
				color: #DDDDDD;
				font-size: 30rpx;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				text-align: center;
				line-height: 88rpx;
			}

			.nav-right {
				position: absolute;
				top: 60rpx;
				right: 28rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				width: 88rpx;
				height: 88rpx;

				image {
					background-color: red;
					width: 48rpx !important;
					height: 48rpx;
				}
			}
		}
	}


	.web {
		height: 88rpx;

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
				top: 20rpx;
				left: 28rpx;
				width: 48rpx;
				height: 48rpx;
			}

			.nav-center {
				width: 100%;
				height: 88rpx;
				color: #DDDDDD;
				font-size: 30rpx;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				text-align: center;
				line-height: 88rpx;
			}

			.nav-right {
				position: absolute;
				top: 0rpx;
				right: 28rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				width: 88rpx;
				height: 88rpx;

				image {
					background-color: red;
					width: 48rpx !important;
					height: 48rpx;
				}
			}
		}
	}
</style>
