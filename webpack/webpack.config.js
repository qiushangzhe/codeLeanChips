const config = {
  entry: {
    app:'./src/main.js',
    page : './src/main2.js'
  },
  output:{
    filename: '[name].js',
    path: __dirname + '/dist'
  }
};

module.exports = config;
