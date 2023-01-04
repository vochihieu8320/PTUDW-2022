const express = require('express')
const router = express.Router();

const AjaxController = require("../controllers/ajax.controller")

router.get('/products', AjaxController.products);
router.get('/categories', AjaxController.categories);
router.get('/add_to_cart', AjaxController.addToCart);

module.exports = router