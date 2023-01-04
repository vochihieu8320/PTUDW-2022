module.exports = (sequelize, DataTypes) => {
  const OrderAddress = sequelize.define("order_addresses", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    full_address: {
      type: DataTypes.STRING,
    },
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    ward: DataTypes.INTEGER,
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
    },
  });

    return OrderAddress;
  };
