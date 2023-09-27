const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',//define a pasta
        filename: './app.js'// define a saida padrao(ou arquivo innicial)
    },
    devServer: {//define servidor
        port: 8080,//define porta do servidor localhost
        contentBase: './public',//define onde procurar
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],// define as extensões que interpreta
        alias: {// cria "apelidos" (recebe valor como em uma variavel)
            modules: __dirname + '/node_modules',// quando precisar basta referencar "modules"
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',//" " " " "jquery"
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'//" " " " " "bootstrap
        }
    },
    plugins: [ //adiciona os plugins
        new webpack.ProvidePlugin({
            $: 'jquery',// torna "jquery (definido na linha 18) disponivel como ' $ '"
            jQuery: 'jquery',// $ = jQuery
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css')//adiciona classe css atraves do uploader
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,// deixa extensão padrao
            loader: 'babel-loader',// loader
            exclude: /node_modules/,// exclui
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')//loader do css
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,//loader das demais extensões
            loader: 'file'//loader usado para carregar os arquivos 
        }]
    }
}