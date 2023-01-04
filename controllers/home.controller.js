const db = require('../model')

const Products = db.products
const ProductImages = db.product_images

const { Op } = require("sequelize");

const uuid = require('uuid').v4;

const bcrypt = require('bcrypt');

class HomeController {
  async index(req, res) {
    let limit = 5
    let offset = 1

    const genrate_uuid = await  bcrypt.hash(uuid(), 10);

    let options = { include: ProductImages, offset: offset, limit: limit }

    try {
      const products = await Products.findAndCountAll(options)

      let total = 0;

      if(products.count % 5 == 0) {
        total = products.count / 5
      }
      else {
        total = Math.round(products.count / 5)
      }

      res.cookie("user_id", genrate_uuid);

      res.render("home/index", { layout: './layouts/customers', products: products.rows,
                                                                total: total,
                                                                });
    } catch (error) {
      res.json({error: error.message})
    }
  }
}

module.exports = new HomeController