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
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

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
</style>
