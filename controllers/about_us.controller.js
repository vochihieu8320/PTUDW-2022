class AboutUserController {
  async index(req, res) {
    res.render("about_us/index", { layout: './layouts/customers'})
  }
}

module.exports = new AboutUserController