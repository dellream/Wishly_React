require('dotenv').config();
const nodeEnv = process.env.NODE_ENV || 'development';
console.log(`Среда развертывания: ${nodeEnv}`);

module.exports = require(`./webpack/${nodeEnv}.js`);
