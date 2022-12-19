<template>
	<view class="mySwitch">
		<view class="light-block" ref="block"></view>
		<view :class="['key',value===index?'here':'']" v-for="(key,index) in options" :key="index"
			@tap="handTap(index)">
			{{key}}
		</view>
	</view>
</template>

<script>
	export default {
		name: "mySwitch",
		props: {
			value: {
				required: true
			},
			options: {
				required: true,
				type: Array
			},
		},
		data() {
			return {

			}
		},
		methods: {
			handTap(index) {
				if (index === this.value) return false
				this.$emit('update:value', index)
				this.$emit('change', index)
			}
		},
		updated() {
			this.$refs.block.$el.style.left = this.value * this.$refs.block.$el.offsetWidth + 'px'
		}
	}
</script>

<style lang="scss">
	.mySwitch {
		position: relative;
		display: flex;
		align-items: center;
		width: 246rpx;
		height: 54rpx;
		background: #26231d;
		mix-blend-mode: normal;
		border-radius: 27rpx;

		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 400;
		font-size: 30rpx;
		line-height: 54rpx;
		color: #C5C5C5;

		.light-block {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 0;
			width: 123rpx;
			height: 54rpx;
			background: #FFFFFF;
			border-radius: 27rpx;
			transition: all 0.3s;
		}

		.key {
			z-index: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 123rpx;
			height: 54rpx;
			border-radius: 27rpx;
			transition: all 0.3s;
		}

		// 选中
		.here {
			color: #DC2D1E;
		}
	}
</style>
