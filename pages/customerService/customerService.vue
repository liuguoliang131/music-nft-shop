<template>
	<view class="container">
		<div class="row1">客服二维码</div>
		<div class="row2">
			<image class="code2" :src="customer_service" mode=""></image>
		</div>
		<div class="row3">长按识别二维码</div>
		<div class="row4">
			<div class="save" @tap="handSave()">保存到相册</div>
		</div>
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
	export default {
		data() {
			return {
				customer_service: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-10-20%2F5f8eace52a8ff.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666683588&t=4296afb3ffe7983a07a9d16d8b3ccbbf'
			};
		},
		methods: {
			handSave() {
				uni.downloadFile({
					url: this.customer_service,
					success({
						tempFilePath
					}) {
						if (isApp()) {
							saveBase64Image(tempFilePath)
						} else {
							const btn = document.createElement('a')
							btn.download = '客服二维码'
							btn.href = tempFilePath
							btn.click()

						}
					},
					fail(error) {
						uni.showToast({
							title: error.message,
							icon: 'error'
						})
					}
				})

			},
			async getInfo() {
				try {
					const res = await this.$get(h5_user_info)
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
					this.$store.commit('user/set_userInfo', res.data)
					this.customer_service = res.data.customer_service
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'error'
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
		.row1 {
			padding-top: 232rpx;
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
			padding-bottom: 34rpx;
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
</style>
