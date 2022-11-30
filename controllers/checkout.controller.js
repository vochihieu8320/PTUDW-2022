class CheckoutController {
  async index(req, res) {
    res.render("checkout/index", { layout: "./layouts/customers" })
  }
}

export default new CheckoutController