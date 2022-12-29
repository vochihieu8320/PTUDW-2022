const db = require('../model')

const Products = db.products
const ProductImages = db.product_images

const { Op } = require("sequelize");

class AjaxController {
  async products(req, res) {
    let limit = 5
    let offset = 1
    let current_page = 1


    if (req.query.offset !== undefined && +offset.toString() == offset && +offset > 0) {
      offset = (req.query.offset - 1) * limit
      current_page = +req.query.offset
    }

    let options = { where: [], include: ProductImages, order: [], offset: offset, limit: limit }


    if(req.query.price != undefined && req.query.price) {
      options.order.push([ "price", req.query.price])
    }
    if(req.query.created_at != undefined && req.query.created_at) {
      options.order.push([ "createdAt", req.query.created_at])
    }

    if(req.query.q != undefined && req.query.q) {
      options.where = {
        name: { [Op.like]: `%${req.query.q}%` }
      }
    }

    try {
      const products = await Products.findAndCountAll(options)

      let total = 0;

      if(products.count % 5 == 0) {
        total = products.count / 5
      }
      else {
        total = (products.count / 5) + 1
      }

      res.json({data: products.rows, total: total})

    } catch (error) {
      res.json({error: error.message})
    }
  }
}

module.exports = new AjaxController