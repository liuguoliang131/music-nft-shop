import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import user from './modules/user.js'
import publicState from './modules/public.js'
import globalAudio from './modules/globalAudio.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		user,
		publicState,
		globalAudio
	},
	getters
})
export default store
