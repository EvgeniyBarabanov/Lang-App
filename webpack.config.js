const path = require('path')


module.exports = {
    entry: './src/index.js',
    module:{
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.jsx?$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              options: {
                presets:['@babel/preset-react']
              }
            }
        ]
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: { 
        extensions: ['*', '.js', '.jsx']
    },
    
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devtool: 'inline-source-map',
    devServer:{
        static:{
            directory: path.join(__dirname, 'public')
        },
        port: 8000,
        hot: true,
    }
}