const Router = require("@koa/router");
const router = new Router();

import HomeController from "./HomeController";
const homeController = new HomeController();

function initController(app) {
  // 首页相关
  // 1. 获取最新课程信息
  router.get("/api/home/newCourse", homeController.actionNewCourse);
  // 2. 获取导航栏信息
  router.get("/api/home/nav", homeController.actionNav);
  app.use(router.routes()).use(router.allowedMethods()); // 丰富 response 头
}
module.exports = initController;
