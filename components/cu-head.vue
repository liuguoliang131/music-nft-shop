<template>
	<view class="cu-head">
		<image src="../static/left.png" mode="" @click="navBack"></image>
	</view>
</template>

<script>
	export default {
		name:"cu-head",
		data() {
			return {
				
			};
		},
		methods:{
			navBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped >
	.cu-head{
		height: 44px;
		width: 100vw;
		line-height: 44px;
		image{
			height: 16px;
			width: 16px;
		}
	}

</style>
