const HomeRouter = require("./home.route")
const ProductsRouter = require("./products.route")
const AboutUsRouter = require("./about_us.route")
const CheckoutRouter = require("./checkout.route")
const SessionRotuer = require("./admin/session.route")
const AdminCategoriesRouter = require("./admin/categories.route")
const AdminProductsRouter = require("./admin/products.route")
const AdminOrderRouter = require("./admin/orders.route")
const AjaxRouter = require("./ajax.route");
const UploaderRouter = require("./upload.route")

const SessionController = require("../controllers/admin/session_controller")

function route(app, passport) {
  app.use("/", HomeRouter)
  app.use("/products", ProductsRouter)
  app.use("/about_us", AboutUsRouter)
  app.use("/checkouts", CheckoutRouter)

  app.use("/admin/categories", authenticate, AdminCategoriesRouter)
  app.use("/admin/products", authenticate, AdminProductsRouter)
  app.use("/admin/orders", authenticate, AdminOrderRouter)

  app.use("/ajax", AjaxRouter)

  app.use("/upload", UploaderRouter)

  // custom routes

  app.get('/login', isUnauthenticate, SessionController.login)

  app.get('/register', isUnauthenticate, SessionController.register)

  app.post("/register", SessionController.register_create)

  app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }

      if(info) {
        return res.render("admin/login", { layout: "./layouts/admin", message: info.message })
      }

      if (!user) {
        return res.render("admin/login", { layout: "./layouts/admin", message: info.message })
      }

      req.login(user, (err) => {
        if (err) { return next(err); }

        return res.redirect('/admin/categories');
      })
    })(req, res, next);
  })

  function authenticate(req, res, next) {
    if(req.session.passport) {
      next()
    }
    else {
      res.redirect('/login')
    }
  }

  function isUnauthenticate(req, res, next) {
    if(!req.session.passport) {
      next();
    }
    else {
      return res.redirect(req.session.current_url)
    }
  }
}

module.exports = route