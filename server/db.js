// configure connection
const Pool = require('pg').Pool;

const pool = new Pool({
  user: "talugriszaewky",
  password: "79118a9f18986c1a706522c356cc41db8ae802432d41f4a7f691766fada26348",
  host: "localhost",
  port: 5432,
  database: "dgtue9kr9mtm6"
});

module.exports = pool;