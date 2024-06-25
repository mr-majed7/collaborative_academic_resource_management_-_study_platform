const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Folder = sequelize.define('Folder', {
  folder_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(50),
    references: {
      model: User,
      key: 'Username'
    }
  },
  Title: {
    type: DataTypes.STRING(100),
  },
  Privacy: {
    type: DataTypes.STRING(20),
  },
  Date: {
    type: DataTypes.DATE,
  }
}, {
  tableName: 'FOLDER',
  timestamps: false
});

User.hasMany(Folder, { foreignKey: 'username' });
Folder.belongsTo(User, { foreignKey: 'username' });

module.exports = Folder;
