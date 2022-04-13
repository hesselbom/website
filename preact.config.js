import CopyWebpackPlugin from 'copy-webpack-plugin'
import { resolve } from 'path'

export default (config) => {
  // Copy root assets
  config.plugins.push(new CopyWebpackPlugin({
    patterns: [{
      context: resolve(__dirname, 'src'),
      from: 'assets'
    }]
  }))
}
