const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

// Plugins

const devPlugins = []
const prodPlugins = [
    new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
    }),
]

const jsRules = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-optional-chaining'],
        },
    },
}
const cssRules = {
    test: /\.css$/,
    use: [
        {
            loader: 'style-loader',
        },
        {
            loader: 'css-loader',
        },
    ],
}

module.exports = (env, { mode }) => ({
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].bundle.js',
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    module: {
        rules: [jsRules, cssRules],
    },
    optimization: {
        splitChunks: { chunks: 'all' },
    },
    plugins: [
        ...(mode === 'production' ? prodPlugins : devPlugins),
        new HtmlWebPackPlugin({
            template: 'src/index.html',
        }),
    ].filter(Boolean),
    performance: {
        hints: 'warning',
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js.gz')
        },
    },
})
