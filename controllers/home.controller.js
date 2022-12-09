const db = require('../model')

const Products = db.products
const ProductImages = db.product_images

const { Op } = require("sequelize");

class HomeController {
  async index(req, res) {

    let options = { where: [], include: ProductImages, order: []}
    if(req.query.price != undefined) { 
      options.order.push([ "price", req.query.price])
    }
    if(req.query.created_at != undefined) { 
      options.order.push([ "createdAt", req.query.created_at])
    }

    if(req.query.q != undefined) {
      options.where = {
        name: { [Op.like]: `%${req.query.q}%` }
      }
    }
  
    const products = await Products.findAll(options)
    res.render("home/index", { layout: './layouts/customers', products: products });
  }
}

module.exports = new HomeController