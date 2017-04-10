//导出webpack配置
//var OpenBrowserPlugin = require('open-browser-webpack-plugin');//自动打开浏览器插件
var port = 8003;
module.exports = {
    entry: './entry.js',//入口文件 // 固定的
    output: {
        filename: 'bundle.js' //出口文件,这个文件名字可以随便取,执行命令的时候会自动建
    },
    //自动打开浏览器插件
    /*plugins: [
        new OpenBrowserPlugin({url: 'http://localhost:' + port})
    ],*/
    devtool: 'source-map',//默认生成source-map,不用在运行时加上-d
    //把运行配置写在配置文件上
    devServer: {
        port: port,
        inline: true,
        //hot: true
    },
    //loaders模块
    module: {
        loaders: [
            //加载css
            {
                test: /\.css$/,
                // 感叹号代表连接符号,表示css文件用了两个加载器:css-loader和style-loader
                //代替entry.js中的require('style-loader!css-loader!')
                loader: 'style-loader!css-loader'
            },
            {
                //加载html文件,有的时候需要自动刷新index.html的时候会用到
                test: /\.html$/,
                loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
            },
            //bootstrap字体引入
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    //配置省略后缀,配置别名
    resolve: {
        "extensions": ['*', '.js', '.css', '.json']//当引入模块的时候,路径可以省略文件名后缀
    }
};


