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
		isApprove: isApp()
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
		}

	}
}
