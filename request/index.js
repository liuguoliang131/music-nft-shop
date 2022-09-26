import config from '../utils/uniKey.js'
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
		title: '加载中',
		mask: true
	});
	return new Promise((resolve, reject) => {
		uni.request({
			header: getHeader(data),
			timeout: 5000,
			method: 'POST',
			url: config.BASE_URL + '/api' + url,
			data,
			success(res) {
				console.log('post success', res)
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
