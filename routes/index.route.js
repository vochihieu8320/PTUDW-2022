const HomeRouter = require("./home.route")
const ProductsRouter = require("./products.route")
const AboutUsRouter = require("./about_us.route")
const CheckoutRouter = require("./checkout.route")
const SessionRotuer = require("./admin/session.route")
const AdminCategoriesRouter = require("./admin/categories.route")
const AdminProductsRouter = require("./admin/products.route")
const AdminOrderRouter = require("./admin/orders.route")
const AjaxRouter = require("./ajax.route")


function route(app) {
  app.use("/", HomeRouter)
  app.use("/products", ProductsRouter)
  app.use("/about_us", AboutUsRouter)
  app.use("/checkouts", CheckoutRouter)

  app.use("/admin", SessionRotuer)
  app.use("/admin/categories", AdminCategoriesRouter)
  app.use("/admin/products", AdminProductsRouter)
  app.use("/admin/orders", AdminOrderRouter)

  app.use("/ajax", AjaxRouter)
}

module.exports = route