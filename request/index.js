import config from '../utils/uniKey.js'
import store from '../store/index.js'
const onlykey = 'U6LMVF9aNxg7Jgw5TMqL0CHiw4aT8ipuqlNCkdA9H50=' // key
const token = 'x-token'

// 设置请求头方法
const getHeader = (data) => {
	const ts = new Date().getTime()
	console.log(store)
	const headers = {
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
	const sign = md5(afterUrl + '&ak=' + 'hanhou-app' + '&ts=' + ts + onlykey)
	headers.sign = sign
	return headers

}
// post
export const post = function(url, data = {}) {
	uni.showLoading({
		title: '加载中'
	});
	return new Promise((resolve, reject) => {
		uni.request({
			header: getHeader(data),
			timeout: 5000,
			method: 'POST',
			url: config.BASE_URL + url,
			data,
			success(res) {
				resolve(res.data)
			},
			fail(res) {
				reject(res.data)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}
