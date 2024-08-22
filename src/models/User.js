module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      Username: {
        type: DataTypes.STRING(50),
        primaryKey: true,
      },
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
      },
      Name: {
        type: DataTypes.STRING(100),
      },
      Email: {
        type: DataTypes.STRING(100),
        unique: true,
      },
      Password: {
        type: DataTypes.STRING(255),
      },
      Institution: {
        type: DataTypes.STRING(100),
      },
    },
    {
      tableName: "Users",
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Folder, { foreignKey: "username" });
    User.hasMany(models.Bookmark, { foreignKey: "User_id" });
    User.hasMany(models.Bookmark, { foreignKey: "Owner_id" });
  };

  return User;
};
