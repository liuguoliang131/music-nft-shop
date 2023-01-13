<template>
	<!-- 预购专辑详情 -->
	<view class="container">
		<template v-if="$store.state.user.inApp">
			<nav-head :left="true" :right="true" title="详情">
				<image class="nav-r" src="https://file.yuanyinfu.com/front-end-lib/share1.png" mode="" @tap="handShare">
				</image>
			</nav-head>
			<view class="preOrderDetails-header">
				<view class="cover">
					<div class="cover-content">
						<image class="cover-img" src="https://file.yuanyinfu.com/front-end-lib/albumbg.png"></image>
						<image class="cover-turn" src="https://file.yuanyinfu.com/front-end-lib/turn.png" mode="">
						</image>
						<image class="cover-turn1" :src="data.index_img" mode=""></image>
						<!-- <image class="cover-play" src="../../static/Frame 62.png" mode=""></image> -->
					</div>

				</view>
				<view class="row1">
					<image v-show="!$store.state.publicState.isApprove" v-if="data.rare_type==='SSR'"
						src="https://file.yuanyinfu.com/front-end-lib/SSR.png" mode=""></image>
					<image v-show="!$store.state.publicState.isApprove" v-else-if="data.rare_type==='UR'"
						src="https://file.yuanyinfu.com/front-end-lib/UR.png" mode=""></image>
					<image v-show="!$store.state.publicState.isApprove" v-else-if="data.rare_type==='R'"
						src="https://file.yuanyinfu.com/front-end-lib/R.png" mode=""></image>

					<image v-show="!$store.state.publicState.isApprove" v-else-if="data.rare_type==='SR'"
						src="https://file.yuanyinfu.com/front-end-lib/SR.png" mode=""></image>
					{{data.name}}
				</view>
				<view class="row2" v-show="!$store.state.publicState.isApprove">
					{{data.sale_time1}}&nbsp;{{data.sale_status===0?'未开售':(data.sale_status===1?'开售中':'已停售')}}
					<text>限量{{data.stock_num_desc}}张</text>
				</view>
				<view class="price" v-show="!$store.state.publicState.isApprove">
					<text class="rmb">￥</text>
					<text class="count">{{data.sale_price}}</text>
					<text class="unit">/张</text>
				</view>
			</view>

			<view class="card1" v-show="!$store.state.publicState.isApprove">
				<view class="card1-body">
					<view class="title1">专辑信息</view>
					<view class="info">
						<view class="info-1">
							专辑名称
						</view>
						<view class="info-2">
							{{data.name}}
						</view>
					</view>
					<view class="info" v-if="data.rare_type!=='N'">
						<view class="info-1">
							稀有度
						</view>
						<view class="info-2">
							{{data.rare_type}}
						</view>
					</view>
					<view class="info">
						<view class="info-1">
							发行时间
						</view>
						<view class="info-2">
							{{data.publish_time1}}
						</view>
					</view>
					<view class="info">
						<view class="info-1">
							发行方
						</view>
						<view class="info-2">
							{{data.publish_author}}
						</view>
					</view>
					<view class="info">
						<view class="info-1">
							本次发行量
						</view>
						<view class="info-2">
							{{data.stock_num}}张
						</view>
					</view>
					<view class="title1 mt32 mb8">
						购买须知
					</view>
					<view class="text1" v-html="data.buy_notice">

					</view>
				</view>
			</view>
			<view class="card2">
				<view class="card2-body">
					<!-- 专辑 -->
					<view class="">
						<view class="title1 mb8" v-if="data.introduction">
							专辑介绍
						</view>
						<view class="text1 mb8" v-if="data.introduction" v-html="data.introduction"></view>
						<view class="work" v-for="(item,idx) in data.music_list" :key="idx">
							<view class="row1">{{item.name}}</view>
							<view class="row2" v-html="item.desc">
							</view>
						</view>
					</view>

				</view>
			</view>
			<view class="h120"></view>
			<!-- 已停售 -->
			<template v-if="data.is_halt===2">
				<view class="bottom1" v-show="!$store.state.publicState.isApprove">
					<view v-if="data.is_like===1" class="bottom1-1" @tap="handFollow(2)">
						<image class="bottom1-1-1" src="https://file.yuanyinfu.com/front-end-lib/follow-solid.png"
							mode="">
						</image>
						<view class="bottom1-1-2 followed">
							关注
						</view>
					</view>
					<view v-else class="bottom1-1" @tap="handFollow(1)">
						<image class="bottom1-1-1" src="https://file.yuanyinfu.com/front-end-lib/follow-hollow.png"
							mode="">
						</image>
						<view class="bottom1-1-2 unfollow">
							关注
						</view>
					</view>
					<view class="bottom1-2">
						<view v-if="data.is_halt===2" class="bottom1-status2" @tap="handOrLogin(3)">已停售</view>
					</view>
				</view>
			</template>
			<!-- 没停售 -->
			<template v-else>
				<!-- 优先购显示 -->
				<view class="YouXianGouBottom" v-if="data.show_priority===1"
					v-show="!$store.state.publicState.isApprove">
					<view v-if="data.is_like===1" class="bottom1-1" @tap="handFollow(2)">
						<image class="bottom1-1-1" src="https://file.yuanyinfu.com/front-end-lib/follow-solid.png"
							mode="">
						</image>
						<view class="bottom1-1-2 followed">
							关注
						</view>
					</view>
					<view v-else class="bottom1-1" @tap="handFollow(1)">
						<image class="bottom1-1-1" src="https://file.yuanyinfu.com/front-end-lib/follow-hollow.png"
							mode="">
						</image>
						<view class="bottom1-1-2 unfollow">
							关注
						</view>
					</view>
					<view class="bottom1-2">
						<view class="bottom1-2-left" @tap="handBuyTheYxg">
							优先购
						</view>
						<view class="bottom1-2-right" @tap="handOrLogin(0)">
							<text class="bottom1-2-right-1 nowrap">距离开售</text>
							<text class="bottom1-2-right-2 nowrap">{{countDown}}</text>
						</view>

					</view>
				</view>
				<!-- 优先购不显示 -->
				<view class="bottom1" v-else-if="data.show_priority===0" v-show="!$store.state.publicState.isApprove">
					<view v-if="data.is_like===1" class="bottom1-1" @tap="handFollow(2)">
						<image class="bottom1-1-1" src="https://file.yuanyinfu.com/front-end-lib/follow-solid.png"
							mode="">
						</image>
						<view class="bottom1-1-2 followed">
							关注
						</view>
					</view>
					<view v-else class="bottom1-1" @tap="handFollow(1)">
						<image class="bottom1-1-1" src="https://file.yuanyinfu.com/front-end-lib/follow-hollow.png"
							mode="">
						</image>
						<view class="bottom1-1-2 unfollow">
							关注
						</view>
					</view>
					<view class="bottom1-2">
						<view v-if="data.sale_status===0" class="bottom1-status0" @tap="handOrLogin(0)">
							{{`距离开售 ${countDown}`}}
						</view>
						<view v-else-if="data.sale_status===1" class="bottom1-status1" @tap="handBuyThe">
							立即抢购
						</view>
						<view v-else-if="data.sale_status===2" class="bottom1-status2" @tap="handOrLogin(2)">
							已售罄</view>

					</view>
				</view>
			</template>
		</template>
		<!-- H5 -->
		<template v-else>
			<nav-head-pre :share_sign="false"></nav-head-pre>
			<view class="preOrderDetails-header">
				<view class="cover">
					<div class="cover-content">
						<image class="cover-img" src="https://file.yuanyinfu.com/front-end-lib/albumbg.png"></image>
						<image class="cover-turn" src="https://file.yuanyinfu.com/front-end-lib/turn.png" mode="">
						</image>
						<image class="cover-turn1" :src="data.index_img" mode=""></image>
						<!-- <image class="cover-play" src="../../static/Frame 62.png" mode=""></image> -->
					</div>

				</view>
				<view class="row1">
					<image v-show="!$store.state.publicState.isApprove" v-if="data.rare_type==='SSR'"
						src="https://file.yuanyinfu.com/front-end-lib/SSR.png" mode=""></image>
					<image v-show="!$store.state.publicState.isApprove" v-else-if="data.rare_type==='UR'"
						src="https://file.yuanyinfu.com/front-end-lib/UR.png" mode=""></image>
					<image v-show="!$store.state.publicState.isApprove" v-else-if="data.rare_type==='R'"
						src="https://file.yuanyinfu.com/front-end-lib/R.png" mode=""></image>
					<!-- <image v-show="!$store.state.publicState.isApprove" v-else-if="data.rare_type==='N'"
							src="https://file.yuanyinfu.com/front-end-lib/N.png" mode=""></image> -->
					<image v-show="!$store.state.publicState.isApprove" v-else-if="data.rare_type==='SR'"
						src="https://file.yuanyinfu.com/front-end-lib/SR.png" mode=""></image>
					{{data.name}}
				</view>
				<view class="row2" v-show="!$store.state.publicState.isApprove">
					{{data.sale_time1}}&nbsp;{{data.sale_status===0?'未开售':(data.sale_status===1?'开售中':'已停售')}}
					<text>限量{{data.stock_num_desc}}张</text>
				</view>
				<view class="price" v-show="!$store.state.publicState.isApprove">
					<text class="rmb">￥</text>
					<text class="count">{{data.sale_price}}</text>
					<text class="unit">/张</text>
				</view>
			</view>
			<view class="card1" v-show="!$store.state.publicState.isApprove">
				<view class="card1-body">
					<view class="title1">专辑信息</view>
					<view class="info">
						<view class="info-1">
							专辑名称
						</view>
						<view class="info-2">
							{{data.name}}
						</view>
					</view>
					<view class="info" v-if="data.rare_type!=='N'">
						<view class="info-1">
							稀有度
						</view>
						<view class="info-2">
							{{data.rare_type}}
						</view>
					</view>
					<view class="info">
						<view class="info-1">
							发行时间
						</view>
						<view class="info-2">
							{{data.publish_time1}}
						</view>
					</view>
					<view class="info">
						<view class="info-1">
							发行方
						</view>
						<view class="info-2">
							{{data.publish_author}}
						</view>
					</view>
					<view class="info">
						<view class="info-1">
							本次发行量
						</view>
						<view class="info-2">
							{{data.stock_num}}张
						</view>
					</view>
					<view class="title1 mt32 mb8">
						购买须知
					</view>
					<view class="text1" v-html="data.buy_notice">

					</view>
				</view>
			</view>
			<view class="card2">
				<view class="card2-body">
					<!-- 专辑 -->
					<view class="">
						<view class="title1 mb8" v-if="data.introduction">
							专辑介绍
						</view>
						<view class="text1 mb8" v-if="data.introduction" v-html="data.introduction"></view>
						<view class="work" v-for="(item,idx) in data.music_list" :key="idx">
							<view class="row1">{{item.name}}</view>
							<view class="row2" v-html="item.desc">
							</view>
						</view>
					</view>

				</view>
			</view>
			<view class="h120"></view>
			<!-- 已停售 -->
			<template v-if="data.is_halt===2">
				<view class="bottom1" v-show="!$store.state.publicState.isApprove">
					<view class="bottom1-1" @tap="handShare()">
						<image class="bottom1-1-1" src="https://file.yuanyinfu.com/front-end-lib/share1.png" mode="">
						</image>
						<view class="bottom1-1-2">
							分享
						</view>
					</view>
					<view class="bottom1-2">
						<view v-if="data.is_halt===2" class="bottom1-status2" @tap="handOrLogin(3)">已停售</view>
					</view>
				</view>
			</template>
			<!-- 没停售 -->
			<template v-else>
				<!-- 优先购显示 -->
				<view class="YouXianGouBottom" v-if="data.show_priority===1"
					v-show="!$store.state.publicState.isApprove">
					<view class="bottom1-1" @tap="handShare()">
						<image class="bottom1-1-1" src="https://file.yuanyinfu.com/front-end-lib/share1.png" mode="">
						</image>
						<view class="bottom1-1-2">
							分享
						</view>
					</view>
					<view class="bottom1-2">
						<view class="bottom1-2-left" @tap="handBuyTheYxg">
							优先购
						</view>
						<view class="bottom1-2-right" @tap="handOrLogin(0)">
							<text class="bottom1-2-right-1 nowrap">距离开售</text>
							<text class="bottom1-2-right-2 nowrap">{{countDown}}</text>
						</view>

					</view>
				</view>
				<!-- 优先购不显示 -->
				<view class="bottom1" v-else-if="data.show_priority===0" v-show="!$store.state.publicState.isApprove">
					<view class="bottom1-1" @tap="handShare()">
						<image class="bottom1-1-1" src="https://file.yuanyinfu.com/front-end-lib/share1.png" mode="">
						</image>
						<view class="bottom1-1-2">
							分享
						</view>
					</view>
					<view class="bottom1-2">
						<view v-if="data.sale_status===0" class="bottom1-status0" @tap="handOrLogin(0)">
							{{`距离开售 ${countDown}`}}
						</view>
						<view v-else-if="data.sale_status===1" class="bottom1-status1" @tap="handBuyThe">
							立即抢购
						</view>
						<view v-else-if="data.sale_status===2" class="bottom1-status2" @tap="handOrLogin(2)">
							已售罄</view>

					</view>
				</view>
			</template>
		</template>
		<wyb-popup ref="popup" type="bottom" height="800" width="750" radius="6" bgColor="#1D1D1D" :showCloseIcon="true"
			@hide="handClear()">
			<view class="popup-content" ref="popupContent">
				<view class="popup-i">
					<view class="i-img">
						<image :src="data.index_img" mode=""></image>
						<view class="img-line"></view>
					</view>
					<view class="i-title">
						<view class="title-t">{{data.name}}</view>
						<view class="title-p">
							发行价格
							<text class="title-p-rmb">￥{{data.sale_price}}</text>
							/张
						</view>
					</view>
				</view>
				<view class="popup-f">
					<image class="popup-f-img" src="https://file.yuanyinfu.com/front-end-lib/popupYf.png"></image>
					<text>购买专辑可以永久聆听</text>
				</view>
				<view class="popup-g" v-if="data.rare_type!=='N'">
					<view class="g-1">
						级别
					</view>
					<view class="g-2">
						<view class="popup-h-btn">
							{{data.rare_type}}级
						</view>
					</view>
				</view>
				<view class="popup-count">
					<view class="count-text">
						数量
					</view>
					<view class="number-count">
						<view class="minus" @tap="handMinus()">
							<!-- <image class="minus-img" src="../../static/Frame 1000006244.png" mode=""></image> -->
							<view class="minus-img">
								<view :class="['h',this.count>1?'active-icon':'']"></view>
							</view>
						</view>
						<input class="countc" type="number" maxlength="3" name="" id="" v-model="count"
							@blur="onCountChange()" @focus="countInputFocus()">
						<view class="plus" @tap="handPlus()">
							<!-- <image class="plus-img" src="../../static/Group 1000004650.png" mode=""></image> -->
							<view class="plus-img">
								<view :class="['h',this.count<100?'active-icon':'']"></view>
								<view :class="['v',this.count<100?'active-icon':'']"></view>
							</view>
						</view>
					</view>
				</view>
				<view class="popup-e">
					<view class="e-text">
						实付
					</view>
					<view class="e-price">
						<text class="rmb">￥</text>
						<text class="count">{{total}}</text>
					</view>
				</view>
				<view class="popup-d">
					<view class="d-btn" @tap="handOrder()">立即抢购</view>
				</view>
				<view class="popup-c">
					喜欢的话，就不要错过哦！
				</view>
			</view>
		</wyb-popup>
		<!-- 优先购购买弹窗 -->
		<wyb-popup ref="YouXianGouPopup" type="bottom" height="800" width="750" radius="6" bgColor="#1D1D1D"
			:showCloseIcon="true" @hide="handClear()">
			<view class="popup-content YouXianGouPopupContent" ref="YouXianGouPopupContent">
				<view class="popup-i">
					<view class="i-img">
						<image :src="data.index_img" mode=""></image>
						<view class="img-line"></view>
					</view>
					<view class="i-title">
						<view class="title-t">{{data.name}}</view>
						<view class="title-p">
							发行价格
							<text class="title-p-rmb">￥{{data.sale_price}}</text>
							/张
						</view>
					</view>
				</view>
				<view class="popup-f">
					<image class="popup-f-img" src="https://file.yuanyinfu.com/front-end-lib/popupYf.png"></image>
					<text>购买专辑可以永久聆听</text>
				</view>
				<view class="popup-g" v-if="data.rare_type!=='N'">
					<view class="g-1">
						级别
					</view>
					<view class="g-2">
						<view class="popup-h-btn">
							{{data.rare_type}}级
						</view>
					</view>
				</view>
				<view class="popup-count">
					<view class="count-text">
						数量
					</view>
					<view class="number-count">
						<view class="minus" @tap="handMinusYxg()">
							<!-- <image class="minus-img" src="../../static/Frame 1000006244.png" mode=""></image> -->
							<view class="minus-img">
								<view :class="['h',this.count>1?'active-icon':'']"></view>
							</view>
						</view>
						<input class="countc" type="number" maxlength="3" name="" id="" v-model="count"
							@blur="onCountChangeYxg()">
						<view class="plus" @tap="handPlusYxg()">
							<!-- <image class="plus-img" src="../../static/Group 1000004650.png" mode=""></image> -->
							<view class="plus-img">
								<view :class="['h',this.count<data.priority_info.priority_stock?'active-icon':'']">
								</view>
								<view :class="['v',this.count<data.priority_info.priority_stock?'active-icon':'']">
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="popup-e">
					<view class="e-text">
						实付
					</view>
					<view class="e-price">
						<text class="rmb">￥</text>
						<text class="count">{{total}}</text>
					</view>
				</view>
				<view class="popup-d">
					<view class="d-btn" @tap="handOrderYxg()">优先购</view>
				</view>
				<view class="popup-c">
					喜欢的话，就不要错过哦！
				</view>
			</view>
		</wyb-popup>
	</view>
</template>

<script>
	import WybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import NavHead from '../../components/navHead.vue'
	import NavHeadPre from '../../components/navHeadPre.vue'
	import {
		h5_conllections_buy_checkout,
		collections_index_visit,
		collections_index_detail,
		collections_index_like
	} from '../../request/api.js'
	import {
		post1
	} from '../../request/index.js'
	import {
		getTimeData,
		goLogin,
		openAppPage
	} from '../../utils/index.js'
	import Mixins from '../../mixins/index.js'
	import RefreshMixins from '../../mixins/preDetails.js'
	export default {
		components: {
			WybPopup,
			NavHead,
			NavHeadPre
		},
		mixins: [Mixins, RefreshMixins],
		data() {
			return {
				product_item_id: '',
				data: {
					name: '',
					product_item_id: '',
					index_img: '',
					sale_time: '',
					stock_num: 0,
					remain_stock_num: '',
					sale_price: '',
					sale_status: '',
					rare_type: '',
					evaluate_type: '',
					publish_author: '',
					publish_time: '',
					singles_num: '',
					buy_notice: '',
					music_list: [],
					is_login: '',
					publish_time1: '',
					sale_time1: '',
					is_like: 0,
					video_url: '',
					video_index_pic: '',
					author_info: {
						author_name: '',
						author_avatar: '',
						desc: ''
					},
					statistics_info: {
						like: '',
						play: '',
						visit: '',
						share: ''
					},
					show_priority: '', // 是否显示优先购
					priority_info: {
						priority_stock: 0, //优先购权益剩余
						is_have: 2 //是否拥有优先购权益 1有 2无
					}
				},
				count: 1,
				statusTimer: null,
				countDown: '',
				followTimer: null
			}
		},
		computed: {
			total() {
				if (!this.data.sale_price) {
					return 0
				}
				return (this.count * this.data.sale_price).toFixed(2)
			}
		},
		methods: {
			countInputFocus() {
				// console.log(this.$refs.popupContent.$el.scrollTop)
				// this.$refs.popupContent.$el.style.height = '90vh'
			},
			handleBack() {

				let currentRoutes = getCurrentPages(); // 获取当前打开过的页面路由数组
				if (currentRoutes.length === 1) {
					if (this.$store.state.user.token) {
						uni.redirectTo({
							url: '/pages/index/index'
						})

					} else {
						goLogin()
					}

				} else {
					uni.navigateBack({
						delta: 1, //返回层数，2则上上页
					})
				}
			},
			async getDetails(product_item_id) {
				try {
					const res = await post1(collections_index_detail, {
						product_item_id
					})
					console.log(res)
					if (res.code !== 0) {
						return uni.showToast({
							icon: 'none',
							title: res.msg
						})
					}
					// const res = {
					// 	data: {
					// 		name: 'asdasd',
					// 		product_item_id: '1',
					// 		index_img: '',
					// 		sale_time: 1664183310324,
					// 		stock_num: 111,
					// 		remain_stock_num: 100,
					// 		sale_price: '50.55',
					// 		sale_status: 0,
					// 		rare_type: 'SSR',
					// 		evaluate_type: '',
					// 		publish_author: '发行商A',
					// 		publish_time: 1664183310324,
					// 		singles_num: 5,
					// 		buy_notice: '购买须知:啊实打实大大',
					// 		music_list: [{
					// 			name: '作品A',
					// 			desc: '简介AAAAAAAAAAAAASDDDDDDDDDSADSASD',
					// 			music_url: '',
					// 			music_time: 12345
					// 		}, {
					// 			name: '作品B',
					// 			desc: '简介AAAAAAAAAAAAASDDDDDDDDDSADSASD',
					// 			music_url: '',
					// 			music_time: 12345
					// 		}, {
					// 			name: '作品C',
					// 			desc: '简介AAAAAAAAAAAAASDDDDDDDDDSADSASD',
					// 			music_url: '',
					// 			music_time: 12345
					// 		}, {
					// 			name: '作品D',
					// 			desc: '简介AAAAAAAAAAAAASDDDDDDDDDSADSASD',
					// 			music_url: '',
					// 			music_time: 12345
					// 		}, ],
					// 		is_login: 1
					// 	}
					// }
					const date = getTimeData(res.data.sale_time * 1000)
					const date1 = getTimeData(res.data.publish_time * 1000)
					res.data.sale_time1 = `${date.mon}月${date.dd}日${date.hh}:${date.MM}`
					res.data.publish_time1 = `${date1.y}-${date1.mon}-${date1.dd}`
					this.data = res.data
					if (res.data.is_halt === 1) {
						this.handSetTimeout()
					}

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
				if (this.count < 100) {
					this.count++
				}
			},
			// 数量改变
			onCountChangeYxg() {
				if (this.count > this.data.priority_info.priority_stock) {
					if (this.data.priority_info.priority_stock === 0) {
						uni.showToast({
							title: '您的优先购数量已经不足',
							icon: 'none'
						})
					} else {
						uni.showToast({
							icon: 'none',
							title: `购买数量不可超过${this.data.priority_info.priority_stock}张`,
							duration: 3000
						})
					}

					this.count = 1
				} else if (this.count < 1) {
					this.count = 1
				}
			},
			// -1 优先购
			handMinusYxg() {
				if (this.count > 1) {
					this.count--
				}

			},
			// +1 优先购
			handPlusYxg() {
				if (this.count < this.data.priority_info.priority_stock) {
					this.count++
				}
			},
			handClear() {
				this.count = 1
			},
			// 分享
			handShare() {
				if (!this.$store.state.user.token) {
					return goLogin()
				}
				uni.navigateTo({
					url: `/pages/poster/poster?product_item_id=${this.product_item_id}&product_type=2`
				})
			},
			// 是否去登录 
			handOrLogin(status) {
				if (status === 3) {
					uni.showToast({
						title: '已停售，感谢您的关注',
						icon: 'none'
					})
				} else if (status === 2) {
					uni.showToast({
						title: '已售罄，感谢您的关注',
						icon: 'none'
					})
				} else if (status === 0) {
					uni.showToast({
						title: '未开售',
						icon: 'none'
					})
				}

				if (!this.$store.state.user.token) {
					goLogin()
				}
			},
			handBuyThe() {
				if (!this.$store.state.user.token) {
					return goLogin()
				} else {
					this.$refs.popup.show()
				}
			},
			// 优先购 
			handBuyTheYxg() {
				if (!this.$store.state.user.token) {
					return goLogin()
				}
				if (this.data.priority_info.is_have === 2) {
					return uni.showToast({
						title: '您还不具有本唱片的优先购权益，联系客服了解更多',
						icon: 'none'
					})
				}
				if (this.data.priority_info.priority_stock === 0) {
					return uni.showToast({
						title: '您的优先购权益已用尽',
						icon: 'none'
					})
				}

				this.$refs.YouXianGouPopup.show()
			},
			// 优先购 立即抢购
			async handOrderYxg() {
				try {
					if (!this.$store.state.user.token) {
						return goLogin()
					}
					if (this.data.priority_info.priority_stock === 0) {
						return uni.showToast({
							title: '您的优先购数量已经不足,请确认后再次提交',
							icon: 'none'
						})
					} else {
						if (this.count > this.data.priority_info.priority_stock) {
							return uni.showToast({
								icon: 'none',
								title: `购买数量不可超过${this.data.priority_info.priority_stock}张`,
								duration: 3000
							})
						}
					}
					const res = await this.$post(h5_conllections_buy_checkout, {
						product_item_id: this.product_item_id,
						buy_num: Number(this.count),
						priority_buy: 1

					})
					if (res.code !== 0) {
						if (res.code === 710) {
							uni.navigateTo({
								url: `/pages/idAuth/idAuth`
							})
						} else {
							return uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}

					} else {
						res.data.info.priority_buy = 1
						const params = res.data.info

						if (this.$store.state.user.inApp) {
							// let appConfig = window.localStorage.getItem('AppConfigInfo')
							let appConfig = this.$store.state.publicState.appConfig

							if (Number(appConfig['version-code']) >= 1930) {
								let data = {
									page: "diskConfirmOrderPage",
									isNeedLogin: true,
									params
								}
								openAppPage(data)
							} else {
								uni.showToast({
									title: '请更新到最新版本后重试',
									icon: 'none'
								})
							}
						} else {
							uni.navigateTo({
								url: `/pages/settlement/settlement?product_item_id=${this.product_item_id}&buy_num=${this.count}&params=${JSON.stringify(params)}&type=2`
							})
						}


					}


				} catch (e) {
					//TODO handle the exception
					console.log('error', e)
					uni.showToast({
						title: e.message,
						icon: 'none'
					})
				}
			},
			// 立即抢购
			async handOrder() {
				try {
					if (!this.$store.state.user.token) {
						return goLogin()
					}
					const res = await this.$post(h5_conllections_buy_checkout, {
						product_item_id: this.product_item_id,
						buy_num: Number(this.count),
						priority_buy: 0
					})
					if (res.code !== 0) {
						if (res.code === 710) {
							uni.navigateTo({
								url: `/pages/idAuth/idAuth`
							})
						} else {
							return uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}

					} else {
						res.data.info.priority_buy = 0
						const params = res.data.info
						if (this.$store.state.user.inApp) {
							let appConfig = window.localStorage.getItem('AppConfigInfo')
							if (appConfig) {
								appConfig = JSON.parse(appConfig)
							} else {
								appConfig = {
									'version-code': '1750'
								}
							}
							if (Number(appConfig['version-code']) >= 1900) {
								let data = {
									page: "diskConfirmOrderPage",
									isNeedLogin: true,
									params
								}
								openAppPage(data)
							} else {
								uni.showToast({
									title: '请更新到最新版本后重试',
									icon: 'none'
								})
							}
						} else {
							uni.navigateTo({
								url: `/pages/settlement/settlement?product_item_id=${this.product_item_id}&buy_num=${this.count}&params=${JSON.stringify(params)}&type=2`
							})
						}
					}


				} catch (e) {
					//TODO handle the exception
					console.log('error', e)
					uni.showToast({
						title: e.message,
						icon: 'none'
					})
				}

			},
			async handFollow(operation_type) {
				try {
					const res = await this.$post(collections_index_like, {
						product_item_id: this.product_item_id,
						operation_type
					})
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					if (operation_type === 1) {
						uni.showToast({
							title: '您已关注',
							icon: 'none'
						})
					} else {
						uni.showToast({
							title: '您已取消关注',
							icon: 'none'
						})
					}


					this.data.is_like = operation_type === 1 ? 1 : 0
					clearTimeout(this.followTimer)
					this.followTimer = setTimeout(() => {
						this.getDetails(this.product_item_id)
					}, 3000)

				} catch (e) {
					//TODO handle the exception
				}
			},
			// 访问统计
			async visitStatics() {
				const res = await post1(collections_index_visit, {
					product_item_id: this.product_item_id
				})
			}
		},
		onLoad(option) {
			console.log('onload````', option)
			this.product_item_id = Number(option.product_item_id)
			this.getDetails(this.product_item_id)
			this.visitStatics()

		},
		onShow() {

		},
		created() {
			console.log('created')
		},
		beforeDestroy() {
			if (this.data.is_like === 0) {
				this.$store.commit('publicState/set_refresh', true)
			}
			clearTimeout(this.statusTimer)
		}
	}
</script>

<style lang="scss" scoped>
	@keyframes turning {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.nav-r {
		width: 48rpx;
		height: 48rpx;
	}

	.card {
		background: #151516;
		border-radius: 8rpx;
		padding: 36rpx 16rpx;

		.card-body {
			padding: 20rpx;
			background: transparent;
			border: 0.5rpx solid #5B5B5B;
			border-radius: 8rpx;
		}
	}

	.container {
		padding: 0 24rpx;

		.logo {
			position: fixed;
			z-index: 11;
			top: 22rpx;
			left: 40rpx;
			box-sizing: border-box;
			width: 154rpx;
			height: 48rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		// .nav {
		// 	position: fixed;
		// 	top: 0;
		// 	left: 0;
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: center;
		// 	width: 100%;
		// 	height: 88rpx;
		// 	background-color: #0D0D0D;
		// 	z-index: 10;

		// 	.nav-left {
		// 		position: absolute;
		// 		top: 28rpx;
		// 		left: 28rpx;
		// 		width: 48rpx;
		// 		height: 48rpx;
		// 	}
		// }

		.preOrderDetails-header {
			text-align: center;
			overflow: hidden;

			.cover {
				margin: 41rpx auto 0 auto;
				text-align: center;

				.cover-content {
					position: relative;
					width: 375rpx;
					height: 375rpx;
					margin: auto;

					.cover-img {
						width: 375rpx;
						height: 375rpx;
					}

					.cover-turn {
						z-index: 1;
						position: absolute;
						top: 24rpx;
						left: 24rpx;
						transform-origin: 50% 50%;
						width: 327rpx;
						height: 327rpx;
						// animation: 3.7s turning linear infinite;
					}

					.cover-turn1 {
						z-index: 2;
						position: absolute;
						top: 84.5rpx;
						left: 84.5rpx;
						transform-origin: 50% 50%;
						width: 206rpx;
						height: 206rpx;
						border-radius: 103rpx;
						// animation: 3.7s turning linear infinite;
					}

					.cover-play {
						z-index: 2;
						position: absolute;
						left: 100.98rpx;
						top: 100.98rpx;
						width: 172.02rpx;
						height: 172.02rpx;
						border-radius: 86.01rpx;
					}

				}
			}


			.row1 {
				// display: flex;
				// align-items: center;
				// justify-content: center;
				// width: 100%;
				margin-top: 25rpx;
				font-weight: 500;
				font-size: 36rpx;
				text-align: center;
				color: #ECECEC;
				overflow: hidden; // 溢出隐藏
				white-space: nowrap; // 强制一行
				text-overflow: ellipsis; // 文字溢出显示省略号

				image {
					width: 84rpx;
					height: 40rpx;
					margin-right: 4rpx;
					vertical-align: middle;
				}


			}

			.row2 {
				margin-top: 9rpx;
				font-size: 26rpx;
				color: #AEAEAE;
				overflow: hidden; // 溢出隐藏
				white-space: nowrap; // 强制一行
				text-overflow: ellipsis; // 文字溢出显示省略号

				text {
					margin-left: 16rpx;
				}
			}

			.price {
				margin-top: 11rpx;
				color: #D10910;

				.rmb {
					font-size: 28rpx;
				}

				.count {
					font-size: 36rpx;
					margin-right: 4rpx;
					font-weight: 600;
				}

				.unit {
					font-size: 26rpx;
				}
			}
		}

		// .preOrderDetails-body {
		// 	margin-top: 16rpx;

		// 	.cardbox1 {
		// 		.row1 {
		// 			height: 44rpx;
		// 			margin-bottom: 16rpx;
		// 			font-weight: 600;
		// 			font-size: 32rpx;
		// 			line-height: 44rpx;
		// 			color: #AC9147;
		// 		}

		// 		.row2 {

		// 			.row2-1 {
		// 				display: flex;
		// 				font-size: 26rpx;
		// 				line-height: 48rpx;
		// 				/* identical to box height, or 185% */
		// 				overflow: hidden; // 溢出隐藏
		// 				white-space: nowrap; // 强制一行
		// 				text-overflow: ellipsis; // 文字溢出显示省略号
		// 				color: #AEAEAE;

		// 				.row2-1-l {
		// 					margin-right: 24rpx;
		// 					width: 104rpx;
		// 					text-align: right;
		// 				}

		// 				.row2-1-r {
		// 					overflow: hidden; // 溢出隐藏
		// 					white-space: nowrap; // 强制一行
		// 					text-overflow: ellipsis; // 文字溢出显示省略号
		// 				}
		// 			}
		// 		}

		// 		.row3 {
		// 			margin-top: 24rpx;
		// 			margin-bottom: 16rpx;
		// 			font-weight: 600;
		// 			font-size: 32rpx;
		// 			line-height: 44rpx;
		// 			color: #AC9147;
		// 		}

		// 		.row4 {
		// 			width: 100%;
		// 			font-size: 26rpx;
		// 			line-height: 36rpx;
		// 			color: #AEAEAE;
		// 			white-space: pre-wrap; //识别换行符 并且超过父盒子宽度自动换行
		// 		}
		// 	}

		// 	.cardbox2 {
		// 		margin-top: 21rpx;
		// 		margin-bottom: 25rpx;

		// 		.work {
		// 			.row1 {
		// 				margin-bottom: 16rpx;
		// 				font-weight: 600;
		// 				font-size: 32rpx;
		// 				line-height: 44rpx;
		// 				color: #AC9147;
		// 				overflow: hidden; // 溢出隐藏
		// 				white-space: nowrap; // 强制一行
		// 				text-overflow: ellipsis; // 文字溢出显示省略号
		// 			}

		// 			.row2 {
		// 				padding-bottom: 24rpx;
		// 				font-size: 26rpx;
		// 				line-height: 36rpx;
		// 				color: #AEAEAE;
		// 				white-space: pre-wrap;
		// 			}

		// 			.row2:nth-last-child(1) {
		// 				padding-bottom: 24rpx;
		// 			}
		// 		}

		// 	}
		// }
		.title1 {
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 600;
			font-size: 32rpx;
			line-height: 44rpx;
			overflow: hidden; // 溢出隐藏
			white-space: nowrap; // 强制一行
			text-overflow: ellipsis; // 文字溢出显示省略号
			color: #E4C985;
		}

		.text1 {
			width: 620rpx;
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 400;
			font-size: 26rpx;
			line-height: 36rpx;
			color: #AEAEAE;
			white-space: pre-wrap; //识别换行符 并且超过父盒子宽度自动换行
		}

		.mb8 {
			margin-bottom: 8rpx;
		}

		.work {
			.row1 {
				margin-bottom: 16rpx;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 600;
				font-size: 32rpx;
				line-height: 44rpx;
				overflow: hidden; // 溢出隐藏
				white-space: nowrap; // 强制一行
				text-overflow: ellipsis; // 文字溢出显示省略号
				color: #E4C985;
			}

			.row2 {
				padding-bottom: 24rpx;
				font-size: 26rpx;
				line-height: 36rpx;
				color: #AEAEAE;
				white-space: pre-wrap;
			}

			.row2:nth-last-child(1) {
				padding-bottom: 24rpx;
			}
		}

		.card1 {
			margin: auto;
			margin-top: 24rpx;
			background: #292929;
			border-radius: 8rpx;
			box-sizing: border-box;
			width: 702rpx;
			padding: 32rpx 16rpx;

			.card1-body {
				border: 1rpx solid #5B5B5B;
				border-radius: 8rpx;
				padding: 20rpx;

				.info {
					display: flex;
					align-items: center;
					padding-top: 8rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 26rpx;
					line-height: 36rpx;
					text-align: left;

					color: #AEAEAE;

					.info-1 {
						width: 154rpx;
					}

					.info-2 {
						flex: 1;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
					}
				}

				.mt32 {
					margin-top: 32rpx;
				}


			}
		}

		.card2 {
			margin: auto;
			margin-top: 24rpx;
			background: #292929;
			border-radius: 8rpx;
			box-sizing: border-box;
			width: 702rpx;
			padding: 32rpx 16rpx;

			.card2-body {
				border: 1rpx solid #5B5B5B;
				border-radius: 8rpx;
				padding: 20rpx;

				.author {
					display: flex;
					align-items: center;
					margin-top: 16rpx;


					image {
						width: 48rpx;
						height: 48rpx;
						margin-right: 8rpx;
						border-radius: 24rpx;
					}

					text {
						flex: 1;
						overflow: hidden; // 溢出隐藏
						white-space: nowrap; // 强制一行
						text-overflow: ellipsis; // 文字溢出显示省略号
						font-family: 'PingFang SC';
						font-style: normal;
						font-weight: 400;
						font-size: 26rpx;
						line-height: 36rpx;

						color: #AEAEAE;
					}
				}

				.text2 {
					margin-top: 8rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 400;
					font-size: 24rpx;
					line-height: 34rpx;
					white-space: pre-wrap; //识别换行符 并且超过父盒子宽度自动换行
					color: #777777;

				}

				.text3 {
					position: relative;
					margin-top: 16rpx;
					margin-bottom: 26rpx;
					width: 100%;
					height: 362rpx;
					border-radius: 8rpx;

					.swiper {
						border-radius: 8rpx;
					}

					.text3-video {
						width: 100%;
						height: 100%;
						border-radius: 8rpx;
					}
				}
			}
		}

		.h120 {
			height: 160rpx;
		}

		.bottom1 {
			z-index: 8;
			position: fixed;
			bottom: 0;
			left: 0;
			box-sizing: border-box;
			width: 100%;
			height: 120rpx;
			padding: 0 42rpx 0 64rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #212121;

			.bottom1-1 {
				flex: 1;

				.bottom1-1-1 {
					width: 48rpx;
					height: 48rpx;
				}

				.bottom1-1-2 {
					position: relative;
					top: -5rpx;
					left: 1rpx;
					width: 57.62rpx;
					text-align: center;
					font-family: 'PingFang HK';
					font-style: normal;
					font-weight: 400;
					line-height: 28rpx;
					font-size: 24rpx;
					transform-origin: 0 0;
					transform: scale(0.83);
				}

				.followed {
					color: #C8A964;
				}

				.unfollow {
					color: #777777;
				}
			}

			.bottom1-2 {
				width: 522rpx;
				height: 74rpx;

				.bottom1-status0 {
					width: 522rpx;
					height: 74rpx;
					background: #D10910;
					border-radius: 48rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 32rpx;
					line-height: 74rpx;
					text-align: center;
					color: #ECECEC;

					&:active {
						background-color: rgba(209, 9, 16, 0.6);
						color: rgba(134, 134, 134, 1);
					}
				}

				.bottom1-status1 {
					width: 522rpx;
					height: 74rpx;
					background: #D10910;
					border-radius: 48rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 32rpx;
					line-height: 74rpx;
					text-align: center;
					color: #ECECEC;

					&:active {
						background-color: rgba(209, 9, 16, 0.6);
						color: rgba(134, 134, 134, 1);
					}
				}

				.bottom1-status2 {
					width: 522rpx;
					height: 74rpx;
					background: #7C7C7C;
					border-radius: 48rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 32rpx;
					line-height: 74rpx;
					text-align: center;
					color: #ECECEC;

					&:active {}
				}
			}


		}

		// 优先购
		.YouXianGouBottom {
			z-index: 8;
			position: fixed;
			bottom: 0;
			left: 0;
			box-sizing: border-box;
			width: 100%;
			height: 120rpx;
			padding: 0 40rpx 0 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #212121;

			.bottom1-1 {
				flex: 1;

				.bottom1-1-1 {
					width: 48rpx;
					height: 48rpx;
				}

				.bottom1-1-2 {
					position: relative;
					top: -5rpx;
					left: 1rpx;
					width: 57.62rpx;
					text-align: center;
					font-family: 'PingFang HK';
					font-style: normal;
					font-weight: 400;
					line-height: 28rpx;
					font-size: 24rpx;
					transform-origin: 0 0;
					transform: scale(0.83);
				}

				.followed {
					color: #C8A964;
				}

				.unfollow {
					color: #777777;
				}
			}

			.bottom1-2 {
				width: 588rpx;
				height: 74rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.bottom1-2-left {
					width: 284rpx;
					height: 74rpx;
					border-radius: 48rpx;
					text-align: center;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 32rpx;
					line-height: 74rpx;
					color: #532609;
					background: #C8A964;

					&:active {
						background-color: #C8A990;
						color: #532622;
					}
				}

				.bottom1-2-right {
					width: 284rpx;
					height: 74rpx;
					background: #D10910;
					border-radius: 48rpx;
					font-family: 'PingFang SC';
					font-style: normal;
					font-weight: 500;
					font-size: 32rpx;
					line-height: 74rpx;
					text-align: center;
					color: #ECECEC;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					min-height: 0;
					min-width: 0;

					&:active {
						background-color: rgba(209, 9, 16, 0.6);
						color: rgba(134, 134, 134, 1);
					}

					.bottom1-2-right-1 {
						line-height: 40rpx;
						height: 40rpx;
						font-size: 32rpx;

					}

					.bottom1-2-right-2 {
						line-height: 34rpx;
						height: 34rpx;
						font-size: 24rpx;
					}
				}

			}
		}

		/deep/.icon-close {
			font-size: 36rpx;
		}

		/deep/.wyb-popup-box {
			z-index: 998 !important;
		}

		/deep/.wyb-popup-mask {
			z-index: 997 !important;
		}

		.popup-content {

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
						margin-left: 24rpx;
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
						margin-left: 16rpx;
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

			.popup-g {
				.g-1 {
					color: #ECECEC;
					font-size: 28rpx;
					padding: 0 32rpx 24rpx 40rpx;
				}

				.g-2 {
					font-size: 28rpx;
					padding: 0 32rpx 24rpx 40rpx;
					display: flex;
					flex-wrap: wrap;

					.popup-h-btn {
						border-radius: 35rpx;
						width: 140rpx;
						height: 70rpx;
						color: #ffff;
						display: flex;
						align-items: center;
						justify-content: center;
						background-color: #D10910;
						line-height: 0;
					}

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
				padding-top: 24rpx;
				padding: 0 32rpx 64rpx 40rpx;
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

			.popup-d {
				text-align: center;

				.d-btn {
					display: flex;
					align-items: center;
					justify-content: center;
					line-height: 0;
					margin: auto;
					width: 474rpx;
					height: 96rpx;
					background: #D10910;
					border-radius: 90rpx;
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

		.YouXianGouPopupContent {
			.d-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				line-height: 0;
				margin: auto;
				width: 670rpx !important;
				height: 96rpx;
				border-radius: 90rpx;
				font-weight: 500;
				font-size: 32rpx;
				color: #532609 !important;
				background-color: #C8A964 !important;

				&:active {
					background-color: #C8A990 !important;
					color: #532622 !important;
				}
			}
		}
	}
</style>
