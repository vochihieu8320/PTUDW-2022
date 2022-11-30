import express from "express";

const router = express.Router();

import CheckoutController from "../controllers/checkout.controller.js"

router.get('/', CheckoutController.index)

export default router