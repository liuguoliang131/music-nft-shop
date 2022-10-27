<template>
	<view class="container">
		<cu-head></cu-head>
		<view class="header"></view>
		<view class="main">
			<view class="gobtn" @tap="handGo">邀请海报</view>
		</view>
		<view class="footer">
			<view class="footer-title">
				规则说明
			</view>
			<view class="footer-p">
				<view class="p">1.邀请者所邀请的用户，需是新注册用户。</view>
				<view class="p">2.被邀请者每完成一笔有效交易，邀请者即可获得此有效交易总额的30%作为奖励。</view>
				<view class="p">3.团队1年内累计成交额低于20万，奖励金的比例将下调5%。</view>
				<view class="p">4.除另有约定外，成员关系终身有效。有效成员升级为元音符大客户的，自有效合作之日起，原成员关系自动解除。</view>
			</view>
		</view>
	</view>
</template>

<script>
	import CuHead from '../../components/cu-head.vue'
	export default {
		data() {
			return {

			};
		},
		components: {
			CuHead
		},
		methods: {
			handGo() {
				let url = '/pages/poster1/poster1'
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;

		.header {
			width: 750rpx;
			height: 660.72rpx;
			background-image: url('https://file.yuanyinfu.com/front-end-lib/inviteFriendsBG1.png'), url('https://file.yuanyinfu.com/front-end-lib/inviteFriendsBG2.png');
			background-position: 32rpx 8rpx, 0 0;
			background-size: 686rpx 652rpx, 750rpx 660.72rpx;
			background-repeat: no-repeat, no-repeat;
		}

		.main {
			padding-top: 34rpx;
			padding-bottom: 32rpx;
			text-align: center;

			.gobtn {
				background: #D10910;
				border-radius: 48rpx;
				width: 662rpx;
				height: 88rpx;
				margin: auto;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 500;
				font-size: 32rpx;
				color: #ECECEC;

				&:active {
					background-color: rgba(209, 9, 16, 0.6);
					color: rgba(134, 134, 134, 1);
				}
			}
		}

		.footer {
			min-height: 300rpx;
			padding: 0 40rpx 54rpx 40rpx;

			.footer-title {
				font-weight: 500;
				font-size: 24rpx;
				line-height: 34rpx;
				color: #E6E6E6;
				margin-bottom: 8rpx;
			}

			.footer-p {
				white-space: pre-wrap;
				font-size: 24rpx;
				line-height: 34rpx;
				color: #AEAEAE;

				.p {
					padding: 6rpx 0;
				}
			}


		}
	}
</style>
