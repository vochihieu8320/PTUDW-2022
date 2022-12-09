module.exports = (sequelize, DataTypes) => {
    const ProductImages = sequelize.define("product_images", {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        image: DataTypes.STRING,
        createdAt: {
          field: 'created_at',
          type: DataTypes.DATE,
      },
        updatedAt: {
          field: 'updated_at',
          type: DataTypes.DATE,
      },
    });
  
    return ProductImages;
  };