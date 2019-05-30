const mysqlConn = require('./src/mysql/mysql');
const { graphql, buildSchema } = require('graphql');
var util = require('util');

mysqlConn.connect();

async function x() {
  try {
    const result = await mysqlConn.query('SELECT * FROM kia_users');
    return result;
  } catch(err) {
    throw new Error(err)
  }
}

console.log(x().then(res => res));


mysqlConn.end();