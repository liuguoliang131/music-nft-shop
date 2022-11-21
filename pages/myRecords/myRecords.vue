<template>
	<view class="container">
		<cu-head></cu-head>
		<my-tab :list="tabList" @active="handActiveBar" :activeBar="activeBar" :slide="false"></my-tab>
		<view class="notice">
			当前拥有{{total_num}}张
		</view>
		<view class="empty" v-if="isFinish&&list.length===0">
			<view class="empty-center">
				<image src="../../static/emptybox.png" mode="" class="empty-img"></image>
				<view class="empty-text">空空如也，请先去选购</view>
			</view>
		</view>
		<my-scroll v-else class="scroll-box" :isFinish="isFinish" :loading="loading" @load="getList">
			<view class="item" v-for="(item , index) in list" @click="handleGoToDetail(item)" :key='index'>
				<view class="item-image">
					<view class="item-image-image" :style="`background-image:url(${item.index_img})`">
					</view>
					<view class="item-image-level">
						<image v-if="item.rare_type==='SSR'" src="../../static/SSR.png" mode=""></image>
						<image v-else-if="item.rare_type==='UR'" src="../../static/UR.png" mode=""></image>
						<image v-else-if="item.rare_type==='R'" src="../../static/R.png" mode=""></image>
						<image v-else-if="item.rare_type==='N'" src="../../static/N.png" mode=""></image>
						<image v-else-if="item.rare_type==='SR'" src="../../static/SR.png" mode=""></image>
					</view>
				</view>
				<view class="item-title">
					{{item.name}}
				</view>
				<view class="flex">
					<view class="item-number">
						{{item.code_num}}
					</view>
					<view class="item-price">
						￥<text>{{item.price}}</text>
					</view>
				</view>
			</view>
		</my-scroll>
	</view>
</template>

<script>
	import {
		h5_collections_user_collectionList
	} from '../../request/api.js'
	import {
		post,
		post1
	} from '../../request/index.js'
	import MyTab from '../../components/myTab.vue'
	import MyScroll from '../../components/myScroll.vue'
	export default {
		components: {
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
						list: [],
						total_num: 0
					},
					{
						name: '黄金单曲',
						id: 1,
						isFinish: false,
						loading: false,
						page: 1,
						list: [],
						total_num: 0
					},
					{
						name: '黄金专辑',
						id: 2,
						isFinish: false,
						loading: false,
						page: 1,
						list: [],
						total_num: 0
					}

				],
				activeBar: 3,
				page: 1,
				isFinish: false,
				loading: false,
				list: [],
				total_num: 0
			}
		},
		onShow() {
			// this.getList()
		},
		methods: {
			mock() {
				return new Promise((resolve) => {
					resolve({
						code: 0,
						data: {
							list: [{
								name: '黄金专辑',
								rare_type: 'SSR',
								code_num: '123',
								price: '12.22',
								index_img: 'https://file.yuanyinfu.com/collections/product/product-1666854389017.jpg'
							}, {
								name: '黄金专辑',
								rare_type: 'SSR',
								code_num: '123',
								price: '12.22',
								index_img: 'https://file.yuanyinfu.com/collections/product/product-1666854389017.jpg'
							}, {
								name: '黄金专辑',
								rare_type: 'SSR',
								code_num: '123',
								price: '12.22',
								index_img: 'https://file.yuanyinfu.com/collections/product/product-1666854389017.jpg'
							}, {
								name: '黄金专辑',
								rare_type: 'SSR',
								code_num: '123',
								price: '12.22',
								index_img: 'https://file.yuanyinfu.com/collections/product/product-1666854389017.jpg'
							}, {
								name: '黄金专辑',
								rare_type: 'SSR',
								code_num: '123',
								price: '12.22',
								index_img: 'https://file.yuanyinfu.com/collections/product/product-1666854389017.jpg'
							}, {
								name: '黄金专辑',
								rare_type: 'SSR',
								code_num: '123',
								price: '12.22',
								index_img: 'https://file.yuanyinfu.com/collections/product/product-1666854389017.jpg'
							}, {
								name: '黄金专辑',
								rare_type: 'SSR',
								code_num: '123',
								price: '12.22',
								index_img: 'https://file.yuanyinfu.com/collections/product/product-1666854389017.jpg'
							}, {
								name: '黄金专辑',
								rare_type: 'SSR',
								code_num: '123',
								price: '12.22',
								index_img: 'https://file.yuanyinfu.com/collections/product/product-1666854389017.jpg'
							}, {
								name: '黄金专辑qqqa阿达阿三发生法发是否氨法沙发沙发',
								rare_type: 'SSR',
								code_num: '123',
								price: '12.22',
								index_img: 'https://file.yuanyinfu.com/collections/product/product-1666854389017.jpg'
							}, ]
						}
					})
				})
			},
			handActiveBar(id) {
				if (id === this.activeBar) return false
				this.activeBar = id
				this.list = []
				this.page = 1
				this.loading = false
				this.isFinish = false
				this.getList()
			},
			async getList(data) {
				// this.mock(h5_collections_user_collectionList, {
				// 	page: this.page
				// }).then(res => {
				// 	console.log('res', res)
				// 	if (res.data.list && Array.isArray(res.data.list)) {
				// 		this.total_num = res.data.total_num || 0
				// 		if (this.page === 1) {
				// 			this.list = res.data.list
				// 		} else {
				// 			this.list = [...this.list, ...res.data.list]
				// 		}

				// 	} else {
				// 		this.page = this.page - 1
				// 	}
				// })
				try {

					this.loading = true
					const res = await post1(h5_collections_user_collectionList, {
						page: this.page++,
						product_type: this.activeBar
					})
					// const res = await this.mock(this.page++)
					console.log('res', res)
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
					this.total_num = res.data.total_num
					this.loading = false
				} catch (e) {
					this.isFinish = true
					this.loading = false
					console.log(e)
					throw e
					//TODO handle the exception
				}


			},
			handleGoToDetail(e) {
				// digitalRecordsDetail  数字音乐
				// albumRecordsDetail 专辑
				// singlesRecordsDetail 单曲
				let url = null
				if (this.activeBar === 3) {
					url = '/pages/digitalRecordsDetail/digitalRecordsDetail?id=' + e.owner_id
				} else if (this.activeBar === 2) {
					url = '/pages/albumRecordsDetail/albumRecordsDetail?id=' + e.owner_id
				} else if (this.activeBar === 1) {
					url = '/pages/singlesRecordsDetail/singlesRecordsDetail?id=' + e.owner_id
				}
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		max-height: 100vh;
		padding: 0;

		/deep/.mytab .bar {
			padding: 0 52rpx;
		}

		.empty {
			position: relative;
			box-sizing: border-box;
			padding: 0 32rpx 32rpx 32rpx;
			width: 750rpx;
			height: calc(100vh - 252rpx);
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

		.scroll-box {
			width: 750rpx;
			height: calc(100vh - 252rpx);

			/deep/.scroll {
				box-sizing: border-box;
				padding: 0 20rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
			}
		}
	}

	.notice {
		// position: absolute;
		// top: 0;
		// left: 0;
		width: 100%;
		height: 64rpx;
		background: #252111;
		text-align: center;
		color: #AC9147;
		z-index: 100vh;
		font-weight: 400;
		font-size: 24rpx;
		line-height: 64rpx;
		margin-bottom: 20rpx;
	}

	.grid-box {

		padding-bottom: 20rpx;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20rpx;
	}

	.item {
		// width: calc(50vw - 40rpx);
		box-sizing: border-box;
		width: 349rpx;
		height: 459rpx;
		overflow: hidden;
		padding: 10rpx 10rpx;
		display: flex;
		flex-direction: column;
		border: 1rpx solid #5F5F5F;
		border-radius: 20rpx;
		margin-bottom: 20rpx;

		&-image {
			border-radius: 24rpx;
			width: 324rpx;
			height: 314rpx;
			position: relative;
			padding-bottom: 20rpx;

			&-image {
				width: 100%;
				height: 100%;
				background-size: cover;
				background-position: center center;
				background-repeat: no-repeat;
				border-radius: 20rpx;
			}

			&-level {
				position: absolute;
				top: 0;
				left: 0;
				width: 84rpx;
				height: 40rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		&-title {
			width: 324rpx;
			font-size: 28rpx;
			font-weight: 500;
			// color: #E8D18A;
			overflow: hidden; // 溢出隐藏
			white-space: nowrap; // 强制一行
			text-overflow: ellipsis; // 文字溢出显示省略号
		}

		&-number {
			font-size: 24rpx;
		}

		&-price {
			font-size: 32rpx;
			color: #D10910;
			font-weight: 500;
		}
	}

	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 20rpx;
		width: 324rpx;
		overflow: hidden; // 溢出隐藏
		white-space: nowrap; // 强制一行
		text-overflow: ellipsis; // 文字溢出显示省略号
	}
</style>
