import {
	processName,
	TOKEN,
	USER_INFO
} from './uniKey.js'
console.log('processName', processName)
export const getToken = () => {
	return window.localStorage.getItem(TOKEN) || ''
}
export const setToken = (token) => {
	window.localStorage.setItem(TOKEN, token)
}
export const getUserInfo = () => {
	const str = window.localStorage.getItem(USER_INFO)
	if (str) {
		return JSON.parse(str)
	} else {
		return null
	}
}
export const setUserInfo = (data) => {
	window.localStorage.setItem(USER_INFO, JSON.stringify(data))
}

// 获取hash值和后缀参数 有对share_sign进行单独处理的方法
export const getHashQuery = (url = window.location.href) => {
	let hash = '/'
	if (url.includes('#')) {
		hash = url.split('#')[1]
	}
	const params = {
		path: hash,
		query: {

		}
	}
	if (hash.indexOf('?')) {
		const strArr = hash.split('?')
		params.path = strArr[0]
		if (strArr.length > 1) {
			const strArr1 = strArr[1].split('&')
			strArr1.forEach(item => {
				if (item.includes('share_sign=')) {
					const strArr2 = item.split('share_sign=')
					params.query.share_sign = strArr2[1]
				} else {
					const strArr2 = item.split('=')
					params.query[strArr2[0]] = strArr2[1]
				}
			})
			return params
		} else {
			return params
		}
	} else {
		return params
	}
}
// 是否在APP内
export const isApp = () => {
	try {
		if (HSApp) {
			return true
		} else {
			return false
		}
	} catch (error) {
		return false
	}
}
export const goLogin = () => {
	if (isApp()) {
		HSApp.postMessage(JSON.stringify({
			type: 'goLogin',
			params: {}
		}))
	} else {
		// 跳转H5落地页
		let url = '/pages/login/login'
		const {
			query
		} = getHashQuery()
		if (Object.keys(query)) {
			const kvList = []
			Object.keys(query).forEach(k => {
				kvList.push(`${k}=${query[k]}`)
			})
			url = url + '?' + kvList.join('&')
		}

		uni.navigateTo({
			url
		})
	}
}
// 分享到微信和朋友圈
// shareTitle：分享标题 shareDesc：分享描述  shareUrl：分享的链接 shareCover：封面图链接
export const shareWebToWX = (shareTitle, shareDesc, shareUrl, shareCover) => {
	if (isApp()) {
		HSApp.postMessage(JSON.stringify({
			type: 'shareWebToWX',
			params: {
				shareTitle,
				shareDesc,
				shareUrl,
				shareCover
			}
		}))
	} else {

	}

}
// 打开微信小程序
export const openMiniProgram = (username, path) => {
	if (isApp()) {
		HSApp.postMessage(JSON.stringify({
			type: 'openMiniProgram',
			params: {
				username,
				path
			}
		}))
	} else {

	}

}
// 跳转APP
export const openAppPage = (pageJSON) => {
	// {"page":"myScorePage","params":{}, "isNeedLogin": true}
	// 跳转到支付
	// {"page":"musicDetailPage","isNeedLogin":false,"params":{"music_info_id":0}}
	if (isApp()) {
		HSApp.postMessage(JSON.stringify({
			type: 'openAppPage',
			params: pageJSON
		}))
	} else {

	}

}
// 保存内存图片到本地 base64
export const saveBase64Image = (base64Img) => {
	HSApp.postMessage(JSON.stringify({
		type: 'saveBase64Image',
		params: {
			img: base64Img
		}
	}))
}
// 保存url图片到本地
export const saveUrlImage = (img) => {
	HSApp.postMessage(JSON.stringify({
		type: 'saveUrlImage',
		params: {
			img
		}
	}))
}
// 判断应用系统
export const isWhatSysTem = () => {
	const userMessage = navigator.userAgent
	const isAndroid = userMessage.indexOf('Andriod') > -1 || userMessage.indexOf('Adr') > -1 // 当前为Andriod环境
	// console.log('isAndroid', isAndroid)
	const isIOS = !!userMessage.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // 当前为IOS环境
	// console.log('isIOS', isIOS)
	if (isAndroid) {
		return 1
	} else if (isIOS) {
		return 2
	} else {
		return 3
	}
}
