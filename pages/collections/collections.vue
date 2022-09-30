<template>
	<view class="container">
		<cu-head></cu-head>
		<view class="notice">
			当前拥有{{total_num}}张
		</view>

		<scroll-view scroll-y style="height: calc(100vh - 180rpx);padding-top: 30rpx;"
			@scrolltolower='handleScrollTolower'>
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
						<view class="item-number" style="font-size: 13px;">
							{{item.code_num}}
						</view>
						<view class="item-price">
							￥<text style="font-size: 16px;">{{item.price}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="no-data" v-if="list.length===0">
				<image src="../../static/no-data.png" mode=""></image>
				~ 空空如也，请先去选购 ~
			</view>
		</scroll-view>

	</view>
</template>

<script>
	import {
		h5_collections_user_collectionList
	} from '../../request/api.js'
	import {
		post
	} from '../../request/index.js'
	export default {
		data() {
			return {
				page: 1,
				list: [],
				total_num: 0
			}
		},
		onShow() {
			this.getList()
		},
		methods: {
			getList() {
				post(h5_collections_user_collectionList, {
					page: this.page
				}).then(res => {
					console.log('res', res)
					if (res.data.list && Array.isArray(res.data.list)) {
						this.list = [...this.list, ...res.data.list]
						this.total_num = res.data.total_num || 0
					} else {
						this.page = this.page - 1
					}
				})


			},
			handleGoToDetail(e) {
				uni.navigateTo({
					url: '/pages/collectionsDetail/collectionsDetail?id=' + e.owner_id + '&type=collection'
				})
			},
			handleScrollTolower() {
				if (this.list.length >= this.total_num) return
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		max-height: 100vh;
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
		font-size: 12px;
		line-height: 64rpx;
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
		border: 0.5px solid #5F5F5F;
		border-radius: 10px;

		&-image {
			border-radius: 12px;
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
				border-radius: 10px;
			}

			&-level {
				position: absolute;
				top: 0;
				left: 0;
				width: 42px;
				height: 20px;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		&-title {
			font-size: 14px;
			font-weight: 500;
			// color: #E8D18A;
		}

		&-number {
			font-size: 12px;
		}

		&-price {
			font-size: 12px;
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
