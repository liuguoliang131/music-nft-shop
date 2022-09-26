import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import {
	post
} from './request/index.js'
import store from './store/index.js'
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$post = post
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
