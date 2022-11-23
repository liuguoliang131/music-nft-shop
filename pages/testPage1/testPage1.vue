<template>
	<view class="container">
		<MySwiper :list="list" :showPage="true"></MySwiper>
	</view>
</template>

<script>
	import MySwiper from '../../components/mySwiper.vue'
	export default {
		data() {
			return {
				list: [{
						image: 'https://file.yuanyinfu.com/a_2022-04-29-12-38-59-100047-6ef232385b64eb08ab69c42926bac532.jpg'
					},
					{
						image: 'https://file.yuanyinfu.com/a_2022-04-29-12-47-12-100051-854b10175a60e5a41130357fbbfb4f04.jpg'
					},
					{
						image: 'https://file.yuanyinfu.com/a_2022-04-29-12-55-22-100053-5b9775e1fb6d29664102d4a3ef5a09b1.jpg'
					}
				]
			};
		},
		components: {
			MySwiper
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;
		text-align: center;
	}
</style>
