<template>
	<view class="container">
		<nav-head :left="false" title="注册"></nav-head>
		<view class="header">
			<view class="" v-if="sharedByGuy">
				您的好友{{sharedByGuy}}诚邀您加入元音符
			</view>
			<view class="" v-if="sharedByGuy">
				一起来共享版权回报
			</view>
		</view>
		<view class="main">
			<view class="title">
				填写注册信息
			</view>
			<view class="input-box">
				<view class="box-item">
					<input class="uni-input" maxlength="11" type="number" placeholder="请输入手机号码"
						placeholder-style="color: #AEAEAE;" v-model="form.phone" />
				</view>
				<view class="box-item">
					<input class="uni-input" maxlength="6" type="number" placeholder="请输入验证码"
						placeholder-style="color: #AEAEAE;" v-model="form.captcha" />
					<view v-if="!timer" class="getcaptcha" @tap="handShowPopup">获取验证码</view>
					<view v-else class="getcaptcha">{{countDown}}</view>
				</view>
				<view class="box-item">
					<input class="uni-input" maxlength="12" type="text" placeholder="请输入昵称"
						placeholder-style="color: #AEAEAE;" v-model.trim="form.nick_name" />
				</view>
			</view>
			<view class="agree">
				<checkbox-group @change="handCheckboxChange($event)" name="agree">
					<checkbox class="checkbox" :value="true" />
				</checkbox-group>
				<text class="agree-label">
					注册即代表您已同意
					<text @tap="handView('https://h5.shenglangnft.com/base/agreement')">《用户协议》</text>和<text
						@tap="handView('https://h5.shenglangnft.com/base/privacy_policy')">《隐私政策》</text>
				</text>
			</view>
			<view class="submit" @tap="handValid">
				注册
			</view>
			<view class="gologin" @tap="handGoLogin">
				已注册，去登录
			</view>
		</view>
		<tf-verify-img @succeed="verifySuccess" @close="showVerify = false" v-if="showVerify"></tf-verify-img>
	</view>
</template>

<script>
	import TfVerifyImg from '../../components/tf-verify-img/tf-verify-img.vue'
	import {
		h5_base_register,
		h5_base_captcha,
		h5_user_info,
		h5_base_inviterInfo
	} from '../../request/api.js'
	import {
		post1,
		get1
	} from '../../request/index.js'
	import {
		goLogin
	} from '../../utils/index.js'
	export default {
		data() {
			return {
				form: {
					phone: '',
					captcha: '',
					nick_name: ''
				},
				sharedByGuy: '',
				next: '/',
				id: '',
				showVerify: false,
				agree: false,
				timer: null,
				countDown: 0,
				share_sign: ''
			}
		},
		filters: {
			filterPhone(val) {
				return val.substring(0, 3) + '****' + val.substring(7, 11)
			}
		},
		methods: {
			handCheckboxChange(e) {
				this.agree = !this.agree
			},
			// 查看协议
			handView(url) {
				uni.navigateTo({
					url: `/pages/userAgreement/userAgreement?url=${url}`
				})
			},
			// 打开弹窗
			handShowPopup() {
				if (!/^[1]{1}[0-9]{10}$/.test(this.form.phone)) {
					console.log(this.form.phone)
					return uni.showToast({
						title: '手机号码不符合规则',
						icon: 'none'
					})
				}
				this.showVerify = true

			},
			// 滑动验证成功
			verifySuccess() {
				this.showVerify = false
				this.handGetCaptcha()
			},
			// 获取验证码
			async handGetCaptcha() {

				const res = await this.$post(h5_base_captcha, {
					phone: this.form.phone,
					use_type: 7
				})
				console.log(res)
				if (res.code !== 0) {
					return uni.showToast({
						title: res.msg,
						icon: 'none'
					})
				}
				uni.showToast({
					title: '已发送',
					icon: 'success'
				})
				this.countDown = 60
				this.timer = setInterval(() => {
					if (this.countDown === 1) {
						clearInterval(this.timer)
						this.timer = null
					}
					this.countDown--
				}, 1000)

			},
			// 点击登录
			handValid() {
				if (!this.agree) {
					return uni.showToast({
						title: '请勾选同意用户协议和隐私政策',
						icon: 'none'
					})
				}
				if (!/^[1]{1}[0-9]{10}$/.test(this.form.phone)) {
					console.log(this.form.phone)
					return uni.showToast({
						title: '手机号码不符合规则',
						icon: 'none'
					})
				}
				if (!/^[0-9]{6}$/.test(this.form.captcha)) {
					return uni.showToast({
						title: '验证码不符合规则',
						icon: 'none'
					})
				}
				this.register()

			},
			async register() {
				try {
					uni.showLoading({
						title: '请求中',
						mask: true
					})
					const data = {
						phone: this.form.phone,
						captcha: this.form.captcha,
						nick_name: this.form.nick_name
					}
					if (this.share_sign) {
						data.share_sign = this.share_sign
					}
					const res = await post1(h5_base_register, data)
					console.log(res)
					if (res.code !== 0) {
						uni.hideLoading()
						return uni.showToast({
							icon: 'none',
							title: res.msg
						})
					}
					this.$store.commit('user/set_token', res.data.token)
					this.login()

				} catch (e) {
					console.log('catch', e)
					uni.hideLoading()
					//TODO handle the exception
					uni.showToast({
						icon: 'none',
						title: e.message
					})
				}

			},
			async login() {
				try {

					const res1 = await get1(h5_user_info)
					if (res1.code !== 0) {
						uni.hideLoading()
						return uni.showToast({
							title: res1.msg,
							icon: 'none'
						})
					}
					this.$store.commit('user/set_userInfo', res1.data)
					uni.hideLoading()
					uni.showToast({
						icon: 'success',
						title: '登录成功'
					})
					this.nextGoWhere()

				} catch (e) {
					//TODO handle the exception
					console.log('error', e)
					uni.showToast({
						icon: 'none',
						title: e.message
					})
				}

			},
			handGoLogin() {
				// goLogin方法会携带当前url的参数的，不用手动再传一遍
				goLogin({
					origin: 'invitationToRegister' //有origin属性后登录页跳转到其他页面为reLaunch方式
				})
			},
			// 获取邀请人信息
			getSharedByGuy(share_sign) {
				post1(h5_base_inviterInfo, {
					share_sign
				}).then(res => {
					if (res.code !== 0) {
						return uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
					this.sharedByGuy = res.data.nick_name || ''
				})
			},
			nextGoWhere() {
				if (!this.next) {
					return uni.reLaunch({
						url: '/pages/index/index'
					})
				}

				if (this.next === 'goldSinglesDetail') {
					uni.reLaunch({
						url: '/pages/goldSinglesDetail/goldSinglesDetail?product_item_id=' + this.id
					})
				} else if (this.next === 'preOrderDetails') {
					uni.reLaunch({
						url: '/pages/preOrderDetails/preOrderDetails?product_item_id=' + this.id
					})
				} else if (this.next === 'recommendedAlbumDetail') {
					uni.reLaunch({
						url: '/pages/recommendedAlbumDetail/recommendedAlbumDetail?product_item_id=' + this
							.id
					})
				} else if (this.next === 'copyrightDetail') {
					uni.reLaunch({
						url: '/pages/copyrightDetail/copyrightDetail?music_info_id=' + this.id
					})
				} else if (this.next === 'demoAssistance') {
					uni.reLaunch({
						url: '/pages/demoAssistance/demoAssistance?origin=invitationToRegister&demo_item_id=' +
							this.id
					})
				} else {
					uni.reLaunch({
						url: '/pages/index/index'
					})
				}

			}
		},
		onLoad(option) {
			let share_sign = ''
			// 先使用当前url携带的share_sign, 如果没有再使用本地储存的share_sign
			const storage = window.sessionStorage.getItem('afterBackQuery')
			if (storage) {
				const {
					query
				} = JSON.parse(storage)
				if (query.share_sign) {
					share_sign = decodeURIComponent(query.share_sign)
				}
			}
			if (option.share_sign) {
				share_sign = decodeURIComponent(option.share_sign)
			}
			if (share_sign) {
				this.share_sign = share_sign
				this.getSharedByGuy(share_sign)
			}
			if (option.next) {
				this.next = option.next
			}
			if (option.id) {
				this.id = option.id
			}
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 0;
		text-align: center;
		max-height: 100vh;
		overflow-y: hidden;
		font-family: 'PingFang SC';
		font-style: normal;
		font-weight: 400;
		font-size: 30rpx;
		line-height: 42rpx;
		color: #D0AFAF;


		.header {
			box-sizing: border-box;
			width: 750rpx;
			height: 660.72rpx;
			padding: 19.5rpx;
			background-image: url('https://file.yuanyinfu.com/front-end-lib/registerBG1.png'), url('https://file.yuanyinfu.com/front-end-lib/registerBG2.png');
			background-position: 129.57rpx 89.5rpx, 0 0;
			background-size: 490.86rpx 392.14rpx, 750rpx 660.72rpx;
			background-repeat: no-repeat, no-repeat;
		}

		.main {
			position: relative;
			top: -290.22rpx;
			width: 686rpx;
			height: 670rpx;
			background: #292929;
			border-radius: 16rpx;
			margin: auto;
			box-sizing: border-box;
			overflow: hidden;

			.title {
				font-size: 30rpx;
				line-height: 42rpx;
				color: #DDDDDD;
				padding-top: 32rpx;
			}

			.input-box {
				margin: auto;
				margin-top: 11rpx;
				width: 622rpx;

				.box-item {
					position: relative;
					font-size: 28rpx;

					.uni-input {
						box-sizing: border-box;
						height: 96rpx;
						width: 100%;
						border-bottom: 0.5px solid rgba(174, 174, 174, 0.3);
						border-radius: 0.5rpx;
						color: #AEAEAE;
						font-size: 28rpx;
						text-align: left;

						&:hover {
							border-bottom: 0.5px solid #ffff;
						}
					}

					.getcaptcha {
						position: absolute;
						top: 0;
						right: 0;
						height: 96rpx;
						display: flex;
						align-items: center;
						color: #D10910;
					}
				}
			}

			.submit {
				display: flex;
				align-items: center;
				justify-content: center;
				margin: auto;
				margin-top: 25rpx;
				width: 650rpx;
				height: 96rpx;
				font-weight: 500;
				font-size: 32rpx;
				line-height: 96rpx;
				text-align: center;
				color: #ECECEC;
				background: #D10910;
				border-radius: 48rpx;
			}

			.gologin {
				margin-top: 32rpx;
				font-family: 'PingFang SC';
				font-style: normal;
				font-weight: 400;
				font-size: 26rpx;
				line-height: 36rpx;
				text-align: center;
				color: #AEAEAE;

			}

			.agree {
				display: flex;
				color: #ffff;
				font-size: 28rpx;
				width: 622rpx;
				padding-top: 26rpx;
				margin: auto;
				// padding-bottom: 100rpx;

				.checkbox {
					margin-right: 24rpx;
					margin-left: 10rpx;

					/deep/.uni-checkbox-input {
						width: 24rpx;
						height: 24rpx;
						border: 0.5px solid #868686;
						border-radius: 6rpx;
						background-color: transparent;
					}

					/deep/.uni-checkbox-input::before {
						font-size: 24rpx;
					}
				}

				.agree-label {
					font-size: 22rpx;
					line-height: 48rpx;
					color: #666666;

					text {
						color: rgba(172, 145, 71, 1)
					}
				}

			}

		}
	}
</style>
