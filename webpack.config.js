module.exports = {
	context: __dirname,
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'index.dist.js'
	},
	resolve: {
		root: [__dirname],
		modulesDirectories: ['../node_modules']
	}
};