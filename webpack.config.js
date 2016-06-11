module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/webpacked_code'
	},
	module: {
		loaders: [{
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: "babel",
			query: {
				presets: ['react', 'es2015', 'stage-1']
			}
		}]
	}
}