module.exports = (sequelize, DataTypes) => {
  const PersonalNotes = sequelize.define('PersonalNotes', {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Folder_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Folders',
        key: 'folder_id',
      },
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
    },
  }, {
    tableName: 'PersonalNotes',
    timestamps: false,
  });

  PersonalNotes.associate = (models) => {
    PersonalNotes.belongsTo(models.Folder, { foreignKey: 'Folder_id' });
  };

  return PersonalNotes;
};
