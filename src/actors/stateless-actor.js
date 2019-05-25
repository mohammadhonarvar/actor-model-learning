const { start, stop, spawnStateless } = require('nact');
const system = start();

const greeter = spawnStateless(
    system, // parent
    (msg, ctx) => console.log(ctx), // function
    'greeter' // name
  );

  module.exports = greeter;