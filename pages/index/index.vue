<template>
	<view class="container">
		<view class="container-header">
			<view v-if="userInfo" class="user-center" @click="handleClickUserCenter">
				<image class="avatar" :src="userInfo.avatar" mode=""></image>
				<text>{{userInfo.nick_name||userInfo.phone}}</text>
			</view>
			<view v-else class="user-center" @click="handleClickUserCenter">
				<image class="avatar" src="https://file.yuanyinfu.com/front-end-lib/userNotLogin.png" mode=""></image>
				<text>未登录</text>
			</view>
			<view>
				<image src="https://file.yuanyinfu.com/front-end-lib/logo-line.png" class="logo" mode=""></image>
			</view>
		</view>
		<my-tab :list="tabList" :activeBar="activeBar" @active="handActive" :slide="false"></my-tab>
		<view :class="['empty']" v-if="isFinish&&list.length===0">
			<view class="empty-center">
				<image src="https://file.yuanyinfu.com/front-end-lib/emptybox.png" mode="" class="empty-img"></image>
				<view class="empty-text">空空如也</view>
			</view>
		</view>
		<my-scroll v-else :class="['scroll-box']" :isFinish="isFinish" :loading="loading" @load="getList">
			<view class="list-content1" v-if="activeBar===1">
				<view class="item" v-for="(item,idx) in list" :key="idx" @tap="handGo(item)">
					<view class="item-1">
						<image class="item-1-sign" v-if="item.rare_type==='SSR'"
							src="https://file.yuanyinfu.com/front-end-lib/SSR.png" mode=""></image>
						<image class="item-1-sign" v-else-if="item.rare_type==='UR'"
							src="https://file.yuanyinfu.com/front-end-lib/UR.png" mode="">
						</image>
						<image class="item-1-sign" v-else-if="item.rare_type==='R'"
							src="https://file.yuanyinfu.com/front-end-lib/R.png" mode="">
						</image>
						<image class="item-1-sign" v-else-if="item.rare_type==='N'"
							src="https://file.yuanyinfu.com/front-end-lib/N.png" mode="">
						</image>
						<image class="item-1-sign" v-else-if="item.rare_type==='SR'"
							src="https://file.yuanyinfu.com/front-end-lib/SR.png" mode="">
						</image>
						<image class="item-1-out" :src="item.index_img" mode=""></image>
						<image class="item-1-in" src="https://file.yuanyinfu.com/front-end-lib/turn.png" mode="">
						</image>
					</view>
					<view class="item-2">
						<view class="item-2-1">
							{{item.product_name}}
						</view>
						<view class="item-2-2">
							<image class="item-2-2-1" :src="item.author_avatar" mode=""></image>
							<view class="item-2-2-2">
								{{item.author_name}}
							</view>
						</view>
						<view class="item-2-3">
							限量{{item.stock_num_desc}}份
						</view>
						<view class="item-2-4">
							<view class="item-2-4-1">
								￥{{item.sale_price}}
							</view>
							<view class="item-2-4-2" @tap.stop="handPlay(item)">
								<template
									v-if="item.product_item_id===$store.state.globalAudio.music.product_item_id&&$store.state.globalAudio.music.product_item_id">
									<image v-if="$store.state.globalAudio.paused"
										src="https://file.yuanyinfu.com/front-end-lib/play.png" mode=""></image>
									<image v-else src="https://file.yuanyinfu.com/front-end-lib/pause.png" mode="">
									</image>
								</template>
								<template v-else>
									<image src="https://file.yuanyinfu.com/front-end-lib/play.png" mode=""></image>
								</template>

								<text>立即试听</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="list-content2" v-else-if="activeBar===2">
				<view class="item" v-for="(item,idx) in list" :key="idx" @tap="handGo(item)">
					<view class="item-1">
						<image class="item-1-sign" v-if="item.rare_type==='SSR'"
							src="https://file.yuanyinfu.com/front-end-lib/SSR.png" mode=""></image>
						<image class="item-1-sign" v-else-if="item.rare_type==='UR'"
							src="https://file.yuanyinfu.com/front-end-lib/UR.png" mode="">
						</image>
						<image class="item-1-sign" v-else-if="item.rare_type==='R'"
							src="https://file.yuanyinfu.com/front-end-lib/R.png" mode="">
						</image>
						<image class="item-1-sign" v-else-if="item.rare_type==='N'"
							src="https://file.yuanyinfu.com/front-end-lib/N.png" mode="">
						</image>
						<image class="item-1-sign" v-else-if="item.rare_type==='SR'"
							src="https://file.yuanyinfu.com/front-end-lib/SR.png" mode="">
						</image>
						<image class="item-1-out" :src="item.index_img" mode=""></image>
						<image class="item-1-in" src="https://file.yuanyinfu.com/front-end-lib/turn.png" mode="">
						</image>
					</view>
					<view class="item-2">
						<view class="item-2-1">
							<view class="item-2-1-t">
								{{item.product_name}}
							</view>
							<view class="item-2-1-s">
								<text v-if="item.is_halt===2">已停售</text>
								<text v-else-if="item.sale_status===0">未开售</text>
								<text v-else-if="item.sale_status===1">开售中</text>
								<text v-else-if="item.sale_status===2">已售罄</text>
							</view>

						</view>
						<view class="item-2-3">
							{{filterTimes(item.sale_time*1000)}}发售
						</view>
						<view class="item-2-3">
							限量{{item.stock_num_desc}}份
						</view>
						<view class="item-2-4">
							<view class="item-2-4-1">
								￥{{item.sale_price}}
							</view>
							<view class="item-2-4-2" @tap="handGo(item)">
								<text>查看专辑</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="list-content3" v-else-if="activeBar===3">
				<view class="item" v-for="(item,idx) in list" :key="idx" @tap="handGo(item)">
					<view class="cover-content">
						<image class="cover-img" src="https://file.yuanyinfu.com/front-end-lib/albumbg.png"></image>
						<image class="cover-turn" src="https://file.yuanyinfu.com/front-end-lib/turn.png" mode="">
						</image>
						<image class="cover-turn1" :src="item.index_img" mode=""></image>

						<template
							v-if="item.product_item_id===$store.state.globalAudio.music.product_item_id&&$store.state.globalAudio.music.product_item_id">
							<image v-if="$store.state.globalAudio.paused" v-show="item.publish_type===1"
								class="cover-play" src="https://file.yuanyinfu.com/front-end-lib/play.png" mode=""
								@tap.stop="handPlay(item)">
							</image>
							<image v-else v-show="item.publish_type===1" class="cover-play"
								src="https://file.yuanyinfu.com/front-end-lib/pause.png" mode=""
								@tap.stop="handPlay(item)">
							</image>
						</template>
						<template v-else>
							<image v-show="item.publish_type===1" class="cover-play"
								src="https://file.yuanyinfu.com/front-end-lib/play.png" mode=""
								@tap.stop="handPlay(item)"></image>
						</template>
					</view>
					<view class="item-row1">
						{{item.product_name}}
					</view>
					<view class="item-row2">
						<text class="item-row2-1">
							{{item.author_name}}
						</text>
						<text class="item-row2-2">
							<text class="row2-2-unit">
								￥
							</text>
							<text class="row2-2-price">{{item.sale_price}}</text>
						</text>
					</view>
				</view>
			</view>
		</my-scroll>
		<view class="container-bottom" v-if="!isLogin">
			<view class="need-login">
				<text>元音符-原创音乐聚集地</text>
				<button class="to-login" @tap="handLogin()">登录</button>
				<text class="cuIcon-close close-btn" style="" @click="handleCloseLogintag"></text>
			</view>
		</view>
		<floating-component v-if="$store.state.globalAudio.show">
			<GlobalAudio></GlobalAudio>
		</floating-component>
	</view>
</template>

<script>
	import MyTab from '../../components/myTab.vue'
	import NavHead from '../../components/navHead.vue'
	import MyScroll from '../../components/myScroll.vue'
	import MyAudio from '../../components/my-audio/my-audio.vue'
	import FloatingComponent from '../../components/floatingComponent.vue'
	import {
		post,
		post1
	} from '@/request/index.js'
	import {
		h5_collections_index_albumMusicList, //专辑
		h5_collections_index_singleMusicList, //单曲
		h5_collections_index_digitMusicList, //数字音乐
		collections_index_musicPlay,
		collections_index_play
	} from '@/request/api.js'
	import config from '../../utils/uniKey.js'
	import {
		filterTime,
		getTimeData,
		goLogin,
		openAppPage
	} from '../../utils/index.js'
	import dayjs from 'dayjs'
	export default {
		components: {
			MyTab,
			NavHead,
			MyScroll,
			FloatingComponent,
			MyAudio
		},
		data() {
			return {
				isLogin: true,
				tabList: [{
						name: '黄金单曲',
						id: 1,
						activeNav: 0,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					},
					{
						name: '黄金专辑',
						id: 2,
						activeNav: 0,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					}, {
						name: '数字音乐',
						id: 3,
						activeNav: 0,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					}

				],
				activeBar: 1,
				isFinish: false,
				loading: false,
				list: [],
				loginFlag: true,
				order: 1,
				page: 1,
				list: [],
				userInfo: {
					avatar: '',
					nick_name: ''
				},
				timer: null
			}
		},
		onLoad() {

		},
		onHide() {
			console.log('index hide')
			const init = {
				...this.$store.state.publicState.music,
				show: false
			}
			this.$store.commit('publicState/set_music', init)

		},
		filters: {
			filterStatus(e) {
				const list = {
					0: '未开售',
					1: '开售中',
					2: '已售罄'
				}
				return list[e] || '已售罄'
			}
		},
		methods: {
			filterTimes(e) {
				return dayjs(e).format('MM月DD日 HH:mm')
			},
			initParams() {
				this.list = []
				this.page = 1
				this.loading = false
				this.isFinish = false
			},
			handActive(id) {
				if (id === this.activeBar) return false
				this.activeBar = id
				this.initParams()
				this.getList()
			},
			filterTime1(e) {
				const date = getTimeData(e)
				return `${date.mon}月${date.dd}日 ${date.hh}:${date.MM}`
			},
			getList() {
				if (this.activeBar === 1) {
					this.getSingles()
				} else if (this.activeBar === 2) {
					this.getAlbum()
				} else if (this.activeBar === 3) {
					this.getDigital()
				}
			},
			async getSingles() {
				try {
					this.loading = true
					const res = await post1(h5_collections_index_singleMusicList, {
						page: this.page++
					})

					if (res.code !== 0) {
						this.isFinish = true
						this.loading = false
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					this.loginFlag = !!res.data.is_login
					if (res.data.list && Array.isArray(res.data.list) && res.data.list.length) {

						this.list = [...this.list, ...res.data.list]

					} else {
						this.isFinish = true
						this.page = this.page - 1
					}
					this.loading = false
				} catch (e) {
					//TODO handle the exception
					this.loading = false
					this.isFinish = true
				}
			},
			async getAlbum() {
				try {
					this.loading = true
					const res = await post1(h5_collections_index_albumMusicList, {
						page: this.page++
					})

					if (res.code !== 0) {
						this.isFinish = true
						this.loading = false
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					if (res.data.list && Array.isArray(res.data.list) && res.data.list.length) {

						this.list = [...this.list, ...res.data.list]

					} else {
						this.isFinish = true
						this.page = this.page - 1
					}
					this.loading = false
				} catch (e) {
					//TODO handle the exception
					this.loading = false
					this.isFinish = true
				}
			},
			async getDigital() {
				try {
					this.loading = true
					const res = await post1(h5_collections_index_digitMusicList, {
						page: this.page++
					})

					if (res.code !== 0) {
						this.isFinish = true
						this.loading = false
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					this.loginFlag = !!res.data.is_login
					if (res.data.list && Array.isArray(res.data.list) && res.data.list.length) {

						this.list = [...this.list, ...res.data.list]

					} else {
						this.isFinish = true
						this.page = this.page - 1
					}
					this.loading = false
				} catch (e) {
					//TODO handle the exception
					this.loading = false
					this.isFinish = true
				}
			},
			handleClickUserCenter() {
				if (this.$store.state.user.token) {
					uni.navigateTo({
						url: '/pages/mine/mine'
					})
				} else {
					this.handLogin()
				}
			},
			handleChangeOrder() {
				this.order = this.order === 1 ? 2 : 1
				this.getList()
			},
			handleCloseLogintag() {
				this.isLogin = true
			},
			handleScrollTolower() {
				if (window.requestAnimationFrame && typeof window.requestAnimationFrame === 'function') {
					window.requestAnimationFrame(() => {
						this.page++
						this.getList()
					})
				} else {
					setTimeout(() => {
						this.page++
						this.getList()
					}, 17)
				}
			},
			// 去往详情
			handViewDetail(item) {
				if (!this.$store.state.user.token) {
					this.handLogin()
				} else {
					uni.navigateTo({
						url: `/pages/preOrderDetails/preOrderDetails?product_item_id=${item.product_item_id}`
					})
				}

			},
			// 去往登录
			handLogin() {

				goLogin()
			},
			async handGo(item) {
				if (!this.$store.state.user.token) {
					return this.handLogin()
				}

				if (this.activeBar === 1) {
					uni.navigateTo({
						url: `/pages/goldSinglesDetail/goldSinglesDetail?product_item_id=${item.product_item_id}`
					})
				} else if (this.activeBar === 2) {
					uni.navigateTo({
						url: `/pages/preOrderDetails/preOrderDetails?product_item_id=${item.product_item_id}`
					})
				} else if (this.activeBar === 3) {
					uni.navigateTo({
						url: `/pages/recommendedAlbumDetail/recommendedAlbumDetail?product_item_id=${item.product_item_id}`
					})
				}

			},
			async handPlay(item) {
				try {
					if (!this.$store.state.user.token) {
						return this.handLogin()
					}

					if (this.$store.state.user.inApp) {
						await post1(collections_index_play, {
							product_item_id: item.product_item_id
						})
						let data = {
							"page": "musicPlayPage",
							"isNeedLogin": false,
							"params": {
								product_item_id: item.product_item_id
							}
						}
						openAppPage(data)
					} else {
						if (this.$store.state.globalAudio.music.product_item_id === item.product_item_id) {
							this.$store.dispatch('globalAudio/dispatch_play')
							return false
						}
						await post1(collections_index_play, {
							product_item_id: item.product_item_id
						})
						const res = await this.$post(collections_index_musicPlay, {
							product_item_id: item.product_item_id
						})
						if (res.code !== 0) {
							return uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}
						const musicInfo = res.data
						this.$store.dispatch('globalAudio/dispatch_music', musicInfo)

					}

				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'none'
					})
					throw e
				}
			}
		},
		onShow() {
			this.userInfo = JSON.parse(JSON.stringify(this.$store.state.user.userInfo))
			this.isLogin = !!this.$store.state.user.token
			uni.$on('updateData', (data) => {
				this.initParams()
				this.getList()
			})
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 0;
		height: 100vh;

		.container-header {
			padding-left: 25rpx;
			padding-right: 25rpx;
		}

		.user-center {
			display: flex;
			align-items: center;

			.avatar {
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
			}

			text {
				margin-left: 20rpx;
				font-size: 24rpx;
				color: #f5f5f5;
			}
		}

		.upAndDown {
			display: flex;
			align-items: center;
			flex-direction: column;
			height: 40rpx;
			font-size: 32rpx;
		}

		.tag {
			border: 1rpx solid #434343;
			border-radius: 40rpx;
			padding: 10rpx;
			display: flex;
			align-items: center;

			image {
				width: 43rpx;
				height: 43rpx;
				border-radius: 50%;
			}

			text {
				margin-left: 20rpx;
				font-size: 24rpx;
				color: #f5f5f5;
			}
		}

		.search-bar {
			font-size: 24rpx;
			display: flex;
			align-items: center;
		}

		/deep/.bar {
			padding: 0 80rpx;
		}

		.empty {
			position: relative;
			box-sizing: border-box;
			padding: 0 32rpx 32rpx 32rpx;
			height: calc(100vh - 214rpx);
			text-align: center;
			overflow: hidden;
			padding-top: 300rpx;
			width: 750rpx;

			.empty-center {
				.empty-img {
					width: 120rpx;
					height: 120rpx;
				}

				.empty-text {
					margin-top: 44rpx;
					font-size: 24rpx;
					line-height: 34rpx;
					/* identical to box height */

					text-align: center;

					color: #CDCDCD;
				}
			}

		}

		.scroll-box {
			height: calc(100vh - 214rpx);

			/deep/.footer {
				height: 142rpx;
			}
		}

		.list-content1 {
			.item {
				display: flex;
				box-sizing: border-box;
				width: 702rpx;
				height: 270rpx;
				background: #292929;
				border-radius: 16rpx;
				margin: auto;
				margin-top: 20rpx;

				.item-1 {
					position: relative;
					width: 270rpx;
					height: 270rpx;

					.item-1-sign {
						z-index: 2;
						position: absolute;
						top: 0;
						left: 0;
						width: 84rpx;
						height: 40rpx;
					}

					.item-1-out {
						z-index: 1;
						position: absolute;
						top: 0;
						left: 0;
						width: 270rpx;
						height: 270rpx;
						border-radius: 16rpx;
					}

					.item-1-in {
						z-index: 0;
						position: relative;
						left: 28rpx;
						top: 4.34rpx;
						width: 259.5rpx;
						height: 259.5rpx;

					}
				}

				.item-2 {
					width: 380rpx;
					margin-left: 32rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 32rpx;
					line-height: 44rpx;

					color: #DDDDDD;

					.item-2-1 {
						margin-top: 16rpx;
						font-weight: 600;
						font-size: 32rpx;
						line-height: 44rpx;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
						color: #DDDDDD;
					}

					.item-2-2 {
						display: flex;
						align-items: center;
						line-height: 0;
						vertical-align: middle;
						margin-top: 8rpx;

						.item-2-2-1 {
							width: 40rpx;
							height: 40rpx;
							border-radius: 20rpx;
						}

						.item-2-2-2 {
							flex: 1;

							padding-left: 8rpx;
							font-weight: 400;
							font-size: 28rpx;
							line-height: 40rpx;
							/* identical to box height */


							color: #AEAEAE;
							overflow: hidden; // 溢出隐藏
							white-space: nowrap; // 强制一行
							text-overflow: ellipsis; // 文字溢出显示省略号
						}
					}

					.item-2-3 {
						margin-top: 16rpx;
						font-weight: 400;
						font-size: 28rpx;
						line-height: 40rpx;
						/* identical to box height */
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号

						color: #AEAEAE;
					}

					.item-2-4 {
						margin-top: 46rpx;
						display: flex;
						align-items: center;

						.item-2-4-1 {
							flex: 1;
							font-family: 'PingFang SC';
							font-style: normal;
							font-weight: 600;
							font-size: 32rpx;
							line-height: 44rpx;

							color: #AEAEAE;
						}

						.item-2-4-2 {
							display: flex;
							align-items: center;
							width: 182rpx;
							height: 48rpx;
							border-radius: 24rpx;
							background: linear-gradient(92.75deg, #F4C85F 53.95%, #FFEBBC 151.4%);

							image {
								width: 36rpx;
								height: 36rpx;
								margin-left: 6rpx;
								margin-right: 8rpx;
							}

							text {
								font-weight: 500;
								font-size: 28rpx;
								/* identical to box height */

								text-align: center;

								color: #744B0D;
							}
						}
					}
				}

			}
		}

		.list-content2 {
			.item {
				display: flex;
				box-sizing: border-box;
				width: 702rpx;
				height: 270rpx;
				background: #292929;
				border-radius: 16rpx;
				margin: auto;
				margin-top: 20rpx;

				.item-1 {
					position: relative;
					width: 270rpx;
					height: 270rpx;

					.item-1-sign {
						z-index: 2;
						position: absolute;
						top: 0;
						left: 0;
						width: 84rpx;
						height: 40rpx;
					}

					.item-1-out {
						z-index: 1;
						position: absolute;
						top: 0;
						left: 0;
						width: 270rpx;
						height: 270rpx;
						border-radius: 16rpx;
					}

					.item-1-in {
						z-index: 0;
						position: relative;
						left: 28rpx;
						top: 4.34rpx;
						width: 259.5rpx;
						height: 259.5rpx;

					}
				}

				.item-2 {
					width: 380rpx;
					margin-left: 32rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 32rpx;
					line-height: 44rpx;

					color: #DDDDDD;

					.item-2-1 {
						display: flex;
						margin-top: 16rpx;
						font-weight: 600;
						font-size: 32rpx;
						line-height: 44rpx;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
						color: #DDDDDD;

						.item-2-1-t {
							flex: 1;
							overflow: hidden; // 溢出隐藏
							white-space: nowrap; // 强制一行
							text-overflow: ellipsis; // 文字溢出显示省略号
						}

						.item-2-1-s {
							font-size: 24rpx;
							color: #F4C85F;
							font-weight: 400;
						}
					}

					.item-2-2 {
						display: flex;
						align-items: center;
						line-height: 0;
						vertical-align: middle;
						margin-top: 8rpx;

						.item-2-2-1 {
							width: 40rpx;
							height: 40rpx;
							border-radius: 20rpx;
						}

						.item-2-2-2 {
							flex: 1;

							padding-left: 8rpx;
							font-weight: 400;
							font-size: 28rpx;
							line-height: 40rpx;
							/* identical to box height */


							color: #AEAEAE;
							overflow: hidden; // 溢出隐藏
							white-space: nowrap; // 强制一行
							text-overflow: ellipsis; // 文字溢出显示省略号
						}
					}

					.item-2-3 {
						margin-top: 8rpx;
						font-weight: 400;
						font-size: 28rpx;
						line-height: 40rpx;
						/* identical to box height */


						color: #AEAEAE;
					}

					.item-2-4 {
						margin-top: 46rpx;
						display: flex;
						align-items: center;

						.item-2-4-1 {
							flex: 1;
							font-family: 'PingFang SC';
							font-style: normal;
							font-weight: 600;
							font-size: 32rpx;
							line-height: 44rpx;

							color: #AEAEAE;
						}

						.item-2-4-2 {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 208rpx;
							height: 48rpx;
							border-radius: 24rpx;
							background: linear-gradient(92.75deg, #F4C85F 53.95%, #FFEBBC 151.4%);

							text {
								font-weight: 500;
								font-size: 28rpx;
								/* identical to box height */

								text-align: center;

								color: #744B0D;
							}
						}
					}
				}

			}
		}

		.list-content3 {
			display: flex;
			flex-wrap: wrap;

			.item {
				box-sizing: border-box;
				width: 346rpx;
				height: 448rpx;
				border: 1rpx solid #5F5F5F;
				border-radius: 20rpx;
				margin-top: 20rpx;
				margin-left: 20rpx;

				.cover-content {
					position: relative;
					width: 304rpx;
					height: 304rpx;
					margin: auto;
					margin-top: 20rpx;

					.cover-img {
						width: 100%;
						height: 100%;
					}

					.cover-turn {
						z-index: 1;
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						margin: auto;
						transform-origin: 50% 50%;
						width: 279rpx;
						height: 279rpx;
						// animation: 3.7s turning linear infinite;
					}

					.cover-turn1 {
						z-index: 2;
						position: absolute;
						top: 0;
						left: 0;
						bottom: 0;
						right: 0;
						margin: auto;
						transform-origin: 50% 50%;
						width: 180rpx;
						height: 180rpx;
						border-radius: 90rpx;
						// animation: 3.7s turning linear infinite;
					}

					.cover-play {
						z-index: 2;
						position: absolute;
						top: 0;
						left: 0;
						bottom: 0;
						right: 0;
						margin: auto;
						width: 63.36rpx;
						height: 63.36rpx;
						border-radius: 31.68rpx;
					}

				}

				.item-row1 {
					width: 344rpx;
					padding-top: 16rpx;
					text-indent: 20rpx;
					margin: auto;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 600;
					font-size: 28rpx;
					line-height: 40rpx;
					color: #DDDDDD;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号

				}

				.item-row2 {
					display: flex;
					width: 344rpx;
					padding-top: 12rpx;
					margin: auto;

					.item-row2-1 {
						width: 50%;
						text-indent: 20rpx;
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 400;
						font-size: 24rpx;
						line-height: 34rpx;
						color: #AEAEAE;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
					}

					.item-row2-2 {
						box-sizing: border-box;
						width: 50%;
						text-align: right;
						padding-right: 16rpx;
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 400;
						font-size: 24rpx;
						line-height: 34rpx;
						color: #D10910;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号

						.row2-2-unit {}

						.row2-2-price {
							font-family: 'PingFang SC';
							font-style: normal;
							font-weight: 600;
							font-size: 32rpx;
							line-height: 44rpx;

							color: #D10910;

						}
					}
				}
			}
		}


		.need-login {
			z-index: 12;
			position: fixed;
			bottom: 0rpx;
			left: 20rpx;
			right: 20rpx;
			background-color: #201A17;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 40rpx 10rpx 40rpx;
			border-radius: 30rpx 30rpx 0 0;
			height: 110rpx;
			-webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
			animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

			text {
				font-size: 32rpx;
				line-height: 44rpx;

				color: #ECECEC;
			}

			.to-login {
				padding: 0 60rpx;
				height: 80rpx;
				line-height: 80rpx;
				font-size: 32rpx;
				color: #ECECEC;
				background: #D10910;
				border-radius: 76rpx;

				.close-btn {
					font-size: 16rpx;
					color: #686868
				}
			}
		}

		@-webkit-keyframes slide-in-bottom {
			0% {
				-webkit-transform: translateY(1000px);
				transform: translateY(1000px);
				opacity: 0;
			}

			100% {
				-webkit-transform: translateY(0);
				transform: translateY(0);
				opacity: 1;
			}
		}

		@keyframes slide-in-bottom {
			0% {
				-webkit-transform: translateY(1000px);
				transform: translateY(1000px);
				opacity: 0;
			}

			100% {
				-webkit-transform: translateY(0);
				transform: translateY(0);
				opacity: 1;
			}
		}

		.logo {
			width: 154rpx;
			height: 48rpx;
		}
	}
</style>
