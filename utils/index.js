import config, {
	processName,
	TOKEN,
	USER_INFO
} from './uniKey.js'
console.log('utils')
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
// 返回年月日时分秒
export const getTimeData = (date) => {
	const time = new Date(date)
	let y = time.getFullYear()
	let mon = time.getMonth() + 1
	let dd = time.getDate()
	let hh = time.getHours()
	let MM = time.getMinutes()
	let ss = time.getSeconds()
	y = y < 10 ? `0${y}` : y
	mon = mon < 10 ? `0${mon}` : mon
	dd = dd < 10 ? `0${dd}` : dd
	hh = hh < 10 ? `0${hh}` : hh
	MM = MM < 10 ? `0${MM}` : MM
	ss = ss < 10 ? `0${ss}` : ss
	return {
		y,
		mon,
		dd,
		hh,
		MM,
		ss
	}
}

// 如果在APP内 跳转   否则跳转到下载页
let timer = null
export const jumpBefore = (url, fail) => {
	if (isApp()) {
		uni.navigateTo({
			url
		})
	} else {
		if (fail) {
			fail()
		} else {
			uni.showToast({
				title: '即将跳转到元音符App下载页面',
				icon: 'none',
				duration: 3000
			})
			if (timer) return false
			timer = setTimeout(() => {
				clearTimeout(timer)
				timer = null
				window.location.href = config.APP_DOWNLOAD_URL
			}, 3000)
		}
	}
}

export const filterTime = (time) => {
	const da = new Date(time);
	var year = da.getFullYear();
	var month = da.getMonth() + 1;
	var date = da.getDate();
	const h = da.getHours()
	const m = da.getMinutes()
	const s = da.getSeconds()
	return `${[year,month,date].join('/') } ${[h,m,s].join(':')}`
}
// 判断是否是在微信内
export const isWxBrowser = () => {
	var useragent = window.navigator.userAgent
	if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
		return true
	} else {
		return false
	}
}
// 获取code
export const getCode = () => {
	return window.localStorage.getItem('code') || ''
}
export const setCode = (code) => {
	window.localStorage.setItem('code', code)
}
// 获取openId
export const getOpenId = () => {
	return window.localStorage.getItem('openId') || ''
}
export const setOpenId = (openId) => {
	window.localStorage.setItem('openId', openId)
}
// 跳转微信授权页
export const jumpWxAuthUrl = () => {
	console.log('processName', processName)
	if (processName === 'development') {
		return false
	}
	const url = window.location.href
	if (url.includes('code=') && !getOpenId()) {
		let code = url.split('?')[1].split('&')[0].split('=')[1]
		console.log('code', code)
		setCode(code) //存储code
		// axios({
		//   method: 'get',
		//   url: host + h5_wx_getOpenid,
		//   params: {
		//     code
		//   }
		// }).then(res => {
		//   console.log('获取openid then:', res)
		//   store.commit('user/set_openId', res.data.model)
		//   console.log('history', history)
		//   // window.history.go(-2)
		//   window.location.href = window.localStorage.getItem('littleBeeLink')
		// })
	}
	if (getOpenId()) {
		return false
	}
	if (getCode()) {
		// 已经有code  去获取openid
	} else {
		window.location.href =
			`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appId}&redirect_uri=${config.appURL}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
	}


}
