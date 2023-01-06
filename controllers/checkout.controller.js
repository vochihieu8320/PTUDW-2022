const { renameSync } = require('fs');
const db = require('../model');

const User = db.users
const Order = db.orders
const OrderAddress = db.order_addresses;
const OrderDetails = db.order_details

class CheckoutController {
  async index(req, res) {
    res.render("checkout/index", { layout: "./layouts/customers" })
  }

  async create(req, res) {
    const user_body = {
      phone: req.body.phone,
      user_id: req.cookies.user_id
    }

    try {
      const user = await User.create(user_body);

      const user_order_body = {
        user_id: user.id,
        status: 1
      }

      const order = await Order.create(user_order_body);
      const order_address_body = {
        full_address: req.body.address,
        city: req.body.city,
        district: req.body.discict,
        ward: req.body.ward
      }

      const order_address = await OrderAddress.create(order_address_body);

      const order_detail_body = {
        order_id: order.id,
        product_id: req.body.product_id,
        address_id: order_address.id,
        payment_id: req.body.payment,
        price: req.body.price,
        size: req.body.size,
        amount: req.body.amount,
        color: req.body.color,
      }
      await OrderDetails.create(order_detail_body)

      res.render("checkout/index", { layout: "./layouts/customers", message: "Order success" })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new CheckoutController