<template>
	<view class="container mine">
		<view class="mine-head">
			<image :src="userInfo.avatar" class="mine-head-image" mode=""></image>
			<view class="mine-head-box">
				<view class="mine-head-box-title">
					{{userInfo.nick_name||'未设置昵称'}}
				</view>
				<view class="mine-head-box-phone">
					{{userInfo.phone?(userInfo.phone.substring(0,3)+'****'+userInfo.phone.substring(7,12)):''}}
				</view>
			</view>
			<text class="cuIcon-right mine-head-icon"></text>
		</view>
		<view class="mine-notice">
			<view class="mine-notice-name">
				资产地址：
			</view>
			<view class="mine-notice-title">
				{{userInfo.public_key}}
			</view>
			<text class="cuIcon-copy mine-notice-copy" @click='copy(userInfo.public_key)'></text>
		</view>


		<view class="mine-list">
			<view class="mine-list-item" @click="goToCollections">
				<image src="../../static/mine.png" class="mine-list-item-image" mode=""></image>
				我的专辑
				<text class="cuIcon-right mine-head-icon"></text>
			</view>
			<view class="mine-list-item" @click="goToOrder">
				<image src="../../static/order.png" class="mine-list-item-image" mode=""></image>
				专辑订单
				<text class="cuIcon-right mine-head-icon"></text>
			</view>
			<view class="mine-list-item" @click="goCustomer">
				<image src="../../static/kefu.png" class="mine-list-item-image" mode=""></image>
				联系客服
				<text class="cuIcon-right mine-head-icon"></text>
			</view>
		</view>


		<view class="logout" @click="goToLogin">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		methods: {
			copy(data) {
				uni.setClipboardData({
					data,
					success() {
						uni.showToast({
							title: '内容已复制'
						})
					},
					fail(e) {
						console.log(e)
					}
				})
			},
			goToCollections() {
				uni.navigateTo({
					url: '/pages/collections/collections'
				})
			},
			goToOrder() {
				uni.navigateTo({
					url: '/pages/orderList/orderList'
				})
			},
			goToLogin() {
				this.$store.commit('user/set_token', '')
				this.$store.commit('user/set_userInfo', '')
				uni.redirectTo({
					url: '/pages/login/login'
				})
			},
			goCustomer() {
				uni.navigateTo({
					url: '/pages/customerService/customerService'
				})
			}
		},
		onLoad() {
			if (this.$store.state.user.userInfo) {
				this.userInfo = this.$store.state.user.userInfo
			}

		}
	}
</script>

<style lang="scss" scoped>
	.mine {
		height: 100vh;
		position: relative;

		.logout {
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 20px;
			/* identical to box height */

			text-align: center;

			color: #D10910;
			position: absolute;
			bottom: 240rpx;
			left: 0;
			width: 100%;
		}

		&-head {
			display: flex;
			align-items: center;

			&-image {
				width: 110rpx;
				height: 110rpx;
				border-radius: 50%;
			}

			&-box {
				margin-left: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 90rpx;

				&-title {
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
					color: #ECECEC;

				}

				&-phone {
					font-weight: 400;
					font-size: 12px;
					line-height: 17px;
					color: #AEAEAE;

				}
			}

			&-icon {
				margin-left: auto;
			}
		}

		&-notice {
			display: flex;
			align-items: center;
			background: #1D1D1D;

			border: 0.5px solid #2F2F2F;

			border-radius: 4px;
			margin-top: 20rpx;
			padding: 10rpx;

			&-name {
				background: linear-gradient(90deg, #9C8746 0%, #645735 93.2%);
				border-radius: 3px;
				font-size: 12px;
				width: 140rpx;
				padding: 10rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			&-title {
				flex: 1;
				overflow: hidden;
				padding: 10rpx;
				font-weight: 500;
				font-size: 18rpx;
				color: #AEAEAE;

				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			&-copy {
				color: #B19E63;

				width: 40rpx;
			}
		}

		&-list {
			margin-top: 20rpx;

			&-item {
				display: flex;
				align-items: center;
				border-bottom: 0.5px solid #363636;

				height: 80rpx;
				font-weight: 500;
				font-size: 12px;
				line-height: 17px;
				color: #9B8751;


				&-image {
					width: 48rpx;
					height: 48rpx;
					margin-right: 20rpx;
				}
			}

		}
	}
</style>
