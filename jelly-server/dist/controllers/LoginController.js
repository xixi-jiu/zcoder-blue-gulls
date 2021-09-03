"use strict";

var _Controller = _interopRequireDefault(require("./Controller"));

var _index = require("../utils/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LoginController extends _Controller.default {
  constructor() {
    super();
  }

  actionLogin(ctx, next) {}

}

module.exports = LoginController;