// 管理公共状态
import {
	getStorageAppConfig,
	isApp,
	currentPlayInfo
} from '../../utils/index.js'

export default {
	namespaced: true,
	state: {
		appConfig: getStorageAppConfig(),
		noNetwork: false, //网络状态
		isApprove: isApp(),
		refresh: false, //是否应该刷新了
		remainingHeight: '100vh', // 屏幕剩余高度  剩余高度 = 100vh-navHeadHeight-传参高度
		appPlayState: {
			product_item_id: '',
			whatType: ''
		} // 储存的是APP播放状态，用来控制H5播放按钮状态和APP的一样
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
		},
		// APP原生播放器状态
		set_appPlayState(state, data = {}) {
			if (data.type === 'collections') {
				state.appPlayState = {
					whatType: '1',
					product_item_id: data.product_item_id
				}
			} else if (data.type === 'copyright') {
				state.appPlayState = {
					whatType: '2',
					product_item_id: data.music_info_id
				}
			} else if (data.type === 'demo') {
				state.appPlayState = {
					whatType: '3',
					product_item_id: data.demo_item_id
				}
			}
		}

	},
	actions: {
		async dispatch_appPlayState(context, data) {
			const str = await currentPlayInfo()
			context.commit('set_appPlayState', JSON.parse(str))
		}
	}
}
