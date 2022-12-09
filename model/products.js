const ProductImages = require('./product_images.js')

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("products", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
      },
        updatedAt: {
          field: 'updated_at',
          type: DataTypes.DATE,
      },
    });
  
    return Products;
  };