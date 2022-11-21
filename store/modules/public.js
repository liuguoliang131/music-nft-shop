// 管理公共状态
export default {
	namespaced: true,
	state: {
		noNetwork: false, //网络状态
		isApprove: true
	},
	mutations: {
		set_noNetwork(state, data) {
			state.noNetwork = data
		}

	}
}
