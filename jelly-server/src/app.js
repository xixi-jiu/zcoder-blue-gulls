import Koa from "koa";

import config from "./config";
import initController from "./controllers/index";
import ErrorHandler from "./middlewares/ErrorHandler";

const app = new Koa();

ErrorHandler.error(app);
initController(app);
app.listen(config.port, () => {
  console.log(`server is running at http://localhost:${config.port}`);
});
