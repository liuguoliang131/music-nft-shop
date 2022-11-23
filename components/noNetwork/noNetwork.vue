<template>
	<view class="nonet" v-if="$store.state.public.noNetwork">
		<view class="nonet-center">
			<image src="../../static/no-data.png" mode=""></image>
			<text class="text">~网络遇到问题了~</text>
			<text class="refresh" @tap="handRefresh">刷新页面</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "noNetwork",
		data() {
			return {

			};
		},
		methods: {
			handRefresh() {
				// uni.redirectTo(OBJECT)
			}
		}
	}
</script>

<style lang="scss">
	.nonet {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;

		.nonet-center {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			image {
				width: 120rpx;
				height: 120rpx;
			}

			.text {
				margin-top: 44rpx;
				font-size: 24rpx;
				line-height: 34rpx;
				/* identical to box height */

				text-align: center;

				color: #CDCDCD;
			}

			.refresh {
				width: 300rpx;
				height: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 30rpx;
				color: #ffffff;
				background-color: #CDCDCD;
				border-radius: 5rpx;
			}
		}
	}
</style>
