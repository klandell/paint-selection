// webpack.config.js
const webpack = require('webpack');

module.exports = {
    context: `${__dirname}`,
    target: 'web',
    devtool: false,
    entry: ['./index.js'],
    node: { Buffer: false },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: [
                    {
                        loader: 'style-loader',
                        query: {
                            minimize: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            minimize: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        query: {
                            minimize: true,
                        },
                    },
                ],
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: __dirname,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourcemap: false,
        }),
    ],
};
