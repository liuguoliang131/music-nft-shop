<template>
	<view class="container">
		<view class="title">
			专辑信息
		</view>

		<view class="flex mt-2">
			<image src="https://y.qq.com/music/photo_new/T002R300x300M000002GBegP0KlpSG.jpg?max_age=2592000"
				class="image" mode=""></image>
			<view class="box">
				<view class="box-title">
					最新梦想金曲
				</view>
				<view class="number">
					包含10首作品
				</view>
				<view class="number">
					发 行 方 元音符
				</view>
				<view class="number">
					发行时间 2022-08-01
				</view>
				<view class="number price">
					发行价格 ¥19.90元/张
				</view>
			</view>
		</view>
		<view class="title mt-2">
			认证信息
		</view>
		<view class="flex">
			<view class="key number">
				Record Number
			</view>
			<view class="number">
				#001
			</view>
		</view>
		<view class="flex">
			<view class="key number">
				Contract Address
			</view>
			<view class="number">
				0xf9ec07f93e729...
			</view>
		</view>
		<view class="flex">
			<view class="key number">
				Token ID
			</view>
			<view class="number">
				#1557552839199234
			</view>
		</view>
		<view class="flex">
			<view class="key number">
				Token Standard
			</view>
			<view class="number">
				#1557552839199234
			</view>
		</view>


		<view class="title mt-2">
			作品一名称
		</view>
		<view class="content">
			那些不经意想起的便是记忆里最深刻的，原来没有争吵也可以走到散场。奔赴多年也换不来永远。爱意随风起，风止意难平，故事的结尾总配不上极致温柔的开头。
		</view>

		<view class="title mt-2">
			作品二名称
		</view>
		<view class="content">
			那些不经意想起的便是记忆里最深刻的，原来没有争吵也可以走到散场。奔赴多年也换不来永远。爱意随风起，风止意难平，故事的结尾总配不上极致温柔的开头。
		</view>


		<view class="title mt-2">
			作品三名称
		</view>
		<view class="content">
			那些不经意想起的便是记忆里最深刻的，原来没有争吵也可以走到散场。奔赴多年也换不来永远。爱意随风起，风止意难平，故事的结尾总配不上极致温柔的开头。
		</view>


		<view class="title mt-2">
			作品四名称
		</view>
		<view class="content">
			那些不经意想起的便是记忆里最深刻的，原来没有争吵也可以走到散场。奔赴多年也换不来永远。爱意随风起，风止意难平，故事的结尾总配不上极致温柔的开头。
		</view>
		
		<view class="container-bottom">
			<button class="my-btn" @click="showCre">查看证书</button>
		</view>
		
	
	<view class="cu-modal " :class="show ? 'show' : ''"  @click="hiddenCre">
		<view class="cu-dialog" >
			<view class="head">
				<image src="../../static/logo.png" class="head-logo"></image>
				<view class="head-title">
					数字专辑证书
				</view>
			</view>
			<view class="body">
				<view class="flex">
					<view class="key number">
						编 号:
					</view>
					<view class="number">
						#001
					</view>
				</view>
				<view class="flex">
					<view class="key number">
						名 称:
					</view>
					<view class="number">
						最新梦想金曲
					</view>
				</view>
				<view class="flex">
					<view class="key number">
						发行方
					</view>
					<view class="number">
						元音符
					</view>
				</view>
				<view class="flex">
					<view class="key number">
						发行时间
					</view>
					<view class="number">
						2022-08-09 10：00：00
					</view>
				</view>
				<view class="flex text"  >
					<view class="key number">
						哈希地址
					</view>
					<view class="number" style="flex-flow: wrap;">
						0JIJIOJIOJI*128e90e3dsjaaidsdja9diasjdkasjdioasdi90adiansdjsad
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
				show : false
			}
		},
		methods: {
			showCre(){
				this.show = true
			},
			hiddenCre(){
				this.show = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		font-size: 13px;
		color: #AB9449;
		font-weight: 500;
		position: relative;
		padding-left: 20rpx;

		&::before {
			content: '';
			width: 10rpx;
			height: 100%;
			background-color: #AB9449;
			position: absolute;
			left: 0;
			top: 0;
			border-radius: 4px;
		}
	}

	.mt-2 {
		margin-top: 20rpx;
	}

	.flex {
		display: flex;
		align-items: center;
	}

	.box {
		padding-left: 20rpx;
	}

	.image {
		width: 260rpx;
		height: 260rpx;
		border-radius: 24rpx;
	}

	.box-title {
		font-size: 14px;
		font-weight: 500;
	}

	.number {
		font-size: 12px;
		margin-top: 20rpx;
		color: #8A8A8A;
	}

	.price {
		color: #E7573D;
	}

	.content {
		font-size: 12px;
		color: #8A8A8A;
		text-indent: 2rem;
	}
	.key{
		width: 240rpx;
		text-align: right;
		padding-right: 10rpx;
	}
	.container-bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		background-color: #1D1D1D;
		display: flex;
		align-items: center;
		justify-content: center;
		.my-btn{
			height: 70rpx;
			padding: 0rpx 80rpx;
			display: inline-block;
			line-height: 70rpx;
			border: none;
			background-color: #E8D18A;
			border-radius: 40rpx;
			font-size: 13px;
			color: #847443 ;
		}
	}
	
	
	.head{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 40rpx;
		&-logo{
			width: 100rpx;
			height: 120rpx;
		}
		&-title{
			color: #101010;
			font-weight: 500;
			font-size: 18px;
		}
	}
	
	.body{
		padding: 20rpx;
		border-top: 1px solid #EBEBEB;
		margin-top: 20rpx;
		.flex{
			display: flex;
			align-items: flex-start;
			justify-content: center;
			// flex-wrap: wrap;
			flex-shrink: 0;
			
			.number{
				// flex: 1;
				text-align: left;
				width: calc(100% - 240rpx);
				word-break:break-all;
			}
			.key{
				width: 240rpx;
				min-width: 240rpx;
				text-align: right;
				margin-left: 20rpx;
				height: auto;
				
			}
		}
	}
	
	
	
	
	
	.cu-modal {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1110;
		opacity: 0;
		outline: 0;
		text-align: center;
		-ms-transform: scale(1.185);
		transform: scale(1.185);
		backface-visibility: hidden;
		perspective: 2000upx;
		background: rgba(0, 0, 0, 0.6);
		transition: all 0.3s ease-in-out 0s;
		pointer-events: none;
	}
	
	.cu-modal::before {
		content: "\200B";
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}
	
	.cu-modal.show {
		opacity: 1;
		transition-duration: 0.3s;
		-ms-transform: scale(1);
		transform: scale(1);
		overflow-x: hidden;
		overflow-y: auto;
		pointer-events: auto;
	}
	
	.cu-dialog {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		width: calc(100vw - 80rpx);
		border-radius: 10upx;
		overflow: hidden;
		background-color: #F6F6F6;
		color: #1D1d1d;
		
	}
	
	.cu-modal.bottom-modal::before {
		vertical-align: bottom;
	}
	
	.cu-modal.bottom-modal .cu-dialog {
		width: 100%;
		border-radius: 0;
	}
	
	.cu-modal.bottom-modal {
		margin-bottom: -1000upx;
	}
	
	.cu-modal.bottom-modal.show {
		margin-bottom: 0;
	}
	
	.cu-modal.drawer-modal {
		transform: scale(1);
		display: flex;
	}
	
	.cu-modal.drawer-modal .cu-dialog {
		height: 100%;
		min-width: 200upx;
		border-radius: 0;
		margin: initial;
		transition-duration: 0.3s;
	}
	
	.cu-modal.drawer-modal.justify-start .cu-dialog {
		transform: translateX(-100%);
	}
	
	.cu-modal.drawer-modal.justify-end .cu-dialog {
		transform: translateX(100%);
	}
	
	.cu-modal.drawer-modal.show .cu-dialog {
		transform: translateX(0%);
	}
	.cu-modal .cu-dialog>.cu-bar:first-child .action{
	  min-width: 100rpx;
	  margin-right: 0;
	  min-height: 100rpx;
	}
	
</style>
