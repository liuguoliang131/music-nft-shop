<template>
	<view class="container">
		<view class="notice">
			最新梦想金曲 当前拥有{{total_num}}张
		</view>

		<scroll-view scroll-y style="height: calc(100vh - 180rpx);padding-top: 84rpx;" @scrolltolower='handleScrollTolower'>
			<view class="grid-box">
				<view class="item" v-for="(item , index) in list " @click="handleGoToDetail" :key='index'>
					<view class="item-image">
						<view class="item-image-image"
							:style="`background-image:url(${item.index_img})`">
						</view>
						<view class="item-image-level">
							{{item.evaluate_type}}
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
		</scroll-view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page : 1,
				list : [],
				total_num : 10
			}
		},
		onLoad(){
			this.getList()
		},
		methods: {
			getList(){
				console.log(this.page)
				const listItem =  {
					name: '最新梦想金曲',
					index_img: 'https://y.qq.com/music/photo_new/T002R300x300M000002GBegP0KlpSG.jpg?max_age=2592000',
					code_num: '#001',
					price: '19.90',
					evaluate_type : 'SSR',
					rare_type : '稀有'
				}
				
				this.list = [listItem , listItem , listItem , listItem , listItem ,listItem ,listItem ,listItem ,listItem]
			},
			handleGoToDetail() {
				uni.navigateTo({
					url: '/pages/collectionsDetail/collectionsDetail'
				})
			},
			handleScrollTolower() {
				if (window.requestAnimationFrame && typeof window.requestAnimationFrame === 'function') {
					window.requestAnimationFrame(() => {
						this.page++
						this.getList()
					})
				}else{
					setTimeout(()=>{
						this.page++
						this.getList()
					},17)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
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
		background-color: #2D2B2B;
		border-radius: 12px;
		padding: 10rpx 20rpx;
		display: flex;
		flex-direction: column;

		&-image {
			border-radius: 12px;
			width: 100%;
			height: auto;
			position: relative;
			padding-bottom: 20rpx;

			&-image {
				width: 100%;
				aspect-ratio: 6/5;
				background-size: cover;
				background-position: center center;
				border-radius: 12px;
			}

			&-level {
				position: absolute;
				top: 20rpx;
				left: 0;
				width: 64rpx;
				font-size: 12px;
				color: #333;
				background: linear-gradient(92.38deg, rgba(232, 209, 138, 1) 10.66%, rgba(171, 148, 73, 1) 94.64%);
				padding: 4rpx 20rpx;
				border-radius: 0 50px 50px 0;
				font-weight: 500;
			}
		}

		&-title {
			font-size: 16px;
			font-weight: 500;
			color: #E8D18A;
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
