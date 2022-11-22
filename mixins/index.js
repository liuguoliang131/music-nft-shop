import {
	post1
} from "../request/index.js"
export default {
	data() {
		return {
			isApprove: true
		}


	},
	methods: {
		getApprove() {
			// 获取审核配置
			uni.showLoading({
				title: '加载中',
				mask: true
			})
			const api = '/h5/show/configure'
			return new Promise((resolve, reject) => {
				if (this.$store.state.user.inApp) {
					const config = window.localStorage.getItem('AppConfigInfo') || {}
					const appConfig = JSON.parse(config)
					const data = {
						version_code: appConfig.version_code || 1900,
						os: appConfig.os,
						channel: appConfig.channel
					}
					post1(api, data).then(res => {
						// alert(JSON.stringify(res))
						uni.hideLoading()
						if (res.data && res.data.config) {
							this.isApprove = res.data.config.audit_status
						} else {
							this.isApprove = true
						}
						resolve(this.isApprove)
					})
				} else {
					uni.hideLoading()
					this.isApprove = false
					resolve(this.isApprove)
				}

			})

		}
	}

}
