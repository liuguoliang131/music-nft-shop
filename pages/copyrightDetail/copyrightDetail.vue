<template>
	<view class="container">
		<view :class="$store.state.user.inApp?'slots':'web'">
			<view class="nav">
				<!-- <image @tap="navBack()" class="nav-left" src="https://file.yuanyinfu.com/front-end-lib/navLeft.png"
					mode=""></image> -->
				<text class="nav-center">
					<my-switch :options="options" :value.sync="switchValue" @change="switchChange"></my-switch>
				</text>
				<text class="nav-right">
					<image class="nav-r" src="https://file.yuanyinfu.com/front-end-lib/share1.png" mode=""
						@tap="handShare">
					</image>
				</text>
			</view>
		</view>

		<view v-if="switchValue===0" class="container-body">
			<view class="view1">
				<view class="view1-left">
					<image class="cover" :src="detail.music_pic" mode=""></image>
					<view class=" insideline">
						<template v-if="$store.state.globalAudio.music.music_info_id===music_info_id">
							<image class="play-btn" @tap="handPlay(detail)" v-if="$store.state.globalAudio.paused"
								src="https://file.yuanyinfu.com/front-end-lib/play.png" mode=""></image>
							<image class="play-btn" @tap="handPlay(detail)" v-else
								src="https://file.yuanyinfu.com/front-end-lib/pause.png" mode="">
							</image>
						</template>
						<template v-else>
							<image class="play-btn" @tap="handPlay(detail)"
								src="https://file.yuanyinfu.com/front-end-lib/play.png" mode=""></image>
						</template>

					</view>
					<image v-if="detail.sale_type===3" class="sign"
						src="https://file.yuanyinfu.com/front-end-lib/sharedCopyright.png" mode="">
					</image>
				</view>
				<view class="view1-right">
					<view class="right-1 nowrap">
						{{detail.music_name}}
					</view>
					<view class="right-2 nowrap">
						<view v-if="detail.music_status===7" class="right-2-1 nowrap">
							预告中
						</view>
						<view v-else class="right-2-2 nowrap">
							￥{{detail.music_price}}
						</view>
						<view class="right-2-3 nowrap">
							{{detail.limit_amount||''}}
						</view>
					</view>
					<view class="right-3">
						<view class="right-3-1 nowrap">
							<text>时长</text> {{formatMusicTime(detail.music_time)}}
						</view>
						<view class="right-3-2 nowrap">
							<text>访问</text> {{detail.visit_num}}
						</view>
					</view>
					<view class="right-4 nowrap">
						<text>发行时间</text>
						{{formatTime(detail.publish_time)}}
					</view>
				</view>
			</view>
			<view class="view2">
				<view class="view2-1">
					<view class="view2-1-1">Contract Address</view>
					<view class="view2-1-2 nowrap">
						{{detail.contract_address}}
					</view>
				</view>
				<view class="view2-1 nowrap">
					<view class="view2-1-1">Token ID</view>
					<view class="view2-1-2 nowrap">
						{{detail.token_id}}
					</view>
				</view>
				<view class="view2-1 nowrap">
					<view class="view2-1-1">Token Standard</view>
					<view class="view2-1-2 nowrap">
						{{detail.token_standard}}
					</view>
				</view>
			</view>
			<view class="splitline"></view>
			<view class="view3">
				<view class="title">
					<text class="title-v"></text>
					作品类型
				</view>
				<view class="paragraph" v-html="detail.type_desc"></view>
			</view>
			<view class="splitline"></view>
			<view class="view4">
				<view class="view4-1">
					<text class="nowrap">{{detail.author_name}}</text>
					<image @tap="desc_open=!desc_open" :class="[desc_open?'desc_open':'']"
						src="https://file.yuanyinfu.com/front-end-lib/stow.png" mode=""></image>
				</view>
				<view :class="['view4-2',desc_open?'autoheight':'']">
					<image class="view4-2-1" :src="detail.avatar" mode=""></image>
					<view class="view4-2-2 prewrap" v-html="detail.author_desc"></view>
				</view>
			</view>
			<view class="splitline"></view>
			<view class="view5">
				<view class="title">
					<text class="title-v"></text>
					创作灵感
				</view>
				<view class="paragraph prewrap" v-html="detail.create_desc"></view>
			</view>
			<view class="splitline"></view>
			<view class="view5">
				<view class="title">
					<text class="title-v"></text>
					购买须知
				</view>
				<view class="paragraph prewrap" v-html="detail.buy_notice"></view>
			</view>
			<view class="splitline"></view>
			<view class="view6" v-if="otherList.length">
				<view class="title">
					<text class="title-v"></text>
					其他作品
				</view>
				<view class="view6-item" v-for="item in otherList" :key="item.music_info_id" @tap="handGoDtail(item)">
					<view class="item-left">
						<image :src="item.music_pic" mode=""></image>
						<view class="insideline">
							<template v-if="$store.state.globalAudio.music.music_info_id===item.music_info_id">
								<image @tap.stop="handPlay(item)" v-if="$store.state.globalAudio.paused"
									class="play-btn" src="https://file.yuanyinfu.com/front-end-lib/play.png" mode="">
								</image>
								<image @tap.stop="handPlay(item)" v-else class="play-btn"
									src="https://file.yuanyinfu.com/front-end-lib/pause.png" mode="">
								</image>
							</template>
							<template v-else>
								<image @tap.stop="handPlay(item)" class="play-btn"
									src="https://file.yuanyinfu.com/front-end-lib/play.png" mode="">
								</image>
							</template>
						</view>
					</view>

					<view class="item-right">
						<view class="item-right-1 nowrap">
							{{item.music_name}}
						</view>
						<view class="item-right-2">
							<view class="item-right-2-1">
								<text>时长</text>{{formatMusicTime(item.music_time)}}
							</view>
							<view class="item-right-2-2 nowrap">
								￥{{item.price}}
							</view>

						</view>
					</view>
				</view>
				<view class="tiptext">
					当前艺术作品已通过国密技术进行加密
				</view>
			</view>
			<view class="footer"></view>
			<view class="bottom1 nowrap" v-if="detail.stock_desc">
				{{detail.stock_desc}}
			</view>
			<!-- 发售中 -->
			<view class="bottom2" v-if="detail.music_status===2">
				<view class="light" v-if="detail.is_sale===1" @tap="handGoDownload">购买</view>
				<view class="dark" v-else>已停售</view>
			</view>
			<!-- 预售中 -->
			<view class="bottom2 status6" v-else-if="detail.music_status==6">
				<view class="status6-2 nowrap" @tap="handGoDownload">
					<text
						class="status6-2-1 nowrap">{{detail.pre_sale_time_desc||(formatTime1(detail.pre_sale_time*1000)+'开售')}}</text>
					<text class="status6-2-2 nowrap">设置提醒</text>

				</view>
				<view class="light status6-1" v-if="detail.is_sale===1" @tap="handGoDownload">预约购买</view>
				<view class="dark status6-1" v-else @tap="handGoDownload">已停售</view>
			</view>
			<!-- 预告中 -->
			<view class="bottom2" v-else-if="detail.music_status==7">
				<view class="dark" @tap="handGoDownload">预告作品不可购买</view>
			</view>
			<view class="bottom2" v-else-if="detail.music_status==3">
				<view class="dark" @tap="handGoDownload">已售罄</view>
			</view>
			<view class="bottom2" v-else-if="detail.music_status==5">
				<view class="dark" @tap="handGoDownload">已下架</view>
			</view>
		</view>
		<view v-else class="transaction">
			<view class="trans1">
				<image class="trans1-1" :src="transactionInfo.owner_info.avatar" mode=""></image>
				<view class="trans1-2 nowrap">
					{{transactionInfo.owner_info.nick_name}}
				</view>
				<image class="trans1-3" src="https://file.yuanyinfu.com/front-end-lib/belongicon.png" mode=""></image>
			</view>
			<view class="bgcr">
				<view class="trans2" v-if="transactionInfo.trans_info&&transactionInfo.trans_info.length">
					<view class="title">
						<text class="title-v"></text>
						交易记录
					</view>
					<view class="trans2-item" v-for="(item,index) in transactionInfo.trans_info" :key="index">
						<view class="trans2-item-route">
							<image class="route-point" src="https://file.yuanyinfu.com/front-end-lib/transroute.png"
								mode=""></image>
							<view class="route-dashed" v-if="index+1!==transactionInfo.trans_info.length"></view>
						</view>
						<view class="trans2-item-content">
							<view class="item-content-0 nowrap">
								{{item.key}}
							</view>
							<image class="item-content-1" :src="item.avatar" mode="">
							</image>
							<view class="item-content-2 nowrap">
								{{item.name}}
							</view>
							<view class="item-content-3 nowrap">
								￥{{item.price}}
							</view>
							<view class="item-content-4">
								买入
							</view>
						</view>
					</view>
				</view>
				<view class="splitline" v-if="transactionInfo.trans_info&&transactionInfo.trans_info.length"></view>
				<view class="trans3">
					<view class="title">
						<text class="title-v"></text>
						作品数据
					</view>
					<view class="trans3-content">
						<view class="trans3-content-1">
							<view class="content-1-1 nowrap">
								{{transactionInfo.music_data.hot}}
							</view>
							<image class="content-1-2" src="https://file.yuanyinfu.com/front-end-lib/copyright-hot.png"
								mode=""></image>
						</view>
						<view class="trans3-content-2">
							<view class="content-1-1 nowrap">
								{{transactionInfo.music_data.play_num}}
							</view>
							<image class="content-1-2" src="https://file.yuanyinfu.com/front-end-lib/copyright-play.png"
								mode=""></image>
						</view>
						<view class="trans3-content-3">
							<view class="content-1-1 nowrap">
								{{transactionInfo.music_data.like_num}}
							</view>
							<image class="content-1-2"
								src="https://file.yuanyinfu.com/front-end-lib/copyright-likes.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="splitline"></view>
				<view class="trans4">
					<view class="title">
						<text class="title-v"></text>
						交易规则
					</view>
					<view class="paragraph" v-for="(role,idx) in transactionInfo.role" :key="idx" v-html="role"></view>
				</view>
			</view>

		</view>
		<view :class="[detail.stock_desc?'height350':'height292']" v-if="$store.state.globalAudio.show"></view>
		<floating-component :class="[detail.stock_desc?'fixed_b195':'fixed_b137']" v-if="$store.state.globalAudio.show">
			<GlobalAudio></GlobalAudio>
		</floating-component>
	</view>
</template>

<script>
	// 版权详情
	import {
		h5_show_musicInfo,
		h5_show_musicTransactionInfo,
		h5_show_otherMusicList,
		h5_show_musicPlay
	} from '../../request/api.js'
	import {
		post1
	} from '../../request/index.js'
	import MySwitch from '../../components/mySwitch.vue'
	import FloatingComponent from '../../components/floatingComponent.vue'
	import {
		goDownload,
		goLogin
	} from '../../utils/index.js'
	import dayjs from 'dayjs'
	export default {
		components: {
			MySwitch,
			FloatingComponent
		},
		data() {
			return {
				switchValue: 0,
				options: ['作品', '交易'],
				detail: {
					music_name: '',
					music_price: '',
					pre_buy_info: {

					},
					stock_desc: ''

				},
				otherList: [],
				desc_open: false, //作者介绍展开
				transactionInfo: {
					trans_info: [],
					role: [],
					owner_info: {
						nick_name: '',
						avatar: ''
					},
					music_data: {
						play_num: '-',
						like_num: '-',
						hot: '-'
					}
				},
				timer: null

			}
		},
		methods: {
			navBack() {

				let currentRoutes = getCurrentPages() // 获取当前打开过的页面路由数组
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
			formatTime(val) {
				return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
			},
			formatTime1(val) {
				return dayjs(val).format('MM月DD日 HH:mm')
			},
			formatMusicTime(val) {
				if (Number(val) === NaN) {
					return val
				} else {
					let m = parseInt(val / 60)
					let s = parseInt(val % 60)
					let mm = m < 10 ? `0${m}` : m
					let ss = s < 10 ? `0${s}` : s
					return `${mm}:${ss}`
				}
			},
			switchChange(val) {
				if (val === 0) {
					this.getMusicInfo()
				} else {
					this.getTransactionInfo()
				}
			},
			// 作品详情
			getMusicInfo() {
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				post1(h5_show_musicInfo, {
					music_info_id: this.music_info_id
				}).then(res => {
					if (res.code !== 0) {
						uni.hideLoading()
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					this.detail = Object.assign(this.detail, res.data.info)
					// 定时刷新页面
					this.setRefreshTime()

					this.getOthers()
				})
			},
			setRefreshTime() {
				if (this.timer) {
					clearTimeout(this.timer)
				}

				if (this.detail.music_status === 6) {
					this.timer = setInterval(() => {
						const date = Date.now()
						if (date >= this.detail.pre_sale_time * 1000 + 3000) {
							clearTimeout(this.timer)
							this.getMusicInfo()
						}
					}, 1000)
				}

			},
			// 交易详情
			getTransactionInfo() {
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				post1(h5_show_musicTransactionInfo, {
					music_info_id: this.music_info_id
				}).then(res => {
					if (res.code !== 0) {
						uni.hideLoading()
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					this.transactionInfo = Object.assign(this.transactionInfo, res.data)
					uni.hideLoading()
				})
			},
			// 其他作品
			getOthers() {
				post1(h5_show_otherMusicList, {
					music_info_id: this.music_info_id
				}).then(res => {
					if (res.code !== 0) {
						uni.hideLoading()
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					this.otherList = res.data.list || []
					uni.hideLoading()
				})
			},
			// 分享
			handShare() {
				uni.navigateTo({
					url: '/pages/posterCopyright/posterCopyright?music_info_id=' + this.music_info_id
				})
			},
			// 去下载页
			handGoDownload() {
				if (!this.$store.state.user.token) {
					return goLogin()
				}
				goDownload()
			},
			async handPlay(item) {
				if (!this.$store.state.user.token) {
					return goLogin()
				}
				try {

					if (this.$store.state.globalAudio.music.music_info_id === item.music_info_id) {
						this.$store.dispatch('globalAudio/dispatch_play')
						return false
					}

					// const res = await this.$post(h5_show_musicPlay, {
					// 	music_info_id: this.music_info_id
					// })
					// if (res.code !== 0) {
					// 	return uni.showToast({
					// 		title: res.msg,
					// 		icon: 'none'
					// 	})
					// }
					const musicInfo = item
					this.$store.dispatch('globalAudio/dispatch_music', musicInfo)

				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'none'
					})
					throw e
				}
			},
			handGoDtail(item) {

			}

		},
		onLoad(e) {
			this.music_info_id = e.music_info_id ? Number(e.music_info_id) : null
		},
		onShow() {
			this.getMusicInfo()
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;

		.slots {
			height: 148rpx;

			.nav {
				position: fixed;
				top: 0;
				left: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				padding-top: 60rpx;
				height: 88rpx;
				background-color: $uni-bg-color;
				z-index: 10;

				.nav-left {
					position: absolute;
					top: 80rpx;
					left: 28rpx;
					width: 48rpx;
					height: 48rpx;
				}

				.nav-center {
					width: 100%;
					height: 88rpx;
					color: #DDDDDD;
					font-size: 30rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					text-align: center;
					line-height: 88rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.nav-right {
					top: 80rpx;
					left: 28rpx;
					width: 48rpx;
					height: 48rpx;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}


		.web {
			height: 88rpx;

			.nav {
				position: fixed;
				top: 0;
				left: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 88rpx;
				background-color: #0D0D0D;
				z-index: 10;

				.nav-left {
					position: absolute;
					top: 20rpx;
					left: 28rpx;
					width: 48rpx;
					height: 48rpx;
				}

				.nav-center {
					width: 100%;
					height: 88rpx;
					color: #DDDDDD;
					font-size: 30rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					text-align: center;
					line-height: 88rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.nav-right {
					position: absolute;
					top: 0rpx;
					right: 28rpx;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					width: 48rpx;
					height: 88rpx;

					image {
						width: 48rpx;
						height: 48rpx;
					}
				}
			}
		}

		.fixed_b137 {
			bottom: 137rpx;
		}

		.fixed_b195 {
			bottom: 195rpx;
		}

		.height292 {
			height: 292rpx;
		}

		.height350 {
			height: 350rpx;
		}

		.container-body {
			text-align: center;

			.splitline {
				border-bottom: 0.5px solid rgba(174, 174, 174, 0.3);
				border-radius: 0.5px;
				margin: 32rpx;
			}

			.title {
				display: flex;
				align-items: center;
				padding: 0 38rpx 16rpx 38rpx;
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

			.paragraph {
				width: 646rpx;
				margin: auto;
				text-align: left;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 26rpx;
				line-height: 36rpx;
				color: #AEAEAE;
				white-space: pre-wrap; //识别换行符 并且超过父盒子宽度自动换行
			}


			.view1 {
				display: flex;
				padding: 48rpx 40rpx 0 40rpx;

				.view1-left {
					position: relative;
					width: 240rpx;
					height: 240rpx;
					text-align: center;

					.cover {
						width: 100%;
						height: 100%;
						border-radius: 20rpx;
					}

					.insideline {
						position: absolute;
						top: 0;
						left: 0;
						bottom: 0;
						right: 0;
						margin: auto;
						display: flex;
						align-items: center;
						justify-content: center;
						width: 220rpx;
						height: 220rpx;
						box-sizing: border-box;
						border: 1rpx solid rgba(255, 255, 255, 0.2);
						border-radius: 20rpx;

						.play-btn {
							width: 63.36rpx;
							height: 63.36rpx;
						}
					}

					.sign {
						position: absolute;
						left: 0;
						top: 0;
						width: 140rpx;
						height: 36rpx;
					}
				}

				.view1-right {
					margin-left: 38rpx;
					width: 392rpx;

					.right-1 {
						font-weight: 500;
						font-size: 28rpx;
						line-height: 40rpx;
						color: #DDDDDD;
						text-align: left;
					}

					.right-2 {
						display: flex;
						font-weight: 500;
						font-size: 24rpx;
						text-align: center;
						padding-top: 26rpx;

						.right-2-1 {
							box-sizing: border-box;
							width: 156rpx;
							height: 48rpx;
							padding: 0 10rpx;
							line-height: 48rpx;
							mix-blend-mode: normal;
							border: 1rpx solid #C8A964;
							border-radius: 24rpx;
							color: #C8A964;
						}

						.right-2-2 {
							box-sizing: border-box;
							min-width: 156rpx;
							height: 48rpx;
							padding: 0 10rpx;
							line-height: 48rpx;
							mix-blend-mode: normal;
							border-radius: 24rpx;
							background: rgba(220, 45, 30, 0.2);
							color: #DC2D1E;
							font-size: 28rpx;
						}

						.right-2-3 {
							box-sizing: border-box;
							min-width: 156rpx;
							height: 48rpx;
							padding: 0 10rpx;
							line-height: 48rpx;
							margin-left: 16rpx;
							mix-blend-mode: normal;
							border-radius: 24rpx;
							background: #B4985A;
							color: #FFFFFF;
						}
					}

					.right-3 {
						display: flex;
						padding-top: 24rpx;
						font-size: 26rpx;
						line-height: 36rpx;
						color: #AEAEAE;

						.right-3-1 {
							max-width: 168rpx;
							margin-right: 28rpx;

							text {
								margin-right: 24rpx;
								color: #777777;
							}

						}

						.right-3-2 {
							max-width: 196rpx;

							text {
								margin-right: 24rpx;
								color: #777777;
							}
						}

					}

					.right-4 {
						padding-top: 13rpx;
						color: #AEAEAE;
						font-size: 26rpx;
						line-height: 36rpx;
						text-align: left;

						text {
							margin-right: 24rpx;
							color: #777777;
						}

					}
				}
			}

			.view2 {
				padding-top: 26rpx;
				font-weight: 400;
				font-size: 26rpx;
				line-height: 36rpx;
				color: #AEAEAE;
				text-align: center;

				.view2-1 {
					display: flex;
					min-width: 0;
					width: 634rpx;
					margin: auto;
					margin-top: 8rpx;
					text-align: left;

					.view2-1-1 {
						color: #777777;
						width: 236rpx;
					}

					.view2-1-2 {
						flex: 1;
					}
				}
			}

			.view4 {
				.view4-1 {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 54rpx 0 200rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 28rpx;
					line-height: 40rpx;
					color: #ECECEC;
					min-width: 0;

					text {
						text-align: left;
						flex: 1;
					}

					image {
						width: 30rpx;
						height: 30rpx;
					}

					.desc_open {
						transform-origin: center;
						transform: rotate(180deg);
					}

				}

				.view4-2 {
					display: flex;
					justify-content: center;
					// align-items: center;
					margin: auto;
					margin-top: 12rpx;
					background: rgba(132, 115, 83, 0.2);
					mix-blend-mode: normal;
					border-radius: 16rpx;
					width: 670rpx;
					height: 156rpx;
					box-sizing: border-box;
					padding: 20rpx 0;

					.view4-2-1 {
						position: relative;
						top: -56.4rpx;
						width: 120rpx;
						height: 120rpx;
						border-radius: 60rpx
					}

					.view4-2-2 {
						width: 494rpx;
						height: 108rpx;
						margin-left: 16rpx;
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 400;
						font-size: 26rpx;
						line-height: 36rpx;
						color: #A7A9AC;
						text-align: left;
						display: -webkit-box;
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;

					}
				}

				.autoheight {
					height: auto;

					.view4-2-2 {
						height: auto;
						display: block;
						overflow: auto;
						text-overflow: auto;
					}
				}
			}

			.view6 {
				.view6-item {
					display: flex;
					border-bottom: 1rpx solid #343434;
					padding: 20rpx 32rpx;

					.item-left {
						position: relative;
						width: 160rpx;
						height: 160rpx;
						text-align: center;

						image {
							width: 100%;
							height: 100%;
							border-radius: 15rpx;
						}

						.insideline {
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							margin: auto;
							display: flex;
							align-items: center;
							justify-content: center;
							box-sizing: border-box;
							width: 147rpx;
							height: 147rpx;
							border-radius: 15rpx;
							border: 1rpx solid rgba(255, 255, 255, 0.2);

							.play-btn {
								width: 50rpx;
								height: 50rpx;
							}
						}
					}

					.item-right {
						flex: 1;
						min-width: 0;
						margin-left: 24rpx;

						.item-right-1 {
							font-weight: 500;
							font-size: 28rpx;
							line-height: 40rpx;
							color: #DDDDDD;
							text-align: left;
						}

						.item-right-2 {
							display: flex;
							align-items: center;
							justify-content: flex-start;
							padding-top: 20rpx;

							.item-right-2-1 {
								max-width: 168rpx;
								margin-right: 28rpx;
								font-size: 26rpx;
								line-height: 36rpx;
								color: #AEAEAE;

								text {
									margin-right: 24rpx;
									color: #777777;
								}
							}

							.item-right-2-2 {
								box-sizing: border-box;
								min-width: 156rpx;
								height: 48rpx;
								padding: 0 10rpx;
								margin-left: 20rpx;
								line-height: 48rpx;
								mix-blend-mode: normal;
								border-radius: 24rpx;
								background: rgba(220, 45, 30, 0.2);
								color: #DC2D1E;
								font-size: 28rpx;
							}

						}
					}
				}

				.tiptext {
					font-size: 24rpx;
					line-height: 80rpx;
					color: #777777;
				}
			}

			.footer {
				height: 220rpx;
			}

			.bottom1 {
				position: fixed;
				bottom: 138rpx;
				left: 0;
				width: 750rpx;
				height: 58rpx;
				background: rgba(162, 137, 81, 0.95);

				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 500;
				font-size: 30rpx;
				line-height: 58rpx;
				text-align: center;
				color: #FFFFFF;


			}

			.bottom2 {
				position: fixed;
				bottom: 0;
				left: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 750rpx;
				height: 138rpx;
				background: #0F0F10;

				.light {
					width: 686rpx;
					height: 96rpx;
					background: #D10910;
					border-radius: 48rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 32rpx;
					line-height: 96rpx;
					text-align: center;
					color: #ECECEC;
				}

				.dark {
					width: 686rpx;
					height: 96rpx;
					background: #7C7C7C;
					border-radius: 48rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 32rpx;
					line-height: 96rpx;
					text-align: center;
					color: #ECECEC;
				}
			}

			.status6 {
				justify-content: space-around;

				.status6-1 {
					width: 356rpx;
				}

				.status6-2 {
					width: 356rpx;
					height: 96rpx;
					background: #363636;
					border-radius: 48rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 32rpx;
					line-height: 96rpx;
					text-align: center;
					color: #ECECEC;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;

					.status6-2-1 {
						box-sizing: border-box;
						width: 100%;
						padding: 0 12rpx;
						font-weight: 500;
						font-size: 32rpx;
						color: #ECECEC;
						line-height: 48rpx;
						height: 48rpx;
					}

					.status6-2-2 {
						box-sizing: border-box;
						width: 100%;
						padding: 0 12rpx;
						height: 48rpx;
						font-weight: 500;
						font-size: 32rpx;
						color: #ECECEC;
						line-height: 48rpx;
					}
				}
			}
		}

		.transaction {
			line-height: 48rpx;
			mix-blend-mode: normal;
			font-size: 24rpx;

			.splitline {
				border-bottom: 0.5px solid rgba(174, 174, 174, 0.3);
				border-radius: 0.5px;
				margin: 32rpx 0;
			}

			.title {
				display: flex;
				align-items: center;
				padding: 0 38rpx 16rpx 38rpx;
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

			.paragraph {
				width: 646rpx;
				margin: auto;
				text-align: left;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 26rpx;
				line-height: 36rpx;
				color: #AEAEAE;
				white-space: pre-wrap; //识别换行符 并且超过父盒子宽度自动换行

			}

			.trans1 {
				display: flex;
				align-items: center;
				width: 750rpx;
				height: 200rpx;
				box-sizing: border-box;
				padding: 0 40rpx;
				min-width: 0;

				.trans1-1 {
					width: 120rpx;
					height: 120rpx;
					border-radius: 60rpx;
				}

				.trans1-2 {
					box-sizing: border-box;
					max-width: 440rpx;
					padding: 0 40rpx;
				}

				.trans1-3 {
					width: 106rpx;
					height: 30rpx;
				}
			}

			.bgcr {
				background-color: rgba(132, 115, 83, 0.2);
				border-radius: 20rpx 20rpx 0 0;
				padding: 32rpx 0;
			}

			.trans2 {
				.trans2-item {
					display: flex;
					box-sizing: border-box;
					padding: 0 32rpx;
					height: 140rpx;

					.trans2-item-route {
						width: 100rpx;
						text-align: center;
						// padding-top: 15rpx;

						.route-point {
							width: 20rpx;
							height: 20rpx;
							margin: auto;
						}

						.route-dashed {
							position: relative;
							left: -2rpx;
							width: 0;
							height: 82rpx;
							border-right: 4rpx dashed #E4C985;
							margin: 0 auto 0 auto;
						}
					}

					.trans2-item-content {
						display: flex;
						min-width: 0;
						height: 140rpx;

						.item-content-0 {
							max-width: 100rpx;
							margin-right: 20rpx;
						}

						.item-content-1 {
							width: 50rpx;
							height: 50rpx;
							border-radius: 25rpx;
							margin-right: 20rpx;
						}

						.item-content-2 {
							max-width: 190rpx;
							margin-right: 20rpx;
						}

						.item-content-3 {
							box-sizing: border-box;
							padding: 0 14rpx;
							max-width: 170rpx;
							height: 48rpx;
							line-height: 48rpx;
							mix-blend-mode: normal;
							border-radius: 24rpx;
							border: 1rpx solid #E4C985;
							color: #E4C985;
							font-size: 24rpx;
							margin-right: 20rpx;
						}

						.item-content-4 {}
					}
				}
			}

			.trans3 {
				.trans3-content {
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 25rpx 50rpx;
					text-align: center;
					font-size: 40rpx;
					font-weight: 600;

					.trans3-content-1 {
						flex: 1;
						min-width: 0;
						padding: 0 2rpx;

						.content-1-1 {
							padding-bottom: 20rpx;
						}

						.content-1-2 {
							width: 80rpx;
							height: 48rpx;
						}
					}

					.trans3-content-2 {
						flex: 1;
						min-width: 0;
						padding: 0 2rpx;

						.content-1-1 {
							padding-bottom: 20rpx;
						}

						.content-1-2 {
							width: 102rpx;
							height: 48rpx;
						}
					}

					.trans3-content-3 {
						flex: 1;
						min-width: 0;
						padding: 0 2rpx;

						.content-1-1 {
							padding-bottom: 20rpx;
						}

						.content-1-2 {
							width: 84rpx;
							height: 48rpx;
						}
					}
				}
			}
		}
	}
</style>
