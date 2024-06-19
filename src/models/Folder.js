module.exports = (sequelize, DataTypes) => {
  const Folder = sequelize.define('Folder', {
    folder_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
      references: {
        model: 'Users',
        key: 'Username',
      },
    },
    Title: {
      type: DataTypes.STRING(100),
    },
    Privacy: {
      type: DataTypes.STRING(20),
    },
    Date: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'Folders',
    timestamps: false,
  });

  Folder.associate = (models) => {
    Folder.hasMany(models.Book, { foreignKey: 'Folder_id' });
    Folder.hasMany(models.LectureNotes, { foreignKey: 'Folder_id' });
    Folder.hasMany(models.LectureVideo, { foreignKey: 'Folder_id' });
    Folder.hasMany(models.PersonalNotes, { foreignKey: 'Folder_id' });
    Folder.hasMany(models.Slide, { foreignKey: 'Folder_id' });
    Folder.belongsTo(models.User, { foreignKey: 'username' });
  };

  return Folder;
};
