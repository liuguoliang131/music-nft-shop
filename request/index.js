import config from '../utils/uniKey.js'
import {
	goLogin
} from '../utils/index.js'
import store from '../store/index.js'
import md5 from 'js-md5'
const onlykey = 'U6LMVF9aNxg7Jgw5TMqL0CHiw4aT8ipuqlNCkdA9H50=' // key

// 设置请求头方法
const getHeader = (data) => {
	const ts = new Date().getTime()
	console.log('store', store)
	const headers = {
		'app-id': store.state.user.inApp ? 'yyf_app_h5' : 'yyf_h5',
		'x-token': store.state.user.token,
		ts,
		ak: 'hanhou-app',
		sign: ''
	}
	const sortParams = []
	Object.keys(data).sort().forEach((key, idx) => {
		sortParams[idx] = key + '=' + data[key]
	})
	const afterUrl = sortParams.join('&') // 参数串
	// console.log(afterUrl)
	let md5After = ''
	if (afterUrl) {
		md5After = afterUrl + '&ak=' + 'hanhou-app' + '&ts=' + ts + onlykey
	} else {
		md5After = 'ak=' + 'hanhou-app' + '&ts=' + ts + onlykey
	}
	// console.log('md5After', md5After)
	const sign = md5(md5After)
	headers.sign = sign
	return headers

}
// 清空个人数据
const clearUserData = () => {
	store.dispatch('globalAudio/dispatch_music')
	store.commit('globalAudio/set_show', false)
	store.dispatch('user/dispatch_clearUserData')
	goLogin()

}
// post
export const post = function(url, data = {}) {
	uni.showLoading({
		title: '加载中',
		mask: true
	});
	return new Promise((resolve, reject) => {
		uni.request({
			header: getHeader(data),
			timeout: 20000,
			method: 'POST',
			url: config.BASE_URL + url,
			data,
			success(res) {
				console.log('post success', res)
				if (res.statusCode === 500) {
					uni.showToast({
						title: '网络请求错误，请检查网络',
						icon: 'none'
					})
					reject(new Error('网络请求错误，请检查网络'))
				} else if (res.statusCode === 404) {
					uni.showToast({
						title: '网络请求错误404',
						icon: 'none'
					})
					reject(new Error('网络请求错误404'))
				} else {
					if (res.data.code === 700 || res.data.code === 701 || res.data.code === 702) {
						clearUserData()
					} else {
						resolve(res.data)
					}
				}

			},
			fail(res) {
				uni.showToast({
					title: '网络请求错误，请检查网络',
					icon: 'none'
				})
				reject(new Error('网络请求错误，请检查网络'))
			},
			complete(res) {
				uni.hideLoading()
			}
		})
	})
}
// 不提示的
export const post1 = function(url, data = {}) {
	return new Promise((resolve, reject) => {
		uni.request({
			header: getHeader(data),
			timeout: 20000,
			method: 'POST',
			url: config.BASE_URL + url,
			data,
			success(res) {
				console.log('post1 success', res)
				if (res.statusCode === 500) {
					uni.showToast({
						title: '网络请求错误，请检查网络',
						icon: 'none'
					})
					reject(new Error('网络请求错误，请检查网络'))
				} else if (res.statusCode === 404) {
					uni.showToast({
						title: '网络请求错误404',
						icon: 'none'
					})
					reject(new Error('网络请求错误404'))
				} else {
					if (res.data.code === 700 || res.data.code === 701 || res.data.code === 702) {
						clearUserData()
					} else {
						resolve(res.data)
					}
				}

			},
			fail(res) {
				uni.showToast({
					title: '网络请求错误，请检查网络',
					icon: 'none'
				})
				reject(new Error('网络请求错误，请检查网络'))
			},
			complete(res) {
				console.log('complete', res)

			}
		})
	})
}

// get
export const get = function(url, params = {}) {
	uni.showLoading({
		title: '加载中',
		mask: true
	});
	return new Promise((resolve, reject) => {
		uni.request({
			header: getHeader(params),
			timeout: 20000,
			method: 'GET',
			url: config.BASE_URL + url,
			params,
			success(res) {
				console.log('post success', res)
				if (res.statusCode === 500) {
					uni.showToast({
						title: '网络请求错误，请检查网络',
						icon: 'none'
					})
					reject(new Error('网络请求错误，请检查网络'))
				} else if (res.statusCode === 404) {
					uni.showToast({
						title: '网络请求错误404',
						icon: 'none'
					})
					reject(new Error('网络请求错误404'))
				} else {
					if (res.data.code === 700 || res.data.code === 701 || res.data.code === 702) {
						clearUserData()
					} else {
						resolve(res.data)
					}
				}

			},
			fail(res) {
				uni.showToast({
					title: '网络请求错误，请检查网络',
					icon: 'none'
				})
				reject(new Error('网络请求错误，请检查网络'))
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}

// get
export const get1 = function(url, params = {}) {
	return new Promise((resolve, reject) => {
		uni.request({
			header: getHeader(params),
			timeout: 20000,
			method: 'GET',
			url: config.BASE_URL + url,
			params,
			success(res) {
				console.log('post success', res)
				if (res.statusCode === 500) {
					uni.showToast({
						title: '网络请求错误，请检查网络',
						icon: 'none'
					})
					reject(new Error('网络请求错误，请检查网络'))
				} else if (res.statusCode === 404) {
					uni.showToast({
						title: '网络请求错误404',
						icon: 'none'
					})
					reject(new Error('网络请求错误404'))
				} else {
					if (res.data.code === 700 || res.data.code === 701 || res.data.code === 702) {
						clearUserData()
					} else {
						resolve(res.data)
					}
				}

			},
			fail(res) {
				uni.showToast({
					title: '网络请求错误，请检查网络',
					icon: 'none'
				})
				reject(new Error('网络请求错误，请检查网络'))
			},
			complete() {

			}
		})
	})
}
