<template>
	<view class="container">
		<cu-head></cu-head>
		<my-tab :list="tabList" @active="handActiveBar" :activeBar="activeBar" :slide="false">
			<template v-slot:item="{data}">
				<view class="notice">
					当前拥有{{total_num}}张
				</view>
				<view class="empty" v-if="data.isFinish&&data.list.length===0">
					<view class="empty-center">
						<image src="../../static/emptybox.png" mode="" class="empty-img"></image>
						<view class="empty-text">空空如也，请先去选购</view>
					</view>
				</view>
				<my-scroll v-else :key="data.id" class="scroll-box" :isFinish="data.isFinish" :loading="data.loading"
					:data="data" @load="getList">
					<view class="item" v-for="(item , index) in data.list" @click="handleGoToDetail(item)" :key='index'>
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
			</template>
		</my-tab>
		<!-- <scroll-view scroll-y style="height: calc(100vh - 180rpx);" @scrolltolower='handleScrollTolower'>
			<view class="grid-box">
				<view class="item" v-for="(item , index) in list " @click="handleGoToDetail(item)" :key='index'>
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
			</view>
			<view class="no-data" v-if="list.length===0">
				<image src="../../static/no-data.png" mode=""></image>
				~ 空空如也，请先去选购 ~
			</view>
		</scroll-view>
 -->
	</view>
</template>

<script>
	import {
		h5_collections_user_collectionList
	} from '../../request/api.js'
	import {
		post
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
						id: 1,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					},
					{
						name: '黄金单曲',
						id: 2,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					},
					{
						name: '黄金专辑',
						id: 3,
						isFinish: false,
						loading: false,
						page: 1,
						list: []
					}

				],
				activeBar: 1,
				page: 1,
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
								name: '黄金专辑',
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
				this.activeBar = id
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
				console.log('getList', data)
				const active = this.tabList.find((item) => item.id === data.id)
				try {

					active.loading = true
					// const res = await this.$post(h5_community_memberList, {
					// 	page: this.page++
					// })
					const res = await this.mock(active.page++)
					console.log('res', res)
					if (res.code !== 0) {
						active.isFinish = true
						active.loading = false
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					if (res.data.list && Array.isArray(res.data.list) && res.data.list.length) {
						console.log('1')
						if (active.page === 1) {
							active.list = res.data.list
						} else {
							active.list = [...active.list, ...res.data.list]
						}
						console.log('active', active)

					} else {
						active.isFinish = true
						active.page = active.page - 1
					}
					active.loading = false
				} catch (e) {
					active.isFinish = true
					active.loading = false
					console.log(e)
					throw e
					//TODO handle the exception
				}


			},
			handleGoToDetail(e) {
				// digitalRecordsDetail  数字音乐
				// albumRecordsDetail 专辑
				// singlesRecordsDetail 单曲
				uni.navigateTo({
					url: '/pages/digitalRecordsDetail/digitalRecordsDetail?id=' + e.owner_id + '&type=collection'
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
		overflow: hidden;
		padding: 10rpx 10rpx;
		display: flex;
		flex-direction: column;
		border: 1rpx solid #5F5F5F;
		border-radius: 20rpx;
		margin-bottom: 20rpx;

		&-image {
			border-radius: 24rpx;
			width: calc(50vw - 50rpx);
			height: calc(50vw - 60rpx);
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
			font-size: 28rpx;
			font-weight: 500;
			// color: #E8D18A;
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
	}
</style>
