module.exports = (sequelize, DataTypes) => {
  const UserProfiles = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    sex: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
    },
  });

    return UserProfiles;
  };