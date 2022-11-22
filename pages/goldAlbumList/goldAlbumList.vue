<template>
	<view class="container">
		<nav-head title="黄金专辑"></nav-head>
		<view class="empty" v-if="isFinish&&list.length===0">
			<view class="empty-center">
				<image src="../../static/emptybox.png" mode="" class="empty-img"></image>
				<view class="empty-text">空空如也</view>
			</view>
		</view>
		<my-scroll v-else class="list" @load="getList" :isFinish="isFinish" :loading="loading">
			<view class="item" v-for="(item,idx) in list" :key="idx" @tap="handGo(item)">
				<view class="item-1">
					<image v-show="!$store.state.publicState.isApprove" class="item-1-sign" v-if="item.rare_type==='SSR'"
						src="../../static/SSR.png" mode=""></image>
					<image v-show="!$store.state.publicState.isApprove" class="item-1-sign" v-else-if="item.rare_type==='UR'"
						src="../../static/UR.png" mode="">
					</image>
					<image v-show="!$store.state.publicState.isApprove" class="item-1-sign" v-else-if="item.rare_type==='R'"
						src="../../static/R.png" mode="">
					</image>
					<image v-show="!$store.state.publicState.isApprove" class="item-1-sign" v-else-if="item.rare_type==='N'"
						src="../../static/N.png" mode="">
					</image>
					<image v-show="!$store.state.publicState.isApprove" class="item-1-sign" v-else-if="item.rare_type==='SR'"
						src="../../static/SR.png" mode="">
					</image>
					<image class="item-1-out" :src="item.index_img" mode=""></image>
					<image class="item-1-in" src="../../static/turn.png" mode=""></image>
				</view>
				<view class="item-2">
					<view class="item-2-1">
						{{item.product_name}}
					</view>
					<view class="item-2-3" v-show="!$store.state.publicState.isApprove">
						限量{{item.stock_num}}份
					</view>
					<view class="item-2-4">
						<view class="item-2-4-1" v-show="!$store.state.publicState.isApprove">
							￥{{item.sale_price}}
						</view>
						<view class="item-2-4-2" @tap="handGo(item)">
							<text>查看专辑</text>
						</view>
					</view>
				</view>
			</view>
		</my-scroll>
	</view>
</template>

<script>
	import NavHead from '../../components/navHead.vue'
	import MyScroll from '../../components/myScroll.vue'
	import {
		collections_index_albumMusicList
	} from '../../request/api.js'
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
					console.log('getlist')
					this.loading = true
					const res = await this.$post(collections_index_albumMusicList, {
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
				uni.navigateTo({
					url: `/pages/preOrderDetails/preOrderDetails?product_item_id=${item.product_item_id}`
				})
			}
		},
		onLoad() {

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
							margin-top: 8rpx;
							font-weight: 400;
							font-size: 28rpx;
							line-height: 40rpx;
							/* identical to box height */


							color: #AEAEAE;
						}

						.item-2-4 {
							margin-top: 94rpx;
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


		}
	}
</style>
