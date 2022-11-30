import express from "express";

const router = express.Router();

import ProductsController from "../../controllers/admin/products_controller.js"

router.get('/', ProductsController.index)
router.get('/new', ProductsController.new)


export default router