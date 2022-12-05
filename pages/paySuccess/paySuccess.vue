<template>
	<view class="container">
		<nav-head title="支付成功"></nav-head>
		<view class="box1">
			<image class="icon" src="https://file.yuanyinfu.com/front-end-lib/Frame41.png"></image>
			<view class="row1">支付成功</view>
			<view class="row2">实付 ￥{{data.order_price}}</view>
			<view class="row3">
				<text v-if="data.show_note">{{data.show_note}}</text>
				<text class="ver" v-if="data.gift_desc">|</text>
				<text v-if="data.gift_desc">{{data.gift_desc}}</text>
			</view>
		</view>
		<view class="box2">
			<view class="btn1" @tap="handGoDetail">查看订单</view>
			<view class="btn2" @tap="handBackIndex">返回首页</view>
		</view>
	</view>
</template>

<script>
	import NavHead from '../../components/navHead.vue'
	export default {
		components: {
			NavHead
		},
		data() {
			return {
				data: {
					order_no: '',
					order_id: '',
					order_price: '0.00',
					product_item_id: '',
					product_type: null,
					show_note: '',
					gift_desc: ''
				}

			};
		},
		onLoad(option) {
			this.data = Object.assign(this.data, JSON.parse(option.data))
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
			// 去往订单详情
			handGoDetail() {
				uni.reLaunch({
					url: `/pages/orderList/orderList?product_type=${this.data.product_type}`
				})
			},
			// 去往首页
			handBackIndex() {
				uni.reLaunch({
					url: '/pages/index/index'
				})
			}

		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;



		.box1 {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;
			height: 606rpx;
			color: rgba(155, 135, 81, 1);

			.icon {
				width: 104rpx;
				height: 104rpx;
				margin-top: 112rpx;
			}

			.row1 {
				margin-top: 16rpx;
				font-size: 36rpx;
				line-height: 50rpx;
			}

			.row2 {
				margin-top: 16rpx;
				font-size: 28rpx;
				line-height: 40rpx;
			}

			.row3 {
				margin-top: 8rpx;
				font-size: 28rpx;
				line-height: 40rpx;
				text-align: center;

				.ver {
					padding: 0 30rpx;
				}
			}
		}

		.box2 {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 40rpx;
			font-size: 32rpx;

			.btn1 {
				font-weight: 500;
				line-height: 96rpx;
				text-align: center;
				width: 320rpx;
				height: 96rpx;
				background: #FFFFFF;
				border-radius: 90rpx;
				color: #DC2D1E;
				margin-right: 30rpx;

				&:active {
					background-color: rgba(255, 255, 255, 0.7);
					color: rgba(209, 9, 16, 0.6);
				}
			}

			.btn2 {
				font-weight: 500;
				line-height: 96rpx;
				text-align: center;
				width: 320rpx;
				height: 96rpx;
				background: #D10910;
				border-radius: 90rpx;
				color: #ECECEC;

				&:active {
					background-color: rgba(209, 9, 16, 0.6);
					color: rgba(134, 134, 134, 1);
				}
			}
		}
	}
</style>
