class OrdersController {
  async index(req, res) {
    res.render("admin/orders/index", { layout: "./layouts/side_bar", path: false, path_detail: "/admin/orders/1" })
  }

  async show(req, res) {
    res.render("admin/orders/show", { layout: "./layouts/side_bar" })

  }
}

export default new OrdersController