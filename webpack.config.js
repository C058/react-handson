module.exports = {
    mode: 'development',
    entry: './src/app.jsx',
    output: {
      filename: 'bundle.js',
      path: `${__dirname}/dist`
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/react'
              ]
            }
          }
        }
      ]
    },
    devServer: {
      contentBase: 'dist',
      open: true
    }
  };