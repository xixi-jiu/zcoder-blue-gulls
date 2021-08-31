"use strict";

var _Controller = _interopRequireDefault(require("./Controller"));

var _index = require("../utils/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HomeController extends _Controller.default {
  constructor() {
    super();
  } // 1. 获取最新课程信息


  async actionNewCourse(ctx, next) {
    let res = await _index.http.get("/index/newc");

    if (res.data.code == 0) {
      ctx.body = {
        code: 200,
        msg: "请求成功了",
        data: res.data.data
      };
    } else {
      ctx.body = {
        code: 500,
        msg: "服务器错误了",
        data: []
      };
    }
  } // 2. 获取导航栏信息


  async actionNav(ctx, next) {
    let res = await _index.http.get("/index/nav");

    if (res.data.code == 0) {
      ctx.body = {
        code: 200,
        msg: "请求成功",
        data: res.data.data
      };
    } else {
      ctx.body = {
        code: 500,
        msg: "服务器错误",
        data: []
      };
    }
  }

}

module.exports = HomeController;