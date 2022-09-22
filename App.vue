<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.container {
		flex: auto;
		min-height: 100vh;
		background-color: $uni-bg-color;
		color: #fff;
		padding: 0 40rpx;
		position: relative;
	
		&-header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 40rpx 0 30rpx 0;
		}
	}
	
</style>
