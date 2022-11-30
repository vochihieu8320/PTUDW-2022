import express from "express";

const router = express.Router();

import OrdersController from "../../controllers/admin/orders_controller.js"

router.get('/', OrdersController.index)
router.get('/:id', OrdersController.show)


export default router