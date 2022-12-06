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
		music: {
			show: false,
			play: false,
			index_url: '', //封面图
			music_url: '', //歌曲链接
			author_name: '',
			product_item_id: '',
			product_name: '', //歌名
		} // 当前播放的音乐信息
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
		set_music(state, data) {
			state.music = data
		}

	}
}
