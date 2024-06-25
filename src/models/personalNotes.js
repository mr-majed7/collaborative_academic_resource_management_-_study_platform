const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Folder = require('./folder');

const PersonalNotes = sequelize.define('PersonalNotes', {
  _id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Folder_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Folder,
      key: 'folder_id'
    }
  },
  Title: {
    type: DataTypes.STRING(100),
  },
  Text: {
    type: DataTypes.TEXT,
  },
  Date: {
    type: DataTypes.DATE,
  },
  Progress: {
    type: DataTypes.INTEGER,
  },
  Privacy: {
    type: DataTypes.STRING(20),
  }
}, {
  tableName: 'PersonalNotes',
  timestamps: false
});

Folder.hasMany(PersonalNotes, { foreignKey: 'Folder_id' });
PersonalNotes.belongsTo(Folder, { foreignKey: 'Folder_id' });

module.exports = PersonalNotes;
