module.exports = {
  entry: './scripts/app.js',
  module: {
    loaders : [
        {
            test: /\.less$/,
            loader: "style!css!less"
        }
    ]  
  },
  output: {
    filename: 'bundle.js'       
  }
};