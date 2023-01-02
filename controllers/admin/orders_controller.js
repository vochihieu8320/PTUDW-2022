const db = require('../../model')
const Orders = db.orders

class OrdersController {
  async index(req, res) {
    // res.render("admin/orders/index", { layout: "./layouts/side_bar", path: false, path_detail: "/admin/orders/1" })
    try {
      let orders= await Orders.findAll()
      res.json({orders: orders})
    } catch (error) {
      res.json({error: error})
    }
  }

  async show(req, res) {
    res.render("admin/orders/show", { layout: "./layouts/side_bar" })

  }
}

module.exports = new OrdersController