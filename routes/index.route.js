import HomeRouter from "./home.route.js"
import ProductsRouter from "./products.route.js"
import AboutUsRouter from "./about_us.route.js"
import CheckoutRouter from "./checkout.route.js"
import SessionRotuer from "./admin/session.route.js"
import AdminCategoriesRouter from "./admin/categories.route.js"
import AdminProductsRouter from "./admin/products.route.js"
import AdminOrderRouter from "./admin/orders.route.js"

function route(app) {
  app.use("/", HomeRouter)
  app.use("/products", ProductsRouter)
  app.use("/about_us", AboutUsRouter)
  app.use("/checkouts", CheckoutRouter)

  app.use("/admin", SessionRotuer)
  app.use("/admin/categories", AdminCategoriesRouter)
  app.use("/admin/products", AdminProductsRouter)
  app.use("/admin/orders", AdminOrderRouter)
}

export default route