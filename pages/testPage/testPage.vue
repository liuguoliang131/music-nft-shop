<template>
	<view class="container collection">
		<button>欣赏专辑</button>
	</view>
</template>

<script>
	import {
		h5_collections_user_collectionInfo,
		h5_order_detail
	} from '../../request/api.js'
	import {
		isApp,
		playAlbum
	} from '../../utils/index.js'
	import {
		post
	} from '../../request/index.js'
	import dayjs from 'dayjs'
	export default {
		data() {
			return {
				show: false,
				detail: {
					product_item_id: '5',
					name: 'aaa',
					index_img: '',
					code_num: '12e1',
					sale_price: '12',
					evaluate_type: '1',
					rare_type: '1',
					publish_author: 'qweqw',
					publish_time: '123',
					singles_num: 0,
					contract_address: '',
					token_id: '',
					token_standard: '',
					certificate: {
						code: '',
						name: '',
						block_chain_hash: '',
						publish_author: '',
						publish_time: ''
					},
					music_list: [{
							"name": "与伤共舞",
							"desc": "命运面前，休论公道。",
							"singer": "刘思佳",
							"lyricist": "嫩成",
							"composer": "逄博",
							"music_url": "https://media.shenglangnft.com/与伤共舞.mp3",
							"music_time": 208
						},
						{
							"name": "真的吗",
							"desc": "当所有的热烈回归平静",
							"singer": "刘思达",
							"lyricist": "刘思达",
							"composer": "刘思达",
							"music_url": "https://media.shenglangnft.com/真的吗MMM.wav",
							"music_time": 185
						}
					]
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
				if (isApp()) {
					let appConfig = window.localStorage.getItem('AppConfigInfo')
					if (appConfig) {
						appConfig = JSON.parse(appConfig)
					} else {
						appConfig = {
							'version-code': '1750'
						}
					}
					if (Number(appConfig['version-code']) >= 1800) {
						alert('>=1800')
						playAlbum(this.detail.music_list, detail.name, '')
					} else {
						alert('<1800')
						uni.navigateTo({
							url: `/pages/musicPlayer/musicPlayer?owner_id=${this.detail.owner_id}&code_num=${this.detail.code_num}&product_item_id=${this.detail.product_item_id}&music_list=${JSON.stringify(this.detail.music_list)}&name=${this.detail.name}`
						})
					}
				} else {
					alert('不在app内')
					uni.navigateTo({
						url: `/pages/musicPlayer/musicPlayer?owner_id=${this.detail.owner_id}&code_num=${this.detail.code_num}&product_item_id=${this.detail.product_item_id}&music_list=${JSON.stringify(this.detail.music_list)}&name=${this.detail.name}`
					})
				}


			}

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding-bottom: 120rpx;
		padding-left: 40rpx;
		padding-right: 40rpx;
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
			// height: 800rpx;
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
		margin-top: 39rpx;
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
			font-size: 16px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 500;

			&.primary {
				background: #AC9147;
				color: #fff;
			}
		}
	}


	.head {
		display: flex;
		flex-direction: column;
		align-items: center;

		// padding-top: 40rpx;
		&-title {
			color: #101010;
			font-weight: 500;
			font-size: 18px;
			position: relative;
			margin-top: 14rpx;

			&::before {
				content: '';
				width: 60rpx;
				height: 1rpx;
				background-color: #666666;
				position: absolute;
				top: 50%;
				left: calc(100% + 10rpx);
				opacity: .8;
			}

			&::after {
				content: '';
				width: 60rpx;
				height: 1rpx;
				background-color: #666666;
				position: absolute;
				top: 50%;
				right: calc(100% + 10rpx);
				opacity: .8;
			}
		}
	}

	.body {
		// padding: 20rpx;
		margin-top: 20rpx;

	}


	.flex {
		display: flex;
		align-items: flex-start;
		flex-shrink: 0;
		flex: 1;
		width: 100%;

		.number {
			// flex: 1;
			text-align: left;
			width: calc(100% - 120rpx);
			word-break: break-all;
			font-weight: 600;
			font-size: 13px;
			line-height: 18px;
			color: #333333;
		}

		.key {
			width: 140rpx;
			text-align: justify;
			text-align-last: justify;
			margin-left: 20rpx;
			height: auto;
			font-weight: 400;
			font-size: 13px;
			text-align: right;

			color: #999999;
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

	.border-bottom {
		border-bottom: 0.5px solid #363636;
		padding: 18px 0;
	}
</style>
