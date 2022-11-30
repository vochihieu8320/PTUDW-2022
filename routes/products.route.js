import express from "express"
const router = express.Router()

import ProductsController from "../controllers/products.controller.js";

router.get('/', ProductsController.index)
router.get("/:id", ProductsController.show )

export default router