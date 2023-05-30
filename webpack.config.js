const path = require('path')


module.exports = {
    entry: './src/index.js',
    module:{
        rules: [
            {   
                test: /\.svg$/, 
                use: ['@svgr/webpack']
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader']
            },
            { 
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets:['@babel/preset-react']
                }
            },
            {
                test: /\.s[as]ss$/i, 
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.png/,
                type: 'asset/resource'
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
            directory: path.join(__dirname, 'public'),
            publicPath: '/'
        },
        port: 8000,
        hot: true,
        historyApiFallback: true,
        open: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
}