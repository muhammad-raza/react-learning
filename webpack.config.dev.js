var webpack = require('webpack');
module.exports = {
	entry: {
		main: './index.js',
		vendor: ['babel-polyfill']
	},

	output: {
		path: __dirname + '/bundles',
		filename: '[name]-bundle.js',
		publicPath: "http://localhost:8090/bundles/"
	},
	module: {
         loaders: [
            {
                //tell webpack to use babel-loader for all *.jsx and js files
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
	plugins: [       
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),	       
    ]
};