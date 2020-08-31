import CopyWebpackPlugin from 'copy-webpack-plugin'

export default (config) => {
  // Copy root assets
  config.plugins.push(new CopyWebpackPlugin({
    patterns: [{
      context: `${__dirname}/src`,
      from: 'assets'
    }]
  }))
}
