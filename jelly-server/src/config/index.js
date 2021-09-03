// 公共配置
let config = {};

// 开发环境
if (process.env.NODE_ENV === 'development') {
  const devConfig = {
    port: 3000
  }
  config = {
    ...config,
    ...devConfig
  }
}

// 生产环境
if (process.env.NODE_ENV === 'production') {
  const prodConfig = {
    port: 8085
  }
  config = {
    ...config,
    ...prodConfig
  }
}

module.exports = config;