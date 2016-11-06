const HtmlWebpackPlugin = require('html-webpack-plugin')
const consts = require('./consts')

const getEntry = (pages) => {
  const entry = {}
  const allPages = ['public', ...pages]

  allPages.map((page) => {
    entry[page] = `./${consts.SRC}${consts.SCRIPTS}${page}.js`
  })

  return entry
}

const getPlugins = (pages) => {
  const plugins = []

  pages.map((page) => {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: `./${page}.html`,
        template: `./src/templates/${page}.html`,
        inject: true
      })
    )
  })

  return plugins
}

module.exports = {
  getEntry,
  getPlugins
}
