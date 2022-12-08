<template>
	<view class="audio-warp">
		<view class="cover-warp" :class="{ hasbg: !$store.state.globalAudio.music.index_url }">
			<image class="cover-img" :src="$store.state.globalAudio.music.index_url"
				v-if="$store.state.globalAudio.music.index_url"></image>
			<view class="play-btn" :class="{ pause: !$store.state.globalAudio.audioContext.paused }"
				@click="handleBtnClick"></view>
		</view>
		<view class="audio-con">
			<view class="audio-time-info">
				<text class="audio-time">{{ $store.state.globalAudio.audioTimeUpdate }}</text>
				<slider class="audio-slider" :block-size="12" block-color="#dd524d" activeColor="#dd524d"
					:value="$store.state.globalAudio.slider" @changing="_seeking" @change="_seeked" />
				<text class="audio-time">{{ $store.state.globalAudio.audioTimeTotal }}</text>
			</view>
			<text class="audio-title am-text-eill">{{ $store.state.globalAudio.music.product_name }}</text>
			<!-- <text class="audio-author am-text-eill">{{ $store.state.globalAudio.music.author_name }}</text> -->
		</view>
	</view>
</template>

<script>
	export default {
		name: 'GlobalAudio',
		props: {

		},
		computed: {

		},
		data() {
			return {

			}
		},
		watch: {

		},
		created() {

		},
		beforeDestroy() {

		},
		methods: {
			// 播放暂停
			handleBtnClick() {
				if (this.$store.state.globalAudio.audioContext.paused) {
					this.$store.state.globalAudio.audioContext.play()
				} else {
					this.$store.state.globalAudio.audioContext.pause()
				}


			},
			_seeked(e) {
				const val = (e.detail.value / 100) * this.$store.state.globalAudio.audioContext.duration
				this.$store.state.globalAudio.audioContext.seek(val) //跳转进度
				// this.$store.commit('globalAudio/set_slider', e.detail.value)
			}
		}
	};
</script>

<style lang="scss">
	.am-text-eill {
		/*超出省略号*/
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.audio-warp {
		display: flex;
		overflow: hidden;
		width: 700rpx;
		height: 3.5em;
		border-radius: 0.2em;
		border: 1px solid rgba(0, 0, 0, 0.3);
		background-color: #ffff;
		padding: 0.5em 0;
		border-radius: 0.5em;
	}

	.cover-warp {
		position: relative;
		flex-shrink: 0;
		width: 3.5em;
		height: 3.5em;
		margin-left: 0.5em;

		&.hasbg {
			background-color: #353535;
		}

		.cover-img {
			width: 3.5em;
			height: 3.5em;
		}

		.play-btn {
			//居中
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translateX(-50%) translateY(-50%);
			width: 2.5em;
			height: 2.5em;
			border-radius: 50%;
			background-size: 100% 100%;
			background-image: url('https://file.yuanyinfu.com/front-end-lib/play.png');

			&.pause {
				background-image: url('https://file.yuanyinfu.com/front-end-lib/pause.png');
			}
		}
	}

	.audio-con {
		position: relative;
		flex: 1;
		padding: 0 1em;
		background-color: #ffff;

		.audio-title {
			position: absolute;
			left: 10%;
			top: 0;
			color: #AEAEAE;
		}

		.audio-author {
			position: absolute;
			left: 10%;
			bottom: 0;
			color: #888888;
		}

		.audio-time-info {
			display: flex;
			flex-wrap: nowrap;
			height: 100%;
			align-items: center;
			//要添加该属性，防止滑动报错
			touch-action: none;

			.audio-time {
				color: #9d9d9d;
			}

			.audio-slider {
				flex: 1;
			}
		}
	}
</style>
