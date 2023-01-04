module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    sex: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    user_id: DataTypes.STRING,
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
    },
  });

  return User;
};

