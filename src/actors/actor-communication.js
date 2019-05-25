const { start, stop, dispatch, spawnStateless } = require('nact');
const system = start();

const delay = time => new Promise(res => setTimeout(res, time));

const ping = spawnStateless(
    system,
    async (msg, ctx) => {
        console.log('Ping said: %s', msg);
        // console.log('ping: ', ctx);
        await delay(800);
        dispatch(ctx.sender, ctx.name, ctx.self);
    },
    'ping'
);

const pong = spawnStateless(
    system,
    async (msg, ctx) => {
        console.log('Pong said: %s', msg);
        // console.log('pong: ', ctx);
        dispatch(ctx.sender, ctx.name, ctx.self);
    },
    'pong'
);

module.exports = { ping, pong };