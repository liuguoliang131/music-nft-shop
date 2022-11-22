<template>
	<!-- 数字音乐详情 -->
	<view class="container">
		<nav-head :left="!share_sign" :right="!share_sign" title="详情">
			<image class="nav-r" src="../../static/share1.png" mode="" @tap="handShare"></image>
		</nav-head>

		<view class="cover">
			<view class="cover-1">
				<image class="cover-1-1" src="../../static/image-7 1-1.png" mode=""></image>
				<image class="cover-1-2" src="../../static/turn.png" mode=""></image>
				<image class="cover-1-3" src="../../static/verify/1.jpeg" mode=""></image>
				<image class="cover-1-4" src="../../static/play.png" mode="" @tap="handPlay"></image>
			</view>
		</view>
		<view class="title">
			<image v-show="!isApprove" v-if="data.rare_type==='SSR'" src="../../static/SSR.png" mode=""></image>
			<image v-show="!isApprove" v-else-if="data.rare_type==='UR'" src="../../static/UR.png" mode=""></image>
			<image v-show="!isApprove" v-else-if="data.rare_type==='R'" src="../../static/R.png" mode=""></image>
			<image v-show="!isApprove" v-else-if="data.rare_type==='N'" src="../../static/N.png" mode=""></image>
			<image v-show="!isApprove" v-else-if="data.rare_type==='SR'" src="../../static/SR.png" mode=""></image>
			{{data.name}}
		</view>
		<view class="price" v-show="!isApprove">
			<text class="rmb">￥</text>
			<text class="count">{{data.sale_price}}</text>
			<text class="unit">/张</text>
		</view>
		<view class="action-bar" v-show="!isApprove">
			<view class="bar-item">
				<image src="../../static/clickRate.png" mode=""></image>
				<text>{{data.statistics_info.visit}}</text>
			</view>
			<view class="bar-item">
				<image src="../../static/follow.png" mode=""></image>
				<text>{{data.statistics_info.like}}</text>
			</view>
			<view class="bar-item">
				<image src="../../static/share1.png" mode=""></image>
				<text>{{data.statistics_info.share}}</text>
			</view>
		</view>
		<view class="card1" v-show="!isApprove">
			<view class="card1-body">
				<view class="title1">唱片信息</view>
				<view class="info">
					<view class="info-1">
						唱片名称
					</view>
					<view class="info-2">
						{{data.name}}
					</view>
				</view>
				<view class="info">
					<view class="info-1">
						稀有度
					</view>
					<view class="info-2">
						{{data.rare_type}}
					</view>
				</view>
				<view class="info">
					<view class="info-1">
						发行时间
					</view>
					<view class="info-2">
						{{data.publish_time1}}
					</view>
				</view>
				<view class="info">
					<view class="info-1">
						发行方
					</view>
					<view class="info-2">
						{{data.publish_author}}
					</view>
				</view>
				<view class="info">
					<view class="info-1">
						本次发行量
					</view>
					<view class="info-2">
						{{data.stock_num}}张
					</view>
				</view>
				<view class="title1 mt32 mb8">
					购买须知
				</view>
				<view class="text1" v-html="data.buy_notice">

				</view>
			</view>
		</view>
		<view class="card2">
			<view class="card2-body">
				<view class="title1">
					介绍信息
				</view>
				<view class="author">
					<image :src="data.author_info.author_avatar" mode=""></image>
					<text>{{data.author_info.author_name}}</text>
				</view>
				<view class="text2" v-html="data.author_info.desc"></view>
				<view class="text3" v-if="data.video_url">
					<!-- <my-swiper :list="swiperList"></my-swiper> -->
					<video class="text3-video" :src="data.video_url" controls :poster="data.video_index_pic"></video>
				</view>
				<view class="title1 mb8" v-if="data.music_list.length">
					创作灵感
				</view>
				<view class="text1" v-if="data.music_list.length" v-html="data.music_list[0].desc"></view>
			</view>
		</view>
		<view class="footer"></view>
		<view class="bottom1" v-if="share_sign" v-show="!isApprove">
			<view v-if="data.is_like===1" class="bottom1-1 followed" @tap="handFollow(2)">
				<image class="bottom1-1-1" src="../../static/follow-solid.png" mode=""></image>
				<view class="bottom1-1-2">
					关注
				</view>
			</view>
			<view v-else class="bottom1-1 unfollow" @tap="handFollow(1)">
				<image class="bottom1-1-1" src="../../static/follow-hollow.png" mode=""></image>
				<view class="bottom1-1-2">
					关注
				</view>
			</view>
			<view class="bottom1-2">
				<view v-if="data.is_halt===2" class="bottom1-status2" @tap="handGoDownload">已停售</view>
				<view v-else-if="data.is_halt===1&&data.sale_status===0" class="bottom1-status0" @tap="handGoDownload">
					{{countDown}}
				</view>
				<view v-else-if="data.is_halt===1&&data.sale_status===1" class="bottom1-status1" @tap="handGoDownload">
					立即抢购
				</view>
				<view v-else-if="data.is_halt===1&&data.sale_status===2" class="bottom1-status2" @tap="handGoDownload">
					已售罄</view>
			</view>
		</view>
		<view class="bottom1" v-else v-show="!isApprove">
			<view v-if="data.is_like===1" class="bottom1-1 followed" @tap="handFollow(2)">
				<image class="bottom1-1-1" src="../../static/follow-solid.png" mode=""></image>
				<view class="bottom1-1-2">
					关注
				</view>
			</view>
			<view v-else class="bottom1-1 unfollow" @tap="handFollow(1)">
				<image class="bottom1-1-1" src="../../static/follow-hollow.png" mode=""></image>
				<view class="bottom1-1-2">
					关注
				</view>
			</view>
			<view class="bottom1-2">
				<view v-if="data.is_halt===2" class="bottom1-status2" @tap="handOrLogin(3)">已停售</view>
				<view v-else-if="data.is_halt===1&&data.sale_status===0" class="bottom1-status0" @tap="handOrLogin(0)">
					{{countDown}}
				</view>
				<view v-else-if="data.is_halt===1&&data.sale_status===1" class="bottom1-status1" @tap="handBuyThe">立即抢购
				</view>
				<view v-else-if="data.is_halt===1&&data.sale_status===2" class="bottom1-status2" @tap="handOrLogin(2)">
					已售罄</view>
			</view>
		</view>
		<wyb-popup ref="popup" type="bottom" zIndex="99" height="701" width="750" radius="6" bgColor="#1D1D1D"
			:showCloseIcon="true">
			<view class="popup-content">
				<view class="popup-i">
					<view class="i-img">
						<image :src="data.index_img" mode=""></image>
						<view class="img-line"></view>
					</view>
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
					<image class="popup-f-img" src="../../static/popupYf.png"></image>
					<text>购买唱片可以永久聆听</text>
				</view>
				<view class="popup-count">
					<view class="count-text">
						数量
					</view>
					<view class="number-count">
						<view class="minus" @tap="handMinus()">
							<!-- <image class="minus-img" src="../../static/Frame 1000006244.png" mode=""></image> -->
							<view class="minus-img">
								<view :class="['h',this.count>1?'active-icon':'']"></view>
							</view>
						</view>
						<input class="countc" type="number" maxlength="3" name="" id="" v-model="count"
							@blur="onCountChange()">
						<view class="plus" @tap="handPlus()">
							<!-- <image class="plus-img" src="../../static/Group 1000004650.png" mode=""></image> -->
							<view class="plus-img">
								<view :class="['h',this.count<100?'active-icon':'']"></view>
								<view :class="['v',this.count<100?'active-icon':'']"></view>
							</view>
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
	import NavHead from '../../components/navHead.vue'
	import MySwiper from '../../components/mySwiper.vue'
	import {
		collections_index_detail,
		h5_collections_user_if_approve,
		h5_conllections_buy_checkout,
		collections_index_like,
		collections_index_musicPlay,
		collections_index_play,
		collections_index_visit
	} from '../../request/api.js'
	import {
		post1
	} from '../../request/index.js'
	import {
		getTimeData,
		goLogin,
		openAppPage,
		goDownload
	} from '../../utils/index.js'
	import Mixins from '../../mixins/index.js'
	import RefreshMixins from '../../mixins/preDetails.js'
	export default {
		components: {
			WybPopup,
			NavHead,
			MySwiper
		},
		mixins: [Mixins, RefreshMixins],
		data() {
			return {
				product_item_id: '',
				share_sign: '',
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
					is_login: '',
					publish_time1: '',
					sale_time1: '',
					is_like: 0,
					video_url: '',
					video_index_pic: '',
					author_info: {
						author_name: '',
						author_avatar: '',
						desc: ''

					},
					statistics_info: {
						like: '',
						play: '',
						visit: '',
						share: ''
					}
				},
				count: 1,
				statusTimer: null,
				countDown: '',
				swiperList: [{
						image: 'https://file.yuanyinfu.com/a_2022-04-29-12-38-59-100047-6ef232385b64eb08ab69c42926bac532.jpg'
					},
					{
						image: 'https://file.yuanyinfu.com/a_2022-04-29-12-47-12-100051-854b10175a60e5a41130357fbbfb4f04.jpg'
					},
					{
						image: 'https://file.yuanyinfu.com/a_2022-04-29-12-55-22-100053-5b9775e1fb6d29664102d4a3ef5a09b1.jpg'
					}
				],
				isApprove: true
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
			async getDetails(product_item_id) {
				try {
					const res = await this.$post(collections_index_detail, {
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
					const date = getTimeData(res.data.sale_time * 1000)
					const date1 = getTimeData(res.data.publish_time * 1000)
					res.data.sale_time1 = `${date.mon}月${date.dd}日${date.hh}:${date.MM}`
					res.data.publish_time1 = `${date1.y}-${date1.mon}-${date1.dd}`
					this.data = res.data
					if (res.data.is_halt === 1) {
						this.handSetTimeout()
					}
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						icon: 'error',
						title: e.message
					})
				}
			},
			// 更新状态定时器
			handSetTimeout() {
				clearInterval(this.statusTimer)
				if (this.data.sale_status === 0) {
					this.statusTimer = setInterval(() => {
						const date = new Date().getTime()
						const count = this.data.sale_time * 1000 - date
						if (count > 0) {
							let hh = parseInt(count / 1000 / 60 / 60)
							let MM = parseInt(count / 1000 / 60 % 60)
							let ss = parseInt(count / 1000 % 60)
							hh = hh < 10 ? '0' + hh : hh
							MM = MM < 10 ? '0' + MM : MM
							ss = ss < 10 ? '0' + ss : ss
							this.countDown = `距离开售 ${hh}时${MM}分${ss}秒`
						} else {
							this.getDetails(this.product_item_id)
							clearTimeout(this.statusTimer)
						}

					}, 1000)
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
				if (!this.$store.state.user.token) {
					return goLogin()
				}
				uni.navigateTo({
					url: `/pages/poster/poster?product_item_id=${this.product_item_id}&product_type=1`
				})
			},
			// 是否去登录 
			handOrLogin(status) {
				if (status === 3) {
					uni.showToast({
						title: '已停售，感谢您的关注',
						icon: 'none'
					})
				} else if (status === 2) {
					uni.showToast({
						title: '已售罄，感谢您的关注',
						icon: 'none'
					})
				} else if (status === 0) {
					uni.showToast({
						title: '未开售',
						icon: 'none'
					})
				}


				if (!this.$store.state.user.token) {
					goLogin()
				}
			},
			handBuyThe() {
				if (!this.$store.state.user.token) {
					goLogin()
				} else {
					this.$refs.popup.show()
				}
			},
			// 立即抢购
			async handOrder() {
				try {
					// const res = await this.$get(h5_collections_user_if_approve)
					// if (res.code === 200 || res.code === 0) {
					// 	uni.navigateTo({
					// 		url: `/pages/settlement/settlement?product_item_id=${this.product_item_id}&buy_num=${this.count}`
					// 	})
					// } else if (res.code === 7) {
					// 	// 身份认证
					// 	uni.navigateTo({
					// 		url: `/pages/idAuth/idAuth`
					// 	})

					// } else {
					// 	return uni.showToast({
					// 		title: res.msg,
					// 		icon: 'error'
					// 	})
					// }
					if (!this.$store.state.user.token) {
						return goLogin()
					}
					const res = await this.$post(h5_conllections_buy_checkout, {
						product_item_id: this.product_item_id,
						buy_num: Number(this.count)
					})
					if (res.code !== 0) {
						if (res.code === 710) {
							uni.navigateTo({
								url: `/pages/idAuth/idAuth`
							})
						} else {
							return uni.showToast({
								title: res.msg,
								icon: 'error'
							})
						}

					} else {
						const params = res.data.info
						// res.data.info.total = (res.data.info.buy_num * res.data.info.pay_price).toFixed(2)

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
								let data = {
									page: "diskConfirmOrderPage",
									isNeedLogin: true,
									params
								}
								openAppPage(data)
							} else {
								uni.showToast({
									title: '请更新到最新版本后重试',
									icon: 'none'
								})
							}
						} else {
							uni.navigateTo({
								url: `/pages/settlement/settlement?product_item_id=${this.product_item_id}&buy_num=${this.count}&params=${JSON.stringify(params)}`
							})
						}


					}


				} catch (e) {
					//TODO handle the exception
					console.log('error', e)
					uni.showToast({
						title: e.message,
						icon: 'error'
					})
				}

			},
			async handFollow(operation_type) {
				try {
					const res = await this.$post(collections_index_like, {
						product_item_id: this.product_item_id,
						operation_type
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
					if (operation_type === 1) {
						uni.showToast({
							title: '关注成功',
							icon: 'none'
						})
					} else {
						uni.showToast({
							title: '已取消关注',
							icon: 'none'
						})
					}
					this.data.is_like = operation_type === 1 ? 1 : 0
					this.getDetails(this.product_item_id)
				} catch (e) {
					//TODO handle the exception
				}
			},
			async handPlay() {
				try {
					let data = {
						"page": "musicPlayPage",
						"isNeedLogin": false,
						"params": {
							product_item_id: this.product_item_id
						}
					}
					const res1 = await this.$post(collections_index_play, {
						product_item_id: this.product_item_id
					})
					openAppPage(data)
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'none'
					})
					throw e
				}
			},
			// 访问统计
			async visitStatics() {
				const res = await post1(collections_index_visit, {
					product_item_id: this.product_item_id
				})
			},
			handGoDownload() {
				goDownload()
			}
		},
		onLoad(option) {
			console.log('onload', option)
			this.getApprove().then(() => {
				this.product_item_id = Number(option.product_item_id)
				this.share_sign = option.share_sign || ''
				this.getDetails(this.product_item_id)
				this.visitStatics()
			})

		},
		onShow() {

		},
		created() {
			console.log('created')
		},
		beforeDestroy() {
			clearTimeout(this.statusTimer)
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


	.container {
		padding: 0 24rpx;

		.nav-r {
			width: 48rpx;
			height: 48rpx;
		}

		.cover {
			margin: 41rpx auto 0 auto;
			text-align: center;

			.cover-1 {
				position: relative;
				width: 376rpx;
				height: 376rpx;
				margin: auto;

				.cover-1-1 {
					width: 376rpx;
					height: 376rpx;
				}

				.cover-1-2 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
					width: 327.64rpx;
					height: 327.64rpx;
				}

				.cover-1-3 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
					width: 200rpx;
					height: 200rpx;
					border-radius: 100rpx;
				}

				.cover-1-4 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
					width: 76rpx;
					height: 76rpx;
				}
			}
		}

		.title {
			width: 648rpx;
			// height: 100rpx;
			margin: auto;
			margin-top: 26rpx;
			color: #DDDDDD;
			font-family: 'PingFang SC';
			font-style: normal;
			text-align: center;
			font-weight: 500;
			font-size: 36rpx;
			line-height: 36rpx;
			overflow: hidden; // 溢出隐藏
			white-space: nowrap; // 强制一行
			text-overflow: ellipsis; // 文字溢出显示省略号

			image {
				width: 84rpx;
				height: 40rpx;
				margin-right: 16rpx;
				vertical-align: middle;
			}
		}

		.price {
			display: flex;
			justify-content: center;
			align-items: center;
			line-height: 50rpx;
			margin-top: 6rpx;
			color: #D10910;

			.rmb {
				font-size: 28rpx;
			}

			.count {
				font-size: 36rpx;
				margin-right: 4rpx;
				font-weight: 600;
			}

			.unit {
				font-size: 26rpx;
			}
		}

		.action-bar {
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-sizing: border-box;
			width: 702rpx;
			height: 96rpx;
			padding: 0 40rpx;
			margin-top: 24rpx;
			background: #292929;
			border-radius: 8rpx;

			.bar-item {
				display: flex;
				align-items: center;
				width: 148rpx;

				image {
					width: 48rpx;
					height: 48rpx;
				}

				text {
					width: 100rpx;
					text-indent: 8rpx;
					font-family: 'DIN';
					font-style: normal;
					font-weight: 500;
					font-size: 30rpx;
					line-height: 36rpx;
					text-align: left;
					color: #AEAEAE;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
				}
			}
		}

		.title1 {
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 600;
			font-size: 32rpx;
			line-height: 44rpx;
			overflow: hidden; // 溢出隐藏
			white-space: nowrap; // 强制一行
			text-overflow: ellipsis; // 文字溢出显示省略号
			color: #E4C985;
		}

		.text1 {
			width: 620rpx;
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 400;
			font-size: 26rpx;
			line-height: 36rpx;
			color: #AEAEAE;
			white-space: pre-wrap; //识别换行符 并且超过父盒子宽度自动换行
		}

		.mb8 {
			margin-bottom: 8rpx;
		}

		.card1 {
			margin-top: 26rpx;
			background: #292929;
			border-radius: 8rpx;
			box-sizing: border-box;
			width: 702rpx;
			padding: 32rpx 16rpx;

			.card1-body {
				border: 1rpx solid #5B5B5B;
				border-radius: 8rpx;
				padding: 20rpx;

				.info {
					display: flex;
					align-items: center;
					padding-top: 8rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 26rpx;
					line-height: 36rpx;
					text-align: left;

					color: #AEAEAE;

					.info-1 {
						width: 154rpx;
					}

					.info-2 {
						flex: 1;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
					}
				}

				.mt32 {
					margin-top: 32rpx;
				}


			}
		}

		.card2 {
			margin-top: 24rpx;
			background: #292929;
			border-radius: 8rpx;
			box-sizing: border-box;
			width: 702rpx;
			padding: 32rpx 16rpx;

			.card2-body {
				border: 1rpx solid #5B5B5B;
				border-radius: 8rpx;
				padding: 20rpx;

				.author {
					display: flex;
					align-items: center;
					margin-top: 16rpx;


					image {
						width: 48rpx;
						height: 48rpx;
						margin-right: 8rpx;
						border-radius: 24rpx;
					}

					text {
						flex: 1;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 400;
						font-size: 26rpx;
						line-height: 36rpx;

						color: #AEAEAE;
					}
				}

				.text2 {
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
			}
		}

		.footer {
			height: 160rpx;
		}

		.bottom1 {
			z-index: 8;
			position: fixed;
			bottom: 0;
			left: 0;
			box-sizing: border-box;
			width: 100%;
			height: 120rpx;
			padding: 0 42rpx 0 64rpx;
			display: flex;
			align-items: center;
			background: #212121;

			.bottom1-1 {
				flex: 1;

				.bottom1-1-1 {
					width: 48rpx;
					height: 48rpx;
				}

				.bottom1-1-2 {
					width: 57.62rpx;
					text-align: center;
					font-family: 'PingFang HK';
					font-style: normal;
					font-weight: 400;
					line-height: 28rpx;
					font-size: 24rpx;
					transform-origin: 0 0;
					transform: scale(0.83);
				}

				.followed {
					color: #C8A964;
				}

				.unfollow {
					color: #777777;
				}
			}

			.bottom1-2 {
				width: 522rpx;
				height: 74rpx;

				.bottom1-status0 {
					width: 522rpx;
					height: 74rpx;
					background: #D10910;
					border-radius: 48rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 32rpx;
					line-height: 74rpx;
					text-align: center;
					color: #ECECEC;

					&:active {
						background-color: rgba(209, 9, 16, 0.6);
						color: rgba(134, 134, 134, 1);
					}
				}

				.bottom1-status1 {
					width: 522rpx;
					height: 74rpx;
					background: #D10910;
					border-radius: 48rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 32rpx;
					line-height: 74rpx;
					text-align: center;
					color: #ECECEC;

					&:active {
						background-color: rgba(209, 9, 16, 0.6);
						color: rgba(134, 134, 134, 1);
					}
				}

				.bottom1-status2 {
					width: 522rpx;
					height: 74rpx;
					background: #7C7C7C;
					border-radius: 48rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 32rpx;
					line-height: 74rpx;
					text-align: center;
					color: #ECECEC;

					&:active {}
				}
			}


		}

		/deep/.icon-close {
			font-size: 36rpx;
		}


		.popup-content {

			.popup-i {
				position: relative;
				display: flex;
				padding-top: 24rpx;
				padding-left: 28rpx;

				.i-img {
					position: relative;
					width: 148rpx;
					height: 148rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 20rpx;
					}

					.img-line {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						margin: auto;
						width: 135rpx;
						height: 135rpx;
						border: 0.6rpx solid rgba(255, 255, 255, 0.2);
						border-radius: 20rpx;
						background-color: transparent;
					}
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
						width: 480rpx;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号

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
						color: #D10910;

						.title-p-rmb {
							padding-left: 4rpx;
							font-weight: 600;
							font-size: 28rpx;
							color: #D10910;
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
							position: relative;
							width: 62rpx;
							height: 58rpx;
							border-radius: 16rpx 0 0 16rpx;

							.h {
								position: absolute;
								top: 0;
								left: 0;
								right: 0;
								bottom: 0;
								margin: auto;
								width: 32rpx;
								height: 2rpx;
								background-color: #686868;
							}
						}

						// &:active .minus-img .h {
						// 	background-color: #E8E8E8;
						// }

					}

					uni-input.countc {
						flex: 1;
						height: 58rpx;
						text-align: center;
						font-size: 36rpx;
						font-weight: 600;
						color: #D10910;
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
							position: relative;
							width: 62rpx;
							height: 58rpx;
							border-radius: 0 16rpx 16rpx 0;

							.h {
								position: absolute;
								top: 0;
								left: 0;
								right: 0;
								bottom: 0;
								margin: auto;
								width: 32rpx;
								height: 2rpx;
								background-color: #686868;
							}

							.v {
								position: absolute;
								top: 0;
								left: 0;
								right: 0;
								bottom: 0;
								margin: auto;
								width: 2rpx;
								height: 32rpx;
								background-color: #686868;
							}
						}

						// &:active .plus-img .h,
						// &:active .plus-img .v {
						// 	background-color: #E8E8E8;
						// }
					}

					.active-icon {
						background-color: #E8E8E8 !important;
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
						font-weight: 600;
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
