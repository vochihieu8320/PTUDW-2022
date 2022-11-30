const express = require("express")
const router = express.Router()

const ProductsController = require("../controllers/products.controller")

router.get('/', ProductsController.index)
router.get("/:id", ProductsController.show )

module.exports = router