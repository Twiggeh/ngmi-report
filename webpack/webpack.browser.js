const pkg = require('./package.json');
const path = require('path');
const webpack = require('webpack');

const projectName = pkg.name.replace('@wireapp/', '');
const camelCasedRepositoryName = 'wireWebApiClient';
const apiClientPath = path.resolve(__dirname, 'src');
console.log('apiClientPath', apiClientPath);

module.exports = {
	devServer: {
		hot: true,
		open: true,
		overlay: true,
		stats: {
			chunks: false,
		},
	},
	devtool: 'source-map',
	experiments: {
		outputModule: true,
	},
	entry: {
		[projectName]: `${__dirname}/demo/demo.js`,
	},
	externals: {
		'fs-extra': '{}',
	},
	mode: 'production',
	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				test: /\.[tj]s$/,
			},
		],
	},
	output: {
		filename: `[name].bundle.js`,
		library: `${camelCasedRepositoryName}`,
		path: `${__dirname}/dist`,
	},
	resolve: {
		extensions: ['.js', '.ts', '.jsx'],
	},
};
