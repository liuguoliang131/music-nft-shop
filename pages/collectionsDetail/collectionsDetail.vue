<template>
	<view class="container collection">

		<view class="title">
			专辑信息
		</view>

		<view class=" mt-2" style="display: flex;align-items: center;">
			<image :src="detail.index_img" class="image" mode=""></image>
			<view class="box">
				<view class="box-title">
					{{detail.name}}
				</view>
				<view class="number">
					包含{{detail.singles_num}}首作品
				</view>
				<view class="number">
					发 行 方 {{detail.publish_author}}
				</view>
				<view class="number">
					发行时间 {{detail.publish_time}}
				</view>
				<view class="number price">
					发行价格 ¥{{detail.sale_price}}元/张
				</view>
			</view>
		</view>
		<view class="title mt-2">
			认证信息
		</view>
		<view class="flex">
			<view class="key number" style="width: 250rpx;">
				Record Number
			</view>
			<view class="number" style="flex-flow: wrap;">
				{{detail.code_num}}
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


		<view class="" v-for="(item , index) in detail.music_list" :key='index'>
			<view class="title mt-2">
				{{item.name}}
			</view>
			<view class="content" style="margin-top: 20rpx;">
				{{item.desc}}
			</view>
		</view>

		<view class="container-bottom">
			<div class="my-btn primary" @click="showCre">查看证书</div>
			<div class="my-btn " @click="handGoMusicPlayer">欣赏专辑</div>
		</view>


		<view class="cu-modal " :class="show ? 'show' : ''" @click="hiddenCre">
			<view class="cu-dialog">
				<view style="border: 0.5px solid #AC9147;border-radius: 6px;padding: 10rpx;">
					<view class="head">

						<image src="../../static/logo-black.jpg" class="head-logo"></image>

						<view class="head-title">
							数字专辑证书
						</view>
					</view>
					<view class="body">
						<view class="flex">
							<view class="key number">
								编 号:
							</view>
							<view class="number">
								{{detail.certificate.code}}
							</view>
						</view>
						<view class="flex">
							<view class="key number">
								名 称:
							</view>
							<view class="number">
								{{detail.certificate.name}}
							</view>
						</view>
						<view class="flex">
							<view class="key number">
								发行方
							</view>
							<view class="number">
								{{detail.certificate.publish_author}}
							</view>
						</view>
						<view class="flex">
							<view class="key number">
								发行时间
							</view>
							<view class="number">
								{{detail.certificate.publish_time}}
							</view>
						</view>
						<view class="flex text">
							<view class="key number">
								哈希地址
							</view>
							<view class="number" style="flex-flow: wrap;">
								{{detail.certificate.block_chain_hash}}
							</view>
						</view>
					</view>
				</view>
			</view>
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
					name: '最新梦想金曲',
					index_img: 'https://y.qq.com/music/photo_new/T002R300x300M000002GBegP0KlpSG.jpg?max_age=2592000',
					code_num: '#001',
					sale_price: '19.90',
					evaluate_type: 'SSR',
					rare_type: '稀有',
					publish_author: '元音符',
					publish_time: '2022年09月24日',
					singles_num: 10,
					contract_address: 'HUIHIOIOJIOi9090HUHIUHI8787HIHIU',
					token_id: 'HUIHIOIOJIOi9090HUHIUHI8787HIHIU',
					token_standard: 'HUIHIOIOJIOi9090HUHIUHI8787HIHIUHUIHIOIOJIOi9090HUHIUHI8787HIHIUHUIHIOIOJIOi9090HUHIUHI8787HIHIU',
					certificate: {
						code: 'a8s7d83gqds78tyg3',
						name: '测试名称',
						block_chain_hash: 'NIHIJHIIJI7878HJIHIUHIU89--',
						publish_author: '元音符',
						publish_time: '2022年09月24日'
					},
					music_list: [{
						name: '测试名称一',
						desc: '那些不经意想起的便是记忆里最深刻的，原来没有争吵也可以走到散场。奔赴多年也换不来永远。爱意随风起，风止意难平，故事的结尾总配不上极致温柔的开头。'
					}]
				}
			}
		},
		onLoad(e) {
			const id = e.id
			const type = e.type || 'order'
			if (type === "collection") {
				this.getDetail(id)
			} else {
				this.getOrderDetail(id)
			}

		},
		methods: {
			filterTimes(e) {
				return dayjs(e).format('YYYY/MM/DD HH:mm:ss')
			},
			getDetail(e) {
				post(h5_collections_user_collectionInfo, {
					owner_id: Number(e)
				}).then(res => {
					console.log(res)
					this.detail = res.data
				})
			},
			getOrderDetail(e) {
				post(h5_order_detail, {
					order_id: Number(e)
				}).then(res => {
					// this.detail = res.data


					this.detail.index_img = res.data.index_url
				})
			},
			showCre() {
				this.show = true
			},
			hiddenCre() {
				this.show = false
			},
			// 欣赏专辑
			handGoMusicPlayer() {
				uni.navigateTo({
					url: `/pages/musicPlayer/musicPlayer?owner_id=${this.detail.owner_id}&code_num=${this.detail.code_num}&product_item_id=${this.detail.product_item_id}&music_list=${JSON.stringify(this.detail.music_list)}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding-bottom: 120rpx;
	}

	.collection {
		&-box {
			background: #151516;
			border-radius: 4px;
			// width: 100%;
			padding: 20rpx;

			&-box {
				background: #151516;
				border: 0.5px solid #5B5B5B;
				border-radius: 4px;
				padding: 20rpx;
			}
		}

		&-head {
			width: 100%;
			height: 800rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			&-box {
				width: 400rpx;
				height: 400rpx;
				background-position: center;
				background-size: cover;
				display: flex;
				align-items: center;
				justify-content: center;

				&-1 {
					background-image: url(../../static/Frame%2077.png);
					width: 326rpx;
					height: 326rpx;
					background-position: center;
					background-size: cover;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				&-image {
					width: 200rpx;
					height: 200rpx;
					border-radius: 50%;
				}
			}

			&-title {
				margin-top: 26rpx;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 500;
				font-size: 18px;
				line-height: 25px;
				text-align: center;

				color: #ECECEC;
			}

			&-tags {
				margin-top: 9rpx;
				font-weight: 400;
				font-size: 13px;
				line-height: 18px;
				text-align: right;
				color: #AEAEAE;
			}
		}
	}

	.title {
		font-size: 24rpx;
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

	.price {
		color: #E7573D;
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
			height: 100%;
			width: 50vw;
			display: inline-block;
			border: none;
			color: #847443;
			background-color: #fff;
			font-size: 14px;
			display: flex;
			align-items: center;
			justify-content: center;

			&.primary {
				background-color: #E8D18A;
				color: #fff;
			}
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
			position: relative;

			&::before {
				content: '';
				width: 60rpx;
				height: 2rpx;
				background-color: #000;
				position: absolute;
				top: 50%;
				left: calc(100% + 10rpx);
			}

			&::after {
				content: '';
				width: 60rpx;
				height: 2rpx;
				background-color: #000;
				position: absolute;
				top: 50%;
				right: calc(100% + 10rpx);
			}
		}
	}

	.body {
		padding: 20rpx;
		margin-top: 20rpx;

	}


	.flex {
		display: flex;
		align-items: flex-start;
		// justify-content: center;
		// flex-wrap: wrap;
		flex-shrink: 0;
		flex: 1;
		width: 100%;

		.number {
			// flex: 1;
			text-align: left;
			width: calc(100% - 120rpx);
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
		border-radius: 6px;
		overflow: hidden;
		background-color: #F6F6F6;
		color: #1D1d1d;
		padding: 20rpx;
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

	.level {
		font-size: 12px;
		background: linear-gradient(102.78deg, #FFE476 0%, #FFEDBE 100%);
		padding: 8rpx 30rpx;
		border-radius: 10px 0 10px 0;
		font-weight: 500;
		color: #B17A0F;
	}
</style>
