require('dotenv').config;
const knex = require('knex');
const config = require('../knexfile');
const env = process.env.node_env ? 'production' : 'development';

module.exports = knex(config['production']);
