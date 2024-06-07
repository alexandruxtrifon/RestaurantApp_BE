const Koa = require('koa');
const app = new Koa();

const KoaBodyParser = require('koa-bodyparser');
app.use(KoaBodyParser());

app.use(require('./restaurantRouter'));

app.listen(8080);
console.log('Koa app started and is listening on port 8080');