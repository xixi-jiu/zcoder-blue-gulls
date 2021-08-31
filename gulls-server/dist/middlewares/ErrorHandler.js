"use strict";

class ErrorHandler {
  static error(app) {
    app.use(async (ctx, next) => {
      try {
        await next();

        if (ctx.status === 404) {
          ctx.body = "404页面";
        }
      } catch {
        ctx.body = "500 请求，正在处理";
      }
    });
  }

}

module.exports = ErrorHandler;