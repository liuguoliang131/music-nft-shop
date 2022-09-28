<template>
	<!-- 预购专辑详情 -->
	<view class="container">
		<view class="preOrderDetails-header">
			<view class="cover">
				<div class="cover-content">
					<image class="cover-img" src="../../static/image 6.png"></image>
					<image class="cover-turn" src="../../static/Frame 77.png" mode=""></image>
					<!-- <image class="cover-play" src="../../static/Frame 62.png" mode=""></image> -->
				</div>

			</view>
			<view class="row1">
				<image v-if="data.rare_type==='SSR'" src="../../static/Frame 1000006238.png" mode=""></image>
				<image v-else-if="data.rare_type==='UR'" src="../../static/Frame 1000006237.png" mode=""></image>
				<image v-else-if="data.rare_type==='R'" src="../../static/Frame 1000006236.png" mode=""></image>
				<image v-else-if="data.rare_type==='N'" src="../../static/Frame 1000006235.png" mode=""></image>
				<image v-else-if="data.rare_type==='SR'" src="../../static/Frame 1000006234.png" mode=""></image>
				{{data.name}}
			</view>
			<view class="row2">{{data.sale_time}}&nbsp;发售 <text>限量{{data.stock_num}}份</text></view>
			<view class="price">
				<text class="rmb">￥</text>
				<text class="count">{{data.sale_price}}</text>
				<text class="unit">/张</text>
			</view>
		</view>
		<view class="preOrderDetails-body">
			<view class="card cardbox1">
				<view class="card-body">
					<view class="row1">专辑信息</view>
					<view class="row2">
						<view class="row2-1">
							<text class="row2-1-l">专辑名称</text>
							<text class="row2-1-r">{{data.name}}</text>
						</view>
						<view class="row2-1">
							<text class="row2-1-l">稀有度</text>
							<text class="row2-1-r">{{data.rare_type}}</text>
						</view>
						<view class="row2-1">
							<text class="row2-1-l">发行量</text>
							<text class="row2-1-r">{{data.stock_num}}份</text>
						</view>
						<view class="row2-1">
							<text class="row2-1-l">发行方</text>
							<text class="row2-1-r">{{data.publish_author}}</text>
						</view>
						<view class="row2-1">
							<text class="row2-1-l">发行时间</text>
							<text class="row2-1-r">{{data.publish_time}}</text>
						</view>
					</view>
					<view class="row3">
						购买须知
					</view>
					<view class="row4">
						<!-- 1.用户点击“购买”后2分钟内未付款，则订单将自动取消。专辑一经售卖，概不退货
						<br />
						2.专辑的版权由发行方、原创者所有，用户不得将其用于任何商业用途。
						<br />
						3.最终解释权归官方所有。 -->
						{{data.buy_notice}}
					</view>
				</view>
			</view>
			<view class="card cardbox2">
				<view class="card-body">
					<view class="work" v-for="(item,idx) in data.music_list" :key="idx">
						<view class="row1">{{item.name}}</view>
						<view class="row2">
							{{item.desc}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="h120"></view>
		<view class="preOrderDetails-footer">
			<view class="abs" @tap="handShare()">
				<image class="abs-img" src="../../static/share.png"></image>
				<text class="abs-text">分享</text>
			</view>
			<view class="footer-btn" @tap="$refs.popup.show()">立即抢购</view>
		</view>
		<wyb-popup ref="popup" type="bottom" height="701" width="750" radius="6" bgColor="#1D1D1D"
			:showCloseIcon="true">
			<view class="popup-content">
				<view class="popup-i">
					<image class="i-img" src="../../static/唱首歌给你听.png" mode=""></image>
					<view class="img-line"></view>
					<view class="i-title">
						<view class="title-t">{{data.name}}</view>
						<view class="title-p">
							发行价格
							<text class="title-p-rmb">￥{{data.sale_price}}</text>
							/张
						</view>
					</view>
				</view>
				<view class="popup-f">
					<image class="popup-f-img" src="../../static/Frame 1000006250.png"></image>
					<text>购买专辑可以永久聆听</text>
				</view>
				<view class="popup-count">
					<view class="count-text">
						数量
					</view>
					<view class="number-count">
						<view class="minus" @tap="handMinus()">
							<image class="minus-img" src="../../static/Frame 1000006244.png" mode=""></image>
						</view>
						<input type="number" maxlength="3" name="" id="" v-model="count" @blur="onCountChange()">
						<view class="plus" @tap="handPlus()">
							<image class="plus-img" src="../../static/Group 1000004650.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="popup-e">
					<view class="e-text">
						实付
					</view>
					<view class="e-price">
						<text class="rmb">￥</text>
						<text class="count">{{total}}</text>
					</view>
				</view>
				<view class="popup-d">
					<view class="d-btn" @tap="handOrder()">立即抢购</view>
				</view>
				<view class="popup-c">
					喜欢的话，就不要错过哦！
				</view>
			</view>
		</wyb-popup>
	</view>
</template>

<script>
	import WybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import {
		h5_collections_index_info,
		h5_conllections_buy_checkout
	} from '../../request/api.js'
	import {
		getTimeData
	} from '../../utils/index.js'
	export default {
		components: {
			WybPopup
		},
		data() {
			return {
				product_item_id: '',
				show_pop: false,
				data: {
					name: '',
					product_item_id: '',
					index_img: '',
					sale_time: '',
					stock_num: 0,
					remain_stock_num: '',
					sale_price: '',
					sale_status: '',
					rare_type: '',
					evaluate_type: '',
					publish_author: '',
					publish_time: '',
					singles_num: '',
					buy_notice: '',
					music_list: [],
					is_login: ''
				},
				count: 1
			};
		},
		computed: {
			total() {
				if (!this.data.sale_price) {
					return 0
				}
				return (this.count * this.data.sale_price).toFixed(2)
			}
		},
		methods: {
			async getDetails(product_item_id) {
				try {
					const res = await this.$post(h5_collections_index_info, {
						product_item_id
					})
					console.log(res)
					if (res.code !== 0) {
						return uni.showToast({
							icon: 'error',
							title: res.msg
						})
					}
					// const res = {
					// 	data: {
					// 		name: 'asdasd',
					// 		product_item_id: '1',
					// 		index_img: '',
					// 		sale_time: 1664183310324,
					// 		stock_num: 111,
					// 		remain_stock_num: 100,
					// 		sale_price: '50.55',
					// 		sale_status: 0,
					// 		rare_type: 'SSR',
					// 		evaluate_type: '',
					// 		publish_author: '发行商A',
					// 		publish_time: 1664183310324,
					// 		singles_num: 5,
					// 		buy_notice: '购买须知:啊实打实大大',
					// 		music_list: [{
					// 			name: '作品A',
					// 			desc: '简介AAAAAAAAAAAAASDDDDDDDDDSADSASD',
					// 			music_url: '',
					// 			music_time: 12345
					// 		}, {
					// 			name: '作品B',
					// 			desc: '简介AAAAAAAAAAAAASDDDDDDDDDSADSASD',
					// 			music_url: '',
					// 			music_time: 12345
					// 		}, {
					// 			name: '作品C',
					// 			desc: '简介AAAAAAAAAAAAASDDDDDDDDDSADSASD',
					// 			music_url: '',
					// 			music_time: 12345
					// 		}, {
					// 			name: '作品D',
					// 			desc: '简介AAAAAAAAAAAAASDDDDDDDDDSADSASD',
					// 			music_url: '',
					// 			music_time: 12345
					// 		}, ],
					// 		is_login: 1
					// 	}
					// }
					const date = getTimeData(res.data.sale_time)
					const date1 = getTimeData(res.data.publish_time)
					res.data.sale_time = `${date.mon}月${date.dd}日${date.hh}:${date.MM}`
					res.data.publish_time = `${date1.y}-${date1.mon}-${date1.dd}`
					this.data = res.data
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						icon: 'error',
						title: e.message
					})
				}
			},
			// 数量改变
			onCountChange() {
				if (this.count > 100) {
					uni.showToast({
						icon: 'none',
						title: '单次购买数量不可超过100张',
						duration: 3000
					})
					this.count = 100
				} else if (this.count < 1) {
					this.count = 1
				}
			},
			// -1
			handMinus() {
				if (this.count > 1) {
					this.count--
				}

			},
			// +1
			handPlus() {
				if (this.count < 100) {
					this.count++
				}
			},
			// 分享
			handShare() {
				uni.navigateTo({
					url: `/pages/poster/poster?product_item_id=${this.product_item_id}`
				})
			},
			// 立即抢购
			async handOrder() {
				try {
					const res = await this.$post(h5_conllections_buy_checkout, {
						product_item_id: this.product_item_id,
						buy_num: this.count
					})
					if (res.code !== 0) {
						if (res.code === 710) {
							身份认证
							// uni.navigateTo({
							// 	url: `/pages/idAuth/idAuth`
							// })
							return uni.showToast({
								title: res.msg,
								icon: 'error'
							})
						} else {
							return uni.showToast({
								title: res.msg,
								icon: 'error'
							})
						}

					} else {
						uni.navigateTo({
							url: `/pages/settlement/settlement?product_item_id=${this.product_item_id}&buy_num=${this.count}`
						})
					}

					// uni.navigateTo({
					// 	url: `/pages/settlement/settlement?product_item_id=${this.product_item_id}`
					// })

				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'error'
					})
				}

			}
		},
		onLoad(option) {
			console.log('onload', option)
			this.product_item_id = Number(option.product_item_id)
			this.getDetails(this.product_item_id)
		},
		created() {
			console.log('created')
		}
	}
</script>

<style lang="scss" scoped>
	@keyframes turning {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.card {
		background: #151516;
		border-radius: 8rpx;
		padding: 36rpx 16rpx;

		.card-body {
			padding: 20rpx;
			background: transparent;
			border: 0.5rpx solid #5B5B5B;
			border-radius: 8rpx;
		}
	}

	.container {
		padding: 0 24rpx;

		.preOrderDetails-header {
			text-align: center;
			overflow: hidden;

			.cover {
				margin: 41rpx auto 0 auto;
				text-align: center;

				.cover-content {
					position: relative;
					width: 375rpx;
					height: 375rpx;
					margin: auto;

					.cover-img {
						width: 375rpx;
						height: 375rpx;
					}

					.cover-turn {
						z-index: 1;
						position: absolute;
						top: 24rpx;
						left: 24rpx;
						transform-origin: 50% 50%;
						width: 327rpx;
						height: 327rpx;
						// animation: 3.7s turning linear infinite;
					}

					.cover-play {
						z-index: 2;
						position: absolute;
						left: 100.98rpx;
						top: 100.98rpx;
						width: 172.02rpx;
						height: 172.02rpx;
						border-radius: 86.01rpx;
					}

				}
			}


			.row1 {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 25rpx;
				font-weight: 500;
				font-size: 36rpx;
				text-align: center;
				color: #ECECEC;

				image {
					width: 84rpx;
					height: 40rpx;
					margin-right: 4rpx;
				}


			}

			.row2 {
				margin-top: 9rpx;
				font-size: 26rpx;
				color: #AEAEAE;

				text {
					margin-left: 16rpx;
				}
			}

			.price {
				margin-top: 11rpx;
				color: #D10910;

				.rmb {
					font-size: 28rpx;
				}

				.count {
					font-size: 36rpx;
					margin-right: 4rpx;
				}

				.unit {
					font-size: 26rpx;
				}
			}
		}

		.preOrderDetails-body {
			margin-top: 16rpx;

			.cardbox1 {
				.row1 {
					height: 44rpx;
					margin-bottom: 16rpx;
					font-weight: 600;
					font-size: 32rpx;
					line-height: 44rpx;
					color: #AC9147;
				}

				.row2 {

					.row2-1 {
						display: flex;
						font-size: 26rpx;
						line-height: 48rpx;
						/* identical to box height, or 185% */
						color: #AEAEAE;

						.row2-1-l {
							margin-right: 24rpx;
							width: 104rpx;
						}

						.row2-1-r {}
					}
				}

				.row3 {
					margin-top: 24rpx;
					margin-bottom: 16rpx;
					font-weight: 600;
					font-size: 32rpx;
					line-height: 44rpx;
					color: #AC9147;
				}

				.row4 {
					font-size: 26rpx;
					line-height: 36rpx;
					color: #AEAEAE;
				}
			}

			.cardbox2 {
				margin-top: 21rpx;
				margin-bottom: 25rpx;

				.work {
					.row1 {
						margin-bottom: 16rpx;
						font-weight: 600;
						font-size: 32rpx;
						line-height: 44rpx;
						color: #AC9147;
					}

					.row2 {
						padding-bottom: 24rpx;
						font-size: 26rpx;
						line-height: 36rpx;
						color: #AEAEAE;
					}

					.row2:nth-last-child(1) {
						padding-bottom: 17rpx;
					}
				}

			}
		}

		.h120 {
			height: 120rpx;
		}

		.preOrderDetails-footer {
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			width: 100%;
			height: 120rpx;
			background-color: #151516;

			.abs {
				position: absolute;
				top: 26rpx;
				left: 58rpx;
				width: 50rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;



				.abs-img {
					width: 42rpx;
					height: 42rpx;
				}

				.abs-text {
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					padding-top: 2rpx;
					font-size: 22rpx;
					transform: scale(0.95);
					color: #ECECEC;
				}

				&:active .abs-text {
					color: rgba(134, 134, 134, 1);
				}
			}

			.footer-btn {
				width: 524rpx;
				height: 73rpx;
				margin-right: 40rpx;
				line-height: 73rpx;
				text-align: center;
				background: #D10910;
				border-radius: 48rpx;
				font-weight: 500;
				font-size: 32rpx;
				color: #ECECEC;

				&:active {
					background-color: rgba(209, 9, 16, 0.6);
					color: rgba(134, 134, 134, 1);
				}
			}
		}

		/deep/.icon-close {
			font-size: 36rpx;
		}

		/deep/.wyb-popup-box {
			z-index: 998 !important;
		}

		/deep/.wyb-popup-mask {
			z-index: 997 !important;
		}

		.popup-content {

			.popup-i {
				position: relative;
				display: flex;
				padding-top: 24rpx;
				padding-left: 28rpx;

				.img-line {
					position: absolute;
					top: 28.5rpx;
					left: 32.5rpx;
					width: 139rpx;
					height: 139rpx;
					border: 0.6rpx solid rgba(255, 255, 255, 0.2);
					border-radius: 20px;
					background-color: transparent;
				}

				.i-img {
					width: 148rpx;
					height: 148rpx;
					border-radius: 20rpx;
				}

				.i-title {
					flex: 1;
					padding-top: 4rpx;

					.title-t {
						margin-left: 24rpx;
						font-weight: 500;
						font-size: 32rpx;
						line-height: 44rpx;
						color: #ECECEC;
						padding-bottom: 20rpx;
					}

					.title-p {
						display: inline-block;
						margin-left: 16rpx;
						padding: 10rpx 16rpx;
						font-size: 24rpx;
						background: rgba(220, 45, 30, 0.2);
						mix-blend-mode: normal;
						border-radius: 22px;
						color: rgba(220, 45, 30, 1);

						.title-p-rmb {
							padding-left: 4rpx;
							font-weight: 600;
							font-size: 28rpx;
							color: #DC2D1E;
							transform: rotate(-0.39deg)
						}
					}
				}
			}

			.popup-f {
				display: flex;
				align-items: center;
				padding: 26rpx 40rpx 44rpx 40rpx;

				.popup-f-img {
					width: 40rpx;
					height: 40rpx;
				}

				text {
					font-size: 28rpx;
					color: #AEAEAE;
					margin-left: 16rpx;
				}
			}

			.popup-count {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 32rpx 24rpx 40rpx;
				color: #ECECEC;
				font-size: 28rpx;

				.count-text {}

				.number-count {
					display: flex;
					align-items: center;
					box-sizing: border-box;
					width: 194rpx;
					height: 60rpx;
					border-radius: 16rpx;
					border: 1rpx solid #686868;

					.minus {
						box-sizing: border-box;
						width: 62rpx;
						height: 58rpx;
						font-size: 32rpx;
						border-right: 1rpx solid #686868;

						.minus-img {
							width: 62rpx;
							height: 58rpx;

						}
					}

					input {
						flex: 1;
						height: 58rpx;
						text-align: center;
						font-size: 36rpx;
						color: #DC2D1E;
					}

					.plus {
						display: flex;
						align-items: center;
						justify-content: center;
						box-sizing: border-box;
						width: 62rpx;
						height: 58rpx;
						font-size: 32rpx;
						border-left: 1rpx solid #686868;

						.plus-img {
							width: 32rpx;
							height: 32rpx;
						}
					}
				}

			}

			.popup-e {
				padding-top: 24rpx;
				padding: 0 32rpx 64rpx 40rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.e-text {
					color: #ECECEC;
					font-size: 28rpx;
				}

				.e-price {
					color: #D10910;

					.rmb {
						font-size: 28rpx;
					}

					.count {
						font-size: 40rpx;
					}
				}
			}

			.popup-d {
				text-align: center;

				.d-btn {
					display: flex;
					align-items: center;
					justify-content: center;
					line-height: 0;
					margin: auto;
					width: 474rpx;
					height: 96rpx;
					background: #D10910;
					border-radius: 90rpx;
					font-weight: 500;
					font-size: 32rpx;
					color: #ECECEC;

					&:active {
						background-color: rgba(209, 9, 16, 0.6);
						color: rgba(134, 134, 134, 1);
					}
				}

			}

			.popup-c {
				padding-top: 20rpx;
				font-size: 22rpx;
				line-height: 30rpx;
				text-align: center;
				color: #666666;

			}


		}
	}
</style>
