const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: path.resolve(__dirname, 'src/index.jsx'),

        output: {
            path: path.resolve(__dirname, 'dist'),

            filename: isProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',

            publicPath: '/',

            clean: true,

            assetModuleFilename: 'assets/[name].[hash:8][ext]',
        },

        resolve: {
            extensions: ['.js', '.jsx'],

            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,

                    exclude: /node_modules/,

                    use: {
                        loader: 'babel-loader',
                    },
                },

                {
                    test: /\.css$/,

                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',

                        'css-loader',
                    ],
                },

                {
                    test: /\.(png|jpe?g|gif|svg|webp)$/i,

                    type: 'asset/resource',

                    generator: {
                        filename: 'assets/images/[name].[hash:8][ext]',
                    },
                },

                {
                    test: /\.(woff2?|eot|ttf|otf)$/i,

                    type: 'asset/resource',

                    generator: {
                        filename: 'assets/fonts/[name].[hash:8][ext]',
                    },
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),

                favicon: path.resolve(__dirname, 'public/favicon.svg'),
            }),

            new Dotenv({
                systemvars: true,
            }),

            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
            }),

            ...(isProduction
                ? [
                      new MiniCssExtractPlugin({
                          filename: 'css/[name].[contenthash:8].css',
                      }),
                  ]
                : []),
        ],

        optimization: {
            minimizer: ['...', new CssMinimizerPlugin()],
            splitChunks: {
                chunks: 'all',
            },
            runtimeChunk: 'single',
        },

        devServer: {
            static: {
                directory: path.resolve(__dirname, 'public'),
            },
            port: 3000,
            hot: true,
            open: true,
            historyApiFallback: true,
        },

        devtool: isProduction ? 'source-map' : 'eval-source-map',

        performance: {
            hints: isProduction ? 'warning' : false,
        },
    };
};

