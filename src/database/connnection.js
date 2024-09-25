const { PG_HOST, PG_PORT, PG_USERNAME, PG_PASSWORD, PG_DATABASE } = require('../configs/configs')
const { Pool } = require('pg')

module.exports = new Pool({
  host: PG_HOST,
  port: PG_PORT,
  user: PG_USERNAME,
  password: PG_PASSWORD,
  database: PG_DATABASE,
});

