import {
	processName
}
'./uniKey.js'
console.log('processName', processName)
export const getToken = () => {

}
export const setToken = () => {

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
