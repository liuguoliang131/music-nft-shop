<template>
	<view class="container">
		<nav-head title="DEMO助力"></nav-head>
		<view class="box1">
			<view class="box1-1">
				<image class="box1-1-1" src="https://file.yuanyinfu.com/front-end-lib/turn.png" mode=""></image>
				<image class="box1-1-2" src="../../static/Rectangle 41052.png" mode=""></image>
				<image class="box1-1-3" v-if="$store.state.globalAudio.paused"
					src="https://file.yuanyinfu.com/front-end-lib/play.png" mode="" @tap="handPlay"></image>
				<image class="box1-1-3" v-else src="https://file.yuanyinfu.com/front-end-lib/pause.png" mode=""
					@tap="handPlay"></image>

			</view>
		</view>
		<view class="box2">
			<view class="countdown">
				孵化期剩余
				<text>01</text>
				天
				<text>23</text>
				时
				<text>44</text>
				分
				<text>33</text>
				秒
			</view>
		</view>
		<view class="box3">
			<view class="box3-1 nowrap">风继续吹风继续吹风继续吹风继续吹风继风继续吹风继续吹风继续吹风继续吹风继</view>
			<view class="box3-2 nowrap">
				<view class="box3-2-1">
					共享DEMO
				</view>
				<view class="box3-2-1">
					限量1000份
				</view>
			</view>
			<view class="box3-3 nowrap">
				<view class="total">
					<view class="progress" style="width:45%;"></view>
				</view>
				<view class="val">
					34%
				</view>
			</view>
			<view class="box3-splitline"></view>
			<view class="box3-4 nowrap">
				<view class="box3-4-1">
					孵化于2020.08.25 10:00:00结束
				</view>
				<view class="box3-4-2 nowrap">
					助力目标￥20000
				</view>
			</view>
		</view>
		<view class="box4">
			<view class="box4-1">
				助力榜单
			</view>
			<view class="box4-2">
				计算中
			</view>
		</view>
		<view class="box5">
			<view class="box5-1">
				<image src="https://file.yuanyinfu.com/front-end-lib/redu-icon.png" mode="" class="box5-1-icon"></image>
				<text class="box5-1-text nowrap">
					<text class="text-1">热度</text>
					<text class="text-2">1.13543653456万</text>
				</text>
			</view>
			<view class="box5-1">
				<image src="https://file.yuanyinfu.com/front-end-lib/bofangliang-icon.png" mode="" class="box5-1-icon">
				</image>
				<text class="box5-1-text nowrap">
					<text class="text-1">热度</text>
					<text class="text-2">1.212541252356万</text>
				</text>
			</view>
			<view class="box5-1">
				<image src="https://file.yuanyinfu.com/front-end-lib/fenxiangliang-icon.png" mode=""
					class="box5-1-icon"></image>
				<text class="box5-1-text nowrap">
					<text class="text-1">助力</text>
					<text class="text-2">124152</text>
				</text>
			</view>
		</view>
		<view class="card">
			<view class="card-body">
				<view class="title">
					模式介绍
				</view>
				<view class="h16"></view>
				<view class="desc" v-html="`“Demo孵化”致力于让更多乐迷朋友可以参与到歌曲的创作中。Demo小样上传平台开启孵化助力后，用户可根据自己对作品的喜爱程度进行购买助力。
当助力进度满足成功基准线，该demo作品视为孵化成功，孵化成功后持有者可按份额共享该demo制作成的成品歌曲的50%歌曲版权收益（线上+线下）。
歌曲版权收益包括但不限于：
1.线上线下演唱会
2.集团城市中心品牌推广歌曲使用授权
3.ME等流媒体发行按播放量计费
4.快手等短视频BGM使用
5.电台/电视台/网播/直播等付费授权
6.线下公共播放：KTV/商超等付费播放
助力进度未满足成功基准线，作品将视为孵化失败，进行退款。
作品助力成功后，将进入成品打造阶段，平台会邀请知名且唱功一流的实力歌手、音乐圈迅速蹿升或音乐垂类的佼佼者、网红等进行成品的演唱。`">

				</view>
			</view>
		</view>
		<view class="card">
			<view class="card-body">
				<view class="title">
					孵化助力须知
				</view>
				<view class="h16"></view>
				<view class="desc" v-html="`1.用户点击“购买助力”后2分钟内未付款，则订单将自动取消。
2.本商品为虚拟商品而非实物，仅限经实名认证满18周岁的用户购买。
3.本商品一经售出（助力成功），不支持退换。
4.本商品的版权由平台拥有，用户不得用于任何商业用途。
5.请远离非理性炒作，防范欺诈风险。
6.最终解释权归官方所有。`">

				</view>
			</view>
		</view>
		<view class="card">
			<view class="card-body">
				<view class="title">
					孵化详情
				</view>

				<view class="title">
					类型说明
				</view>
				<view class="h16"></view>
				<view class="desc"
					v-html="`共享DEMO：限量发售，不增发，具有稀有性。购买者按照自身意愿进行对应份额购买，持有者可按份额共享该demo制作成的成品歌曲的50%歌曲版权收益（线上+线下），具体将以官方公告为准，最终解释权归平台所有。`">

				</view>

				<view class="title">
					专辑信息
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.container {
		position: relative;
		padding: 0;
		text-align: center;

		/deep/.slots {
			background-image: linear-gradient(to top, #0e0e10, #0f0f10);
		}

		/deep/.web {
			background-image: linear-gradient(to top, #0e0e10, #0f0f10);
		}

		/deep/.web .nav {
			background-color: transparent;
		}



		.box1 {
			height: 568rpx;
			background: url('https://file.yuanyinfu.com/front-end-lib/demoAssistanceBox1.png') no-repeat 0 0/750rpx 568rpx;
			overflow: hidden;
			margin: auto;

			.box1-1 {
				position: relative;
				width: 372rpx;
				height: 328rpx;
				margin: 176rpx auto 0 auto;

				.box1-1-1 {
					position: absolute;
					top: 50%;
					right: 0;
					transform: translate(0, -50%);
					width: 297.3rpx;
					height: 297.3rpx;
				}

				.box1-1-2 {
					position: absolute;
					top: 0;
					left: 0;
					width: 328rpx;
					height: 328rpx;
				}

				.box1-1-3 {
					position: absolute;
					top: 112rpx;
					left: 112rpx;
					width: 104rpx;
					height: 104rpx;
				}
			}
		}


		.box2 {

			// 倒计时
			.countdown {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 700rpx;
				height: 68rpx;
				margin: auto;
				box-shadow: 0 20rpx 0 0 #940006;
				background: linear-gradient(180deg, #D10910 0%, #AC0006 62.55%, #940006 80.09%);
				border-radius: 8rpx 8rpx 0 0;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 26rpx;
				line-height: 40rpx;
				color: #ECECEC;


				/* Inside auto layout */

				flex: none;
				order: 0;
				flex-grow: 0;

				text {
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: center;
					line-height: 40rpx;
					width: 40rpx;
					height: 40rpx;
					border: 0.5rpx solid #ECECEC;
					border-radius: 4rpx;
					margin: 0 8rpx 0 12rpx;
				}
			}


		}

		.box3 {
			box-sizing: border-box;
			width: 700rpx;
			height: 260rpx;
			background: #292929;
			border-radius: 8rpx;
			margin: auto;

			.box3-1 {
				text-align: left;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 500;
				font-size: 36rpx;
				line-height: 50rpx;
				color: #ECECEC;
				padding: 20rpx 24rpx 0 24rpx;
			}

			.box3-2 {
				display: flex;
				align-items: center;
				padding: 8rpx 24rpx 0 24rpx;

				.box3-2-1 {
					display: flex;
					align-items: center;
					justify-content: center;
					box-sizing: border-box;
					padding: 0 10rpx;
					min-width: 140rpx;
					height: 36rpx;
					background-color: #4f4d4c;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 24rpx;
					line-height: 36rpx;
					color: #F5D78E;
					margin-right: 16rpx;
					border-radius: 7rpx;
				}
			}

			.box3-3 {
				display: flex;
				align-items: center;
				justify-content: center;
				box-sizing: border-box;
				width: 100%;
				height: 72rpx;
				padding: 0 24rpx;

				.total {
					position: relative;
					width: 584rpx;
					height: 14rpx;
					background: #4F4D4C;
					border-radius: 7rpx;

					.progress {
						position: absolute;
						top: 0;
						left: 0;
						width: 0;
						height: 14rpx;
						background: linear-gradient(270deg, #D10910 0%, #F75E64 100%);
						border-radius: 7rpx;
						transition: all 1s;
					}

					.progress-fail {
						background: #696969;
					}
				}

				.val {
					margin-left: 16rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 600;
					font-size: 24rpx;
					line-height: 34rpx;
					color: #D10910;
				}

				.val-fail {
					background: #AEAEAE;

				}
			}

			.box3-splitline {
				width: 676rpx;
				height: 0.5px;
				background-color: #5F5F5F;
				margin: auto;
			}

			.box3-4 {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 70rpx;
				padding: 0 24rpx;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 24rpx;
				line-height: 70rpx;
				color: #AEAEAE;
				min-width: 0;

				.box3-4-1 {
					margin-right: 24rpx;
				}
			}
		}

		.box4 {
			display: flex;
			align-items: center;
			justify-content: space-between;
			background: #292929;
			border-radius: 8rpx;
			box-sizing: border-box;
			width: 700rpx;
			height: 96rpx;
			padding: 0 32rpx 0 24rpx;
			margin: 24rpx auto 0 auto;
			overflow: hidden;

			.box4-1 {
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 600;
				font-size: 32rpx;
				line-height: 96rpx;
				color: #E4C985;
			}

			.box4-2 {
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 28rpx;
				line-height: 96rpx;
				/* identical to box height */

				text-align: right;

				color: #AEAEAE;
			}
		}

		.box5 {
			display: flex;
			align-items: center;
			justify-content: space-around;
			height: 96rpx;
			width: 700rpx;
			margin: 24rpx auto 0 auto;
			overflow: hidden;
			background: #292929;
			border-radius: 8rpx;
			font-family: 'DIN';
			font-style: normal;
			font-weight: 500;
			font-size: 24rpx;
			line-height: 96rpx;
			min-width: 0;
			/* identical to box height */


			color: #AEAEAE;

			.box5-1 {
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding: 0 24rpx;

				.box5-1-icon {
					width: 44rpx;
					height: 44rpx;
				}

				.box5-1-text {
					// display: flex;
					// align-items: center;
					max-width: 150rpx;

					.text-1 {
						margin: 0 4rpx;
					}

					.text-2 {}
				}

			}
		}

		.card {
			box-sizing: border-box;
			width: 700rpx;
			padding: 32rpx 16rpx;
			background: #292929;
			border-radius: 8rpx;
			margin: 24rpx auto 0 auto;

			.card-body {
				border: 0.5px solid #5B5B5B;
				border-radius: 8rpx;
				min-height: 40rpx;
				padding: 20rpx;
			}
		}

		.title {
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 600;
			font-size: 32rpx;
			line-height: 44rpx;
			color: #E4C985;
			text-align: left;
		}

		.desc {
			text-align: left;
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 400;
			font-size: 26rpx;
			line-height: 40rpx;
			color: #AEAEAE;
			white-space: pre-wrap; //识别换行符 并且超过父盒子宽度自动换行
		}

		.h16 {
			height: 16rpx;
		}
	}
</style>
