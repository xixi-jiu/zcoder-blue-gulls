'use strict';

// 公共配置
let config = {};

// 生产环境
{
  const prodConfig = {
    port: 8085
  };
  config = {
    ...config,
    ...prodConfig
  };
}

module.exports = config;
