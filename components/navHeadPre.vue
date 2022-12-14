<template>
	<view class="tem1" v-if="share_sign">
		<view class="nav">
			<image @tap="handGoDownload" class="nav-left" src="https://file.yuanyinfu.com/front-end-lib/logo-line.png"
				mode=""></image>
			<text class="nav-center" v-show="$store.state.user.inApp">详情</text>
		</view>
	</view>
	<view class="tem2" v-else>
		<view class="nav">
			<image @tap="navBack()" class="nav-left" src="https://file.yuanyinfu.com/front-end-lib/navLeft.png" mode="">
			</image>
			<text class="nav-center" v-show="$store.state.user.inApp">详情</text>
			<view class="nav-right" @tap="handleClickUserCenter">
				<image v-if="userInfo.avatar" class="avatar" :src="userInfo.avatar" mode=""></image>
				<image v-else class="avatar" src="https://file.yuanyinfu.com/front-end-lib/userNotLogin.png" mode="">
				</image>
			</view>
		</view>
	</view>
</template>

<!-- h5唱片购买详情页内使用 -->
<script>
	import {
		goLogin,
		goDownload
	} from '../utils/index.js'
	export default {
		name: "navHeadH5",
		props: {
			share_sign: {
				default: false
			}
		},
		data() {
			return {
				userInfo: {
					avatar: '',
					nick_name: ''
				}
			};
		},
		methods: {
			navBack() {
				let currentRoutes = getCurrentPages(); // 获取当前打开过的页面路由数组
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
			handleClickUserCenter() {
				if (this.$store.state.user.token) {
					uni.navigateTo({
						url: '/pages/mine/mine'
					})
				} else {
					goLogin()
				}
			},
			// 登陆还是下载
			handGoDownload() {
				if (!this.$store.state.user.token) {
					goLogin()
				} else {
					goDownload()
				}

			}
		},
		created() {
			this.userInfo = JSON.parse(JSON.stringify(this.$store.state.user.userInfo))
		}
	}
</script>

<style lang="scss" scoped>
	.tem1 {
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
				width: 154rpx;
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
		}
	}

	.tem2 {
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
				width: 64rpx;
				height: 88rpx;

				.avatar {
					width: 64rpx;
					height: 64rpx;
					border-radius: 32rpx;
				}
			}
		}
	}
</style>
