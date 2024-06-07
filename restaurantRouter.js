const Router = require('koa-router');
const restaurantHandler = require('./restaurantHandler');

var restaurantRouter = new Router();

restaurantRouter.get('/helloworld', async function (ctx, next) {
    await restaurantHandler.getHelloWorld(ctx, next);
});

module.exports = restaurantRouter.routes();