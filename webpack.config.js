const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'], // Указываем расширения, которые будет искать Webpack
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.module\.css$/, // Для CSS модулей
        use: [
          'style-loader', // Вставляем стили в DOM
          {
            loader: 'css-loader',
            options: {
              modules: true, // Включаем CSS модули
            },
          },
        ],
      },
      {
        test: /\.css$/, // Для обычных CSS файлов (не модули)
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.scss$/, // Для SCSS модулей
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                namedExport: true, 
                localIdentName: '[local]__[hash:base64:5]'
              },
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/, // Для обычных SCSS файлов
        exclude: /\.module\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000,
  },
};
