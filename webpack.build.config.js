// Old config. Keeping just in case something breaks with the new webpack

// const webpack = require('webpack');
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');

// // Any directories you will be adding code/files into,
// // need to be added to this array so webpack will pick them up
// const defaultInclude = path.resolve(__dirname, 'src');

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           'css-loader',
//         ],
//         include: defaultInclude,
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader',
//         ],
//         include: defaultInclude,
//       },
//       {
//         test: /\.jsx?$/,
//         use: [{ loader: 'babel-loader' }],
//         include: defaultInclude,
//       },
//       {
//         test: /\.(jpe?g|png|gif)$/,
//         use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
//         include: defaultInclude,
//       },
//       {
//         test: /\.(eot|svg|ttf|woff|woff2|mp3)$/,
//         use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
//         include: defaultInclude,
//       },
//     ],
//   },
//   target: 'electron-renderer',
//   optimization: {
//    minimize: true,
//    minimizer: [new TerserPlugin({
//      terserOptions: {
//        compress: {

//        },
//      },
//    })],
//   },
//   externals: [nodeExternals()],
//   plugins: [
//     new HtmlWebpackPlugin(),
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: 'bundle.css',
//       chunkFilename: '[id].css',
//     }),
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify('production'),
//     }),
//   ],
//   stats: {
//     colors: true,
//     children: false,
//     chunks: false,
//     modules: false,
//   },
// };
