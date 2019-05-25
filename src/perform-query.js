const contactsService = require('./actors/contacts-actor');

const performQuery = async (msg, res) => {
    console.log(msg);
    try {
      const result = await query(contactsService, msg, 500); // Set a 250ms timeout
      switch(result.type) {
        case SUCCESS: res.json(result.payload); break;
        case NOT_FOUND: res.sendStatus(404); break;
        default:
          // This shouldn't ever happen, but means that something is really wrong in the application
          console.error(JSON.stringify(result));
          res.sendStatus(500);
          break;
      }
    } catch (e) {
      // 504 is the gateway timeout response code. Nact only throws on queries to a valid actor reference if the timeout 
      // expires.
      res.sendStatus(504);
    }
  };

  module.exports = performQuery;