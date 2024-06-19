const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Folder = require('./folder');

const Slide = sequelize.define('Slide', {
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
  tableName: 'Slide',
  timestamps: false
});

Folder.hasMany(Slide, { foreignKey: 'Folder_id' });
Slide.belongsTo(Folder, { foreignKey: 'Folder_id' });

module.exports = Slide;
