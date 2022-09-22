<template>
	<view class="container">
		<view class="container-header">
			<view class="user-center" @click="handleClickUserCenter">
				<image src="https://avatars.githubusercontent.com/u/56402715?v=4" mode=""></image>
				<text>未登录</text>
			</view>
			<view class="tag">
				<image src="../../static/logo.png" class="logo" mode=""></image>
				<text>来自元音符</text>
			</view>
		</view>

		<view class="container-body">
			<view class="search-bar">
				按发行时间
			</view>
			<view class="list">
				<view class="list-item" v-for="item in 3" :key='item'>
					<view class="list-item-image-box">
						<image class="list-item-image"
							src="https://y.qq.com/music/photo_new/T002R300x300M000002GBegP0KlpSG.jpg?max_age=2592000">
						</image>
						<view class="list-item-level">
							SSR
						</view>
					</view>
					<view class="list-item-box">
						<view class="list-item-title">最新梦想金曲</view>
						<view class="list-item-time">10月08日 10:00发售</view>
						<view class="list-item-tag">限量2万份</view>
						<view class="list-item-price-box">
							<view class="list-item-price">￥19.90</view>
							<view class="list-item-price-dit active">未开售</view>
						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="container-bottom">
			<view class="need-login">
				<text>元音符-原创音乐聚集地</text>
				<button class="to-login">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginFlag: false
			}
		},
		onLoad() {

		},
		methods: {
			handleClickUserCenter(){
				console.log("check user login")
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.user-center {
		display: flex;
		align-items: center;

		image {
			width: 64rpx;
			height: 64rpx;
			border-radius: 50%;
		}

		text {
			margin-left: 20rpx;
			font-size: 12px;
			color: #f5f5f5;
		}
	}

	.tag {
		border: 1px solid #434343;
		border-radius: 40rpx;
		padding: 10rpx;
		display: flex;
		align-items: center;

		image {
			width: 43rpx;
			height: 43rpx;
			border-radius: 50%;
		}

		text {
			margin-left: 20rpx;
			font-size: 12px;
			color: #f5f5f5;
		}
	}

	.search-bar {
		font-size: 12px;
	}

	.list {
		padding-top: 20rpx;

		&-item {
			border-radius: 12px;
			background-color: #454545;
			padding: 30rpx 28rpx;
			display: flex;
			align-items: center;
			margin-bottom: 40rpx;


			&-image {
				width: 240rpx;
				height: 240rpx;
				border-radius: 12px;

				&-box {
					width: 240rpx;
					height: 240rpx;
					position: relative;
				}
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

			&-box {
				display: flex;
				flex-direction: column;
				padding-left: 20rpx;
				flex: auto;
			}

			&-title {
				font-size: 16px;
				font-weight: 500;
			}

			&-time {
				margin-top: 20rpx;
				height: 17px;
				font-size: 12px;
				text-align: left;
			}

			&-tag {
				margin-top: 20rpx;
				font-size: 12px;
			}

			&-price {
				font-size: 15px;
				color: #E8D18A;
				font-weight: 500;

				&-box {
					display: flex;
					align-items: flex-end;
					justify-content: space-between;
					width: 80%;
					margin-top: 20rpx;
				}

				&-dit {
					font-size: 12px;
					font-weight: 300;

					&.active {
						color: #E8938A;
					}
				}
			}
		}
	}

	.need-login {
		position: fixed;
		bottom: 20rpx;
		left: 20rpx;
		right: 20rpx;
		background-color: #BC181E;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40rpx;
		border-radius: 50px;
		height: 44px;
		-webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
		animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

		text {
			font-size: 13px;
			color: #000;
		}

		.to-login {
			padding: 0 60rpx;
			height: 50rpx;
			line-height: 50rpx;
			border-radius: 50px;
			background-color: #C9B679;
			font-size: 12px;
			color: #000;
		}
	}

	@-webkit-keyframes slide-in-bottom {
		0% {
			-webkit-transform: translateY(1000px);
			transform: translateY(1000px);
			opacity: 0;
		}

		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes slide-in-bottom {
		0% {
			-webkit-transform: translateY(1000px);
			transform: translateY(1000px);
			opacity: 0;
		}

		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
