const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  Username: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  _id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true
  },
  Name: {
    type: DataTypes.STRING(100),
  },
  Email: {
    type: DataTypes.STRING(100),
    unique: true
  },
  Password: {
    type: DataTypes.STRING(255),
  },
  Institution: {
    type: DataTypes.STRING(100),
  }
}, {
  tableName: 'User',
  timestamps: false
});

module.exports = User;
