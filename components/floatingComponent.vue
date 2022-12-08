<template>
	<view v-if="drag" class="floatingComponent" ref="floating" @touchstart="onStart" @touchmove="onMove"
		@touchend="onEnd">
		<slot></slot>
	</view>
	<view v-else class="floatingComponent" ref="floating">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "floatingComponent",
		props: {
			drag: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				fLeft: 0, //手指距离盒子内边缘的距离
				fTop: 0,
				left: 0,
				top: 0
			};
		},
		methods: {
			init() {
				console.log('floating', this.$refs.floating)
			},
			onStart(e) {
				this.fLeft = e.touches[0].clientX - this.$refs.floating.$el.offsetLeft
				this.fTop = e.touches[0].clientY - this.$refs.floating.$el.offsetTop
			},
			onMove(e) {
				const width = window.innerWidth //页面窗口宽度
				const height = window.innerHeight
				let x = e.touches[0].clientX - this.fLeft
				let y = e.touches[0].clientY - this.fTop
				let boxWidth = this.$refs.floating.$el.offsetWidth //当前移动盒子宽度
				let boxHeight = this.$refs.floating.$el.offsetHeight
				if (x + boxWidth < width && x > 0) {
					this.$refs.floating.$el.style.left = x + 'px'
				}
				if (y + boxHeight < height && y > 0) {
					this.$refs.floating.$el.style.top = y + 'px'
				}


			},
			onEnd(e) {
				console.log('onEnd', e)
			},
		},
		mounted() {
			this.init()
		}
	}
</script>

<style lang="scss">
	.floatingComponent {
		color: #ffff;
		position: fixed;
		z-index: 11;
		bottom: 0;
		left: 25rpx;
		// width: 300rpx;
		// height: 300rpx;
	}
</style>
