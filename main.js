import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import {
	post,
	get
} from './request/index.js'
import store from './store/index.js'
import cuHead from './components/cu-head.vue'
import {
	getUserInfo,
	setUserInfo,
	getToken,
	setToken,
	isApp
} from './utils/index.js'
Vue.prototype.$store = store
Vue.config.productionTip = false
Vue.component('cuHead', cuHead)
App.mpType = 'app'
Vue.prototype.$post = post
Vue.prototype.$get = get
// app.vue onlaunch同步加载子路由
// Vue.prototype.$onLaunched = new Promise(resolve => {
// 	Vue.prototype.$isResolve = resolve
// })
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	return {
		app
	}
}
// #endif
