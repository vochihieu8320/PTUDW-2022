class ProductsController {
  async index(req, res) {
    res.render("admin/products/index", { layout: "./layouts/side_bar",  path: "/admin/products/new", path_detail: false  })
  }

  async new(req, res) {
    res.render("admin/products/new", { layout: "./layouts/side_bar" })
  }
}

module.exports = new ProductsController