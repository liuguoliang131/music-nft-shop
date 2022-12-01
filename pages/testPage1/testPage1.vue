<template>
	<view class="container">
		<!-- <MySwiper :list="list" :showPage="true"></MySwiper> -->
		<floating-component>
			<my-audio :name="active.name" class="audio1" id="audio1" width="700" :poster="active.cover_img"
				:block="block" :src="active.music_url" :play.sync="play" autoplay>
			</my-audio>
		</floating-component>
	</view>
</template>

<script>
	import MySwiper from '../../components/mySwiper.vue'
	import MyAudio from '../../components/my-audio/my-audio.vue'
	import FloatingComponent from '../../components/floatingComponent.vue'
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
				],
				play: true,
				block: {
					size: 12,
					color: '#dd524d'
				},
				active: {
					"name": "0923-004单曲测试",
					'singer': '哇哈哈',
					"desc": "04萤火虫的微光、独行的灯火，还是燎原的火把，都是值得被看见的女性力量，对别人来说，也许这些光亮微不足道，但对自己来说，每一个都是值得纪念的高光时刻",
					"music_url": "https://media.shenglangnft.com/music/1663550442714210.mp3",
					"music_time": 217,
					cover_img: 'https://file.yuanyinfu.com/a_2022-04-29-12-55-22-100053-5b9775e1fb6d29664102d4a3ef5a09b1.jpg',
					checked: true
				}
			};
		},
		components: {
			MySwiper,
			FloatingComponent,
			MyAudio
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;
		text-align: center;

	}
</style>
