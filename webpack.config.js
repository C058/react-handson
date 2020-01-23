// https://qiita.com/tsuuuuu_san/items/582854a4043d8a1db1c9
module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',
    // エントリーポイントの設定　最初に読み込まれるファイル
    entry: './src/app.jsx',
    // モジュールバンドル後のファイル出力の設定
    output: {
      filename: 'bundle.js',
      path: `${__dirname}/dist`
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                  // プリセットを指定することで、ES2019 を ES5 に変換
                '@babel/preset-env',
                 // React の JSX を解釈
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