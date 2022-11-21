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
		</view>
	</view>
</template>

<script>
	export default {
		name: "myScroll",
		data() {
			return {

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
			loading: {
				handler(newVal) {
					if (newVal === false) {
						this.notFull()
					}
				}
			}
		},
		methods: {
			scroll(e) {
				// console.log('scroll', this.$refs.scroll.$el.scrollHeight - this.$refs.window.$el.scrollTop)
				if (this.$refs.scroll.$el.scrollHeight - this.$refs.window.$el.scrollTop <= this.$refs.window
					.$el.clientHeight + 10) {
					// console.log('到底了')
					this.onload()
				}
			},
			// 只要底边在窗口内 就触发load
			onload() {
				// console.log('onload')
				if (this.isFinish === false) {
					this.$emit('load', this.data)
				}

			},
			// 滚动块高度小于窗口高度时会一直调用onload
			notFull() {
				console.log('notFull', this.$refs.window.$el.clientHeight, this.$refs.scroll.$el.scrollHeight)
				if (this.$refs.scroll.$el.scrollHeight < this.$refs.window.$el.clientHeight) {
					// console.log(this.$refs.window.$el.clientHeight, this.$refs.scroll.$el.scrollHeight)
					this.onload()
				}
			}
		},
		mounted() {
			this.notFull()

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
