export const TOKEN = 'x-token'
export const processName = process.env.NODE_ENV
const development = {
	BASE_URL: 'http://t.h5.shenglangnft.com/api'
}
const test = {
	BASE_URL: 'http://c.yuanyinfu.com'
}
const prod = {
	// BASE_URL: 'http://h5.yuanyinfu.com'
	BASE_URL: 'http://c.yuanyinfu.com'
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
