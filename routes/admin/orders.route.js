const express = require("express");

const router = express.Router();

const OrdersController = require("../../controllers/admin/orders_controller");

router.get('/', OrdersController.index)
router.get('/:id', OrdersController.show)

module.exports = router