const Controller = require("./Controller");
const { http } = require("../utils/index");
class HomeController extends Controller {
  constructor() {
    super();
  }
  // 1. 获取最新课程信息
  async actionNewCourse(ctx, next) {
    let res = await http.get("/index/newc");
    if (res.data.code == 0) {
      ctx.body = {
        code: 200,
        msg: "请求成功",
        data: res.data.data,
      };
    } else {
      ctx.body = {
        code: 500,
        msg: "服务器错误",
        data: [],
      };
    }
  }
  // 2. 获取导航栏信息
  async actionNav(ctx, next) {
    let res = await http.get("/index/nav");
    if (res.data.code == 0) {
      ctx.body = {
        code: 200,
        msg: "请求成功",
        data: res.data.data,
      };
    } else {
      ctx.body = {
        code: 500,
        msg: "服务器错误",
        data: [],
      };
    }
  }
}

module.exports = HomeController;
