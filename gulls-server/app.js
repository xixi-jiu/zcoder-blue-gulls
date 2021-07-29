const Koa = require('koa');

const config = require('./config');
const initController = require('./controllers/index');

const app = new Koa();

initController(app);
app.listen(config.port, () => {
  console.log(`server is running at http://localhost:${config.port}`);
})