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
    console.log("body", req.body)

    console.log("cookie", req.cookies)

    const user_body = {
      phone: req.body.phone,
      user_id: req.cookies.user_id
    }

    try {
      const user = await User.create(user_body);

      const user_order_body = {
        user_id: 100,
        status: 1
      }

      const order = await Order.create(user_order_body);

      const order_address_body = {
        full_address: req.body.address,
        city: req.body.city,
        district: req.body.district,
        ward: req.body.ward
      }

      const order_address = await OrderAddress.create(order_address_body);

      const order_detail_body = {
        order_id: order.id,
        product_id: req.body.product_id,
        address_id: order_address.id,
        price: req.body.price,
        size: req.body.size,
        amount: req.body.amount,
        color: req.body.color,
      }
      await OrderDetails.create(order_detail_body)

    } catch (error) {
      console.log(error)
    }
    res.render("checkout/index", { layout: "./layouts/customers" })
  }
}

module.exports = new CheckoutController