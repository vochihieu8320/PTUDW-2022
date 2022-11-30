class HomeController {
  async index(req, res) {
    res.render("home/index", { layout: './layouts/customers'})
  }
}

module.exports = new HomeController