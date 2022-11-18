<template>
	<!-- 预购专辑详情 -->
	<view class="container">
		<!-- <view class="nav">
			<image @tap="handleBack()" class="nav-left" src="../../static/navLeft.png" mode=""></image>
		</view> -->
		<cu-head></cu-head>
		<view class="preOrderDetails-header">
			<view class="cover">
				<div class="cover-content">
					<image class="cover-img" src="../../static/image-7 1-1.png"></image>
					<image class="cover-turn" src="../../static/turn.png" mode=""></image>
					<image class="cover-turn1" :src="data.index_img" mode=""></image>
					<!-- <image class="cover-play" src="../../static/Frame 62.png" mode=""></image> -->
				</div>

			</view>
			<view class="row1">
				<image v-if="data.rare_type==='SSR'" src="../../static/SSR.png" mode=""></image>
				<image v-else-if="data.rare_type==='UR'" src="../../static/UR.png" mode=""></image>
				<image v-else-if="data.rare_type==='R'" src="../../static/R.png" mode=""></image>
				<image v-else-if="data.rare_type==='N'" src="../../static/N.png" mode=""></image>
				<image v-else-if="data.rare_type==='SR'" src="../../static/SR.png" mode=""></image>
				{{data.name}}
			</view>
			<view class="row2">
				{{data.sale_time1}}&nbsp;{{data.sale_status===0?'未开售':(data.sale_status===1?'开售中':'已停售')}}
				<text>限量{{data.stock_num_desc}}张</text>
			</view>
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
							<text class="row2-1-r">{{data.stock_num_desc}}张</text>
						</view>
						<view class="row2-1">
							<text class="row2-1-l">发行方</text>
							<text class="row2-1-r">{{data.publish_author}}</text>
						</view>
						<view class="row2-1">
							<text class="row2-1-l">发行时间</text>
							<text class="row2-1-r">{{data.publish_time1}}</text>
						</view>
					</view>
					<view class="row3">
						购买须知
					</view>
					<view class="row4" v-html="data.buy_notice">
						<!-- 1.用户点击“购买”后2分钟内未付款，则订单将自动取消。专辑一经售卖，概不退货
						<br />
						2.专辑的版权由发行方、原创者所有，用户不得将其用于任何商业用途。
						<br />
						3.最终解释权归官方所有。 -->
					</view>
				</view>
			</view>
			<view class="card cardbox2">
				<view class="card-body">
					<view class="work" v-show="data.introduction">
						<view class="row1">专辑介绍</view>
						<view class="row2" v-html="data.introduction"></view>
					</view>
					<view class="work" v-for="(item,idx) in data.music_list" :key="idx">
						<view class="row1">{{item.name}}</view>
						<view class="row2" v-html="item.desc">
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
			<view v-if="data.is_halt===2" class="footer-btn gray-btn" @tap="handOrLogin(3)">已停售</view>
			<view v-else-if="data.is_halt===1&&data.sale_status===0" class="footer-btn noactive" @tap="handOrLogin(0)">
				{{countDown}}
			</view>
			<view v-else-if="data.is_halt===1&&data.sale_status===1" class="footer-btn" @tap="$refs.popup.show()">立即抢购
			</view>
			<view v-else-if="data.is_halt===1&&data.sale_status===2" class="footer-btn gray-btn" @tap="handOrLogin(2)">
				已售罄</view>

		</view>
		<wyb-popup ref="popup" type="bottom" height="701" width="750" radius="6" bgColor="#1D1D1D"
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
					<text>购买专辑可以永久聆听</text>
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
	import CuHead from '../../components/cu-head.vue'
	import {
		h5_collections_index_info,
		h5_collections_user_if_approve,
		h5_conllections_buy_checkout,
		collections_index_visit,
		collections_index_detail
	} from '../../request/api.js'
	import {
		post1
	} from '../../request/index.js'
	import {
		getTimeData,
		goLogin
	} from '../../utils/index.js'
	export default {
		components: {
			WybPopup,
			CuHead
		},
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
					sale_time1: ''
				},
				count: 1,
				statusTimer: null,
				countDown: ''
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
				if (currentRoutes.length === 1) {
					if (this.$store.state.user.token) {
						uni.redirectTo({
							url: '/pages/index/index'
						})

					} else {
						goLogin()
					}

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
				uni.navigateTo({
					url: `/pages/poster/poster?product_item_id=${this.product_item_id}&product_type=2`
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
						const params = JSON.stringify(res.data.info)
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
								url: `/pages/settlement/settlement?product_item_id=${this.product_item_id}&buy_num=${this.count}&params=${params}`
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
			// 访问统计
			async visitStatics() {
				const res = await post1(collections_index_visit, {
					product_item_id: this.product_item_id
				})
			}
		},
		onLoad(option) {
			console.log('onload', option)
			this.product_item_id = Number(option.product_item_id)
			this.share_sign = option.share_sign || ''
			this.getDetails(this.product_item_id)
			this.visitStatics()
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

					.cover-turn1 {
						z-index: 2;
						position: absolute;
						top: 84.5rpx;
						left: 84.5rpx;
						transform-origin: 50% 50%;
						width: 206rpx;
						height: 206rpx;
						border-radius: 103rpx;
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
				// display: flex;
				// align-items: center;
				// justify-content: center;
				// width: 100%;
				margin-top: 25rpx;
				font-weight: 500;
				font-size: 36rpx;
				text-align: center;
				color: #ECECEC;
				overflow: hidden; // 溢出隐藏
				white-space: nowrap; // 强制一行
				text-overflow: ellipsis; // 文字溢出显示省略号

				image {
					width: 84rpx;
					height: 40rpx;
					margin-right: 4rpx;
					vertical-align: middle;
				}


			}

			.row2 {
				margin-top: 9rpx;
				font-size: 26rpx;
				color: #AEAEAE;
				overflow: hidden; // 溢出隐藏
				white-space: nowrap; // 强制一行
				text-overflow: ellipsis; // 文字溢出显示省略号

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
					font-weight: 600;
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
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
						color: #AEAEAE;

						.row2-1-l {
							margin-right: 24rpx;
							width: 104rpx;
							text-align: right;
						}

						.row2-1-r {
							overflow: hidden; // 溢出隐藏
							white-space: nowrap; // 强制一行
							text-overflow: ellipsis; // 文字溢出显示省略号
						}
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
					width: 100%;
					font-size: 26rpx;
					line-height: 36rpx;
					color: #AEAEAE;
					white-space: pre-wrap; //识别换行符 并且超过父盒子宽度自动换行
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
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
					}

					.row2 {
						padding-bottom: 24rpx;
						font-size: 26rpx;
						line-height: 36rpx;
						color: #AEAEAE;
						white-space: pre-wrap;
					}

					.row2:nth-last-child(1) {
						padding-bottom: 24rpx;
					}
				}

			}
		}

		.h120 {
			height: 120rpx;
		}

		.preOrderDetails-footer {
			z-index: 8;
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

			.noactive {
				background: #D10910 !important;
				color: #ECECEC !important;
			}

			.gray-btn {
				background: #7C7C7C;

				&:active {
					background: #7C7C7C;
					color: #ECECEC;
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
