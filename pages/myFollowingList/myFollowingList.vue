<template>
	<view class="container">
		<cu-head></cu-head>
		<view class="tabbar">
			<my-tab :list="tabList" @active="handActiveBar" :activeBar="activeBar" :slide="false"></my-tab>
			<view class="empty" v-if="isFinish&&list.length===0">
				<view class="empty-center">
					<image src="../../static/emptybox.png" mode="" class="empty-img"></image>
					<view class="empty-text">空空如也，请先去选购</view>
				</view>
			</view>
			<my-scroll v-else class="scroll-box" ref="myScroll" :isFinish="isFinish" :loading="loading" @load="getList">
				<view class="item" v-for="(item,idx) in list" :key="idx" @tap="handGo(item)">
					<view class="cover-content">
						<image class="cover-img" src="../../static/image-7 1-1.png"></image>
						<image class="cover-turn" src="../../static/turn.png" mode=""></image>
						<image class="cover-turn1" :src="item.index_img" mode=""></image>
						<image v-show="item.publish_type===1" class="cover-play" src="../../static/play.png" mode=""
							@tap.stop="handPlay(item)"></image>
						<!-- <image class="cover-play" src="../../static/pause.png" mode=""></image> -->
					</view>
					<view class="item-row1">
						{{item.name}}
					</view>
					<view class="item-row2">
						<text class="item-row2-1">
							{{item.singer}}
						</text>
						<text class="item-row2-2">
							<text class="row2-2-unit">
								￥
							</text>
							<text class="row2-2-price">{{item.price}}</text>
						</text>
					</view>
				</view>
			</my-scroll>
		</view>
	</view>
</template>

<script>
	import NavHead from '../../components/navHead.vue'
	import MyTab from '../../components/myTab.vue'
	import MyScroll from '../../components/myScroll.vue'
	import {
		h5_collections_user_likeList,
		collections_index_musicPlay,
		collections_index_play
	} from '../../request/api.js'
	import {
		post1
	} from '../../request/index.js'
	import {
		openAppPage
	} from '../../utils/index.js'
	export default {
		components: {
			NavHead,
			MyTab,
			MyScroll
		},
		data() {
			return {
				tabList: [{
						name: '数字音乐',
						id: 3,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					},
					{
						name: '黄金单曲',
						id: 1,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					},
					{
						name: '黄金专辑',
						id: 2,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					}

				],
				activeBar: 3,
				isFinish: false,
				loading: false,
				page: 1,
				list: []
			};
		},
		methods: {
			handActiveBar(id) {
				if (id === this.activeBar) return false
				this.list = []
				this.activeBar = id
				this.isFinish = false
				this.page = 1
				this.getList()
			},

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
									// list: [{
									// 	name: 'giao',
									// 	id: parseInt(Math.random() * Math.random() * 100)
									// }, {
									// 	name: 'giao1',
									// 	id: parseInt(Math.random() * Math.random() * 100)
									// }, {
									// 	name: 'giao2',
									// 	id: parseInt(Math.random() * Math.random() * 100)
									// }, {
									// 	name: 'giao3',
									// 	id: parseInt(Math.random() * Math.random() * 100)
									// }]
								}
							})
						}

					}, 1000)

				})
			},
			async getList(data) {
				try {
					this.loading = true
					const res = await post1(h5_collections_user_likeList, {
						page: this.page++,
						product_type: this.activeBar
					})
					// const res = await this.mock(active.page++)
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
					throw e
					//TODO handle the exception
				}
			},
			handGo(item) {
				let url = ''
				if (this.activeBar === 1) {
					url = `/pages/goldSinglesDetail/goldSinglesDetail?product_item_id=${item.product_item_id}`
				} else if (this.activeBar === 2) {
					url = `/pages/preOrderDetails/preOrderDetails?product_item_id=${item.product_item_id}`
				} else if (this.activeBar === 3) {
					url = `/pages/recommendedAlbumDetail/recommendedAlbumDetail?product_item_id=${item.product_item_id}`
				}
				uni.navigateTo({
					url
				})
			},
			async handPlay(item) {
				try {

					const res1 = await this.$post(collections_index_play, {
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
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'none'
					})
					throw e
				}
			}

		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;

		.tabbar {
			/deep/.bar {
				padding: 0 52rpx;
			}
		}

		.empty {
			position: relative;
			box-sizing: border-box;
			padding: 0 32rpx 32rpx 32rpx;
			height: calc(100vh - 88rpx);
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
			width: 750rpx;
			height: calc(100vh - 168rpx);

			/deep/.scroll {
				display: flex;
				flex-wrap: wrap;

				.item {
					box-sizing: border-box;
					width: 346rpx;
					height: 448rpx;
					border: 1rpx solid #5F5F5F;
					border-radius: 20px;
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
