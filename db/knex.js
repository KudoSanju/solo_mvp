

const config = require('../knexfile');
const knex = require('knex')(config);

module.exports = knex(process.env.PORT? config.production : config.development);
