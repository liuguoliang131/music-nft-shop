// 黄金单曲黄金专辑数字音乐的详情

export default {
	methods: {
		// 从原生页面返回到当前页面时触发此方法  调用detail刷新页面数据
		onWatchState() {
			try {
				const that = this

				window.onPageAppear = function() {
					that.getDetails(that.product_item_id)
				}
			} catch (e) {
				//TODO handle the exception
				throw e
			}


		}
	},
	onShow() {

	},
	onReady() {
		console.log('mixins ready')
		this.onWatchState()
	}
}
