const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './www',
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'www')
  },
  module: {

    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"]
        }
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
};
