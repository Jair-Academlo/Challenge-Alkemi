const { Sequelize, DataTypes } = require('sequelize');

//create Database
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'disney',
  logging: false,
});

module.exports = { db, DataTypes };
