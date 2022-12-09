const dbConfig = require("../resource/db.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,  dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.orders = require("./orders.js")(sequelize, Sequelize);
db.products = require("./products.js")(sequelize, Sequelize);
db.product_images = require("./product_images.js")(sequelize, Sequelize);

db.products.hasMany(db.product_images, { foreignKey: 'product_id'})

module.exports = db;