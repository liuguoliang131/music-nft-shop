<template>
	<view class="container">
		<nav-head title="数字音乐"></nav-head>
		<view class="empty" :style="{height:$store.state.publicState.remainingHeight}" v-if="isFinish&&list.length===0">
			<view class="empty-center">
				<image src="https://file.yuanyinfu.com/front-end-lib/emptybox.png" mode="" class="empty-img"></image>
				<view class="empty-text">空空如也</view>
			</view>
		</view>
		<my-scroll v-else class="list" @load="getList" :isFinish="isFinish" :loading="loading">
			<view class="item" v-for="(item,idx) in list" :key="idx" @tap="handGo(item)">
				<view class="cover-content" v-if="item.publish_type===1">
					<image class="cover-img" src="https://file.yuanyinfu.com/front-end-lib/albumbg.png"></image>
					<image class="cover-turn" src="https://file.yuanyinfu.com/front-end-lib/turn.png" mode=""></image>
					<image class="cover-turn1" :src="item.index_img" mode=""></image>
					<template
						v-if="item.product_item_id===$store.state.publicState.appPlayState.product_item_id&&$store.state.publicState.appPlayState.whatType==='1'">
						<image class="cover-play" src="https://file.yuanyinfu.com/front-end-lib/pause.png" mode=""
							@tap.stop="handPlay(item)">
						</image>
					</template>
					<template v-else>
						<image class="cover-play" src="https://file.yuanyinfu.com/front-end-lib/play.png" mode=""
							@tap.stop="handPlay(item)">
						</image>
					</template>
				</view>
				<view class="cover-content" v-else>
					<image class="cover-img" src="https://file.yuanyinfu.com/front-end-lib/albumbg.png"></image>
					<image class="cover-turn" src="https://file.yuanyinfu.com/front-end-lib/turn.png" mode=""></image>
					<image class="cover-turn1" :src="item.index_img" mode=""></image>
				</view>
				<view class="item-row1">
					{{item.product_name}}
				</view>
				<view class="item-row2">
					<text class="item-row2-1">
						{{item.author_name}}
					</text>
					<text class="item-row2-2" v-show="!$store.state.publicState.isApprove">
						<text class="row2-2-unit">
							￥
						</text>
						<text class="row2-2-price">{{item.sale_price}}</text>
					</text>
				</view>
			</view>
		</my-scroll>
	</view>
</template>

<script>
	import NavHead from '../../components/navHead.vue'
	import MyScroll from '../../components/myScroll.vue'
	import {
		openAppPage
	} from '../../utils/index.js'
	import {
		collections_index_digitMusicList,
		collections_index_musicPlay,
		collections_index_play
	} from '../../request/api.js'
	import {
		post1
	} from '../../request/index.js'
	import Mixins from '../../mixins/index.js'
	export default {
		components: {
			NavHead,
			MyScroll
		},
		mixins: [Mixins],
		data() {
			return {
				isFinish: false,
				loading: false,
				page: 1,
				list: []
			};
		},
		methods: {
			mock(page) {
				return new Promise((resolve) => {
					setTimeout(() => {
						if (page > 10) {
							resolve({
								code: 0,
								msg: 'success',
								data: {

								}
							})
						} else {
							resolve({
								code: 0,
								msg: 'success',
								data: {
									list: [{
										name: 'giao',
										id: parseInt(Math.random() * Math.random() * 100)
									}, {
										name: 'giao1',
										id: parseInt(Math.random() * Math.random() * 100)
									}, {
										name: 'giao2',
										id: parseInt(Math.random() * Math.random() * 100)
									}, {
										name: 'giao3',
										id: parseInt(Math.random() * Math.random() * 100)
									}]
								}
							})
						}

					}, 1000)

				})
			},
			async getList() {
				try {
					// console.log('getlist')
					this.loading = true
					const res = await post1(collections_index_digitMusicList, {
						page: this.page++
					})
					// const res = await this.mock(this.page++)
					if (res.code !== 0) {
						this.isFinish = true
						this.loading = false
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					if (res.data.list && Array.isArray(res.data.list) && res.data.list.length) {

						if (this.page === 1) {
							this.list = res.data.list
						} else {
							this.list = [...this.list, ...res.data.list]
						}

					} else {
						this.isFinish = true
						this.page = this.page - 1
					}
					this.loading = false
				} catch (e) {
					this.isFinish = true
					this.loading = false
					console.log(e)
					throw e
					//TODO handle the exception
				}
			},
			handGo(item) {
				let url = '/pages/recommendedAlbumDetail/recommendedAlbumDetail?product_item_id=' + item.product_item_id
				uni.navigateTo({
					url
				})
			},
			async handPlay(item) {
				try {
					// const res = await this.$post(collections_index_musicPlay, {
					// 	product_item_id: item.product_item_id
					// })
					// if (res.code !== 0) {
					// 	return uni.showToast({
					// 		title: res.msg,
					// 		icon: 'none'
					// 	})
					// }
					// const res1 = await this.$post(collections_index_play, {
					// 	product_item_id: item.product_item_id
					// })
					let data = {
						"page": "musicPlayPage",
						"isNeedLogin": false,
						"params": {
							product_item_id: item.product_item_id
						}
					}
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
			// 从原生页面返回到当前页面时触发此方法  调用detail刷新页面数据
			onWatchState() {
				try {
					const that = this

					window.onPageAppear = function() {
						that.$store.dispatch('publicState/dispatch_appPlayState') //获取APP同步播放信息
					}
				} catch (e) {
					//TODO handle the exception
					throw e
				}


			}
		},
		onLoad() {

		},
		onReady() {
			this.onWatchState()
		},
		onShow() {
			this.$store.dispatch('publicState/dispatch_appPlayState') //获取APP同步播放信息
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;
		margin: 0;

		.empty {
			position: relative;
			box-sizing: border-box;
			padding: 0 32rpx 32rpx 32rpx;
			height: calc(100vh - 148rpx);
			text-align: center;
			overflow: hidden;
			padding-top: 300rpx;

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

		.list {
			width: 100vw;
			height: calc(100vh -88rpx);

			/deep/.scroll {
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


		}
	}
</style>
