require('dotenv').config();
const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = require(`./webpack/${nodeEnv}.js`);
