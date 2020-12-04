const HtmlWebpackPlugin = require('html-webpack-plugin')

const CSSRules = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
}

const SCSSRules = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
}

const ImgRules = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'assets/img/',
                useRelativePath: true,
            },
        },
    ],
}

module.exports = {
    output: {
        filename: 'app.js',
    },
    module: {
        rules: [SCSSRules, ImgRules, CSSRules],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Rock Paper Scissors',
            template: 'src/index.html',
        }),
    ],
}
