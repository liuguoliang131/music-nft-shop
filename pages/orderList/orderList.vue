<template>
	<view class="container order">
		<view class="order-nav">
			<view class="order-nav-item" :class="index === activeNav ? 'active' : ''" v-for="( item , index ) in navList" :key='index' @click="handleClickNavItem(index)">
				{{item}}
			</view>
		</view>
		
		
		
		<scroll-view class="order-body" scroll-y style="height: calc(100vh - 210rpx);" @scrolltolower='handleScrollTolower'>
			<view class="order-body-item" v-for="(item , index) in list" :key='index' @click="handleGoToDetail(item)">
				<view class="order-body-item-imageBox">
					<view class="order-body-item-imageBox-image"
						:style="`background-image:url(${item.index_img})`">
					</view>
					<view class="order-body-item-imageBox-level" v-if="item.rare_type">
						{{item.rare_type}}
					</view>
				</view>
				<view class="order-body-item-box">
					<view class="order-body-item-box-flex">
						<view class="order-body-item-title">
							{{item.title}}
						</view>
						<view class="order-body-item-type" style="color: #D10910;">
							{{item.order_status | filterStatus}} <text class="cuIcon-right"></text>
						</view>
					</view>
					<view class="order-body-item-box-flex">
						
						<view class="order-body-item-tag">
							包含{{item.singles_num}}首单曲
						</view>
						<view class="order-body-item-type">
							￥{{item.buy_price}}
						</view>
					</view>
					<view class="order-body-item-box-flex">
						<view class="order-body-item-price" style="margin-left: auto;color: #666;font-size: 20rpx;">
							× {{item.buy_num}}
						</view>
					</view>
					<view class="order-body-item-box-flex">
						<view class="order-body-item-price" style="margin-left: auto;">
							实付金额 ￥{{item.order_total_price}}
						</view>
					</view>
					
					<view class="order-body-item-box-flex" v-if="item.order_status === 1">
						<view style="display: flex;align-items: center;margin-left: auto;margin-top: 8rpx;" >
							<button class="my-btn" @click.stop="handleClickCancle(item)">取消订单</button>
							<button class="my-btn" style="border-color: #C9A43D;color: #C9A43D;margin-left: 10rpx;">去支付</button>
						</view>
					</view>
				</view>
			</view>
			<view class="no-data" v-if="list.length===0">
				<image src="../../static/no-data.png" mode=""></image>
				~您还没有相关订单~
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { h5_order_list , h5_order_cancle } from '../../request/api.js'
	import { post } from '../../request/index.js'
	export default {
		data() {
			return {
				navList: ['全部', '待支付', '已取消', '已完成'],
				activeNav: 0,
				page : 1,
				list :[]
			}
		},
		onLoad() {
			this.getList()
		},
		filters: {
			filterStatus(e) {
				const list = {
					1: '待支付',
					2: '已取消',
					3: '已完成'
				}
				return list[e]
			}
		},
		methods: {
			getList(){				
				post(h5_order_list , {
					page : this.page,
					order_type : this.activeNav
				}).then(res =>{
					if(res.data &&Array.isArray(res.data) ){
						this.list = [...res.data, ...this.list]
					}
				})
			},
			handleClickNavItem(e){
				this.activeNav = e
				this.page = 1
				this.list = []
				this.getList()
			},
			handleGoToDetail(e){
				uni.navigateTo({
					url:'/pages/orderDetail/orderDetail?id='+e.order_id
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
			},
			handleClickCancle(a){
				uni.showModal({
					title:'提示',
					confirmColor:'确认取消',
					cancelText:'返回',
					confirmColor:'#DC2D1E',
					content:'是否确认取消订单？',
					cancelColor:'#999999',
					success(e) {
						if(e.confirm){
							post(h5_order_cancle,{
								order_id : a.order_id
							}).then(res =>{
								uni.showToast({
									title:'取消成功'
								})
								this.getList()
							})
						}else{
							
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order {
		max-height: 100vh;
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
					white-space: nowrap;  
					text-overflow:ellipsis; 
					overflow:hidden;
					width: calc(100vw - 400rpx);

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
			background-color: #0D0D0D;
			color: #AEAEAE;
			border: 1rpx solid  #666;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.center{
		width: 100%;
		height: 200rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		color: #666666;
	}
</style>
