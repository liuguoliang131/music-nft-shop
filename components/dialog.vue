<template>
	<view :class="['dialog',visible?'visible':'hidden']" @tap.self="close">
		<view class="center-box">
			<slot v-if="visible"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "MyDialog",
		data() {
			return {
				visible: false
			};
		},
		methods: {
			show() {
				this.visible = true
			},
			close() {
				this.visible = false
			}
		}
	}
</script>

<style lang="scss">
	.dialog {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100vw;
		height: 0;
		background-color: rgba(0, 0, 0, 0);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.5s;

		.center-box {
			width: 500rpx;
			min-height: 0;
			background-color: transparent;
			border-radius: 16rpx;
			background-color: #fff;
			transition: background-color 0.3s;
			color: rgba(0, 0, 0, 0.9);
			overflow: hidden;
		}
	}

	.visible {
		background-color: rgba(0, 0, 0, 0.5);
		height: 100vh;
		visibility: visible;

		.center-box {
			border-radius: 16rpx;
			background-color: #fff;
			overflow: hidden;
		}
	}

	.hidden {
		visibility: hidden;
	}
</style>
