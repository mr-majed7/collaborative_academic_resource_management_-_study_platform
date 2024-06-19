module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
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
    },
  }, {
    tableName: 'Books',
    timestamps: false,
  });

  Book.associate = (models) => {
    Book.belongsTo(models.Folder, { foreignKey: 'Folder_id' });
  };

  return Book;
};
