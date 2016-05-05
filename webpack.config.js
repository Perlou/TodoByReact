var path = require('path');

module.exports = {
	entry: {
		index: './app/js/index.js'
	},
	output: {
		path: path.join(__dirname,'dist'),
		publicPath: '/dist/',
		filename: 'index.bundle.js'
	},
	module: {
		loaders: [
			{
				test: '/\.css$/',
				loaders: ['style','css'],
				exclude: '/node_modules/'
			},
			{
				test: /\.js[x]?$/,
				loader:'babel?presets[]=es2015&presets[]=react',
				exclude: '/node_modules/'				
			},
			{
				test: /\.(jpg|png)$/,
				loader:'url-loader',
				exclude: '/node_modules/'
			}
		]
	}

}