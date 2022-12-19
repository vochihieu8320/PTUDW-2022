module.exports = (sequelize, DataTypes) => {
  const UserUsers = sequelize.define("user_users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notNull: false,
        isEmail: true
      }
    },
    encrypt_password: DataTypes.STRING,
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
    },
  });

  return UserUsers;
};