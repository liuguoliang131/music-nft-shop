<template>
	<view class="container">
		<nav-head title="分享海报"></nav-head>
		<view class="content">
			<view class="box1">
				<image class="posterImageBase64" v-if="posterImageBase64" :src="posterImageBase64" mode=""></image>
				<canvas ref="Canvas" class="thecanvas" type="2d" canvas-id="firstCanvas"></canvas>
			</view>
			<view class="box2">
				<view v-if="isWx" class="save noactive">长按二维码保存海报</view>
				<view v-else class="save" @tap="handleSavePhoto()">点击保存海报到相册</view>
			</view>
			<view class="box3" v-show="$store.state.user.inApp">
				可分享至
				<image src="https://file.yuanyinfu.com/front-end-lib/share-wx.png" mode=""
					@tap="handleShare('wxFriend')"></image>
				<image src="https://file.yuanyinfu.com/front-end-lib/share-friends.png" mode=""
					@tap="handleShare('timeline')"></image>
				<image src="https://file.yuanyinfu.com/front-end-lib/weibo.png" mode="" @tap="handleShare('weibo')">
				</image>
			</view>
		</view>
	</view>
</template>

<script>
	import QRCode from 'qrcodejs2'
	import {
		isWxBrowser,
		saveBase64Image,
		shareBase64Image
	} from '../../utils/index.js'
	import {
		h5_music_sharePoster, // h5内
		h5_music_share // 统计
	} from '../../request/api.js'
	import {
		post1
	} from '../../request/index.js'
	import NavHead from '../../components/navHead.vue'
	// 版权的分享海报
	export default {
		name: 'posterCopyright',
		data() {
			return {
				isWx: false,
				music_info_id: '',
				context: null,
				posterData: {
					poster_url: '',
					ava_url: '',
					user_name: '',
					code: ''
				},
				posterImageBase64: '',
				data: {

				}
			};
		},
		components: {
			NavHead
		},
		computed: {
			shareLink() {
				const link = window.location.protocol + '//' + window.location.host +
					`/#/pages/invitationToRegister/invitationToRegister?share_sign=${encodeURIComponent(this.data.share_sign)}&next=copyrightDetail&id=${this.music_info_id}`
				return link
			}
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
			// 生成二维码函数
			getQrcode(qWidth, qHeight, qText, qRender, dom) {
				return new QRCode(dom, {
					width: qWidth,
					height: qHeight,
					text: qText,
					render: qRender,
					correctLevel: 1
				})
			},
			async downloadFile(imgSrc) {
				return new Promise((resolve, errs) => {
					uni.getImageInfo({
						src: imgSrc,
						success: function(image) {
							resolve(image.tempFilePath);
						},
						fail(err) {
							errs(err);
						}
					});
				});
			},

			handleSavePhoto() {
				console.log('save')
				uni.canvasToTempFilePath({ // res.tempFilePath临时路径
					canvasId: 'firstCanvas',
					success: (res) => {
						console.log('res', res)
						if (this.$store.state.user.inApp) {
							saveBase64Image(res.tempFilePath)
						} else {
							const btn = document.createElement('a')
							btn.download = '分享海报'
							btn.href = res.tempFilePath
							btn.click()
						}
						// uni.saveImageToPhotosAlbum({ // 保存本地
						// 	filePath: res.tempFilePath,
						// 	success: (response) => {
						// 		console.log(response, 'success');
						// 	},
						// 	fail: (response) => {}
						// })
					},
					fail: (error) => {
						console.log(error)
					}
				})
				this.shareStatics()
			},
			async getInfo() {
				try {
					const res = await this.$post(h5_music_sharePoster, {
						music_info_id: this.music_info_id
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					this.data = res.data
					this.initCanvas(res.data)
				} catch (e) {
					//TODO handle the exception
					console.log('error', e)
					uni.showToast({
						icon: 'none',
						title: e.message
					})
				}
			},
			initCanvas(data) {
				const that = this
				// 获取父盒子宽度

				let device = uni.getSystemInfo().then(res => {
					console.log('device', res[1])
					const widowWidth = res[1].windowWidth //屏幕宽度

					// 参照比例
					const scaleWidth = 315
					const scaleScreenWidth = 375 //屏幕宽度
					const scaleHeight = 387
					const bg = {
						url: data.poster_url,
						x: 0,
						y: 0,
						width: scaleWidth * widowWidth / scaleScreenWidth,
						height: scaleHeight * widowWidth / scaleScreenWidth,
						radius: 8 * widowWidth / scaleScreenWidth
					}
					const ava = {
						url: data.user_avatar,
						x: 0,
						y: 0,
						width: 0,
						height: 0
					} // 头像
					ava.x = 12 * widowWidth / scaleScreenWidth
					ava.y = 16 * widowWidth / scaleScreenWidth
					ava.width = 30 * widowWidth / scaleScreenWidth
					ava.height = 30 * widowWidth / scaleScreenWidth
					// 文本
					const title = {
						x: 47 * widowWidth / scaleScreenWidth,
						y: 37 * widowWidth / scaleScreenWidth,
						fontSize: 16 * widowWidth / scaleScreenWidth,
						color: '#1C1C1E',
						text: data.user_name
					}

					// 二维码
					const qr = {
						x: 97.5 * widowWidth / scaleScreenWidth,
						y: 218 * widowWidth / scaleScreenWidth,
						width: 120 * widowWidth / scaleScreenWidth,
						height: 120 * widowWidth / scaleScreenWidth,
						shareUrl: this.shareLink
					}

					// 生成二维码
					const qrCanvas = document.createElement('div')
					qrCanvas.height = qr.height
					qrCanvas.width = qr.width
					const qrcodeObj = that.getQrcode(qr.width, qr.height, qr.shareUrl,
						'canvas', qrCanvas)
					const codeCanvas = qrcodeObj._el.querySelector('canvas')
					const code2Url = codeCanvas.toDataURL('image/png')
					console.log('code2Url', code2Url)


					that.context = uni.createCanvasContext('firstCanvas', that)
					console.log('that.context', that.context)
					// this.$refs.Canvas.style.borderRadius = bg.radius + 'px'
					console.log(that.$refs.Canvas)

					uni.downloadFile({
						url: bg.url,
						success(bgres) {
							that.context.drawImage(bgres.tempFilePath, bg.x, bg.y, bg.width, bg.height)
							that.context.setFontSize(title.fontSize) // 字号
							that.context.setFillStyle('Roboto ' + title.color) // 字体颜色
							that.context.fillText(title.text, title.x, title.y); // （文字，x，y）

							uni.downloadFile({
								url: code2Url,
								success(code2res) {
									that.context.drawImage(code2Url, qr.x,
										qr.y, qr.width,
										qr.height)
									// 创建完后绘制头像
									uni.downloadFile({
										url: ava.url,
										success(avares) {
											that.context.arc(ava.x + (ava.width / 2), ava
												.y + (
													ava.height / 2),
												ava.width /
												2, 0, Math.PI *
												2)
											that.context.clip()
											that.context.beginPath()
											that.context.drawImage(avares.tempFilePath, ava
												.x,
												ava.y, ava.width,
												ava.height)
											that.context.draw();
											setTimeout(() => {
												// 生成图片 在canvas加载完后生成图片到canvas层级之上
												uni.canvasToTempFilePath({ // res.tempFilePath临时路径
													canvasId: 'firstCanvas',
													success: (
														posterRes) => {
														console.log(
															'posterRes',
															posterRes
														)

														that.posterImageBase64 =
															posterRes
															.tempFilePath

													},
													fail: (error) => {
														console.log(
															error)
													}
												})
											}, 1000)


										}
									})
								}
							})

						}
					})
				})
			},
			handleShare(share_way) {
				const link = this.shareLink
				const share_title = '元音符' + link
				let img = ''
				uni.canvasToTempFilePath({ // res.tempFilePath临时路径
					canvasId: 'firstCanvas',
					success: (res) => {
						console.log('res', res)
						img = res.tempFilePath
					},
					fail: (error) => {
						console.log(error)
					}
				})

				let appConfig = window.localStorage.getItem('AppConfigInfo')
				if (appConfig) {
					appConfig = JSON.parse(appConfig)
				} else {
					appConfig = {
						'version-code': '1710'
					}
				}
				if (Number(appConfig['version-code']) >= 1750) {
					shareBase64Image({
						share_title,
						share_way,
						img
					})
				} else {

				}
				this.shareStatics()

			},
			// 分享统计
			async shareStatics() {
				const res = await post1(h5_music_share, {
					music_info_id: this.music_info_id
				})

			}
		},
		mounted() {

		},
		onLoad(option) {
			console.log('poster onload', option)
			this.isWx = isWxBrowser()
			this.music_info_id = option.music_info_id ? Number(option.music_info_id) : null
		},
		onReady: function(e) {
			console.log('poster onready')
			this.getInfo()

		}
	}
</script>

<style lang="scss">
	.container {

		// .nav {
		// 	position: fixed;
		// 	top: 0;
		// 	left: 0;
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: center;
		// 	width: 100%;
		// 	height: 88rpx;
		// 	background-color: #0D0D0D;
		// 	z-index: 10;

		// 	.nav-left {
		// 		position: absolute;
		// 		top: 28rpx;
		// 		left: 28rpx;
		// 		width: 48rpx;
		// 		height: 48rpx;
		// 	}
		// }

		.content {

			.box1 {
				position: relative;
				padding-top: 80rpx;
				text-align: center;

				.thecanvas {
					z-index: 1;
					width: 630rpx;
					height: 774rpx;
					margin: auto;
					background: #E7E7E7;
					border-radius: 16rpx !important;
				}

				.posterImageBase64 {
					position: absolute;
					z-index: 2;
					top: 80rpx;
					left: 50%;
					transform: translate(-50%, 0);
					width: 630rpx;
					height: 774rpx;
					border-radius: 16rpx !important;
				}
			}

			.box2 {
				display: flex;
				justify-content: center;
				margin-top: 48rpx;
				width: 100%;

				.save {
					display: flex;
					align-items: center;
					justify-content: center;
					line-height: 0;
					width: 474rpx;
					height: 96rpx;
					background: #D10910;
					border-radius: 44px;
					color: rgba(236, 236, 236, 1);
					font-size: 32rpx;

					&:active {
						background-color: rgba(209, 9, 16, 0.6);
						color: rgba(134, 134, 134, 1);
					}

				}

				.noactive {
					&:active {
						background-color: #D10910;
						color: rgba(236, 236, 236, 1);
					}
				}
			}

			.box3 {
				padding-top: 26rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				color: #E6E6E6;

				image {
					width: 72rpx;
					height: 72rpx;
					margin-left: 24rpx;
				}
			}
		}
	}
</style>
