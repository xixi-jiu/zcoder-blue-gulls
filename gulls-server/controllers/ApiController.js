const Controller = require('./Controller');
const {
  http
} = require('./../utils/index');

class ApiController extends Controller {
  constructor() {
    super();
  }
  actionLogin(ctx, next) {
    http.post("/member/login", {
      
    });
  }
}

module.exports = ApiController;