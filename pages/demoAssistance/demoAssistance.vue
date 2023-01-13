<template>
	<view class='container'>
		<nav-head title='DEMO助力'></nav-head>
		<view class='box1'>
			<view class='box1-1'>
				<image class='box1-1-1' src="https://file.yuanyinfu.com/front-end-lib/turn.png" mode=''></image>
				<image class='box1-1-2' :src='data.index_url' mode=''></image>
				<template
					v-if="data.demo_item_id===$store.state.globalAudio.music.product_item_id&&$store.state.globalAudio.music.whatType==='3'">
					<image class='box1-1-3' v-if="$store.state.globalAudio.paused"
						src='https://file.yuanyinfu.com/front-end-lib/play.png' mode='' @tap="handPlay"></image>
					<image class='box1-1-3' v-else src='https://file.yuanyinfu.com/front-end-lib/pause.png' mode=''
						@tap="handPlay"></image>
				</template>
				<template v-else>
					<image class='box1-1-3' src='https://file.yuanyinfu.com/front-end-lib/play.png' mode=''
						@tap="handPlay"></image>
				</template>
			</view>
		</view>
		<view class='box2'>
			<view class='countdown'>
				孵化期剩余
				<text class='nowrap'>01</text>
				天
				<text class='nowrap'>23</text>
				时
				<text class='nowrap'>44</text>
				分
				<text class='nowrap'>33</text>
				秒
			</view>
		</view>
		<view class='box3'>
			<view class='box3-1 nowrap'>{{data.demo_name}}</view>
			<view class='box3-2 nowrap'>
				<view class='box3-2-1'>
					{{data.publish_type_desc}}
				</view>
				<view class='box3-2-1'>
					限量{{data.stock}}份
				</view>
			</view>
			<view class='box3-3 nowrap'>
				<view class='total'>
					<view class='progress' :style="progressStyle"></view>
				</view>
				<view class='val'>
					{{data.progress_info.percentage_desc||'0%'}}
				</view>
			</view>
			<view class='box3-splitline'></view>
			<view class='box3-4 nowrap'>
				<view class='box3-4-1'>
					{{data.sale_end_time_desc||(`孵化于${formatDate(data.sale_end_time)}结束`)}}
				</view>
				<view class='box3-4-2 nowrap'>
					助力目标￥{{data.baseline_amount}}
				</view>
			</view>
		</view>
		<view class='box4'>
			<view class='box4-1'>
				助力榜单
			</view>
			<view class='box4-2'>
				计算中
			</view>
		</view>
		<view class='box5'>
			<view class='box5-1'>
				<image src='https://file.yuanyinfu.com/front-end-lib/redu-icon.png' mode='' class='box5-1-icon'></image>
				<text class='box5-1-text nowrap'>
					<text class='text-1'>热度</text>
					<text class='text-2'>1.13543653456万</text>
				</text>
			</view>
			<view class='box5-1'>
				<image src='https://file.yuanyinfu.com/front-end-lib/bofangliang-icon.png' mode='' class='box5-1-icon'>
				</image>
				<text class='box5-1-text nowrap'>
					<text class='text-1'>热度</text>
					<text class='text-2'>1.212541252356万</text>
				</text>
			</view>
			<view class='box5-1'>
				<image src='https://file.yuanyinfu.com/front-end-lib/fenxiangliang-icon.png' mode=''
					class='box5-1-icon'></image>
				<text class='box5-1-text nowrap'>
					<text class='text-1'>助力</text>
					<text class='text-2'>124152</text>
				</text>
			</view>
		</view>
		<view class='card'>
			<view class='card-body'>
				<view class='title'>
					模式介绍
				</view>
				<view class='h16'></view>
				<view class='desc' v-html='`“Demo孵化”致力于让更多乐迷朋友可以参与到歌曲的创作中。Demo小样上传平台开启孵化助力后，用户可根据自己对作品的喜爱程度进行购买助力。
当助力进度满足成功基准线，该demo作品视为孵化成功，孵化成功后持有者可按份额共享该demo制作成的成品歌曲的50%歌曲版权收益（线上+线下）。
歌曲版权收益包括但不限于：
1.线上线下演唱会
2.集团城市中心品牌推广歌曲使用授权
3.ME等流媒体发行按播放量计费
4.快手等短视频BGM使用
5.电台/电视台/网播/直播等付费授权
6.线下公共播放：KTV/商超等付费播放
助力进度未满足成功基准线，作品将视为孵化失败，进行退款。
作品助力成功后，将进入成品打造阶段，平台会邀请知名且唱功一流的实力歌手、音乐圈迅速蹿升或音乐垂类的佼佼者、网红等进行成品的演唱。`'>

				</view>
			</view>
		</view>
		<view class='card'>
			<view class='card-body'>
				<view class='title'>
					孵化助力须知
				</view>
				<view class='h16'></view>
				<view class='desc' v-html='`1.用户点击“购买助力”后2分钟内未付款，则订单将自动取消。
2.本商品为虚拟商品而非实物，仅限经实名认证满18周岁的用户购买。
3.本商品一经售出（助力成功），不支持退换。
4.本商品的版权由平台拥有，用户不得用于任何商业用途。
5.请远离非理性炒作，防范欺诈风险。
6.最终解释权归官方所有。`'>

				</view>
			</view>
		</view>
		<view class='card'>
			<view class='card-body'>
				<view class='title'>
					孵化详情
				</view>
				<view class='detail'>
					<view class='detail-1'>
						<view class='detail-1-1'>
							孵化歌曲
						</view>
						<view class='detail-1-2 nowrap'>
							风继续吹
						</view>
					</view>
					<view class='detail-1'>
						<view class='detail-1-1'>
							作品风格
						</view>
						<view class='detail-1-2 nowrap'>
							风继续吹asdasdfgghjjklcvbcvbsdfsdfwerfwetweysdfdghdfhdfhdfsdfrewq为的人
						</view>
					</view>
					<view class='detail-1'>
						<view class='detail-1-1'>
							作品类型
						</view>
						<view class='detail-1-2 nowrap'>
							风继续吹
						</view>
					</view>
					<view class='detail-1'>
						<view class='detail-1-1'>
							作 曲 人
						</view>
						<view class='detail-1-2 nowrap'>
							阿松大沙发沙发
						</view>
					</view>
					<view class='detail-1'>
						<view class='detail-1-1'>
							作 词 人
						</view>
						<view class='detail-1-2 nowrap'>
							大大撒旦
						</view>
					</view>
					<view class='detail-1'>
						<view class='detail-1-1'>
							收益比例
						</view>
						<view class='detail-1-2 nowrap'>
							风继续吹
						</view>
					</view>
					<view class='detail-1'>
						<view class='detail-1-1'>
							收益周期
						</view>
						<view class='detail-1-2 nowrap'>
							风继续吹
						</view>
					</view>
					<view class='detail-1'>
						<view class='detail-1-1'>
							发行价格
						</view>
						<view class='detail-1-2 nowrap'>
							风继续吹
						</view>
					</view>
					<view class='detail-1'>
						<view class='detail-1-1'>
							发行限量
						</view>
						<view class='detail-1-2 nowrap'>
							风继续吹
						</view>
					</view>
					<view class='detail-1'>
						<view class='detail-1-1'>
							发布时间
						</view>
						<view class='detail-1-2 nowrap'>
							风继续吹
						</view>
					</view>
					<view class='detail-1'>
						<view class='detail-1-1'>
							孵化周期
						</view>
						<view class='detail-1-2 nowrap'>
							风继续吹
						</view>
					</view>
					<view class='detail-1'>
						<view class='detail-1-1'>
							成功基线
						</view>
						<view class='detail-1-2 nowrap'>
							风继续吹
						</view>
					</view>
				</view>

				<view class='title'>
					类型说明
				</view>
				<view class='h16'></view>
				<view class='desc'
					v-html='`共享DEMO：限量发售，不增发，具有稀有性。购买者按照自身意愿进行对应份额购买，持有者可按份额共享该demo制作成的成品歌曲的50%歌曲版权收益（线上+线下），具体将以官方公告为准，最终解释权归平台所有。`'>

				</view>
				<view class='h24'></view>

				<view class='title'>
					专辑信息
				</view>
				<view class='h16'></view>
				<view class='info'>
					<view class='info-1'>
						<view class='info-1-1'>
							Contract Address
						</view>
						<view class='info-1-2 nowrap'>
							0xf9ec07f93e729...
						</view>
					</view>
					<view class='info-1'>
						<view class='info-1-1'>
							Token ID
						</view>
						<view class='info-1-2 nowrap'>
							1557552839199234asdasdasdafgggg
						</view>
					</view>
					<view class='info-1'>
						<view class='info-1-1'>
							Token Standard
						</view>
						<view class='info-1-2 nowrap'>
							1557552839199234aasssssssss
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class='box6'>
			<view class='oa'>
				<image src='https://file.yuanyinfu.com/front-end-lib/wxoaQRcode2.jpg' mode=''></image>
				<view class='txt'>
					公众号二维码
				</view>
			</view>
			<view class='service'>
				<image src='https://file.yuanyinfu.com/front-end-lib/serviceQRcode2.png' mode=''></image>
				<view class='txt'>
					客服二维码
				</view>
			</view>
		</view>
		<view class='box7'>
			<view class='fixb'>
				<view class='status1' v-if='status===1'>
					<view class='status1-1' @tap='handShowShare'>
						邀请好友一起助力
					</view>
					<!--会有处理中的情况，点击购买助力就提示助力已结束  -->
					<view class='status1-2' @tap='handShowBuy'>
						购买助力
					</view>
				</view>
				<view class='status2' v-if='status===2'>
					<view class='status2-1'>
						助力完成
					</view>
				</view>
				<view class='status3' v-if='status===3'>
					<view class='status3-1'>
						助力失败
					</view>
				</view>
			</view>
		</view>

		<!-- 分享弹窗 -->
		<wyb-popup ref='sharePopup' type='bottom' height='250' width='750' radius='6' bgColor='#1D1D1D'
			:showCloseIcon='true' :duration='200' zIndex='12' @hide='handClear'>
			<view class='sharePopup-content'>
				<view class='sharePopup-content-1'>
					可分享至
				</view>

				<view class='sharePopup-content-2'>
					<view class='sharePopup-content-2-1' @tap="handleShare('wxFriend')">
						<image class='sharePopup-content-2-1-1'
							src='https://file.yuanyinfu.com/front-end-lib/share-wx.png' mode=''></image>
						<text class='sharePopup-content-2-1-2'>微信好友</text>
					</view>
					<view class='sharePopup-content-2-2' @tap="handleShare('timeline')">
						<image class='sharePopup-content-2-2-1'
							src='https://file.yuanyinfu.com/front-end-lib/share-friends.png' mode=''></image>
						<text class='sharePopup-content-2-2-2'>朋友圈</text>
					</view>
				</view>
			</view>
		</wyb-popup>

		<!-- 购买弹窗 -->
		<wyb-popup ref='popup' type='bottom' zIndex='12' height='701' width='750' radius='6' bgColor='#1D1D1D'
			:showCloseIcon='true' @hide='handClear()'>
			<view class='popup-content' ref='popupContent'>
				<view class='popup-i'>
					<view class='i-img'>
						<image :src='data.index_img' mode=''></image>
						<view class='img-line'></view>
					</view>
					<view class='i-title'>
						<view class='title-t nowrap'>{{data.name}}</view>
						<view class='title-p'>
							<text class='title-p-rmb'>￥{{data.price}}</text>
							/份
						</view>
					</view>
				</view>

				<view class='popup-count'>
					<view class='count-text'>
						数量
					</view>
					<view class='number-count'>
						<view class='minus' @tap='handMinus()'>
							<view class='minus-img'>
								<view :class="[' h',this.count>1?'active-icon':'']"></view>
							</view>
						</view>
						<input class='countc' type='number' maxlength='3' name='' id='' v-model="count"
							@blur="onCountChange()" />
						<view class='plus' @tap="handPlus()">
							<view class='plus-img'>
								<view :class="[' h',this.count<10?'active-icon':'']"></view>
								<view :class="[' v',this.count<10?'active-icon':'']"></view>
							</view>
						</view>
					</view>
				</view>
				<view class='popup-e'>
					<view class='e-text'>
						实付
					</view>
					<view class='e-price'>
						<text class='rmb'>￥</text>
						<text class='count'>{{total}}</text>
					</view>
				</view>
				<view class='splitline'></view>
				<view class='popup-desc' v-html="`助力说明：
1.助力订单2分钟内未付款，订单将自动取消；
2.可同时进行多次助力，每次助力最多10份；`"></view>
				<view class='popup-d'>
					<view class='d-btn nowrap' @tap='handOrder()'>确认，下单实付{{total}}元</view>
				</view>
			</view>
		</wyb-popup>

		<view class='h120' v-if='$store.state.globalAudio.show'></view>
		<floating-component class='floa' v-if='$store.state.globalAudio.show'>
			<GlobalAudio></GlobalAudio>
		</floating-component>
	</view>
</template>

<script>
	import WybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import dayjs from 'dayjs'
	import {
		shareUrlImage
	} from '@/utils/index.js'
	import {
		collections_index_detail,
		h5_demo_index_detail,
		h5_demo_index_share, //分享统计打点
		h5_demo_index_play, //播放统计打点
		h5_demo_index_visit, //访问统计打点
		h5_demo_index_demoPlay //播放信息
	} from '@/request/api.js'
	import FloatingComponent from '../../components/floatingComponent.vue'
	export default {
		components: {
			WybPopup,
			FloatingComponent
		},
		data() {
			return {
				demo_item_id: null,
				progressStyle: {
					width: '0%'
				},
				status: 1,
				copyLink: 'https://c.yuanyinfu.com',
				data: {
					demo_item_id: '',
					demo_name: '',
					publish_type: '',
					publish_type_desc: '',
					share_status: '', //共享状态 1：共享中 2:共享结束处理中 3：共享成功 4：共享失败（仅共享demo使用）
					share_status_desc: '',
					index_url: '',
					contract_address: '',
					token_id: '',
					publish_type_note: '',
					demo_style: '',
					lyrics_name: '',
					composer_name: '',
					income_ratio: '',
					income_cycle: '',
					price: '',
					stock: 0,
					publish_time: '',
					sale_cycle: 0,
					baseline_amount: '',
					buy_note: '',
					introduction_note: '',
					statistics_info: {
						like: 0,
						share: 0,
						visit: 0,
						play: 0
					},
					author_name: '',
					author_id: '',
					remain_stock: 0,
					buy_user_num: 0,
					sale_time: '',
					sale_end_time: '',
					progress_info: {
						percentage: 0,
						percentage_desc: '0%'
					},
					official_account_qrcode: '',
					customer_service_qrcode: '',
					sale_end_time_desc: ''
				},
				count: 1
			};
		},
		computed: {
			total() {
				if (!this.data.price) {
					return 0
				}
				return (this.count * this.data.price).toFixed(2)
			}
		},
		methods: {
			// 格式化时间
			formatDate(e) {
				console.log(e)
				return dayjs(e).format('YYYY.MM.DD HH:mm:ss')
			},
			// 显示分享弹窗
			handShowShare() {
				this.$refs.sharePopup.show()
			},
			handClear() {

			},
			// 点击微信或朋友圈分享
			handleShare(share_way) {
				if (this.$store.state.user.inApp) {
					const link = '注册地址和参数'
					const share_title = '邀请你助力一首好歌，快来元音符看看吧！' + link
					const img = ''

					let appConfig = window.localStorage.getItem('AppConfigInfo')
					if (appConfig) {
						appConfig = JSON.parse(appConfig)
					} else {
						appConfig = {
							'version-code': '1710'
						}
					}
					if (Number(appConfig['version-code']) >= 1750) {
						shareUrlImage({
							share_title,
							share_way,
							img
						})
					}
				} else {
					uni.setClipboardData({
						data: 'string',
						success: function() {
							console.log('success')
						}
					})
				}


			},
			handShowBuy() {
				this.$refs.popup.show()
			},
			mock(e) {
				return new Promise((resolve) => {
					if (e == 1) {
						resolve({
							'data': {
								'demo_item_id': 1204126,
								'demo_name': 'c',
								'publish_type': 22019782,
								'publish_type_desc': 'ullamco',
								'share_status': 'ut minim fugiat dolore',
								'share_status_desc': 'in exercitation adipisicing in laboru',
								'index_url': 'amet ad',
								'contract_address': 'exercitation laborum pariatur sed eiusmod',
								'token_id': 'minim Lorem sit',
								'publish_type_note': 'incididunt',
								'demo_style': 'ut occaecat Ut labore',
								'lyrics_name': 'cillum Excepteur Ut',
								'composer_name': 'aute Duis dolore in',
								'income_ratio': 'anim et sint',
								'income_cycle': 'aliquip nulla sint',
								'price': '',
								'stock': 78106148,
								'publish_time': 'sit cillum eu',
								'sale_cycle': -34554766,
								'baseline_amount': '20000',
								'buy_note': 'qui exercitation ullamco incididunt tempor',
								'introduction_note': 'Lorem dolore Excepteur labore',
								'statistics_info': {
									'like': 14786531,
									'share': 15301721,
									'visit': 28272025,
									'play': 50654958
								},
								'author_name': 'quis',
								'author_id': 40523697,
								'remain_stock': 29822665,
								'buy_user_num': 2085646,
								'sale_time': 'et cupidatat sunt',
								'sale_end_time': '2023-1-17 20:09:00',
								'progress_info': {
									'percentage': 34,
									'percentage_desc': '34%'
								},
								'official_account_qrcode': 'in proident et',
								'customer_service_qrcode': 'voluptate aute sed nisi laborum',
								'sale_end_time_desc': ''
							},
							'msg': 'in ut aliquip Excepteur'
						})
					} else if (e == 2) {

					}
				})
			},
			async getDetails() {
				try {
					// const res = await this.$post1(h5_demo_index_detail, {
					// 	demo_item_id: this.demo_item_id
					// })
					// console.log(res)
					// if (res.code !== 0) {
					// 	return uni.showToast({
					// 		icon: 'none',
					// 		title: res.msg
					// 	})
					// }
					const res = await this.mock(1)
					// const date = getTimeData(res.data.sale_time * 1000)
					// const date1 = getTimeData(res.data.publish_time * 1000)
					// res.data.sale_time1 = `${date.mon}月${date.dd}日${date.hh}:${date.MM}`
					// res.data.publish_time1 = `${date1.y}-${date1.mon}-${date1.dd}`
					this.data = res.data
					this.progressStyle.width = `${res.data.progress_info.percentage}%`
					console.log(this.data)
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						icon: 'none',
						title: e.message
					})
				}
			},
			// 更新状态定时器
			handSetTimeout() {
				clearInterval(this.statusTimer)
				if (this.data.sale_status === 0) {
					this.statusTimer = setInterval(() => {
						const date = new Date().getTime()
						const count = this.data.sale_time * 1000 - date
						if (count > 0) {
							let hh = parseInt(count / 1000 / 60 / 60)
							let MM = parseInt(count / 1000 / 60 % 60)
							let ss = parseInt(count / 1000 % 60)
							hh = hh < 10 ? '0' + hh : hh
							MM = MM < 10 ? '0' + MM : MM
							ss = ss < 10 ? '0' + ss : ss
							this.countDown = `${hh}时${MM}分${ss}秒`
						} else {
							this.getDetails(this.product_item_id)
							clearTimeout(this.statusTimer)
						}

					}, 1000)
				}
			},
			// 数量改变
			onCountChange() {
				if (this.count > 100) {
					uni.showToast({
						icon: 'none',
						title: '单次购买数量不可超过100张',
						duration: 3000
					})
					this.count = 100
				} else if (this.count < 1) {
					this.count = 1
				}
				this.$refs.popupContent.$el.style.height = 'auto'
			},
			// -1
			handMinus() {
				if (this.count > 1) {
					this.count--
				}

			},
			// +1
			handPlus() {
				if (this.count < 10) {
					this.count++
				}
			},
			// 优先购 数量改变
			onCountChange() {
				if (this.count > 10 || this.count < 1) {
					this.count = 1
				}
			},
			handOrder() {
				return uni.showToast({
					title: 'order',
					icon: 'none'
				})
			}
		},
		onLoad(e) {
			this.demo_item_id = Number(e.demo_item_id)
			this.getDetails()
		}
	}
</script>

<style lang="scss">
	.container {
		position: relative;
		padding: 0;
		text-align: center;
		overflow-y: scroll;

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
				min-width: 0;
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

		.h24 {
			height: 24rpx;
		}

		.detail {
			padding-bottom: 24rpx;

			.detail-1 {
				display: flex;
				align-items: center;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 26rpx;
				line-height: 36rpx;
				text-align: right;
				color: #AEAEAE;
				padding-bottom: 8rpx;
				min-width: 0;
				text-align: left;

				.detail-1-1 {
					min-width: 104rpx;
				}

				.detail-1-2 {
					flex: 1;
					text-indent: 24rpx;
				}
			}
		}

		.info {
			.info-1 {
				display: flex;
				align-items: center;
				text-align: left;
				min-width: 0;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 26rpx;
				line-height: 36rpx;

				color: #AEAEAE;

				.info-1-1 {
					min-width: 218rpx;
				}

				.info-1-2 {
					flex: 1;
					text-indent: 24rpx;
				}
			}
		}

		.box6 {
			display: flex;
			justify-content: space-between;
			padding: 42rpx 84rpx 0 84rpx;
			overflow: hidden;

			.oa,
			.service {
				display: flex;
				flex-direction: column;
				text-align: center;
				overflow: hidden;

				image {
					width: 220rpx;
					height: 220rpx;
				}

				.txt {
					padding-top: 24rpx;
					padding-bottom: 5rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 24rpx;
					line-height: 28rpx;
					/* identical to box height, or 117% */

					text-align: center;

					color: #ECECEC;
					overflow: hidden;
				}
			}
		}

		.box7 {
			width: 100%;
			height: 138rpx;

			.fixb {
				position: fixed;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 138rpx;
				background: #0F0F10;

				.status1 {
					display: flex;
					align-items: center;
					justify-content: space-around;
					height: 100%;

					.status1-1 {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 332rpx;
						height: 96rpx;
						border-radius: 48rpx;
						background: #C8A964;
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 500;
						font-size: 32rpx;
						line-height: 96rpx;
						color: #532609;

						&:active {
							background-color: #C8A990 !important;
							color: #532622 !important;
						}

					}

					.status1-2 {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 332rpx;
						height: 96rpx;
						border-radius: 48rpx;
						background: #D10910;
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 500;
						font-size: 32rpx;
						line-height: 96rpx;
						color: #ECECEC;

						&:active {
							background-color: rgba(209, 9, 16, 0.6);
							color: rgba(134, 134, 134, 1);
						}
					}
				}

				.status2 {
					display: flex;
					align-items: center;
					justify-content: space-around;
					height: 100%;

					.status2-1 {

						display: flex;
						align-items: center;
						justify-content: center;
						width: 686rpx;
						height: 96rpx;
						border-radius: 48rpx;
						background: #C8A964;
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 500;
						font-size: 32rpx;
						line-height: 96rpx;
						color: #532609;

					}
				}

				.status3 {
					display: flex;
					align-items: center;
					justify-content: space-around;
					height: 100%;

					.status3-1 {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 686rpx;
						height: 96rpx;
						border-radius: 48rpx;
						background: #7C7C7C;
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 500;
						font-size: 32rpx;
						line-height: 96rpx;
						color: #ECECEC;

					}
				}
			}

		}

		.sharePopup-content {
			.sharePopup-content-1 {
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 28rpx;
				line-height: 40rpx;
				text-align: left;
				color: #DDDDDD;
				padding: 24rpx;
			}

			.sharePopup-content-2 {
				display: flex;
				align-items: center;
				justify-content: center;

				.sharePopup-content-2-1 {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-right: 134rpx;

					.sharePopup-content-2-1-1 {
						width: 76rpx;
						height: 76rpx;
					}

					.sharePopup-content-2-1-2 {
						height: 34rpx;
						padding-top: 10rpx;
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 400;
						font-size: 24rpx;
						line-height: 34rpx;
						/* identical to box height */

						text-align: center;

						color: #AEAEAE;
					}
				}

				.sharePopup-content-2-2 {
					display: flex;
					flex-direction: column;
					align-items: center;

					.sharePopup-content-2-2-1 {
						width: 76rpx;
						height: 76rpx;
					}

					.sharePopup-content-2-2-2 {
						height: 34rpx;
						padding-top: 10rpx;
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 400;
						font-size: 24rpx;
						line-height: 34rpx;
						/* identical to box height */

						text-align: center;

						color: #AEAEAE;
					}
				}
			}

		}

		/deep/.icon-close {
			font-size: 36rpx;
		}


		.popup-content {
			text-align: left;

			.popup-i {
				position: relative;
				display: flex;
				padding-top: 24rpx;
				padding-left: 28rpx;

				.i-img {
					position: relative;
					width: 148rpx;
					height: 148rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 20rpx;
					}

					.img-line {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						margin: auto;
						width: 135rpx;
						height: 135rpx;
						border: 0.6rpx solid rgba(255, 255, 255, 0.2);
						border-radius: 20rpx;
						background-color: transparent;
					}
				}

				.i-title {
					flex: 1;
					padding-top: 4rpx;

					.title-t {
						margin-left: 32rpx;
						font-weight: 500;
						font-size: 32rpx;
						line-height: 44rpx;
						color: #ECECEC;
						padding-bottom: 20rpx;
						width: 480rpx;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号

					}

					.title-p {
						display: inline-block;
						margin-left: 32rpx;
						min-width: 192rpx;
						text-align: center;
						padding: 10rpx 16rpx;
						font-size: 24rpx;
						background: rgba(220, 45, 30, 0.2);
						mix-blend-mode: normal;
						border-radius: 22px;
						color: rgba(220, 45, 30, 1);
						color: #D10910;

						.title-p-rmb {
							padding-left: 4rpx;
							font-weight: 600;
							font-size: 28rpx;
							color: #D10910;
							transform: rotate(-0.39deg)
						}
					}
				}
			}

			.popup-f {
				display: flex;
				align-items: center;
				padding: 26rpx 40rpx 44rpx 40rpx;

				.popup-f-img {
					width: 40rpx;
					height: 40rpx;
				}

				text {
					font-size: 28rpx;
					color: #AEAEAE;
					margin-left: 16rpx;
				}
			}

			.popup-count {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 32rpx 24rpx 40rpx;
				color: #ECECEC;
				font-size: 28rpx;

				.count-text {}

				.number-count {
					display: flex;
					align-items: center;
					box-sizing: border-box;
					width: 194rpx;
					height: 60rpx;
					border-radius: 16rpx;
					border: 1rpx solid #686868;

					.minus {
						box-sizing: border-box;
						width: 62rpx;
						height: 58rpx;
						font-size: 32rpx;
						border-right: 1rpx solid #686868;

						.minus-img {
							position: relative;
							width: 62rpx;
							height: 58rpx;
							border-radius: 16rpx 0 0 16rpx;

							.h {
								position: absolute;
								top: 0;
								left: 0;
								right: 0;
								bottom: 0;
								margin: auto;
								width: 32rpx;
								height: 2rpx;
								background-color: #686868;
							}
						}

						// &:active .minus-img .h {
						// 	background-color: #E8E8E8;
						// }

					}

					uni-input.countc {
						flex: 1;
						height: 58rpx;
						text-align: center;
						font-size: 36rpx;
						font-weight: 600;
						color: #D10910;
					}

					.plus {
						display: flex;
						align-items: center;
						justify-content: center;
						box-sizing: border-box;
						width: 62rpx;
						height: 58rpx;
						font-size: 32rpx;
						border-left: 1rpx solid #686868;

						.plus-img {
							position: relative;
							width: 62rpx;
							height: 58rpx;
							border-radius: 0 16rpx 16rpx 0;

							.h {
								position: absolute;
								top: 0;
								left: 0;
								right: 0;
								bottom: 0;
								margin: auto;
								width: 32rpx;
								height: 2rpx;
								background-color: #686868;
							}

							.v {
								position: absolute;
								top: 0;
								left: 0;
								right: 0;
								bottom: 0;
								margin: auto;
								width: 2rpx;
								height: 32rpx;
								background-color: #686868;
							}
						}

						// &:active .plus-img .h,
						// &:active .plus-img .v {
						// 	background-color: #E8E8E8;
						// }
					}

					.active-icon {
						background-color: #E8E8E8 !important;
					}
				}

			}

			.popup-e {
				padding: 0 32rpx 32rpx 40rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.e-text {
					color: #ECECEC;
					font-size: 28rpx;
				}

				.e-price {
					color: #D10910;

					.rmb {
						font-size: 28rpx;
					}

					.count {
						font-size: 40rpx;
						font-weight: 600;
					}
				}
			}

			.splitline {
				margin: 0 32rpx 32rpx 40rpx;
				border-bottom: 0.5px solid #5F5F5F;
			}

			.popup-desc {
				box-sizing: border-box;
				height: 122rpx;
				margin: 0 32rpx 0 40rpx;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 22rpx;
				line-height: 30rpx;
				color: #AEAEAE;
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 4;
				-webkit-box-orient: vertical;
				white-space: pre-wrap; //识别换行符 并且超过父盒子宽度自动换行
			}

			.popup-d {
				padding-top: 32rpx;
				text-align: center;

				.d-btn {
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: center;
					line-height: 96rpx;
					margin: auto;
					width: 670rpx;
					height: 96rpx;
					padding: 0 24rpx;
					background: #D10910;
					border-radius: 48rpx;
					font-weight: 500;
					font-size: 32rpx;
					color: #ECECEC;

					&:active {
						background-color: rgba(209, 9, 16, 0.6);
						color: rgba(134, 134, 134, 1);
					}
				}

			}

			.popup-c {
				padding-top: 20rpx;
				font-size: 22rpx;
				line-height: 30rpx;
				text-align: center;
				color: #666666;

			}


		}

		.h120 {
			height: 120rpx;
		}

		.floa {
			bottom: 140rpx;
		}

	}
</style>
