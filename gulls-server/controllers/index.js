const Router = require('@koa/router');
const router = new Router();

const IndexController = require('./IndexController');
const indexController = new IndexController();

const ApiController = require('./ApiController');
const apiController = new ApiController();

function initController(app) {
  router.get('/', indexController.actionIndex);
  router.get('/api/login', apiController.actionLogin);
  app
    .use(router.routes())
    .use(router.allowedMethods()); // 丰富 response 头
}
module.exports = initController;