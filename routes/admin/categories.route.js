const express = require("express")

const router = express.Router();

const CategoriesController = require("../../controllers/admin/categories_controller")

router.get('/', CategoriesController.index)
router.get('/new', CategoriesController.new)

router.post('/', CategoriesController.create)

module.exports = router