<template>
	<view class="container">
		<nav-head title="授权服务"></nav-head>
		<view class="box">
			<view class="code2">
				<image src="https://file.yuanyinfu.com/front-end-lib/mandyQRcode2.jpg" mode=""></image>
				<view class="text">
					商务合作咨询二维码
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;

		.box {
			position: relative;
			width: 710rpx;
			height: 1384rpx;
			background: no-repeat url('https://file.yuanyinfu.com/front-end-lib/authorizationServiceTxt.png') 12rpx 36rpx/686rpx 970rpx, no-repeat url('https://file.yuanyinfu.com/front-end-lib/authorizationServiceBG.png') center/710rpx 1384rpx;
			margin: auto;
			margin-top: 30rpx;
			margin-bottom: 60rpx;
			overflow: hidden;

			.code2 {
				position: absolute;
				bottom: 24rpx;
				left: 0;
				display: flex;
				align-items: center;
				flex-direction: column;
				width: 100%;

				image {
					width: 270rpx;
					height: 270rpx;
				}

				.text {
					padding-top: 24rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 24rpx;
					line-height: 28rpx;
					/* identical to box height, or 117% */

					text-align: center;

					color: #ECECEC;
				}
			}
		}
	}
</style>
