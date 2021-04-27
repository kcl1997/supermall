//会和项目公共的配置进行合并
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        // '@': 'src' 内部已经配置了这个
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',

      }
    }
  }

}