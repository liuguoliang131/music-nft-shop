<template>
	<view class="container order">
		<view class="order-nav">
			<view class="order-nav-item" :class="index === activeNav ? 'active' : ''" v-for="( item , index ) in navList" :key='index' @click="handleClickNavItem(index)">
				{{item}}
			</view>
		</view>
		
		
		
		<view class="order-body">
			<view class="order-body-item" v-for="item in 10" :key='item' @click="handleGoToDetail">
				<view class="order-body-item-imageBox">
					<view class="order-body-item-imageBox-image"
						:style="`background-image:url(https://y.qq.com/music/photo_new/T002R300x300M000002GBegP0KlpSG.jpg?max_age=2592000)`">
					</view>
					<view class="order-body-item-imageBox-level">
						SSR
					</view>
				</view>
				<view class="order-body-item-box">
					<view class="order-body-item-box-flex">
						<view class="order-body-item-title">
							最新新梦想金曲
						</view>
						<view class="order-body-item-type">
							已完成 <text class="cuIcon-right"></text>
						</view>
					</view>
					<view class="order-body-item-box-flex">
						<view class="order-body-item-price">
							实付金额 ￥19990.00
						</view>
						<view class="order-body-item-type">
							× 100
						</view>
					</view>
					
					<view class="order-body-item-box-flex">
						<view class="order-body-item-tag">
							包含10首歌曲
						</view>
						<view style="display: flex;align-items: center;" v-if="item % 2 === 0">
							<button class="my-btn">取消订单</button>
							<button class="my-btn">去支付</button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: ['全部', '待支付', '已取消', '已完成'],
				activeNav: 1,
			}
		},
		methods: {
			handleClickNavItem(e){
				this.activeNav = e
			},
			handleGoToDetail(){
				uni.navigateTo({
					url:'/pages/collectionsDetail/collectionsDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order {
		&-nav {
			height: 80rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #343434;
			color: #8A8A8A;
			font-size: 14px;
			text-align: center;
			&-item{
				text-align: center;
				width: 100rpx;
				&.active{
					color: #E7573D;
					position: relative;
					&::after{
						content: '';
						bottom: -22rpx;
						position: absolute;
						left: 0;
						width: 100rpx;
						background-color: #E7573D;
						height: 8rpx;
					}
				}
			}
			
		}
		&-body{
			padding-top: 20rpx;
			&-item{
				height: 200rpx;
				padding: 20rpx 0;
				width: 100%;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #343434;
				&-imageBox{
					width: 166rpx;
					height: 166rpx;
					position: relative;
					&-image{
						width: 100%;
						height: 100%;
						border-radius: 24rpx;
						background-size: cover;
					}
					&-level{
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
				&-box{
					display: flex;
					align-items: flex-start;
					flex-direction: column;
					justify-content: space-between;
					font-size: 12px;
					height: 80%;
					padding: 20rpx;
					color: #8A8A8A;
					flex: auto;
					&-flex{
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 100%;
					}
				}
				&-title{
					color: #FFFFFF;
					font-size: 14px;
				}
				&-price{
					color: #E7573D;
				}
			
			}
		}
		.my-btn{
			border: none;
			height: 40rpx;
			border-radius: 50px;
			line-height: 40rpx;
			font-size: 12px;
			background-color: #E8D18A;
			color: #333;
		}
	}
</style>
