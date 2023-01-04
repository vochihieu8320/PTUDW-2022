module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define("order_details", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    address_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
    size: {
      type: DataTypes.STRING,
    },
    color: DataTypes.STRING,
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
    },
  });

    return OrderDetail;
  };
