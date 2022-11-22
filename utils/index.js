import config, {
	processName,
	TOKEN,
	USER_INFO,
	IN_APP
} from './uniKey.js'
import md5 from 'js-md5'
const onlykey = 'U6LMVF9aNxg7Jgw5TMqL0CHiw4aT8ipuqlNCkdA9H50=' // key
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

// 获取 是否在app内
export const getInApp = () => {
	const str = window.sessionStorage.getItem(IN_APP)
	if (str === 'true') {
		return true
	} else {
		return false
	}
}
export const setInApp = (data) => {
	window.sessionStorage.setItem(IN_APP, JSON.stringify(data))
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
					console.log('share_sign', strArr2)
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

	// 跳转音乐播放详情：isRightsMusic 是否是版权音乐 v1.9
	// {"page":"musicPlayPage","isNeedLogin":false,"params":{"music_id": 29, "music_info_id": 2, "isRightsMusic": false}}

	// 跳转去结算页面：v1.9
	//   {"page":"diskConfirmOrderPage","isNeedLogin":true,"params":{"product_item_id": 29, "buy_num": 2}}

	// 跳转转赠页面：v1.9
	//   {"page":"sendDiskGiftPage","isNeedLogin”:true,"params":{"product_item_id": 29, "owner_id": 2}}
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
// 分享base64图片到微信 微博
// share_way: 微信wxFriend、朋友圈timeline、微博weibo
// share_title：标题
export const shareBase64Image = ({
	img,
	share_way,
	share_title
}) => {
	HSApp.postMessage(JSON.stringify({
		type: 'shareBase64Image',
		params: {
			img,
			share_way,
			share_title
		}
	}))
}
// 分享url图片到微信 微博
export const shareUrlImage = ({
	img,
	share_way,
	share_title
}) => {
	HSApp.postMessage(JSON.stringify({
		type: 'shareUrlImage',
		params: {
			img,
			share_way,
			share_title
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
// 去下载
export const goDownload = () => {
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

// 隐藏原生标题栏
export const controlTitleBar = (isShow = false) => {
	HSApp.postMessage(JSON.stringify({
		'type': 'controlTitleBar',
		'params': {
			isShow
		},
	}))
}
// 关闭浏览器
export const closeWebPage = () => {
	HSApp.postMessage(JSON.stringify({
		'type': 'closeWebPage',
	}))
}
// 回退
export const goBack = () => {
	HSApp.postMessage(JSON.stringify({
		'type': 'goBack',
	}))
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
		return false
	} else {
		return true
	}
}
// 获取openId
export const getOpenId = () => {
	return window.localStorage.getItem('openId') || ''
}
export const setOpenId = (openId) => {
	window.localStorage.setItem('openId', openId)
}



// 设置请求头方法
const getHeader = (data) => {
	const ts = new Date().getTime()
	const headers = {
		'app-id': 'yyf_h5',
		'x-token': getToken(),
		ts,
		ak: 'hanhou-app',
		sign: ''
	}
	const sortParams = []
	Object.keys(data).sort().forEach((key, idx) => {
		sortParams[idx] = key + '=' + data[key]
	})
	const afterUrl = sortParams.join('&') // 参数串
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
const getWebAccessToken = (data) => {
	console.log('getWebAccessToken data', data)
	const getopenid_api = '/h5/collections_wechat/get_web_access_token'
	return new Promise((resolve, reject) => {
		uni.request({
			timeout: 20000,
			url: config.BASE_URL + getopenid_api,
			method: 'post',
			header: getHeader(data),
			data,
			success(res) {
				if (res.data.code !== 0) {
					reject(new Error(res.data.msg))
					return false
				} else {
					setOpenId(res.data.data.open_id)
					resolve(res.data)
				}
			},
			fail(error) {
				console.log('getWebAccessToken error', error)
				reject(new Error(error.message))
			},
			complete() {

			}
		})
	})
}
// 跳转微信授权页
export const jumpWxAuthUrl = () => {
	console.log('jumpWxAuthUrl processName', processName)
	if (processName === 'development') {
		return false
	}
	// if (config.ENV === 'test') {
	// 	return false
	// }
	const url = window.location.href
	if (url.includes('code=')) {
		let code = url.split('?')[1].split('&')[0].split('=')[1]
		console.log('code', code)
		getWebAccessToken({
			code
		}).then(res => {
			// 删除地址url中的code  跳转
			if (window.sessionStorage.getItem('afterBackUrl')) {
				window.location.href = window.sessionStorage.getItem('afterBackUrl')
			}

		}).catch(error => {
			uni.showToast({
				title: error.message,
				icon: 'error'
			})
		})

	} else {
		if (getOpenId()) {
			return false
		} else {
			// 离开时记录一下当前的地址 授权页返回code时跳转回这个地址
			window.sessionStorage.setItem('afterBackUrl', window.location.href)
			window.location.replace(
				`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appId}&redirect_uri=${config.appURL}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
			)

		}
	}



}

//专辑播放
// playList:播放列表  albumName：专辑名称 albumImage：专辑图片
export const playAlbum = (playList, albumName = '元音符', albumImage = '') => {
	// var playList = [{
	// 		"name": "与伤共舞",
	// 		"desc": "命运面前，休论公道。",
	// 		"singer": "刘思佳",
	// 		"lyricist": "嫩成",
	// 		"composer": "逄博",
	// 		"music_url": "https://media.shenglangnft.com/与伤共舞.mp3",
	// 		"music_time": 208
	// 	},
	// 	{
	// 		"name": "真的吗",
	// 		"desc": "当所有的热烈回归平静",
	// 		"singer": "刘思达",
	// 		"lyricist": "刘思达",
	// 		"composer": "刘思达",
	// 		"music_url": "https://media.shenglangnft.com/真的吗MMM.wav",
	// 		"music_time": 185
	// 	}
	// ];
	HSApp.postMessage(JSON.stringify({
		'type': 'playAlbum',
		'params': {
			playList,
			albumName,
			albumImage
		},
	}))
}
// 注册plus应用ready事件
export const addPlusReady = () => {
	function plusReady() {

	}
	if (window.plus) {
		plusReady()
	} else {
		document.addEventListener('plusready', plusReady, false)
	}
}

// 从本地储存中获取app信息
export const getStorageAppConfig = () => {

	const str = window.localStorage.getItem('AppConfigInfo')
	if (str) {
		return JSON.parse(str)
	} else {
		return {}
	}
}
// 获取APP信息
export const getAppConfig = () => {
	let getAppConfigTimer = null
	return new Promise((resolve) => {
		window.appConfigReady = false
		HSApp.postMessage(JSON.stringify({
			type: 'getAppConfig',
			params: {},
			callback: 'appConfig'
		}))
		getAppConfigTimer = setInterval(() => {
			if (window.appConfigReady) {
				clearInterval(getAppConfigTimer)
				resolve(window.appConfigReady)
			}
		}, 10)
	})


	// return new Promise((resolve) => {
	// 	if (isApp()) {
	// 		HSApp.postMessage(JSON.stringify({
	// 			type: 'getAppConfig',
	// 			params: {},
	// 			callback: 'appConfig'
	// 		}))

	// 	} else {
	// 		resolve()
	// 	}

	// })
}
// 获取app信息的回调 保存
window.appConfig = function(config) {
	let AppConfigInfo = JSON.stringify({
		'version-code': '1750'
	})
	if (typeof config === 'string') {
		AppConfigInfo = config
	} else {
		AppConfigInfo = JSON.stringify(config)
	}
	window.localStorage.setItem('AppConfigInfo', AppConfigInfo)
	window.appConfigReady = JSON.parse(AppConfigInfo)
}
