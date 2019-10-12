const {
  override,
  addLessLoader,
  addWebpackAlias,
  addBabelPlugins
} = require('customize-cra')
const path = require('path')

const getPath = relativePath => path.resolve(__dirname, `src/${relativePath}/`)

module.exports = override(
  addWebpackAlias({
    '@components': getPath('components'),
    '@pages': getPath('pages'),
    '@hooks': getPath('hooks'),
    '@codepen': getPath('codepen')
  }),
  addBabelPlugins(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    'syntax-dynamic-import',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-proposal-pipeline-operator',
      {
        proposal: 'minimal'
      }
    ]
  ),
  addLessLoader({
    javascriptEnabled: true
  })
)