<template>
	<view class="mytab" ref="myTab">
		<view :class="[slide?'tab-window':'noSlide']">
			<view class="bar">
				<view :class="['bar-item',activeBar===item.id?'bar-active':'']" v-for="item in list" :key="item.id"
					@tap="handActive(item)">
					{{item.name}}
					<view class="line"></view>
				</view>
			</view>
		</view>
		<view class="content-widow">
			<view class="content-block" ref="contentBlock">
				<view class="content-item" v-for="item in list" :key="item.id">
					<slot name="item" :data="item"></slot>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name: "myTab",
		props: {
			slide: {
				default: true,
				description: '是否让横向滑动'
			},
			list: {
				default: () => [],
				type: Array
			},
			activeBar: {
				type: Number,
				required: true
			}
		},
		data() {
			return {

			};
		},
		watch: {
			activeBar: {
				handler(newVal) {
					const idx = this.list.findIndex((item, index) => item.id === newVal)
					this.$refs.contentBlock.$el.style.left = -idx * this.$refs.myTab.$el.offsetWidth + 'px'
				}
			}
		},
		methods: {
			init() {
				console.log(this.$refs.myTab)
			},
			handActive(item) {
				this.$emit('active', item.id)
			}
		}
	}
</script>

<style lang="scss">
	.mytab {
		width: 750rpx;

		.tab-window {
			width: 750rpx;
			height: 80rpx;
			display: -webkit-box;
			overflow-x: scroll;

			&::-webkit-scrollbar {
				display: none;
			}

			.bar {
				height: 100%;
				display: flex;
				align-items: center;

				.bar-item {
					position: relative;
					height: 100%;
					width: 187.5rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 28rpx;
					color: #AEAEAE;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
					// transition: all 0.5s;

					.line {
						position: absolute;
						bottom: 0rpx;
						left: 50%;
						transform: translate(-50%, 0);
						width: 60rpx;
						height: 6rpx;
						border-radius: 2rpx;
						opacity: 0;
						background-color: #C8A964;
						transition: all 0.5s;
					}
				}

				.bar-active {
					color: #C8A964;
					font-weight: 600;

					.line {
						opacity: 1;
					}
				}
			}
		}

		.noSlide {
			width: 750rpx;
			height: 80rpx;

			.bar {
				box-sizing: border-box;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.bar-item {
					position: relative;
					height: 100%;
					max-width: 187.5rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 28rpx;
					color: #AEAEAE;
					overflow: hidden; // 溢出隐藏
					white-space: nowrap; // 强制一行
					text-overflow: ellipsis; // 文字溢出显示省略号
					// transition: all 0.5s;

					.line {
						position: absolute;
						bottom: 0rpx;
						left: 50%;
						transform: translate(-50%, 0);
						width: 60rpx;
						height: 4rpx;
						border-radius: 2rpx;
						opacity: 0;
						background-color: #C8A964;
						transition: all 0.5s;
					}
				}

				.bar-active {
					color: #C8A964;
					font-weight: 600;

					.line {
						opacity: 1;
					}
				}
			}
		}

		.content-widow {
			width: 750rpx;
			position: relative;

			.content-block {
				position: absolute;
				top: 0;
				left: 0;
				width: 750rpx;
				display: flex;
				transition: all 0.5s;

				.content-item {
					width: 100%;
				}
			}

		}
	}
</style>
