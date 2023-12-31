const Sequelize = require('sequelize');
const config = require('./config')

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect:  'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})

module.exports = sequelize;

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(error => {
    console.error('Unable to connect to the database: ', error);
});