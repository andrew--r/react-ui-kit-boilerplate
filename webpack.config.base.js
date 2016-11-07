import path from 'path';
import webpack from 'webpack';
import glob from 'glob';


console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

const SOURCE = './source';
const COMPONENTS = `${SOURCE}/components`;
const OUT = './lib';


const componentsList = glob.sync(`${COMPONENTS}/*`).map(path => path.slice(COMPONENTS.length + 1));
const componentsEntries = componentsList.reduce((acc, componentName) => {
	acc[componentName] = [`${COMPONENTS}/${componentName}/index.jsx`];
	return acc;
}, {});
const entries = Object.assign({}, componentsEntries, {
	index: [`${SOURCE}/index.js`],
});


module.exports = {
	entry: entries,
	output: {
		path: path.resolve(__dirname, OUT),
		filename: '[name].js',
		libraryTarget: 'umd',
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	externals: [
		{
			react: {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react',
			},
		},
	],
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				exclude: /(node_modules)/,
				loader: 'babel',
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		}),
	],
};
