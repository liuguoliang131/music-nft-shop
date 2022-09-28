<template>
	<view class="container">
		<view class="container-header">
			<view v-if="userInfo" class="user-center" @click="handleClickUserCenter">
				<image class="avatar" :src="userInfo.avatar" mode=""></image>
				<text>{{userInfo.nick_name||'未设置'}}</text>
			</view>
			<view v-else class="user-center" @click="handleClickUserCenter">
				<text class="avatar"></text>
				<text>未登录</text>
			</view>
			<view class="tag" @tap="handGoDownload">
				<image src="../../static/logo.png" class="logo" mode=""></image>
				<text>来自元音符</text>
			</view>
		</view>

		<view class="container-body">
			<view class="search-bar" @click="handleChangeOrder">
				<view class="upAndDown">
					<text class="cuIcon-triangleupfill"
						:style="`${order === 1?'color : #fff' :'color : #343434'};line-height: 22rpx;margin-top:2px`"></text>
					<text class="cuIcon-triangledownfill"
						:style="`${order === 2 ?'color : #fff' :'color : #343434'};line-height: 22rpx;`"></text>
				</view>

				按发行时间
			</view>
			<scroll-view class="list" style="height:calc(100vh - 220rpx)" scroll-y @scrolltolower='handleScrollTolower'>
				<view @tap="handViewDetail(item)" class="list-item" v-for="(item , index) in list" :key='index'>
					<view class="list-item-image-box">
						<image class="list-item-image" :src="item.index_img">
						</image>
						<view class="list-item-level">
							{{item.evaluate_type}}
						</view>
					</view>
					<view class="list-item-box">
						<view class="list-item-title">{{item.name}}</view>
						<view class="list-item-time">{{item.sale_time}}开售</view>
						<view class="list-item-tag">{{item.rare_type}}</view>
						<view class="list-item-price-box">
							<view class="list-item-price">￥{{item.sale_price}}</view>
							<view class="list-item-price-dit active">{{item.sale_status | filterStatus}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>

		</view>
		<view class="container-bottom" v-if="!loginFlag">
			<view class="need-login">
				<text>元音符-原创音乐聚集地</text>
				<button class="to-login" @tap="handLogin()">登录</button>
				<text class="cuIcon-close" @click="handleCloseLogintag"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		post
	} from '@/request/index.js'
	import {
		h5_collections_index_list
	} from '@/request/api.js'
	import config from '../../utils/uniKey.js'
	export default {
		data() {
			return {
				loginFlag: true,
				order: 1,
				page: 1,
				list: [],
				userInfo: {
					avatar: '',
					nick_name: ''
				},
				timer : undefined
			}
		},
		onLoad() {
			this.getList()
		},
		filters: {
			filterStatus(e) {
				const list = {
					0: '未开售',
					1: '售卖中',
					2: '售罄'
				}
				return list[e] || '售罄'
			}
		},
		methods: {
			getList() {
				console.log(this.page)
				post(h5_collections_index_list, {
					page: this.page,
					sort: this.order
				}).then(res => {
					console.log('res', res)
					this.loginFlag = !!res.data.is_login
					this.list = [...res.data.list, ...this.list]
				})
			},
			handleClickUserCenter() {
				if (this.$store.state.user.token) {

				} else {

				}
			},
			handleChangeOrder() {
				this.order = this.order === 1 ? 2 : 1
				this.getList()
			},
			handleCloseLogintag() {
				this.loginFlag = true
			},
			handleScrollTolower() {
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
			},
			// 去往详情
			handViewDetail(item) {
				uni.navigateTo({
					url: `/pages/preOrderDetails/preOrderDetails?product_item_id=${item.product_item_id}`
				})
			},
			// 去往登录
			handLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			// 去下载
			handGoDownload() {
				uni.showToast({
					title: '即将跳转到元音符App下载页面',
					icon: 'none',
					duration: 3000
				})
				if (this.timer) return false
				this.timer = setTimeout(() => {
					clearTimeout(this.timer)
					this.timer = null
					window.location.href = config.APP_DOWNLOAD_URL
				}, 3000)
			}
		},
		onShow() {
			this.userInfo = JSON.parse(JSON.stringify(this.$store.state.user.userInfo))

			uni.$on('updateData', (data) => {
				this.list = []
				this.getList()
			})
		}
	}
</script>

<style lang="scss" scoped>
	.user-center {
		display: flex;
		align-items: center;

		.avatar {
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

	.upAndDown {
		display: flex;
		align-items: center;
		flex-direction: column;
		height: 40rpx;
		font-size: 16px;
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
		display: flex;
		align-items: center;
	}

	.list {
		padding: 20rpx 0;

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
				// flex: auto;
				width: calc(100vw - 380rpx);
			}

			&-title {
				font-size: 16px;
				font-weight: 500;
				white-space: nowrap;  
				 text-overflow:ellipsis; 
				 overflow:hidden;

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
