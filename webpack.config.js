const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: './src/scripts/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: 3000,
		hot: true,
		open: true,
	},
	plugins: [
		// Главная страница
		new HtmlWebpackPlugin({
			template: './src/pages/index.html',
			filename: 'index.html',
			inject: 'body',
		}),

		// Другие страницы
		new HtmlWebpackPlugin({
			template: './src/pages/question.html',
			filename: 'question.html',
			inject: 'body',
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/services.html',
			filename: 'services.html',
			inject: 'body',
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/blog.html',
			filename: 'blog.html',
			inject: 'body',
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/contacts.html',
			filename: 'contacts.html',
			inject: 'body',
		}),

		// Копируем статические файлы
		new CopyPlugin({
			patterns: [
				{ from: 'src/assets', to: 'assets', noErrorOnMissing: true },
				{
					from: 'src/assets/images',
					to: 'assets/images',
					noErrorOnMissing: true, // Не падать, если папки нет
				},
				{
					from: 'src/assets/fonts',
					to: 'assets/fonts',
					noErrorOnMissing: true,
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
}
