import {
	setToken,
	getToken,
	setUserInfo,
	getUserInfo
} from '../../utils/index'
console.log('store')
export default {
	namespaced: true,
	state: {
		token: getToken() || '',
		userInfo: getUserInfo() || null
	},
	mutations: {
		set_token(state, data) {
			setToken(data)
			state.token = data
		},
		set_userInfo(state, data) {
			setUserInfo(data)
			state.userInfo = data
		}

	}
}
