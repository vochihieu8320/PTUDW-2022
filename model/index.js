const dbConfig = require("../resource/db.js");

const Sequelize = require("sequelize");
const { dlp_v2 } = require("googleapis");
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
db.user_users = require("./user_users.js")(sequelize, Sequelize);
db.user_profiles = require("./user_profiles")(sequelize, Sequelize);
db.categories = require("./categories.js")(sequelize, Sequelize);
db.users = require("./users.js")(sequelize, Sequelize);
db.order_addresses = require("./order_addresses.js")(sequelize, Sequelize);
db.order_details = require("./order_details.js")(sequelize, Sequelize);


db.user_profiles.belongsTo(db.user_users, { foreignKey: "user_id" })
db.user_users.hasOne(db.user_profiles, { foreignKey: "user_id" })
db.products.hasMany(db.product_images, { foreignKey: 'product_id'})
db.products.belongsTo(db.categories, { foreignKey: 'category_id' })

db.categories.belongsTo(db.categories, { foreignKey: "parent_category_id" })

db.order_details.belongsTo(db.orders, { foreignKey: "order_id" })

db.order_addresses.belongsTo(db.order_details, { foreignKey: "address_id" })

module.exports = db;