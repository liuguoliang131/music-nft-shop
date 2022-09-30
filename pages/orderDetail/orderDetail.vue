<template>
	<view class="container">
		<cu-head/>
		
		<view class="title">
			专辑信息
		</view>

		<view class=" mt-2" style="display: flex;align-items: flex-start;">
			<image :src="detail.index_url" class="image" style="width: 120px;height: 120px;" mode=""></image>
			<view class="box">
				<view class="box-title">
					{{detail.name}}
				</view>
				<view class="number">
					包含{{detail.singles_num}}首单曲
				</view>
				<view class="number">
					发 行 方 {{detail.publish_author}}
				</view>
				<view class="number">
					发行时间 {{filterTimes(detail.publish_time * 1000)}}
				</view>
				<view class="number">
					发行价格 ¥{{detail.buy_price}}/张
				</view>
			</view>
		</view>
		
		
		<view class="border-bottom">
			<view class="title mt-2">
				认证信息
			</view>
			<view class="flex" v-if="detail.order_status === 3">
				<view class="key number" style="width: 250rpx;">
					Record Number
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{detail.code_num_min}}~{{detail.code_num_max}}
				</view>
			</view>
			<view class="flex">
				<view class="key number" style="width: 250rpx;">
					Contract Address
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{detail.contract_address}}
				</view>
			</view>
			<view class="flex">
				<view class="key number" style="width: 250rpx;">
					Token ID
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{detail.token_id}}
				</view>
			</view>
			<view class="flex">
				<view class="key number" style="width: 250rpx;">
					Token Standard
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{detail.token_standard}}
				</view>
			</view>
		</view>





		<view class="title mt-2">
			订单信息
		</view>
		<block v-if="detail.order_status === 1">
			<view class="flex">
				<view class="key number" style="width: 80rpx;">
					订单编号
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{detail.order_no}}
				</view>
			</view>

			<view class="flex">
				<view class="key number" style="width: 80rpx;">
					创建时间
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{filterTimes(detail.order_create_time * 1000)}}
				</view>
			</view>
			<view class="flex">
				<view class="key number" style="width: 80rpx;">
					购买数量
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{detail.buy_num}}
				</view>
			</view>
		</block>
		<block v-if="detail.order_status === 2">
			<view class="flex">
				<view class="key number" style="width: 80rpx;">
					订单编号
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{detail.order_no}}
				</view>
			</view>

			<view class="flex">
				<view class="key number" style="width: 80rpx;">
					创建时间
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{filterTimes(detail.order_create_time * 1000)}}
				</view>
			</view>

			<view class="flex">
				<view class="key number" style="width: 80rpx;">
					取消时间
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{filterTimes(detail.cancel_time * 1000)}}
				</view>
			</view>


			<view class="flex">
				<view class="key number" style="width: 80rpx;">
					购买数量
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{detail.buy_num}}
				</view>
			</view>
		</block>
		<block v-if="detail.order_status === 3">
			<view class="flex">
				<view class="key number" style="width: 80rpx;">
					订单编号
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{detail.order_no}}
				</view>
			</view>

			<view class="flex">
				<view class="key number" style="width: 80rpx;">
					创建时间
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{filterTimes(detail.order_create_time * 1000)}}
				</view>
			</view>

			<view class="flex">
				<view class="key number" style="width: 80rpx;">
					支付时间
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{filterTimes(detail.pay_time * 1000)}}
				</view>
			</view>

			<view class="flex">
				<view class="key number" style="width: 80rpx;">
					支付方式
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{detail.pay_type | filterPayType}}
				</view>
			</view>

			<view class="flex">
				<view class="key number" style="width: 80rpx;">
					购买数量
				</view>
				<view class="number" style="flex-flow: wrap;">
					{{detail.buy_num}}
				</view>
			</view>

			<view class="flex price">
				<view class="key number price" style="width: 80rpx;color: #D10910;">
					实付金额
				</view>
				<view class="number price" style="flex-flow: wrap;">
					￥{{detail.pay_price}}
				</view>
			</view>
		</block>
		<view class="container-btn" v-if="detail.order_status === 1">
			去支付
		</view>
		<view class="container-btn cancel" v-if="detail.order_status === 2">
			已取消
		</view>
	</view>
</template>

<script>
	import {
		h5_collections_user_collectionInfo,
		h5_order_detail
	} from '../../request/api.js'
	import {
		post
	} from '../../request/index.js'
	import dayjs from 'dayjs'
	export default {
		data() {
			return {
				show: false,
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
			const id = e.id
			this.getOrderDetail(id)

		},
		filters: {
			filterPayType(e) {
				console.log(e)
				const list = {
					1: '支付宝',
					2: '微信',
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
			getOrderDetail(e) {
				post(h5_order_detail, {
					order_id: Number(e)
				}).then(res => {
					this.detail = res.data
				})
			},
			showCre() {
				this.show = true
			},
			hiddenCre() {
				this.show = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding-bottom: 120rpx;

		&-btn {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 98rpx;
			background: #D10910;
			display: flex;
			align-items: center;
			justify-content: center;

			&.cancel {
				background: #7C7C7C;
				color: #fff;
			}
		}
	}

	.title {
		font-size: 13px;
		color: #AB9449;
		font-weight: 500;
		position: relative;
		padding-left: 20rpx;

		&::before {
			content: '';
			width: 10rpx;
			height: 100%;
			background-color: #AB9449;
			position: absolute;
			left: 0;
			top: 0;
			border-radius: 4px;
		}
	}

	.mt-2 {
		margin-top: 20rpx;
	}

	.flex {
		display: flex;
		align-items: center;
	}

	.box {
		padding-left: 20rpx;
	}

	.image {
		width: 260rpx;
		height: 260rpx;
		border-radius: 24rpx;
	}

	.box-title {
		font-size: 14px;
		font-weight: 500;
	}

	.number {
		font-size: 12px;
		margin-top: 20rpx;
		color: #8A8A8A;
	}



	.content {
		font-size: 12px;
		color: #8A8A8A;
		text-indent: 2rem;
	}

	.key {
		width: 240rpx;
		text-align: right;
		padding-right: 10rpx;
	}

	.container-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		background-color: #1D1D1D;
		display: flex;
		align-items: center;
		justify-content: center;

		.my-btn {
			height: 70rpx;
			padding: 0rpx 80rpx;
			display: inline-block;
			line-height: 70rpx;
			border: none;
			background-color: #E8D18A;
			border-radius: 40rpx;
			font-size: 13px;
			color: #847443;
		}
	}


	.head {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 40rpx;

		&-logo {
			width: 100rpx;
			height: 140rpx;
		}

		&-title {
			color: #101010;
			font-weight: 500;
			font-size: 18px;
		}
	}

	.body {
		padding: 20rpx;
		border-top: 1px solid #EBEBEB;
		margin-top: 20rpx;

	}


	.flex {
		display: flex;
		align-items: flex-start;
		// flex-wrap: wrap;
		flex-shrink: 0;

		.number {
			// flex: 1;
			text-align: left;
			width: calc(100% - 240rpx);
			word-break: break-all;
		}

		.key {
			width: 120rpx;
			min-width: 120rpx;
			text-align: right;
			margin-left: 20rpx;
			height: auto;

		}
	}


	.cu-modal {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1110;
		opacity: 0;
		outline: 0;
		text-align: center;
		-ms-transform: scale(1.185);
		transform: scale(1.185);
		backface-visibility: hidden;
		perspective: 2000upx;
		background: rgba(0, 0, 0, 0.6);
		transition: all 0.3s ease-in-out 0s;
		pointer-events: none;
	}

	.cu-modal::before {
		content: "\200B";
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}

	.cu-modal.show {
		opacity: 1;
		transition-duration: 0.3s;
		-ms-transform: scale(1);
		transform: scale(1);
		overflow-x: hidden;
		overflow-y: auto;
		pointer-events: auto;
	}

	.cu-dialog {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		width: calc(100vw - 240rpx);
		border-radius: 40rpx;
		overflow: hidden;
		background-color: #F6F6F6;
		color: #1D1d1d;
		padding: 40rpx;
	}

	.cu-modal.bottom-modal::before {
		vertical-align: bottom;
	}

	.cu-modal.bottom-modal .cu-dialog {
		width: 100%;
		border-radius: 0;
	}

	.cu-modal.bottom-modal {
		margin-bottom: -1000upx;
	}

	.cu-modal.bottom-modal.show {
		margin-bottom: 0;
	}

	.cu-modal.drawer-modal {
		transform: scale(1);
		display: flex;
	}

	.cu-modal.drawer-modal .cu-dialog {
		height: 100%;
		min-width: 200upx;
		border-radius: 0;
		margin: initial;
		transition-duration: 0.3s;
	}

	.cu-modal.drawer-modal.justify-start .cu-dialog {
		transform: translateX(-100%);
	}

	.cu-modal.drawer-modal.justify-end .cu-dialog {
		transform: translateX(100%);
	}

	.cu-modal.drawer-modal.show .cu-dialog {
		transform: translateX(0%);
	}

	.cu-modal .cu-dialog>.cu-bar:first-child .action {
		min-width: 100rpx;
		margin-right: 0;
		min-height: 100rpx;
	}

	.price {
		color: #E7573D !important;
	}

	.number {
		color: #AEAEAE;

		&.key {
			color: #666666;
		}
	}
	.border-bottom{
		border-bottom: 0.5px solid #363636;
		padding: 18px 0;
	}
</style>
