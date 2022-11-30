import express from "express";

const router = express.Router();

import CategoriesController from "../../controllers/admin/categories_controller.js"

router.get('/', CategoriesController.index)
router.get('/new', CategoriesController.new)


export default router