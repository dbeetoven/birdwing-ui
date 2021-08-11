const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

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
    use: [{
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-optional-chaining'],
        },
    },
    ],
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
const fileRules = {
    test: /\.(jpe?g|png|jpg|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 100000,
            },
        },
    ],

}


module.exports = (env, { mode }) => ({
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash].bundle.js',
    },
    resolve: {
        modules: [path.join(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            assets: path.resolve(__dirname, './src/assets/'),
            config: path.resolve(__dirname, './src/config/'),
            pages: path.resolve(__dirname, './src/pages/'),
            services: path.resolve(__dirname, './src/services/'),
            hooks: path.resolve(__dirname, './src/hooks/'),
            styles: path.resolve(__dirname, './src/styles/'),
            themes: path.resolve(__dirname, './src/themes/'),
            utils: path.resolve(__dirname, './src/utils/'),
            contexts: path.resolve(__dirname, './src/contexts/'),
            components: path.resolve(__dirname, 'src/components/')
        },
    },
    module: {
        rules: [jsRules, cssRules, fileRules],
    },
    optimization: {
        splitChunks: { chunks: 'all' },
    },
    plugins: [
        ...(mode === 'production' ? prodPlugins : devPlugins),
        new ESLintPlugin({ emitError: true }),
        new HtmlWebPackPlugin({
            template: 'src/index.html',
        }),
    ].filter(Boolean),
    performance: {
        hints: 'warning',
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js.gz')
        },
    },
})
