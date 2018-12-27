module.exports = env => {
    const no_dist = (env && env.dist === "false");
    // fichier webpack.config.js
    const webpack = require("webpack");
    const path = require("path");
    const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
    const CleanWebpackPlugin = require('clean-webpack-plugin');

        let config = {
            entry: {
                app: __dirname + '/js/index.js',
                vendors: __dirname + '/js/vendors.js'
            },
            module: {
                rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }, {
                    test: /\.scss$/,
                    use: ExtractTextWebpackPlugin.extract({
                        use: ['css-loader', 'sass-loader', 'postcss-loader'],
                    })
                }]
            },
            plugins: [
                new CleanWebpackPlugin(__dirname + '/../dist', { allowExternal: true }),
                new ExtractTextWebpackPlugin('../css/styles.css')
            ],
            output: {
                path: path.join(__dirname, '/../dist/js/'),
                filename: '[name].bundle.js'
            },
        }
    module.exports = config;

    if (process.env.NODE_ENV === 'production') {
        module.exports.plugins.push(
            new CleanWebpackPlugin(__dirname + '/../dist', { allowExternal: true })
        )
    }
    return {
        //webpack configuration

        config
        // end webpack config 
    }
}