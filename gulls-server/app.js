const Koa = require("koa");

const config = require("./config");
const initController = require("./controllers/index");
const ErrorHandler = require("./middleware/ErrorHandler");

const app = new Koa();

ErrorHandler.error(app);
initController(app);
app.listen(config.port, () => {
  console.log(`server is running at http://localhost:${config.port}`);
});
