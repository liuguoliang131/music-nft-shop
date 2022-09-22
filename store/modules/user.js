import {
	setToken,
	getToken
} from '../../utils/index'
export default {
	namespaced: true,
	state: {
		token: getToken() || ''
	}
}
