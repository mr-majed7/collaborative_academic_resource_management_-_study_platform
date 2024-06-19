const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Folder = require('./folder');

const LectureNotes = sequelize.define('LectureNotes', {
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
  FileLink: {
    type: DataTypes.STRING(255),
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
  tableName: 'LectureNotes',
  timestamps: false
});

Folder.hasMany(LectureNotes, { foreignKey: 'Folder_id' });
LectureNotes.belongsTo(Folder, { foreignKey: 'Folder_id' });

module.exports = LectureNotes;
