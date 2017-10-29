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
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide

        options: {
          presets: ["es2015", "react"]
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
