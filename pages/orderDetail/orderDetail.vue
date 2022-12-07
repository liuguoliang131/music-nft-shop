<template>
	<view class="container">
		<nav-head title="订单详情"></nav-head>
		<view class="title mt20">
			<text class="title-v"></text>
			<text v-if="product_type===1">单曲信息</text>
			<text v-else-if="product_type===2">专辑信息</text>
			<text v-else-if="product_type===3">数字音乐信息</text>
		</view>
		<view class="box1">
			<view class="box1-1">
				<image :src="detail.index_url" mode=""></image>
				<view class="sideline"></view>
				<image class="rare" v-if="detail.rare_type==='SSR'"
					src="https://file.yuanyinfu.com/front-end-lib/SSR.png" mode=""></image>
				<image class="rare" v-else-if="detail.rare_type==='UR'"
					src="https://file.yuanyinfu.com/front-end-lib/UR.png" mode=""></image>
				<image class="rare" v-else-if="detail.rare_type==='R'"
					src="https://file.yuanyinfu.com/front-end-lib/R.png" mode=""></image>
				<image class="rare" v-else-if="detail.rare_type==='SR'"
					src="https://file.yuanyinfu.com/front-end-lib/SR.png" mode=""></image>
			</view>
			<view class="box1-2">
				<view class="box1-2-1">
					{{detail.name}}
				</view>
				<view class="box1-2-2">
					<view class="box1-2-2-r">
						包含{{detail.singles_num}}首单曲
					</view>
				</view>
				<view class="box1-2-2">
					<view class="box1-2-2-l">
						发行方
					</view>
					<view class="box1-2-2-r">
						{{detail.publish_author}}
					</view>
				</view>
				<view class="box1-2-2">
					<view class="box1-2-2-l">
						发行时间
					</view>
					<view class="box1-2-2-r">
						{{filterTimes(detail.publish_time * 1000)}}
					</view>
				</view>
				<view class="box1-2-2">
					<view class="box1-2-2-l">
						发行价格
					</view>
					<view class="box1-2-2-r">
						￥{{detail.buy_price}}/张
					</view>
				</view>
			</view>
		</view>
		<view class="title mt34 mb7">
			<text class="title-v"></text>
			认证信息
		</view>
		<view class="box2">
			<view class="box2-1" v-if="detail.order_status === 3">
				<view class="box2-1-l">
					Record Number
				</view>
				<view class="box2-1-r">
					{{detail.code_num_min === detail.code_num_max ? detail.code_num_max : `${detail.code_num_min}~${detail.code_num_max}`}}
				</view>
			</view>
			<view class="box2-1">
				<view class="box2-1-l">
					Contract Address
				</view>
				<view class="box2-1-r">
					{{detail.contract_address}}
				</view>
			</view>
			<view class="box2-1">
				<view class="box2-1-l">
					Token ID
				</view>
				<view class="box2-1-r">
					{{detail.token_id}}
				</view>
			</view>
			<view class="box2-1">
				<view class="box2-1-l">
					Token Standard
				</view>
				<view class="box2-1-r">
					{{detail.token_standard}}
				</view>
			</view>
		</view>
		<view class="splitline">

		</view>
		<view class="title mb7">
			<text class="title-v"></text>
			订单信息
		</view>
		<view class="box3" v-if="detail.order_status === 1">
			<view class="box3-1">
				<view class="box3-1-1">
					订单编号
				</view>
				<view class="box3-1-2">
					{{detail.order_no}}
				</view>
			</view>
			<view class="box3-1">
				<view class="box3-1-1">
					创建时间
				</view>
				<view class="box3-1-2">
					{{filterTimes(detail.order_create_time * 1000)}}
				</view>
			</view>
			<view class="box3-1">
				<view class="box3-1-1">
					购买数量
				</view>
				<view class="box3-1-2">
					{{detail.buy_num}}张
				</view>
			</view>
		</view>
		<view class="box3" v-if="detail.order_status === 2">
			<view class="box3-1">
				<view class="box3-1-1">
					订单编号
				</view>
				<view class="box3-1-2">
					{{detail.order_no}}
				</view>
			</view>
			<view class="box3-1">
				<view class="box3-1-1">
					创建时间
				</view>
				<view class="box3-1-2">
					{{filterTimes(detail.order_create_time * 1000)}}
				</view>
			</view>
			<view class="box3-1">
				<view class="box3-1-1">
					取消时间
				</view>
				<view class="box3-1-2">
					{{filterTimes(detail.cancel_time * 1000)}}
				</view>
			</view>
			<view class="box3-1">
				<view class="box3-1-1">
					购买数量
				</view>
				<view class="box3-1-2">
					{{detail.buy_num}}张
				</view>
			</view>
		</view>
		<view class="box3" v-if="detail.order_status === 3">
			<view class="box3-1">
				<view class="box3-1-1">
					订单编号
				</view>
				<view class="box3-1-2">
					{{detail.order_no}}
				</view>
			</view>
			<view class="box3-1">
				<view class="box3-1-1">
					创建时间
				</view>
				<view class="box3-1-2">
					{{filterTimes(detail.order_create_time * 1000)}}
				</view>
			</view>
			<view class="box3-1">
				<view class="box3-1-1">
					支付时间
				</view>
				<view class="box3-1-2">
					{{filterTimes(detail.pay_time * 1000)}}
				</view>
			</view>
			<view class="box3-1">
				<view class="box3-1-1">
					支付方式
				</view>
				<view class="box3-1-2">
					{{detail.pay_type | filterPayType}}
				</view>
			</view>
			<view class="box3-1">
				<view class="box3-1-1">
					购买数量
				</view>
				<view class="box3-1-2">
					{{detail.buy_num}}张
				</view>
			</view>
			<view class="box3-1">
				<view class="box3-1-1">
					实付金额
				</view>
				<view class="box3-1-2 price">
					￥{{detail.pay_price}}
				</view>
			</view>
		</view>

		<view class="container-btn" v-if="detail.order_status === 1" @click.stop="handleGoCashier">
			去支付
		</view>
		<view class="container-btn cancel" v-if="detail.order_status === 2">
			已取消
		</view>
	</view>
</template>
<script>
	import NavHead from '../../components/navHead.vue'
	import {
		h5_order_detail
	} from '../../request/api.js'
	import {
		post
	} from '../../request/index.js'
	import {
		openAppPage
	} from '../../utils/index.js'
	import dayjs from 'dayjs'
	export default {
		components: {
			NavHead
		},
		data() {
			return {
				show: false,
				product_type: 0,
				order_id: null,
				detail: {
					"order_id": null,
					"product_item_id": null,
					"name": "",
					"singles_num": 1,
					"publish_time": '',
					"publish_author": "",
					"index_url": "",
					"pay_price": "",
					"order_total_price": "",
					"buy_price": "",
					"buy_num": 3,
					"contract_address": "",
					"token_id": "",
					"token_standard": "",
					"order_no": "",
					"order_status": 0,
					"pay_type": 0,
					"order_create_time": '',
					"pay_time": 0
				}
			}
		},
		onLoad(e) {
			this.order_id = Number(e.id)
			this.product_type = Number(e.product_type)
			this.getOrderDetail()

		},
		onShow() {
			if (this.$store.state.publicState.refresh) {
				this.getOrderDetail()
				this.$store.commit('publicState/set_refresh', false)
			}
		},
		beforeDestroy() {
			this.$store.commit('publicState/set_refresh', true)
		},
		filters: {
			filterPayType(e) {
				const list = {
					1: '支付宝',
					2: '微信支付',
					3: '银行卡',
					4: '零钱'
				}
				return list[e] || '未知'
			}
		},
		methods: {
			filterTimes(e) {
				return dayjs(e).format('YYYY/MM/DD HH:mm:ss')
			},
			getOrderDetail() {
				post(h5_order_detail, {
					order_id: this.order_id
				}).then(res => {
					this.detail = res.data
				})
			},
			showCre() {
				this.show = true
			},
			hiddenCre() {
				this.show = false
			},
			// 去往收银台
			handleGoCashier(item) {
				if (this.$store.state.user.inApp) {
					openAppPage({
						"page": "diskConfirmOrderPage",
						"isNeedLogin": true,
						"params": this.item
					})
				} else {
					let url =
						`/pages/cashier/cashier?product_item_id=${this.detail.product_item_id}&order_no=${this.detail.order_no}&order_price=${this.detail.order_total_price}&order_id=${this.detail.order_id}`
					uni.navigateTo({
						url
					})
				}


			}
		}
	}
</script>
<style scoped lang="scss">
	.container {
		padding: 0 32rpx;
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 400;
		font-size: 24rpx;
		line-height: 34rpx;

		.title {
			display: flex;
			align-items: center;
			color: #E4C985;
			font-size: 24rpx;
			font-weight: 400;
			height: 24rpx;

			.title-v {
				width: 6rpx;
				height: 24rpx;
				background: #E4C985;
				border-radius: 2rpx;
				margin-right: 12rpx;
			}
		}

		.mt20 {
			margin-top: 20rpx;
		}

		.mt34 {
			margin-top: 34rpx;
		}

		.mb7 {
			margin-bottom: 15rpx;
		}


		.box1 {
			margin-top: 23rpx;
			width: 686rpx;
			display: flex;

			.box1-1 {
				position: relative;
				width: 240rpx;
				height: 240rpx;
				border-radius: 20rpx;

				image {
					width: 240rpx;
					height: 240rpx;
					border-radius: 20rpx;
				}

				.sideline {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					margin: auto;
					width: 220rpx;
					height: 220rpx;
					border: 1rpx solid rgba(255, 255, 255, 0.2);
					border-radius: 20rpx;
				}

				.rare {
					position: absolute;
					top: 0;
					left: 0;
					width: 84rpx;
					height: 40rpx;
					border-radius: 0;
				}
			}

			.box1-2 {
				flex: 1;
				padding-left: 40rpx;
				overflow: hidden; // 溢出隐藏
				white-space: nowrap; // 强制一行
				text-overflow: ellipsis; // 文字溢出显示省略号

				.box1-2-1 {
					font-weight: 500;
					font-size: 28rpx;
					line-height: 40rpx;
					color: #DDDDDD;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
				}

				.box1-2-2 {
					display: flex;
					align-items: center;
					margin-top: 10rpx;
					font-weight: 400;
					font-size: 26rpx;
					line-height: 36rpx;
					min-width: 0;

					.box1-2-2-l {
						width: 122rpx;
						color: #777777;
					}

					.box1-2-2-r {
						flex: 1;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
						color: #AEAEAE;
					}
				}
			}
		}

		.box2 {
			.box2-1 {
				display: flex;
				align-items: center;
				margin-top: 10rpx;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 26rpx;
				line-height: 36rpx;



				.box2-1-l {
					box-sizing: border-box;
					width: 254rpx;
					padding-left: 18rpx;
					color: #777777;
				}

				.box2-1-r {
					flex: 1;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
					color: #AEAEAE;
				}
			}
		}

		.splitline {
			margin-top: 33rpx;
			margin-bottom: 32rpx;
			height: 1rpx;
			opacity: 0.3;
			background-color: #AEAEAE;
			border-radius: 1rpx;
		}

		.box3 {
			.box3-1 {
				display: flex;
				align-items: center;
				margin-top: 10rpx;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 26rpx;
				line-height: 36rpx;

				.box3-1-1 {
					box-sizing: border-box;
					width: 146rpx;
					padding-left: 18rpx;
					color: #777777;
				}

				.box3-1-2 {
					flex: 1;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
					color: #AEAEAE;
				}
			}
		}

		.price {
			color: #D10910 !important;
			font-weight: 600;
		}

		.container-btn {
			position: fixed;
			bottom: 20rpx;
			left: 50%;
			transform: translate(-50%, 0);
			width: 686rpx;
			height: 96rpx;
			background: #D10910;
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 500;
			font-size: 32rpx;
			line-height: 44rpx;
			text-align: center;
			color: #ECECEC;
			border-radius: 48rpx;
		}

		.cancel {
			background: #7C7C7C;
			color: #fff;
		}
	}
</style>
