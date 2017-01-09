module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      App: 'app/components/App.js',
      DangNhap: 'app/components/DangNhap.js',
      GiaoDich: 'app/components/GiaoDich.js',
      Main: 'app/components/Main.js',
      Nav: 'app/components/Nav.js',
      TrangChu: 'app/components/TrangChu.js'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
