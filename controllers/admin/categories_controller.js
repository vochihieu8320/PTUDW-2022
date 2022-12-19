class CategoriesController {
  async index(req, res) {
    res.render("admin/categories/index", { layout: "./layouts/side_bar", path: "/admin/categories/new",
      path_detail: false, message: "Welcome You!!" })
  }

  async new(req, res) {
    res.render("admin/categories/new", { layout: "./layouts/side_bar" })
  }
}

module.exports = new CategoriesController