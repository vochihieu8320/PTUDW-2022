class ProductsController {
    async index(req, res) {
      res.render("products/index", { layout: './layouts/customers'})
    }

    async show(req, res) {
      res.render("products/show", { layout: './layouts/customers'})
    }
  }

module.exports = new ProductsController