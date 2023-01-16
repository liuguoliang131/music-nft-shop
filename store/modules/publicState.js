// 管理公共状态
import {
	getStorageAppConfig,
	isApp
} from '../../utils/index.js'

export default {
	namespaced: true,
	state: {
		appConfig: getStorageAppConfig(),
		noNetwork: false, //网络状态
		isApprove: isApp(),
		refresh: false, //是否应该刷新了
		remainingHeight: '100vh' // 屏幕剩余高度  剩余高度 = 100vh-navHeadHeight-传参高度
	},
	mutations: {
		set_noNetwork(state, data) {
			state.noNetwork = data
		},
		set_appConfig(state, data) {
			state.appConfig = data
		},
		set_isApprove(state, data) {
			state.isApprove = data
		},
		set_refresh(state, data) {
			state.refresh = data
		},
		// navHead组件挂载完成时调用此函数
		// navHeadHeight:标题栏高度 单位px  formalParamHeight：传参高度，手动传入当前其他元素高度 单位rpx
		set_navHeadHeight(state, data = {
			navHeadHeight: '0px',
			otherHeight: '0rpx'
		}) {
			state.remainingHeight = `calc( 100vh - ${data.navHeadHeight} - ${data.otherHeight} )`
		}

	}
}
