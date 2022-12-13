<template>
	<view class="container">
		<view :class="$store.state.user.inApp?'slots':'web'">
			<view class="nav">
				<image @tap="navBack()" class="nav-left" src="https://file.yuanyinfu.com/front-end-lib/navLeft.png"
					mode=""></image>
				<text class="nav-center">
					<my-switch :options="options" :value.sync="switchValue" @change="switchChange"></my-switch>
				</text>
				<text class="nav-right">
					<image class="nav-r" src="https://file.yuanyinfu.com/front-end-lib/share1.png" mode=""
						@tap="handShare">
					</image>
				</text>
			</view>
		</view>

		<view v-if="switchValue===0" class="container-body">
			1
		</view>
		<view v-else class="container-body">
			2
		</view>

	</view>
</template>

<script>
	// 版权详情
	import {
		h5_show_musicInfo,
		h5_show_musicTransactionInfo,
		h5_show_otherMusicList
	} from '../../request/api.js'
	import {
		post1
	} from '../../request/index.js'
	import MySwitch from '../../components/mySwitch.vue'
	export default {
		components: {
			MySwitch
		},
		data() {
			return {
				switchValue: 0,
				options: ['作品', '交易']

			}
		},
		methods: {
			navBack() {
				if (this.$store.state.user.inApp) {
					goBack()
				} else {
					uni.navigateBack({
						delta: 1, //返回层数，2则上上页
					})
				}

			},
			switchChange(val) {
				if (val === 0) {
					this.getMusicInfo()
				} else {
					this.get
				}
			},
			// 作品详情
			getMusicInfo() {
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				post1(h5_show_musicInfo, {
					music_info_id: this.music_info_id
				}).then(res => {
					if (res.code !== 0) {
						uni.hideLoading()
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					this.getOthers()
				})
			},
			// 交易详情
			getTransactionInfo() {
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				post1(h5_show_musicTransactionInfo, {
					music_info_id: this.music_info_id
				}).then(res => {
					if (res.code !== 0) {
						uni.hideLoading()
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},
			// 其他作品
			getOthers() {
				post1(h5_show_otherMusicList, {
					music_info_id: this.music_info_id
				}).then(res => {
					if (res.code !== 0) {
						uni.hideLoading()
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			}

		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;

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
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.nav-right {
					top: 80rpx;
					left: 28rpx;
					width: 48rpx;
					height: 48rpx;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					image {
						width: 100%;
						height: 100%;
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
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.nav-right {
					position: absolute;
					top: 0rpx;
					right: 28rpx;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					width: 48rpx;
					height: 88rpx;

					image {
						width: 48rpx;
						height: 48rpx;
					}
				}
			}
		}
	}
</style>
