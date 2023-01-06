const db = require('../model')

const Products = db.products
const ProductImages = db.product_images
const Categories = db.categories
const Order = db.orders

const User = db.users
const OrderDetails = db.order_details


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

    let options = { where: [], include: [ProductImages, Categories], order: [], offset: offset, limit: limit }

    if(req.query.price != undefined && req.query.price) {
      options.order.push([ "price", req.query.price])
    }
    if(req.query.created_at != undefined && req.query.created_at) {
      options.order.push([ "createdAt", req.query.created_at])
    }

    if(req.query.q != undefined && req.query.q) {
      options.where = {
        name: { [Op.like]: `%${req.query.q}%` },
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

  async categories(req, res) {
    let offset = 1

    if (req.query.offset !== undefined && +offset.toString() == offset && +offset > 0) {
      offset = (req.query.offset - 1) * 5
    }

    try {
      let categories = await Categories.findAll({ where: { parent_category_id: null }, offset: offset ,limit: 5 });
      let child_categories = await Categories.findAll({ where: { parent_category_id:
        { [Op.ne]: null } }})

      res.json({ categories: categories, child_categories: child_categories })
    }
    catch (error) {
      console.log(error)
    }
  }

  async addToCart(req, res) {
    try {
      const user_body = {
        user_id: req.cookies.user_id
      }

      const product = await Products.findByPk(req.body.product_id)

      const user = await User.findOne({where: {user_id: req.cookies.user_id}});

      const user_order_body = {
        user_id: user.id,
        status: 1
      }

      const order = await Order.create(user_order_body);

      const order_detail_body = {
        order_id: order.id,
        product_id: req.body.product_id,
        price: product.price,
        size: req.body.size,
        amount: req.body.amount,
        color: req.body.color,
      }
      await OrderDetails.create(order_detail_body)

      res.json({success: true})
    } catch (error) {
    console.log(error)
      res.json({success: true})

    }
  }

  async orders(req, res) {
    try {
      let offset = 1

     if (req.query.offset !== undefined && +offset.toString() == offset && +offset > 0) {
        offset = (req.query.offset - 1) * 5
      }

      let orders = await Order.findAll({ offset: offset ,limit: 5 });

      res.json({ data: orders })
    } catch (error) {
      res.json({error: errors})
    }
  }
}

module.exports = new AjaxController