const { start, stop, spawn } = require('nact');
const system = start();

const statefulGreeter = spawn(
    system, 
    (state = {}, msg, ctx) => {
      const hasPreviouslyGreetedMe = state[msg.name] !== undefined;
      if(hasPreviouslyGreetedMe) {
        console.log(`Hello again ${msg.name}.`);  
        return state;
      } else {
        console.log(
          `Good to meet you, ${msg.name}.\nI am the ${ctx.name} service!`
        );
        return { ...state, [msg.name]: true };
      }
    },
    'stateful-greeter'
  );

  module.exports = statefulGreeter;