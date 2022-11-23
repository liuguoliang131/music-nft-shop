// 唱片详情
import {
	goBack
} from '../utils/index.js'
import {
	post1
} from '../request/index.js'
import {
	collections_user_collectionInfo
} from '../request/api.js'
export default {
	data() {
		return {

		}
	},
	methods: {
		onWatchState() {
			// app转赠页面返回到唱片详情页面 触发这个函数
			const that = this
			window.onPageAppear = function() {
				goBack()
			}
		}
	},
	onShow() {
		// console.log('mixins onshow 1', this.id)

	},
	onReady() {
		// console.log('mixins onready')
		this.onWatchState()
	},
	created() {
		// console.log('mixins created 2')
	},
	mounted() {
		// console.log('mixins mounted 3')
	},
}
