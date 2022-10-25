export const TOKEN = 'x-token'
export const USER_INFO = 'yyf-userInfo'
export const processName = process.env.NODE_ENV
const development = {
	// BASE_URL: 'https://t.h5.shenglangnft.com/api',
	BASE_URL: '/api',
	APP_DOWNLOAD_URL: 'https://share.yuanyinfu.com/h5/app', //元音符app下载地址
}

const prod = {
	ENV: 'test', //打包到测试环境
	BASE_URL: 'https://c.yuanyinfu.com',
	APP_DOWNLOAD_URL: 'https://share.yuanyinfu.com/h5/app',
	appURL: 'https://c.yuanyinfu.com', //本web地址
	appId: 'wxc71083a78fa68d77', //公众号id

	// ENV: 'prod', //打包到生产环境
	// BASE_URL: 'https://yyf-h5.hanhoukeji.com',
	// APP_DOWNLOAD_URL: 'https://share.yuanyinfu.com/h5/app',
	// appURL: 'https://yyf-h5.hanhoukeji.com',
	// appId: 'wxc71083a78fa68d77'
}
let compileConfig = null
if (processName === 'development') {
	compileConfig = development
} else {
	compileConfig = prod
}
export default compileConfig
