module.exports = {
  entry: {
    app: 'src/app/index.ts',
    vendor: 'src/vendor.browser.ts'
  },
  output: {
    filename: '[name].js'
  },
  loaders: [
    {
      test: /\.ts$/
      loaders: 'ts'
    },
    {
      test: /\.css$/
      loaders: 'style!css'
    }
  ]
};
