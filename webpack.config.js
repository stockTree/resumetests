const path = require('path');
module.exports = {
    // JavaScript主文件（作为依赖关系解析的入口 ）
    entry: './src/js/app.js',
    // 最终输出文件的相关设置
    output: {
        filename: 'bundle.js',
      // 保存输出文件的目录（__dirname变量的值是当前所在目录）
      path:path.resolve(__dirname,'dist')
      // 输出文件的文件名
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          },
          {
            test: /\.scss$/,
            use: [{ loader:"style-loader"
                }
                ,{loader: "css-loader", options: { importLoaders: 1 }
              }, 
              { loader:"postcss-loader"
            },

               { loader:"sass-loader" // compiles Sass to CSS, using Node Sass by default
          }
              ]
        }
        ]
      }
  }; 
  
  
 