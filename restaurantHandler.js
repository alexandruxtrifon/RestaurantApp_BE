var helloWorldHandler = {
    getHelloWorld: async function (ctx, next) {
        ctx.body = {response: 'Hello World'};
        ctx.status = 200;
        await next();
    }
};
module.exports = helloWorldHandler;