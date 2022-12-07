// 返回03:51格式化时间
function sToHs(s, flag = false) {
	//计算分钟
	//算法：将秒数除以60，然后下舍入，既得到分钟数
	let ms = s % 1000;
	s = s / 1000;
	let h;
	h = Math.floor(s / 60);
	//计算秒
	//算法：取得秒%60的余数，既得到秒数
	s = Math.floor(s % 60);
	//将变量转换为字符串
	h += '';
	s += '';
	ms += '';
	//如果只有一位数，前面增加一个0
	h = h.length === 1 ? '0' + h : h;
	s = s.length === 1 ? '0' + s : s;
	ms = ms.length === 1 ? '00' + ms : ms.length == 2 ? '0' + ms : ms;
	if (flag) return h + ':' + s + '.' + ms;
	return h + ':' + s;
}
// 创建audio实例
const createAudioContext = () => {
	let innerAudioContext = uni.createInnerAudioContext()
	innerAudioContext.autoplay = true
	innerAudioContext.src = ''
	innerAudioContext.loop = false
	return innerAudioContext
}
// 添加事件
const addAudioEvent = (context) => {
	const innerAudioContext = context.state.audioContext
	innerAudioContext._events.onCanplay = []
	innerAudioContext._events.onPlay = []
	innerAudioContext._events.onPause = []
	innerAudioContext._events.onTimeUpdate = []
	innerAudioContext._events.onEnded = []
	innerAudioContext.onCanplay(() => {
		// console.log('duration=>', innerAudioContext.duration);
		const audioTimeTotal = sToHs(Math.floor(innerAudioContext.duration * 1000));
		context.commit('set_audioTimeTotal', audioTimeTotal)
	});
	innerAudioContext.onPlay(() => {
		context.commit('set_paused', false)
		const audioTimeUpdate = sToHs(Math.floor(innerAudioContext.currentTime * 1000));
		context.commit('set_audioTimeUpdate', audioTimeUpdate)

	});
	innerAudioContext.onPause(() => {
		context.commit('set_paused', true)
	})
	innerAudioContext.onTimeUpdate(function() {
		const audioTimeUpdate = sToHs(Math.floor(innerAudioContext.currentTime * 1000));
		context.commit('set_audioTimeUpdate', audioTimeUpdate)
		const slider = (innerAudioContext.currentTime / innerAudioContext.duration) * 100; // 不在拖动状态下
		context.commit('set_slider', slider)

	});
	innerAudioContext.onEnded(function() {
		const audioTimeUpdate = sToHs(Math.floor(innerAudioContext.duration * 1000));
		context.commit('set_audioTimeUpdate', audioTimeUpdate)
		context.commit('set_slider', 100)
		context.commit('set_paused', true)
	});

	// innerAudioContext.onError(res => {});
}
// 改变audio实例属性状态

const changeAudioContext = (context) => {
	context.state.audioContext.src = context.state.music.music_url
}

export default {
	namespaced: true,
	state: {
		show: false, //播放器是否显示
		music: {
			index_url: '', //封面图
			music_url: '', //歌曲链接
			author_name: '',
			product_item_id: '',
			product_name: '' //歌名
		}, // 当前播放的音乐信息
		audioContext: createAudioContext(),
		audioTimeTotal: 0, //总时长
		audioTimeUpdate: 0, //现在时间位置
		slider: 0, //进度条进度
		paused: false

	},
	mutations: {
		set_show(state, data) {
			state.show = data
		},
		set_music(state, data = {
			index_url: '', //封面图
			music_url: '', //歌曲链接
			author_name: '',
			product_item_id: '',
			product_name: '' //歌名
		}) {
			state.music = data
		},
		// 设置总时长
		set_audioTimeTotal(state, data) {
			state.audioTimeTotal = data
		},
		// 设置当前时间位置
		set_audioTimeUpdate(state, data) {
			state.audioTimeUpdate = data
		},
		// 设置进度条进度
		set_slider(state, data) {
			state.slider = data
		},
		// 播放暂停
		set_paused(state, data) {
			state.paused = data
		}

	},
	actions: {
		// 新增播放歌曲
		dispatch_music(context, data) {
			context.commit('set_audioTimeTotal', sToHs(Math.floor(0)))
			context.commit('set_audioTimeUpdate', sToHs(Math.floor(0)))
			context.commit('set_slider', 0)
			context.commit('set_music', data)
			addAudioEvent(context)
			changeAudioContext(context)
			if (!context.state.show) {
				context.commit('set_show', true)
			}
			WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
				//在这里调用你的播放方法
				context.state.audioContext.play()
			}, false);
		},
		// 播放或暂停
		dispatch_play(context, data) {
			// 调用实例播放暂停方法 在实例里监听播放暂停事件改变paused
			if (context.state.audioContext.paused) {
				context.state.audioContext.play()
			} else {
				context.state.audioContext.pause()
			}

		}
	}
}
