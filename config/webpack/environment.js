const { environment } = require('@rails/webpacker')
const sassLoader = environment.loaders.get('sass')

sassLoader.use.find(item => item.loader === 'sass-loader').options.implementation = require('sass')

module.exports = environment
