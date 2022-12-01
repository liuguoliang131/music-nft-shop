<template>
	<view class="container">
		<nav-head title="唱片详情"></nav-head>
		<view class="title mt20">
			<text class="title-v"></text>
			单曲信息
		</view>
		<view class="box1">
			<view class="box1-1">
				<image :src="detail.index_img" mode=""></image>
				<view class="sideline"></view>
			</view>
			<view class="box1-2">
				<view class="box1-2-1">
					{{detail.name}}
				</view>
				<!-- <view class="box1-2-2">
					<view class="box1-2-2-r">
						包含{{detail.singles_num}}首单曲 
					</view>
				</view> -->
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
						￥{{detail.sale_price}}/张
					</view>
				</view>
			</view>
		</view>
		<view class="title mt34 mb7">
			<text class="title-v"></text>
			认证信息
		</view>
		<view class="box2">
			<view class="box2-1">
				<view class="box2-1-l">
					Record Number
				</view>
				<view class="box2-1-r">
					<!-- {{detail.code_num_min === detail.code_num_max ? detail.code_num_max : `${detail.code_num_min}~${detail.code_num_max}`}} -->
					{{detail.code_num}}
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
			<view class="box2-1">
				<view class="box2-1-l">
					数字证书
				</view>
				<view class="box2-1-r viewcert" @tap="handViewCert">
					查看证书<image src="https://file.yuanyinfu.com/front-end-lib/gt.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="splitline">

		</view>
		<view class="title mb9">
			<text class="title-v"></text>
			介绍信息
		</view>
		<view class="auth">
			<image :src="detail.author_info.author_avatar" mode="" class="auth-1"></image>
			<view class="auth-2">
				{{detail.author_info.author_name}}
			</view>
		</view>
		<view class="text" v-html="detail.author_info.desc"></view>
		<view class="text3" v-if="detail.video_url">
			<!-- <my-swiper :list="swiperList"></my-swiper> -->
			<video class="text3-video" :src="detail.video_url" controls :poster="detail.video_index_pic"></video>
		</view>
		<view class="title mb9" v-if="detail.music_list.length">
			<text class="title-v"></text>
			创作灵感
		</view>
		<view class="text" v-if="detail.music_list.length" v-html="detail.music_list[0].desc"></view>
		<view class="h116">

		</view>
		<view class="fixed-bottom">
			<view class="zhuanzeng" @tap="handZhuanZeng">
				转赠
			</view>
			<view class="tingge" @tap="handTingGe">
				<image src="https://file.yuanyinfu.com/front-end-lib/play.png" mode=""></image>
				听歌
			</view>
		</view>
		<my-dialog ref="dialog">
			<view class="cert-content">
				<view class="cert-row1">
					<image src="https://file.yuanyinfu.com/front-end-lib/Frame1000006285.png" mode=""></image>
				</view>
				<view class="cert-row2">
					<view class="row2-line1"></view>
					数字单曲唱片证书
					<view class="row2-line2"></view>
				</view>
				<view class="cert-row3">
					<view class="row3-1">
						编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号
					</view>
					<view class="row3-2">
						{{detail.certificate.code}}
					</view>
				</view>
				<view class="cert-row3">
					<view class="row3-1">
						名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称
					</view>
					<view class="row3-2">
						{{detail.certificate.name}}
					</view>
				</view>
				<view class="cert-row3">
					<view class="row3-1">
						发&nbsp;&nbsp;行&nbsp;者
					</view>
					<view class="row3-2">
						{{detail.certificate.publish_author}}
					</view>
				</view>
				<view class="cert-row3">
					<view class="row3-1">
						发行时间
					</view>
					<view class="row3-2">
						{{filterTimes(detail.certificate.publish_time * 1000)}}
					</view>
				</view>
				<view class="cert-row3">
					<view class="row3-1">
						哈希地址
					</view>
					<view class="h102">
						{{detail.certificate.block_chain_hash}}
					</view>

				</view>
			</view>
		</my-dialog>
	</view>
</template>
<script>
	import NavHead from '../../components/navHead.vue'
	import MyDialog from '../../components/dialog.vue'
	import {
		collections_user_collectionInfo,
		h5_order_detail,
		h5_collections_donation_checkout
	} from '../../request/api.js'
	import {
		post
	} from '../../request/index.js'
	import {
		openAppPage,
		playAlbum
	} from '../../utils/index.js'
	import dayjs from 'dayjs'
	import Mixins from '../../mixins/recordsDetail.js'
	export default {
		components: {
			NavHead,
			MyDialog
		},
		mixins: [Mixins],
		data() {
			return {
				id: null,
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
					"pay_time": 0,
					certificate: {

					}
				}
			}
		},
		onLoad(e) {
			const id = e.id
			this.id = id
			this.getOrderDetail(id)

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
			getOrderDetail(e) {
				post(collections_user_collectionInfo, {
					owner_id: e
				}).then(res => {
					this.detail = res.data
				})
			},
			handViewCert() {
				this.$refs.dialog.show()
			},
			async handZhuanZeng() {
				// {"page":"sendDiskGiftPage","isNeedLogin”:true,"params":{"product_item_id": 29, "owner_id": 2}}
				const res = await this.$post(h5_collections_donation_checkout, {
					owner_id: this.detail.owner_id,
					product_item_id: this.detail.product_item_id
				})
				if (res.code !== 0) {
					if (res.code === 710) {
						uni.showToast({
							title: '还没有实名认证,即将跳转到实名认证页',
							icon: 'none'
						})
						setTimeout(() => {
							uni.navigateTo({
								url: `/pages/idAuth/idAuth`
							})
						}, 2000)
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					return false
				}
				if (this.$store.state.user.inApp) {
					let appConfig = window.localStorage.getItem('AppConfigInfo')
					if (appConfig) {
						appConfig = JSON.parse(appConfig)
					} else {
						appConfig = {
							'version-code': '1750'
						}
					}
					if (Number(appConfig['version-code']) >= 1900) {
						openAppPage({
							page: "sendDiskGiftPage",
							isNeedLogin: true,
							params: this.detail
						})
					} else {
						uni.showToast({
							title: '请更新到最新版本后重试',
							icon: 'none'
						})
					}
				} else {
					uni.navigateTo({
						url: `/pages/subgift/subgift?product_type=1&info=${JSON.stringify(res.data.info)}`
					})
				}
			},
			handTingGe() {
				if (this.$store.state.user.inApp) {
					let appConfig = window.localStorage.getItem('AppConfigInfo')
					if (appConfig) {
						appConfig = JSON.parse(appConfig)
					} else {
						appConfig = {
							'version-code': '1750'
						}
					}
					if (Number(appConfig['version-code']) >= 1800) {
						playAlbum(this.detail.music_list, this.detail.name, '')
					} else {
						uni.navigateTo({
							url: `/pages/musicPlayer/musicPlayer?owner_id=${this.detail.owner_id}&code_num=${this.detail.code_num}&product_item_id=${this.detail.product_item_id}&music_list=${JSON.stringify(this.detail.music_list)}&name=${this.detail.name}`
						})
					}
				} else {
					uni.navigateTo({
						url: `/pages/musicPlayer/musicPlayer?owner_id=${this.detail.owner_id}&code_num=${this.detail.code_num}&product_item_id=${this.detail.product_item_id}&music_list=${JSON.stringify(this.detail.music_list)}&name=${this.detail.name}`
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

		.mb9 {
			margin-bottom: 22rpx;
		}


		.box1 {
			margin-top: 23rpx;
			width: 686rpx;
			display: flex;

			.box1-1 {
				position: relative;
				width: 240rpx;
				height: 240rpx;

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
			}

			.box1-2 {
				flex: 1;
				padding-left: 40rpx;

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


					.box1-2-2-l {
						width: 128rpx;
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
					width: 250rpx;
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

				.viewcert {
					color: #D10910;

					image {
						width: 24rpx;
						height: 24rpx;
						vertical-align: middle;
					}
				}
			}


		}

		.splitline {
			margin-top: 33rpx;
			margin-bottom: 32rpx;
			height: 0.5px;
			opacity: 0.3;
			background-color: #AEAEAE;
			border-radius: 1rpx;
		}

		.auth {
			display: flex;
			align-items: center;

			.auth-1 {
				width: 48rpx;
				height: 48rpx;
				border-radius: 24rpx;
				margin-right: 8rpx;
			}

			.auth-2 {
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 26rpx;
				line-height: 36rpx;
				color: #AEAEAE;
				overflow: hidden; // 溢出隐藏
				white-space: nowrap; // 强制一行
				text-overflow: ellipsis; // 文字溢出显示省略号
			}
		}

		.text {
			margin-top: 8rpx;
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 400;
			font-size: 24rpx;
			line-height: 34rpx;
			white-space: pre-wrap; //识别换行符 并且超过父盒子宽度自动换行
			color: #777777;
		}

		.text3 {
			position: relative;
			margin-top: 16rpx;
			margin-bottom: 26rpx;
			width: 100%;
			height: 362rpx;
			border-radius: 8rpx;

			.swiper {
				border-radius: 8rpx;
			}

			.text3-video {
				width: 100%;
				height: 100%;
				border-radius: 8rpx;
			}
		}

		.price {
			color: #D10910 !important;
		}

		.fixed-bottom {
			z-index: 9;
			position: fixed;
			bottom: 20rpx;
			left: 0;
			width: 686rpx;
			height: 96rpx;
			padding: 0 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.zhuanzeng {
				background: #C8A964;
				width: 332rpx;
				height: 96rpx;
				border-radius: 48rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 500;
				font-size: 32rpx;
				line-height: 96px;
				color: #532609;

			}

			.tingge {
				background: #FFFFFF;
				width: 332rpx;
				height: 96rpx;
				border-radius: 48rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 500;
				font-size: 32rpx;
				line-height: 96px;
				color: #532609;

				image {
					margin-right: 8rpx;
					width: 40rpx;
					height: 40rpx;
				}
			}
		}


		.h116 {
			height: 216rpx;
		}

		/deep/.visible {
			.center-box {
				width: 558rpx;
				height: 584rpx;
				border-radius: 20rpx;
				background: #FFFFFF;

				.cert-content {
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					margin: auto;
					box-sizing: border-box;
					width: 526rpx;
					height: 552rpx;
					padding: 0 16rpx;
					border: 0.5rpx solid #AC9147;
					border-radius: 12rpx;
					text-align: center;


					.cert-row1 {
						padding-top: 20rpx;
						padding-bottom: 8rpx;

						image {
							width: 98rpx;
							height: 130rpx;
						}
					}

					.cert-row2 {
						padding-bottom: 4rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 600;
						font-size: 28rpx;
						line-height: 40rpx;
						/* identical to box height */

						text-align: center;

						color: #222222;

						.row2-line1 {
							width: 56rpx;
							height: 0.5rpx;
							background-color: #666666;
							margin-right: 8rpx;
						}

						.row2-line2 {
							width: 56rpx;
							height: 0.5rpx;
							background-color: #666666;
							margin-left: 8rpx;
						}
					}

					.cert-row3 {
						display: flex;
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 400;
						font-size: 24rpx;
						line-height: 34rpx;
						/* identical to box height */

						text-align: left;
						color: #999999;

						padding-top: 16rpx;


						.row3-1 {
							width: 96rpx;
							margin-right: 24rpx;
							text-align: left;
						}

						.row3-2 {
							font-family: 'PingFang SC';
							font-style: normal;
							font-weight: 600;
							font-size: 24rpx;
							line-height: 34rpx;
							/* identical to box height */
							color: #666666;
							flex: 1;
							text-align: left;
							overflow: hidden; // 溢出隐藏
							white-space: nowrap; // 强制一行
							text-overflow: ellipsis; // 文字溢出显示省略号
						}

						.h102 {
							font-family: 'PingFang SC';
							font-style: normal;
							font-weight: 600;
							font-size: 24rpx;
							line-height: 34rpx;
							/* identical to box height */
							color: #666666;
							width: 370rpx;
							height: 110rpx;
							word-wrap: break-word;
							word-break: break-all;
							display: -webkit-box;
							overflow: hidden;
							text-overflow: ellipsis;
							-webkit-line-clamp: 3;
							-webkit-box-orient: vertical;
						}
					}
				}
			}

		}

	}
</style>
