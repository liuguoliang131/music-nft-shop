<template>
	<view class="window" @scroll="scroll" ref="window">
		<view class="scroll" ref="scroll">
			<slot :data="data"></slot>
			<!-- <view class="loading" v-show="loading">
				加载中...
			</view> -->
			<view class="noMore" v-show="isFinish">
				没有更多了
			</view>
			<view class="footer"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "myScroll",
		data() {
			return {
				scrollTop: 0
			};
		},
		props: {
			isFinish: {
				default: false
			},
			loading: {
				default: false
			},
			data: {
				type: Object,
				description: '和myTab组件组合使用，接收每个tab的list'
			}
		},
		watch: {
			// loading: {
			// 	handler(newVal) {
			// 		// console.log('watch loading', newVal)
			// 		if (newVal === false) {
			// 			// console.log('watch loading1', newVal)
			// 			this.notFull()
			// 		}
			// 	}
			// }
		},
		methods: {
			scroll(e) {
				this.scrollTop = this.$refs.window.$el.scrollTop
				// console.log('scroll', this.$refs.scroll.$el.scrollHeight - this.$refs.window.$el.scrollTop)
				if (this.$refs.scroll.$el.scrollHeight - this.$refs.window.$el.scrollTop <= this.$refs.window
					.$el.clientHeight + 10) {
					// console.log('到底了')
					this.onload()
				}
			},
			// 只要底边在窗口内 就触发load
			onload() {
				// console.log('onload', this.loading, this.isFinish)
				if (this.isFinish === false) {
					if (!this.loading) {
						// console.log('onload1', this.loading, this.isFinish)
						// console.log('onload', this.$refs.window.$el.clientHeight, this.$refs.scroll.$el.scrollHeight)
						this.$emit('load', this.data)
					}
					// this.$emit('load', this.data)

				}

			},
			// 滚动块高度小于窗口高度时会一直调用onload
			notFull() {
				// console.log('notFull', this.$refs.window.$el.clientHeight, this.$refs.scroll.$el.scrollHeight)
				if (this.$refs.scroll.$el.scrollHeight < this.$refs.window.$el.clientHeight) {
					console.log('notFull', this.$refs.window.$el.clientHeight, this.$refs.scroll.$el.scrollHeight)
					this.onload()
				}
			}
		},
		mounted() {
			// console.log('myScroll mounted')
			this.notFull()

		},
		created() {
			// console.log('myScroll created')
		},
		updated() {
			// console.log('myScroll updated')
			// 防止没有渲染就调用下次
			if (this.loading === false) {
				// console.log('watch loading1', newVal)
				this.notFull()
			}
		},
		activated() {
			// console.log('myScroll activated')
			this.$refs.window.$el.scrollTop = this.scrollTop
		}
	}
</script>

<style lang="scss" scoped>
	.window {
		position: relative;
		height: 100vh;
		overflow-y: scroll;
	}

	.scroll {
		width: 100%;

		.loading {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 60rpx;
			font-size: 24rpx;
			color: #AEAEAE;
		}

		.noMore {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 60rpx;
			font-size: 24rpx;
			color: #AEAEAE;
		}
	}
</style>
