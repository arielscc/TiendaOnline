const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const shouldAnalyze = process.argv.includes('--analyze');
const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
  }),

  new MiniCssExtractPlugin({
    filename: 'assests[name].css',
  }),
  new Dotenv({
    path: path.resolve(__dirname, './.env'),
  }),
  new ImageMinimizerPlugin({
    minimizerOptions: {
      plugins: [['optipng', { optimizationLevel: 5 }]],
    },
  }),
  new CopyPlugin({
    patterns: [
      { from: 'public/manifest.json', to: '' },
      { from: 'public/service-worker.js', to: '' },
      { from: 'public/icon.png', to: 'assets' },
    ],
  }),
];

if (shouldAnalyze) {
  plugins.push(new BundleAnalyzerPlugin());
}
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },
  plugins,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
    open: true,
    historyApiFallback: true,
  },
};
