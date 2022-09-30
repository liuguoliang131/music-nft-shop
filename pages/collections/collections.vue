<template>
	<view class="container">
		<view class="notice">
			当前拥有{{total_num}}张
		</view>

		<scroll-view scroll-y style="height: calc(100vh - 180rpx);padding-top: 84rpx;"
			@scrolltolower='handleScrollTolower'>
			<view class="grid-box">
				<view class="item" v-for="(item , index) in list " @click="handleGoToDetail(item)" :key='index'>
					<view class="item-image">
						<view class="item-image-image" :style="`background-image:url(${item.index_img})`">
						</view>
						<view class="item-image-level">
							{{item.rare_type}}
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
							￥{{item.price}}
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
			// this.getList()
		},
		methods: {
			getList() {
				post(h5_collections_user_collectionList, {
					page: this.page
				}).then(res => {
					console.log('res', res)
					if (res.data.list && Array.isArray(res.data.list)) {
						this.list = [...res.data.list, ...this.list]
						this.total_num = res.data.total_num || 0
					}else{
						this.page = this.page -1
					}
				})


			},
			handleGoToDetail(e) {
				uni.navigateTo({
					url: '/pages/collectionsDetail/collectionsDetail?id=' + e.owner_id + '&type=collection'
				})
			},
			handleScrollTolower() {
				if(this.list.length === this.total_num) return 
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
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 64rpx;
		background-color: #494742;
		text-align: center;
		line-height: 64rpx;
		color: #BAB092;
		font-size: 14px;
		z-index: 100vh;
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
			width: calc(50vw - 70rpx);
			height: calc(50vw - 70rpx);
			position: relative;
			padding-bottom: 20rpx;

			&-image {
				width: 100%;
				height: 100%;
				background-size: cover;
				background-position: center center;
				border-radius: 10px;
			}

			&-level {
				position: absolute;
				top: 0;
				left: 0;
				// width: 64rpx;
				font-size: 12px;
				background: linear-gradient(102.78deg, #FFE476 0%, #FFEDBE 100%);
				padding: 8rpx 30rpx;
				border-radius: 10px 0 10px 0;
				font-weight: 500;
				color: #B17A0F;
			}
		}

		&-title {
			font-size: 16px;
			font-weight: 500;
			// color: #E8D18A;
		}

		&-number {
			font-size: 12px;
		}

		&-price {
			font-size: 12px;
			color: #E8938A;
		}
	}

	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 20rpx;
	}
</style>
