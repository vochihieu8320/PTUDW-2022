class AdminLoginController {
  async login(req, res) {
    res.render("admin/login", { layout: "./layouts/admin" })
  }

  async register(req, res) {
    res.render("admin/register", { layout: "./layouts/admin" })
  }
}

module.exports = new AdminLoginController