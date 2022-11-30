const express = require("express")

const router = express.Router();

const CheckoutController = require("../controllers/checkout.controller")

router.get('/', CheckoutController.index)

module.exports = router