<template>
	<view class="swiper" ref="swiper">
		<view class="strip" ref="strip">
			<view class="strip-item" v-for="(item,index) in list" :key="index" @touchstart="touchStart($event,index)"
				@touchmove="touchMove($event,index)" @touchend="touchEnd($event,index)">
				<image class="cover" :src="item.image" mode=""></image>
				<image class="button" src="https://file.yuanyinfu.com/front-end-lib/play.png" mode="" @tap="handGo(item.url)"></image>
			</view>
		</view>
		<view class="page">
			<view v-for="(item,index) in list" :key="index" :class="['page-item',activeIndex===index?'active':'']">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "mySwiper",
		data() {
			return {
				width: 0,
				height: 0,
				startX: 0,
				moveX: 0,
				startOffset: 0,
				loading: false, //动画运行中不允许再操作
				activeIndex: 0
			};
		},
		props: {
			list: {
				required: true,
				type: Array,
				description: `[
					{
						image:'https://xxxx....',
						url:'https://xxxxxxxx'  点击
					}
				]
				`
			},
			showPage: {
				default: true,
				description: '是否显示小点'
			}
		},
		methods: {
			// 轮播图大小为父盒子的宽高
			init() {
				this.width = this.$refs.strip.$parent.$parent.$parent.$el.offsetWidth
				this.height = this.$refs.strip.$parent.$parent.$parent.$el.offsetHeight
				this.$refs.swiper.$el.style.width = this.width + 'px'
				this.$refs.swiper.$el.style.height = this.height + 'px'
				this.$refs.strip.$children.forEach(item => {
					item.$el.style.width = this.width + 'px'
					item.$el.style.height = this.height + 'px'
				})
			},
			touchStart(e, index) {
				if (this.loading) return false
				this.startX = e.changedTouches[0].pageX
				this.moveX = e.changedTouches[0].pageX
				this.startOffset = this.$refs.strip.$el.offsetLeft //滑动条相对视口的距离
				// console.log('start', this.startX, index)
			},
			touchMove(e, index) {
				if (this.loading) return false
				// console.log('move', e.changedTouches[0].pageX, index)
				this.$refs.strip.$el.style.left = this.$refs.strip.$el.offsetLeft + (e.changedTouches[0].pageX - this
					.moveX) + 'px'
				this.moveX = e.changedTouches[0].pageX
			},
			touchEnd(e, index) {
				if (this.loading) return false

				// console.log('end', e.changedTouches[0].pageX, index)
				const distanceX = e.changedTouches[0].pageX - this.startX //正数向右划 负数向左划
				this.$refs.strip.$el.style.transition = 'left 0.3s'
				if (distanceX > 0) {
					if (index === 0) {
						// 左边没图了  回正
						this.$refs.strip.$el.style.left = this.startOffset + 'px' //回正
					} else {
						this.$refs.strip.$el.style.left = this.startOffset + this.width + 'px'
						this.activeIndex = index - 1
					}
				} else if (distanceX < 0) {
					if (this.list.length === index + 1) {
						this.$refs.strip.$el.style.left = this.startOffset + 'px'
					} else {
						this.$refs.strip.$el.style.left = this.startOffset - this.width + 'px'
						this.activeIndex = index + 1
					}

				} else {
					this.$refs.strip.$el.style.left = this.startOffset + 'px'
				}

				this.loading = setTimeout(() => {
					this.$refs.strip.$el.style.transition = 'none'
					this.loading = false
				}, 300)
			},
			handGo(url) {
				console.log(url)
			}
		},
		mounted() {
			this.init()
		}
	}
</script>

<style lang="scss">
	.swiper {
		// 视口
		position: relative;
		overflow: hidden;
		// width: 628rpx;
		// height: 362rpx;
		margin: auto;

		.strip {
			// 滚动的长条
			position: absolute;
			top: 0;
			left: 0;
			display: flex;
			align-items: center;

			.strip-item {
				// 每一张图
				// width: 628rpx;
				// height: 362rpx;
				position: relative;

				.cover {
					width: 100%;
					height: 100%;
				}

				.button {
					position: absolute;
					bottom: 26.8rpx;
					right: 20.8rpx;
					width: 96rpx;
					height: 96rpx;
				}
			}
		}

		.page {
			width: 100%;
			display: flex;
			align-content: center;
			justify-content: center;
			flex-wrap: wrap;
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: 999;

			.page-item {
				border-radius: 4rpx;
				width: 30rpx;
				height: 8rpx;
				background-color: rgba(255, 255, 255, 0.3);
				margin: 10rpx;
			}

			.active {
				background-color: rgba(255, 255, 255, 0.8);
			}
		}
	}
</style>
