module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define(
    "Bookmark",
    {
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      User_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "_id",
        },
      },
      Owner_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "_id",
        },
      },
      Material_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Material_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Bookmarks",
      timestamps: false,
    }
  );
  Bookmark.associate = (models) => {
    Bookmark.belongsTo(models.User, { foreignKey: "User_id", as: "user" });
    Bookmark.belongsTo(models.User, { foreignKey: "Owner_id", as: "owner" });
  };
  return Bookmark;
};
