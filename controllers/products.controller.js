const db = require('../model')
const Products = db.products
const ProductImages = db.product_images

const { Op } = require("sequelize");

class ProductsController {
    async index(req, res) {
      // res.render("products/index", { layout: './layouts/customers'})
      try {
        const products = await Products.findAll({ include: ProductImages});
        res.json({products: products})
      } catch (error) {
        
      }
    }

    async show(req, res) {
      const product = await Products.findByPk(req.params.id, {include: ProductImages});

      const related_products = await Products.findAll({ where: { category_id: product.category_id,
                                                                  id: { [Op.not]: product.id } },
                                                                  include: ProductImages,
                                                                  limit: 5 })
                                                              
      // res.json({product: product, related_products: related_products})

      res.render("products/show", { layout: './layouts/customers', product: product, related_products: related_products })
    }
  }

module.exports = new ProductsController