const Controller = require('./Controller');

class IndexController extends Controller {
  constructor() {
    super();
  }
  actionIndex(ctx, next) {
    // 匹配到首页路由
    ctx.body = "666";
  }
}
module.exports = IndexController;