// 黄金单曲黄金专辑数字音乐的详情

export default {
	methods: {
		onWatchState() {
			try {
				const that = this

				window.onPageAppear = function() {
					alert('onPageAppear触发了')
					that.getDetails(that.product_item_id)
				}
				alert(window.onPageAppear ? '有onPageAppear函数' : '没onPageAppear函数')
			} catch (e) {
				//TODO handle the exception
				alert(e)
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
