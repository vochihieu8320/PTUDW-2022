const express = require("express")

const router = express.Router();

const ProductsController = require("../../controllers/admin/products_controller")

router.get('/', ProductsController.index)
router.get('/new', ProductsController.new)

module.exports = router