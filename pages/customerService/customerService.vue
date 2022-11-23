<template>
	<view class="container">
		<nav-head title="联系客服"></nav-head>
		<view class="item-content item1" v-if="identity_type===2">
			<view class="row1">大客户咨询二维码</view>
			<view class="row2">
				<image class="code2" :src="customer_service_vip" mode=""></image>
			</view>
			<view class="row3">长按识别二维码</view>
			<view class="row4">
				<view class="save" @tap="handSave(customer_service_vip,'大客户咨询二维码')">保存到相册</view>
			</view>
		</view>
		<view class="item-content item2">
			<view class="row1">客服二维码</view>
			<view class="row2">
				<image class="code2" :src="customer_service" mode=""></image>
			</view>
			<view class="row3">长按识别二维码</view>
			<view class="row4">
				<view class="save" @tap="handSave(customer_service,客服二维码)">保存到相册</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		isApp,
		saveBase64Image
	} from '../../utils/index.js'
	import {
		h5_user_info
	} from '../../request/api.js'
	import NavHead from '../../components/navHead.vue'
	export default {
		data() {
			return {
				customer_service: '',
				identity_type: 1,
				customer_service_vip: ''
			};
		},
		components: {
			NavHead
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
			handSave(url, name = '客服二维码') {
				uni.downloadFile({
					url,
					success({
						tempFilePath
					}) {
						if (isApp()) {
							saveBase64Image(tempFilePath)
						} else {
							const btn = document.createElement('a')
							btn.download = name
							btn.href = tempFilePath
							btn.click()

						}
					},
					fail(error) {
						uni.showToast({
							title: error.message,
							icon: 'none'
						})
					}
				})

			},
			async getInfo() {
				try {
					if (this.$store.state.user.userInfo) {
						this.customer_service = this.$store.state.user.userInfo.customer_service
						this.identity_type = this.$store.state.user.userInfo.identity_type || 1 // 1普通客户 2为大客户
						this.customer_service_vip = this.$store.state.user.userInfo.customer_service_vip || ''

					} else {
						const res = await this.$get(h5_user_info)
						if (res.code !== 0) {
							return uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}
						this.$store.commit('user/set_userInfo', res.data)
						this.customer_service = res.data.customer_service
						this.identity_type = res.data.identity_type || 1 // 1普通客户 2为大客户
						this.customer_service_vip = res.data.customer_service_vip || ''
					}

				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'none'
					})
				}
			}
		},
		created() {
			this.getInfo()
		}
	}
</script>

<style lang="scss" scoped>
	.container {

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

			.nav-left {
				position: absolute;
				top: 28rpx;
				left: 28rpx;
				width: 48rpx;
				height: 48rpx;
			}
		}

		.item-content {
			.row1 {
				font-weight: 600;
				font-size: 30rpx;
				line-height: 28rpx;
				/* identical to box height, or 93% */

				text-align: center;

				color: #ECECEC;
			}

			.row2 {
				display: flex;
				justify-content: center;
				padding-top: 24rpx;
				padding-bottom: 24rpx;

				.code2 {
					width: 270rpx;
					height: 270rpx;
				}
			}

			.row3 {
				padding-bottom: 24rpx;
				font-size: 24rpx;
				text-align: center;
				color: #ECECEC;
			}

			.row4 {
				text-align: center;

				.save {
					margin: auto;
					width: 400rpx;
					height: 96rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					background: #D10910;
					border-radius: 48px;
					line-height: 0;
					font-size: 32rpx;

					&:active {
						background-color: rgba(209, 9, 16, 0.6);
						color: rgba(134, 134, 134, 1);
					}
				}
			}
		}

		.item1 {
			padding-top: 66rpx;
		}

		.item2 {
			padding-top: 82rpx;
		}

	}
</style>
