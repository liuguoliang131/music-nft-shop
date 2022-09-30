export const TOKEN = 'x-token'
export const USER_INFO = 'yyf-userInfo'
export const processName = process.env.NODE_ENV
const development = {
	BASE_URL: 'https://t.h5.shenglangnft.com/api',
	APP_DOWNLOAD_URL: 'https://share.yuanyinfu.com/h5/app' //元音符app下载地址
}
const test = {
	BASE_URL: 'https://c.yuanyinfu.com',
	APP_DOWNLOAD_URL: 'https://share.yuanyinfu.com/h5/app'
}
const prod = {
	// BASE_URL: 'http://h5.yuanyinfu.com'
	BASE_URL: 'https://yyf-h5.hanhoukeji.com',
	APP_DOWNLOAD_URL: 'https://share.yuanyinfu.com/h5/app'
}
let compileConfig = null
if (processName === 'development') {
	compileConfig = development
} else if (processName === 'test') {
	compileConfig = test
} else {
	compileConfig = prod
}
export default compileConfig
