const HtmlWebpackPlugin = require('html-webpack-plugin')

const CSSRules = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
}

const SCSSRules = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
}

const FontRules = {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts/',
            },
        },
    ],
}

const SVGRules = {
    test: /\.svg$/,
    use: [
        {
            loader: 'svg-url-loader',
        },
    ],
}

const ImgRules = {
    test: /\.(jpe?g|png|gif)$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                outputPath: 'assets/img/',
            },
        },
    ],
}

module.exports = {
    output: {
        filename: 'app.js',
    },
    module: {
        rules: [SCSSRules, FontRules, SVGRules, ImgRules, CSSRules],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Rock Paper Scissors',
            template: 'src/index.html',
        }),
    ],
}
