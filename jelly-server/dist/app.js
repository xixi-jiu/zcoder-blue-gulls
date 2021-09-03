"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _config = _interopRequireDefault(require("./config"));

var _index = _interopRequireDefault(require("./controllers/index"));

var _ErrorHandler = _interopRequireDefault(require("./middlewares/ErrorHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default();

_ErrorHandler.default.error(app);

(0, _index.default)(app);
app.listen(_config.default.port, () => {
  console.log(`server is running at http://localhost:${_config.default.port}`);
});