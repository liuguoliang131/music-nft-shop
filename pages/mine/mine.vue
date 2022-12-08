<template>
	<view class="container mine">
		<nav-head title="我的"></nav-head>
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
			<!-- <text class="cuIcon-right mine-head-icon"></text> -->
		</view>
		<view class="mine-notice">
			<view class="mine-notice-name">
				资产地址：
			</view>
			<view class="mine-notice-title">
				{{userInfo.address}}
			</view>
			<image src="https://file.yuanyinfu.com/front-end-lib/copy-icon.png" class="mine-notice-copy" mode=""
				@click='copy(userInfo.address)'>
			</image>
		</view>

		<!-- 大客户 -->
		<view class="mine-list" v-if="userInfo.identity_type===2">
			<view class="mine-list-item" @click="goToInviteFriends">
				<!-- <image src="../../static/yaoqing.png" class="mine-list-item-image" mode=""></image> -->
				<text class="mine-list-item-image mine-list-item-bgimage"></text>
				邀请好友
				<text class="cuIcon-right mine-head-icon" style="color: #fff;"></text>
			</view>
			<view class="mine-list-item" @click="goToMyTeam">
				<image src="https://file.yuanyinfu.com/front-end-lib/team.png" class="mine-list-item-image" mode="">
				</image>
				我的团队
				<text class="cuIcon-right mine-head-icon" style="color: #fff;"></text>
			</view>
			<view class="mine-list-item" @click="goToCollections">
				<image src="https://file.yuanyinfu.com/front-end-lib/mine.png" class="mine-list-item-image" mode="">
				</image>
				我的唱片
				<text class="cuIcon-right mine-head-icon" style="color: #fff;"></text>
			</view>
			<view class="mine-list-item" @click="goToOrder">
				<image src="https://file.yuanyinfu.com/front-end-lib/order.png" class="mine-list-item-image" mode="">
				</image>
				我的订单
				<text class="cuIcon-right mine-head-icon" style="color: #fff;"></text>
			</view>
			<view class="mine-list-item" @click="goToSubgiftRecord">
				<image src="https://file.yuanyinfu.com/front-end-lib/order.png" class="mine-list-item-image" mode="">
				</image>
				转赠记录
				<text class="cuIcon-right mine-head-icon" style="color: #fff;"></text>
			</view>
			<view class="mine-list-item" @click="goCustomer">
				<image src="https://file.yuanyinfu.com/front-end-lib/kefu.png" class="mine-list-item-image" mode="">
				</image>
				联系客服
				<text class="cuIcon-right mine-head-icon" style="color: #fff;"></text>
			</view>
		</view>
		<!-- 小客户 -->
		<view class="mine-list" v-else>
			<view class="mine-list-item" @click="goToCollections">
				<image src="https://file.yuanyinfu.com/front-end-lib/mine.png" class="mine-list-item-image" mode="">
				</image>
				我的唱片
				<text class="cuIcon-right mine-head-icon" style="color: #fff;"></text>
			</view>
			<view class="mine-list-item" @click="goToOrder">
				<image src="https://file.yuanyinfu.com/front-end-lib/order.png" class="mine-list-item-image" mode="">
				</image>
				我的订单
				<text class="cuIcon-right mine-head-icon" style="color: #fff;"></text>
			</view>
			<view class="mine-list-item" @click="goToSubgiftRecord">
				<image src="https://file.yuanyinfu.com/front-end-lib/subgiftRecordIcon.png" class="mine-list-item-image"
					mode="">
				</image>
				转赠记录
				<text class="cuIcon-right mine-head-icon" style="color: #fff;"></text>
			</view>
			<view class="mine-list-item" @click="goCustomer">
				<image src="https://file.yuanyinfu.com/front-end-lib/kefu.png" class="mine-list-item-image" mode="">
				</image>
				联系客服
				<text class="cuIcon-right mine-head-icon" style="color: #fff;"></text>
			</view>
		</view>

		<view class="logout" @click="goToLogin">
			退出登录
		</view>
	</view>
</template>

<script>
	import {
		h5_user_info
	} from '../../request/api.js'
	import NavHead from '../../components/navHead.vue'
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		components: {
			NavHead
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
					url: '/pages/myRecords/myRecords'
				})
			},
			goToOrder() {
				uni.navigateTo({
					url: '/pages/orderList/orderList'
				})
			},
			goToLogin() {
				this.$store.dispatch('user/dispatch_clearUserData')
				this.$store.dispatch('globalAudio/dispatch_music')
				this.$store.commit('globalAudio/set_show', false)
				uni.redirectTo({
					url: '/pages/login/login'
				})
			},
			goCustomer() {
				uni.navigateTo({
					url: '/pages/customerService/customerService'
				})
			},
			// 去邀请好友
			goToInviteFriends() {
				uni.navigateTo({
					url: '/pages/inviteFriends/inviteFriends'
				})
			},
			// 去我的团队
			goToMyTeam() {
				uni.navigateTo({
					url: '/pages/myTeam/myTeam'
				})
			},
			goToSubgiftRecord() {
				uni.navigateTo({
					url: '/pages/subgiftRecord/subgiftRecord'
				})
			},
			async getUserInfo() {
				if (this.$store.state.user.userInfo) {
					this.userInfo = this.$store.state.user.userInfo
				} else {
					const res = await this.$get(h5_user_info)
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					this.userInfo = res.data
					this.$store.commit('user/set_userInfo', res.data)
				}
			}

		},
		onLoad() {
			this.getUserInfo()
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 0;
	}

	.mine {
		height: 100vh;
		position: relative;

		.logout {
			font-style: normal;
			font-weight: 500;
			font-size: 28rpx;
			line-height: 40rpx;
			/* identical to box height */

			text-align: center;

			color: #D10910;
			// position: absolute;
			// bottom: 240rpx;
			// left: 0;
			margin-top: 360rpx;
			margin-bottom: 50rpx;
			width: 100%;
		}

		&-head {
			display: flex;
			align-items: center;
			padding-top: 40rpx;

			&-image {
				width: 110rpx;
				height: 110rpx;
				border-radius: 50%;
				margin-left: 32rpx;
			}

			&-box {
				margin-left: 24rpx;
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

			border: 1.3rpx solid #2F2F2F;

			border-radius: 10.6rpx;
			margin-top: 16rpx;
			width: 892rpx;
			height: 80rpx;
			transform-origin: 0 0;
			transform: scale(0.75) translate(53rpx, 0);

			&-name {
				background: linear-gradient(90deg, #9C8746 0%, #645735 93.2%);
				border-radius: 6rpx;
				font-size: 24rpx;
				width: 160rpx;
				height: 65rpx;
				margin: 6rpx;
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
				width: 32rpx;
				height: 32rpx;
				margin-right: 28rpx;
				margin-left: 20rpx;
			}
		}

		&-list {
			padding: 18rpx 20rpx 0 20rpx;

			&-item {
				display: flex;
				align-items: center;
				box-sizing: border-box;
				border-bottom: 1rpx solid #363636;
				padding: 0 20rpx;
				height: 88.62rpx;
				font-weight: 500;
				font-size: 24rpx;
				line-height: 17px;
				color: #9B8751;


				&-image {
					width: 48rpx;
					height: 48rpx;
					margin-right: 20rpx;
				}

				&-bgimage {
					background: url('https://file.yuanyinfu.com/front-end-lib/yaoqing.png') 4rpx 0/48rpx 57.23rpx no-repeat;
				}
			}

		}
	}
</style>
