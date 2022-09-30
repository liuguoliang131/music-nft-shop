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
		'app-id': 'yyf_h5',
		'x-token': store.state.user.token,
		// 'x-token': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiOWVlMTFjNDktYmViYS00YmMyLWI1YzgtN2Q2OWFjOGU2NDNkIiwiSUQiOjEwMDAyMywiUGhvbmUiOiIxNTgwMTI1MjM5NSIsIkJ1ZmZlclRpbWUiOjg2NDAwLCJleHAiOjE2NjQ5NTk5MTksImlzcyI6IkhBSEFPbzYzMjQ2MzEiLCJuYmYiOjE2NjQzNTQxMTl9.NtG0AEV-8wiFz5WUNW05KF7_8TRXkf5IPoa-mgVRddiOzgan_HaBxrpaHSvE2q_DL6hdYXbOwBNLrhMDR-aoiQ',
		ts,
		ak: 'hanhou-app',
		sign: ''
	}
	const sortParams = []
	Object.keys(data).sort().forEach((key, idx) => {
		sortParams[idx] = key + '=' + data[key]
	})
	const afterUrl = sortParams.join('&') // 参数串
	console.log(afterUrl)
	let md5After = ''
	if (afterUrl) {
		md5After = afterUrl + '&ak=' + 'hanhou-app' + '&ts=' + ts + onlykey
	} else {
		md5After = 'ak=' + 'hanhou-app' + '&ts=' + ts + onlykey
	}
	const sign = md5(md5After)
	headers.sign = sign
	return headers

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
				if (res.data.code === 700 || res.data.code === 701 || res.data.code === 702) {
					goLogin()
				}
				resolve(res.data)
			},
			fail(res) {
				reject(res)
			},
			complete() {
				uni.hideLoading()
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
			timeout: 5000,
			method: 'GET',
			url: config.BASE_URL + url,
			params,
			success(res) {
				console.log('post success', res)
				if (res.data.code === 700 || res.data.code === 701 || res.data.code === 702) {
					goLogin()
				}
				resolve(res.data)
			},
			fail(res) {
				reject(res)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}
