"use strict";

var _httpRequest = _interopRequireDefault(require("./httpRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * http axios 请求封装
 */
module.exports = {
  http: _httpRequest.default
};