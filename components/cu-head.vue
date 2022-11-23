<template>
	<view class="slots" v-show="isWeb?!$store.state.user.inPlus:false">
		<view class="nav">
			<image @tap="navBack()" class="nav-left" src="../static/navLeft.png" mode=""></image>
		</view>
	</view>

</template>

<script>
	import {
		isApp,
		hasPlus,
		goLogin
	} from '../utils/index.js'
	export default {
		name: "cu-head",
		data() {
			return {
				isWeb: false //是否是浏览器环境下
			};
		},
		methods: {
			navBack() {
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
		},
		created() {
			if (isApp()) {
				this.isWeb = false
			} else {
				this.isWeb = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slots {
		height: 88rpx;
	}

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
	}
</style>
