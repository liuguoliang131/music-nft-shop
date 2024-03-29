import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import {
	post,
	get,
	post1,
	get1
} from './request/index.js'
import store from './store/index.js'
import NavHead from './components/navHead.vue'
import GlobalAudio from './components/globalAudio/globalAudio.vue'
import {
	getUserInfo,
	setUserInfo,
	getToken,
	setToken,
	isApp
} from './utils/index.js'
Vue.prototype.$store = store
Vue.config.productionTip = false
Vue.component('NavHead', NavHead)
Vue.component('GlobalAudio', GlobalAudio)
App.mpType = 'app'
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$post1 = post1
Vue.prototype.$get1 = get1
// 标签页图标
const favicon = document.createElement("link")
favicon.rel = "icon"
favicon.href = "./static/favicon.ico"
document.head.appendChild(favicon)

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
