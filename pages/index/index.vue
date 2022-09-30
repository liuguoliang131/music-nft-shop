<template>
	<view class="container">
		<view class="container-header">
			<view @tap="handGoDownload">
				<image src="../../static/logo-line.png" class="logo" mode=""></image>
			</view>
			<view v-if="userInfo" class="user-center" @click="handleClickUserCenter">
				<image class="avatar" :src="userInfo.avatar" mode=""></image>
				<text>{{userInfo.nick_name||userInfo.phone}}</text>
			</view>
			<view v-else class="user-center" @click="handleClickUserCenter">
				<image class="avatar" src="../../static/userNotLogin.png" mode=""></image>
				<text>未登录</text>
			</view>

		</view>

		<view class="container-body">
			<view class="search-bar" v-show="list.length>2" @click="handleChangeOrder">
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
							<image v-if="item.rare_type==='SSR'" src="../../static/SSR.png" mode=""></image>
							<image v-else-if="item.rare_type==='UR'" src="../../static/UR.png" mode=""></image>
							<image v-else-if="item.rare_type==='R'" src="../../static/R.png" mode=""></image>
							<image v-else-if="item.rare_type==='N'" src="../../static/N.png" mode=""></image>
							<image v-else-if="item.rare_type==='SR'" src="../../static/SR.png" mode=""></image>
						</view>
					</view>
					<view class="list-item-box">
						<view class="list-item-title">{{item.name}}</view>
						<view class="list-item-time">{{filterTime1(item.sale_time*1000)}}开售</view>
						<view class="list-item-tag">限量{{item.stock_num_desc}}张</view>
						<view class="list-item-price-box">
							<view class="list-item-price">￥{{item.sale_price}}</view>

						</view>
					</view>
					<view style="min-width: 44px;">
						<view class="list-item-price-dit" style="font-weight: 500;">
							{{item.sale_status | filterStatus}}
						</view>
					</view>
				</view>
			</scroll-view>

		</view>
		<view class="container-bottom" v-if="!loginFlag">
			<view class="need-login">
				<text>元音符-原创音乐聚集地</text>
				<button class="to-login" @tap="handLogin()">登录</button>
				<text class="cuIcon-close" style="font-size: 16px;color: #686868" @click="handleCloseLogintag"></text>
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
	import {
		filterTime,
		getTimeData
	} from '../../utils/index.js'
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
				timer: null
			}
		},
		onLoad() {
			this.getList()
		},
		filters: {
			filterStatus(e) {
				const list = {
					0: '未开售',
					1: '开售中',
					2: '已售罄'
				}
				return list[e] || '已售罄'
			}
		},
		methods: {
			filterTime1(e) {
				const date = getTimeData(e)
				return `${date.mon}月${date.dd}日 ${date.hh}:${date.MM}`
			},
			getList() {
				post(h5_collections_index_list, {
					page: this.page,
					sort: this.order
				}).then(res => {
					console.log('res', res)
					this.loginFlag = !!res.data.is_login
					if (res.data.list) {
						this.list = [...this.list, ...res.data.list]
					}

				})
			},
			handleClickUserCenter() {
				if (this.$store.state.user.token) {
					uni.navigateTo({
						url: '/pages/mine/mine'
					})
				} else {
					this.handLogin()
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
				if (!this.$store.state.user.token) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					uni.navigateTo({
						url: `/pages/preOrderDetails/preOrderDetails?product_item_id=${item.product_item_id}`
					})
				}

			},
			// 去往登录
			handLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			// 去下载
			handGoDownload() {
				return false
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
			border-radius: 10px;
			border: 0.5px solid #5F5F5F;
			border-radius: 10px;
			// background-color: #454545;
			padding: 8px 8px 10px 8px;
			display: flex;
			align-items: flex-start;
			margin-bottom: 16rpx;


			&-image {
				width: 120px;
				height: 120px;
				border-radius: 12px;

				&-box {
					width: 240rpx;
					height: 240rpx;
					position: relative;
				}
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

			&-box {
				display: flex;
				flex-direction: column;
				padding-left: 20rpx;
				flex: auto;
				color: #AEAEAE;
			}

			&-title {
				font-size: 16px;
				font-weight: 500;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden; //溢出内容隐藏
				text-overflow: ellipsis; //文本溢出部分用省略号表示
				display: -webkit-box; //特别显示模式
				-webkit-line-clamp: 2; //行数
				line-clamp: 2;
				-webkit-box-orient: vertical; //盒子中内容竖直排列
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 500;
				font-size: 16px;
				line-height: 22px;
				color: #ECECEC;


			}

			&-time {
				margin-top: 8px;
				height: 17px;
				font-size: 12px;
				text-align: left;
			}

			&-tag {
				margin-top: 4rpx;
				font-size: 12px;
			}

			&-price {
				font-size: 18px;
				color: #D10910;
				font-weight: 600;
				margin-top: auto;

				&-box {
					display: flex;
					align-items: flex-end;
					justify-content: space-between;
					width: 80%;
					margin-top: 20rpx;
				}

				&-dit {
					font-size: 14px;
					line-height: 20px;
					color: #AC9147;
				}
			}
		}
	}

	.need-login {
		position: fixed;
		bottom: 40px;
		left: 20rpx;
		right: 20rpx;
		background-color: #201A17;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40rpx;
		border-radius: 50px;
		height: 55px;
		-webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
		animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

		text {
			font-size: 16px;
			line-height: 22px;

			color: #ECECEC;
		}

		.to-login {
			padding: 0 60rpx;
			height: 80rpx;
			line-height: 80rpx;
			font-size: 16px;
			color: #ECECEC;
			background: #D10910;
			border-radius: 38px;
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

	.logo {
		width: 77px;
		height: 24px;
	}
</style>
