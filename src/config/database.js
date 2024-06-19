const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('studyproject', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
