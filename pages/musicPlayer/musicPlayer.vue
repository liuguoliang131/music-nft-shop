<template>
	<view class="container">
		<nav-head title="欣赏音乐"></nav-head>
		<view class="title">
			<text class="title-l"></text>
			{{name}}
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in music_list" :key="index" @tap="handSelect(item)">
				<text class="item-idx">
					{{index+1<10?'0'+(index+1):index+1}}
				</text>
				<text class="item-content">
					<text class="name">{{item.name}}</text>
					<text class="author">{{item.singer}}</text>
				</text>
				<image v-if="item.checked" class="item-icon"
					src="https://file.yuanyinfu.com/front-end-lib/pauseIcon.png"></image>
				<image v-else class="item-icon" src="https://file.yuanyinfu.com/front-end-lib/playIcon.png"></image>

			</view>
		</view>
		<view class="player">
			<!-- 			<audio id="audio1" ref="audio1" :src="active.music_url" :name="active.name" :controls="true"
				@error="onError" @play="onPlay" @pause="onPause" @timeupdate="onTimeupdate" @ended="onEnded"></audio> -->
			<my-audio v-if="active.music_url" :name="active.name" id="audio1" :src="active.music_url"
				:play.sync="audioPlay" autoplay>
			</my-audio>
		</view>

	</view>
</template>

<script>
	import NavHead from '../../components/navHead.vue'
	import MyAudio from '../../components/my-audio/my-audio.vue'
	export default {
		components: {
			MyAudio,
			NavHead
		},
		data() {
			return {
				name: '',
				music_list: [],
				active: {
					"name": "",
					'singer': "",
					"desc": "",
					"music_url": "",
					"music_time": 0,
					checked: true
				},
				audioPlay: false
			};
		},
		onLoad(option) {
			this.$store.state.globalAudio.audioContext.pause()
			if (option.music_list) {
				const list = JSON.parse(option.music_list)
				list.forEach((item, index) => {
					item.checked = !index
				})
				this.music_list = list

			}
			this.name = option.name
			this.active = this.music_list[0]

		},
		onHide() {
			this.$store.state.globalAudio.audioContext.pause()
		},
		beforeDestroy() {
			this.$store.state.globalAudio.audioContext.pause()
		},
		methods: {
			handleBack() {

				let currentRoutes = getCurrentPages(); // 获取当前打开过的页面路由数组
				console.log(currentRoutes)
				if (currentRoutes.length === 1) {
					uni.redirectTo({
						url: '/pages/index/index'
					})
				} else {
					uni.navigateBack({
						delta: 1, //返回层数，2则上上页
					})
				}
			},
			// 拖动进度条
			handTouchmove(e) {
				const clientX = e.touches[0].pageX
				const parentX = this.$refs.progress.$el.offsetLeft
				const barWidth = this.$refs.progressBar.$el.offsetWidth //灰色进度条的总长
				console.log('鼠标距离左侧', clientX)
				console.log('进度条组件离左侧距离', parentX)
				let nowWidth = clientX - parentX //现在宽度
				if (nowWidth < 0) {
					nowWidth = 0
				} else if (nowWidth > barWidth) {
					nowWidth = barWidth
				}
				this.$refs.redLine.$el.style.width = nowWidth + 'px'

			},
			// 点击歌曲item
			handSelect(item) {
				if (item.checked) return false
				this.audioPlay = false
				this.music_list.forEach(item1 => item1.checked = false)
				item.checked = true
				this.active = item
				// console.log(this.$refs.audio1.$el.children[0].play())
				// this.$refs.audio1.$el.children[0].play()
				// this.audioPlay = true
			},
			onError(e) {
				console.log('onError', e)
			},
			onPlay(e) {
				console.log('onPlay', e)
			},
			onPause(e) {
				console.log('onPause', e)
			},
			onTimeupdate(e) {
				console.log('onTimeupdate', e)
			},
			onEnded(e) {
				console.log('onEnded', e)
			},
		}
	}
</script>

<style lang="scss">
	.container {
		position: relative;
		box-sizing: border-box;
		padding: 0;


		.title {
			position: fixed;
			left: 0;
			z-index: 10;
			display: flex;
			align-items: center;
			width: 100%;
			height: 82rpx;
			font-size: 36rpx;
			color: #AC9147;
			background-color: $uni-bg-color;

			.title-l {
				width: 6rpx;
				height: 32rpx;
				margin-left: 40rpx;
				margin-right: 20rpx;
				border-radius: 2rpx;
				background: #AC9147;
			}
		}

		.list {
			padding-top: 70rpx;
			padding-bottom: 120rpx;
			width: 100%;
			overflow-y: scroll;

			.item {
				display: flex;
				align-items: center;
				margin: 0 24rpx;
				padding: 0 15rpx;
				height: 102rpx;
				border-bottom: 1rpx solid #363636;
				font-weight: 500;
				font-size: 28rpx;
				color: #ECECEC;
				overflow: hidden; // 溢出隐藏
				white-space: nowrap; // 强制一行
				text-overflow: ellipsis; // 文字溢出显示省略号

				.item-idx {
					margin-right: 16rpx;
				}

				.item-content {
					flex: 1;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号

					.name {}

					.author {
						margin-left: 16rpx;
						font-weight: 400;
						font-size: 26rpx;
						color: #AEAEAE;
					}
				}

				.item-icon {
					width: 48rpx;
					height: 48rpx;
				}
			}
		}

		.player {
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 10;
			width: 100%;
			height: 102rpx;
			background-color: #fff;
			display: flex;
			align-items: center;

			#audio1 {
				width: 750rpx !important;

				/deep/.uni-audio-default {
					width: 100% !important;
				}
			}

			.cover {
				width: 90rpx;
				height: 90rpx;
				border-radius: 45rpx;
				margin-left: 21rpx;
				margin-right: 25rpx;
			}

			.player-c {
				flex: 1;
				height: 80rpx;
				background-color: rgba(0, 0, 0, 0.1);

				.music {
					font-weight: 700;
					font-size: 32rpx;
					line-height: 44rpx;
					height: 44rpx;
					color: #000000;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号

					.music-name {
						margin-right: 16rpx;
					}

					.music-author {
						font-size: 26rpx;
						font-weight: 400;
						line-height: 36rpx;
						color: #AEAEAE;
					}
				}

				.box2 {
					padding-left: 300rpx;
					background-color: pink;
					width: 158rpx;
					font-size: 20rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;

					.box2-line {
						margin: 0 8rpx;
					}
				}



			}

			.player-icon {
				width: 72rpx;
				height: 72rpx;
				margin-right: 50rpx;
			}

			.progress {
				position: absolute;
				top: 60rpx;
				left: 136rpx;
				width: 300rpx;
				height: 42rpx;
				display: flex;
				align-items: center;

				.bar {
					width: 280rpx;
					height: 3rpx;
					background: #AEAEAE;
				}

				.bar-red {
					position: absolute;
					top: 0;
					left: 0;
					display: flex;
					align-items: center;
					height: 42rpx;

					.red-line {
						width: 20rpx;
						height: 3rpx;
						background: #D10910;
					}

					.red-btn {
						position: absolute;
						top: 12rpx;
						right: -9rpx;
						width: 18rpx;
						height: 18rpx;
						background: #D10910;
						border-radius: 9rpx;
					}
				}


			}
		}

	}
</style>
