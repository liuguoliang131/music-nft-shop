<template>
	<view class="container">
		idAuth
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			async handSave() {
				try {

				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: e.message,
						icon: 'error'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0 40rpx;
	}
</style>
