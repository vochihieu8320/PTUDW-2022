module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define("orders", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
    },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
    },
  });

  return Orders;
};