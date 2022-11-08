import {
	setToken,
	getToken,
	setUserInfo,
	getUserInfo,
	getInApp,
	setInApp
} from '../../utils/index'
console.log('store')
export default {
	namespaced: true,
	state: {
		token: getToken() || '',
		userInfo: getUserInfo() || null,
		inApp: getInApp() || false
	},
	mutations: {
		set_token(state, data) {
			setToken(data)
			state.token = data
		},
		set_userInfo(state, data) {
			setUserInfo(data)
			state.userInfo = data
		},
		// 是否在元音符app内
		set_inApp(state, data) {
			setInApp(data)
			state.inApp = data
		}

	}
}
