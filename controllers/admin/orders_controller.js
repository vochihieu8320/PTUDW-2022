const db = require('../../model')
const Orders = db.orders
const OrderDetails = db.order_details
class OrdersController {
  async index(req, res) {
    try {
      const orders = await Orders.findAndCountAll({ limit: 5 });

      let total = 0;

      if(orders.count % 5 == 0) {
        total = orders.count / 5
      }
      else {
        total = Math.round(orders.count / 5)
      }

      res.render("admin/orders/index",
        {
          layout: "./layouts/side_bar",
          orders: orders.rows,
          total: total
        })
    } catch (error) {
      res.json({error: error})
    }
  }

  async show(req, res) {
    res.render("admin/orders/show", { layout: "./layouts/side_bar" })
  }

  async create(req, res) {
  }
}

module.exports = new OrdersController