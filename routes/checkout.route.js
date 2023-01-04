const express = require("express")

const router = express.Router();

const CheckoutController = require("../controllers/checkout.controller")

router.get('/', CheckoutController.index)
router.post('/', CheckoutController.create)

module.exports = router