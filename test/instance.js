require('dotenv').config({
    path: require('path').join(__dirname, '.env')
});
const { Redis } = require('ioredis');
const { tair } = require('../lib');
const redis = tair(new Redis({
    host: process.env.TAIR_TEST_HOST,
    port: process.env.TAIR_TEST_PORT,
    username: process.env.TAIR_TEST_USERNAME,
    password: process.env.TAIR_TEST_PASSWORD,
    db: process.env.TAIR_TEST_DB,
}));

module.exports = {
    redis
}
