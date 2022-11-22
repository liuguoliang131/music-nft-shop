// 黄金单曲黄金专辑数字音乐的详情

export default {
	methods: {
		onWatchState() {
			// 
			const that = this
			window.onPageAppear = function() {
				that.getDetails(that.product_item_id)
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
