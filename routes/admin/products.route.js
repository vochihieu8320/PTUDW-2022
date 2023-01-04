const express = require("express")

const router = express.Router();

const ProductsController = require("../../controllers/admin/products_controller")

router.get('/', ProductsController.index)
router.post("/", ProductsController.create)

router.get('/new', ProductsController.new)

module.exports = router