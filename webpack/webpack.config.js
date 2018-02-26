const path =require('path');
const webpack =require('webpack');

module.exports = {
  entry:{
    'entry':'./entry.js'
  },
  output:{
    filename:'bundle.js'
  },
  devServer:{
    inline: true,
    port: 7777,
    contentBase: __dirname
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      compressor :{
        warnings:false
      }
    })
  ]
}
