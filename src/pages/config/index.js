// 通过require.context加载所有的config文件
const APIConfigMap = new Map()

const requireAll = context => context.keys()
const configs = require.context('../config', true, /\.js$/)
requireAll(configs).forEach(filePath => {
  const [file] = filePath.split('/').reverse()
  const filename = file.split('.')[0]
  if (!['index.js'].includes(filename)) {
    APIConfigMap.set(filename, configs(filePath).default)
  }
})

export default APIConfigMap