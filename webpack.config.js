var webpack = require('webpack');
var path = require('path');

module.exports={
  devtool:'inline-source-map',
  entry:{
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    
  }
}
